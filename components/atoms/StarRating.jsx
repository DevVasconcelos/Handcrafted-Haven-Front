import { useEffect, useState } from "react";

export default function StarRating({ value = 0, onChange }) {
  const [rating, setRating] = useState(value);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    setRating(value);
  }, [value]);

  const current = hover || rating;

  const handleSelect = (val) => {
    setRating(val);
    onChange?.(val);
  };

  return (
    <div className="inline-flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className="p-0.5"
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          onClick={() => handleSelect(star)}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
        >
          <span
            className={[
              "text-3xl transition-colors",
              star <= current ? "text-yellow-400" : "text-gray-300",
            ].join(" ")}
          >
            ★
          </span>
        </button>
      ))}
    </div>
  );
}
