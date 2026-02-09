import SellerProfile from '@/components/templates/SellerProfile';

async function getSeller(slug) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://handcrafted-haven-front-hm82.vercel.app/api';
    const res = await fetch(`${apiUrl}/sellers/${slug}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching seller by slug:', error);
    return null;
  }
}

async function getSellerProducts(sellerId) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://handcrafted-haven-front-hm82.vercel.app/api';
    const res = await fetch(`${apiUrl}/products/seller/${sellerId}?limit=50`, { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching products by seller:', error);
    return [];
  }
}

async function getSellerReviews(sellerId) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://handcrafted-haven-front-hm82.vercel.app/api';
    const res = await fetch(`${apiUrl}/reviews/seller/${sellerId}?limit=20`, { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching seller reviews:', error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const seller = await getSeller(id);
  
  if (!seller) {
    return {
      title: 'Seller Not Found — Handcrafted Haven'
    };
  }

  const name = seller.name || 'Seller';
  const specialty = seller.specialty || 'Artisan';
  const location = seller.location || 'Unknown location';
  const rating = seller.average_rating ? Number(seller.average_rating).toFixed(1) : '0.0';
  const productsCount = seller.products_count ?? 0;

  return {
    title: `${name} — Artisan Profile | Handcrafted Haven`,
    description: `Discover unique handcrafted ${specialty.toLowerCase()} by ${name} from ${location}. ${productsCount} products, ${rating}★ rating.`,
    openGraph: {
      title: `${name} — ${specialty}`,
      description: `Discover unique handcrafted ${specialty.toLowerCase()} by ${name} from ${location}.`,
      url: `https://handcraftedhaven.com/sellers/${id}`,
      siteName: 'Handcrafted Haven',
      images: [
        {
          url: '/images/og-seller.jpg',
          width: 1200,
          height: 630,
          alt: `${name} - ${specialty}`,
        },
      ],
      locale: 'en_US',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} — ${specialty}`,
      description: `${productsCount} products, ${rating}★ rating`,
      images: ['/images/og-seller.jpg'],
    },
  };
}

export default async function SellerProfilePage({ params }) {
  const { id } = await params;
  const apiSeller = await getSeller(id);

  if (!apiSeller) {
    return <div>Seller not found</div>;
  }

  const name = apiSeller.name || [apiSeller.first_name, apiSeller.last_name].filter(Boolean).join(' ') || 'Seller';

  const seller = {
    id: apiSeller.id,
    slug: apiSeller.slug,
    name,
    avatar: apiSeller.avatar || name?.[0] || '👤',
    location: apiSeller.location || 'Unknown location',
    specialty: apiSeller.specialty || 'Artisan',
    bio: apiSeller.bio ? [apiSeller.bio] : [],
    gradient: apiSeller.gradient || 'linear-gradient(135deg, #8B7355 0%, #C2956E 100%)',
    stats: {
      products: apiSeller.products_count ?? 0,
      rating: apiSeller.average_rating ? Number(apiSeller.average_rating).toFixed(1) : '0.0',
      reviews: apiSeller.reviews_count ?? 0,
      memberSince: apiSeller.member_since ? new Date(apiSeller.member_since).getFullYear() : '—',
    },
  };

  const sellerProductsRaw = await getSellerProducts(apiSeller.id);
  const sellerReviewsRaw = await getSellerReviews(apiSeller.id);

  const sellerProducts = sellerProductsRaw.map((p) => ({
    id: p.id,
    title: p.title,
    price: p.price,
    category: p.category_name || p.category,
    average_rating: p.average_rating || p.rating || 0,
    review_count: p.reviews_count || p.review_count || 0,
    images: (p.images && Array.isArray(p.images) && p.images.length)
      ? p.images.map((img) => ({ url: img.url, alt: p.title }))
      : p.primary_image
        ? [{ url: p.primary_image, alt: p.title }]
        : [],
    seller: { store_name: p.seller_name || seller.name },
  }));

  const sellerReviews = sellerReviewsRaw.map((r) => ({
    id: r.id,
    reviewer: r.reviewer_name || r.reviewer || 'User',
    avatar: r.reviewer_avatar || r.avatar,
    rating: r.rating,
    text: r.text,
    created_at: r.created_at,
  }));

  return <SellerProfile seller={seller} products={sellerProducts} reviews={sellerReviews} />;
}
