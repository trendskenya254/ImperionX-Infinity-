import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ASSETS } from '../../data/assets';
import { ArrowUpRight, BookOpen, Sparkles, Globe, ShieldCheck, Terminal } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800/80">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/10 via-violet-600/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column balanced grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Quiet Kickoff */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400">
              <span>FutureTech Business School</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">Learn. Innovate. Build. Earn.</span>
            </div>

            {/* Main Headline strictly matching user prompt */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] [text-wrap:balance]">
              Master Artificial Intelligence. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">Build Your Future.</span>
            </h1>

            {/* Subtitle explaining the international academy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              An international online technology and entrepreneurship platform engineering the next generation of builders. Master multi-agent AI systems, distributed engineering, fintech infrastructure, and launch revenue-generating digital products.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate('courses')}
                className="px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-900/40 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>Explore Courses</span>
                <BookOpen className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('kenya-radar')}
                className="px-6 py-3.5 text-sm font-bold text-emerald-300 hover:text-white bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap shrink-0 shadow-lg shadow-emerald-950/30"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Market Gaps (50 Bob Pass)</span>
              </button>

              <button
                onClick={() => navigate('combinator')}
                className="px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-[#0e1626] hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>$0 Free Combinator</span>
              </button>
            </div>

            {/* Claim-to-proof strip */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg text-left">
              <div>
                <p className="text-2xl font-bold text-white tabular-nums">15</p>
                <p className="text-xs text-slate-400">Specialized Faculties</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white tabular-nums">100%</p>
                <p className="text-xs text-slate-400">Practical Systems</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-400 tabular-nums">KSh 50</p>
                <p className="text-xs text-slate-400">Blueprint Micro-Pass</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-blue-950/40 bg-[#090d18] aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] group">
              <img
                src={ASSETS.heroAcademy}
                alt="FutureTech Business School International Campus and Collaboration"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-transparent to-transparent opacity-80" />
              
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#080d17]/85 backdrop-blur-md border border-slate-800/80 text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                    Global Cohort Learning
                  </span>
                  <span className="text-[11px] text-slate-400">Admissions Open</span>
                </div>
                <p className="text-xs text-slate-200 font-medium">
                  Autonomous agents, distributed SaaS & venture engineering curriculum.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
