import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedArticles } from '../../data/articles';
import ArticleCard from '../ui/ArticleCard';
import './FeaturedArticles.css';

const FeaturedArticles: React.FC = () => {
  const featuredArticles = getFeaturedArticles();
  
  return (
    <section className="featured-articles section" aria-labelledby="featured-title">
      <div className="container">
        <div className="featured-articles__header">
          <div className="featured-articles__header-left">
            <span className="featured-articles__badge">⭐ Editor's Picks</span>
            <h2 id="featured-title" className="featured-articles__title">
              Featured Reviews
            </h2>
            <p className="featured-articles__subtitle">
              Our most comprehensive and popular product reviews, handpicked by our editorial team
            </p>
          </div>
          <Link to="/articles" className="btn btn-secondary featured-articles__view-all">
            View All Articles
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </Link>
        </div>
        
        <div className="featured-articles__grid">
          {featuredArticles.slice(0, 4).map((article, index) => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              variant={index === 0 ? 'featured' : 'default'}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
