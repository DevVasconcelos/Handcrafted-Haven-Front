export default function FilterButton({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2.5 border border-(--border) rounded-lg bg-white text-(--text) text-sm font-medium transition-all shadow-sm hover:border-(--primary) hover:shadow-md"
    >
      <span>{children}</span>
      <svg 
        className="w-4 h-4 opacity-60" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}
