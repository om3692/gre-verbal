// src/components/InlineConnotationSelector.jsx
import React, { useState } from 'react';
import './InlineConnotationSelector.css';

function InlineConnotationSelector({ challengeData, onConnotationSelected, disabled }) {
  const [selected, setSelected] = useState(null);

  if (!challengeData) return null;

  const { targetWord, options, points } = challengeData;

  const handleSelect = (option) => {
    if (disabled || selected) return; // Allow selection only once
    setSelected(option);
    onConnotationSelected(option, points); // Pass back the selection and potential points
  };

  return (
    <div className={`inline-connotation-selector ${disabled || selected ? 'answered' : ''}`}>
      <p className="selector-question">
        The word "<strong>{targetWord}</strong>" (or the blank) requires a:
      </p>
      <div className="selector-options">
        {options.map(option => (
          <button
            key={option}
            className={`selector-option-button connotation-${option.toLowerCase()} ${selected === option ? 'selected' : ''}`}
            onClick={() => handleSelect(option)}
            disabled={disabled || selected}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default InlineConnotationSelector;