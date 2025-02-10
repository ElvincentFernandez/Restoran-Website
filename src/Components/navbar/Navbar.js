import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import './navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/images/logo.png" alt="Bella Cucina Logo" className="logo" />
        <span className="logo-text">Bella Cucina</span>
      </div>
      <ul className="menu">
        {/* Apply animation on each li */}
        <motion.li
          initial={{ opacity: 0, y: -20 }} // Initial state (invisible and up)
          animate={{ opacity: 1, y: 0 }}    // Final state (visible and in position)
          transition={{ delay: 0.2, duration: 0.5 }}  // Delay and duration of the animation
        >
          <Link to="/" className="nav-link">Home</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link to="/menu" className="nav-link">Menu</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link to="/about-us" className="nav-link">About Us</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link to="/location" className="nav-link">Location</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link to="/gallery" className="nav-link">Gallery</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Link to="/contact" className="nav-link contact">Contact Us</Link>
        </motion.li>
      </ul>
    </nav>
  );
}

export default Navbar;
