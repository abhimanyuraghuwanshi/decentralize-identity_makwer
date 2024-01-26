import { Link } from 'react-router-dom';
import './css/backbutton.css';
import config from '../config';

const Upcoming = () => {
  return (
    <div style={{ height: '100vh', padding: '20px' }}>
       <Link to={`${config.base}/`}><button className="back-button" >
        Back
      </button></Link>
      <h1>Future Updates</h1>
      <p>
        We are excited to share the upcoming updates for our decentralized identity platform. This project serves as a demonstration of our skills in:
      </p>

      <h3>React.js + Vite for the Frontend:</h3> Our frontend is built using React.js, a powerful JavaScript library, and Vite, a fast build tool for modern web development. This combination ensures a smooth and efficient user interface.
      <br></br>
      <h3>Ether.js for Blockchain Connectivity:</h3> We leverage Ether.js to connect seamlessly with the blockchain, enabling secure and reliable interactions with our smart contract.
      <br></br>          <h3>Solidity for Smart Contract Development:</h3> The smart contract powering this decentralized identity platform is developed using Solidity, a programming language specifically designed for creating smart contracts on the Ethereum blockchain.
      <br></br>  <br></br> <br></br>  <br></br><hr></hr>
      <p>
        Our primary motive is to keep the project simple and easy to understand while showcasing the capabilities of these technologies. Stay tuned for updates as we continue to enhance the platform with new features and improvements!
      </p>
    </div>
  );
};

export default Upcoming;
