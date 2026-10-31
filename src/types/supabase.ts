/**
 * Supabase Schema Type Definitions for FutureTech Business School
 * Stage 1 Architecture Preparation for Stage 2 Supabase Integration.
 * 
 * In Stage 2, these types directly map to PostgreSQL tables generated
 * via Supabase CLI (`supabase gen types typescript`).
 */

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          full_name: string;
          email: string;
          country: string;
          timezone: string;
          primary_faculty_id: string | null;
          avatar_url: string | null;
          career_goal: string | null;
        };
        Insert: {
          id: string;
          created_at?: string;
          updated_at?: string;
          full_name: string;
          email: string;
          country?: string;
          timezone?: string;
          primary_faculty_id?: string | null;
          avatar_url?: string | null;
          career_goal?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          full_name?: string;
          email?: string;
          country?: string;
          timezone?: string;
          primary_faculty_id?: string | null;
          avatar_url?: string | null;
          career_goal?: string | null;
        };
      };
      faculties: {
        Row: {
          id: string;
          slug: string;
          name: string;
          category: string;
          short_description: string;
          full_description: string;
          dean_name: string;
          dean_title: string;
          featured: boolean;
        };
      };
      courses: {
        Row: {
          id: string;
          faculty_id: string;
          title: string;
          slug: string;
          description: string;
          level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Executive';
          duration_weeks: number;
          hours_per_week: number;
          featured: boolean;
          popular: boolean;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          plan_id: string;
          status: 'active' | 'past_due' | 'canceled' | 'trialing';
          billing_interval: 'monthly' | 'yearly';
          currency: string;
          amount_paid: number;
          current_period_start: string;
          current_period_end: string;
        };
      };
      enrollments: {
        Row: {
          id: string;
          user_id: string;
          course_id: string;
          enrolled_at: string;
          progress_percent: number;
          completed_at: string | null;
        };
      };
    };
  };
}
