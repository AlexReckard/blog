import React from 'react';
import { Link } from 'gatsby';
import './header.css';  

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-logo-container">
        <Link to="/" className="header-logo">
          <h1>FOR THE RECKARD.</h1>
        </Link>
      </div>
      <nav className="header-nav-container">
        <ul className="header-nav-items">
          <li className="header-nav-item active"><Link to="/">home</Link></li>
          <li className="header-nav-item"><Link to="/tech">tech</Link></li>
          <li className="header-nav-item"><Link to="/food">food</Link></li>
          <li className="header-nav-item"><Link to="/travel">travel</Link></li>
          <li className="header-nav-item"><Link to="/design">design</Link></li>
          <li className="header-nav-item"><Link to="/shopping">shopping</Link></li>
        </ul>
        <div className="header-utility-container">
          <button aria-label="Close menu" className="close-menu"><i className="fas fa-times"></i></button>
          <button aria-label="hamburger menu" className="hamburger-menu"><i className="fas fa-bars"></i></button>
          <button aria-label="Search" className="header-search"><i className="fas fa-search"></i></button>
          <button aria-label="Change theme" className="header-theme"><i className="fas fa-moon"></i></button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
