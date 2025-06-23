// src/components/SummaryStats.jsx
import React from 'react';
import './SummaryStats.css'; // Create this CSS file

// Example:
// const statsData = [
//   { id: 's1', label: 'Total Questions', value: '10', icon: '❓' },
//   { id: 's2', label: 'Correct Answers', value: '7', icon: '✔️' },
//   { id: 's3', label: 'PoE Accuracy', value: '80%', icon: '🎯' },
//   { id: 's4', label: 'Points Earned', value: '+150', icon: '⭐' }
// ];

function SummaryStats({ stats, title }) {
  if (!stats || stats.length === 0) {
    return <div className="summary-stats-card"><p>No stats available for this session.</p></div>;
  }

  return (
    <div className="summary-stats-card">
      {title && <h3 className="stats-card-title">{title}</h3>}
      <div className="stats-grid">
        {stats.map(stat => (
          <div key={stat.id || stat.label} className="stat-item-wrapper">
            {stat.icon && <div className="stat-icon">{stat.icon}</div>}
            <div className="stat-content">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}
                {typeof stat.value !== 'undefined' ? stat.value : 'N/A'}
                {stat.unit && <span className="stat-unit"> {stat.unit}</span>}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SummaryStats;