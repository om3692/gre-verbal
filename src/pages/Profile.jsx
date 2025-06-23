// src/pages/Profile.jsx
import React, { useState } from 'react';
import './Profile.css'; // Create this CSS file
import SummaryStats from '../components/SummaryStats.jsx'; // Reusable for stats
// import { FaUserCircle, FaChartLine, FaTrophy, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Example icons

// Placeholder data - in a real app, this would come from user state, API, etc.
const userProfileData = {
  username: 'Strategist123',
  email: 'strategist123@example.com', // Display only
  joinDate: '2024-01-15',
  overallStats: [
    { id: 'os1', label: 'Total Score Accumulated', value: '12750 pts', icon: '⭐' },
    { id: 'os2', label: 'Average PoE Accuracy', value: '85%', icon: '🎯' },
    { id: 'os3', label: 'Average Final Answer Accuracy', value: '78%', icon: '✔️' },
    { id: 'os4', label: 'Total Questions Practiced', value: '250', icon: '📚' },
    { id: 'os5', label: 'Total Time Played', value: '15h 30m', icon: '⏱️' },
    { id: 'os6', label: 'Levels Mastered (100%)', value: '3', icon: '🏆' },
  ],
  achievements: [ // All achievements, earned and possibly unearned
    { id: 'ach1', name: 'Eliminator Apprentice', description: '100 correct eliminations.', icon: '🛡️', earned: true, dateEarned: '2024-02-10' },
    { id: 'ach2', name: 'Connotation Cadet', description: '50 correct connotation tags.', icon: '💡', earned: true, dateEarned: '2024-02-20' },
    { id: 'ach3', name: 'TC Starter', description: 'Completed 3 TC levels.', icon: '✍️', earned: true, dateEarned: '2024-03-01' },
    { id: 'ach4', name: 'SE Strategist', description: 'Achieve 90% accuracy on a Sentence Equivalence level.', icon: '🤝', earned: false },
    { id: 'ach5', name: 'Perfect PoE Round', description: 'Correctly eliminate all wrong options in a complex question.', icon: '💯', earned: false },
    { id: 'ach6', name: 'Vocabulary Virtuoso', description: 'Master 100 high-frequency GRE words through questions.', icon: '📖', earned: false },
  ],
  // performanceOverTime: [ { date: '2024-01', accuracy: 70 }, { date: '2024-02', accuracy: 75 }, ... ] // For charts
};

function Profile() {
  const [activeTab, setActiveTab] = useState('stats'); // 'stats', 'achievements', 'account'

  // Conceptual logout
  const handleLogout = () => {
    alert("Logout functionality would be implemented here!");
    // In a real app: clear token, redirect to login page.
    // navigate('/');
  };


  return (
    <div className="profile-page container">
      <header className="profile-header">
        {/* <FaUserCircle className="profile-avatar-icon" /> */}
        <div className="profile-avatar-icon">👤</div>
        <h1>{userProfileData.username}'s Profile</h1>
        <p>Joined: {new Date(userProfileData.joinDate).toLocaleDateString()}</p>
      </header>

      <nav className="profile-tabs">
        <button onClick={() => setActiveTab('stats')} className={activeTab === 'stats' ? 'active' : ''}>
          {/* <FaChartLine />  */}
          📈 Performance Stats
        </button>
        <button onClick={() => setActiveTab('achievements')} className={activeTab === 'achievements' ? 'active' : ''}>
          {/* <FaTrophy />  */}
          🏆 Achievements
        </button>
        <button onClick={() => setActiveTab('account')} className={activeTab === 'account' ? 'active' : ''}>
          {/* <FaCog />  */}
          ⚙️ Account
        </button>
      </nav>

      <div className="profile-content">
        {activeTab === 'stats' && (
          <section className="profile-section stats-section">
            <h2>Overall Performance</h2>
            <SummaryStats stats={userProfileData.overallStats} />
            {/* Placeholder for more detailed charts/graphs */}
            <div className="charts-placeholder">
              <p>(Advanced performance charts and breakdowns by question type/strategy would appear here.)</p>
              <p>E.g., Accuracy Trends, PoE Success Rate by Clue Type, Connotation Accuracy over Time.</p>
            </div>
          </section>
        )}

        {activeTab === 'achievements' && (
          <section className="profile-section achievements-log-section">
            <h2>Achievements Log</h2>
            <div className="achievements-grid">
              {userProfileData.achievements.map(ach => (
                <div key={ach.id} className={`achievement-card ${ach.earned ? 'earned' : 'unearned'}`}>
                  <div className="achievement-card-icon">{ach.icon}</div>
                  <h4 className="achievement-card-name">{ach.name}</h4>
                  <p className="achievement-card-desc">{ach.description}</p>
                  {ach.earned && <span className="achievement-card-earned-date">Earned: {new Date(ach.dateEarned).toLocaleDateString()}</span>}
                  {!ach.earned && <span className="achievement-card-locked">Locked</span>}
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'account' && (
          <section className="profile-section account-details-section">
            <h2>Account Details</h2>
            <div className="account-info-item">
              <label>Username:</label>
              <span>{userProfileData.username}</span>
            </div>
            <div className="account-info-item">
              <label>Email:</label>
              <span>{userProfileData.email}</span>
            </div>
            <div className="account-info-item">
              <label>Joined:</label>
              <span>{new Date(userProfileData.joinDate).toLocaleDateString()}</span>
            </div>
            {/* Conceptual: <button className="cta-button">Edit Profile</button> */}
            <button onClick={handleLogout} className="cta-button danger-cta logout-button">
              {/* <FaSignOutAlt />  */}
              Logout
            </button>
             {/* Conceptual: <button className="cta-button danger-cta">Reset Progress</button> */}
          </section>
        )}
      </div>
    </div>
  );
}

export default Profile;