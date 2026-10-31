import React from 'react';
import { AI_TOOLS } from '../../data/aiTools';
import { useNavigation } from '../../context/NavigationContext';
import { Sparkles, ArrowRight, ExternalLink, Gift } from 'lucide-react';

export const AIToolsPreview: React.FC = () => {
  const { navigate } = useNavigation();
  const previewTools = AI_TOOLS.filter((t) => t.featured).slice(0, 6);

  return (
    <section className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technology Ecosystem</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Curated AI Tools & Student API Credits Vault
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              FutureTech members receive exclusive student discounts, sandbox environments, and pre-configured prompt architectures for top frontier tools.
            </p>
          </div>

          <button
            onClick={() => navigate('ai-tools')}
            className="px-4 py-2.5 text-xs font-bold text-slate-200 hover:text-white bg-[#0e1626] hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors flex items-center gap-2 shrink-0 self-start md:self-auto"
          >
            <span>Explore Complete AI Tools Directory</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {previewTools.map((tool) => (
            <div
              key={tool.id}
              className="group bg-[#0c1220] hover:bg-[#0f1729] border border-slate-800 hover:border-violet-500/40 rounded-2xl p-5 transition-all flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-blue-400">
                    {tool.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {tool.pricingModel}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors mb-1.5 flex items-center gap-1.5">
                  <span>{tool.name}</span>
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                  {tool.description}
                </p>

                {/* FutureTech Student Perk */}
                <div className="p-2.5 rounded-xl bg-violet-950/20 border border-violet-900/30 flex items-start gap-2 mb-4">
                  <Gift className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-violet-300 font-medium leading-snug">
                    {tool.futureTechPerk}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="text-[11px] text-slate-400 truncate max-w-[170px]">{tool.facultyCategory}</span>
                <a
                  href={tool.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                >
                  <span>Official Tool</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
