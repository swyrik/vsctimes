export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  role: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  rating: number;
  amazonLink: string;
  flipkartLink?: string;
  pros: string[];
  cons: string[];
  verdict: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  subCategory: string;
  author: Author;
  publishedDate: string;
  updatedDate: string;
  readTime: number;
  isFeatured: boolean;
  isPopular: boolean;
  tags: string[];
  products?: Product[];
  tableOfContents?: { id: string; title: string; level: number }[];
}

export const authors: Author[] = [
  {
    id: 'srinivasa',
    name: 'Srinivasa Chaithanya',
    bio: 'Computer engineer, creator, and editor-in-chief of VSCTimes. Microsoft Certified Solutions Expert with ten years of experience in technology news reporting. Specializes in Large Appliances and Electronics.',
    avatar: 'https://vsctimes.com/wp-content/litespeed/avatar/b7edf1920c4bb9e71ef58291e62a8a64.jpg?ver=1768386620',
    role: 'Editor-in-Chief'
  },
  {
    id: 'geetha',
    name: 'Geetha Srinivasan',
    bio: 'Retired homemaker with a Bachelor\'s in Food Science and Technology from Anna University. Culinary and kitchen appliance expert with 30 years of experience testing kitchen appliances like Mixer Grinders, Juicers, Food Processors, Air Fryers, and Ovens.',
    avatar: 'https://vsctimes.com/wp-content/uploads/2025/02/Geetha-Srinivasan.webp',
    role: 'Kitchen Expert'
  }
];

