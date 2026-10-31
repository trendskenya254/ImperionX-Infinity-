import React, { useState } from 'react';
import { ASSETS } from '../../data/assets';
import { ESSENTIAL_AI_SKILLS_9, EssentialSkillItem } from '../../data/systemsData';
import { useNavigation } from '../../context/NavigationContext';
import { 
  Sparkles, BookOpen, ArrowRight, CheckCircle2, 
  BarChart, Layers, Flame, Award
} from 'lucide-react';

export const EssentialSkills9SystemView: React.FC = () => {
  const { openCourseDetail, navigate } = useNavigation();
  const [completedSkills, setCompletedSkills] = useState<number[]>([1, 2]);

  const toggleComplete = (num: number) => {
    if (completedSkills.includes(num)) {
      setCompletedSkills(completedSkills.filter((n) => n !== num));
    } else {
      setCompletedSkills([...completedSkills, num]);
    }
  };

  const completionPercentage = Math.round((completedSkills.length / 9) * 100);

  return (
    <div className="space-y-10 text-left">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1220] via-[#0f172a] to-[#0a1120] border-2 border-blue-500/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-400 bg-blue-950/60 border border-blue-800/60 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>FutureTech 2026 Academic Core</span>
            </span>
            <span className="text-xs text-slate-400 font-mono">System Code: ESSENTIAL-SKILLS-9</span>
          </div>

          <span className="text-xs font-mono text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded border border-amber-800/40 font-bold flex items-center gap-1">
            <Flame className="w-3.5 h-3.5" />
            <span>Highest Industry Earning Potential</span>
          </span>
        </div>

        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            9 Essential AI Skills to Master in 2026
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            The high-demand technical capabilities separating junior coders from premier global AI architects and venture builders. Track your readiness across the 9 core skills.
          </p>
        </div>

        {/* Interactive Progress Bar */}
        <div className="pt-6 mt-4 border-t border-slate-800/80 space-y-2 max-w-xl">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-300">Your AI Mastery Roadmap Progress:</span>
            <span className="text-blue-400 font-mono">{completedSkills.length} of 9 Skills ({completionPercentage}%)</span>
          </div>
          <div className="w-full bg-[#080d17] h-2 rounded-full overflow-hidden border border-slate-800">
            <div
              className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Infographic Poster + Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Visual Asset Poster */}
        <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-slate-800 bg-[#070a12] aspect-[3/4] relative group sticky top-24">
          <img
            src={ASSETS.essentialAiSkills9}
            alt="9 Essential AI Skills to Master in 2026 Infographic"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-blue-300 border border-blue-800/50">
            2026 Curriculum Poster
          </div>
        </div>

        {/* Right Column: 9 Interactive Skill Cards */}
        <div className="lg:col-span-8 space-y-4">
          {ESSENTIAL_AI_SKILLS_9.map((skill) => {
            const isDone = completedSkills.includes(skill.number);
            return (
              <div
                key={skill.number}
                className={`p-5 rounded-2xl border transition-all duration-200 text-left space-y-3 ${
                  isDone
                    ? 'bg-[#0a1222] border-blue-500/60 shadow-md shadow-blue-950/30'
                    : 'bg-[#0c1220] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleComplete(skill.number)}
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs transition-colors ${
                        isDone
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-blue-500'
                      }`}
                      title={isDone ? 'Mark as In-Progress' : 'Mark as Mastered'}
                    >
                      {isDone ? <CheckCircle2 className="w-4 h-4" /> : skill.number}
                    </button>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {skill.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      {skill.earningBenchmark}
                    </span>
                    <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {skill.difficulty}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {skill.focus}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-800/60">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] text-slate-400 mr-1">Tools:</span>
                    {skill.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] text-slate-300 bg-[#080d17] border border-slate-800 px-2 py-0.5 rounded font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => openCourseDetail(skill.courseSlug)}
                    className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 transition-colors ml-auto"
                  >
                    <span>View Course Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
