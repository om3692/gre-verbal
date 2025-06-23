// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'; // App-specific global styles

// Import Pages
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Gameplay from './pages/Gameplay.jsx';
import Summary from './pages/Summary.jsx';
import Profile from './pages/Profile.jsx';
import Payment from './pages/Payment.jsx'; // Placeholder for now

// Import Components
import Header from './components/Header.jsx'; // You'll likely want a persistent header

function App() {
  const location = useLocation();

  // Conditionally render Header based on route, or always render it
  // For example, you might not want a header on a dedicated gameplay screen
  // or on the initial payment screen.
  const showHeader = !['/payment'].includes(location.pathname); // Example condition

  return (
    <div className="app-container">
      {showHeader && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/play/:levelId" element={<Gameplay />} /> {/* Dynamic route for levels */}
          <Route path="/summary/:sessionId" element={<Summary />} /> {/* Dynamic route for session summary */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} /> {/* Placeholder */}
          {/* Add other routes as needed, e.g., for different game modes */}
        </Routes>
      </main>
      {/* You could add a Footer component here if needed */}
    </div>
  );
}

export default App;