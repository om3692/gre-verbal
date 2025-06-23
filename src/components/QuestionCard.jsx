// src/components/QuestionCard.jsx
import React from 'react';
import './QuestionCard.css'; // Create this CSS file for styling

// Helper function to render the passage with styled blanks
const renderPassageWithBlanks = (passage, questionType) => {
  if (!passage) return null;

  // For multiple blanks, you might use specific markers like __BLANK1__, __BLANK2__
  // This basic example replaces a generic __BLANK__
  // For SE, the blank might be more conceptual and not need aggressive styling in the passage itself.
  let blankCounter = 0;
  const parts = passage.split(/(__BLANK1__|__BLANK2__|__BLANK3__|__BLANK__)/g);

  return parts.map((part, index) => {
    if (part.startsWith('__BLANK')) {
      blankCounter++;
      // For TC with multiple blanks, you might want to number them
      const blankLabel = (questionType === 'TC2' || questionType === 'TC3') ? `(blank ${blankCounter})` : '';
      return (
        <span key={index} className="blank-placeholder">
          {`__________ ${blankLabel}`}
        </span>
      );
    }
    return part;
  });
};


function QuestionCard({ passage, questionText, questionType }) {
  let typeDisplay = '';
  if (questionType) {
    if (questionType.startsWith('TC')) {
      const blankCount = questionType.substring(2);
      typeDisplay = `Text Completion (${blankCount}-Blank)`;
    } else if (questionType === 'SE') {
      typeDisplay = 'Sentence Equivalence';
    } else {
        typeDisplay = questionType; // Fallback if more types added
    }
  }


  return (
    <div className="question-card">
      {typeDisplay && <div className="question-type-badge">{typeDisplay}</div>}
      {passage && (
        <div className="passage-text">
          {renderPassageWithBlanks(passage, questionType)}
        </div>
      )}
      {questionText && (
        <div className="question-stem">
          <p>{questionText}</p>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;