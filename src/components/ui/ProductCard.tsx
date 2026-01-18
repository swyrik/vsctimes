import React from 'react';
import { type Product } from '../../data/articles';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  rank?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, rank }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg key={i} className="product-card__star product-card__star--filled" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <svg key={i} className="product-card__star product-card__star--half" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path fill="currentColor" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="product-card__star product-card__star--empty" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path fill="currentColor" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
          </svg>
        );
      }
    }
    
    return stars;
  };

  return (
    <article className="product-card" id={`product-${product.id}`}>
      {rank && (
        <div className="product-card__rank">
          <span className="product-card__rank-number">#{rank}</span>
        </div>
      )}
      
      <div className="product-card__header">
        <div className="product-card__image-wrapper">
          <img 
            src={product.image} 
            alt={product.name}
            className="product-card__image"
            loading="lazy"
          />
        </div>
        
        <div className="product-card__info">
          <h3 className="product-card__name">{product.name}</h3>
          
          <div className="product-card__rating" aria-label={`Rating: ${product.rating} out of 5 stars`}>
            <div className="product-card__stars" aria-hidden="true">
              {renderStars(product.rating)}
            </div>
            <span className="product-card__rating-value">{product.rating.toFixed(1)}</span>
          </div>
          
          <div className="product-card__price">{product.price}</div>
        </div>
      </div>
      
      <div className="product-card__verdict">
        <span className="product-card__verdict-label">Our Verdict:</span>
        <p className="product-card__verdict-text">{product.verdict}</p>
      </div>
      
      <div className="pros-cons">
        <div className="pros">
          <h4 className="pros-title">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            Pros
          </h4>
          <ul className="pros-list" role="list">
            {product.pros.map((pro, index) => (
              <li key={index}>{pro}</li>
            ))}
          </ul>
        </div>
        
        <div className="cons">
          <h4 className="cons-title">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
            Cons
          </h4>
          <ul className="cons-list" role="list">
            {product.cons.map((con, index) => (
              <li key={index}>{con}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="product-card__actions">
        <a 
          href={product.amazonLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="btn btn-amazon product-card__btn"
          aria-label={`Check price on Amazon for ${product.name}`}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path fill="currentColor" d="M18.42 14.58c-.51-.51-1.02-.69-1.75-.69-.96 0-1.72.66-1.72 1.72 0 .76.37 1.29.92 1.61.55.32 1.29.5 2.23.5.37 0 .69-.05.96-.14-.37.87-.96 1.57-1.75 2.08-.78.51-1.72.78-2.81.78-1.38 0-2.58-.46-3.59-1.38-1.02-.92-1.52-2.12-1.52-3.59 0-1.29.42-2.35 1.25-3.18.83-.83 1.89-1.25 3.18-1.25.92 0 1.7.19 2.35.55.65.37 1.15.87 1.52 1.52.14-.51.14-1.06.14-1.66 0-1.15-.28-2.12-.83-2.9-.55-.78-1.38-1.38-2.49-1.8-1.1-.42-2.49-.64-4.15-.64-2.26 0-4.01.55-5.25 1.66C1.89 8.38 1.17 9.91 1.17 11.91c0 2.03.73 3.64 2.21 4.84 1.47 1.2 3.5 1.8 6.08 1.8 1.52 0 2.86-.23 4.01-.69 1.15-.46 2.08-1.11 2.77-1.94.69-.83 1.11-1.8 1.24-2.9-.78-.05-1.43-.23-1.93-.46h-.13z"/>
          </svg>
          Check Price on Amazon
        </a>
        
        {product.flipkartLink && (
          <a 
            href={product.flipkartLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn btn-flipkart product-card__btn"
            aria-label={`Check price on Flipkart for ${product.name}`}
          >
            Check on Flipkart
          </a>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
