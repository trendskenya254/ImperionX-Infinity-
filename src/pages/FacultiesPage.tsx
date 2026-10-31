import React, { useState } from 'react';
import { FACULTIES } from '../data/faculties';
import { FacultyCard } from '../components/faculties/FacultyCard';
import { Search, Layers, BookOpen, Users, Sparkles } from 'lucide-react';

export const FacultiesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Intelligence', 'Engineering', 'Venture & Business', 'Design & Media', 'Emerging Tech'];

  const filteredFaculties = FACULTIES.filter((faculty) => {
    if (activeCategory !== 'All' && faculty.category !== activeCategory) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = faculty.name.toLowerCase().includes(q);
      const matchDesc = faculty.shortDescription.toLowerCase().includes(q);
      const matchSkills = faculty.coreSkills.some((s) => s.toLowerCase().includes(q));
      const matchDean = faculty.deanName.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchSkills && !matchDean) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="space-y-4 mb-10 text-left max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Academic Faculties Catalogue</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            15 Specialized Technology & Entrepreneurship Faculties
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From autonomous multi-agent intelligence and distributed systems to high-ticket freelancing and micro-SaaS venture creation. Explore our 15 dedicated schools.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#0c1220] border border-slate-800/80 mb-10 text-left">
          <div className="p-2">
            <p className="text-2xl font-bold text-white tabular-nums">15</p>
            <p className="text-xs text-slate-400">Total Active Faculties</p>
          </div>
          <div className="p-2">
            <p className="text-2xl font-bold text-blue-400 tabular-nums">100+</p>
            <p className="text-xs text-slate-400">Practical Modules</p>
          </div>
          <div className="p-2">
            <p className="text-2xl font-bold text-violet-400 tabular-nums">38,000+</p>
            <p className="text-xs text-slate-400">Global Enrolled Learners</p>
          </div>
          <div className="p-2">
            <p className="text-2xl font-bold text-emerald-400 tabular-nums">100%</p>
            <p className="text-xs text-slate-400">Monetization-Ready Capstones</p>
          </div>
        </div>

        {/* Interlink Quick Discovery Ribbon */}
        <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 via-[#0c1220] to-emerald-950/30 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2.5 text-xs text-slate-300">
            <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Looking for immediate practical monetization? Check our 50 Bob Kenyan market gap blueprints and $0 free-tier combinator.</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => window.location.hash = '#/combinator'}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors"
            >
              $0 Combinator
            </button>
            <button
              onClick={() => window.location.hash = '#/kenya-radar'}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
            >
              50 Bob Pass
            </button>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs (Segmented control button elements as per Constitution) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-[#0e1626] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by faculty, skill, or dean..."
              className="w-full pl-9 pr-4 py-2 bg-[#0c1220] border border-slate-800 focus:border-blue-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Faculties Grid */}
        {filteredFaculties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculties.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-[#0c1220] rounded-2xl border border-slate-800">
            <Layers className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white mb-1">No faculties match your search</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mb-4">
              Try adjusting your search query or reset category filter to see all 15 faculties.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
