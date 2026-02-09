export default function ProductCardSkeleton() {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-[--border] animate-pulse">
      <div className="aspect-square bg-gradient-to-br from-[--border]/30 to-[--bg] relative" />
      
      <div className="p-5">
        <div className="h-4 bg-[--border]/50 rounded w-3/4 mb-3" />
        <div className="h-3 bg-[--border]/50 rounded w-1/2 mb-4" />
        <div className="flex items-center justify-between">
          <div className="h-6 bg-[--border]/50 rounded w-20" />
          <div className="h-8 bg-[--border]/50 rounded w-8" />
        </div>
      </div>
    </div>
  );
}
