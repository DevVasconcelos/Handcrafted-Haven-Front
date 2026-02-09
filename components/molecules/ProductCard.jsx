"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Label from "../atoms/Label";
import Rating from "../atoms/Rating";
import Chip from "../atoms/Chip";

export default function ProductCard({ id, title, artist, price = 0, rating, reviews, category, badge, badgeType, images }) {
  const primaryImage = images && images.length > 0 
    ? images.find(img => img.is_primary)?.url || images[0]?.url
    : null;
  const fallbackBg = "#355C7D";
  const [imageError, setImageError] = useState(false);
  const showImage = primaryImage && !imageError;

  return (
    <article className="border border-[--border] rounded-2xl overflow-hidden bg-white transition-all duration-300 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-[--primary]" aria-label={`Product: ${title} by ${artist}`}>
      <Link href={`/products/${id}`} aria-label={`View details for ${title}`}>
        <div 
          className="relative h-55 border-b border-[--border] overflow-hidden"
          role="img"
          aria-label={`${title} product thumbnail`}
          style={!showImage ? { background: fallbackBg } : undefined}
        >
          {showImage ? (
            <Image
              src={primaryImage}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              onError={() => setImageError(true)}
            />
          ) : null}
        </div>
      </Link>
      
      <div className="p-4.5">
        <div className="flex items-center gap-2 mb-1">
          <Label className="flex-1">{category?.name || category}</Label>
          <Rating rating={rating || 0} reviewCount={reviews || 0} />
        </div>
        
        <p className="text-[13px] text-[--muted] mb-2">By {artist || 'Artisan'}</p>
        
        <Link href={`/products/${id}`} className="no-underline">
          <h3 className="text-base font-semibold text-[--text] mb-2 leading-snug hover:text-[--primary] transition-colors">
            {title}
          </h3>
        </Link>
        
        <div className="flex items-end justify-between mt-3">
          <div className="text-xl font-bold text-[--primary]">
            ${typeof price === 'number' ? price.toFixed(2) : '0.00'}
          </div>
          {badge && <Chip variant={badgeType}>{badge}</Chip>}
        </div>
      </div>
    </article>
  );
}
