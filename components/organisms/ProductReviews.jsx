'use client';

import { useState, useEffect, useCallback } from 'react';
import { reviewService } from '@/lib/api/reviews';
import { useAuth } from '@/lib/context/AuthContext';
import ReviewCard from '../molecules/ReviewCard';
import ReviewForm from '../molecules/ReviewForm';
import Button from '../atoms/Button';

export default function ProductReviews({ productId, sellerId }) {
  const { user, isSeller } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const canReview = !!user && !isSeller();

  const loadReviews = useCallback(async () => {
    try {
      setLoading(true);
      const data = await reviewService.getByProduct(productId, page, 10);
      setReviews(data.data || []);
      setTotalPages(data.pagination?.totalPages || 1);
    } catch (err) {
      console.error('Error loading reviews:', err);
      setError('Failed to load reviews');
    } finally {
      setLoading(false);
    }
  }, [productId, page]);

  useEffect(() => {
    loadReviews();
  }, [loadReviews]);

  const handleReviewAdded = (newReview) => {
    setReviews([newReview, ...reviews]);
    setShowReviewForm(false);
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  if (loading && page === 1) {
    return (
      <section className="py-12 border-t border-[--border]">
        <div className="text-center text-[--muted]">Loading reviews...</div>
      </section>
    );
  }

  return (
    <section className="py-12 border-t border-[--border]">
      <div className="flex justify-between items-center mb-7 flex-wrap gap-4">
        <div>
          <div className="text-[10px] text-[--muted] uppercase tracking-wider font-medium mb-1">
            Customer Feedback
          </div>
          <h2 className="text-2xl font-semibold text-[--text]">
            Reviews ({reviews.length})
          </h2>
        </div>

        {canReview && (
          <Button
            variant="primary"
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="px-6"
          >
            {showReviewForm ? 'Cancel' : 'Write a Review'}
          </Button>
        )}
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm mb-6">
          {error}
        </div>
      )}

      {showReviewForm && canReview && (
        <div className="mb-6">
          <ReviewForm productId={productId} sellerId={sellerId} onReviewAdded={handleReviewAdded} />
        </div>
      )}

      {reviews.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-[--muted] text-lg">No reviews yet</p>
          <p className="text-[--muted] text-sm mt-2">Be the first to review this product!</p>
        </div>
      ) : (
        <>
          <div className="space-y-5">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {page < totalPages && (
            <div className="flex justify-center mt-8">
              <Button
                variant="default"
                onClick={handleLoadMore}
                disabled={loading}
                className="px-8"
              >
                {loading ? 'Loading...' : 'Load More Reviews'}
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
