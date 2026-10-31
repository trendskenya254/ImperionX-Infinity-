import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useAuth } from '../context/AuthContext';
import { LogIn, ArrowRight, ShieldCheck, Sparkles, KeyRound, AlertCircle } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { navigate } = useNavigation();
  const { login, quickFillDemoUser, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please enter both your email address and password.');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);
    await login(email);
    setIsSubmitting(false);
    navigate('home');
  };

  const handleDemoSignIn = () => {
    quickFillDemoUser();
    navigate('home');
  };

  return (
    <div className="w-full py-16 lg:py-24 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-6 text-left">
        
        {/* Brand Lockup */}
        <div className="text-center space-y-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-black text-sm mx-auto shadow-lg shadow-blue-900/40">
            FT
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Sign In to FutureTech Academy
          </h1>
          <p className="text-xs text-slate-400">
            Enter your credentials to access your student workspace, courses, and AI sandbox.
          </p>
        </div>

        {/* Stage 1 Architecture Notice */}
        <div className="p-3 rounded-xl bg-[#0e1626] border border-blue-900/40 text-[11px] text-slate-300 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white block">Stage 1 Frontend Architecture</span>
            <span className="text-slate-400">
              Supabase Auth schema & TypeScript contracts are prepared. Use the Quick-Fill Demo or any mock credentials.
            </span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-[#0c1220] border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-5 shadow-2xl">
          
          {errorMessage && (
            <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-900/50 text-xs text-rose-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Student Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@futuretech.africa"
                className="w-full px-3.5 py-2.5 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-slate-300">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => alert('Password reset flow will connect to Supabase Auth magic link in Stage 2.')}
                  className="text-[11px] text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2.5 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40 disabled:opacity-60"
            >
              <LogIn className="w-4 h-4" />
              <span>{isSubmitting ? 'Authenticating...' : 'Sign In to Portal'}</span>
            </button>
          </form>

          {/* Quick Demo Credentials Prefill Button */}
          <div className="pt-2 border-t border-slate-800/80">
            <button
              type="button"
              onClick={handleDemoSignIn}
              className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-[#080d17] hover:bg-slate-800 border border-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <KeyRound className="w-3.5 h-3.5 text-amber-400" />
              <span>1-Click Test Sign-In (Demo Innovator)</span>
            </button>
          </div>

          {/* SSO Mock Buttons for Supabase readiness */}
          <div className="space-y-2 pt-2">
            <p className="text-center text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
              Ready for Supabase OAuth
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleDemoSignIn()}
                className="py-2 px-3 text-xs text-slate-300 bg-[#080d17] border border-slate-800 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Google</span>
              </button>
              <button
                type="button"
                onClick={() => handleDemoSignIn()}
                className="py-2 px-3 text-xs text-slate-300 bg-[#080d17] border border-slate-800 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>GitHub</span>
              </button>
            </div>
          </div>

        </div>

        {/* 50 Bob Blueprints & Quick Links */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/20 text-xs flex items-center justify-between gap-3">
          <div>
            <div className="font-bold text-white">50 Bob Blueprint Pass</div>
            <div className="text-[11px] text-slate-400">Unlock project PDFs with Lipa na M-Pesa</div>
          </div>
          <button
            onClick={() => navigate('kenya-radar')}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shrink-0"
          >
            50 Bob Pass ➔
          </button>
        </div>

        {/* Switch to Register */}
        <div className="text-center text-xs text-slate-400">
          <span>New to FutureTech? </span>
          <button
            onClick={() => navigate('register')}
            className="text-blue-400 hover:text-blue-300 font-bold ml-1 inline-flex items-center gap-1"
          >
            <span>Apply for Academy Membership</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
};
