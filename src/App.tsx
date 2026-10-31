/**
 * FutureTech Business School
 * International Online Technology and Entrepreneurship Education Platform
 * Tagline: Learn. Innovate. Build. Earn.
 * 
 * Stage 1 Scalable Architecture (Vite + React + TypeScript + Tailwind CSS)
 */

import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { CurrencyProvider } from './context/CurrencyContext';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// 10 Requested Pages
import { HomePage } from './pages/HomePage';
import { FacultiesPage } from './pages/FacultiesPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { AIToolsPage } from './pages/AIToolsPage';
import { SystemsPage } from './pages/SystemsPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

const AppContent: React.FC = () => {
  const { currentPage } = useNavigation();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'faculties':
        return <FacultiesPage />;
      case 'courses':
        return <CoursesPage />;
      case 'course-detail':
        return <CourseDetailPage />;
      case 'systems':
        return <SystemsPage />;
      case 'ai-tools':
        return <AIToolsPage />;
      case 'pricing':
        return <PricingPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'login':
        return <LoginPage />;
      case 'register':
        return <RegisterPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070a12] text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Top Architecture Notice Banner */}
      <aside aria-label="Architecture Status" className="w-full bg-[#0a101f] border-b border-blue-900/40 px-4 py-1.5 text-center text-[11px] text-slate-400 flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        <span className="font-medium text-slate-300">FutureTech Stage 1:</span>
        <span>Clean, scalable frontend foundation · Ready for Supabase PostgreSQL & Auth integration in Stage 2</span>
      </aside>

      {/* Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <CurrencyProvider>
        <NavigationProvider>
          <AppContent />
        </NavigationProvider>
      </CurrencyProvider>
    </AuthProvider>
  );
}
