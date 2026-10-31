import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { FACULTIES } from '../../data/faculties';

export interface NewsletterSignupProps {
  variant?: 'footer-banner' | 'card' | 'compact';
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
  onSuccess?: (email: string, track: string) => void;
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  variant = 'footer-banner',
  title = 'Stay Ahead in Frontier AI & Technology Ventures',
  description = 'Subscribe to our weekly dispatch featuring breakdown of new AI agent architectures, student capstones, and exclusive scholarship notices.',
  buttonText = 'Subscribe to Intelligence Brief',
  className = '',
  onSuccess
}) => {
  const [email, setEmail] = useState('');
  const [preferredTrack, setPreferredTrack] = useState('All Technology Faculties');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email.trim()) {
      setErrorMsg('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate network submission
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Store lead locally for Stage 1 demonstration
    try {
      const existingLeads = JSON.parse(localStorage.getItem('futuretech_leads') || '[]');
      existingLeads.push({
        email,
        track: preferredTrack,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('futuretech_leads', JSON.stringify(existingLeads));
    } catch {
      // Ignore local storage error
    }

    setIsSubmitting(false);
    setIsSuccess(true);
    if (onSuccess) {
      onSuccess(email, preferredTrack);
    }
  };

  if (isSuccess) {
    return (
      <div
        className={`p-6 rounded-2xl bg-[#0b1220] border border-blue-500/40 text-left transition-all duration-300 animate-in fade-in zoom-in-95 ${className}`}
      >
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="space-y-1.5 flex-1">
            <h4 className="text-sm font-bold text-white">
              You're Subscribed to the FutureTech Dispatch
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              We sent a confirmation to <strong className="text-white font-mono">{email}</strong>. You will receive our next edition covering <span className="text-blue-400 font-medium">{preferredTrack}</span> alongside starter code templates.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setEmail('');
                }}
                className="text-[11px] text-blue-400 hover:text-blue-300 underline font-medium"
              >
                Subscribe another email address
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubscribe} className={`space-y-2 text-left ${className}`}>
        {errorMsg && (
          <p className="text-[11px] text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errorMsg}</span>
          </p>
        )}
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
            className="flex-1 px-3 py-2 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg transition-colors shrink-0 disabled:opacity-50"
          >
            {isSubmitting ? '...' : 'Join'}
          </button>
        </div>
      </form>
    );
  }

  // Default 'footer-banner' or 'card' variant
  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#0c1322] via-[#0e172a] to-[#0c1322] border border-slate-800 text-left transition-colors ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Column: Heading & Value Proposition */}
        <div className="lg:col-span-6 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>FutureTech Intelligence Dispatch</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight [text-wrap:balance]">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        {/* Right Column: Interactive Subscription Form */}
        <div className="lg:col-span-6">
          <form onSubmit={handleSubscribe} className="space-y-3">
            {errorMsg && (
              <div className="p-2.5 rounded-lg bg-rose-950/40 border border-rose-900/50 text-xs text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@futuretech.africa"
                  className="w-full pl-10 pr-3.5 py-3 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Track Selector */}
              <select
                value={preferredTrack}
                onChange={(e) => setPreferredTrack(e.target.value)}
                className="sm:max-w-[190px] px-3 py-3 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-xl text-xs text-slate-300 focus:outline-none transition-colors"
                aria-label="Preferred Faculty Track"
              >
                <option value="All Technology Faculties">All 15 Faculties</option>
                <option value="Artificial Intelligence">AI & Deep Learning</option>
                <option value="AI Automation and Agents">AI Agents & Swarms</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Fintech and Digital Payments">Fintech & Payments</option>
                <option value="Online Business and Entrepreneurship">Online Business & SaaS</option>
                <option value="Freelancing and Digital Careers">Remote Careers</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 whitespace-nowrap shrink-0"
              >
                <span>{isSubmitting ? 'Subscribing...' : buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[11px] text-slate-400">
                Weekly digest · No spam · One-click unsubscribe
              </span>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};
