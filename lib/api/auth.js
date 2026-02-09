import api from './client';
import { storage } from '../utils/storage';

export const authService = {
  async login(email, password) {
    const response = await api.post('/auth/login', { email, password });
    const { user, seller, accessToken, refreshToken } = response.data.data;
    const userWithSeller = seller ? { ...user, seller } : user;

    storage.setToken(accessToken);
    storage.setRefreshToken(refreshToken);
    storage.setUser(userWithSeller);

    return { user: userWithSeller, accessToken, refreshToken };
  },

  async register(data) {
    const response = await api.post('/auth/register', data);
    const { user, seller, accessToken, refreshToken } = response.data.data;
    const userWithSeller = seller ? { ...user, seller } : user;

    storage.setToken(accessToken);
    storage.setRefreshToken(refreshToken);
    storage.setUser(userWithSeller);

    return { user: userWithSeller, accessToken, refreshToken };
  },

  async logout() {
    // Backend does not expose a logout route; we only clear local state
    storage.clearAll();
  },

  async refreshToken() {
    const refreshToken = storage.getRefreshToken();
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await api.post('/auth/refresh', { refreshToken });
    const { accessToken } = response.data.data;

    storage.setToken(accessToken);
    return accessToken;
  },

  async getMe() {
    const response = await api.get('/auth/me');
    const { user, seller } = response.data.data || {};
    const normalizedUser = user ? { ...user, seller: seller || null } : null;
    if (normalizedUser) {
      storage.setUser(normalizedUser);
    }
    return normalizedUser;
  },

  getCurrentUser() {
    return storage.getUser();
  },

  isAuthenticated() {
    return !!storage.getToken();
  }
};
