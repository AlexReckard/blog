import React from 'react';
import { Link } from 'gatsby';
import './footer.css';  

const Footer = () => {
  return (
        <footer>
        <div className="footer-content-container">
            <div className="newsletter-container">
                <div className="newsletter-content">
                    <h2>SIGN UP TO OUR NEWSLETTER. COMPLETELY FREE, NO SRSLY.</h2>
                    <form action="ACTUAL_SUBSCRIBE_URL" method="post">
                        <input type="email" name="email" placeholder="EMAIL"/>
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                </div>
                <div className="newsletter-disclaimer">
                <p>By subscribing, you agree to the <span><Link to="/privacyTerms">Terms of Use</Link></span> and <span><Link to="/privacyTerms">Privacy Policy</Link></span> & consent to receive periodic updates and promotional content from For The Reckard via Mailchimp. You can unsubscribe at any time. </p>
                </div>
            </div>
            <div className="footer-links-container">
                <ul className="footer-link-items">
                    <li className="footer-link-item"><Link to="/#" aria-label="Home">home</Link></li>
                    <li className="footer-link-item"><Link to="/about" aria-label="About">about</Link></li>
                    <li className="footer-link-item"><Link to="/privacyTerms" aria-label="Privacy & terms">privacy & terms</Link></li>
                    <li className="footer-link-item"><Link to="/doNotSellInfo" aria-label="Do not sell my info">do not sell my info</Link></li>
                </ul>
            </div>
            <div className="footer-socials-container">
                <ul className="footer-social-items">
                    <li className="footer-social-item"><Link to="/#" aria-label="Visit our Facebook page">Facebook</Link></li>
                    <li className="footer-social-item"><Link to="/#" aria-label="Visit our Instagram page">Instagram</Link></li>
                    <li className="footer-social-item"><Link to="/#" aria-label="Visit our Twitter page">Twitter</Link></li>
                </ul>
            </div>
            <div className="footer-copyright-container">
                <div className='footer-copyright'>
                    <p>© 2023 For The Reckard. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
