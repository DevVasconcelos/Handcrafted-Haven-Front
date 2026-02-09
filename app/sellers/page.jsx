import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Carousel from "@/components/organisms/Carousel";

export const metadata = {
  title: 'Sellers - Handcrafted Haven',
  description: 'Discover talented artisans and craftspeople from around the world. Browse our curated selection of verified sellers creating unique handmade products.',
  openGraph: {
    title: 'Meet Our Talented Sellers',
    description: 'Discover talented artisans and craftspeople from around the world.',
    url: 'https://handcraftedhaven.com/sellers',
    siteName: 'Handcrafted Haven',
    images: [
      {
        url: '/images/og-sellers.jpg',
        width: 1200,
        height: 630,
        alt: 'Handcrafted Haven Sellers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Our Talented Sellers',
    description: 'Discover talented artisans from around the world.',
    images: ['/images/og-sellers.jpg'],
  },
};

// This route needs to run on the server at request time because we fetch with no-store
export const dynamic = 'force-dynamic';

async function getSellers() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://handcrafted-haven-front-hm82.vercel.app/api';
    const res = await fetch(`${apiUrl}/sellers`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error('Failed to fetch sellers');
    }

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching sellers:', error);
    return [];
  }
}

export default async function SellersPage() {
  const sellers = (await getSellers()).map((seller, index) => ({
    id: seller.id || index,
    slug: seller.slug,
    name: seller.name,
    avatar: seller.avatar || seller.name?.[0] || '👤',
    location: seller.location || 'Unknown location',
    specialty: seller.specialty || 'Artisan',
    gradient: seller.gradient || 'linear-gradient(135deg, #8B7355 0%, #C2956E 100%)',
    stats: {
      products: seller.products_count ?? 0,
      rating: seller.average_rating ? Number(seller.average_rating).toFixed(1) : '0.0',
      reviews: seller.reviews_count ?? 0,
      memberSince: seller.member_since ? new Date(seller.member_since).getFullYear() : '—',
    },
  }));

  return (
    <>
      <Header />
      
      <main className="min-h-screen py-8 md:py-12 lg:py-16 px-4 md:px-6">
        <div className="max-w-350 mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-(--primary)/10 to-(--accent2)/10 border border-(--primary)/20 text-(--primary) text-sm font-semibold mb-5">
              👥 Meet Our Artisans
            </div>
            <h1 className="text-5xl font-bold text-(--text) mb-5 leading-tight">
              Talented Sellers
            </h1>
            <p className="text-lg text-(--muted) max-w-160 mx-auto leading-relaxed">
              Discover the skilled artisans behind our handcrafted products. Each seller brings unique expertise, passion, and dedication to their craft.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
            <div className="text-center p-6 rounded-2xl border border-(--border) bg-white shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-(--primary) mb-2">
                {sellers.length}+
              </div>
              <div className="text-sm text-(--muted) font-medium">
                Verified Sellers
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl border border-(--border) bg-white shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-(--success) mb-2">
                4.8★
              </div>
              <div className="text-sm text-(--muted) font-medium">
                Average Rating
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl border border-(--border) bg-white shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-(--accent2) mb-2">
                500+
              </div>
              <div className="text-sm text-(--muted) font-medium">
                Total Reviews
              </div>
            </div>
          </div>

          {/* Sellers Grid */}
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel>
              {sellers.map((seller) => (
                <SellerProfileCard
                  key={seller.id}
                  seller={seller}
                />
              ))}
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellers.map((seller) => (
              <SellerProfileCard
                key={seller.id}
                seller={seller}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}

function SellerProfileCard({ seller }) {
  const isAvatarUrl = typeof seller.avatar === 'string' && seller.avatar.startsWith('http');

  return (
    <a 
      href={`/sellers/${seller.slug}`}
      className="group block border border-(--border) rounded-2xl p-6 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Avatar & Badge */}
      <div className="relative mb-5">
        <div
          className="w-24 h-24 mx-auto rounded-full shadow-lg flex items-center justify-center overflow-hidden"
          style={{ background: seller.gradient }}
        >
          {isAvatarUrl ? (
            // Constrain remote avatar URLs so they don't overflow
            <img
              src={seller.avatar}
              alt={seller.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-5xl leading-none">{seller.avatar}</span>
          )}
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-(--success) text-white text-xs font-bold shadow-md">
          ✓ Verified
        </div>
      </div>

      {/* Seller Info */}
      <div className="text-center mb-5">
        <h3 className="text-xl font-bold text-(--text) mb-2 group-hover:text-(--primary) transition-colors">
          {seller.name}
        </h3>
        <div className="text-sm text-(--muted) mb-1">
          {seller.specialty}
        </div>
        <div className="text-sm text-(--muted) flex items-center justify-center gap-1">
          <svg 
            className="w-4 h-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {seller.location}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-5 pb-5 border-b border-(--border)">
        <div className="text-center">
          <div className="text-lg font-bold text-(--text)">
            {seller.stats.products}
          </div>
          <div className="text-xs text-(--muted)">
            Products
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-(--text)">
            {seller.stats.rating}★
          </div>
          <div className="text-xs text-(--muted)">
            Rating
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-(--text)">
            {seller.stats.reviews}
          </div>
          <div className="text-xs text-(--muted)">
            Reviews
          </div>
        </div>
      </div>

      {/* Member Since */}
      <div className="text-center text-xs text-(--muted)">
        Member since {seller.stats.memberSince}
      </div>

      {/* Hover Arrow */}
      <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-(--primary) opacity-0 group-hover:opacity-100 transition-opacity">
        View Profile
        <svg 
          className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}
