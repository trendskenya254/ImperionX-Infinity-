import React, { useState } from 'react';
import { ASSETS } from '../../data/assets';
import { TEAM_REPLACEMENT_50_DATA, TeamReplacementCategory } from '../../data/systemsData';
import { useNavigation } from '../../context/NavigationContext';
import { 
  Users, DollarSign, TrendingDown, ExternalLink, Sparkles, 
  ArrowRight, ShieldCheck, CheckCircle2, ChevronRight
} from 'lucide-react';

export const TeamReplacement50SystemView: React.FC = () => {
  const { navigate, openRegistrationWithPlan } = useNavigation();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCat: TeamReplacementCategory = TEAM_REPLACEMENT_50_DATA[activeCategoryIndex];

  // Calculate total monthly traditional agency cost vs AI stack cost
  const totalTraditional = TEAM_REPLACEMENT_50_DATA.reduce((acc, cat) => {
    return acc + parseInt(cat.traditionalCost.replace(/[$,/mo]/g, ''), 10);
  }, 0);

  const totalAiCost = TEAM_REPLACEMENT_50_DATA.reduce((acc, cat) => {
    return acc + parseInt(cat.aiMonthlyCost.replace(/[$,/mo]/g, ''), 10);
  }, 0);

  const totalSavings = totalTraditional - totalAiCost;

  return (
    <div className="space-y-10 text-left">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1220] via-[#0f172a] to-[#0a1120] border-2 border-violet-500/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-violet-400 bg-violet-950/60 border border-violet-800/60 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FutureTech Lean Enterprise System</span>
            </span>
            <span className="text-xs text-slate-400 font-mono">System Code: TEAM-REPLACE-50</span>
          </div>

          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/40 font-bold">
            8 Functional Business Domains
          </span>
        </div>

        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            50+ Best AI Tools to Replace Entire Teams
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            How modern solo entrepreneurs and lean startups build multi-million dollar software and media ventures with zero full-time payroll. Explore the 8 department replacement stacks.
          </p>
        </div>

        {/* Global Economics Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-4 border-t border-slate-800/80">
          <div className="p-3 rounded-xl bg-[#080d17] border border-slate-800">
            <span className="text-[11px] text-slate-400 block">Traditional Agency / Payroll:</span>
            <span className="text-xl font-bold text-rose-400 font-mono">${totalTraditional.toLocaleString()}/month</span>
          </div>
          <div className="p-3 rounded-xl bg-[#080d17] border border-slate-800">
            <span className="text-[11px] text-slate-400 block">FutureTech AI Tool Stack:</span>
            <span className="text-xl font-bold text-blue-400 font-mono">${totalAiCost.toLocaleString()}/month</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60">
            <span className="text-[11px] text-emerald-300 block">Monthly Operating Capital Saved:</span>
            <span className="text-xl font-bold text-emerald-400 font-mono">+${totalSavings.toLocaleString()}/month (98.4%)</span>
          </div>
        </div>
      </div>

      {/* Visual Infographic + Interactive Sector Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Visual Asset Poster */}
        <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-800 bg-[#070a12] aspect-[4/5] relative group">
          <img
            src={ASSETS.aiTools50Wheel}
            alt="50+ Best AI Tools to Replace Entire Teams Infographic Diagram"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-violet-300 border border-violet-800/50">
            Radial Wheel Architecture
          </div>
        </div>

        {/* Right Column: Interactive Department Explorer */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Department Selector Pills */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Select Department to Inspect Replacement Stack:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {TEAM_REPLACEMENT_50_DATA.map((cat, idx) => {
                const isSelected = activeCategoryIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCategoryIndex(idx)}
                    className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all border ${
                      isSelected
                        ? 'bg-violet-600/20 border-violet-500 text-white shadow-md'
                        : 'bg-[#0c1220] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Department Details */}
          <div className="p-6 rounded-2xl bg-[#0c1220] border border-slate-800 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">{activeCat.name}</h3>
                <p className="text-xs text-slate-400 mt-0.5">Replaces: <strong className="text-slate-200">{activeCat.traditionalRole}</strong></p>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-rose-400 line-through">{activeCat.traditionalCost}</span>
                <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  {activeCat.aiMonthlyCost}
                </span>
              </div>
            </div>

            {/* Tools list in this department */}
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                Frontier Tools Included in this Suite:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeCat.tools.map((t) => (
                  <div
                    key={t.name}
                    className="p-3 rounded-xl bg-[#080d17] border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-2"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{t.name}</span>
                        {t.isPrimary && (
                          <span className="text-[10px] font-semibold text-blue-400 bg-blue-950/60 px-1.5 py-0.5 rounded">
                            Core
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {t.description}
                      </p>
                    </div>

                    <a
                      href={t.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300 font-medium pt-1"
                    >
                      <span>Open Website</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Academy Action */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-400">
                Taught in FutureTech Business & Creator Faculties
              </span>
              <button
                onClick={() => openRegistrationWithPlan('creator')}
                className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Enroll in Creator Track</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
