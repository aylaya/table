import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-column">
          <h3>Do you have any question?</h3>
          <input type="text" placeholder="ask your question" />
          <button>Send</button>
          <p>info@ayla.com, All rights reserved.</p>
        </div>
        <div className="footer-column">
          <div className="footer-links">
            <ul>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Privet policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-links">
           
            <img src="https://static.vecteezy.com/system/resources/thumbnails/003/600/947/small_2x/set-of-social-media-icon-in-round-bakground-free-vector.jpg" alt="logo" width={350} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
