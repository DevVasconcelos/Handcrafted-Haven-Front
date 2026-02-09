import api from './client';

export const dashboardService = {
  async getStats() {
    const response = await api.get('/dashboard/overview');
    return response.data.data;
  },

  async getTimeline() {
    const response = await api.get('/dashboard/timeline');
    const data = response.data.data || {};

    const items = [];

    (data.products || []).forEach((entry) => {
      items.push({
        year: entry.date,
        title: `${entry.count} new product${entry.count === 1 ? '' : 's'}`,
        description: 'New products added',
        colorClass: 'accent'
      });
    });

    (data.reviews || []).forEach((entry) => {
      const avg = typeof entry.averageRating === 'number' ? entry.averageRating.toFixed(1) : '-';
      items.push({
        year: entry.date,
        title: `${entry.count} review${entry.count === 1 ? '' : 's'}`,
        description: `Average ${avg}`,
        colorClass: 'secondary'
      });
    });

    return items.sort((a, b) => (a.year > b.year ? 1 : -1));
  }
};
