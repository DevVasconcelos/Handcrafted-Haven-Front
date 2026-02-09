"use client";

import { useState, useMemo } from 'react';
import ReviewCard from '../molecules/ReviewCard';
import Button from '../atoms/Button';

export default function SellerReviews({ reviews }) {
  const hasReviews = Array.isArray(reviews) && reviews.length > 0;
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleReviews = useMemo(() => {
    if (!hasReviews) return [];
    return reviews.slice(0, visibleCount);
  }, [hasReviews, reviews, visibleCount]);

  const canLoadMore = hasReviews && visibleCount < reviews.length;

  return (
    <section className="py-12 border-t border-[--border]">
      <div className="flex justify-between items-center mb-7 flex-wrap gap-4">
        <div>
          <div className="text-[10px] text-[--muted] uppercase tracking-wider font-medium mb-1">Customer Feedback</div>
          <h2 className="text-2xl font-semibold text-[--text]">Reviews & Ratings</h2>
        </div>
      </div>

      {hasReviews ? (
        <>
          <div className="space-y-5">
            {visibleReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {canLoadMore && (
            <div className="flex justify-center mt-8">
              <Button
                variant="default"
                className="px-8"
                onClick={() => setVisibleCount((prev) => prev + 3)}
              >
                Load More Reviews
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12 text-[--muted]">No reviews yet</div>
      )}
    </section>
  );
}
