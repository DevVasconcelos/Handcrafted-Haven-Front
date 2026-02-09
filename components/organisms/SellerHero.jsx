import Button from "../atoms/Button";

export default function SellerHero({ seller }) {
  const isAvatarUrl = typeof seller.avatar === 'string' && seller.avatar.startsWith('http');

  return (
    <section className="py-8 pb-10 border-b border-[--border]">
      <div className="flex gap-8 items-start flex-wrap">
        <div className="w-40 h-40 rounded-[20px] flex items-center justify-center text-white text-[64px] shrink-0 shadow-[0_8px_24px_rgba(31,27,22,0.12)] overflow-hidden" style={{ background: seller.gradient }}>
          {isAvatarUrl ? (
            <img src={seller.avatar} alt={seller.name} className="w-full h-full object-cover" />
          ) : (
            <span className="leading-none">{seller.avatar}</span>
          )}
        </div>
        
        <div className="flex-1 min-w-75">
          <h1 className="text-4xl font-bold text-[--text] mb-2 tracking-tight">
            {seller.name}
          </h1>
          
          <div className="text-base text-[--muted] mb-5 flex items-center gap-3 flex-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4.5 h-4.5 text-[--accent2]">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{seller.location} • {seller.specialty}</span>
          </div>

          <div className="flex gap-8 mt-6 pt-5 flex-wrap">
            <div className="flex flex-col gap-1">
              <div className="text-[28px] font-bold text-[--text]">{seller.stats.products}</div>
              <div className="text-[13px] text-[--muted] uppercase tracking-wider">Products</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[28px] font-bold text-[--text]">{seller.stats.rating}★</div>
              <div className="text-[13px] text-[--muted] uppercase tracking-wider">Rating</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[28px] font-bold text-[--text]">{seller.stats.reviews}</div>
              <div className="text-[13px] text-[--muted] uppercase tracking-wider">Reviews</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[28px] font-bold text-[--text]">{seller.stats.memberSince}</div>
              <div className="text-[13px] text-[--muted] uppercase tracking-wider">Member Since</div>
            </div>
          </div>

          <div className="mt-6 flex gap-3 flex-wrap">
            <Button variant="primary" className="px-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Seller
            </Button>
            <Button variant="default" className="px-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Follow
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
