import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import WelcomePopup from '../components/WelcomePopup.jsx'; // Assuming you have this
import './Home.css';

// Placeholder for potential icons if you use an SVG library or direct SVG imports
// import { FaBullseye, FaLightbulb, FaTrophy, FaChevronRight } from 'react-icons/fa';

function Home() {
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const navigate = useNavigate();

  const handleStartGameClick = (e) => {
    e.preventDefault();
    setShowWelcomePopup(true);
    setTimeout(() => {
      setShowWelcomePopup(false);
      navigate('/play/1'); // Or your level select page
    }, 2800); // Popup duration
  };

  // Simple parallax effect for background (optional, can be removed if too much)
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section-interactive');
      if (heroSection) {
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const valueProps = [
    {
      icon: '🎯', // Replace with <FaBullseye /> or your SVG
      title: 'Master Process of Elimination',
      description: 'Earn points for strategically removing wrong answers – not just picking the right one.',
    },
    {
      icon: '💡', // Replace with <FaLightbulb />
      title: 'Understand Word Connotations',
      description: 'Sharpen your intuition for word meaning in context through fun mini-challenges.',
    },
    {
      icon: '🏆', // Replace with <FaTrophy />
      title: 'Gamified & Engaging Learning',
      description: 'Levels, points, and achievements make practice enjoyable and motivating.',
    },
  ];

  const stepsToSuccess = [
    'Select a question or skill focus.',
    'Tackle connotation mini-challenges (optional boost!).',
    'Strategically "Keep" or "Eliminate" each answer choice.',
    'Lock in your final answer and get instant, detailed feedback.',
    'Watch your strategy skills and score grow!',
  ];

  return (
    <>
      {showWelcomePopup && <WelcomePopup message="Sharpen Your Strategy!" />}
      <div className="home-page-interactive">
        {/* Hero Section */}
        <section className="hero-section-interactive">
          <div className="hero-overlay"></div>
          <div className="hero-content-interactive container">
            <h1 className="hero-title-interactive">
              <span>Conquer</span> <span>GRE Verbal</span> <span>with Strategy!</span>
            </h1>
            <p className="hero-subtitle-interactive">
              Transform Text Completion & Sentence Equivalence practice from a chore into an exhilarating game.
              Master the Process of Elimination and unlock word connotations to elevate your score.
            </p>
            <button onClick={handleStartGameClick} className="hero-cta-interactive">
              Start Your Strategic Journey
              <span className="hero-cta-icon">🚀</span>
            </button>
          </div>
          <div className="hero-scroll-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="value-prop-section-interactive container">
          <h2 className="section-title-interactive"><span>Why Play</span> GRE Verbal Strategist?</h2>
          <div className="value-cards-container-interactive">
            {valueProps.map((prop, index) => (
              <div className="value-card-interactive" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="value-card-icon-interactive">{prop.icon}</div>
                <h3 className="value-card-title-interactive">{prop.title}</h3>
                <p className="value-card-description-interactive">{prop.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works-section-interactive">
          <div className="container">
            <h2 className="section-title-interactive dark-bg-title"><span>Simple Steps</span> to Success</h2>
            <div className="steps-container-interactive">
              {stepsToSuccess.map((step, index) => (
                <div className="step-card-interactive" key={index} style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
                  <div className="step-number-interactive">{index + 1}</div>
                  <p className="step-description-interactive">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final-cta-section-interactive container">
          <h2 className="section-title-interactive">Ready to Become a <span>Verbal Strategist?</span></h2>
          <p className="final-cta-subtitle">Your journey to GRE verbal mastery starts now. Take the first step!</p>
          <Link to="/dashboard" className="cta-button-interactive final-cta-button">
            Explore Dashboard & Track Progress
            {/* <FaChevronRight style={{ marginLeft: '8px' }}/> */}
            <span style={{ marginLeft: '8px', display: 'inline-block', transform: 'scale(1.3)' }}>›</span>
          </Link>
        </section>
      </div>
    </>
  );
}

export default Home;