import Header from "../organisms/Header";
import CategoriesHero from "../organisms/CategoriesHero";
import CategoriesGrid from "../organisms/CategoriesGrid";
import Footer from "../organisms/Footer";

export default function Categories({ categories }) {
  return (
    <div className="min-h-screen flex flex-col bg-(--background)">
      <Header />
      
      <main className="flex-1">
        <CategoriesHero />
        
        <div className="max-w-300 mx-auto px-4 md:px-6 pb-12 md:pb-16">
          <CategoriesGrid categories={categories} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
