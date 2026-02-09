export default function ProductActions() {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      <button className="flex-1 min-w-48 px-8 py-4 bg-(--primary) text-white text-base font-semibold rounded-xl transition-all hover:bg-(--primaryDark) hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Add to Cart
      </button>
      
      <button className="px-8 py-4 bg-white border border-(--border) text-(--text) text-base font-semibold rounded-xl transition-all hover:border-(--primary) hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        Save
      </button>
      
      <button className="px-8 py-4 bg-white border border-(--border) text-(--text) text-base font-semibold rounded-xl transition-all hover:border-(--primary) hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Contact
      </button>
    </div>
  );
}
