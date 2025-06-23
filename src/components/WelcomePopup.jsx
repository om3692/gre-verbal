// src/components/WelcomePopup.jsx
import React from 'react';
import './WelcomePopup.css';

function WelcomePopup({ message }) {
  return (
    <div className="welcome-popup-overlay">
      <div className="welcome-popup-card">
        <p>{message}</p>
        <div className="loading-dots">
          <span>.</span><span>.</span><span>.</span>
        </div>
      </div>
    </div>
  );
}

export default WelcomePopup;