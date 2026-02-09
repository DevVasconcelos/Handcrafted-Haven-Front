import api from './client';

export const sellerService = {
  async getAll() {
    const response = await api.get('/sellers');
    return response.data.data;
  },

  async getBySlug(slug) {
    const response = await api.get(`/sellers/${slug}`);
    return response.data.data;
  }
};
