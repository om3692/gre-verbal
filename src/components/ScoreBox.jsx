// src/components/ScoreBox.jsx
import React from 'react';
import './ScoreBox.css'; // Create this CSS file for styling

function ScoreBox({ score }) {
  // Optional: State for animation on score change
  const [prevScore, setPrevScore] = React.useState(score);
  const [scoreChangeClass, setScoreChangeClass] = React.useState('');

  React.useEffect(() => {
    if (score > prevScore) {
      setScoreChangeClass('score-increase');
    } else if (score < prevScore) {
      setScoreChangeClass('score-decrease');
    }
    // Reset animation class after a short delay
    const timer = setTimeout(() => setScoreChangeClass(''), 500);
    setPrevScore(score); // Update previous score
    return () => clearTimeout(timer);
  }, [score, prevScore]);

  return (
    <div className={`score-box ${scoreChangeClass}`}>
      <span className="score-label">Score:</span>
      <span className="score-value">{score}</span>
    </div>
  );
}

export default ScoreBox;