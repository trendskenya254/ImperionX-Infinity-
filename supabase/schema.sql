-- FutureTech Business School - Stage 2 Supabase PostgreSQL Schema
-- Run this schema in your Supabase SQL Editor when upgrading to Stage 2.

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Profiles Table (linked to Supabase auth.users)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  email text not null unique,
  country text default 'Global',
  timezone text default 'UTC',
  primary_faculty_id text,
  career_goal text,
  avatar_url text,
  role text default 'student' check (role in ('student', 'mentor', 'admin'))
);

-- 2. Faculties
create table if not exists public.faculties (
  id text primary key,
  slug text not null unique,
  name text not null,
  category text not null,
  short_description text not null,
  full_description text not null,
  dean_name text not null,
  dean_title text not null,
  featured boolean default false
);

-- 3. Courses
create table if not exists public.courses (
  id text primary key,
  faculty_id text references public.faculties(id) on delete cascade,
  title text not null,
  slug text not null unique,
  tagline text not null,
  description text not null,
  level text check (level in ('Beginner', 'Intermediate', 'Advanced', 'Executive')),
  duration_weeks int default 8,
  hours_per_week int default 6,
  rating numeric(3,2) default 4.9,
  students_count int default 0,
  featured boolean default false,
  popular boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Subscriptions
create table if not exists public.subscriptions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  plan_id text not null,
  status text check (status in ('active', 'past_due', 'canceled', 'trialing')) default 'active',
  billing_interval text default 'monthly',
  currency text default 'KSH',
  amount_paid numeric(10,2) not null,
  current_period_start timestamp with time zone default timezone('utc'::text, now()) not null,
  current_period_end timestamp with time zone not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. Enrollments
create table if not exists public.enrollments (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  course_id text references public.courses(id) on delete cascade not null,
  progress_percent int default 0 check (progress_percent between 0 and 100),
  enrolled_at timestamp with time zone default timezone('utc'::text, now()) not null,
  completed_at timestamp with time zone,
  unique(user_id, course_id)
);

-- Row Level Security (RLS) setup
alter table public.profiles enable row level security;
alter table public.subscriptions enable row level security;
alter table public.enrollments enable row level security;

-- Sample Policies
create policy "Public profiles are viewable by everyone" on public.profiles for select using (true);
create policy "Users can update their own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can view their own subscriptions" on public.subscriptions for select using (auth.uid() = user_id);
create policy "Users can view their own enrollments" on public.enrollments for select using (auth.uid() = user_id);
