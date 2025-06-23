// src/components/AnswerChoice.jsx
import React, { useState, useEffect } from 'react'; // Import both useState and useEffect
import './AnswerChoice.css';

// You can use simple text for icons or import SVGs
// import { FaRegCheckCircle, FaRegTimesCircle, FaQuestionCircle, FaPlus, FaMinus } from 'react-icons/fa'; // Example using react-icons

function AnswerChoice({ choice, status, onAction, disabled, showConnotationTag, isRevealed }) {
  // userSelectionCorrectness prop was in previous discussions but not in your current function signature,
  // if you plan to use it for more specific revealed styling, you'd add it to the props.

  const handleKeep = () => {
    if (!disabled) {
      onAction('keep');
    }
  };

  const handleEliminate = () => {
    if (!disabled) {
      onAction('eliminate');
    }
  };

  let statusClass = '';
  if (isRevealed) {
    if (choice.isCorrect) {
      statusClass = status === 'eliminated' ? 'revealed-incorrect-elimination' : 'revealed-correct';
    } else { // Choice is incorrect
      statusClass = status === 'eliminated' ? 'revealed-correct-elimination' : 'revealed-incorrect-keep';
    }
  } else {
    if (status === 'kept') statusClass = 'kept';
    if (status === 'eliminated') statusClass = 'eliminated'; // This class will apply after any animation
  }

  const getConnotationClass = (connotation) => {
    if (!connotation || typeof connotation !== 'string') return '';
    return `connotation-${connotation.toLowerCase()}`;
  };

  // State and effect for the "eliminating" animation class
  const [isEliminating, setIsEliminating] = useState(false);

  useEffect(() => {
    // This effect will trigger the animation when the status changes to 'eliminated'
    // and then remove the animating class after the animation duration.
    // Note: Ensure your CSS animation for '.eliminating' is 0.5s (500ms)
    // or adjust the timeout accordingly.
    let timer;
    if (status === 'eliminated') {
      setIsEliminating(true); // Add class to start animation
      timer = setTimeout(() => {
        setIsEliminating(false); // Remove class after animation, final .eliminated styles take over
      }, 500); // Duration of the animation
    }
    return () => clearTimeout(timer); // Cleanup timer on unmount or if status changes again
  }, [status]); // Rerun effect if status changes

  return (
    // Add the 'eliminating' class for animation if isEliminating is true
    <div className={`answer-choice ${statusClass} ${disabled ? 'disabled' : ''} ${isEliminating ? 'eliminating' : ''}`}>
      <div className="choice-text-wrapper">
        <span className="choice-text">{choice.text}</span>
        {/* CORRECTED: Use showConnotationTag here */}
        {showConnotationTag && choice.connotation && (
          <span className={`connotation-tag ${getConnotationClass(choice.connotation)}`}>
            {choice.connotation}
          </span>
        )}
      </div>

      {!isRevealed && (
        <div className="action-buttons">
          <button
            onClick={handleKeep}
            className="action-button keep-button"
            disabled={disabled || status === 'kept'}
            aria-label={`Keep answer choice ${choice.text}`}
          >
            Keep
          </button>
          <button
            onClick={handleEliminate}
            className="action-button eliminate-button"
            disabled={disabled || status === 'eliminated'}
            aria-label={`Eliminate answer choice ${choice.text}`}
          >
            Eliminate
          </button>
        </div>
      )}

      {isRevealed && (
        <div className="reveal-indicator">
          {choice.isCorrect && (status !== 'eliminated') && <span className="indicator-correct">✓ Correct Answer</span>}
          {choice.isCorrect && (status === 'eliminated') && <span className="indicator-error">✗ Mistake: Was a Correct Answer</span>}
          {!choice.isCorrect && (status === 'eliminated') && <span className="indicator-correct-elim">✓ Correctly Eliminated</span>}
          {!choice.isCorrect && (status !== 'eliminated' && status !== 'undecided') && <span className="indicator-error">✗ Mistake: Kept Wrong Answer</span>}
          {!choice.isCorrect && (status === 'undecided') && <span className="indicator-missed">● Missed Elimination</span>}
        </div>
      )}
    </div>
  );
}

export default AnswerChoice;