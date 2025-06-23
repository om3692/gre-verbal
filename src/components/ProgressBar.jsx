// src/components/ProgressBar.jsx
import React from 'react';
import './ProgressBar.css'; // Create this CSS file for styling

function ProgressBar({ progress, currentNum, totalNum }) {
  const percentage = Math.max(0, Math.min(100, progress || 0)); // Ensure percentage is between 0 and 100

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-info">
        <span>Level Progress</span>
        <span>Question {currentNum} of {totalNum}</span>
      </div>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label={`Progress: ${percentage}%`}
        >
        </div>
      </div>
      {/* <div className="progress-percentage">{percentage.toFixed(0)}%</div> */}
    </div>
  );
}

export default ProgressBar;