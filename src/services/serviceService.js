import { serviceCategories } from '../data/services';
import { request } from './api';

export const serviceService = {
  async getAllServices() {
    await request('/services');
    return [...serviceCategories];
  },

  async getServiceBySlug(slug) {
    await request(`/services/${slug}`);
    return serviceCategories.find((s) => s.slug === slug) || null;
  }
};
