import Home from '@/components/templates/Home';

async function getProducts() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://handcrafted-haven-front-hm82.vercel.app/api';
    const res = await fetch(`${apiUrl}/products?limit=12&page=1`, {
      cache: 'no-store',
      next: { revalidate: 0 }
    });

    if (!res.ok) {
      const body = await res.text();
      console.error('Products request failed', res.status, res.statusText, body);
      return [];
    }

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

async function getCategories() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://handcrafted-haven-front-hm82.vercel.app/api';
    const res = await fetch(`${apiUrl}/categories`, {
      cache: 'no-store',
      next: { revalidate: 0 }
    });

    if (!res.ok) {
      const body = await res.text();
      console.error('Categories request failed', res.status, res.statusText, body);
      return [];
    }

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export const metadata = {
  title: 'Handcrafted Haven — Unique Handmade Products from Artisans Worldwide',
  description: 'Discover unique handcrafted products made by talented artisans from around the world. Shop ceramics, textiles, jewelry, and more sustainable handmade items.',
  keywords: 'handmade, handcrafted, artisan, ceramic, pottery, sustainable, unique gifts, handmade marketplace',
  openGraph: {
    title: 'Handcrafted Haven — Unique Handmade Products from Artisans Worldwide',
    description: 'Discover unique handcrafted products made by talented artisans from around the world.',
    url: 'https://handcraftedhaven.com',
    siteName: 'Handcrafted Haven',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Handcrafted Haven - Unique Handmade Products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handcrafted Haven — Unique Handmade Products',
    description: 'Discover unique handcrafted products made by talented artisans from around the world.',
    images: ['/images/og-home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories()
  ]);
  
  return <Home products={products} categories={categories} />;
}
