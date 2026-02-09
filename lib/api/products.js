import api from './client';

export const productService = {
  async getAll(params = {}) {
    const response = await api.get('/products', { params });
    return response.data;
  },

  async search(params = {}) {
    const response = await api.get('/products/search', { params });
    return response.data;
  },

  async getById(id) {
    const response = await api.get(`/products/${id}`);
    return response.data.data;
  },

  async getBySlug(slug) {
    const response = await api.get(`/products/slug/${slug}`);
    return response.data.data;
  },

  async getBySeller(sellerId, params = {}) {
    const response = await api.get(`/products/seller/${sellerId}`, { params });
    return response.data;
  },

  async getByCategory(categoryId, params = {}) {
    const response = await api.get(`/products/category/${categoryId}`, { params });
    return response.data;
  },

  async getMyProducts(pageOrParams = {}, limit) {
    let params = {};

    if (typeof pageOrParams === 'number') {
      params.page = pageOrParams;
      if (typeof limit === 'number') {
        params.limit = limit;
      }
    } else {
      params = pageOrParams || {};
    }

    const response = await api.get('/products/my-products', { params });
    return response.data;
  },

  async create(productData) {
    const response = await api.post('/products', productData);
    return response.data.data;
  },

  async update(id, productData) {
    const response = await api.put(`/products/${id}`, productData);
    return response.data.data;
  },

  async delete(id) {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  },

  async updateStock(id, stock) {
    const response = await api.patch(`/products/${id}/stock`, { stock });
    return response.data.data;
  },

  async addImages(id, images) {
    // Aceita array direto ou objeto { images: [...] }
    let normalized = images;
    if (images && !Array.isArray(images)) {
      if (Array.isArray(images.images)) {
        normalized = images.images;
      } else {
        normalized = [images];
      }
    }

    const response = await api.post(`/products/${id}/images`, { images: normalized });
    return response.data.data;
  },

  async removeImage(imageId) {
    const response = await api.delete(`/products/images/${imageId}`);
    return response.data;
  },

  async setPrimaryImage(imageId) {
    const response = await api.patch(`/products/images/${imageId}/primary`);
    return response.data.data;
  }
};
