import ProductCard from "../molecules/ProductCard";
import ProductGridSkeleton from "./ProductGridSkeleton";
import Button from "../atoms/Button";
import Carousel from "./Carousel";

export default function ProductGrid({ products, loading, pagination, onPageChange }) {
  const normalizePrice = (value) => {
    if (value === null || value === undefined) return 0;
    if (typeof value === "number") return value;
    const parsed = Number(String(value).replace(",", "."));
    return Number.isFinite(parsed) ? parsed : 0;
  };
  const isLoading = loading;

  if (isLoading) {
    return (
      <div className="py-16 text-center text-[--text]">
        <p className="text-lg font-semibold">Loading products...</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-bold text-[--text] mb-2">No products found</h3>
        <p className="text-[--muted]">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <>
      {/* Mobile Carousel */}
      <div className="sm:hidden">
        <Carousel>
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              title={product.title}
              artist={product.seller_name || product.seller?.store_name || product.artist || 'Artisan'}
              price={normalizePrice(product.price)}
              rating={product.average_rating ?? product.rating}
              reviews={product.reviews_count ?? product.review_count ?? product.reviews}
              category={product.category_name || product.category}
              images={(product.images && product.images.length) ? product.images : (product.primary_image ? [{ url: product.primary_image }] : [])}
            />
          ))}
        </Carousel>
      </div>

      {/* Desktop Grid */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            title={product.title}
            artist={product.seller_name || product.seller?.store_name || product.artist || 'Artisan'}
              price={normalizePrice(product.price)}
            rating={product.average_rating ?? product.rating}
            reviews={product.reviews_count ?? product.review_count ?? product.reviews}
            category={product.category_name || product.category}
            images={(product.images && product.images.length) ? product.images : (product.primary_image ? [{ url: product.primary_image }] : [])}
          />
        ))}
      </div>

      {/* Pagination */}
      {pagination && pagination.pages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12">
          <Button
            variant="default"
            onClick={() => onPageChange(pagination.page - 1)}
            disabled={pagination.page === 1}
            className="px-6"
          >
            Previous
          </Button>
          
          <span className="text-[--muted] text-sm">
            Page {pagination.page} of {pagination.pages}
          </span>
          
          <Button
            variant="default"
            onClick={() => onPageChange(pagination.page + 1)}
            disabled={pagination.page === pagination.pages}
            className="px-6"
          >
            Next
          </Button>
        </div>
      )}
    </>
  );
}
