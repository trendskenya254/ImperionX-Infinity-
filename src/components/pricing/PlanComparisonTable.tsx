import React from 'react';
import { PRICING_PLANS } from '../../data/pricingPlans';
import { useCurrency } from '../../context/CurrencyContext';
import { useNavigation } from '../../context/NavigationContext';
import { Check, Minus } from 'lucide-react';

export const PlanComparisonTable: React.FC = () => {
  const { formatPrice } = useCurrency();
  const { openRegistrationWithPlan } = useNavigation();

  const matrixRows = [
    {
      feature: 'Faculties Access',
      values: ['1 Faculty', '2 Faculties', '3 Faculties', '5 Faculties', 'All 15 Faculties', 'All 15 Faculties VIP']
    },
    {
      feature: 'Practical Capstone Deliverables',
      values: [true, true, true, true, true, true]
    },
    {
      feature: 'Verified Certificate of Mastery',
      values: [false, true, true, true, true, true]
    },
    {
      feature: 'AI Sandbox & Model Credits',
      values: ['Basic Prompts', 'Standard', 'Expanded Vault', 'Priority Compute', 'Unlimited Playground', 'Dedicated Cluster']
    },
    {
      feature: 'Weekly Live Group Mentorship',
      values: [false, false, true, true, true, true]
    },
    {
      feature: 'Private 1-on-1 Sprint Advisory',
      values: [false, false, false, false, true, true]
    },
    {
      feature: 'Direct WhatsApp Faculty Channel',
      values: [false, false, false, false, true, true]
    },
    {
      feature: 'Investor Syndicate & Venture Pitch Review',
      values: [false, false, false, false, false, true]
    }
  ];

  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-slate-800 bg-[#0c1220]/80">
      <table className="w-full text-left text-xs text-slate-300 min-w-[760px]">
        <thead>
          <tr className="border-b border-slate-800 bg-[#080d17]">
            <th className="p-4 font-semibold text-slate-400">Plan Feature Comparison</th>
            {PRICING_PLANS.map((plan) => (
              <th key={plan.id} className="p-4 text-center">
                <span className="block font-bold text-white text-sm">{plan.name}</span>
                <span className="block text-blue-400 font-mono mt-0.5 tabular-nums">
                  {formatPrice(plan.priceKshMonthly)}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/60">
          {matrixRows.map((row, idx) => (
            <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
              <td className="p-4 font-medium text-slate-200">{row.feature}</td>
              {row.values.map((val, pIdx) => (
                <td key={pIdx} className="p-4 text-center">
                  {typeof val === 'boolean' ? (
                    val ? (
                      <Check className="w-4 h-4 text-blue-400 mx-auto" />
                    ) : (
                      <Minus className="w-4 h-4 text-slate-600 mx-auto" />
                    )
                  ) : (
                    <span className="font-medium text-slate-300">{val}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
          <tr className="bg-[#080d17]/50">
            <td className="p-4 font-semibold text-slate-400">Enrollment Action</td>
            {PRICING_PLANS.map((plan) => (
              <td key={plan.id} className="p-4 text-center">
                <button
                  onClick={() => openRegistrationWithPlan(plan.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  }`}
                >
                  Choose {plan.name}
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
