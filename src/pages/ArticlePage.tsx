import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug, getRelatedArticles } from '../data/articles';
import ProductCard from '../components/ui/ProductCard';
import ArticleCard from '../components/ui/ArticleCard';
import './ArticlePage.css';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  
  if (!article) {
    return (
      <main id="main-content" className="article-page">
        <div className="container">
          <div className="article-not-found">
            <h1>Article Not Found</h1>
            <p>The article you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn-primary">Go Home</Link>
          </div>
        </div>
      </main>
    );
  }
  
  const relatedArticles = getRelatedArticles(article.id);
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <main id="main-content" className="article-page">
      {/* Hero Section */}
      <section className="article-hero" aria-labelledby="article-title">
        <div className="article-hero__background">
          <img 
            src={article.featuredImage} 
            alt=""
            className="article-hero__image"
            aria-hidden="true"
          />
          <div className="article-hero__overlay"></div>
        </div>
        
        <div className="container article-hero__content">
          <nav className="article-breadcrumb" aria-label="Breadcrumb">
            <ol className="article-breadcrumb__list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={`/category/${article.category}`}>
                  {article.category.replace(/-/g, ' ')}
                </Link>
              </li>
              <li>
                <Link to={`/category/${article.subCategory}`}>
                  {article.subCategory.replace(/-/g, ' ')}
                </Link>
              </li>
            </ol>
          </nav>
          
          <h1 id="article-title" className="article-hero__title">
            {article.title}
          </h1>
          
          <p className="article-hero__excerpt">{article.excerpt}</p>
          
          <div className="article-hero__meta">
            <div className="article-hero__author">
              <img 
                src={article.author.avatar} 
                alt={article.author.name}
                className="article-hero__author-avatar"
              />
              <div className="article-hero__author-info">
                <span className="article-hero__author-name">{article.author.name}</span>
                <span className="article-hero__author-role">{article.author.role}</span>
              </div>
            </div>
            
            <div className="article-hero__details">
              <span className="article-hero__date">
                Updated: {formatDate(article.updatedDate)}
              </span>
              <span className="article-hero__separator">•</span>
              <span className="article-hero__read-time">{article.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container">
        <div className="article-layout">
          {/* Table of Contents - Sidebar */}
          {article.tableOfContents && article.tableOfContents.length > 0 && (
            <aside className="article-sidebar" aria-labelledby="toc-title">
              <div className="toc">
                <h2 id="toc-title" className="toc-title">📖 Table of Contents</h2>
                <nav aria-label="Table of contents">
                  <ol className="toc-list">
                    {article.tableOfContents.map((item, index) => (
                      <li key={index} className={`toc-item toc-item--level-${item.level}`}>
                        <a href={`#${item.id}`} className="toc-link">
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>
          )}
          
          {/* Article Content */}
          <article className="article-content">
            <div className="prose">
              <p>{article.content}</p>
              
              {/* Products Section */}
              {article.products && article.products.length > 0 && (
                <section className="article-products" aria-labelledby="products-title">
                  <h2 id="products-title">Best Picks</h2>
                  {article.products.map((product, index) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      rank={index + 1}
                    />
                  ))}
                </section>
              )}
              
              {/* More content placeholder */}
              <h2>Buying Guide</h2>
              <p>
                When choosing a product in this category, consider factors like build quality, 
                after-sales service, warranty, and total cost of ownership. We recommend 
                checking local availability and service quality before making a purchase.
              </p>
              
              <h2>Frequently Asked Questions</h2>
              <div className="faq-item">
                <h3>How do you test these products?</h3>
                <p>
                  We purchase and test every product for at least 6 months before publishing 
                  our reviews. We install them in our offices and team members' homes to 
                  understand real-world performance.
                </p>
              </div>
            </div>
            
            {/* Tags */}
            <div className="article-tags">
              <span className="article-tags__label">Tags:</span>
              <div className="article-tags__list">
                {article.tags.map((tag, index) => (
                  <Link key={index} to={`/tag/${tag}`} className="article-tag">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Author Box */}
            <div className="author-box">
              <img 
                src={article.author.avatar} 
                alt={article.author.name}
                className="author-box__avatar"
              />
              <div className="author-box__content">
                <span className="author-box__label">Written by</span>
                <h3 className="author-box__name">{article.author.name}</h3>
                <p className="author-box__bio">{article.author.bio}</p>
              </div>
            </div>
          </article>
        </div>
        
        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="related-articles section" aria-labelledby="related-title">
            <h2 id="related-title" className="related-articles__title">
              Related Articles
            </h2>
            <div className="related-articles__grid">
              {relatedArticles.map((related, index) => (
                <ArticleCard key={related.id} article={related} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ArticlePage;
