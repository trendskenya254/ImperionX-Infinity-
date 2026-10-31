import React from 'react';
import { Faculty } from '../../types';
import { useNavigation } from '../../context/NavigationContext';
import { ExpandableCaption } from '../common/ExpandableCaption';
import { 
  BrainCircuit, Globe, Smartphone, Bot, Briefcase, Palette, 
  Video, TrendingUp, Terminal, Cpu, BarChart3, CreditCard, 
  BookOpen, Laptop, Sparkles, ArrowRight, Zap, ExternalLink
} from 'lucide-react';

interface FacultyCardProps {
  faculty: Faculty;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  BrainCircuit,
  Globe,
  Smartphone,
  Bot,
  Briefcase,
  Palette,
  Video,
  TrendingUp,
  Terminal,
  Cpu,
  BarChart3,
  CreditCard,
  BookOpen,
  Laptop,
  Sparkles
};

export const FacultyCard: React.FC<FacultyCardProps> = ({ faculty }) => {
  const { openFacultyCourses, navigate } = useNavigation();
  const IconComponent = iconMap[faculty.iconName] || BrainCircuit;

  return (
    <div className="group relative bg-[#0c1220] hover:bg-[#0f1729] border border-slate-800 hover:border-blue-500/40 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/40 flex flex-col justify-between">
      {/* 1. Dominant Visual Image Header */}
      <div 
        onClick={() => openFacultyCourses(faculty.id)}
        className="relative aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer"
      >
        <img
          src={faculty.imageUrl || 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'}
          alt={faculty.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-black/40" />
        
        {/* Category & Course Count Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white text-[11px] font-semibold flex items-center gap-1.5">
            <IconComponent className="w-3.5 h-3.5 text-blue-400" />
            <span>{faculty.category}</span>
          </span>

          <span className="px-2.5 py-1 rounded-lg bg-blue-600/90 text-white text-[11px] font-bold shadow-md shadow-blue-900/50">
            {faculty.coursesCount} Courses
          </span>
        </div>

        {/* Floating Title on Image Foot */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors drop-shadow-md">
            {faculty.name}
          </h3>
        </div>
      </div>

      {/* 2. Compact Caption with Show More / Show Less */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-left">
        <div className="space-y-3">
          <ExpandableCaption
            shortText={faculty.shortDescription}
            fullText={faculty.fullDescription}
            maxChars={95}
          />

          {/* Quick Competencies Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {faculty.coreSkills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="text-[10px] text-slate-300 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Interlinking Badges */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60 text-[11px]">
            {faculty.relatedSystemId && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('systems', { category: faculty.relatedSystemId });
                }}
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 bg-cyan-950/40 hover:bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-800/40 transition-colors"
              >
                <Zap className="w-3 h-3 text-cyan-400" />
                <span>Related AI System</span>
              </button>
            )}

            {faculty.relatedMarketGapId && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('kenya-radar');
                }}
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 bg-emerald-950/40 hover:bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-800/40 transition-colors"
              >
                <span>50 Bob Blueprint</span>
              </button>
            )}
          </div>
        </div>

        {/* 3. Action Link to View Courses */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <div className="text-[11px] text-slate-400">
            Dean: <strong className="text-slate-200">{faculty.deanName}</strong>
          </div>

          <button
            onClick={() => openFacultyCourses(faculty.id)}
            className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
          >
            <span>Explore Courses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
