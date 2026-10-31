import React, { useState } from 'react';
import { ASSETS } from '../../data/assets';
import { AGENT_STACK_20_TOOLS, AgentToolItem } from '../../data/systemsData';
import { useNavigation } from '../../context/NavigationContext';
import { 
  Bot, Terminal, ExternalLink, Sparkles, Filter, 
  Layers, Code2, BookOpen, Check, X
} from 'lucide-react';

export const AgentStack20SystemView: React.FC = () => {
  const { navigate, openCourseDetail } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTool, setActiveTool] = useState<AgentToolItem | null>(null);

  const categories = [
    'All',
    'Editor & Code',
    'MCP & Data',
    'Workflows',
    'Frameworks',
    'Swarm & Orchestration',
    'Inference & Models',
    'Sandboxes',
    'Vector DB & Memory',
    'Cloud Compute',
    'Prompting & Architecture'
  ];

  const filteredTools = AGENT_STACK_20_TOOLS.filter((t) => {
    if (selectedCategory === 'All') return true;
    return t.category === selectedCategory;
  });

  return (
    <div className="space-y-10 text-left">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1220] via-[#0f172a] to-[#0a1120] border-2 border-blue-500/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-400 bg-blue-950/60 border border-blue-800/60 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5" />
              <span>FutureTech Engineering Stack System</span>
            </span>
            <span className="text-xs text-slate-400 font-mono">System Code: AGENT-STACK-20</span>
          </div>

          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/40 font-bold">
            From Model to Data to Deploy
          </span>
        </div>

        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building AI Agents? These 20 Tools Will Save You Weeks.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            The canonical production toolchain taught in our Faculty of AI Automation & Autonomous Agents. Master every layer: IDEs, MCP connectors, multi-agent frameworks, cloud sandboxes, vector stores, and GPU deployment.
          </p>
        </div>
      </div>

      {/* Visual Infographic Comparison Strip */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 rounded-2xl bg-[#0c1220] border border-slate-800">
        
        <div className="lg:col-span-5 rounded-xl overflow-hidden border border-slate-800 bg-[#070a12] aspect-[4/3] relative group">
          <img
            src={ASSETS.aiAgents20Stack}
            alt="Building AI Agents 20 Tools Infographic Poster"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-blue-300 border border-blue-800/50">
            Source Curriculum Infographic
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            Full-Cycle Agentic Tooling Blueprint
          </span>
          <h3 className="text-xl font-bold text-white">
            From Raw Foundations to Production Multi-Agent Swarms
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Stop building agents with toy single-prompt scripts. Modern software requires deterministic state graphs (LangGraph), sandboxed code execution (E2B), open tool protocols (Anthropic MCP), and observability tracing (Langfuse).
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => openCourseDetail('ai-agents-production')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-blue-900/30 flex items-center gap-1.5"
            >
              <span>Explore Course: Autonomous AI Agents</span>
              <BookOpen className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs text-slate-400">
              8-week cohort with LangGraph & CrewAI capstones
            </span>
          </div>
        </div>

      </div>

      {/* Interactive 20-Tool Grid */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white">
              Interactive 20-Tool Stack Explorer
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Click any tool card below to inspect its role, documentation, and sandbox terminal command.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#0c1220] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 20 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => setActiveTool(tool)}
              className="group cursor-pointer p-4 rounded-xl bg-[#0c1220] hover:bg-[#0f1729] border border-slate-800 hover:border-blue-500/60 transition-all duration-200 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-6 h-6 rounded-md bg-blue-950/80 border border-blue-800/40 text-blue-400 text-xs font-mono font-bold flex items-center justify-center">
                    {tool.number}
                  </span>
                  <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 font-semibold">
                    {tool.badge}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                  {tool.domain}
                </h4>

                <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {tool.tagline}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-blue-400 font-medium">Click to inspect</span>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-blue-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tool Detail Modal */}
      {activeTool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-150">
          <div className="bg-[#0c1220] border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                  #{activeTool.number}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">{activeTool.name}</h3>
                  <p className="text-[11px] text-blue-400 font-mono">{activeTool.domain}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveTool(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 uppercase tracking-wider text-[10px] font-semibold block mb-1">
                  Role in the AI Agent Stack
                </span>
                <p className="text-sm text-slate-200 font-medium leading-snug">
                  {activeTool.tagline}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#080d17] border border-slate-800/80 space-y-1">
                <span className="text-slate-400 uppercase tracking-wider text-[10px] font-semibold block">
                  Detailed Capabilities
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {activeTool.description}
                </p>
              </div>

              <div>
                <span className="text-slate-400 uppercase tracking-wider text-[10px] font-semibold block mb-1">
                  Category
                </span>
                <span className="bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                  {activeTool.category}
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-800">
              <a
                href={activeTool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
              >
                <span>Visit Official Tool Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => {
                  setActiveTool(null);
                  openCourseDetail('ai-agents-production');
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg transition-colors"
              >
                View Syllabus Module
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
