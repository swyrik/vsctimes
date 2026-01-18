import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { categories, getSubCategoriesByParent } from '../../data/categories';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`} role="banner">
        <div className="header__container">
          <Link to="/" className="header__logo" aria-label="VSCTimes Home">
            <img 
              src="https://vsctimes.com/wp-content/uploads/2025/01/vsc-logo.svg" 
              alt="VSCTimes" 
              className="header__logo-img"
            />
          </Link>

          <nav className="header__nav" role="navigation" aria-label="Main navigation">
            <ul className="header__menu">
              {categories.map(category => {
                const subCategories = getSubCategoriesByParent(category.id);
                const hasSubCategories = subCategories.length > 0;

                return (
                  <li 
                    key={category.id}
                    className="header__menu-item"
                    onMouseEnter={() => hasSubCategories && setActiveDropdown(category.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link 
                      to={`/category/${category.slug}`}
                      className="header__menu-link"
                      aria-expanded={activeDropdown === category.id}
                      aria-haspopup={hasSubCategories ? 'true' : undefined}
                    >
                      <span className="header__menu-icon">{category.icon}</span>
                      {category.name}
                      {hasSubCategories && (
                        <svg className="header__dropdown-arrow" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                          <path fill="currentColor" d="M7 10l5 5 5-5z" />
                        </svg>
                      )}
                    </Link>

                    {hasSubCategories && (
                      <div 
                        className={`header__dropdown ${activeDropdown === category.id ? 'header__dropdown--active' : ''}`}
                        role="menu"
                        aria-label={`${category.name} submenu`}
                      >
                        <div className="header__dropdown-inner">
                          <div className="header__dropdown-header">
                            <span className="header__dropdown-title">{category.name}</span>
                            <p className="header__dropdown-desc">{category.description}</p>
                          </div>
                          <ul className="header__dropdown-list">
                            {subCategories.map(sub => (
                              <li key={sub.id}>
                                <Link 
                                  to={`/category/${sub.slug}`}
                                  className="header__dropdown-link"
                                  role="menuitem"
                                >
                                  <span className="header__dropdown-icon">{sub.icon}</span>
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="header__actions">
            <button 
              className="header__search-btn"
              aria-label="Search"
              title="Search articles"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </button>

            <button 
              className="header__theme-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? (
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="currentColor" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
                </svg>
              )}
            </button>

            <button 
              className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="header__hamburger">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <nav className="header__mobile-nav">
            {categories.map(category => {
              const subCategories = getSubCategoriesByParent(category.id);
              
              return (
                <div key={category.id} className="header__mobile-category">
                  <Link 
                    to={`/category/${category.slug}`}
                    className="header__mobile-link"
                  >
                    <span className="header__mobile-icon">{category.icon}</span>
                    {category.name}
                  </Link>
                  {subCategories.length > 0 && (
                    <div className="header__mobile-subs">
                      {subCategories.map(sub => (
                        <Link 
                          key={sub.id}
                          to={`/category/${sub.slug}`}
                          className="header__mobile-sub-link"
                        >
                          {sub.icon} {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
