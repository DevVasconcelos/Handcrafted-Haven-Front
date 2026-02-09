import api from './client';

export const reviewService = {
  // Get all reviews for a product
  async getByProduct(productId, page = 1, limit = 10) {
    const response = await api.get(`/reviews/product/${productId}`, {
      params: { page, limit }
    });
    return response.data;
  },

  // Get all reviews by a user
  async getByUser(userId, page = 1, limit = 10) {
    const response = await api.get(`/reviews/user/${userId}`, {
      params: { page, limit }
    });
    return response.data;
  },

  // Get my reviews (authenticated user)
  async getMyReviews(page = 1, limit = 10) {
    const response = await api.get('/reviews/my-reviews', {
      params: { page, limit }
    });
    return response.data;
  },

  // Get a specific review by ID
  async getById(id) {
    const response = await api.get(`/reviews/${id}`);
    return response.data.data;
  },

  // Create a new review
  async create(reviewData) {
    const response = await api.post('/reviews', reviewData);
    return response.data.data;
  },

  // Update a review
  async update(id, reviewData) {
    const response = await api.put(`/reviews/${id}`, reviewData);
    return response.data.data;
  },

  // Delete a review
  async delete(id) {
    const response = await api.delete(`/reviews/${id}`);
    return response.data;
  },

  // Mark review as helpful
  async markHelpful(id) {
    const response = await api.post(`/reviews/${id}/helpful`);
    return response.data.data;
  },

  // Report a review
  async report(id, reason) {
    const response = await api.post(`/reviews/${id}/report`, { reason });
    return response.data;
  }
};
