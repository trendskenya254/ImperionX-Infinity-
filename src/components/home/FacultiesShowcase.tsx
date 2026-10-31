import React from 'react';
import { facultyService } from '../../services/facultyService';
import { FacultyCard } from '../faculties/FacultyCard';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowRight, Layers } from 'lucide-react';

export const FacultiesShowcase: React.FC = () => {
  const { navigate } = useNavigation();
  const featuredFaculties = facultyService.getFeaturedFaculties().slice(0, 6);

  return (
    <section className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Academic Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              15 Specialized Technology & Entrepreneurship Faculties
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Curricula designed in close collaboration with industry fellows from top engineering teams, venture accelerators, and fintech laboratories.
            </p>
          </div>

          <button
            onClick={() => navigate('faculties')}
            className="px-4 py-2.5 text-xs font-bold text-slate-200 hover:text-white bg-[#0e1626] hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors flex items-center gap-2 shrink-0 self-start md:self-auto"
          >
            <span>Explore All 15 Faculties</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>

        {/* Faculties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredFaculties.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>

      </div>
    </section>
  );
};
