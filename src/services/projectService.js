import { projectsData } from '../data/projects';
import { request } from './api';

export const projectService = {
  async getAllProjects() {
    await request('/projects');
    return [...projectsData];
  },

  async getFeaturedProjects() {
    await request('/projects/featured');
    return projectsData.filter((p) => p.isFeatured);
  },

  async getProjectBySlug(slug) {
    await request(`/projects/${slug}`);
    return projectsData.find((p) => p.slug === slug) || null;
  },

  async getProjectsByCategory(categorySlug) {
    await request(`/projects?category=${categorySlug}`);
    return projectsData.filter((p) => p.categorySlug === categorySlug);
  },

  async getRelatedProjects(currentSlug, limit = 2) {
    return projectsData
      .filter((p) => p.slug !== currentSlug)
      .slice(0, limit);
  }
};
