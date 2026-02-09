import CategoryCard from "../molecules/CategoryCard";
import Carousel from "./Carousel";

export default function CategoriesGrid({ categories }) {
  return (
    <section>
      {/* Mobile Carousel */}
      <div className="md:hidden">
        <Carousel>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              slug={category.slug}
              description={category.description}
              icon={category.icon}
              gradient={category.gradient}
              productsCount={category.productsCount}
              artisansCount={category.artisansCount}
            />
          ))}
        </Carousel>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            slug={category.slug}
            description={category.description}
            icon={category.icon}
            gradient={category.gradient}
            productsCount={category.productsCount}
            artisansCount={category.artisansCount}
          />
        ))}
      </div>
    </section>
  );
}
