import React, { useState } from 'react';
import { FaHome, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import '../styles.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1 className="navbar-title">FAVED</h1>
        <button className="navbar-toggle" onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li className="navbar-link">
          <FaHome />
          <a href="/">Inicio</a>
        </li>
        <li className="navbar-link">
          <a href="/instagram">
            <FaInstagram />
            Instagram
          </a>
        </li>
        <li className="navbar-link">
          <a href="/twitter">
            <FaTwitter />
            Twitter
          </a>
        </li>
        <li className="navbar-link">
          <a href="/tiktok">
            <FaTiktok />
            TikTok
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
