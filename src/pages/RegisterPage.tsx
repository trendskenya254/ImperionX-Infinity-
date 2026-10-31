import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useAuth } from '../context/AuthContext';
import { useCurrency } from '../context/CurrencyContext';
import { PRICING_PLANS } from '../data/pricingPlans';
import { FACULTIES } from '../data/faculties';
import { 
  UserPlus, ArrowRight, ShieldCheck, CheckCircle2, 
  Sparkles, CreditCard, Layers, Rocket, Check
} from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const { params, navigate } = useNavigation();
  const { register } = useAuth();
  const { formatPrice, currentCurrency } = useCurrency();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('Kenya');
  const [facultyId, setFacultyId] = useState('ai-agents');
  const [selectedPlanId, setSelectedPlanId] = useState(params.planId || 'builder');
  const [careerGoal, setCareerGoal] = useState('Build & Launch a Tech Startup');
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (params.planId) {
      setSelectedPlanId(params.planId);
    }
  }, [params.planId]);

  const selectedPlan = PRICING_PLANS.find((p) => p.id === selectedPlanId) || PRICING_PLANS[3];
  const selectedFaculty = FACULTIES.find((f) => f.id === facultyId) || FACULTIES[0];

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setIsSubmitting(true);
    await register({
      fullName,
      email,
      country,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
      primaryFacultyId: facultyId,
      planId: selectedPlanId
    });
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Brand header */}
        <div className="text-center space-y-3 mb-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <UserPlus className="w-3.5 h-3.5" />
            <span>Join FutureTech Academy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            International Student Enrollment
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Begin your journey in AI engineering, software architecture, and technology venture creation.
          </p>
        </div>

        {isSuccess ? (
          /* Enrollment Success State & Student Dashboard Preview */
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0c1220] border border-blue-500/40 shadow-2xl text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">
                Welcome to FutureTech Business School, {fullName}!
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                Your Stage 1 student profile has been created with the <strong className="text-blue-400">{selectedPlan.name} Tier</strong> under the <strong className="text-violet-400">{selectedFaculty.name}</strong> track.
              </p>
            </div>

            {/* Simulated Student Dashboard Quick Card */}
            <div className="max-w-xl mx-auto p-5 rounded-xl bg-[#080d17] border border-slate-800 text-left space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <span className="text-xs font-semibold text-slate-400">Student ID: FT-{Date.now().toString().slice(-6)}</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">Status: Active Cohort</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Primary Faculty:</span>
                  <span className="font-bold text-white">{selectedFaculty.name}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Membership:</span>
                  <span className="font-bold text-blue-400">{selectedPlan.name} ({formatPrice(selectedPlan.priceKshMonthly)})</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Career Goal:</span>
                  <span className="font-bold text-slate-200">{careerGoal}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Timezone Hub:</span>
                  <span className="font-bold text-slate-200">{country}</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-900/30 text-xs text-blue-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Next Step: Your first interactive lab and codebase starter kit are ready.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => navigate('courses', { facultyId: selectedFaculty.id })}
                className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-900/40"
              >
                Go to My Faculty Courses
              </button>
              <button
                onClick={() => navigate('home')}
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-slate-300 hover:text-white bg-[#080d17] border border-slate-800 rounded-xl transition-colors"
              >
                Return to Academy Home
              </button>
            </div>
          </div>
        ) : (
          /* Enrollment Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-8 bg-[#0c1220] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div className="p-3 rounded-xl bg-[#080d17] border border-blue-900/40 text-[11px] text-slate-300 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Stage 1 Enrollment: Profile models and subscription schemas are fully mapped for future Supabase & Payment Gateway integration.
                </span>
              </div>

              <form onSubmit={handleRegister} className="space-y-5">
                
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800/80 pb-2">
                    1. Personal Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Legal Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Victor Mutua"
                        className="w-full px-3.5 py-2.5 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="victor@example.com"
                        className="w-full px-3.5 py-2.5 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Country of Residence
                      </label>
                      <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Kenya, Nigeria, UK, USA, etc."
                        className="w-full px-3.5 py-2.5 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Primary Career Objective
                      </label>
                      <select
                        value={careerGoal}
                        onChange={(e) => setCareerGoal(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-xl text-xs text-white focus:outline-none"
                      >
                        <option value="Build & Launch a Tech Startup">Build & Launch a Tech Startup</option>
                        <option value="Land an International Remote Role">Land an International Remote Role</option>
                        <option value="High-Ticket Freelance Consulting">High-Ticket Freelance Consulting</option>
                        <option value="Automate My Existing Business with AI">Automate My Existing Business with AI</option>
                        <option value="Upskill in Frontier AI & Software">Upskill in Frontier AI & Software</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Faculty Selection */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800/80 pb-2">
                    2. Primary Faculty of Interest (15 Available)
                  </h3>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Choose Your Primary Faculty Focus
                    </label>
                    <select
                      value={facultyId}
                      onChange={(e) => setFacultyId(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-xl text-xs text-white focus:outline-none"
                    >
                      {FACULTIES.map((fac, idx) => (
                        <option key={fac.id} value={fac.id}>
                          {idx + 1}. {fac.name} ({fac.category})
                        </option>
                      ))}
                    </select>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {selectedFaculty.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Membership Plan Selection */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800/80 pb-2">
                    3. Select Membership Tier
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {PRICING_PLANS.map((plan) => {
                      const isSelected = selectedPlanId === plan.id;
                      return (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => setSelectedPlanId(plan.id)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            isSelected
                              ? 'bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-950/40'
                              : 'bg-[#080d17] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-xs text-white">{plan.name}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-blue-400" />}
                          </div>
                          <p className="text-xs font-mono font-semibold text-blue-300 tabular-nums">
                            {formatPrice(plan.priceKshMonthly)}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="pt-2">
                  <label className="flex items-start gap-2 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedTerms}
                      onChange={(e) => setAgreedTerms(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 text-blue-600 focus:ring-blue-500 bg-slate-900"
                    />
                    <span>
                      I agree to the FutureTech Academic Honor Code, portfolio IP terms, and understand that all projects require authentic hands-on execution.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !agreedTerms}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40 disabled:opacity-60"
                >
                  <Rocket className="w-4 h-4" />
                  <span>
                    {isSubmitting ? 'Creating Student Profile...' : `Confirm & Join Academy (${formatPrice(selectedPlan.priceKshMonthly)}/mo)`}
                  </span>
                </button>
              </form>

            </div>

            {/* Plan Summary Sidebar Column */}
            <div className="lg:col-span-4 sticky top-24 space-y-5">
              
              <div className="p-6 rounded-2xl bg-[#0c1220] border border-slate-800 space-y-4">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block">
                  Membership Order Summary
                </span>

                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-white">{selectedPlan.name} Tier</h4>
                  <p className="text-xs text-slate-400">{selectedPlan.tagline}</p>
                </div>

                <div className="py-3 border-y border-slate-800/80">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-300">Monthly Tuition:</span>
                    <span className="text-xl font-extrabold text-white font-mono tabular-nums">
                      {formatPrice(selectedPlan.priceKshMonthly)}
                    </span>
                  </div>
                  {currentCurrency !== 'KSH' && (
                    <p className="text-[10px] text-slate-400 text-right mt-0.5">
                      Baseline: KSh {selectedPlan.priceKshMonthly.toLocaleString()}
                    </p>
                  )}
                </div>

                <div className="space-y-2 text-xs">
                  <p className="text-[11px] font-semibold text-slate-300 uppercase">Included Privileges:</p>
                  <ul className="space-y-1.5 text-slate-400">
                    {selectedPlan.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={() => navigate('pricing')}
                    className="text-xs text-blue-400 hover:text-blue-300 underline font-medium"
                  >
                    Compare all 6 membership plans
                  </button>
                </div>
              </div>

              {/* 50 Bob Micro-Pass Callout */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/30 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">50 Bob Blueprint Pass</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-500 text-slate-950">KES 50</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Only need a single project roadmap and link vault? Unlock any Kenyan market gap blueprint with M-Pesa.
                </p>
                <button
                  type="button"
                  onClick={() => navigate('kenya-radar')}
                  className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                >
                  Explore 50 Bob Blueprints ➔
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#0c1220] border border-slate-800 text-xs text-slate-400 space-y-1">
                <p className="font-semibold text-white">Already have an active account?</p>
                <p>Sign in directly to access your registered cohort.</p>
                <button
                  onClick={() => navigate('login')}
                  className="text-blue-400 font-bold hover:text-blue-300 mt-1 block"
                >
                  Log In to Student Workspace →
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
