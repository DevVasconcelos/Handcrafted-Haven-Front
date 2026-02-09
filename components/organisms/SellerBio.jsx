export default function SellerBio({ bio }) {
  return (
    <section className="py-12 border-b border-[--border]">
      <h2 className="text-2xl font-semibold text-[--text] mb-5">About the Artisan</h2>
      <div className="bg-white p-7 rounded-2xl border border-[--border] text-base leading-relaxed text-[--text] shadow-[0_1px_3px_rgba(31,27,22,0.06)]">
        {bio.map((paragraph, index) => (
          <p key={index} className={index < bio.length - 1 ? 'mb-4' : ''}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
