import React from 'react';
import { Course } from '../../types';
import { useNavigation } from '../../context/NavigationContext';
import { FACULTIES } from '../../data/faculties';
import { ExpandableCaption } from '../common/ExpandableCaption';
import { 
  Clock, Star, Users, ArrowUpRight, Zap, Sparkles, BookOpen, ChevronRight 
} from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { openCourseDetail, navigate } = useNavigation();
  const faculty = FACULTIES.find((f) => f.id === course.facultyId);

  return (
    <div className="group relative bg-[#0c1220] hover:bg-[#0f1729] border border-slate-800 hover:border-blue-500/50 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/40 flex flex-col justify-between text-left">
      <div>
        {/* 1. Dominant Visual Image Header */}
        <div 
          onClick={() => openCourseDetail(course.id)}
          className="relative aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer"
        >
          <img
            src={course.imageUrl || 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'}
            alt={course.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-black/20 to-black/40" />

          {/* Top Overlays */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span 
              onClick={(e) => {
                e.stopPropagation();
                if (faculty) navigate('courses', { facultyId: faculty.id });
              }}
              className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-blue-300 text-[11px] font-semibold hover:text-white transition-colors cursor-pointer"
            >
              {faculty?.name || 'Technology'}
            </span>

            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10 text-amber-400 text-xs font-bold">
              <Star className="w-3 h-3 fill-current" />
              <span>{course.rating.toFixed(1)}</span>
            </div>
          </div>

          {/* Title pinned over lower image */}
          <div className="absolute bottom-3 left-4 right-4">
            <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors drop-shadow-md line-clamp-2">
              {course.title}
            </h3>
          </div>
        </div>

        {/* 2. Compact Caption with Show more / Show less */}
        <div className="p-5 space-y-3.5">
          <ExpandableCaption
            shortText={course.tagline}
            fullText={course.description}
            maxChars={90}
          />

          {/* Practical "Build & Earn" Highlight Box */}
          <div className="p-3 rounded-2xl bg-blue-950/30 border border-blue-900/40 space-y-1">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
              <span className="text-blue-300 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-blue-400" />
                Capstone Deliverable
              </span>
              <span className="text-emerald-400 font-mono">Real ROI</span>
            </div>
            <p className="text-xs text-slate-200 font-medium line-clamp-1">
              {course.practicalProject.title}
            </p>
            <p className="text-[11px] text-emerald-400 font-semibold truncate">
              {course.practicalProject.earningPotential}
            </p>
          </div>

          {/* Interlinking Badges */}
          <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-800/60 text-[11px]">
            {course.relatedSystemId && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('systems', { category: course.relatedSystemId });
                }}
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 bg-cyan-950/40 hover:bg-cyan-950/80 px-2 py-0.5 rounded-lg border border-cyan-800/40 transition-colors"
              >
                <Zap className="w-3 h-3 text-cyan-400" />
                <span>Related System</span>
              </button>
            )}

            {course.relatedMarketGapId && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('kenya-radar');
                }}
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 bg-emerald-950/40 hover:bg-emerald-950/80 px-2 py-0.5 rounded-lg border border-emerald-800/40 transition-colors"
              >
                <span>50 Bob Blueprint</span>
              </button>
            )}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                navigate('ai-tools');
              }}
              className="text-slate-300 hover:text-white font-medium flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-800 transition-colors"
            >
              <span>{course.toolsLearned.length} Tools</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Action CTA */}
      <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-800/60 text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <Clock className="w-3.5 h-3.5 text-slate-500" />
          <span>{course.durationWeeks} weeks</span>
        </div>

        <button
          onClick={() => openCourseDetail(course.id)}
          className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-blue-900/30"
        >
          <span>View Course</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
