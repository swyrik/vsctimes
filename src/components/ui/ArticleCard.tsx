import React from 'react';
import { Link } from 'react-router-dom';
import { type Article } from '../../data/articles';
import './ArticleCard.css';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
  index?: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, variant = 'default', index = 0 }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  if (variant === 'featured') {
    return (
      <article 
        className="article-card article-card--featured"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <Link to={`/article/${article.slug}`} className="article-card__link">
          <div className="article-card__image-wrapper">
            <img 
              src={article.featuredImage} 
              alt={article.title}
              className="article-card__image"
              loading="lazy"
            />
            <div className="article-card__overlay"></div>
            <div className="article-card__category-badge">
              {article.subCategory.replace(/-/g, ' ')}
            </div>
          </div>
          
          <div className="article-card__content">
            <h3 className="article-card__title">{article.title}</h3>
            <p className="article-card__excerpt">{article.excerpt}</p>
            
            <div className="article-card__meta">
              <div className="article-card__author">
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name}
                  className="article-card__author-avatar"
                />
                <span className="article-card__author-name">{article.author.name}</span>
              </div>
              <div className="article-card__info">
                <span className="article-card__date">{formatDate(article.updatedDate)}</span>
                <span className="article-card__separator">•</span>
                <span className="article-card__read-time">{article.readTime} min read</span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className="article-card article-card--compact">
        <Link to={`/article/${article.slug}`} className="article-card__link">
          <div className="article-card__image-wrapper">
            <img 
              src={article.featuredImage} 
              alt={article.title}
              className="article-card__image"
              loading="lazy"
            />
          </div>
          <div className="article-card__content">
            <span className="article-card__category-tag">
              {article.subCategory.replace(/-/g, ' ')}
            </span>
            <h4 className="article-card__title">{article.title}</h4>
            <span className="article-card__date">{formatDate(article.updatedDate)}</span>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article 
      className="article-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link to={`/article/${article.slug}`} className="article-card__link">
        <div className="article-card__image-wrapper">
          <img 
            src={article.featuredImage} 
            alt={article.title}
            className="article-card__image"
            loading="lazy"
          />
          <div className="article-card__overlay"></div>
          {article.isPopular && (
            <span className="article-card__popular-badge">🔥 Popular</span>
          )}
        </div>
        
        <div className="article-card__content">
          <span className="article-card__category-tag">
            {article.subCategory.replace(/-/g, ' ')}
          </span>
          
          <h3 className="article-card__title">{article.title}</h3>
          <p className="article-card__excerpt">{article.excerpt}</p>
          
          <div className="article-card__meta">
            <div className="article-card__author">
              <img 
                src={article.author.avatar} 
                alt={article.author.name}
                className="article-card__author-avatar"
              />
              <span className="article-card__author-name">{article.author.name}</span>
            </div>
            <span className="article-card__read-time">{article.readTime} min</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
