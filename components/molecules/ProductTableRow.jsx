import Link from 'next/link';

export default function ProductTableRow({ product }) {
  const priceNumber = Number(product.price);
  const formattedPrice = Number.isFinite(priceNumber) ? priceNumber.toFixed(2) : '0.00';

  return (
    <tr className="border-b border-(--border)">
      <td className="py-4 px-3">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-linear-to-br from-(--accent2) to-(--accent3) shrink-0">
            {product.icon}
          </div>
          <div>
            <div className="font-semibold text-(--text) text-[15px]">{product.title}</div>
            <div className="text-sm text-(--muted)">{product.category}</div>
          </div>
        </div>
      </td>
      
      <td className="py-4 px-3">
              <span className="font-semibold text-(--text)">${formattedPrice}</span>
      </td>
      
      <td className="py-4 px-3">
        <span className={`font-medium ${product.stock === 0 ? 'text-(--primary)' : 'text-(--text)'}`}>
          {product.stock}
        </span>
      </td>
      
      <td className="py-4 px-3">
        {product.stock > 0 ? (
          <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-(--success)/10 text-(--success)">
            Active
          </span>
        ) : (
          <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-(--primary)/10 text-(--primary)">
            Out of Stock
          </span>
        )}
      </td>
      
      <td className="py-4 px-3">
        <span className="text-(--text)">{product.sales || 0}</span>
      </td>
      
      <td className="py-4 px-3">
        <div className="flex gap-2">
          <button 
            className="w-9 h-9 border border-(--border) rounded-lg bg-white flex items-center justify-center transition-all duration-200 hover:border-(--primary) hover:bg-(--bg) cursor-pointer"
            title="Edit"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-(--muted)">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          
          <Link 
            href={`/products/${product.id}`}
            className="w-9 h-9 border border-(--border) rounded-lg bg-white flex items-center justify-center transition-all duration-200 hover:border-(--primary) hover:bg-(--bg) cursor-pointer"
            title="View"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-(--muted)">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </Link>
          
          <button 
            className="w-9 h-9 border border-(--border) rounded-lg bg-white flex items-center justify-center transition-all duration-200 hover:border-(--primary) hover:bg-(--primary)/10 cursor-pointer group"
            title="Delete"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-(--muted) group-hover:text-(--primary)">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}
