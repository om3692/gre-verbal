// src/components/FeedbackBox.jsx
import React, { useEffect, useState } from 'react';
import './FeedbackBox.css'; // Create this CSS file

// Example icons (or use SVGs/react-icons)
const ICONS = {
  success: '✔', // Checkmark
  error: '✖',   // Cross
  info: 'ℹ',    // Info
  warning: '⚠'  // Warning
};

function FeedbackBox({ type, message }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      // Optional: Auto-hide certain types of messages after a delay
      // This logic might be better handled in Gameplay.jsx if feedback duration varies greatly
      // For example:
      // if (type === 'info' || type === 'success') {
      //   const timer = setTimeout(() => {
      //     setIsVisible(false);
      //     // Consider calling a function passed via props to clear the message in parent state
      //   }, 4000); // Hide after 4 seconds
      //   return () => clearTimeout(timer);
      // }
    } else {
      setIsVisible(false);
    }
  }, [message, type]); // Re-run effect when message or type changes

  if (!isVisible || !message) {
    return null; // Don't render if no message or not visible
  }

  const icon = ICONS[type] || ICONS['info']; // Default to info icon

  return (
    <div className={`feedback-box feedback-${type} ${isVisible ? 'visible' : ''}`}>
      <span className="feedback-icon" aria-hidden="true">{icon}</span>
      <p className="feedback-message">{message}</p>
      {/* Optional close button if you want manual dismissal for some messages
      <button className="feedback-close-btn" onClick={() => setIsVisible(false)}>&times;</button>
      */}
    </div>
  );
}

export default FeedbackBox;