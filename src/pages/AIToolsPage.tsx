import React, { useState } from 'react';
import { AI_TOOLS } from '../data/aiTools';
import { useNavigation } from '../context/NavigationContext';
import { ExpandableCaption } from '../components/common/ExpandableCaption';
import { Search, Sparkles, ExternalLink, Gift, Zap, Wrench, X } from 'lucide-react';

export const AIToolsPage: React.FC = () => {
  const { navigate, openRegistrationWithPlan } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Code & Dev',
    'LLM & Reasoning',
    'Video & Generative',
    'Automation & Agents',
    'Fintech & Analytics',
    'Design'
  ];

  const filteredTools = AI_TOOLS.filter((tool) => {
    if (selectedCategory !== 'All' && tool.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = tool.name.toLowerCase().includes(q);
      const matchDesc = tool.description.toLowerCase().includes(q);
      const matchTags = tool.tags.some(t => t.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchTags) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-4 mb-10 text-left max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Frontier Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            AI Tools Library & Student Credits Vault
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            The modern engineer and entrepreneur does not write everything from scratch. Master the frontier AI stack with student discounts, workflow templates, and verified prompt architectures.
          </p>
        </div>

        {/* Tool of the Week Spotlight Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-[#0c1220] to-violet-950/40 border border-blue-800/50 shadow-2xl mb-12 text-left">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-amber-400 bg-amber-950/50 border border-amber-800/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Tool of the Week
                </span>
                <span className="text-xs text-slate-400">Featured across 4 Faculties</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Cursor IDE + Claude 3.7 Sonnet Workflow
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Learn how top AI engineers compose multi-file features in minutes. FutureTech members receive 3 months of complimentary Cursor Pro credits and exclusive prompt systems.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span className="text-slate-400">Covered in:</span>
                <span className="text-blue-300 font-medium">Software Engineering</span>
                <span>·</span>
                <span className="text-blue-300 font-medium">AI Automation & Agents</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => openRegistrationWithPlan('builder')}
                className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/40"
              >
                Claim Student Perk Access
              </button>
              <button
                onClick={() => navigate('courses')}
                className="px-5 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-[#080d17] border border-slate-800 hover:border-slate-700 transition-colors"
              >
                View Cursor Courses
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                  selectedCategory === cat
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'bg-[#0c1220] text-slate-400 hover:text-white border border-slate-800'
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
              placeholder="Search tools (e.g. LangGraph, Midjourney)..."
              className="w-full pl-9 pr-4 py-2 bg-[#0c1220] border border-slate-800 focus:border-violet-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
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
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="group bg-[#0c1220] hover:bg-[#0f1729] border border-slate-800 hover:border-violet-500/50 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between text-left shadow-xl"
              >
                <div>
                  {/* Dominant Visual Image Header */}
                  <div className="relative aspect-[16/9] bg-slate-950 overflow-hidden">
                    <img
                      src={tool.imageUrl || 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'}
                      alt={tool.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-black/20 to-black/40" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="font-semibold text-violet-300 text-[11px] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                        {tool.category}
                      </span>
                      <span className="font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-lg border border-emerald-800/40 text-[10px] font-bold">
                        {tool.pricingModel}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3.5 right-3.5">
                      <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors drop-shadow-md">
                        {tool.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 space-y-3.5">
                    {/* Compact Caption with Show more / Show less */}
                    <ExpandableCaption
                      shortText={tool.description}
                      maxChars={85}
                    />

                    {/* FutureTech Student Perk Box */}
                    <div className="p-3 rounded-2xl bg-violet-950/25 border border-violet-900/30 flex items-start gap-2.5">
                      <Gift className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-bold text-violet-300 uppercase tracking-wide">
                          Student Access Perk
                        </p>
                        <ExpandableCaption
                          shortText={tool.futureTechPerk}
                          maxChars={70}
                          className="!text-[11px] !text-slate-300"
                        />
                      </div>
                    </div>

                    {/* Interlinking Strip */}
                    <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-800/60 text-[11px]">
                      {tool.relatedCourseId && (
                        <button
                          type="button"
                          onClick={() => navigate('course-detail', { courseId: tool.relatedCourseId })}
                          className="text-blue-400 hover:text-blue-300 font-semibold bg-blue-950/40 hover:bg-blue-950/80 px-2.5 py-1 rounded-lg border border-blue-800/40 transition-colors"
                        >
                          <span>Taught in Course ➔</span>
                        </button>
                      )}

                      {tool.relatedSystemId && (
                        <button
                          type="button"
                          onClick={() => navigate('systems', { category: tool.relatedSystemId })}
                          className="text-cyan-400 hover:text-cyan-300 font-semibold bg-cyan-950/40 hover:bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-800/40 transition-colors"
                        >
                          <Zap className="w-3 h-3 inline mr-1" />
                          <span>System View</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400 truncate max-w-[150px]">{tool.facultyCategory}</span>
                  <a
                    href={tool.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-300 hover:text-white font-medium transition-colors"
                  >
                    <span>Visit Tool</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-[#0c1220] rounded-2xl border border-slate-800">
            <Wrench className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white mb-1">No tools match your active filter</h3>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
