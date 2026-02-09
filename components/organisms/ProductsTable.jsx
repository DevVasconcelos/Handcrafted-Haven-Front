import Link from 'next/link';
import ProductTableRow from '../molecules/ProductTableRow';

export default function ProductsTable({ products }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-(--border) overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 md:p-6 lg:p-8 border-b border-(--border)">
        <h2 className="text-lg md:text-xl font-bold text-(--text)">Your Products</h2>
        <Link 
          href="/add-product" 
          className="flex items-center gap-2 text-(--primary) text-sm font-semibold transition-all duration-200 hover:gap-3 cursor-pointer"
        >
          View All
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-150">
          <thead>
            <tr className="border-b-2 border-(--border)">
              <th className="text-left py-3 px-3 text-xs font-semibold text-(--muted) uppercase tracking-wider">
                Product
              </th>
              <th className="text-left py-3 px-3 text-xs font-semibold text-(--muted) uppercase tracking-wider">
                Price
              </th>
              <th className="text-left py-3 px-3 text-xs font-semibold text-(--muted) uppercase tracking-wider">
                Stock
              </th>
              <th className="text-left py-3 px-3 text-xs font-semibold text-(--muted) uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-3 px-3 text-xs font-semibold text-(--muted) uppercase tracking-wider">
                Sales
              </th>
              <th className="text-left py-3 px-3 text-xs font-semibold text-(--muted) uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductTableRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
