import React, { useState } from 'react';
import { KENYA_MARKET_GAPS, MarketGapItem } from '../../data/marketGapsData';
import { useCurrency } from '../../context/CurrencyContext';
import { 
  TrendingUp, Search, Filter, ShieldCheck, DollarSign, Clock, FileText, 
  ExternalLink, CheckCircle2, Play, Download, Copy, Check, ArrowRight,
  Smartphone, BookOpen, AlertCircle, Sparkles, X, ChevronRight, Layers, MessageSquare
} from 'lucide-react';

export const KenyaMarketGapRadarView: React.FC = () => {
  const { formatPrice } = useCurrency();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState<'All' | 'Retail' | 'Education' | 'Logistics' | 'Beauty'>('All');
  
  // 50 Bob Blueprint Modal State
  const [activeBlueprintModal, setActiveBlueprintModal] = useState<MarketGapItem | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('0712345678');
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'pushing' | 'confirmed'>('idle');
  const [unlockedGaps, setUnlockedGaps] = useState<string[]>([]);
  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeVideoTab, setActiveVideoTab] = useState(false);

  const filteredGaps = KENYA_MARKET_GAPS.filter((gap) => {
    const matchesSearch = gap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          gap.marketGapSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          gap.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedSector === 'All') return matchesSearch;
    if (selectedSector === 'Retail') return matchesSearch && (gap.id.includes('duka') || gap.id.includes('retail'));
    if (selectedSector === 'Education') return matchesSearch && (gap.id.includes('school') || gap.id.includes('fee'));
    if (selectedSector === 'Logistics') return matchesSearch && (gap.id.includes('water') || gap.id.includes('tanker'));
    if (selectedSector === 'Beauty') return matchesSearch && (gap.id.includes('salon') || gap.id.includes('beauty'));
    return matchesSearch;
  });

  const handleOpenBlueprint = (gap: MarketGapItem) => {
    setActiveBlueprintModal(gap);
    if (!unlockedGaps.includes(gap.id)) {
      setPaymentStatus('idle');
    } else {
      setPaymentStatus('confirmed');
    }
  };

  const handleSimulatePayment = () => {
    setPaymentStatus('pushing');
    setTimeout(() => {
      setPaymentStatus('confirmed');
      if (activeBlueprintModal && !unlockedGaps.includes(activeBlueprintModal.id)) {
        setUnlockedGaps([...unlockedGaps, activeBlueprintModal.id]);
      }
    }, 2200);
  };

  const handleInstantUnlock = () => {
    setPaymentStatus('confirmed');
    if (activeBlueprintModal && !unlockedGaps.includes(activeBlueprintModal.id)) {
      setUnlockedGaps([...unlockedGaps, activeBlueprintModal.id]);
    }
  };

  const copyPitchScript = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-10">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900/90 to-blue-950/70 border border-emerald-500/20 p-8 sm:p-10 backdrop-blur-xl">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Kenya & Africa Market Gap Scanner</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Discover What&apos;s Trending in Kenya. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Build the Solution. Earn Daily M-Pesa Cash.
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Real businesses in Nairobi, Mombasa, Kisumu, and Eldoret are losing money daily due to manual processes. Each blueprint below pairs a high-demand Kenyan problem with a 100% free-tier software stack.
          </p>

          {/* 50 Bob Highlight Badge */}
          <div className="mt-6 inline-flex flex-wrap items-center gap-3 p-3.5 rounded-2xl bg-slate-950/80 border border-emerald-500/30">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500 text-slate-950 font-black text-xs">
              50 BOB PASS
            </span>
            <span className="text-xs text-slate-300">
              Unlock complete step-by-step PDF, clickable link vaults, source code, and video tutorial for just <strong className="text-emerald-300 font-bold">KSh 50</strong>.
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
        {/* Sector Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          {(['All', 'Retail', 'Education', 'Logistics', 'Beauty'] as const).map((sector) => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedSector === sector
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {sector === 'All' ? 'All Gaps' : sector}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search problems, towns, or tools..."
            className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
      </div>

      {/* Market Gap Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredGaps.map((gap) => {
          const isUnlocked = unlockedGaps.includes(gap.id);

          return (
            <div
              key={gap.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group shadow-lg hover:shadow-xl hover:shadow-emerald-950/20"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold font-mono">
                      #{gap.trendingRank}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {gap.location}
                    </span>
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                    gap.demandLevel === 'Exploding'
                      ? 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                      : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  }`}>
                    {gap.demandLevel} Demand
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  {gap.title}
                </h3>

                {/* Market Gap Summary */}
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/50 p-3.5 rounded-2xl border border-slate-800/80">
                  <strong className="text-white block mb-1">The Kenyan Business Pain Point:</strong>
                  {gap.marketGapSummary}
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 text-center">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Build Time</div>
                    <div className="text-xs font-bold text-white mt-0.5">{gap.estimatedBuildTime}</div>
                  </div>
                  <div className="border-x border-slate-800">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">SaaS Cost</div>
                    <div className="text-xs font-bold text-emerald-400 mt-0.5">{gap.softwareCostMonthly}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Target Base</div>
                    <div className="text-xs font-bold text-cyan-300 mt-0.5 truncate px-1">{gap.targetClients.split(',')[0]}</div>
                  </div>
                </div>

                {/* Free Tools to Combine */}
                <div className="space-y-2">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Combine These Free Tools:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {gap.toolsToCombine.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium"
                      >
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Earning Roadmap Preview */}
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1.5">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    <span>How You Get Paid:</span>
                  </div>
                  <div className="text-xs text-emerald-300 font-medium">
                    {gap.earningRoadmap.pricingStrategy}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Potential: <strong className="text-white">{gap.earningRoadmap.starterIncomeKes}</strong>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <div className="text-xs">
                  <span className="text-slate-400">Complete Blueprint: </span>
                  <span className="text-emerald-400 font-bold">50 Bob (KSh 50)</span>
                </div>

                <button
                  onClick={() => handleOpenBlueprint(gap)}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                    isUnlocked
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-md shadow-emerald-500/20'
                  }`}
                >
                  {isUnlocked ? (
                    <>
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Open Blueprint Reader</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Unlock Blueprint (50 Bob)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 50 Bob Blueprint Reader & Modal */}
      {activeBlueprintModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                  PDF
                </span>
                <div>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {activeBlueprintModal.pdfBlueprint.title}
                  </h3>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {activeBlueprintModal.pdfBlueprint.pagesCount} Pages · Step-by-Step Practical Blueprint
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveBlueprintModal(null)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: If Locked vs Unlocked */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              {paymentStatus !== 'confirmed' ? (
                /* Pay 50 Bob Screen */
                <div className="max-w-xl mx-auto space-y-6 text-center py-4">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <Smartphone className="w-8 h-8" />
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      Unlock Full Step-by-Step Blueprint
                    </h4>
                    <p className="text-xs text-slate-300 mt-2">
                      Get the complete downloadable PDF, clickable link vaults, copy-paste prompts, and full video walkthrough for this exact Kenyan opportunity.
                    </p>
                  </div>

                  {/* Included in 50 Bob */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-2.5">
                    <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                      Included in this 50 Bob Download:
                    </div>
                    {activeBlueprintModal.pdfBlueprint.includedResources.map((res, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>

                  {/* M-Pesa STK Simulator Form */}
                  <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-left space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Smartphone className="w-4 h-4 text-emerald-400" />
                        Lipa na M-Pesa STK Push
                      </span>
                      <span className="text-emerald-400 font-bold text-sm">KES 50.00</span>
                    </div>

                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">
                        Safaricom Phone Number:
                      </label>
                      <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono text-xs focus:outline-none focus:border-emerald-500"
                        placeholder="07XXXXXXXX"
                      />
                    </div>

                    <button
                      onClick={handleSimulatePayment}
                      disabled={paymentStatus === 'pushing'}
                      className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-50"
                    >
                      {paymentStatus === 'pushing' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Sending STK Prompt to {phoneNumber}...</span>
                        </>
                      ) : (
                        <>
                          <span>Pay 50 Bob with M-Pesa</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <div className="text-center pt-2">
                      <button
                        onClick={handleInstantUnlock}
                        className="text-[11px] text-slate-400 hover:text-cyan-300 underline transition-colors"
                      >
                        Student Free Access · Instant Preview Mode
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Unlocked Full PDF & Link Vault Reader */
                <div className="space-y-8">
                  {/* Unlocked Success Banner */}
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">Blueprint Unlocked & Verified</div>
                        <div className="text-[11px] text-emerald-300">Transaction ID: QRF78932KENYA · All Links & Source Code Active</div>
                      </div>
                    </div>
                    <button
                      onClick={() => window.print()}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Print / Save PDF</span>
                    </button>
                  </div>

                  {/* Video Walkthrough Player */}
                  <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
                    <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Play className="w-4 h-4 text-rose-500 fill-rose-500" />
                        <span className="text-xs font-bold text-white">Video Walkthrough Masterclass</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                          {activeBlueprintModal.videoTutorial.duration}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">
                        Instructor: {activeBlueprintModal.videoTutorial.instructor}
                      </span>
                    </div>

                    <div className="aspect-video bg-slate-900 relative flex items-center justify-center p-6 text-center">
                      <div className="space-y-3 max-w-md">
                        <div className="w-14 h-14 rounded-full bg-rose-500/20 text-rose-400 mx-auto flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                          <Play className="w-6 h-6 fill-rose-400 ml-1" />
                        </div>
                        <div className="text-sm font-bold text-white">
                          {activeBlueprintModal.videoTutorial.title}
                        </div>
                        <p className="text-xs text-slate-400">
                          Step-by-step developer tutorial showing terminal setup, Daraja webhook configuration, and WhatsApp test orders.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step-by-Step Blueprint Walkthrough */}
                  <div className="space-y-4">
                    <h5 className="text-base font-bold text-white flex items-center gap-2">
                      <Layers className="w-4 h-4 text-emerald-400" />
                      <span>Step-by-Step Implementation Guide</span>
                    </h5>

                    <div className="space-y-3">
                      {activeBlueprintModal.earningRoadmap.stepByStepPlan.map((step, index) => (
                        <div key={index} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0">
                            {index + 1}
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed pt-0.5">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clickable Resource Link Vault */}
                  <div className="space-y-3">
                    <h5 className="text-base font-bold text-white flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-cyan-400" />
                      <span>Clickable Free-Tier Resource Vault</span>
                    </h5>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeBlueprintModal.toolsToCombine.map((tool, i) => (
                        <a
                          key={i}
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all flex items-center justify-between group"
                        >
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors flex items-center gap-1.5">
                              <span>{tool.name}</span>
                              <ExternalLink className="w-3 h-3 text-slate-500" />
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5">{tool.role}</div>
                            <div className="text-[10px] text-emerald-400 font-medium mt-1">{tool.tierNote}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Copy-Paste Local Pitch Script (Swahili & English) */}
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-purple-400" />
                        <span>Ready-to-Use Local Pitch Message (Send to Business Owner)</span>
                      </span>
                      <button
                        onClick={() => copyPitchScript(
                          `Habari! Nimeona shop yako na nimewaandalia simple website na WhatsApp bot ambapo wateja wanaweza kuona bei na kulipa na M-Pesa moja kwa moja. Inachukua masaa machache ku-setup. Unaweza kuangalia hii live demo? Ni KES 1,999 pekee.`
                        )}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-medium flex items-center gap-1 transition-colors"
                      >
                        {copiedScript ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedScript ? 'Copied!' : 'Copy Script'}</span>
                      </button>
                    </div>

                    <p className="text-xs text-slate-300 font-mono bg-slate-900 p-3.5 rounded-xl border border-slate-800/80 leading-relaxed">
                      &quot;Habari! Nimeona shop yako na nimewaandalia simple website na WhatsApp bot ambapo wateja wanaweza kuona bei na kulipa na M-Pesa moja kwa moja. Inachukua masaa machache ku-setup. Unaweza kuangalia hii live demo? Ni KES 1,999 pekee.&quot;
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
