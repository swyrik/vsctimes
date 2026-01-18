import React from 'react';
import './TrustSection.css';

const TrustSection: React.FC = () => {
  return (
    <section className="trust-section" aria-labelledby="trust-title">
      <div className="container">
        <div className="trust-header">
          <h2 id="trust-title" className="trust-title">Why Trust VSCTimes?</h2>
          <p className="trust-subtitle">
            We're committed to providing honest, in-depth reviews backed by rigorous testing and expert analysis.
          </p>
        </div>
        
        <div className="trust-grid">
          <div className="trust-card">
            <div className="trust-card__icon-wrapper">
              <svg className="trust-card__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="trust-card__title">Hands-On Testing</h3>
            <p className="trust-card__text">
              We purchase products and test them in real-world conditions for 6+ months before publishing our detailed reviews.
            </p>
          </div>

          <div className="trust-card">
            <div className="trust-card__icon-wrapper">
              <svg className="trust-card__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11ZM12 21C15.866 21 19 19.2091 19 17C19 14.7909 15.866 13 12 13C8.13401 13 5 14.7909 5 17C5 19.2091 8.13401 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="trust-card__title">Unbiased Reviews</h3>
            <p className="trust-card__text">
              Our editorial independence is paramount. We don't accept payments for positive reviews—all opinions are 100% our own.
            </p>
          </div>

          <div className="trust-card">
            <div className="trust-card__icon-wrapper">
              <svg className="trust-card__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.4286 15.4286L22 18L18 22L15.4286 19.4286M19.4286 15.4286L21.1716 13.6856C21.9526 12.9046 21.9526 11.6382 21.1716 10.8572L19.4286 9.11419C18.6476 8.33314 17.3812 8.33314 16.6002 9.11419L14.8572 10.8572M19.4286 15.4286L14.8572 10.8572M14.8572 10.8572L9.5 5.5C8.11929 4.11929 5.88071 4.11929 4.5 5.5C3.11929 6.88071 3.11929 9.11929 4.5 10.5L9.85719 15.8572" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="trust-card__title">Expert Team</h3>
            <p className="trust-card__text">
              Our content is crafted by engineers and industry experts with decades of hands-on experience in home appliances.
            </p>
          </div>

          <div className="trust-card">
            <div className="trust-card__icon-wrapper">
              <svg className="trust-card__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4V9H4.5M4 9H9M4 9L11 4M20 20V15H19.5M20 20H15M20 20L13 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.4899 9.00005C19.9823 7.68851 19.1606 6.51608 18.0899 5.58989C16.4299 4.15655 14.2899 3.33337 12.0001 3.33337C8.46014 3.33337 5.29014 5.33337 3.65014 8.33337M3.50977 15C4.01738 16.3115 4.83915 17.484 5.90977 18.4102C7.56977 19.8435 9.70977 20.6667 11.9996 20.6667C15.5396 20.6667 18.7096 18.6667 20.3496 15.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="trust-card__title">Regular Updates</h3>
            <p className="trust-card__text">
              Technology evolves fast. We continuously update our reviews based on long-term usage tests and new market findings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
