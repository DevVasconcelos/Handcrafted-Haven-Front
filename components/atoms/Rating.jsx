export default function Rating({ rating, reviewCount }) {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-(--accent3)' : 'text-(--border)'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      {reviewCount && (
        <span className="ml-1.5 text-[13px] text-(--muted) font-medium">
          ({reviewCount})
        </span>
      )}
    </div>
  );
}
