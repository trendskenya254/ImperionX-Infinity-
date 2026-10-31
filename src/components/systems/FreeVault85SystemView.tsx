import React, { useState } from 'react';
import { ASSETS } from '../../data/assets';
import { Search, Sparkles, ExternalLink, Zap, Copy, Check, Filter } from 'lucide-react';

interface FreeToolCategory {
  title: string;
  badgeNumber: number;
  tools: string[];
}

const CATEGORIES_85: FreeToolCategory[] = [
  {
    title: '1. Ideas & Content Ideation',
    badgeNumber: 1,
    tools: ['ChatGPT', 'Copy.ai', 'Writesonic', 'Rytr', 'AI-Writer', 'ContentBot', 'Scalenut', 'Frase', 'Peppertype.ai', 'Anyword']
  },
  {
    title: '2. Design & Graphics',
    badgeNumber: 2,
    tools: ['Canva', 'Adobe Spark', 'Designify', 'Remove.bg', 'DeepArt', "Let's Enhance", 'Lumen5', 'Crello', 'Snappa', 'Ideogram', 'Leonardo ai']
  },
  {
    title: '3. Graphs & Data Visualizers',
    badgeNumber: 3,
    tools: ['Tableau Public', 'Datawrapper', 'ChartBlocks', 'Plotly', 'RAWGraphs', 'Infogram', 'Google Charts', 'Piktochart', 'Venngage', 'Visme']
  },
  {
    title: '4. Free Stock Photos & Footage',
    badgeNumber: 4,
    tools: ['Unsplash', 'Pexels', 'Pixabay', 'Freepik', 'StockSnap', 'Burst', 'Reshot', 'Kaboompics', 'Gratisography', 'Picjumbo']
  },
  {
    title: '5. Hashtags & Social Algorithms',
    badgeNumber: 5,
    tools: ['All Hashtag', 'Hashtagify', 'RiteTag', 'Inflact', 'Instavast', 'Photerloo', 'Seekmetrics', 'TagsFinder', 'HashtagsForLikes', 'Display Purposes']
  },
  {
    title: '6. Analytics & User Recording',
    badgeNumber: 6,
    tools: ['Google Analytics', 'Hotjar', 'Mixpanel', 'Matomo', 'Clicky', 'Heap', 'Crazy Egg', 'Kissmetrics', 'Piwik PRO', 'Statcounter', 'Open Web Analytics']
  },
  {
    title: '7. Social Media Schedulers',
    badgeNumber: 7,
    tools: ['Buffer', 'Hootsuite', 'Later', 'Planoly', 'CoSchedule', 'Zoho Social', 'SocialBee', 'Postfity', 'Crowdfire', 'Sked Social', 'SocialPilot']
  },
  {
    title: '8. Productivity & Workflow AI',
    badgeNumber: 8,
    tools: ['Notion AI', 'Trello AI', 'Taskade', 'Reclaim AI', 'Motion AI', 'Otter.ai', 'Fireflies.ai', 'Krisp AI', 'Evernote AI', 'Superhuman AI']
  }
];

const DEADLY_AI_TOOLS_8 = [
  { name: 'HeyGen', desc: 'Create human avatars for videos', category: 'Video' },
  { name: 'Play.ht', desc: 'Convert text into natural voices', category: 'Voice' },
  { name: 'Cleanup', desc: 'Remove unwanted objects from images', category: 'Photo' },
  { name: 'INK', desc: 'AI SEO optimizer and content planner', category: 'SEO' },
  { name: 'DeepImage', desc: 'Enhance and upscale images instantly', category: 'Design' },
  { name: 'Headline', desc: 'Write effective high-converting marketing copy', category: 'Copy' },
  { name: 'Crayon', desc: 'Create high-quality images from text', category: 'Generative' },
  { name: 'Jitter', desc: 'Generate animated videos and UI transitions quickly', category: 'Animation' }
];

const SECRET_AI_TOOLS_20 = [
  { name: 'Consensus', desc: 'Ask questions and get answers pulled directly from scientific research papers.' },
  { name: 'Elicit', desc: 'Search, compare and extract findings from dozens of research papers at once.' },
  { name: 'Shadow', desc: 'Capture meetings quietly and turn conversations into summaries and follow-ups.' },
  { name: 'Voicenotes', desc: 'Record your thoughts and let AI transcribe, organise and search everything you say.' },
  { name: 'Recall', desc: 'Save articles, videos and PDFs into an AI-powered personal knowledge base.' },
  { name: 'Browse AI', desc: 'Train AI robots to extract and monitor information from almost any website.' },
  { name: 'Guidde', desc: 'Record a process once and automatically turn it into a polished step-by-step video guide.' },
  { name: 'Tactiq', desc: 'Transcribe online meetings and generate professional summaries, tasks and follow-ups.' },
  { name: 'Lex', desc: 'A minimalist AI writing workspace built for long-form writing and editing.' },
  { name: 'Cline', desc: 'Give an AI coding agent tasks and let it work across an entire codebase.' },
  { name: 'Vizard', desc: 'Turn long-form videos into clickable short clips for TikTok and YouTube Shorts.' },
  { name: 'Cleanup.pictures', desc: 'Paint over unwanted objects in a photo and AI removes them automatically.' },
  { name: 'Decktopus', desc: 'Turn an idea into a complete presentation and get help rehearsing it.' },
  { name: 'Formula Bot', desc: 'Describe what you need and get the exact Excel or Google Sheets formula.' },
  { name: 'Humata', desc: 'Upload huge PDFs and ask questions instead of manually searching through them.' },
  { name: 'AskYourPDF', desc: 'Chat with entire collections of PDFs and find answers across multiple documents.' },
  { name: 'Reclaim', desc: 'Automatically rearrange your calendar to protect time for tasks, habits and focus.' },
  { name: 'Sleek.design', desc: 'Generate clean UI components and design-system elements ready for Figma.' },
  { name: 'MemoryPlugin', desc: 'Give different AI assistants a shared long-term memory you can control.' },
  { name: 'Eraser', desc: 'Describe a system or process and instantly generate professional technical diagrams.' }
];

