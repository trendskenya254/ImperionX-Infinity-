/**
 * FutureTech Business School - Core Data Types & Interfaces
 * Stage 1 Architecture (Designed for Supabase Backend in Stage 2)
 */

export type CurrencyCode = 'KSH' | 'USD' | 'EUR' | 'GBP' | 'NGN' | 'ZAR';

export interface ExchangeRateConfig {
  baseCurrency: CurrencyCode;
  rates: Record<CurrencyCode, number>; // value of 1 baseCurrency in target currency
  lastUpdated: string;
  source: string;
}

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Executive';

export interface Faculty {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  deanName: string;
  deanTitle: string;
  coursesCount: number;
  studentsEnrolled: number;
  featured: boolean;
  category: 'Intelligence' | 'Engineering' | 'Venture & Business' | 'Design & Media' | 'Emerging Tech';
  coreSkills: string[];
  careerPaths: string[];
  imageUrl?: string;
  relatedSystemId?: string;
  relatedMarketGapId?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  duration: string;
  lessonsCount: number;
  lessons: {
    title: string;
    duration: string;
    isPreviewAvailable?: boolean;
    description?: string;
  }[];
}

export interface Course {
  id: string;
  facultyId: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  level: SkillLevel;
  durationWeeks: number;
  hoursPerWeek: number;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  instructor: {
    name: string;
    role: string;
    company: string;
    avatarUrl?: string;
  };
  featured: boolean;
  popular: boolean;
  practicalProject: {
    title: string;
    deliverable: string;
    earningPotential: string;
  };
  toolsLearned: string[];
  prerequisites: string[];
  modules: CourseModule[];
  imageUrl?: string;
  relatedSystemId?: string;
  relatedMarketGapId?: string;
}

export interface AIToolItem {
  id: string;
  name: string;
  facultyCategory: string;
  category: 'Code & Dev' | 'LLM & Reasoning' | 'Video & Generative' | 'Automation & Agents' | 'Fintech & Analytics' | 'Design';
  description: string;
  pricingModel: 'Free' | 'Freemium' | 'Commercial' | 'Open Source';
  futureTechPerk: string;
  officialUrl: string;
  featured: boolean;
  tags: string[];
  imageUrl?: string;
  relatedCourseId?: string;
  relatedSystemId?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceKshMonthly: number;
  popular?: boolean;
  badge?: string;
  description: string;
  idealFor: string;
  features: string[];
  notIncluded?: string[];
  maxFaculties: number | 'Unlimited';
  liveMentorship: boolean;
  projectReviews: boolean;
  certificateOfMastery: boolean;
  communityAccess: 'Standard' | 'Pro' | 'Executive VIP';
}

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  country: string;
  timezone: string;
  primaryFacultyId?: string;
  currentPlanId?: string;
  role: 'student' | 'mentor' | 'admin';
  createdAt: string;
}

export * from './tutorial';
