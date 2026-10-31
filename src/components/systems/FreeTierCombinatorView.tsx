import React, { useState } from 'react';
import { 
  FREE_TIER_TOOLS_POOL, 
  COMBINATION_RECIPES, 
  FreeTierTool, 
  CombinationRecipe 
} from '../../data/combinatorData';
import { useCurrency } from '../../context/CurrencyContext';
import { useNavigation } from '../../context/NavigationContext';
import { 
  Plus, Check, ArrowRight, Zap, DollarSign, Clock, Layers, Sparkles, 
  Smartphone, ShieldCheck, ChevronRight, Copy, Terminal, ExternalLink, RefreshCw
} from 'lucide-react';

export const FreeTierCombinatorView: React.FC = () => {
  const { formatPrice } = useCurrency();
  const { navigate } = useNavigation();

  // Selected preset or custom tools
  const [selectedRecipe, setSelectedRecipe] = useState<CombinationRecipe>(COMBINATION_RECIPES[0]);
  const [activeCustomToolIds, setActiveCustomToolIds] = useState<string[]>(
    COMBINATION_RECIPES[0].combinedTools.map(t => t.id)
  );
  const [clientCount, setClientCount] = useState<number>(5);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [previewTab, setPreviewTab] = useState<'visual' | 'code' | 'steps'>('visual');

  const toggleTool = (tool: FreeTierTool) => {
    if (activeCustomToolIds.includes(tool.id)) {
      if (activeCustomToolIds.length > 2) {
        setActiveCustomToolIds(activeCustomToolIds.filter(id => id !== tool.id));
      }
    } else {
      setActiveCustomToolIds([...activeCustomToolIds, tool.id]);
    }
  };

  const selectRecipe = (recipe: CombinationRecipe) => {
    setSelectedRecipe(recipe);
    setActiveCustomToolIds(recipe.combinedTools.map(t => t.id));
  };

  const activeTools = FREE_TIER_TOOLS_POOL.filter(t => activeCustomToolIds.includes(t.id));

  // Calculate simulated monthly earning in KES
  const baseMonthlyPerClient = 2500;
  const setupFeePerClient = 4000;
  const estimatedKesYield = (clientCount * setupFeePerClient) + (clientCount * baseMonthlyPerClient);

  const samplePrompt = `Build a responsive mobile-first business web app with:
1. Modern hero with brand logo and local contact button
2. Interactive service/product catalogue with price list
3. One-click "Lipa na M-Pesa" booking deposit button
4. Instant order receipt summary with WhatsApp routing
Design in Tailwind CSS, dark navy futuristic theme.`;

  const copyPromptToClipboard = () => {
    navigator.clipboard.writeText(samplePrompt);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="space-y-12">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900/80 to-purple-950/50 border border-blue-500/20 p-8 sm:p-10 backdrop-blur-xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Zero-Capital Tech Combinator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Combine $0 Free Tiers. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
              Build Real Systems. Keep 100% of the Cash.
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Stop paying $20/month for every SaaS tool. When you combine free-tier AI frontends, free database tiers, and local payment APIs, you can deliver client web apps in 24 hours at <strong className="text-white">$0 software overhead</strong>.
          </p>

          {/* Quick Metrics */}
          <div className="mt-6 flex flex-wrap gap-4 sm:gap-6 pt-4 border-t border-slate-800">
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Your Software Cost</div>
              <div className="text-2xl font-bold text-emerald-400">$0.00 / month</div>
            </div>
            <div className="w-px h-10 bg-slate-800 hidden sm:block" />
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Time to Launch</div>
              <div className="text-2xl font-bold text-cyan-300">2 – 6 Hours</div>
            </div>
            <div className="w-px h-10 bg-slate-800 hidden sm:block" />
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Monetization Rate</div>
              <div className="text-2xl font-bold text-purple-300">KES 1,999 – 25,000+</div>
            </div>
          </div>
        </div>
      </div>

      {/* Preset Blueprints Selector */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-400" />
            <span>Battle-Tested Free Combinations</span>
          </h3>
          <span className="text-xs text-slate-400">Select a blueprint to load layout</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {COMBINATION_RECIPES.map((recipe) => {
            const isSelected = selectedRecipe.id === recipe.id;
            return (
              <button
                key={recipe.id}
                onClick={() => selectRecipe(recipe)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 relative ${
                  isSelected
                    ? 'bg-blue-950/50 border-blue-400 ring-2 ring-blue-500/20 shadow-lg shadow-blue-500/10'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-3 right-3 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                  </span>
                )}
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                  {recipe.timeToBuild} Build Time
                </div>
                <h4 className="text-base font-semibold text-white leading-snug mb-2">
                  {recipe.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                  {recipe.tagline}
                </p>
                <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-800/80">
                  <span className="text-emerald-400 font-semibold">{recipe.earningPotentialKes}</span>
                  <span className="text-blue-300 font-medium flex items-center gap-1">
                    Preview <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Tool Stacker Grid */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md space-y-6">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span>Customize Free-Tier Ingredients</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Tap to toggle tools in your system stack. Every tool below offers an authentic $0 free tier for developers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {FREE_TIER_TOOLS_POOL.map((tool) => {
            const isActive = activeCustomToolIds.includes(tool.id);
            return (
              <button
                key={tool.id}
                onClick={() => toggleTool(tool)}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-blue-600/15 border-blue-500/60 shadow-md shadow-blue-900/20'
                    : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700 opacity-60 hover:opacity-100'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center text-xs font-bold font-mono">
                    {tool.logoPlaceholder}
                  </span>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                    isActive ? 'bg-blue-500 text-white' : 'border border-slate-700 text-transparent'
                  }`}>
                    <Check className="w-3 h-3" />
                  </span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white leading-tight">{tool.name}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{tool.category}</div>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px]">
                  <span className="text-emerald-400 font-medium">{tool.monthlyCost}</span>
                  <span className="text-slate-500">{isActive ? 'Active' : '+ Add'}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual Result: "When they combine this and this, it's going to bring a good layout" */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Step-by-Step Graphical Architecture Flow */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>How This Combination Works</span>
              </h4>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                $0 / mo Overhead
              </span>
            </div>

            {/* Visual Formula Header */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-wrap items-center gap-2 text-xs">
              {activeTools.map((t, idx) => (
                <React.Fragment key={t.id}>
                  <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-300 font-semibold border border-blue-500/20">
                    {t.name}
                  </span>
                  {idx < activeTools.length - 1 && (
                    <Plus className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  )}
                </React.Fragment>
              ))}
              <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                Production App
              </span>
            </div>

            {/* Architecture Steps */}
            <div className="space-y-4 relative before:absolute before:left-3.5 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-800">
              {selectedRecipe.architectureFlow.map((step) => (
                <div key={step.step} className="relative pl-9 group">
                  <div className="absolute left-0 top-0.5 w-7 h-7 rounded-full bg-slate-900 border-2 border-blue-500 text-blue-400 flex items-center justify-center text-xs font-bold shadow-md shadow-blue-500/20">
                    {step.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{step.title}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono">
                        {step.toolName}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Client Cash Calculator */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                  Monthly Cash Potential
                </span>
                <span className="text-slate-400">Clients: {clientCount}</span>
              </div>
              
              <input
                type="range"
                min="1"
                max="25"
                value={clientCount}
                onChange={(e) => setClientCount(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-emerald-500/20">
                <div>
                  <div className="text-[10px] text-slate-400">Estimated Cash Yield</div>
                  <div className="text-lg font-bold text-emerald-400">
                    KES {estimatedKesYield.toLocaleString()} <span className="text-xs text-slate-400">/ mo</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400">SaaS Expenses</div>
                  <div className="text-xs font-bold text-white">KES 0.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Layout Preview (Visual wireframe showing how the combination looks) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between bg-slate-900/60 p-2 rounded-2xl border border-slate-800">
            <div className="flex gap-1">
              <button
                onClick={() => setPreviewTab('visual')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  previewTab === 'visual'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Interactive Layout
              </button>
              <button
                onClick={() => setPreviewTab('code')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  previewTab === 'code'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                v0 / AI Starter Prompt
              </button>
            </div>

            <button
              onClick={() => navigate('kenya-radar')}
              className="text-xs text-cyan-300 hover:text-cyan-200 font-medium flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-slate-800"
            >
              <span>See Market Gaps</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Screen Preview */}
          {previewTab === 'visual' ? (
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-slate-400 font-mono ml-2">preview://client-live-app.futuretech.local</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 font-mono">
                  Stack: {activeTools.map(t => t.name).join(' + ')}
                </span>
              </div>

              {/* Wireframe Mock Header */}
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 flex items-center justify-between">
                  <div>
                    <h5 className="text-base font-bold text-white">{selectedRecipe.interactiveLayoutPreview.headline}</h5>
                    <p className="text-xs text-slate-300 mt-1">{selectedRecipe.interactiveLayoutPreview.summary}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300">
                    <Smartphone className="w-5 h-5" />
                  </div>
                </div>

                {/* Elements Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {selectedRecipe.interactiveLayoutPreview.elements.map((elem, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                      <span className="text-xs font-medium text-slate-200">{elem}</span>
                    </div>
                  ))}
                </div>

                {/* Simulated Live Action Module */}
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Simulated Customer Booking Action:</span>
                    <span className="text-emerald-400 font-mono font-bold">Lipa na M-Pesa Active</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                        KES
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">VIP Executive Hair & Spa Treatment</div>
                        <div className="text-[10px] text-slate-400">Instant SMS confirmation to customer phone</div>
                      </div>
                    </div>
                    <button className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-emerald-500/20">
                      <span>Pay KES 500 Deposit</span>
                    </button>
                  </div>
                </div>

                {/* Real-time Sales Ticker */}
                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    Supabase PostgreSQL row-level security enabled
                  </span>
                  <span className="text-blue-300 font-mono">0ms Edge Latency</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 pb-3 border-b border-slate-800">
                <span>Copy this prompt directly into v0.dev or Cursor:</span>
                <button
                  onClick={copyPromptToClipboard}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied!' : 'Copy Prompt'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800/90 text-cyan-300 leading-relaxed overflow-x-auto whitespace-pre-wrap font-mono">
                {samplePrompt}
              </pre>

              <div className="text-[11px] text-slate-400 font-sans leading-relaxed pt-2">
                Tip: Once generated in v0, download the React code, install dependencies (<code className="text-blue-300">lucide-react</code>, <code className="text-blue-300">tailwindcss</code>), and connect the Safaricom Daraja STK endpoint from our Kenya Market Gap blueprints.
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-blue-950/30 border border-blue-500/20">
            <div className="text-xs text-slate-300">
              Want the full ready-to-deploy source code + video tutorial?
            </div>
            <button
              onClick={() => navigate('kenya-radar')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20"
            >
              <span>Explore Kenya Market Gaps (50 Bob Blueprint)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
