import Link from 'next/link';
import Header from '../organisms/Header';
import DashboardSidebar from '../organisms/DashboardSidebar';
import StatsGrid from '../organisms/StatsGrid';
import ProductsTable from '../organisms/ProductsTable';
import ActivityTimeline from '../organisms/ActivityTimeline';
import Footer from '../organisms/Footer';
import Button from '../atoms/Button';

export default function Dashboard({ stats, products, timeline, sellerName }) {
  return (
    <div className="min-h-screen flex flex-col bg-[--bg]">
      <Header />

      <main className="flex-1 max-w-360 mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 md:gap-8 py-6 md:py-8">
          <DashboardSidebar />

          <div className="flex flex-col gap-6 md:gap-8">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 md:gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[--text] mb-2 tracking-tight">Dashboard</h1>
                <p className="text-[15px] text-[--muted]">Welcome back, {sellerName}</p>
              </div>
              
              <Link href="/add-product">
                <Button variant="primary" className="px-4 md:px-6 w-full sm:w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Add New Product
                </Button>
              </Link>
            </div>

            {/* Stats Grid */}
            {stats && <StatsGrid stats={stats} />}

            {/* Products Table */}
            {products && products.length > 0 && <ProductsTable products={products} />}

            {/* Activity Timeline */}
            {timeline && <ActivityTimeline timeline={timeline} />}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
