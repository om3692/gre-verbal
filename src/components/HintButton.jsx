// src/components/HintButton.jsx
import React from 'react';
import './HintButton.css'; // Create this CSS file
// Example: Using a simple emoji or you can import an SVG icon
// import { FaLightbulb } from 'react-icons/fa';

function HintButton({ onUseHint, disabled, hintCost, hintsRemaining, maxHints }) {
  const showHintCount = typeof hintsRemaining === 'number' && typeof maxHints === 'number';

  return (
    <button
      className="hint-button"
      onClick={onUseHint}
      disabled={disabled || (showHintCount && hintsRemaining <= 0)}
      aria-label={`Use hint${hintCost ? ` (costs ${hintCost} points)` : ''}${showHintCount ? `, ${hintsRemaining} of ${maxHints} available` : ''}`}
    >
      <span role="img" aria-label="Hint icon" className="hint-icon">💡</span>
      {/* <FaLightbulb className="hint-icon" /> */}
      <span className="hint-text">Hint</span>
      {hintCost > 0 && <span className="hint-cost">(-{hintCost} pts)</span>}
      {showHintCount && (
        <span className="hints-remaining-count">
          ({hintsRemaining}/{maxHints})
        </span>
      )}
    </button>
  );
}

export default HintButton;