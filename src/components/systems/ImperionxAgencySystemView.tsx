import React, { useState } from 'react';
import { ASSETS } from '../../data/assets';
import { IMPERIONX_AGENCY_BLUEPRINT } from '../../data/systemsData';
import { useNavigation } from '../../context/NavigationContext';
import { useCurrency } from '../../context/CurrencyContext';
import { 
  Smartphone, MessageSquare, CreditCard, CheckCircle2, 
  ArrowRight, Sparkles, TrendingUp, DollarSign, Clock, ShieldCheck, Play
} from 'lucide-react';

export const ImperionxAgencySystemView: React.FC = () => {
  const { openRegistrationWithPlan, navigate } = useNavigation();
  const { formatPrice } = useCurrency();
  
  // Interactive Simulator States
  const [phoneNumber, setPhoneNumber] = useState('0712 345 678');
  const [businessName, setBusinessName] = useState('Zuri Hair & Braids Studio');
  const [activeNicheIndex, setActiveNicheIndex] = useState(0);
  const [stkStatus, setStkStatus] = useState<'idle' | 'sending' | 'prompted' | 'confirmed'>('idle');
  const [clientCount, setClientCount] = useState(8);

  const activeNiche = IMPERIONX_AGENCY_BLUEPRINT.sampleUseCases[activeNicheIndex];

  const handleSimulateStk = async () => {
    setStkStatus('sending');
    await new Promise(r => setTimeout(r, 600));
    setStkStatus('prompted');
    await new Promise(r => setTimeout(r, 1200));
    setStkStatus('confirmed');
  };

  const weeklyIncomeKes = clientCount * IMPERIONX_AGENCY_BLUEPRINT.priceKes;
  const monthlyRetainersKes = clientCount * 500; // Monthly hosting & maintenance
  const totalMonthlyPotentialKes = (weeklyIncomeKes * 4) + monthlyRetainersKes;

  return (
    <div className="space-y-12 text-left">
      
      {/* Top Banner & Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1322] via-[#0f172a] to-[#0a1120] border-2 border-emerald-500/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FutureTech Commercial Agency Blueprint</span>
            </span>
            <span className="text-xs text-slate-400 font-mono">System Code: IMPERIONX-24H</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/90 px-3 py-1 rounded-lg border border-slate-800">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>24H AI Delivery Pipeline</span>
          </div>
        </div>

        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {IMPERIONX_AGENCY_BLUEPRINT.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {IMPERIONX_AGENCY_BLUEPRINT.subheadline}. How FutureTech students build, launch, and monetize local business web apps in 24 hours using prompt stacking, Lovable, Cursor, and M-Pesa STK Push.
          </p>
        </div>

        {/* Feature Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-semibold text-white">
            <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>App + Website</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-white">
            <CreditCard className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>M-Pesa STK Push</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-white">
            <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Sales Dashboard</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-white">
            <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>WhatsApp Orders</span>
          </div>
        </div>
      </div>

      {/* Before vs After Presentation Cards Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              The Before → After Business Transformation
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Visual proof of why informal merchants and shops eagerly pay KES 1,999 on WhatsApp for their first app.
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-400 font-bold hidden sm:inline">
            100% High-Conversion Pitch
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Real Presentation Poster Reference */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-800 bg-[#070a12] flex flex-col justify-between">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
              <img
                src={ASSETS.imperionxBeforeAfter}
                alt="ImperionX Before vs After Business Transformation"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-white border border-white/10">
                Verified Presentation Asset
              </div>
            </div>
            <div className="p-4 bg-[#0a0f1d] border-t border-slate-800 space-y-1">
              <p className="text-xs font-bold text-white">IMPERIONX Case Study #1</p>
              <p className="text-[11px] text-slate-400">
                Replaces messy manual paper books with an instant mobile sales dashboard (KES 24,500/day).
              </p>
            </div>
          </div>

          {/* Interactive Live STK Push & WhatsApp Workflow Simulator */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-[#0c1220] border border-slate-800 flex flex-col justify-between space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Interactive M-Pesa STK Simulator</span>
                </span>
                <span className="text-xs font-bold text-slate-300">
                  Fixed Package: <strong className="text-emerald-400 font-mono">KES 1,999</strong>
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Experience the exact client onboarding and automated M-Pesa STK push payment that FutureTech students deploy for retail clients.
              </p>

              {/* Form inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                    Merchant Business Name
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-3 py-2 bg-[#080d17] border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                    Client Phone (M-Pesa Number)
                  </label>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3 py-2 bg-[#080d17] border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-emerald-500 font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Simulated Phone Screen */}
            <div className="p-4 rounded-xl bg-[#080d17] border border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-white">Lipa na M-Pesa Online</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Paybill: 789201</span>
              </div>

              {stkStatus === 'idle' && (
                <div className="py-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-300 font-medium">Ready to trigger STK Prompt</p>
                    <p className="text-[11px] text-slate-400">Amount: KES 1,999 · Account: {businessName}</p>
                  </div>
                  <button
                    onClick={handleSimulateStk}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition-colors shadow-md shadow-emerald-950"
                  >
                    Send STK Push
                  </button>
                </div>
              )}

              {stkStatus === 'sending' && (
                <div className="py-4 text-center text-xs text-slate-300 animate-pulse">
                  Initiating secure Daraja API handshake to {phoneNumber}...
                </div>
              )}

              {stkStatus === 'prompted' && (
                <div className="py-3 p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-lg text-xs space-y-1">
                  <p className="font-bold text-emerald-300">STK Pin Prompt Displayed on {phoneNumber}</p>
                  <p className="text-slate-300 text-[11px]">"Do you want to pay KES 1,999 to IMPERIONX for {businessName}? Enter PIN:"</p>
                </div>
              )}

              {stkStatus === 'confirmed' && (
                <div className="py-3 p-3 bg-emerald-950/60 border border-emerald-500/80 rounded-lg text-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Payment Received: KES 1,999.00 Verified!</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    Receipt: <strong className="text-white font-mono">QKL7829X14</strong>. 24-Hour AI App Scaffolding automatically initiated in student pipeline.
                  </p>
                  <button
                    onClick={() => setStkStatus('idle')}
                    className="text-[11px] text-emerald-400 hover:text-emerald-300 underline"
                  >
                    Reset Demo
                  </button>
                </div>
              )}
            </div>

            {/* WhatsApp Integration Preview */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Business Order Routing Included</span>
              </span>
              <button
                onClick={() => openRegistrationWithPlan('builder')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Learn to Build This System</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Target Niches & Student Profit Calculator */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1220] border border-slate-800 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Target Local Niches & Student Agency Revenue Calculator
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Calculate how many businesses you can onboard each week using FutureTech's 24H AI templates.
            </p>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {IMPERIONX_AGENCY_BLUEPRINT.sampleUseCases.map((niche, idx) => (
              <button
                key={idx}
                onClick={() => setActiveNicheIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                  activeNicheIndex === idx
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#080d17] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {niche.businessType.split(',')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Niche Details Card */}
        <div className="p-4 rounded-xl bg-[#080d17] border border-slate-800/80 text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white text-sm">{activeNiche.businessType}</span>
            <span className="font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
              Avg Daily Volume: {activeNiche.dailyVolumeKes}
            </span>
          </div>
          <p className="text-slate-300">
            <strong className="text-slate-400">Client App Features Delivered: </strong>
            {activeNiche.appFeatures}
          </p>
        </div>

        {/* Dynamic Calculator Slider */}
        <div className="pt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">Client Apps Built Per Month:</span>
              <span className="text-emerald-400 font-mono text-base font-bold">{clientCount * 4} Clients</span>
            </div>
            <input
              type="range"
              min="2"
              max="25"
              value={clientCount}
              onChange={(e) => setClientCount(parseInt(e.target.value, 10))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>8 clients/mo</span>
              <span>32 clients/mo</span>
              <span>100 clients/mo</span>
            </div>
          </div>

          <div className="lg:col-span-5 p-4 rounded-xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-[#080d17] border border-emerald-800/50 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
              Estimated Monthly Student Agency Earning
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                KES {totalMonthlyPotentialKes.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                (~${Math.round(totalMonthlyPotentialKes * 0.0077).toLocaleString()} USD)
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Includes one-time setup fees (KES 1,999) + recurring monthly hosting retainers.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Posters Gallery Strip */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white">Campaign Creative Assets Included in Curriculum</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#080d17] p-2 space-y-2">
            <img
              src={ASSETS.imperionxMpesaChat}
              alt="ImperionX M-Pesa WhatsApp Integration"
              className="w-full aspect-[4/3] object-cover rounded-lg"
              referrerPolicy="no-referrer"
            />
            <div className="px-2 pb-1">
              <p className="text-xs font-bold text-white">WhatsApp Business & Lipa na M-Pesa Flow</p>
              <p className="text-[11px] text-slate-400">Verified conversion creative for social advertising.</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#080d17] p-2 space-y-2">
            <img
              src={ASSETS.imperionxSalonPromo}
              alt="Salon and Beauty App 1999 KES Promo"
              className="w-full aspect-[4/3] object-cover rounded-lg"
              referrerPolicy="no-referrer"
            />
            <div className="px-2 pb-1">
              <p className="text-xs font-bold text-white">Beauty & Salon Vertical Ad Asset</p>
              <p className="text-[11px] text-slate-400">Ready-to-use flyer template for salon owner prospecting.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
