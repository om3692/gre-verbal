// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'; // Create this CSS file for styling

// Placeholder for your logo - replace with an actual <img> or SVG
import Logo from '../assets/logo.svg'; // Example if you have a logo.svg in assets

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // A simple score, you'll likely get this from context or state management later
  const userScore = 1250; // Example score

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="app-header">
      <div className="header-content container">
        <Link to="/" className="logo-link">
          {/* <img src={Logo} alt="GRE Verbal Strategist Logo" className="logo-image" /> */}
          <span className="logo-text">GRE Verbal Strategist</span>
        </Link>

        <button className="mobile-nav-toggle" onClick={toggleNav} aria-label="Toggle navigation">
          {/* Simple hamburger icon, can be replaced with an SVG icon */}
          <span className="hamburger-icon"></span>
        </button>

        <nav className={`main-nav ${isNavOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/dashboard" onClick={() => setIsNavOpen(false)}>Dashboard</NavLink></li>
            {/* This could link to a level select page or resume last game */}
            <li><NavLink to="/play/1" onClick={() => setIsNavOpen(false)}>Play</NavLink></li>
            <li><NavLink to="/profile" onClick={() => setIsNavOpen(false)}>Profile</NavLink></li>
            {/* Add more links as needed, e.g., Help, Leaderboard */}
          </ul>
          <div className="user-info-header">
            {/* Placeholder for user score/status */}
            <span>Score: {userScore}</span>
            {/* <Link to="/logout">Logout</Link> */}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;