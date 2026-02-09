import Header from "../organisms/Header";
import Hero from "../organisms/Hero";
import ProductsSection from "../organisms/ProductsSection";
import Footer from "../organisms/Footer";

export default function Home({ products, categories }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-280 mx-auto px-4 md:px-5 w-full">
        <Hero />
        <ProductsSection initialProducts={products} categories={categories} />
      </main>
      <Footer />
    </div>
  );
}
