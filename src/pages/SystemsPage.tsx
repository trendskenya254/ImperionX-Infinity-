import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ASSETS } from '../data/assets';
import { ImperionxAgencySystemView } from '../components/systems/ImperionxAgencySystemView';
import { AgentStack20SystemView } from '../components/systems/AgentStack20SystemView';
import { TeamReplacement50SystemView } from '../components/systems/TeamReplacement50SystemView';
import { EssentialSkills9SystemView } from '../components/systems/EssentialSkills9SystemView';
import { FreeVault85SystemView } from '../components/systems/FreeVault85SystemView';
import { FreeTierCombinatorView } from '../components/systems/FreeTierCombinatorView';
import { KenyaMarketGapRadarView } from '../components/systems/KenyaMarketGapRadarView';
import { DigitalCodexReaderView } from '../components/systems/DigitalCodexReaderView';
import { 
  Layers, Bot, Sparkles, Award, Zap, Image, 
  ExternalLink, ChevronRight, X, Maximize2, Sliders, TrendingUp, BookOpen
} from 'lucide-react';
import { ImageCarousel } from '../components/common/ImageCarousel';
import { getTutorialForSystem } from '../data/tutorialSteps';

export type SystemTabId = 
  | 'agency-24h' 
  | 'combinator'
  | 'kenya-radar'
  | 'codex'
  | 'agent-stack-20' 
  | 'team-replace-50' 
  | 'skills-9' 
  | 'free-vault-85'
  | 'visual-gallery';

