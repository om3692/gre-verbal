// src/pages/Summary.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import SummaryStats from '../components/SummaryStats.jsx';
import './Summary.css';
// Example icons (you can use actual SVGs or an icon library like react-icons)
// import { FaArrowRight, FaRedo, FaThLarge, FaChartBar, FaLightbulb, FaBan, FaStar, FaQuestion, FaBullseye, FaBolt } from 'react-icons/fa';

// Helper function to get session data
const getSessionDataFromState = (sessionId, locationState) => {
  // Prioritize data passed via route state
  if (locationState && locationState.sessionData) {
    // console.log("Session data from location state:", locationState.sessionData);
    return locationState.sessionData;
  }

  // Fallback: If no data from state, you might fetch it or use a default/error state.
  // For now, returning a placeholder structure if no data is passed.
  // In a real app, you'd handle this more robustly (e.g., redirect or show error).
  // console.warn("No session data found in location state for sessionId:", sessionId, "Using placeholder.");
  return {
    levelId: sessionId || 'Unknown',
    levelName: `Level ${sessionId || 'Unknown'}`,
    scoreEarned: 0, // Default to 0 if undefined
    totalQuestionsInLevel: 0,
    correctlyAnswered: 0,
    poeEffectiveness: 0, // Ensure this is calculated and passed from Gameplay.jsx
    correctEliminations: 0,
    connotationChallengesWon: 0,
    hintsUsed: 0,
  };
};

function Summary() {
  const { sessionId } = useParams();
  const location = useLocation();
  const [sessionData, setSessionData] = useState(null);

  useEffect(() => {
    const data = getSessionDataFromState(sessionId, location.state);
    setSessionData(data);
  }, [sessionId, location.state]);

  if (!sessionData) {
    return <div className="loading-summary container">Loading summary...</div>;
  }

  // Calculate derived stats safely
  const accuracy = sessionData.totalQuestionsInLevel > 0
    ? ((sessionData.correctlyAnswered / sessionData.totalQuestionsInLevel) * 100).toFixed(0)
    : 0;

  // Correctly format stats for the SummaryStats component
  // Ensure all values passed to 'value' are strings or numbers, not undefined.
  const statsForDisplay = [
    { id: 's1', label: 'Score This Session', value: `${sessionData.scoreEarned || 0}`, unit: 'pts', icon: '⭐' /* <FaStar/> */ },
    { id: 's2', label: 'Questions Answered', value: `${sessionData.correctlyAnswered || 0} / ${sessionData.totalQuestionsInLevel || 0}`, icon: '❓' /* <FaQuestion/> */ },
    { id: 's3', label: 'Final Answer Accuracy', value: `${accuracy}`, unit: '%', icon: '🎯' /* <FaBullseye/> */ },
    { id: 's4', label: 'PoE Effectiveness', value: `${sessionData.poeEffectiveness || 0}`, unit: '%', icon: '🧐' /* <FaChartBar/> */ }, // Make sure this is calculated
    { id: 's5', label: 'Correct Eliminations', value: `${sessionData.correctEliminations || 0}`, icon: '🗑️' /* <FaBan/> */ },
    { id: 's6', label: 'Connotation Wins', value: `${sessionData.connotationChallengesWon || 0}`, icon: '💡' /* <FaLightbulb/> */ },
    { id: 's7', label: 'Hints Used', value: `${sessionData.hintsUsed || 0}`, icon: '🆘' /* <FaBolt/> */ },
  ];

  // Determine next level (simple increment for now, can be more complex)
  const currentLevelNum = parseInt(sessionData.levelId, 10);
  const nextLevelId = !isNaN(currentLevelNum) ? currentLevelNum + 1 : null;
  // You might want a max level check here: const MAX_LEVEL = 20; if (nextLevelId > MAX_LEVEL) nextLevelId = null;

  return (
    <div className="summary-page container">
      <header className="summary-header">
        <h1>Session Complete!</h1>
        <p>Fantastic effort on: <strong>{sessionData.levelName || `Level ${sessionData.levelId}`}</strong></p>
      </header>

      <SummaryStats stats={statsForDisplay} title="Your Performance This Session" />

      {/* Optional: Detailed Question Review Section (Future Enhancement) */}
      {/*
      <section className="question-review-section card-style">
        <h4>Deep Dive Review</h4>
        <p>Go through the questions from this session to solidify your learning and pinpoint improvement areas.</p>
        <Link to={`/review/${sessionId}`} className="cta-button review-cta">
          Review Questions & Explanations
        </Link>
      </section>
      */}

      <section className="summary-actions card-style">
        <h3 className="actions-title">What's Your Next Move?</h3>
        <div className="action-buttons-grid">
          {nextLevelId && (
            <Link to={`/play/${nextLevelId}`} className="cta-button summary-cta next-level-cta animated-button">
              {/* <FaArrowRight /> */}
              <span>🚀 Play Next Level ({nextLevelId})</span>
            </Link>
          )}
          <Link to={`/play/${sessionData.levelId}`} className="cta-button summary-cta retry-cta animated-button">
            {/* <FaRedo /> */}
            <span>🔄 Retry Level {sessionData.levelId}</span>
          </Link>
          <Link to="/dashboard" className="cta-button summary-cta dashboard-cta animated-button">
            {/* <FaThLarge /> */}
            <span>📊 Back to Dashboard</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Summary;