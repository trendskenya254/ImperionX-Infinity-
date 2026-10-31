import { COURSES } from '../data/courses';
import { Course, SkillLevel } from '../types';

export const courseService = {
  getAllCourses: (): Course[] => {
    return COURSES;
  },

  getCourseById: (id: string): Course | undefined => {
    return COURSES.find((c) => c.id === id || c.slug === id);
  },

  getCoursesByFaculty: (facultyId: string): Course[] => {
    return COURSES.filter((c) => c.facultyId === facultyId);
  },

  getFeaturedCourses: (): Course[] => {
    return COURSES.filter((c) => c.featured);
  },

  getPopularCourses: (): Course[] => {
    return COURSES.filter((c) => c.popular);
  },

  filterCourses: (params: {
    facultyId?: string;
    level?: SkillLevel | 'All';
    searchQuery?: string;
  }): Course[] => {
    return COURSES.filter((c) => {
      if (params.facultyId && params.facultyId !== 'all' && c.facultyId !== params.facultyId) {
        return false;
      }
      if (params.level && params.level !== 'All' && c.level !== params.level) {
        return false;
      }
      if (params.searchQuery && params.searchQuery.trim() !== '') {
        const query = params.searchQuery.toLowerCase();
        const matchTitle = c.title.toLowerCase().includes(query);
        const matchDesc = c.description.toLowerCase().includes(query);
        const matchTools = c.toolsLearned.some(t => t.toLowerCase().includes(query));
        const matchProject = c.practicalProject.title.toLowerCase().includes(query);
        if (!matchTitle && !matchDesc && !matchTools && !matchProject) {
          return false;
        }
      }
      return true;
    });
  }
};
