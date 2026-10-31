import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ASSETS } from '../../data/assets';
import { 
  Bot, Zap, Sparkles, Award, Layers, ArrowRight, 
  Smartphone, CheckCircle2, TrendingUp
} from 'lucide-react';

export const SystemsShowcase: React.FC = () => {
  const { navigate } = useNavigation();

  const showcaseSystems = [
    {
      id: 'kenya-radar' as const,
      badge: 'Trending Local Gaps · 50 Bob Pass',
      title: 'Kenya & Africa Market Gap Scanner',
      description: 'Find local businesses losing money on manual tasks. Unlock step-by-step PDF blueprints, clickable link vaults, and video walkthroughs for just KSh 50.',
      image: ASSETS.imperionxSalonPromo,
      icon: TrendingUp,
      stats: 'KES 25k – 180k/mo earning models',
      tagColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60'
    },
    {
      id: 'combinator' as const,
      badge: '$0 Software Cost · Zero Subscriptions',
      title: 'Zero-Capital Free-Tier Combinator',
      description: 'Combine v0 + Supabase + Daraja M-Pesa sandbox to build complete client systems in 3–6 hours without paying expensive SaaS fees.',
      image: ASSETS.freeTools85Grid,
      icon: Layers,
      stats: '$0/mo software overhead',
      tagColor: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/60'
    },
    {
      id: 'agency-24h' as const,
      badge: '24H Delivery · 1,999 KES',
      title: 'Local Business AI Agency & M-Pesa System',
      description: 'Transform manual paper accounting into an automated mobile sales dashboard + website with instant M-Pesa STK verification in 24 hours.',
      image: ASSETS.imperionxBeforeAfter,
      icon: Zap,
      stats: 'KES 24,500/day recorded sales',
      tagColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60'
    },
    {
      id: 'agent-stack-20' as const,
      badge: 'Model to Data to Deploy',
      title: 'Building AI Agents: 20-Tool Production Stack',
      description: 'The canonical engineering pipeline: Cursor, MCP protocols, n8n, LangGraph, CrewAI, E2B sandboxes, Qdrant, Supabase, and Modal GPUs.',
      image: ASSETS.aiAgents20Stack,
      icon: Bot,
      stats: '20 Essential Agent Tools',
      tagColor: 'text-blue-400 bg-blue-950/60 border-blue-800/60'
    },
    {
      id: 'team-replace-50' as const,
      badge: 'Save $28k/mo Payroll',
      title: '50+ AI Tools to Replace Entire Teams',
      description: '8 functional department replacements: Image, Video, Full-Stack Code, Websites, SEO, Chatbots, Copywriting, and Deep Research.',
      image: ASSETS.aiTools50Wheel,
      icon: Sparkles,
      stats: '98.4% Operating Cost Reduction',
      tagColor: 'text-violet-400 bg-violet-950/60 border-violet-800/60'
    },
    {
      id: 'skills-9' as const,
      badge: 'Highest 2026 Demand',
      title: '9 Essential AI Skills to Master in 2026',
      description: 'Prompt engineering, workflow automations, RAG pipelines, custom model fine-tuning, video generation, and LLM observability.',
      image: ASSETS.essentialAiSkills9,
      icon: Award,
      stats: 'Up to $14,000/mo earning benchmark',
      tagColor: 'text-amber-400 bg-amber-950/60 border-amber-800/60'
    }
  ];

  return (
    <section className="py-20 border-b border-slate-800/80 bg-gradient-to-b from-[#070b14] via-[#090e1c] to-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Commercial Blueprints & Technical Stacks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Explore Our Multi-System AI & Agency Architecture
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every system is backed by verified commercial posters, real M-Pesa transaction flows, and reproducible code templates.
            </p>
          </div>

          <button
            onClick={() => navigate('systems')}
            className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-900/40 flex items-center gap-2 shrink-0 self-start md:self-auto"
          >
            <span>Explore All Systems & 50 Bob Blueprints</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Featured Systems Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showcaseSystems.map((sys) => {
            const Icon = sys.icon;
            return (
              <div
                key={sys.id}
                onClick={() => navigate('systems', { category: sys.id })}
                className="group cursor-pointer rounded-2xl bg-[#0c1220] hover:bg-[#0f1729] border border-slate-800 hover:border-blue-500/50 p-6 transition-all duration-300 shadow-xl flex flex-col justify-between text-left space-y-5"
              >
                <div className="space-y-4">
                  
                  {/* Top image preview strip */}
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-800 bg-[#080d17]">
                    <img
                      src={sys.image}
                      alt={sys.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border ${sys.tagColor}`}>
                        {sys.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                        {sys.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {sys.description}
                    </p>
                  </div>
                </div>

                {/* Footer action */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="font-mono text-emerald-400 font-semibold">{sys.stats}</span>
                  <span className="text-blue-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Launch System Explorer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
