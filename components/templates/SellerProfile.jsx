import Header from '../organisms/Header';
import Breadcrumb from '../atoms/Breadcrumb';
import SellerHero from '../organisms/SellerHero';
import SellerBio from '../organisms/SellerBio';
import ProductGrid from '../organisms/ProductGrid';
import SellerReviews from '../organisms/SellerReviews';
import Footer from '../organisms/Footer';

export default function SellerProfile({ seller, products, reviews }) {
  return (
    <div className="min-h-screen flex flex-col bg-[--bg]">
      <Header />

      <main className="flex-1 max-w-280 mx-auto px-4 md:px-5 w-full">
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Sellers', href: '#' },
            { label: seller.name }
          ]} 
        />

        <SellerHero seller={seller} />
        
        <SellerBio bio={seller.bio} />

        <section className="py-8 md:py-12 pb-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-7 gap-4">
            <div>
              <div className="text-[10px] text-[--muted] uppercase tracking-wider font-medium mb-1">Shop Collection</div>
              <h2 className="text-xl md:text-2xl font-semibold text-[--text]">Products by {seller.name}</h2>
            </div>
            
            <div className="flex gap-3 flex-wrap w-full sm:w-auto">
              <button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-2.5 px-4 border border-(--border) rounded-lg bg-white text-(--text) text-sm font-medium transition-all duration-200 shadow-[0_1px_2px_rgba(31,27,22,0.04)] hover:border-(--primary) hover:shadow-[0_2px_4px_rgba(31,27,22,0.08)] cursor-pointer">
                <span>All Items</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 opacity-60">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="inline-flex items-center gap-2 py-2.5 px-4 border border-(--border) rounded-lg bg-white text-(--text) text-sm font-medium transition-all duration-200 shadow-[0_1px_2px_rgba(31,27,22,0.04)] hover:border-(--primary) hover:shadow-[0_2px_4px_rgba(31,27,22,0.08)] cursor-pointer">
                <span>Newest</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 opacity-60">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          <ProductGrid products={products} />
        </section>

        <SellerReviews reviews={reviews} />
      </main>

      <Footer />
    </div>
  );
}
