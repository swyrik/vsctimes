import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories, subCategories, getSubCategoriesByParent } from '../data/categories';
import { getArticlesByCategory, getArticlesBySubCategory } from '../data/articles';
import ArticleCard from '../components/ui/ArticleCard';
import './CategoryPage.css';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Check if it's a main category or subcategory
  const mainCategory = categories.find(c => c.slug === slug);
  const subCategory = subCategories.find(s => s.slug === slug);
  
  const category = mainCategory || subCategory;
  const isMainCategory = Boolean(mainCategory);
  
  if (!category) {
    return (
      <main id="main-content" className="category-page">
        <div className="container">
          <div className="category-not-found">
            <h1>Category Not Found</h1>
            <p>The category you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn-primary">Go Home</Link>
          </div>
        </div>
      </main>
    );
  }
  
  const articles = isMainCategory 
    ? getArticlesByCategory(category.id)
    : getArticlesBySubCategory(category.id);
  
  const childCategories = isMainCategory 
    ? getSubCategoriesByParent(category.id)
    : [];

  return (
    <main id="main-content" className="category-page">
      {/* Hero Section */}
      <section className="category-hero" aria-labelledby="category-title">
        <div className="category-hero__background">
          <div className="category-hero__gradient"></div>
        </div>
        
        <div className="container category-hero__content">
          <nav className="category-breadcrumb" aria-label="Breadcrumb">
            <ol className="category-breadcrumb__list">
              <li>
                <Link to="/">Home</Link>
              </li>
              {!isMainCategory && subCategory && (
                <li>
                  <Link to={`/category/${categories.find(c => c.id === subCategory.parentId)?.slug}`}>
                    {categories.find(c => c.id === subCategory.parentId)?.name}
                  </Link>
                </li>
              )}
              <li aria-current="page">{category.name}</li>
            </ol>
          </nav>
          
          <div className="category-hero__icon">
            {'icon' in category ? category.icon : '📂'}
          </div>
          
          <h1 id="category-title" className="category-hero__title">
            {category.name}
          </h1>
          
          {'description' in category && (
            <p className="category-hero__description">
              {category.description}
            </p>
          )}
          
          <div className="category-hero__stats">
            <span className="category-hero__stat">
              {articles.length} articles
            </span>
          </div>
        </div>
      </section>
      
      <div className="container">
        {/* Subcategories */}
        {childCategories.length > 0 && (
          <section className="category-subs" aria-labelledby="subs-title">
            <h2 id="subs-title" className="category-subs__title">
              Browse by Topic
            </h2>
            <div className="category-subs__grid">
              {childCategories.map((sub) => {
                const subArticles = getArticlesBySubCategory(sub.id);
                return (
                  <Link 
                    key={sub.id}
                    to={`/category/${sub.slug}`}
                    className="category-sub-card"
                  >
                    <span className="category-sub-card__icon">{sub.icon}</span>
                    <div className="category-sub-card__content">
                      <span className="category-sub-card__name">{sub.name}</span>
                      <span className="category-sub-card__count">
                        {subArticles.length} articles
                      </span>
                    </div>
                    <svg className="category-sub-card__arrow" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                      <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
        
        {/* Articles Grid */}
        <section className="category-articles" aria-labelledby="articles-title">
          <div className="category-articles__header">
            <h2 id="articles-title" className="category-articles__title">
              {isMainCategory ? 'All Articles' : 'Articles'}
            </h2>
            <span className="category-articles__count">
              {articles.length} {articles.length === 1 ? 'result' : 'results'}
            </span>
          </div>
          
          {articles.length > 0 ? (
            <div className="category-articles__grid">
              {articles.map((article, index) => (
                <ArticleCard 
                  key={article.id} 
                  article={article}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="category-empty">
              <span className="category-empty__icon">📝</span>
              <h3>No articles yet</h3>
              <p>We're working on adding content to this category. Check back soon!</p>
              <Link to="/" className="btn btn-primary">Browse All Articles</Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default CategoryPage;
