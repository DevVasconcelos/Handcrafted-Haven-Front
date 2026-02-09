import Rating from "../atoms/Rating";
import ProductActions from "../molecules/ProductActions";
import SellerCard from "../molecules/SellerCard";

export default function ProductInfo({ product }) {
  const priceValue = Number(product?.price ?? 0);
  const formattedPrice = Number.isFinite(priceValue) ? priceValue.toFixed(2) : "0.00";
  const derivedSpecs = {
    Materials: product?.materials,
    Dimensions: product?.dimensions,
    Weight: product?.weight,
    Color: product?.color,
    "Shipping time": product?.shipping_time,
  };
  const specs = product?.specifications && Object.keys(product.specifications).length > 0
    ? product.specifications
    : Object.fromEntries(Object.entries(derivedSpecs).filter(([, v]) => v));
  const sellerName = product?.seller_name || product?.artist || "";
  const sellerAvatar = product?.seller_avatar || product?.artistAvatar || "";
  const sellerSlug = product?.seller_slug || product?.artistId || "";
  const sellerRating = product?.seller_average_rating ?? product?.artistRating ?? 0;
  const sellerProducts = product?.seller_products_count ?? product?.products_count ?? product?.artistProducts ?? 0;
  const sellerSales = product?.seller_total_sales ?? product?.artistSales ?? product?.total_sales ?? product?.sales_count ?? 0;

  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-(--muted) font-semibold uppercase tracking-wide mb-3">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
          <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
        </svg>
        {product.category}
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-(--text) mb-4 leading-tight">
        {product.title}
      </h1>
      
      <div className="mb-4">
        <Rating rating={product.rating} reviewCount={product.reviews} size="large" />
      </div>
      
      <div className="text-5xl font-bold text-(--primary) mb-6">
        ${formattedPrice}
      </div>
      
      <p className="text-base text-(--muted) leading-relaxed mb-6">
        {product.description}
      </p>
      
      {Object.keys(specs).length > 0 && (
        <div className="bg-white border border-(--border) rounded-2xl p-5 space-y-3 mb-6">
          {Object.entries(specs).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center py-3 border-b border-(--border) last:border-b-0">
              <span className="text-sm text-(--muted) font-medium capitalize">
                {key}
              </span>
              <span className="text-sm text-(--text) font-semibold">
                {value}
              </span>
            </div>
          ))}
        </div>
      )}
      
      <ProductActions />
      
      <SellerCard
        name={sellerName}
        avatar={sellerAvatar}
        rating={sellerRating}
        products={sellerProducts}
        sales={sellerSales}
        sellerSlug={sellerSlug}
      />
    </div>
  );
}
