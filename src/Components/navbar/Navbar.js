import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/images/logo.png" alt="Bella Cucina Logo" className="logo" />
        <span className="logo-text">Bella Cucina</span>
      </div>
      <ul className="menu">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/menu" className="nav-link">Menu</Link></li>
        <li><Link to="/about-us" className="nav-link">About Us</Link></li>
        <li><Link to="/location" className="nav-link">Location</Link></li>
        <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
        <li><Link to="/contact" className="nav-link contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
