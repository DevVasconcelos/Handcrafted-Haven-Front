"use client";

import { useState } from "react";

export default function ImageGallery({ images, gradient }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [broken, setBroken] = useState({});
  const normalizedImages = (images || []).map((image) => {
    if (typeof image === "string") return { url: image, alt: "" };
    if (image && typeof image === "object") {
      return { url: image.url, alt: image.alt || "" };
    }
    return { url: "", alt: "" };
  });

  const fallbackBg = "#355C7D";
  const getSrc = (index) => {
    const img = normalizedImages[index];
    return broken[index] ? null : (img?.url || null);
  };
  const hasImages = normalizedImages.length > 0;

  return (
    <div className="space-y-4">
      <div 
        className="h-120 rounded-3xl flex items-center justify-center text-9xl shadow-lg"
        style={{ background: gradient }}
      >
        {hasImages && getSrc(activeIndex) ? (
          <img
            src={getSrc(activeIndex)}
            alt={normalizedImages[activeIndex].alt || "Product image"}
            className="max-h-full max-w-full object-contain rounded-2xl"
            onError={() => setBroken((prev) => ({ ...prev, [activeIndex]: true }))}
          />
        ) : (
          <div className="w-full h-full rounded-2xl" style={{ background: fallbackBg }} />
        )}
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {normalizedImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-24 rounded-2xl flex items-center justify-center text-4xl cursor-pointer transition-all duration-300 ${
              activeIndex === index 
                ? 'ring-4 ring-(--primary) shadow-lg scale-105' 
                : 'bg-white border-2 border-(--border) hover:border-(--primary) hover:scale-105'
            }`}
            style={activeIndex === index ? { background: gradient } : {}}
          >
            {image.url && !broken[index] ? (
              <img
                src={getSrc(index)}
                alt={image.alt || "Thumbnail"}
                className={`max-h-full max-w-full object-contain rounded-xl ${activeIndex === index ? 'ring-2 ring-white' : ''}`}
                onError={() => setBroken((prev) => ({ ...prev, [index]: true }))}
              />
            ) : (
              <div
                className={`w-full h-full rounded-xl ${activeIndex === index ? 'ring-2 ring-white' : ''}`}
                style={{ background: fallbackBg }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
