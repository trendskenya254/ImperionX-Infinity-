import React from 'react';
import { PricingPlan } from '../../types';
import { useCurrency } from '../../context/CurrencyContext';
import { useNavigation } from '../../context/NavigationContext';
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface PricingCardProps {
  plan: PricingPlan;
  billingCycle: 'monthly' | 'annual';
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, billingCycle }) => {
  const { formatPrice, currentCurrency, exchangeConfig } = useCurrency();
  const { openRegistrationWithPlan } = useNavigation();

  // Annual discount: 2 months complimentary (10x monthly price for 12 months)
  const monthlyKsh = plan.priceKshMonthly;
  const effectiveMonthlyKsh = billingCycle === 'annual' ? Math.round((monthlyKsh * 10) / 12) : monthlyKsh;

  const isBuilder = plan.popular;

  return (
    <div
      className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
        isBuilder
          ? 'bg-gradient-to-b from-[#131d38] to-[#0c1220] border-2 border-blue-500 shadow-2xl shadow-blue-950/60 p-7 lg:-translate-y-2'
          : 'bg-[#0c1220] border border-slate-800 hover:border-slate-700 p-6'
      }`}
    >
      {/* Featured Ribbon / Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
              isBuilder
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-900/50'
                : 'bg-slate-800 text-slate-300 border border-slate-700'
            }`}
          >
            {plan.badge}
          </span>
        </div>
      )}

      <div>
        {/* Tier Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
          <p className="text-xs text-slate-400 mt-1 min-h-[32px]">{plan.tagline}</p>
        </div>

        {/* Price display with transparent currency conversion */}
        <div className="py-4 border-y border-slate-800/80 mb-5">
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight tabular-nums">
              {formatPrice(effectiveMonthlyKsh)}
            </span>
            <span className="text-xs text-slate-400">/ month</span>
          </div>

          {/* Transparent conversion details */}
          <div className="mt-1 text-[11px] text-slate-400">
            {currentCurrency !== 'KSH' ? (
              <p>
                Baseline: KSh {plan.priceKshMonthly.toLocaleString()} (via {exchangeConfig.rates[currentCurrency]} rate)
              </p>
            ) : (
              <p>Standard Kenyan Shillings billing</p>
            )}
            {billingCycle === 'annual' && (
              <p className="text-emerald-400 font-medium mt-0.5">Billed annually (Includes 2 months free)</p>
            )}
          </div>
        </div>

        {/* Ideal for summary */}
        <div className="mb-5 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800/60">
          <span className="text-slate-400 font-semibold block text-[10px] uppercase tracking-wider mb-1">
            Target Profile
          </span>
          {plan.idealFor}
        </div>

        {/* Feature List */}
        <div className="space-y-2.5 mb-6 text-xs">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Included In Tier</p>
          <ul className="space-y-2">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-slate-300">
                <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Meaningful Action Button */}
      <button
        onClick={() => openRegistrationWithPlan(plan.id)}
        className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
          isBuilder
            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-900/40 hover:scale-[1.02]'
            : 'bg-slate-900 hover:bg-blue-600/30 text-white border border-slate-700 hover:border-blue-500/50'
        }`}
      >
        <span>Select {plan.name} Plan</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
