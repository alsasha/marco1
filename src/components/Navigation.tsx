import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className={`nav-container ${isHomePage ? 'home-page' : ''}`}>
          <div className="nav-logo">
            <Link to="/">
              <img src="/logo_2.png" alt="brainoo" className="nav-logo-image" />
            </Link>
          </div>
        {/* Desktop Navigation */}
        <div className="nav-menu desktop-nav">
          <Link to="/about" className="nav-link">
            about
          </Link>
          <Link to="/events" className="nav-link">
            events
          </Link>
        </div>

        {/* Mobile Burger Menu */}
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className={`burger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`burger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`burger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>
          about
        </Link>
        <Link to="/events" className="mobile-nav-link" onClick={closeMenu}>
          events
        </Link>
        <Link to="/contact" className="mobile-nav-link" onClick={closeMenu}>
          contact
        </Link>
        <Link to="/press" className="mobile-nav-link" onClick={closeMenu}>
          press
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
