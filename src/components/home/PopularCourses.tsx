import React from 'react';
import { courseService } from '../../services/courseService';
import { CourseCard } from '../courses/CourseCard';
import { useNavigation } from '../../context/NavigationContext';
import { Flame, ArrowRight } from 'lucide-react';

export const PopularCourses: React.FC = () => {
  const { navigate } = useNavigation();
  const popularCourses = courseService.getPopularCourses().slice(0, 3);

  return (
    <section className="py-20 border-b border-slate-800/80 bg-[#060911]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>In-Demand Masterclasses</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Popular Courses with Guaranteed Capstones
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Every course is structured around verifiable codebases, real-world deployment sandboxes, and tangible monetization outcomes.
            </p>
          </div>

          <button
            onClick={() => navigate('courses')}
            className="px-4 py-2.5 text-xs font-bold text-slate-200 hover:text-white bg-[#0e1626] hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors flex items-center gap-2 shrink-0 self-start md:self-auto"
          >
            <span>View Full Courses Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </div>
    </section>
  );
};
