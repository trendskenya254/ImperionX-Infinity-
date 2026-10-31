import React, { useState, useEffect } from 'react';
import { courseService } from '../services/courseService';
import { FACULTIES } from '../data/faculties';
import { CourseCard } from '../components/courses/CourseCard';
import { useNavigation } from '../context/NavigationContext';
import { Search, Filter, BookOpen, Sparkles, X } from 'lucide-react';
import { SkillLevel } from '../types';
import { ImageCarousel } from '../components/common/ImageCarousel';
import { getTutorialForCourse } from '../data/tutorialSteps';

export const CoursesPage: React.FC = () => {
  const { params, navigate } = useNavigation();
  const [selectedFaculty, setSelectedFaculty] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (params.facultyId) {
      setSelectedFaculty(params.facultyId);
    }
  }, [params.facultyId]);

  const levels: (SkillLevel | 'All')[] = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Executive'];

  const filteredCourses = courseService.filterCourses({
    facultyId: selectedFaculty,
    level: selectedLevel,
    searchQuery: searchQuery
  });

  const activeFacultyObj = FACULTIES.find((f) => f.id === selectedFaculty);

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="space-y-4 mb-10 text-left max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Masterclass Curriculum</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Courses & Capstone Engineering Programs
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every FutureTech course pairs rigorous software engineering or venture strategy with a functional production deliverable. Build real systems, deploy to cloud infrastructure, and monetize.
          </p>
        </div>

        {/* Featured Step-by-Step Hands-On Tutorial Walkthrough */}
        <div className="mb-10 text-left space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Hands-On Tutorial Walkthrough</span>
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Visual Lab Previews: Autonomous Multi-Agent Swarms
              </h2>
            </div>
            <span className="text-xs text-slate-400">
              Interactive 5-Step Production Blueprint
            </span>
          </div>

          <ImageCarousel
            steps={getTutorialForCourse('ai-agents-production').steps}
            title={getTutorialForCourse('ai-agents-production').title}
            subtitle={getTutorialForCourse('ai-agents-production').subtitle}
            badge="Featured Curriculum Lab"
            aspectRatio="16/10"
          />
        </div>

        {/* Filter controls row */}
        <div className="p-5 rounded-2xl bg-[#0c1220] border border-slate-800 space-y-4 mb-8">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses by keyword, tool (e.g. LangGraph), or capstone..."
                className="w-full pl-9 pr-4 py-2 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Level Selector buttons */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 lg:pb-0">
              <span className="text-xs text-slate-400 mr-2 shrink-0">Level:</span>
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                    selectedLevel === lvl
                      ? 'bg-blue-600 text-white'
                      : 'bg-[#080d17] text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Faculty dropdown selector */}
          <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
            <span className="text-xs text-slate-400 shrink-0">Filter by Faculty:</span>
            <div className="flex-1 max-w-xs">
              <select
                value={selectedFaculty}
                onChange={(e) => setSelectedFaculty(e.target.value)}
                className="w-full px-3 py-1.5 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-lg text-xs text-slate-200 focus:outline-none transition-colors"
              >
                <option value="all">All 15 Faculties</option>
                {FACULTIES.map((fac) => (
                  <option key={fac.id} value={fac.id}>
                    {fac.name} ({fac.coursesCount})
                  </option>
                ))}
              </select>
            </div>

            {activeFacultyObj && (
              <span className="text-xs text-blue-400 font-medium ml-2">
                Showing courses for: <strong className="text-white">{activeFacultyObj.name}</strong>
              </span>
            )}

            {(selectedFaculty !== 'all' || selectedLevel !== 'All' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedFaculty('all');
                  setSelectedLevel('All');
                  setSearchQuery('');
                  navigate('courses', {});
                }}
                className="text-xs text-slate-400 hover:text-rose-400 ml-auto transition-colors flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset all filters</span>
              </button>
            )}
          </div>

        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
          <span>Showing <strong className="text-white font-mono tabular-nums">{filteredCourses.length}</strong> available programs</span>
          <span className="text-[11px] text-slate-400">All courses include verified certification & portfolio reviews</span>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-[#0c1220] rounded-2xl border border-slate-800">
            <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white mb-1">No courses match your active criteria</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mb-4">
              Try switching your faculty filter or resetting your search term.
            </p>
            <button
              onClick={() => {
                setSelectedFaculty('all');
                setSelectedLevel('All');
                setSearchQuery('');
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
