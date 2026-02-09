import api from './client';

export const categoryService = {
  async getAll() {
    const response = await api.get('/categories');
    return response.data.data;
  },

  async getById(id) {
    const response = await api.get(`/categories/${id}`);
    return response.data.data;
  },

  async getBySlug(slug) {
    const response = await api.get(`/categories/slug/${slug}`);
    return response.data.data;
  }
};
