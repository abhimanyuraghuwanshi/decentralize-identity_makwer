import './css/home.css';
import { Link } from 'react-router-dom';
import config from '../config'

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="animated-heading">Decentralized <span>Identity Generator</span></h1>
        <h3>Generate your identity on the blockchain securely and trustfully.</h3>
      </header>
      <section className="main-content">
        <div className="buttons-container">
        <Link to={`${config.base}/identity`}> <button className="btn">Get Started</button> </Link>
        <Link to={`${config.base}/upcoming`}> <button className="btn">Future Updates</button></Link>
        </div>
        <div className='textbox'>
        <p>
          Welcome to the colorful world of the Decentralized Identity Generator platform. Here, you can create your unique identity on the blockchain, ensuring security and trust in every step. The process is simple, yet powerful, using the latest blockchain technology to safeguard your identity data.
          Join us on this journey of empowerment and self-sovereignty. Your decentralized identity can be verified seamlessly by administrators, offering a reliable and secure environment for you to assert your online presence. The platform guarantees the integrity and immutability of your identity data, making it tamper-proof and resistant to unauthorized modifications.
        <br></br>
          Our mission is to revolutionize the way identities are generated and verified on the blockchain. With a commitment to transparency and user-centric design, we strive to provide a seamless and enjoyable experience. Say goodbye to traditional, centralized identity systems, and embrace the future of decentralized identity management.
          The Decentralized Identity Generator is more than just a platform; it's a movement towards a future where individuals have complete control over their digital identities. As we continue to innovate, stay tuned for exciting updates and features. Our dedicated team is working tirelessly to enhance your experience and bring you cutting-edge advancements in decentralized identity technology.
        </p>
        <p>
          Get started today and be a part of the decentralized revolution. Experience the power of self-sovereign identity and take control of your online presence. Your identity, your rules!
        </p>
        </div>
        <br></br>
      </section>
    </div>
    
  );
};

export default Home;
