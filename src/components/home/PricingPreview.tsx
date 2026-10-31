import React, { useState } from 'react';
import { PRICING_PLANS } from '../../data/pricingPlans';
import { PricingCard } from '../pricing/PricingCard';
import { useNavigation } from '../../context/NavigationContext';
import { useCurrency } from '../../context/CurrencyContext';
import { CreditCard, ArrowRight, ShieldCheck, Info } from 'lucide-react';

export const PricingPreview: React.FC = () => {
  const { navigate } = useNavigation();
  const { currentCurrency, exchangeConfig } = useCurrency();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Accessible International Membership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Six Transparent Plans Built for Every Ambition
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            World-class technology and entrepreneurship education from KSh 200/mo. Transparent exchange rates, no hidden fees, cancel anytime.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <div className="p-1 bg-[#0c1220] border border-slate-800 rounded-xl inline-flex items-center gap-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  billingCycle === 'monthly'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  billingCycle === 'annual'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Annual Billing</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold">
                  Save 2 Mo
                </span>
              </button>
            </div>
          </div>

          {/* Configurable Rate Note */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-2">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>
              All plans billed in KSh or equivalent in {currentCurrency} via transparent exchange rate baseline ({exchangeConfig.rates[currentCurrency]} rate).
            </span>
          </div>
        </div>

        {/* 6 Plans Grid: responsive 1 -> 2 -> 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} billingCycle={billingCycle} />
          ))}
        </div>

        {/* Bottom Comparison CTA */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('pricing')}
            className="px-5 py-2.5 text-xs font-bold text-slate-200 hover:text-white bg-[#0e1626] hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors flex items-center gap-2"
          >
            <span>View Full Feature Comparison Matrix</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
