import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/pricingPlans';
import { PricingCard } from '../components/pricing/PricingCard';
import { PlanComparisonTable } from '../components/pricing/PlanComparisonTable';
import { useCurrency } from '../context/CurrencyContext';
import { CreditCard, ShieldCheck, HelpCircle, RefreshCw, Settings, Info, CheckCircle2, ChevronRight } from 'lucide-react';
import { CURRENCY_METADATA } from '../data/currencies';
import { CurrencyCode } from '../types';

export const PricingPage: React.FC = () => {
  const { currentCurrency, setCurrency, exchangeConfig, updateRate, availableCurrencies } = useCurrency();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [customUsdRate, setCustomUsdRate] = useState<string>(exchangeConfig.rates.USD.toString());

  const handleSaveRate = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseFloat(customUsdRate);
    if (!isNaN(parsed) && parsed > 0) {
      updateRate('USD', parsed);
      setShowConfigModal(false);
    }
  };

  const meta = CURRENCY_METADATA[currentCurrency];

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Universal Accessible Memberships</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Simple, Transparent International Pricing
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Choose your learning tier. All memberships include direct access to capstone deliverables, GitHub repositories, and verifiable certificates.
          </p>

          {/* Billing Interval Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <div className="p-1 bg-[#0c1220] border border-slate-800 rounded-xl inline-flex items-center gap-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  billingCycle === 'monthly'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly Membership
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  billingCycle === 'annual'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Annual Pass</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold">
                  2 Months Free
                </span>
              </button>
            </div>
          </div>

          {/* Configurable Exchange Rate Strip */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 bg-[#0c1220] px-3 py-1.5 rounded-lg border border-slate-800">
              <span>Display Currency:</span>
              <strong className="text-white">{meta.flag} {currentCurrency} ({meta.name})</strong>
            </div>

            <div className="flex items-center gap-1.5 bg-[#0c1220] px-3 py-1.5 rounded-lg border border-slate-800">
              <Info className="w-3.5 h-3.5 text-blue-400" />
              <span>Base Rate: 1 KSh = {exchangeConfig.rates[currentCurrency]} {currentCurrency}</span>
            </div>

            <button
              onClick={() => setShowConfigModal(true)}
              className="text-xs text-blue-400 hover:text-blue-300 underline font-medium flex items-center gap-1"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Exchange Rate Source</span>
            </button>
          </div>
        </div>

        {/* 50 Bob Blueprint Highlight Banner */}
        <div className="mb-8 p-5 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-blue-950/50 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-black text-sm shrink-0">
              50/-
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>50 Bob Blueprint Micro-Passes Available</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-slate-950">M-Pesa STK</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Don&apos;t want a monthly subscription yet? Unlock any single Kenyan market gap blueprint PDF, clickable link vault, and video tutorial on demand for just KSh 50.
              </p>
            </div>
          </div>

          <button
            onClick={() => window.location.hash = '#/kenya-radar'}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs whitespace-nowrap transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
          >
            <span>Browse 50 Bob Blueprints</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} billingCycle={billingCycle} />
          ))}
        </div>

        {/* Comprehensive Matrix Table */}
        <div className="space-y-6 mb-20 text-left">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Detailed Feature & Benefit Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Compare faculties access, live mentorship hours, code review tiers, and career outcomes across all six plans.
            </p>
          </div>

          <PlanComparisonTable />
        </div>

        {/* International Payment Trust Marks */}
        <div className="p-8 rounded-2xl bg-[#0c1220] border border-slate-800 text-left space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>International Payment Flexibility & Security</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
            We support learners across 40+ countries. In addition to local Kenyan payment methods (M-Pesa STK push and Airtel Money), we support global debit/credit cards (Visa, Mastercard, Amex) and cross-border bank settlement. In Stage 2, automated recurring billing hooks via Stripe Connect and M-Pesa Daraja 3.0 will be activated.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
            <span className="bg-slate-900 px-3 py-1 rounded-md border border-slate-800 text-slate-300">
              🇰🇪 M-Pesa STK Push
            </span>
            <span className="bg-slate-900 px-3 py-1 rounded-md border border-slate-800 text-slate-300">
              🌍 Global Visa & Mastercard
            </span>
            <span className="bg-slate-900 px-3 py-1 rounded-md border border-slate-800 text-slate-300">
              ⚡ Stripe & Wise Ready
            </span>
            <span className="bg-slate-900 px-3 py-1 rounded-md border border-slate-800 text-slate-300">
              🔒 256-Bit SSL Encryption
            </span>
          </div>
        </div>

        {/* Config Modal for Exchange Rate */}
        {showConfigModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-150">
            <div className="bg-[#0c1220] border border-slate-800 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl text-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Settings className="w-4 h-4 text-blue-400" />
                  <span>Configurable Exchange Rate Source</span>
                </h3>
                <button
                  onClick={() => setShowConfigModal(false)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="text-xs text-slate-300 space-y-2">
                <p>
                  As mandated by FutureTech international compliance:
                  <strong className="text-white block mt-1">
                    "Show USD equivalents only when based on a configurable exchange-rate source. Do not hardcode misleading currency conversions."
                  </strong>
                </p>
                <div className="p-3 rounded-xl bg-[#080d17] border border-slate-800/80 space-y-1 text-[11px] text-slate-400">
                  <p><strong className="text-slate-300">Active Source:</strong> {exchangeConfig.source}</p>
                  <p><strong className="text-slate-300">Last Verified:</strong> {exchangeConfig.lastUpdated}</p>
                  <p><strong className="text-slate-300">Current USD Baseline:</strong> 1 KSh = {exchangeConfig.rates.USD} USD (~130 KSh/USD)</p>
                </div>
              </div>

              <form onSubmit={handleSaveRate} className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Adjust USD Conversion Multiplier (1 KSh = X USD)
                  </label>
                  <input
                    type="number"
                    step="0.0001"
                    min="0.0001"
                    max="1"
                    value={customUsdRate}
                    onChange={(e) => setCustomUsdRate(e.target.value)}
                    className="w-full px-3 py-2 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-lg text-xs text-white focus:outline-none"
                  />
                  <span className="text-[10px] text-slate-400 block mt-1">
                    E.g. 0.0077 represents approx. 130 KSh per 1 US Dollar.
                  </span>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowConfigModal(false)}
                    className="px-3 py-1.5 text-xs text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                  >
                    Update Reference Rate
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
