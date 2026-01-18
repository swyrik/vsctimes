import React from 'react';
import { Link } from 'react-router-dom';
import { categories, getSubCategoriesByParent } from '../../data/categories';
import './CategoryGrid.css';

const CategoryGrid: React.FC = () => {
  return (
    <section className="category-grid section" aria-labelledby="categories-title">
      <div className="container">
        <div className="category-grid__header">
          <h2 id="categories-title" className="category-grid__title">
            Browse by Category
          </h2>
          <p className="category-grid__subtitle">
            Find the perfect product with our expert reviews and buying guides
          </p>
        </div>
        
        <div className="category-grid__grid">
          {categories.slice(0, 4).map((category, index) => {
            const subCategories = getSubCategoriesByParent(category.id);
            
            return (
              <div 
                key={category.id} 
                className="category-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="category-card__header">
                  <span className="category-card__icon">{category.icon}</span>
                  <div className="category-card__info">
                    <h3 className="category-card__name">{category.name}</h3>
                    <span className="category-card__count">{category.articleCount} articles</span>
                  </div>
                </div>
                
                <p className="category-card__description">{category.description}</p>
                
                {subCategories.length > 0 && (
                  <div className="category-card__subcategories">
                    {subCategories.slice(0, 4).map(sub => (
                      <Link 
                        key={sub.id}
                        to={`/category/${sub.slug}`}
                        className="category-card__subcategory"
                      >
                        <span className="category-card__sub-icon">{sub.icon}</span>
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
                
                <Link to={`/category/${category.slug}`} className="category-card__link">
                  View All
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </Link>
                
                <div className="category-card__glow"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
