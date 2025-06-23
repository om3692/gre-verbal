// src/components/ConnotationChallenge.jsx
import React, { useState } from 'react';
import './ConnotationChallenge.css'; // Create this CSS file

function ConnotationChallenge({ challenge, onComplete }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [scoreEarned, setScoreEarned] = useState(0);

  const { contextSentence, targetWord, options, correctConnotation, points } = challenge;

  // Function to highlight the target word in the context sentence
  const highlightTarget = (sentence, target) => {
    if (!sentence || !target) return sentence;
    // A simple replace, might need more robust regex for case-insensitivity or partial matches
    const parts = sentence.split(new RegExp(`(<span class="math-inline">\{target\.replace\(/\[\.\*\+?^</span>{}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === target.toLowerCase() ? <strong key={index} className="highlighted-word">{part}</strong> : part
    );
  };


  const handleOptionSelect = (option) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);
    let currentScore = 0;

    if (option.toLowerCase() === correctConnotation.toLowerCase()) {
      currentScore = points || 5; // Default points if not specified
      setFeedbackMessage(`Correct! The connotation is <span class="math-inline">\{correctConnotation\}\. \+</span>{currentScore} points!`);
      setScoreEarned(currentScore);
    } else {
      setFeedbackMessage(`Not quite. The correct connotation was <span class="math-inline">\{correctConnotation\}\. The word was "</span>{targetWord}".`);
      setScoreEarned(0); // Or a small penalty if you decide
    }
  };

  const handleContinue = () => {
    onComplete(scoreEarned);
  };

  return (
    <div className="connotation-challenge-overlay">
      <div className="connotation-challenge-card">
        <h3 className="challenge-title">✨ Connotation Challenge! ✨</h3>
        {contextSentence && (
          <p className="challenge-context-sentence">
            Consider the context: "<em>{highlightTarget(contextSentence, targetWord)}</em>"
          </p>
        )}
        <p className="challenge-question">
          What is the required connotation for "<strong>{targetWord}</strong>" here?
        </p>

        <div className="options-container">
          {options.map((option) => (
            <button
              key={option}
              className={`connotation-option-button connotation-${option.toLowerCase()} ${
                selectedOption === option ? 'selected' : ''
              } ${isAnswered && option.toLowerCase() === correctConnotation.toLowerCase() ? 'correct' : ''}
              ${isAnswered && selectedOption === option && option.toLowerCase() !== correctConnotation.toLowerCase() ? 'incorrect' : ''}`}
              onClick={() => handleOptionSelect(option)}
              disabled={isAnswered}
            >
              {option}
            </button>
          ))}
        </div>

        {isAnswered && (
          <div className="challenge-feedback">
            <p>{feedbackMessage}</p>
            <button onClick={handleContinue} className="continue-button cta-button">
              Continue to Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConnotationChallenge;