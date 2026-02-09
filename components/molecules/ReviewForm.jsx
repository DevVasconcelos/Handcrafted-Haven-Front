'use client';

import { useState } from 'react';
import { reviewService } from '@/lib/api/reviews';
import Button from '../atoms/Button';
import Textarea from '../atoms/Textarea';
import StarRating from '../atoms/StarRating';

export default function ReviewForm({ productId, sellerId, onReviewAdded }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const trimmedComment = comment.trim();
    const minLength = 10;

    if (rating === 0) {
      setError('Please select a rating');
      return;
    }

    if (!trimmedComment) {
      setError('Please write a comment');
      return;
    }

    if (trimmedComment.length < minLength) {
      const remaining = minLength - trimmedComment.length;
      setError(`Comment must have at least ${minLength} characters (${remaining} more to go)`);
      return;
    }

    if (!sellerId) {
      setError('Seller is missing for this product');
      return;
    }

    setIsSubmitting(true);

    try {
      const newReview = await reviewService.create({
        product_id: Number(productId),
        seller_id: Number(sellerId),
        rating: Number(rating),
        text: trimmedComment
      });

      setRating(0);
      setComment('');
      onReviewAdded?.(newReview);
    } catch (err) {
      console.error('Error creating review:', err);
      setError(err.response?.data?.message || 'Failed to create review');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 border border-[--border] rounded-2xl shadow-[0_1px_3px_rgba(31,27,22,0.06)]">
      <h3 className="text-lg font-semibold text-[--text] mb-4">Write your review</h3>
      
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-[--text] mb-2">
            Rating <span className="text-[--primary]">*</span>
          </label>
          <StarRating value={rating} onChange={setRating} />
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm font-semibold text-[--text] mb-2">
            Comment <span className="text-[--primary]">*</span>
          </label>
          <Textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Tell us about your experience with this product..."
            rows={4}
            required
          />
          <div className="mt-1 text-xs text-[--muted]">Minimum 10 characters</div>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="px-6"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Submit Review'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
