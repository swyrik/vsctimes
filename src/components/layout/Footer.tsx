import React from 'react';
import { Link } from 'react-router-dom';
import { categories, subCategories } from '../../data/categories';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        {/* Main Footer Content */}
        <div className="footer__grid">
          {/* Brand Section */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="VSCTimes Home">
              <img 
                src="https://vsctimes.com/wp-content/uploads/2025/01/vsc-logo.svg" 
                alt="VSCTimes" 
                className="footer__logo-img"
              />
            </Link>
            <p className="footer__tagline">
              Your Trusted Guide for Smart Shopping. We Research, Test, and Review products to help you find the best ones.
            </p>
            <div className="footer__social">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Follow us on Facebook"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Follow us on X (formerly Twitter)"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Follow us on Instagram"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Subscribe to our YouTube channel"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Categories Links */}
          <div className="footer__links-section">
            <h3 className="footer__title">Categories</h3>
            <ul className="footer__links" role="list">
              {categories.map(category => (
                <li key={category.id}>
                  <Link to={`/category/${category.slug}`} className="footer__link">
                    {category.icon} {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Topics */}
          <div className="footer__links-section">
            <h3 className="footer__title">Popular Topics</h3>
            <ul className="footer__links" role="list">
              {subCategories.slice(0, 6).map(sub => (
                <li key={sub.id}>
                  <Link to={`/category/${sub.slug}`} className="footer__link">
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer__links-section">
            <h3 className="footer__title">Company</h3>
            <ul className="footer__links" role="list">
              <li>
                <Link to="/about" className="footer__link">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="footer__link">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="footer__link">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/affiliate-disclosure" className="footer__link">Affiliate Disclosure</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="footer__disclosure">
          <p>
            <strong>Affiliate Disclosure:</strong> As an Amazon Associate and affiliate partner, we earn from qualifying purchases. When you buy through our links, we may earn a commission at no extra cost to you. All opinions are our own.
          </p>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} VSCTimes. All rights reserved.
          </p>
          <p className="footer__made-with">
            Made with ❤️ for smart shoppers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
