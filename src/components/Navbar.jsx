import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="nav-left">
          <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="logo-brand">
            Samarth Dhute
          </a>
          <div className="nav-status">
            <span className="status-dot"></span>
            <span className="status-text">Available for work</span>
          </div>
        </div>

        <div className={`nav-right ${mobileOpen ? 'mobile-open' : ''}`}>
          <motion.a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')} 
            className="nav-item-link"
            whileHover={{ opacity: 0.7 }}
            whileTap={{ scale: 0.97 }}
          >
            Download CV
          </motion.a>

          <motion.a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')} 
            className="nav-item-link"
            whileHover={{ opacity: 0.7 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me
          </motion.a>

          <span className="nav-item-time">IST</span>
        </div>

        <button 
          className="menu-toggle-btn" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? '✕' : 'Menu'}
        </button>
      </div>
    </nav>
  );
}
