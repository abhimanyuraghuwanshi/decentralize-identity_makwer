import config from '../config';
import './css/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="info">
          <p>Created by: Abhimanyu Raghuwanshi</p>
          <p>
            Contract Address: 
            <a href={`https://sepolia.etherscan.io/address/${config.contractAddress}`} target="_blank" rel="noopener noreferrer">
              {config.contractAddress}
            </a>
          </p>
        </div>
        <div className="email">
          <p>Contact us at: <a href="mailto:abhimanyuraghuwanshi305@email.com">abhimanyuraghuwanshi305@email.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
