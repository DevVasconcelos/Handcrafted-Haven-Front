import ProductCard from "../molecules/ProductCard";
import Carousel from "./Carousel";

export default function RelatedProducts({ products }) {
  return (
    <section className="py-12 border-t border-(--border)">
      <h2 className="text-3xl font-bold text-(--text) mb-8">
        You May Also Like
      </h2>
      
      {/* Mobile Carousel */}
      <div className="sm:hidden">
        <Carousel>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </Carousel>
      </div>

      {/* Desktop Grid */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
