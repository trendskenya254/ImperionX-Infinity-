import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ShieldCheck, Globe, Cpu, ArrowUpRight } from 'lucide-react';
import { NewsletterSignup } from '../common/NewsletterSignup';

export const Footer: React.FC = () => {
  const { navigate, openFacultyCourses } = useNavigation();

  return (
    <footer className="w-full bg-[#05070e] border-t border-slate-800/80 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Newsletter Lead Capture Integration */}
        <div className="mb-14">
          <NewsletterSignup variant="footer-banner" />
        </div>

        {/* Top footer row: Brand, Tagline & Value Prop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/70">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-black text-xs">
                FT
              </div>
              <span className="text-base font-bold text-white tracking-tight">FutureTech Business School</span>
            </div>
            
            <p className="text-sm font-semibold text-blue-400">
              Learn. Innovate. Build. Earn.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The international technology and entrepreneurship academy equipping innovators across Africa and the world to master artificial intelligence, engineer scalable software, and build monetizable ventures.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Global Hybrid Academy</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Stage 1 Production Base</span>
              </span>
            </div>
          </div>

          {/* Column 2: Core Academy Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Academy</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigate('home')} className="hover:text-white transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => navigate('faculties')} className="hover:text-white transition-colors">
                  15 Faculties Catalogue
                </button>
              </li>
              <li>
                <button onClick={() => navigate('courses')} className="hover:text-white transition-colors">
                  Courses & Capstones
                </button>
              </li>
              <li>
                <button onClick={() => navigate('systems')} className="hover:text-white transition-colors text-blue-400 font-medium">
                  AI Systems & Blueprints
                </button>
              </li>
              <li>
                <button onClick={() => navigate('ai-tools')} className="hover:text-white transition-colors">
                  AI Tools Directory
                </button>
              </li>
              <li>
                <button onClick={() => navigate('pricing')} className="hover:text-white transition-colors">
                  Six Membership Plans
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Faculties */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Key Faculties</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => openFacultyCourses('ai-agents')} className="hover:text-white transition-colors text-left">
                  AI Automation & Agents
                </button>
              </li>
              <li>
                <button onClick={() => openFacultyCourses('ai-core')} className="hover:text-white transition-colors text-left">
                  Artificial Intelligence
                </button>
              </li>
              <li>
                <button onClick={() => openFacultyCourses('web-dev')} className="hover:text-white transition-colors text-left">
                  Website Development
                </button>
              </li>
              <li>
                <button onClick={() => openFacultyCourses('fintech-payments')} className="hover:text-white transition-colors text-left">
                  Fintech & Digital Payments
                </button>
              </li>
              <li>
                <button onClick={() => openFacultyCourses('online-business')} className="hover:text-white transition-colors text-left">
                  Online Business & Ventures
                </button>
              </li>
              <li>
                <button onClick={() => openFacultyCourses('freelancing-careers')} className="hover:text-white transition-colors text-left">
                  Freelancing & Remote Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Connect</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigate('about')} className="hover:text-white transition-colors">
                  About Our Vision
                </button>
              </li>
              <li>
                <button onClick={() => navigate('contact')} className="hover:text-white transition-colors">
                  Admissions & Campus Hubs
                </button>
              </li>
              <li>
                <button onClick={() => navigate('register')} className="hover:text-white transition-colors flex items-center gap-1 text-blue-400 font-medium">
                  <span>Student Enrollment</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <span className="text-slate-400">Hubs: Nairobi · London · Singapore</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} FutureTech Business School. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span>Prepared for Supabase Stage 2</span>
            </span>
            <span>·</span>
            <button onClick={() => navigate('about')} className="hover:text-slate-300">
              Institutional Ethics
            </button>
            <span>·</span>
            <button onClick={() => navigate('contact')} className="hover:text-slate-300">
              Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