export const SystemsPage: React.FC = () => {
  const { params } = useNavigation();
  const [activeTab, setActiveTab] = useState<SystemTabId>('agency-24h');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  const validTabs = [
    'agency-24h', 'combinator', 'kenya-radar', 'codex',
    'agent-stack-20', 'team-replace-50', 'skills-9', 'free-vault-85', 'visual-gallery'
  ];

  useEffect(() => {
    if (params.category && validTabs.includes(params.category)) {
      setActiveTab(params.category as SystemTabId);
    }
  }, [params.category]);

  const systems = [
    {
      id: 'agency-24h' as const,
      name: '24H AI Agency (ImperionX)',
      icon: Zap,
      badge: 'Monetization Engine',
      summary: 'Before vs After business transformation, KES 1,999 M-Pesa STK push & 24H AI app delivery.'
    },
    {
      id: 'combinator' as const,
      name: 'Zero-Capital Free Combinator',
      icon: Sliders,
      badge: '$0/mo Overhead',
      summary: 'Stack free UI, Supabase DB, M-Pesa sandbox, and local models to generate commercial systems.'
    },
    {
      id: 'kenya-radar' as const,
      name: 'Kenya Market Gaps & 50 Bob Pass',
      icon: TrendingUp,
      badge: 'Local Opportunities',
      summary: 'Search exploding problems in Nairobi & Kenya, get 50 Bob step-by-step PDF blueprints & video masterclasses.'
    },
    {
      id: 'codex' as const,
      name: 'School Codex & Masterclass',
      icon: BookOpen,
      badge: 'Interactive Academy',
      summary: 'Book-like step-by-step volumes for absolute beginners, interactive quizzes, and full video walkthroughs.'
    },
    {
      id: 'agent-stack-20' as const,
      name: 'Building AI Agents: 20 Tools',
      icon: Bot,
      badge: 'Full Stack',
      summary: 'From model to data to deploy: Cursor, MCP, n8n, CrewAI, E2B, Qdrant, Supabase, Modal.'
    },
    {
      id: 'team-replace-50' as const,
      name: '50+ Tools: Team Replacement',
      icon: Sparkles,
      badge: 'Lean Enterprise',
      summary: '8 Department stacks (Image, Video, Code, Web, SEO, Chatbots, Copy, Research) saving $28k/mo.'
    },
    {
      id: 'skills-9' as const,
      name: '9 Essential AI Skills (2026)',
      icon: Award,
      badge: 'Academic Core',
      summary: 'Prompting, RAG, Swarms, Fine-Tuning, Video, Tool Stacking, LLM Evaluation benchmarks.'
    },
    {
      id: 'free-vault-85' as const,
      name: '85 Free Tools & Secret Vault',
      icon: Layers,
      badge: 'Zero-Cost Stack',
      summary: '85 categorized tools, 8 Deadly AI utilities, and 20 Secret AI shortcuts.'
    },
    {
      id: 'visual-gallery' as const,
      name: 'Original Infographics Gallery',
      icon: Image,
      badge: 'Source Assets',
      summary: 'High-resolution presentation posters and infographic assets with architectural notes.'
    }
  ];

  const galleryItems = [
    {
      src: ASSETS.imperionxBeforeAfter,
      title: 'IMPERIONX Before & After Transformation',
      desc: 'Manual accounting vs automated KES 24,500 daily sales dashboard on smartphone with M-Pesa.'
    },
    {
      src: ASSETS.aiAgents20Stack,
      title: 'Building AI Agents: 20 Tools Infographic',
      desc: 'Canonical 20-tool stack covering models, MCP protocols, sandboxes, vector search, and GPU cloud.'
    },
    {
      src: ASSETS.aiTools50Wheel,
      title: '50+ Best AI Tools to Replace Entire Teams',
      desc: 'Circular radial architecture mapping the 8 core departments replaced by modern AI stacks.'
    },
    {
      src: ASSETS.essentialAiSkills9,
      title: '9 Essential AI Skills to Master in 2026',
      desc: 'The complete technical curriculum roadmap for frontier AI engineers and tech entrepreneurs.'
    },
    {
      src: ASSETS.freeTools85Grid,
      title: '85 Free Tools for Rapid Growth',
      desc: 'Comprehensive 8-column cheatsheet of free developer, designer, and growth tools.'
    },
    {
      src: ASSETS.imperionxMpesaChat,
      title: 'WhatsApp Business & Lipa na M-Pesa 1,999 KES',
      desc: 'Live payment request and automated verification screen for local clients.'
    },
    {
      src: ASSETS.deadlyAiTools8,
      title: '8 Deadly AI Tools You Must Use',
      desc: 'High-impact tools including HeyGen avatars, Play.ht voices, INK SEO, and Jitter animation.'
    },
    {
      src: ASSETS.secretAiTools20,
      title: '20 Secret AI Tools Found Earlier',
      desc: 'Lesser-known productivity power tools: Consensus, Cline, Vizard, Guidde, Humata, and Eraser.'
    },
    {
      src: ASSETS.imperionxSalonPromo,
      title: 'Beauty & Salon App 1,999 KES Promo',
      desc: 'Retail vertical launch template for hair stylists, beauty parlours, and nail salons.'
    }
  ];

  return (
    <div className="w-full py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Systems Header */}
        <div className="max-w-3xl space-y-4 mb-10 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive AI Systems & Infographics Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Multiple AI Systems & Presentation Frameworks
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Directly modeled from our verified infographic posters and client case studies. Explore interactive simulators, tool stacks, department replacement economics, and 2026 skill roadmaps.
          </p>
        </div>

        {/* Systems Navigation Tabs Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10 text-left">
          {systems.map((sys) => {
            const Icon = sys.icon;
            const isActive = activeTab === sys.id;
            return (
              <button
                key={sys.id}
                onClick={() => setActiveTab(sys.id)}
                className={`p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-2 text-left ${
                  isActive
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-xl shadow-blue-950/40'
                    : 'bg-[#0c1220] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-blue-400 font-bold bg-blue-950/60 px-1.5 py-0.5 rounded">
                    {sys.badge}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white line-clamp-1">{sys.name}</h4>
                  <p className="text-[10px] text-slate-400 line-clamp-2 mt-0.5 leading-tight">{sys.summary}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Step-by-Step Visual Tutorial Walkthrough for Selected System */}
        {activeTab !== 'visual-gallery' && (
          <div className="mb-12 text-left space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Step-by-Step Architecture Walkthrough</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  {getTutorialForSystem(activeTab).title}
                </h3>
              </div>
              <span className="text-xs text-slate-400">
                Visual Tutorial · {getTutorialForSystem(activeTab).steps.length} Steps
              </span>
            </div>

            <ImageCarousel
              steps={getTutorialForSystem(activeTab).steps}
              title={getTutorialForSystem(activeTab).title}
              subtitle={getTutorialForSystem(activeTab).subtitle}
              badge={getTutorialForSystem(activeTab).badge}
              aspectRatio="16/10"
            />
          </div>
        )}

        {/* Active System View */}
        <div className="pt-2">
          {activeTab === 'agency-24h' && <ImperionxAgencySystemView />}
          {activeTab === 'combinator' && <FreeTierCombinatorView />}
          {activeTab === 'kenya-radar' && <KenyaMarketGapRadarView />}
          {activeTab === 'codex' && <DigitalCodexReaderView />}
          {activeTab === 'agent-stack-20' && <AgentStack20SystemView />}
          {activeTab === 'team-replace-50' && <TeamReplacement50SystemView />}
          {activeTab === 'skills-9' && <EssentialSkills9SystemView />}
          {activeTab === 'free-vault-85' && <FreeVault85SystemView />}

          {/* Visual Gallery View */}
          {activeTab === 'visual-gallery' && (
            <div className="space-y-8 text-left">
              <div className="p-6 rounded-2xl bg-[#0c1220] border border-slate-800 space-y-2">
                <h3 className="text-xl font-bold text-white">Original Infographic Presentation Posters</h3>
                <p className="text-xs text-slate-400 max-w-2xl">
                  Inspect the source visual guides, social media presentation slides, and agency flyers powering FutureTech's practical curricula. Click any asset to open the full-screen view.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxImage(item)}
                    className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-800 bg-[#0c1220] hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                          <span>Click to Inspect High-Res</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-4 space-y-1">
                      <h4 className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-150"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0c1220] border border-slate-800 rounded-2xl max-w-3xl w-full p-6 space-y-4 shadow-2xl text-left"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-white">{lightboxImage.title}</h3>
                  <p className="text-xs text-slate-400">{lightboxImage.desc}</p>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="max-h-[70vh] overflow-auto rounded-xl border border-slate-800 bg-[#080d17] flex items-center justify-center p-2">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  className="max-h-[65vh] w-auto object-contain rounded-lg shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">Source: FutureTech Verified Presentation Asset</span>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
