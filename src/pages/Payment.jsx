// src/pages/Payment.jsx
import React from 'react';
import './Payment.css'; // Create this CSS file
// import { FaLock, FaStar, FaCheckCircle } from 'react-icons/fa'; // Example icons

// Placeholder data for premium features and plans
const premiumFeatures = [
  'Access to all 50+ advanced GRE levels',
  'In-depth performance analytics & strategy insights',
  'Unlimited Connotation Challenges across all questions',
  'Detailed explanations for every answer choice',
  'Adaptive difficulty to match your skill level',
  'Ad-free experience',
];

const pricingPlans = [
  {
    id: 'monthly',
    name: 'Monthly Access',
    price: '$9.99',
    billingCycle: '/month',
    features: ['All premium features', 'Cancel anytime'],
    cta: 'Choose Monthly',
    isPopular: false,
  },
  {
    id: 'annual',
    name: 'Annual Access',
    price: '$79.99', // e.g., $6.67/month
    billingCycle: '/year',
    originalPrice: '$119.88', // For showing savings
    features: ['All premium features', 'Save 33%', 'Best value for long-term prep'],
    cta: 'Choose Annual',
    isPopular: true,
  },
  {
    id: 'lifetime',
    name: 'Lifetime Access',
    price: '$149.99',
    billingCycle: 'one-time',
    features: ['All premium features', 'One-time payment', 'Access forever'],
    cta: 'Get Lifetime Access',
    isPopular: false,
  }
];

function Payment() {

  const handleChoosePlan = (planId) => {
    alert(`Selected plan: ${planId}. Payment gateway integration would happen here.`);
    // In a real app, this would redirect to a payment processor or open a payment modal.
  };

  return (
    <div className="payment-page container">
      <header className="payment-header">
        <h1>Unlock Your Full Potential with GRE Verbal Strategist Premium!</h1>
        <p className="payment-subtitle">
          Supercharge your Text Completion and Sentence Equivalence skills with exclusive features.
        </p>
      </header>

      <section className="premium-features-section">
        <h2>{/* <FaStar /> */} ✨ What You Get with Premium:</h2>
        <ul className="features-list">
          {premiumFeatures.map((feature, index) => (
            <li key={index}>
              {/* <FaCheckCircle className="feature-icon" /> */}
              <span className="feature-icon">✔️</span>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="pricing-plans-section">
        <h2>Choose Your Plan</h2>
        <div className="plans-container">
          {pricingPlans.map(plan => (
            <div key={plan.id} className={`plan-card ${plan.isPopular ? 'popular' : ''}`}>
              {plan.isPopular && <div className="popular-badge">Best Value</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price-container">
                <span className="plan-price">{plan.price}</span>
                <span className="plan-billing-cycle">{plan.billingCycle}</span>
              </div>
              {plan.originalPrice && <p className="plan-original-price">Originally {plan.originalPrice}</p>}
              <ul className="plan-features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button onClick={() => handleChoosePlan(plan.id)} className="cta-button plan-cta">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="security-trust-section">
        <p>
          {/* <FaLock className="security-icon" /> */}
          🔒 Secure Payment Processing. Your information is safe with us.
        </p>
        <p>Need help? <Link to="/contact">Contact Support</Link></p>
      </section>
    </div>
  );
}

export default Payment;