export const articles: Article[] = [
  {
    id: '1',
    title: '10 Best Water Purifiers in India for Home (2026)',
    slug: 'best-water-purifiers-india',
    excerpt: 'We tested 20+ models to select the best water purifiers in India for home suitable for borewell and municipal water, including RO, UV, and UF.',
    content: `If you are looking for the best water purifier in India for home, first check your water source and TDS. Municipal water in many cities falls around 50–300 ppm, so a UV UF purifier is enough and you can avoid RO water wastage. Borewell water TDS is commonly above 300 ppm, so an RO purifier is the better choice.

You can quickly check your water's TDS using a simple TDS meter, but TDS alone doesn't confirm safety. Your water can have 200 TDS and still have issues like fluoride or heavy metals in small amounts, and a TDS meter won't tell you that. If you are not sure about the water quality in your area, check local water reports or do a basic lab test.`,
    featuredImage: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?w=800&h=500&fit=crop',
    category: 'kitchen-appliances',
    subCategory: 'water-purifiers',
    author: authors[0],
    publishedDate: '2026-01-15',
    updatedDate: '2026-01-18',
    readTime: 15,
    isFeatured: true,
    isPopular: true,
    tags: ['water purifier', 'RO', 'UV', 'UF', 'buying guide'],
    products: [
      {
        id: 'uc-native-m1',
        name: 'Urban Company Native M1',
        image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop',
        price: '₹18,999',
        rating: 4.5,
        amazonLink: 'https://amzn.to/3UuNpGQ',
        flipkartLink: 'https://fkrt.it/example',
        pros: [
          'Lowest AMC cost in its class — ₹5,000 for 2 years, including filters',
          '2-year product warranty on both models',
          '8L storage tank with 10-stage RO+UV purification',
          'Solid build quality and modern, compact design',
          'Tray for holding bottles or glasses while filling'
        ],
        cons: [
          'Cannot dispense water without electricity (M2)',
          'Service quality varies in rural areas',
          'Water wastage is high'
        ],
        verdict: 'Best RO Water Purifier in India with the least AMC in the market. Ideal for homes with stable power supply.'
      },
      {
        id: 'atomberg-intellon',
        name: 'Atomberg Intellon',
        image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop',
        price: '₹21,999',
        rating: 4.3,
        amazonLink: 'https://amzn.to/example2',
        pros: [
          'Smart TDS adjustment',
          'Excellent build quality',
          'Good after-sales service',
          'BLDC motor for efficiency'
        ],
        cons: [
          'Slightly expensive',
          'Limited service centers in some areas'
        ],
        verdict: 'Premium water purifier with smart features and excellent build quality.'
      }
    ],
    tableOfContents: [
      { id: 'intro', title: 'Introduction', level: 1 },
      { id: 'comparison', title: 'Water Purifier Comparison Table', level: 2 },
      { id: 'top-picks', title: 'Best Water Purifiers 2026', level: 2 },
      { id: 'buying-guide', title: 'Water Purifier Buying Guide', level: 2 },
      { id: 'faq', title: 'Frequently Asked Questions', level: 2 }
    ]
  },
  {
    id: '2',
    title: 'Urban Company Water Purifier Review, Native M1, M2 | After 2 Years',
    slug: 'urban-company-water-purifier-review',
    excerpt: 'Native M2 comes with touch controls and futuristic looks, but it can\'t dispense water when there\'s no power. Here\'s our detailed review after 2 years of use.',
    content: `After two years of daily use with the Urban Company Native series, we can confidently share our long-term experience. The Native M2 comes with touch controls and futuristic looks, but it can't dispense water when there's no power.

The build quality has remained solid, and the taste has been consistent across seasons. The 10-stage purification stack ensures that Borewell and tanker water is handled well.`,
    featuredImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
    category: 'kitchen-appliances',
    subCategory: 'water-purifiers',
    author: authors[0],
    publishedDate: '2026-01-10',
    updatedDate: '2026-01-15',
    readTime: 12,
    isFeatured: true,
    isPopular: true,
    tags: ['urban company', 'water purifier', 'native m1', 'native m2', 'review']
  },
  {
    id: '3',
    title: 'Best Robot Vacuum Cleaners For Home in India 2026',
    slug: 'best-robot-vacuum-cleaners-india',
    excerpt: 'Before choosing a Robovac, determine your primary need. Do you want strong dust pickup? Do you want better mopping? Or do you want both?',
    content: `Before choosing a Robovac, determine your primary need. Do you want strong dust pickup? Do you want better mopping? Or do you want both? Suction power (measured in pascals (Pa)) indicates how forcefully the vacuum pulls in dirt.

Mapping technology, such as Lidar, helps the robot cover corners without moving randomly. The best robot vacuums in India offer a combination of powerful suction, smart navigation, and efficient mopping capabilities.`,
    featuredImage: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&h=500&fit=crop',
    category: 'home-appliances',
    subCategory: 'vacuum-cleaners',
    author: authors[0],
    publishedDate: '2026-01-12',
    updatedDate: '2026-01-17',
    readTime: 18,
    isFeatured: true,
    isPopular: false,
    tags: ['robot vacuum', 'vacuum cleaner', 'home automation', 'buying guide']
  },
  {
    id: '4',
    title: '10 Best Mixer Grinders in India 2026 | Buyer\'s Guide & Reviews!',
    slug: 'best-mixer-grinder',
    excerpt: 'Complete guide to choosing the best mixer grinder for your kitchen with detailed reviews and comparison of top models.',
    content: `A good mixer grinder is essential for every Indian kitchen. From grinding spices to making chutneys and batters, it handles a variety of tasks. We tested over 15 models to bring you the best mixer grinders available in India today.`,
    featuredImage: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&h=500&fit=crop',
    category: 'kitchen-appliances',
    subCategory: 'mixer-grinders',
    author: authors[1],
    publishedDate: '2026-01-08',
    updatedDate: '2026-01-14',
    readTime: 14,
    isFeatured: false,
    isPopular: true,
    tags: ['mixer grinder', 'kitchen appliances', 'buying guide']
  },
  {
    id: '5',
    title: 'R32 vs R410A vs R22 vs R290 vs R134A vs R600A Gas (AC Refrigerants)',
    slug: 'r32-vs-r410a-vs-r22-vs-r290',
    excerpt: 'A Refrigerant is a fluid/gas/liquid that is employed in the refrigeration cycle. Learn about different AC refrigerants and which one to choose.',
    content: `A Refrigerant is a fluid/gas/liquid that is employed in the refrigeration cycle. It undergoes phase transitions from a liquid to a gas and back again. Understanding the differences between various refrigerants is crucial when buying an air conditioner.

R32 is becoming the standard in modern ACs due to its lower global warming potential and higher energy efficiency compared to R410A and R22.`,
    featuredImage: 'https://images.unsplash.com/photo-1631545806609-c5e5d0a9e7bf?w=800&h=500&fit=crop',
    category: 'knowledge',
    subCategory: 'air-conditioners',
    author: authors[0],
    publishedDate: '2026-01-05',
    updatedDate: '2026-01-10',
    readTime: 10,
    isFeatured: false,
    isPopular: true,
    tags: ['refrigerant', 'AC', 'R32', 'R410A', 'knowledge']
  },
  {
    id: '6',
    title: 'RO vs UV vs UF Water Purifiers',
    slug: 'ro-vs-uv-vs-uf',
    excerpt: 'The choice of water purification technology depends on the quality of your water source. Learn which technology is best for you.',
    content: `The choice of water purification technology depends on the quality of the water source. RO (Reverse Osmosis) is best for high TDS water, UV (Ultraviolet) kills bacteria and viruses, while UF (Ultrafiltration) removes suspended particles.

Understanding these technologies will help you make an informed decision when purchasing a water purifier for your home.`,
    featuredImage: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&h=500&fit=crop',
    category: 'knowledge',
    subCategory: 'water-purifiers',
    author: authors[0],
    publishedDate: '2026-01-03',
    updatedDate: '2026-01-08',
    readTime: 8,
    isFeatured: false,
    isPopular: false,
    tags: ['water purifier', 'RO', 'UV', 'UF', 'comparison']
  },
  {
    id: '7',
    title: 'The Sleep Company Mattress Review | After 2 Years',
    slug: 'sleep-company-mattress-review',
    excerpt: 'The SmartGRID Luxe mattress differs from memory foam as it provides better airflow and support. Here\'s our experience after 2 years.',
    content: `The SmartGRID Luxe mattress differs from memory foam as it provides better airflow and support. After using it for two years, we can share our genuine long-term experience.

The SmartGRID technology adapts to your body shape while maintaining proper spine alignment. Unlike memory foam, it doesn't trap heat, making it comfortable even in Indian summers.`,
    featuredImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=500&fit=crop',
    category: 'mattress',
    subCategory: 'mattress',
    author: authors[0],
    publishedDate: '2026-01-01',
    updatedDate: '2026-01-05',
    readTime: 11,
    isFeatured: true,
    isPopular: true,
    tags: ['mattress', 'sleep company', 'smartgrid', 'review']
  },
  {
    id: '8',
    title: 'Atomberg Water Purifier Review | Intellon 2025',
    slug: 'atomberg-water-purifier-review',
    excerpt: 'After daily use for over a month, the feature that impressed me most was the smart TDS management system.',
    content: `After daily use for over a month, the feature that impressed me most was the smart TDS management. The Atomberg Intellon represents a new approach to water purification with its focus on efficiency and smart features.`,
    featuredImage: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?w=800&h=500&fit=crop',
    category: 'kitchen-appliances',
    subCategory: 'water-purifiers',
    author: authors[0],
    publishedDate: '2025-12-28',
    updatedDate: '2026-01-02',
    readTime: 9,
    isFeatured: false,
    isPopular: false,
    tags: ['atomberg', 'water purifier', 'intellon', 'review']
  },
  {
    id: '9',
    title: 'BEE Star Ratings For Air Conditioners 2025',
    slug: 'bee-star-ratings-air-conditioners',
    excerpt: 'When you purchase an AC or a refrigerator, you must have noticed the star rating label. Here\'s what it means and why it matters.',
    content: `When you purchase an AC or a refrigerator, you must have noticed the star rating label. The Bureau of Energy Efficiency (BEE) assigns these ratings based on energy consumption.

A higher star rating means lower electricity bills. The rating criteria change periodically, so an old 5-star AC might not be as efficient as a new 3-star model.`,
    featuredImage: 'https://images.unsplash.com/photo-1631545806609-c5e5d0a9e7bf?w=800&h=500&fit=crop',
    category: 'home-appliances',
    subCategory: 'air-conditioners',
    author: authors[0],
    publishedDate: '2025-12-25',
    updatedDate: '2025-12-30',
    readTime: 7,
    isFeatured: false,
    isPopular: false,
    tags: ['BEE', 'star rating', 'air conditioner', 'energy efficiency']
  },
  {
    id: '10',
    title: 'Top 5 Best Cold Press Juicers in India 2026',
    slug: 'best-cold-press-juicers-india',
    excerpt: 'Cold press juicers extract juice without generating heat, preserving more nutrients. Here are the best options available in India.',
    content: `Cold press juicers, also known as masticating juicers, extract juice by slowly crushing and pressing fruits and vegetables. This method generates minimal heat, preserving more nutrients and enzymes compared to centrifugal juicers.`,
    featuredImage: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800&h=500&fit=crop',
    category: 'kitchen-appliances',
    subCategory: 'juicers',
    author: authors[1],
    publishedDate: '2025-12-20',
    updatedDate: '2025-12-28',
    readTime: 12,
    isFeatured: false,
    isPopular: true,
    tags: ['cold press juicer', 'juicer', 'buying guide', 'kitchen']
  }
];

export const getFeaturedArticles = (): Article[] => {
  return articles.filter(article => article.isFeatured);
};

export const getPopularArticles = (): Article[] => {
  return articles.filter(article => article.isPopular);
};

export const getArticlesByCategory = (categoryId: string): Article[] => {
  return articles.filter(article => article.category === categoryId);
};

export const getArticlesBySubCategory = (subCategoryId: string): Article[] => {
  return articles.filter(article => article.subCategory === subCategoryId);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getRelatedArticles = (articleId: string, limit: number = 4): Article[] => {
  const currentArticle = articles.find(a => a.id === articleId);
  if (!currentArticle) return [];
  
  return articles
    .filter(a => a.id !== articleId && a.subCategory === currentArticle.subCategory)
    .slice(0, limit);
};
