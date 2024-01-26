// components/IdentityPage.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import IdentityForm from './identityForm';
import './css/identity.css';
import './css/backbutton.css';
import { ethers } from 'ethers';
import config from '../config';

Modal.setAppElement('#root'); // Set the root element for the modal

const rpcUrl = 'https://rpc2.sepolia.org';
const provider = new ethers.JsonRpcProvider(rpcUrl);
const contract = new ethers.Contract(config.contractAddress, config.contractAbi, provider);



const IdentityPage = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [identitiyCard, setIdentities] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const fetchData = async () => {
    let idCount = await contract.getTotalId();
    idCount = parseInt(idCount)
    let identitiesArray = [];
    for (let index = idCount-1; index >=0 ; index--) {
      let identity = await contract.getIdentityCard(index);
      identitiesArray.push({
        name: identity.name,
        age: parseInt(identity.age),
        city: identity.city,
        verified: identity.verified,
        verificationCode: parseInt(identity.verificationCode),
        generator: identity.generator,
        blockNo: parseInt(identity.blockNo)
      });
    }
    setIdentities(identitiesArray);
    setTotalCount(idCount);
  }

  console.log(identitiyCard)
  return (
    <div className="identity-page-container">
      <Link to={`${config.base}/`}><button className="back-button" >
        Back
      </button></Link>
      <h1>Ethereum Explorer - Identity Page</h1>
      <button className="open-form-btn" onClick={handleOpenModal}>
        Add New Identity
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Add New Identity"
        className="modal"
        overlayClassName="overlay"
      >
        <button className="close-btn" onClick={handleCloseModal}>
          Close
        </button>
        <IdentityForm onCloseForm={handleCloseModal} />
      </Modal>

      <div className="identity-list-container">
      <p>Note: Anyone can create there identity card and can get verification by admin for authenticity</p>
        <h2>Identity List</h2>
        <ul className="identity-list">
        {identitiyCard.length === 0 ? (<>
          <br></br>
    <p>Fetching data...</p>
    <br></br>
    </>
  ) : (
          identitiyCard.map((identity, index) => (
            <li key={index}>
              <span>Name: {identity.name}</span>
              <span>Age: {identity.age}</span>
              <span>Address: {identity.city}</span>
              <span>
                Verified: <span style={{ color: identity.verified ? 'green' : 'red' }}>{identity.verified ? 'Yes' : 'No'}</span>
              </span>
              <span>Verification ID: {identity.verificationCode}</span>
              <span>Generator: {identity.generator}</span>
              <span>Block Number: {identity.blockNo}</span>
            </li>
          ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default IdentityPage;
