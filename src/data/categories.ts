export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  articleCount: number;
}

export interface SubCategory {
  id: string;
  name: string;
  slug: string;
  parentId: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 'home-appliances',
    name: 'Home Appliances',
    slug: 'home-appliances',
    description: 'Reviews and guides for all your home appliance needs',
    icon: '🏠',
    articleCount: 45
  },
  {
    id: 'kitchen-appliances',
    name: 'Kitchen Appliances',
    slug: 'kitchen-appliances',
    description: 'Find the best kitchen appliances for your cooking needs',
    icon: '🍳',
    articleCount: 32
  },
  {
    id: 'mattress',
    name: 'Mattress',
    slug: 'mattress',
    description: 'Sleep better with our expert mattress reviews',
    icon: '🛏️',
    articleCount: 15
  },
  {
    id: 'knowledge',
    name: 'Knowledge',
    slug: 'knowledge',
    description: 'In-depth guides and educational content',
    icon: '📚',
    articleCount: 28
  }
];

export const subCategories: SubCategory[] = [
  // Home Appliances
  { id: 'air-conditioners', name: 'Air Conditioners', slug: 'air-conditioners', parentId: 'home-appliances', icon: '❄️' },
  { id: 'washing-machines', name: 'Washing Machines', slug: 'washing-machines', parentId: 'home-appliances', icon: '🧺' },
  { id: 'televisions', name: 'Televisions', slug: 'televisions', parentId: 'home-appliances', icon: '📺' },
  { id: 'ceiling-fans', name: 'Ceiling Fans', slug: 'ceiling-fans', parentId: 'home-appliances', icon: '💨' },
  { id: 'water-heaters', name: 'Water Heaters', slug: 'water-heaters', parentId: 'home-appliances', icon: '🔥' },
  { id: 'vacuum-cleaners', name: 'Vacuum Cleaners', slug: 'vacuum-cleaners', parentId: 'home-appliances', icon: '🧹' },
  { id: 'refrigerators', name: 'Refrigerators', slug: 'refrigerators', parentId: 'home-appliances', icon: '🧊' },
  
  // Kitchen Appliances
  { id: 'water-purifiers', name: 'Water Purifiers', slug: 'water-purifiers', parentId: 'kitchen-appliances', icon: '💧' },
  { id: 'juicers', name: 'Juicers', slug: 'juicers', parentId: 'kitchen-appliances', icon: '🧃' },
  { id: 'mixer-grinders', name: 'Mixer Grinders', slug: 'mixer-grinders', parentId: 'kitchen-appliances', icon: '⚙️' },
];

export const getSubCategoriesByParent = (parentId: string): SubCategory[] => {
  return subCategories.filter(sub => sub.parentId === parentId);
};
