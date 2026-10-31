import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ASSETS } from '../../data/assets';
import { ExpandableCaption } from '../common/ExpandableCaption';
import { Hammer, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProjectsShowcase: React.FC = () => {
  const { navigate } = useNavigation();

  const showcaseProjects = [
    {
      title: 'Autonomous Financial Due Diligence Multi-Agent Swarm',
      faculty: 'AI Automation & Agents',
      stack: ['LangGraph', 'CrewAI', 'Claude 3.7', 'FastAPI'],
      commercialOutcome: 'Commercial consulting rate: $4,500 – $8,000 per deployment',
      studentStory: 'Built by 3 students during the 8-week cohort, currently deployed for an international private equity syndicate.'
    },
    {
      title: 'Cross-Border M-Pesa & Stripe Escrow Settlement Gateway',
      faculty: 'Fintech & Digital Payments',
      stack: ['Daraja 3.0 API', 'Stripe Connect', 'PostgreSQL Ledger', 'Express'],
      commercialOutcome: 'Processed $140k+ in cross-border trade transactions in 90 days',
      studentStory: 'Developed by an engineering duo in Nairobi, enabling East African agricultural exporters to receive US Dollar client payments.'
    },
    {
      title: 'B2B Multi-Tenant Micro-SaaS for Client Proposals',
      faculty: 'Website Development & Online Business',
      stack: ['Next.js 15', 'TypeScript', 'Tailwind', 'Supabase RLS', 'Stripe'],
      commercialOutcome: 'Achieved $2,800 monthly recurring revenue (MRR) within 60 days of launch',
      studentStory: 'Built from scratch and launched on Product Hunt with immediate organic conversions.'
    }
  ];

  return (
    <section className="py-20 border-b border-slate-800/80 bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-14 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            <Hammer className="w-3.5 h-3.5" />
            <span>Practical Project Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Learn. Innovate. Build. Earn.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We reject passive lectures. At FutureTech, your graduation ticket is not an exam grade—it is a live, functional, revenue-generating software asset or enterprise consulting system.
          </p>
        </div>

        {/* 2-Column Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#090d18] shadow-2xl shadow-blue-950/40 aspect-[4/3] group">
              <img
                src={ASSETS.practicalTechShowcase}
                alt="Practical Tech Solutions: Autonomous AI Agents, Fintech and Dashboards"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#080d17]/90 backdrop-blur-md border border-slate-800/80 text-left">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Verifiable Proof of Work
                </span>
                <p className="text-xs text-slate-200">
                  All capstones include open source code repositories, automated CI test suites, and live deployment links.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Project Cards */}
          <div className="lg:col-span-7 space-y-4">
            {showcaseProjects.map((proj, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0c1220] border border-slate-800 hover:border-slate-700 transition-all text-left space-y-2.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-blue-400">{proj.faculty}</span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded-md">
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>{proj.commercialOutcome}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight">
                  {proj.title}
                </h3>

                <ExpandableCaption
                  shortText={proj.studentStory}
                  maxChars={85}
                />

                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/60">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] text-slate-400 mr-1">Stack:</span>
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] text-slate-300 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <button
                      onClick={() => navigate('systems')}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold"
                    >
                      System View ➔
                    </button>
                    <span className="text-slate-600">·</span>
                    <button
                      onClick={() => navigate('kenya-radar')}
                      className="text-emerald-400 hover:text-emerald-300 font-semibold"
                    >
                      50 Bob Blueprint ➔
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('courses')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md shadow-blue-900/30 transition-all"
          >
            <span>Explore All Capstone Modules in Courses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
