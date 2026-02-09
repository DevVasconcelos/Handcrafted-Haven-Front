import Link from "next/link";

export default function CategoryCard({ name, slug, description, icon, gradient, productsCount, artisansCount }) {
  return (
    <Link 
      href={`/categories/${slug}`}
      className="bg-white rounded-3xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col group focus:outline-none focus:ring-4 focus:ring-(--primary)/20"
      aria-label={`Browse ${name} category with ${productsCount} products and ${artisansCount} artisans`}
    >
      <div className={`h-60 bg-linear-to-br ${gradient} flex items-center justify-center text-8xl relative overflow-hidden`} role="img" aria-label={`${name} category icon`}>
        <div className="absolute inset-0 bg-linear-to-br from-transparent to-[rgba(31,27,22,0.1)]" />
        <span className="relative z-10 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">{icon}</span>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-2xl font-bold text-(--text) mb-2">
          {name}
        </h2>
        <p className="text-sm text-(--muted) leading-relaxed mb-4 flex-1">
          {description}
        </p>
        
        <div className="flex items-center gap-6 text-[13px] text-(--muted) pt-4 border-t border-(--border)">
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span>{productsCount} products</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{artisansCount} artisans</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
