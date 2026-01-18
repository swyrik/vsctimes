import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__background">
        <div className="hero__gradient"></div>
        <div className="hero__grid"></div>
        <div className="hero__glow hero__glow--1"></div>
        <div className="hero__glow hero__glow--2"></div>
      </div>
      
      <div className="hero__container">
        <div className="hero__content animate-fadeInUp">
          <span className="hero__badge">
            <span className="hero__badge-dot"></span>
            Trusted Reviews Since 2020
          </span>
          
          <h1 id="hero-title" className="hero__title">
            Your Trusted Guide for
            <span className="hero__title-highlight"> Smart Shopping</span>
          </h1>
          
          <p className="hero__subtitle">
            From Water Purifiers and ACs to Robot Vacuums and Mattresses — 
            we research, test, and review products to help you make informed decisions.
          </p>
          
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">200+</span>
              <span className="hero__stat-label">Products Tested</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">50+</span>
              <span className="hero__stat-label">In-Depth Reviews</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">6+ Months</span>
              <span className="hero__stat-label">Testing Period</span>
            </div>
          </div>
          
          <div className="hero__actions">
            <Link to="/category/water-purifiers" className="btn btn-primary">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Explore Reviews
            </Link>
            <Link to="/about" className="btn btn-secondary">
              How We Test
            </Link>
          </div>
        </div>
        
        <div className="hero__visual animate-fadeIn">
          <div className="hero__card hero__card--1 animate-float">
            <div className="hero__card-icon">💧</div>
            <div className="hero__card-content">
              <span className="hero__card-title">Water Purifiers</span>
              <span className="hero__card-count">15 Reviews</span>
            </div>
          </div>
          
          <div className="hero__card hero__card--2 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="hero__card-icon">❄️</div>
            <div className="hero__card-content">
              <span className="hero__card-title">Air Conditioners</span>
              <span className="hero__card-count">12 Reviews</span>
            </div>
          </div>
          
          <div className="hero__card hero__card--3 animate-float" style={{ animationDelay: '1s' }}>
            <div className="hero__card-icon">🛏️</div>
            <div className="hero__card-content">
              <span className="hero__card-title">Mattresses</span>
              <span className="hero__card-count">8 Reviews</span>
            </div>
          </div>
          
          <div className="hero__card hero__card--4 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="hero__card-icon">🧹</div>
            <div className="hero__card-content">
              <span className="hero__card-title">Robot Vacuums</span>
              <span className="hero__card-count">10 Reviews</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero__scroll-indicator" aria-hidden="true">
        <span className="hero__scroll-text">Scroll to explore</span>
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
