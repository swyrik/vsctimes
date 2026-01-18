import React from 'react';
import { authors } from '../data/articles';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <main id="main-content" className="about-page">
      {/* Hero Section */}
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero__background">
          <div className="about-hero__gradient"></div>
        </div>
        
        <div className="container about-hero__content">
          <span className="about-hero__badge">About Us</span>
          <h1 id="about-title" className="about-hero__title">
            Your Trusted Guide for
            <span className="about-hero__title-highlight"> Smart Shopping</span>
          </h1>
          <p className="about-hero__description">
            Since the beginning, we have believed in being open and truthful with our audience. 
            That, in our view, is the only way to create a community.
          </p>
        </div>
      </section>
      
      <div className="container">
        {/* Mission Section */}
        <section className="about-section" aria-labelledby="mission-title">
          <h2 id="mission-title" className="about-section__title">Our Mission</h2>
          <div className="about-section__content">
            <p>
              VSCTIMES is your Trusted Guide for Smart Shopping. From home Appliances like 
              Water Purifiers, ACs, Washing Machines, and Gadgets to Robovacs, Mattresses, 
              and TVs, we Research, Test, and Review products to help you find the best ones.
            </p>
            <p>
              We operate with complete editorial independence and seek to be the most dependable 
              product recommendation service. We won't publish a recommendation until our writers 
              and editors have thoroughly researched and tested it to determine it to be the finest.
            </p>
            <p>
              We're dedicated to providing you with genuine information, unbiased reviews, and 
              honest advice to make your buying decisions easier.
            </p>
          </div>
        </section>
        
        {/* How We Test Section */}
        <section className="about-section about-section--highlight" aria-labelledby="testing-title">
          <h2 id="testing-title" className="about-section__title">
            🔬 How We Review Products
          </h2>
          <div className="about-section__content">
            <p>
              Our product reviews are the result of hands-on experience. Before sharing our 
              thoughts, we use each product for at least six months. We buy these products 
              ourselves and install them in our offices and staff members' homes.
            </p>
            <p>
              For example, when we reviewed water purifiers, we purchased various models, 
              installed them, tested the water quality, and monitored key aspects like brand 
              service, installation speed, customer care responsiveness, water wastage, filter 
              durability, maintenance costs, and water taste. We measure every detail to provide 
              you with comprehensive reviews.
            </p>
            <p>
              Our team consists of individuals with the right education and practical experience 
              to evaluate products. Additionally, we collaborate with experienced plumbers and 
              electricians from Urban Company, tapping into their insights to further inform 
              our reviews.
            </p>
            <p>
              <strong>We take product testing seriously.</strong> Every item listed on our website 
              undergoes thorough evaluation by our team. We leave no stone unturned to ensure 
              that you receive accurate and reliable information.
            </p>
          </div>
          
          <div className="testing-steps">
            <div className="testing-step">
              <div className="testing-step__number">1</div>
              <h3 className="testing-step__title">Purchase</h3>
              <p className="testing-step__text">
                We buy products ourselves with our own money
              </p>
            </div>
            <div className="testing-step">
              <div className="testing-step__number">2</div>
              <h3 className="testing-step__title">Install</h3>
              <p className="testing-step__text">
                Products are installed in real homes and offices
              </p>
            </div>
            <div className="testing-step">
              <div className="testing-step__number">3</div>
              <h3 className="testing-step__title">Test</h3>
              <p className="testing-step__text">
                6+ months of daily use and rigorous testing
              </p>
            </div>
            <div className="testing-step">
              <div className="testing-step__number">4</div>
              <h3 className="testing-step__title">Review</h3>
              <p className="testing-step__text">
                Honest, comprehensive reviews based on real experience
              </p>
            </div>
          </div>
        </section>
        
        {/* Funding Section */}
        <section className="about-section" aria-labelledby="funding-title">
          <h2 id="funding-title" className="about-section__title">
            💰 How Is VSCTimes Funded?
          </h2>
          <div className="about-section__content">
            <p>
              We independently review everything we recommend. When you buy through our links, 
              we may earn a commission at no extra cost to you.
            </p>
            <p>
              We only recommend products that we believe will add value to our readers. Each 
              product we recommend has undergone thorough testing and use by us. 
              <strong> We do not accept money in exchange for positive reviews; all opinions are our own.</strong>
            </p>
            <p>
              Affiliate marketing is a type of monetization. The biggest online brands like 
              Amazon, eBay, Google, and others have affiliate programs. A lot of your favorite 
              websites rely on affiliate marketing to make money. The only distinction is that 
              not everyone discloses how they generate revenue to their users.
            </p>
          </div>
          
          <div className="transparency-box">
            <span className="transparency-box__icon">🛡️</span>
            <h3 className="transparency-box__title">Our Transparency Promise</h3>
            <ul className="transparency-box__list">
              <li>We never accept payment for positive reviews</li>
              <li>All affiliate relationships are clearly disclosed</li>
              <li>Our recommendations are based solely on product quality</li>
              <li>You never pay more when using our affiliate links</li>
            </ul>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="about-section" aria-labelledby="team-title">
          <h2 id="team-title" className="about-section__title">
            👥 Our Team
          </h2>
          <div className="team-grid">
            {authors.map((author) => (
              <div key={author.id} className="team-card">
                <img 
                  src={author.avatar} 
                  alt={author.name}
                  className="team-card__avatar"
                />
                <div className="team-card__content">
                  <h3 className="team-card__name">{author.name}</h3>
                  <span className="team-card__role">{author.role}</span>
                  <p className="team-card__bio">{author.bio}</p>
                </div>
              </div>
            ))}
            
            <div className="team-card">
              <img 
                src="https://vsctimes.com/wp-content/litespeed/avatar/dd7465cd11accc11e275b932cdbb7f4c.jpg?ver=1768392646" 
                alt="Sai Sahithya Ponguru"
                className="team-card__avatar"
              />
              <div className="team-card__content">
                <h3 className="team-card__name">Sai Sahithya Ponguru</h3>
                <span className="team-card__role">Content Writer</span>
                <p className="team-card__bio">
                  Associate Engineer at Cognizant with a BTech in Computer Science. 
                  Creates content about small home and kitchen appliances. Passionate 
                  about maintaining a clean and organized home.
                </p>
              </div>
            </div>
            
            <div className="team-card">
              <img 
                src="https://vsctimes.com/wp-content/uploads/2025/02/Vyshnavi-Vanjari.webp" 
                alt="Vyshnavi Vanjari"
                className="team-card__avatar"
              />
              <div className="team-card__content">
                <h3 className="team-card__name">Vyshnavi Vanjari</h3>
                <span className="team-card__role">Technical Writer</span>
                <p className="team-card__bio">
                  Analytics Engineer at Straive with a gold medal in Electronics and 
                  Communication Engineering. Expert on ceiling fans, BLDC technology, 
                  and electronic appliances.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="about-section about-section--contact" aria-labelledby="contact-title">
          <h2 id="contact-title" className="about-section__title">
            📧 Contact Us
          </h2>
          <div className="about-section__content">
            <p>
              If you have any suggestions, queries, or feedback regarding this site, 
              please write to us at:
            </p>
            <a href="mailto:hello@vsctimes.com" className="contact-email">
              hello@vsctimes.com
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
