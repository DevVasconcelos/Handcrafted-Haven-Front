import ProductGrid from "@/components/organisms/ProductGrid";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

const normalizeNumber = (value, fallback = 0) => {
  if (value === null || value === undefined) return fallback;
  if (typeof value === "number") return Number.isFinite(value) ? value : fallback;
  const parsed = Number(String(value).replace(",", "."));
  return Number.isFinite(parsed) ? parsed : fallback;
};

const normalizePrice = (value) => normalizeNumber(value, 0);

const normalizeProduct = (product = {}) => {
  const images = product.images && product.images.length
    ? product.images
    : product.primary_image
      ? [{ url: product.primary_image, is_primary: true }]
      : [];

  return {
    ...product,
    title: product.title || product.name || product.product_name || "Product",
    price: normalizePrice(product.price ?? product.value ?? product.amount),
    category: product.category_name || product.category || product.category?.name,
    category_name: product.category_name || product.category || product.category?.name,
    seller_name: product.seller_name || product.seller?.store_name || product.seller,
    rating: product.rating ?? product.average_rating ?? 0,
    reviews: product.review_count ?? product.reviews ?? product.reviews_count ?? 0,
    images,
  };
};

async function getSearchResults(query) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://handcrafted-haven-front-hm82.vercel.app/api";
  const params = new URLSearchParams();
  params.set("limit", "50");
  if (query) params.set("search", query);

  const res = await fetch(`${apiUrl}/products/search?${params.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  return (data.data || []).map(normalizeProduct);
}

export const metadata = {
  title: "Search Products — Handcrafted Haven",
  description: "Find handcrafted products by name, category, or artisan.",
};

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.q || "";
  const products = await getSearchResults(query);
  const filtered = query
    ? products.filter((p) => {
        const haystack = [
          p.title,
          p.name,
          p.product_name,
          p.category,
          p.category_name,
          p.seller_name,
          p.seller?.store_name,
          p.description
        ]
          .filter(Boolean)
          .map((value) => String(value).toLowerCase());
        return haystack.some((value) => value.includes(query.toLowerCase()));
      })
    : products;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-280 mx-auto px-4 md:px-5 w-full pb-16">
        <div className="pt-8 pb-6 flex flex-col gap-2">
          <p className="text-sm text-(--muted)">Search results</p>
          <h1 className="text-3xl font-bold text-(--text)">
            {query ? `Results for "${query}"` : "All products"}
          </h1>
        </div>

        <ProductGrid
          products={filtered}
          loading={false}
          pagination={{ page: 1, pages: 1, total: filtered.length, limit: filtered.length || 1 }}
          onPageChange={() => {}}
        />
      </main>
      <Footer />
    </div>
  );
}
