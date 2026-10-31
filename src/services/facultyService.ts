import { FACULTIES } from '../data/faculties';
import { Faculty } from '../types';

export const facultyService = {
  getAllFaculties: (): Faculty[] => {
    return FACULTIES;
  },

  getFacultyById: (id: string): Faculty | undefined => {
    return FACULTIES.find((f) => f.id === id || f.slug === id);
  },

  getFeaturedFaculties: (): Faculty[] => {
    return FACULTIES.filter((f) => f.featured);
  },

  filterFaculties: (params: {
    category?: string;
    searchQuery?: string;
  }): Faculty[] => {
    return FACULTIES.filter((f) => {
      if (params.category && params.category !== 'All' && f.category !== params.category) {
        return false;
      }
      if (params.searchQuery && params.searchQuery.trim() !== '') {
        const query = params.searchQuery.toLowerCase();
        const matchName = f.name.toLowerCase().includes(query);
        const matchDesc = f.shortDescription.toLowerCase().includes(query);
        const matchSkills = f.coreSkills.some((s) => s.toLowerCase().includes(query));
        if (!matchName && !matchDesc && !matchSkills) {
          return false;
        }
      }
      return true;
    });
  }
};
