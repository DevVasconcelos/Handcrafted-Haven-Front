import Link from 'next/link';
import Header from '../organisms/Header';
import AddProductForm from '../organisms/AddProductForm';
import Footer from '../organisms/Footer';

export default function AddProduct() {
  return (
    <div className="min-h-screen flex flex-col bg-(--bg)">
      <Header />

      <main className="flex-1 max-w-300 mx-auto px-4 md:px-6 w-full py-6 md:py-8">
        {/* Page Header */}
        <div className="mb-6 md:mb-8">
          <Link 
            href="/dashboard" 
            className="inline-flex items-center gap-2 text-(--primary) text-sm font-semibold mb-4 transition-all duration-200 hover:gap-3 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-(--text) mb-2 tracking-tight">Add New Product</h1>
          <p className="text-sm md:text-[15px] text-(--muted)">List your handcrafted item for sale in the marketplace</p>
        </div>

        <AddProductForm />
      </main>

      <Footer />
    </div>
  );
}
