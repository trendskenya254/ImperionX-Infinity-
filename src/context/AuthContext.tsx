import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '../types';

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  login: (email: string) => Promise<boolean>;
  register: (data: {
    fullName: string;
    email: string;
    country: string;
    timezone: string;
    primaryFacultyId?: string;
    planId?: string;
  }) => Promise<boolean>;
  logout: () => void;
  quickFillDemoUser: () => void;
  isStage1Demo: boolean;
}

const DEMO_USER: UserProfile = {
  id: 'ft-demo-student-01',
  fullName: 'Alexander Kimani',
  email: 'alexander@futuretech.africa',
  country: 'Kenya',
  timezone: 'Africa/Nairobi (EAT)',
  primaryFacultyId: 'ai-agents',
  currentPlanId: 'builder',
  role: 'student',
  createdAt: '2026-03-15T09:00:00Z'
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('futuretech_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse saved user', e);
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string): Promise<boolean> => {
    setIsLoading(true);
    // Stage 1 simulated delay
    await new Promise((resolve) => setTimeout(resolve, 600));
    const simulatedUser: UserProfile = {
      id: `usr-${Date.now()}`,
      fullName: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      email,
      country: 'International',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
      currentPlanId: 'builder',
      role: 'student',
      createdAt: new Date().toISOString()
    };
    setUser(simulatedUser);
    localStorage.setItem('futuretech_user', JSON.stringify(simulatedUser));
    setIsLoading(false);
    return true;
  };

  const register = async (data: {
    fullName: string;
    email: string;
    country: string;
    timezone: string;
    primaryFacultyId?: string;
    planId?: string;
  }): Promise<boolean> => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    const newUser: UserProfile = {
      id: `usr-${Date.now()}`,
      fullName: data.fullName,
      email: data.email,
      country: data.country,
      timezone: data.timezone,
      primaryFacultyId: data.primaryFacultyId,
      currentPlanId: data.planId || 'explorer',
      role: 'student',
      createdAt: new Date().toISOString()
    };
    setUser(newUser);
    localStorage.setItem('futuretech_user', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('futuretech_user');
  };

  const quickFillDemoUser = () => {
    setUser(DEMO_USER);
    localStorage.setItem('futuretech_user', JSON.stringify(DEMO_USER));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        quickFillDemoUser,
        isStage1Demo: true
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
