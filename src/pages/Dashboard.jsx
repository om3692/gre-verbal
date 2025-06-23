// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Create this CSS file
// import SummaryStats from '../components/SummaryStats'; // Could be reused for overall stats
// import { FaTrophy, FaChartBar, FaPlayCircle, FaTasks } from 'react-icons/fa'; // Example icons

// Placeholder data - in a real app, this would come from user state, API, etc.
const userData = {
  username: 'Strategist123',
  overallScore: 12750,
  poeAccuracy: 85, // Process of Elimination accuracy
  finalAnswerAccuracy: 78,
  levelsCompleted: 5,
  totalLevels: 20, // Example total
  lastPlayedLevel: '2',
  achievements: [
    { id: 'ach1', name: 'Eliminator Apprentice', icon: '🛡️', description: '100 correct eliminations' },
    { id: 'ach2', name: 'Connotation Cadet', icon: '💡', description: '50 correct connotation tags' },
    { id: 'ach3', name: 'TC Starter', icon: '✍️', description: 'Completed 3 TC levels' },
  ],
  recommendedFocus: {
    area: 'Sentence Equivalence - Connotation',
    reason: 'Practice identifying subtle connotation links in SE.',
    link: '/play/level/se-connotation-focus' // Example link
  }
};

function Dashboard() {
  const progressPercent = (userData.levelsCompleted / userData.totalLevels) * 100;

  return (
    <div className="dashboard-page container">
      <header className="dashboard-header">
        <h1>Welcome back, {userData.username}!</h1>
        <p>Here's how your GRE Verbal strategy is shaping up.</p>
      </header>

      <section className="dashboard-main-grid">
        {/* Key Stats Card */}
        <div className="dashboard-card key-stats-card">
          <h2 className="card-title">
            {/* <FaChartBar className="card-icon" />  */}
            📊 Your Stats
          </h2>
          <div className="stat-item">
            <span>Overall Score:</span>
            <span className="stat-value score-value">{userData.overallScore} pts</span>
          </div>
          <div className="stat-item">
            <span>PoE Accuracy:</span>
            <span className="stat-value">{userData.poeAccuracy}%</span>
          </div>
          <div className="stat-item">
            <span>Final Answer Accuracy:</span>
            <span className="stat-value">{userData.finalAnswerAccuracy}%</span>
          </div>
          <div className="stat-item">
            <span>Overall Progress:</span>
            <div className="dashboard-progress-bar-container">
              <div className="dashboard-progress-bar-track">
                <div
                  className="dashboard-progress-bar-fill"
                  style={{ width: `${progressPercent}%` }}
                >
                  {progressPercent.toFixed(0)}%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action / Resume Card */}
        <div className="dashboard-card cta-card">
          <h2 className="card-title">
            {/* <FaPlayCircle className="card-icon" />  */}
            ▶️ Jump Back In
          </h2>
          {userData.lastPlayedLevel ? (
            <Link to={`/play/${userData.lastPlayedLevel}`} className="cta-button dashboard-cta">
              Resume Level {userData.lastPlayedLevel}
            </Link>
          ) : (
            <Link to="/play/1" className="cta-button dashboard-cta"> {/* Or to a level select page */}
              Start Level 1
            </Link>
          )}
          <Link to="/levels" className="cta-button dashboard-cta secondary"> {/* Assuming a /levels page for selection */}
            Browse All Levels
          </Link>
        </div>

        {/* Achievements Card */}
        <div className="dashboard-card achievements-card">
          <h2 className="card-title">
            {/* <FaTrophy className="card-icon" />  */}
            🏆 Achievements
          </h2>
          {userData.achievements.length > 0 ? (
            <ul className="achievements-list">
              {userData.achievements.slice(0, 3).map(ach => ( // Show first 3, for example
                <li key={ach.id} className="achievement-item" title={ach.description}>
                  <span className="achievement-icon">{ach.icon}</span>
                  <span className="achievement-name">{ach.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Keep playing to unlock achievements!</p>
          )}
          {userData.achievements.length > 3 && (
              <Link to="/profile/achievements" className="view-all-link">View All</Link>
          )}
        </div>

        {/* Recommended Focus Card (More advanced feature) */}
        {userData.recommendedFocus && (
          <div className="dashboard-card focus-card">
            <h2 className="card-title">
              {/* <FaTasks className="card-icon" />  */}
              🎯 Recommended Focus
            </h2>
            <p className="focus-area">{userData.recommendedFocus.area}</p>
            <p className="focus-reason">{userData.recommendedFocus.reason}</p>
            <Link to={userData.recommendedFocus.link} className="cta-button dashboard-cta tertiary">
              Practice Now
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

export default Dashboard;