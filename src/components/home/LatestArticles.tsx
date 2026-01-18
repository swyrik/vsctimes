import React from 'react';
import { getPopularArticles, articles } from '../../data/articles';
import ArticleCard from '../ui/ArticleCard';
import './LatestArticles.css';

const LatestArticles: React.FC = () => {
  const popularArticles = getPopularArticles().slice(0, 4);
  const latestArticles = articles.slice(0, 6);
  
  return (
    <section className="latest-articles section" aria-labelledby="latest-title">
      <div className="container">
        <div className="latest-articles__grid">
          {/* Main Content */}
          <div className="latest-articles__main">
            <div className="latest-articles__header">
              <h2 id="latest-title" className="latest-articles__title">
                Latest Articles
              </h2>
            </div>
            
            <div className="latest-articles__list">
              {latestArticles.map((article, index) => (
                <ArticleCard 
                  key={article.id} 
                  article={article}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <aside className="latest-articles__sidebar" aria-labelledby="popular-title">
            <div className="sidebar-widget">
              <h3 id="popular-title" className="sidebar-widget__title">
                🔥 Popular Now
              </h3>
              <div className="sidebar-widget__content">
                {popularArticles.map((article) => (
                  <ArticleCard 
                    key={article.id}
                    article={article}
                    variant="compact"
                  />
                ))}
              </div>
            </div>
            
            <div className="sidebar-widget sidebar-widget--cta">
              <div className="sidebar-cta">
                <span className="sidebar-cta__icon">📧</span>
                <h4 className="sidebar-cta__title">Get Updates</h4>
                <p className="sidebar-cta__text">
                  Subscribe to receive the latest reviews and buying guides directly in your inbox.
                </p>
                <form className="sidebar-cta__form" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="sidebar-cta__input"
                    aria-label="Email address"
                  />
                  <button type="submit" className="btn btn-primary sidebar-cta__btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
