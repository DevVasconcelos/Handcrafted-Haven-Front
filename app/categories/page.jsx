import Categories from "@/components/templates/Categories";

async function getCategories() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://handcrafted-haven-front-hm82.vercel.app/api';
    const res = await fetch(`${apiUrl}/categories`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }
    
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export const metadata = {
  title: "Browse Categories — Handcrafted Haven",
  description: "Explore unique handcrafted items organized by category. Discover ceramics, textiles, jewelry, woodwork, and more from talented artisans.",
  openGraph: {
    title: 'Browse Categories — Handcrafted Haven',
    description: 'Explore unique handcrafted items organized by category from talented artisans.',
    url: 'https://handcraftedhaven.com/categories',
    siteName: 'Handcrafted Haven',
    images: [
      {
        url: '/images/og-categories.jpg',
        width: 1200,
        height: 630,
        alt: 'Browse Handcrafted Categories',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Browse Categories — Handcrafted Haven',
    description: 'Explore unique handcrafted items from talented artisans.',
    images: ['/images/og-categories.jpg'],
  },
};

export default async function CategoriesPage() {
  const categories = await getCategories();
  return <Categories categories={categories} />;
}
