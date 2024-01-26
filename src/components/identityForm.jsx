// components/IdentityForm.jsx
import React, { useState } from 'react';
import './css/identityForm.css';
import { ethers } from 'ethers';
import config from '../config';


async function generateIdentityCard(_name, _age, _address) {
  let signer = null;
  let provider;
  // Check if MetaMask is installed and connected
  if (window.ethereum == null) {
    alert('MetaMask not found! Please install MetaMask to use this application.');
    return;
  }

  // Check the chain ID
  const chainId = parseInt(window.ethereum.chainId);
  if (chainId !== 11155111) {
    alert('Please connect to Sepolia Testnet');
    return;
  }

  try {
    // If MetaMask is present and chain ID is correct, proceed with the transaction
    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
    const contract = new ethers.Contract(config.contractAddress, config.contractAbi, signer);
    let res = await contract.createIdentityCard(_name, parseInt(_age), _address);
    await res.wait();
    console.log(res);
  } catch (error) {
    alert('Error generating identity card');
  }
}


const IdentityForm = ({ onCloseForm }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setButtonDisabled(true);
    await generateIdentityCard(name,age,address)
    window.location.reload()
  };

  return (
    <div className="identity-form-container">
      <h2>Generate New Identity</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name:</label>
        <input
          type="input"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <button type="submit" disabled={isButtonDisabled}  style={{ backgroundColor: isButtonDisabled ? 'red' : 'green' }}>Submit</button>
      </form>
    </div>
  );
};

export default IdentityForm;
