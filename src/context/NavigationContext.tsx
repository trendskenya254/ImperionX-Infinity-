import React, { createContext, useContext, useState, useEffect } from 'react';

export type PageRoute = 
  | 'home' 
  | 'faculties' 
  | 'courses' 
  | 'course-detail' 
  | 'systems'
  | 'combinator'
  | 'kenya-radar'
  | 'codex'
  | 'ai-tools' 
  | 'pricing' 
  | 'about' 
  | 'contact' 
  | 'login' 
  | 'register';

export interface RouteParams {
  courseId?: string;
  facultyId?: string;
  planId?: string;
  category?: string;
  searchQuery?: string;
}

interface NavigationContextType {
  currentPage: PageRoute;
  params: RouteParams;
  navigate: (page: PageRoute, newParams?: RouteParams) => void;
  openCourseDetail: (courseId: string) => void;
  openFacultyCourses: (facultyId: string) => void;
  openRegistrationWithPlan: (planId: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [params, setParams] = useState<RouteParams>({});

  // Sync with browser hash on initial load and hash change
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash) {
        setCurrentPage('home');
        setParams({});
        return;
      }

      const [routePart, queryPart] = hash.split('?');
      const segments = routePart.split('/');
      let page = segments[0] as PageRoute;

      const queryParams: RouteParams = {};
      if (queryPart) {
        const searchParams = new URLSearchParams(queryPart);
        if (searchParams.get('courseId')) queryParams.courseId = searchParams.get('courseId')!;
        if (searchParams.get('facultyId')) queryParams.facultyId = searchParams.get('facultyId')!;
        if (searchParams.get('planId')) queryParams.planId = searchParams.get('planId')!;
        if (searchParams.get('category')) queryParams.category = searchParams.get('category')!;
      }

      // Handle shortcuts to systems page
      if (page === 'combinator' || page === 'kenya-radar' || page === 'codex') {
        const targetCategory = page;
        page = 'systems';
        queryParams.category = targetCategory;
      }

      // Handle /courses/:id format
      if (segments[0] === 'courses' && segments[1]) {
        setCurrentPage('course-detail');
        setParams({ courseId: segments[1], ...queryParams });
        return;
      }

      const validPages: PageRoute[] = [
        'home', 'faculties', 'courses', 'course-detail', 'systems',
        'combinator', 'kenya-radar', 'codex',
        'ai-tools', 'pricing', 'about', 'contact', 'login', 'register'
      ];

      if (validPages.includes(page)) {
        setCurrentPage(page);
        setParams(queryParams);
      } else {
        setCurrentPage('home');
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const navigate = (page: PageRoute, newParams: RouteParams = {}) => {
    let targetPage = page;
    const finalParams = { ...newParams };

    if (page === 'combinator' || page === 'kenya-radar' || page === 'codex') {
      targetPage = 'systems';
      finalParams.category = page;
    }

    setCurrentPage(targetPage);
    setParams(finalParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update browser URL hash cleanly
    let hashUrl = `#/${targetPage}`;
    if (targetPage === 'course-detail' && finalParams.courseId) {
      hashUrl = `#/courses/${finalParams.courseId}`;
    } else {
      const search = new URLSearchParams();
      if (finalParams.courseId) search.set('courseId', finalParams.courseId);
      if (finalParams.facultyId) search.set('facultyId', finalParams.facultyId);
      if (finalParams.planId) search.set('planId', finalParams.planId);
      if (finalParams.category) search.set('category', finalParams.category);
      const str = search.toString();
      if (str) hashUrl += `?${str}`;
    }
    window.location.hash = hashUrl;
  };

  const openCourseDetail = (courseId: string) => {
    navigate('course-detail', { courseId });
  };

  const openFacultyCourses = (facultyId: string) => {
    navigate('courses', { facultyId });
  };

  const openRegistrationWithPlan = (planId: string) => {
    navigate('register', { planId });
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        params,
        navigate,
        openCourseDetail,
        openFacultyCourses,
        openRegistrationWithPlan
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
