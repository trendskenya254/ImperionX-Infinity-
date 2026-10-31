import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { useAuth } from '../../context/AuthContext';
import { CurrencySelector } from '../common/CurrencySelector';
import { Menu, X, ArrowUpRight, User, LogOut } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPage, navigate } = useNavigation();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Faculties', page: 'faculties' as const },
    { label: 'Courses', page: 'courses' as const },
    { label: 'AI Systems', page: 'systems' as const },
    { label: 'Market Gaps (50 Bob)', page: 'kenya-radar' as const, badge: 'Hot' },
    { label: 'School Codex', page: 'codex' as const },
    { label: 'AI Tools', page: 'ai-tools' as const },
    { label: 'Pricing', page: 'pricing' as const },
    { label: 'About', page: 'about' as const }
  ];

  const handleNavClick = (page: typeof navLinks[number]['page']) => {
    navigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#070a12]/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark in display face */}
        <button
          onClick={() => navigate('home')}
          className="text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 text-left"
          aria-label="FutureTech Business School Home"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-900/30">
            FT
          </div>
          <span className="font-extrabold text-slate-50">FutureTech</span>
          <span className="text-blue-400 font-medium hidden sm:inline">Business School</span>
        </button>

        {/* Zone 2: 4–6 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                  isActive
                    ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:rounded-full'
                    : 'hover:text-white'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <span>{link.label}</span>
                  {'badge' in link && (link as { badge?: string }).badge && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {(link as { badge?: string }).badge}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Currency Selector */}
        <div className="flex items-center gap-3 shrink-0">
          <CurrencySelector />

          {user ? (
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => navigate('home')}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-200 bg-[#0e1626] border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
                title={`Signed in as ${user.fullName}`}
              >
                <User className="w-3.5 h-3.5 text-blue-400" />
                <span className="truncate max-w-[110px]">{user.fullName}</span>
              </button>
              <button
                onClick={logout}
                className="p-2 text-slate-400 hover:text-rose-400 bg-[#0e1626] border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
                title="Log Out"
                aria-label="Log Out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => navigate('login')}
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                Log In
              </button>
              <button
                onClick={() => navigate('register')}
                className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg shadow-sm shadow-blue-900/40 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 flex items-center gap-1.5"
              >
                <span>Join the Academy</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white bg-[#0e1626] border border-slate-800 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-200" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation tray */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#070a12]/95 backdrop-blur-xl px-4 py-4 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            {user ? (
              <div className="flex items-center justify-between px-3 py-2 bg-slate-900/60 rounded-lg">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-400" />
                  <div className="text-xs">
                    <p className="font-semibold text-white">{user.fullName}</p>
                    <p className="text-slate-400 text-[11px]">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="text-xs text-rose-400 hover:text-rose-300 px-2 py-1 rounded bg-rose-950/40 border border-rose-900/40"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    navigate('login');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2 text-xs font-semibold text-center text-slate-200 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    navigate('register');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2 text-xs font-bold text-center text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-900/50"
                >
                  Join Academy
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
