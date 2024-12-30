import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/lionslogo.png'; // Logo utama
import logoumn from '../assets/logoumn.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // State to toggle hamburger menu visibility

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  // Effect to close menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobile(false); // Close the mobile menu
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Logo utama */}
      <a href="/" className="logo">
        <img src={logo} alt="UKM Badminton" className='logo-lions'/>
        <img src={logoumn} alt="Logo UMN" className='logo-umn'/>
      </a>

      {/* Navbar */}
      <nav className="navbar">
        <ul className={isMobile ? 'nav-links active' : 'nav-links'}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Gallery">Gallery</Link></li>
          <li><Link to="/Achievement">Achievement</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Schedule">Schedule</Link></li>
          <li><Link to="/News">News</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={isMobile ? 'line line1 active' : 'line line1'}></div>
          <div className={isMobile ? 'line line2 active' : 'line line2'}></div>
          <div className={isMobile ? 'line line3 active' : 'line line3'}></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
