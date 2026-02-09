import ProductDetail from "@/components/templates/ProductDetail";

const normalizePrice = (value) => {
  if (value === null || value === undefined) return 0;
  if (typeof value === "number") return value;
  const parsed = Number(String(value).replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
};

async function getProduct(id) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://handcrafted-haven-front-hm82.vercel.app/api';
    const res = await fetch(`${apiUrl}/products/${id}`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      return null;
    }
    
    const data = await res.json();
    const p = data.data;
    const images = (p.images && p.images.length)
      ? p.images
      : p.primary_image
        ? [{ url: p.primary_image, is_primary: true }]
        : [];

    return {
      ...p,
      category: p.category_name || p.category,
      price: normalizePrice(p.price),
      rating: p.rating ?? p.average_rating ?? 0,
      reviews: p.review_count ?? p.reviews ?? p.reviews_count ?? 0,
      seller_id: p.seller_id ?? p.sellerId ?? p.artist_id,
      images,
      artist: p.seller_name,
      artistAvatar: p.seller_avatar,
      artistId: p.seller_slug,
      artistRating: p.seller_average_rating ?? 0,
      artistProducts: p.seller_products_count ?? 0,
      seller_total_sales: Number(p.seller_total_sales ?? p.total_sales ?? 0),
      artistSales: Number(p.seller_total_sales ?? p.total_sales ?? 0),
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

async function getRelatedProducts(categoryId, currentProductId) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://handcrafted-haven-front-hm82.vercel.app/api';
    const res = await fetch(`${apiUrl}/products/category/${categoryId}?limit=4`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      return [];
    }
    
    const data = await res.json();
    return (data.data || [])
      .filter(p => p.id !== currentProductId)
      .map((p) => ({
        ...p,
        price: normalizePrice(p.price),
        category: p.category_name || p.category,
        rating: p.rating ?? p.average_rating ?? 0,
        reviews: p.review_count ?? p.reviews ?? p.reviews_count ?? 0,
        images: (p.images && p.images.length)
          ? p.images
          : p.primary_image
            ? [{ url: p.primary_image }]
            : [],
        artist: p.seller_name,
        artistId: p.seller_slug,
      }));
  } catch (error) {
    console.error('Error fetching related products:', error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProduct(id);
  
  if (!product) {
    return {
      title: "Product Not Found — Handcrafted Haven"
    };
  }

  const productImage = product.images && product.images.length > 0 
    ? product.images[0].url 
    : '/images/product-placeholder.jpg';

  return {
    title: `${product.title} — Handcrafted Haven`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      url: `https://handcraftedhaven.com/products/${product.id}`,
      siteName: 'Handcrafted Haven',
      images: [
        {
          url: productImage,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.description,
      images: [productImage],
    },
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[--text] mb-4">Product Not Found</h1>
          <p className="text-[--muted]">The product you are looking for does not exist.</p>
        </div>
      </div>
    );
  }
  
  const relatedProducts = await getRelatedProducts(product.category_id, product.id);
  
  return <ProductDetail product={product} relatedProducts={relatedProducts} />;
}