export const FreeVault85SystemView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'85-free' | '8-deadly' | '20-secret'>('85-free');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedTool, setCopiedTool] = useState<string | null>(null);

  const handleCopy = (toolName: string) => {
    navigator.clipboard.writeText(toolName);
    setCopiedTool(toolName);
    setTimeout(() => setCopiedTool(null), 1500);
  };

  return (
    <div className="space-y-10 text-left">
      
      {/* Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1220] via-[#0f172a] to-[#0a1120] border-2 border-emerald-500/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FutureTech Open Access Vault</span>
            </span>
            <span className="text-xs text-slate-400 font-mono">System Code: FREE-VAULT-85</span>
          </div>

          <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-800/40 font-bold">
            100+ Free & Freemium Tools Indexed
          </span>
        </div>

        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            85 Free Tools & Secret AI Utilities Directory
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Build, create, and grow without spending thousands on enterprise software subscriptions. Master the exact free tool stacks used by high-output international creators.
          </p>
        </div>

        {/* System Sub-Tabs */}
        <div className="pt-6 mt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTab('85-free')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === '85-free'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-[#080d17] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            85 Free Tools (8 Departments)
          </button>
          <button
            onClick={() => setActiveTab('8-deadly')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === '8-deadly'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-[#080d17] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            8 Deadly AI Tools You Must Use
          </button>
          <button
            onClick={() => setActiveTab('20-secret')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === '20-secret'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-[#080d17] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            20 Secret AI Tools
          </button>
        </div>
      </div>

      {/* Tab 1: 85 Free Tools Grid */}
      {activeTab === '85-free' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Infographic Reference Poster */}
            <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-slate-800 bg-[#070a12] aspect-[3/4] relative group sticky top-24">
              <img
                src={ASSETS.freeTools85Grid}
                alt="85 Free Tools Infographic Grid"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-emerald-300 border border-emerald-800/50">
                85 Tools Master Sheet
              </div>
            </div>

            {/* 8 Columns List */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CATEGORIES_85.map((cat) => (
                <div
                  key={cat.title}
                  className="p-5 rounded-2xl bg-[#0c1220] border border-slate-800 space-y-3 text-left"
                >
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800/80 pb-2">
                    {cat.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.tools.map((t) => (
                      <button
                        key={t}
                        onClick={() => handleCopy(t)}
                        className="px-2.5 py-1 rounded-md text-xs bg-[#080d17] border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors group"
                        title="Click to copy tool name"
                      >
                        <span>{t}</span>
                        {copiedTool === t ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-2.5 h-2.5 text-slate-600 group-hover:text-slate-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* Tab 2: 8 Deadly AI Tools */}
      {activeTab === '8-deadly' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-slate-800 bg-[#070a12] aspect-[3/4] relative group sticky top-24">
              <img
                src={ASSETS.deadlyAiTools8}
                alt="8 Deadly AI Tools You Must Use Poster"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-purple-300 border border-purple-800/50">
                8 Deadly Tools Infographic
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DEADLY_AI_TOOLS_8.map((tool, idx) => (
                <div
                  key={tool.name}
                  className="p-5 rounded-2xl bg-[#0c1220] border border-slate-800 hover:border-purple-500/50 transition-colors space-y-2 text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-purple-950/80 border border-purple-800/40 text-purple-400 text-xs font-mono font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-white">{tool.name}</h4>
                    </div>
                    <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* Tab 3: 20 Secret AI Tools */}
      {activeTab === '20-secret' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-slate-800 bg-[#070a12] aspect-[3/4] relative group sticky top-24">
              <img
                src={ASSETS.secretAiTools20}
                alt="20 Secret AI Tools Poster"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-amber-300 border border-amber-800/50">
                20 Secret AI Tools Poster
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SECRET_AI_TOOLS_20.map((tool, idx) => (
                <div
                  key={tool.name}
                  className="p-4 rounded-xl bg-[#0c1220] border border-slate-800 hover:border-amber-500/50 transition-colors space-y-1.5 text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-amber-950/80 border border-amber-800/40 text-amber-400 text-[11px] font-mono font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="text-xs font-bold text-white">{tool.name}</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
