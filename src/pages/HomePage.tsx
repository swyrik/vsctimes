import React, { useEffect, useRef, useState, useCallback } from 'react';
import Hero from '../components/home/Hero';
import FeaturedArticles from '../components/home/FeaturedArticles';
import CategoryGrid from '../components/home/CategoryGrid';
import LatestArticles from '../components/home/LatestArticles';
import Footer from '../components/layout/Footer';
import './HomePage.css';

const HomePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const sectionCount = 6; // Updated to include footer

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= sectionCount || isScrolling.current) return;
    
    isScrolling.current = true;
    setCurrentSection(index);
    
    const container = containerRef.current;
    if (!container) return;
    
    const sections = container.querySelectorAll('.scroll-snap-section');
    const target = sections[index] as HTMLElement;
    
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling.current) return;
      
      if (e.deltaY > 0) {
        scrollToSection(currentSection + 1);
      } else if (e.deltaY < 0) {
        scrollToSection(currentSection - 1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          scrollToSection(currentSection + 1);
        } else {
          scrollToSection(currentSection - 1);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;
      
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          scrollToSection(currentSection + 1);
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          scrollToSection(currentSection - 1);
          break;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, scrollToSection]);

  return (
    <main id="main-content" className="home-page" ref={containerRef}>
      <section className="scroll-snap-section">
        <Hero />
      </section>
      <section className="scroll-snap-section">
        <FeaturedArticles />
      </section>
      <section className="scroll-snap-section">
        <CategoryGrid />
      </section>
      <section className="scroll-snap-section">
        <LatestArticles />
      </section>
      
      {/* Trust Signals Section */}
      <section className="trust-section section scroll-snap-section" aria-labelledby="trust-title">
        <div className="container">
          <h2 id="trust-title" className="visually-hidden">Why Trust Us</h2>
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-item__icon">🔬</div>
              <h3 className="trust-item__title">Hands-On Testing</h3>
              <p className="trust-item__text">
                We purchase and test every product for 6+ months before publishing our reviews.
              </p>
            </div>
            <div className="trust-item">
              <div className="trust-item__icon">✨</div>
              <h3 className="trust-item__title">Unbiased Reviews</h3>
              <p className="trust-item__text">
                We don't accept payments for positive reviews. All opinions are our own.
              </p>
            </div>
            <div className="trust-item">
              <div className="trust-item__icon">👨‍💻</div>
              <h3 className="trust-item__title">Expert Team</h3>
              <p className="trust-item__text">
                Our team includes engineers and industry experts with decades of experience.
              </p>
            </div>
            <div className="trust-item">
              <div className="trust-item__icon">🔄</div>
              <h3 className="trust-item__title">Regular Updates</h3>
              <p className="trust-item__text">
                We continuously update our reviews based on long-term usage and new findings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="scroll-snap-section footer-section">
        <Footer />
      </section>

      {/* Section Dots Indicator */}
      <div className="scroll-dots" aria-label="Section navigation">
        {Array.from({ length: sectionCount }).map((_, index) => (
          <button
            key={index}
            className={`scroll-dot ${currentSection === index ? 'scroll-dot--active' : ''}`}
            onClick={() => scrollToSection(index)}
            aria-label={`Go to section ${index + 1}`}
            aria-current={currentSection === index ? 'true' : undefined}
          />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
