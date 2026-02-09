import Link from "next/link";

export default function SellerCard({ name = "", avatar = "", rating = 0, products = 0, sales = 0, sellerSlug = "" }) {
  const initials = name
    ? name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .toUpperCase()
    : "";

  const isImage = typeof avatar === "string" && avatar.startsWith("http");
  const displayRating = Number.isFinite(Number(rating)) ? Number(rating).toFixed(1) : "0.0";
  const displayProducts = Number.isFinite(Number(products)) ? Number(products) : 0;
  const displaySales = Number.isFinite(Number(sales)) ? Number(sales) : 0;
  const sellerHref = sellerSlug ? `/sellers/${sellerSlug}` : "/sellers";
  return (
    <div className="border border-(--border) rounded-2xl p-6 bg-white shadow-md mt-6">
      <div className="text-[13px] text-(--muted) uppercase tracking-wider font-semibold mb-4">
        Sold by
      </div>
      
      <div className="flex gap-4 items-center mb-5">
        <div className="w-16 h-16 rounded-full bg-linear-to-br from-(--primary) to-(--primaryDark) flex items-center justify-center text-white text-2xl font-bold shadow-lg shrink-0 overflow-hidden">
          {isImage ? (
            <img src={avatar} alt={name || "Seller avatar"} className="w-full h-full object-cover" />
          ) : (
            <span>{avatar || initials || "?"}</span>
          )}
        </div>
        
        <div className="flex-1">
          <div className="text-lg font-bold text-(--text) mb-1">
            {name}
          </div>
          <div className="flex items-center gap-4 text-sm text-(--muted)">
            <span>⭐ {displayRating}</span>
            <span>•</span>
            <span>{displayProducts} products</span>
            <span>•</span>
            <span>{displaySales} sales</span>
          </div>
        </div>
      </div>
      
      <Link
        href={sellerHref}
        className="block w-full px-6 py-3 border border-(--border) bg-white text-(--text) text-sm font-semibold rounded-xl text-center transition-all hover:border-(--primary) hover:text-(--primary) hover:shadow-md"
      >
        View Seller Profile
      </Link>
    </div>
  );
}
