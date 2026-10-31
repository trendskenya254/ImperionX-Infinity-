import React from 'react';
import { ASSETS } from '../../data/assets';
import { Zap, Target, Users, Shield, Cpu, Code2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Monetization-First Pedagogy',
      description: 'We do not award grades for multiple-choice quizzes. You build actual production software, SaaS MVPs, and automated agent swarms that solve enterprise problems.'
    },
    {
      icon: Users,
      title: 'Silicon Valley & Pan-African Mentors',
      description: 'Learn directly from principal distributed systems architects, generative AI filmmakers, and venture-backed founders with proven real-world exits.'
    },
    {
      icon: Code2,
      title: 'Real Production Codebases',
      description: 'Every project is built in modern TypeScript, Next.js, Python, and Supabase with automated test coverage, strict type safety, and continuous edge deployment.'
    },
    {
      icon: Shield,
      title: 'Cryptographic Proof-of-Skill',
      description: 'Graduates receive tamper-proof digital certificates linked directly to public GitHub repositories and verified client reviews.'
    }
  ];

  return (
    <section className="py-20 border-b border-slate-800/80 bg-[#060911]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image and Quote */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#090d18] shadow-2xl shadow-blue-950/40 aspect-[4/3] group">
              <img
                src={ASSETS.globalEntrepreneurs}
                alt="International technology students and entrepreneurs collaborating"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#080d17]/90 backdrop-blur-md border border-slate-800/80 text-left">
                <p className="text-xs font-semibold text-white">
                  "FutureTech taught me how to take code and turn it into real international client revenue."
                </p>
                <p className="text-[11px] text-blue-400 mt-1">
                  Amara Diallo · Full-Stack Consultant (Nairobi Hub)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Why Choose Content */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>Distinctive Advantage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
                Why FutureTech Business School?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Traditional education moves at the speed of bureaucracy. Frontier technology moves at the speed of open source. We bridge the gap between education and global wealth creation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0c1220] border border-slate-800/80 hover:border-slate-700 space-y-2 text-left"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
