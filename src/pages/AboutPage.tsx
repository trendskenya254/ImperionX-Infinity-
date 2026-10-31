import React from 'react';
import { ASSETS } from '../data/assets';
import { useNavigation } from '../context/NavigationContext';
import { ExpandableCaption } from '../components/common/ExpandableCaption';
import { Shield, Target, Users, Globe, ArrowRight, Award, Sparkles, Building2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useNavigation();

  const leadershipTeam = [
    {
      name: 'Dr. Evelyn Vance',
      role: 'Dean of Artificial Intelligence',
      credentials: 'PhD Cambridge · Former DeepMind Fellow',
      bio: 'Pioneered early neural network benchmarks and now leads FutureTech AI lab curriculum on agentic cognitive architectures.'
    },
    {
      name: 'Marcus Omondi',
      role: 'Head of Software Engineering',
      credentials: 'Principal Staff Architect · Open Source Lead',
      bio: 'Built distributed financial settlement engines handling billions of monthly volume across sub-Saharan Africa.'
    },
    {
      name: 'Amina K. Mwangi',
      role: 'Director of Entrepreneurship & Venture Studio',
      credentials: '2x Tech Founder with Exits · Venture Investor',
      bio: 'Specializes in lean validation, micro-SaaS economics, and taking bootstrapped products from idea to five-figure MRR.'
    },
    {
      name: 'Kwame Boateng',
      role: 'Head of Fintech & Digital Payments',
      credentials: 'Pan-African Payment Pioneer · Ex-Fintech VP',
      bio: 'Architected high-throughput integrations bridging mobile money rails with Western banking networks.'
    }
  ];

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>Our Foundation & Vision</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Reinventing Tech Education for the AI Century
          </h1>
          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-normal">
            FutureTech Business School was founded on a simple conviction: world-class technical education must be directly linked to global economic opportunity.
          </p>
          <div className="pt-2 flex items-center gap-3 text-blue-400 font-bold text-sm">
            <span>Learn. Innovate. Build. Earn.</span>
          </div>
        </div>

        {/* 2-Column Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-5 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              The Antidote to Passive Lectures
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Traditional higher education leaves ambitious young innovators with outdated theory, obsolete frameworks, and zero commercial traction. The modern technology economy values only one thing: verifiable proof of what you can build.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              At FutureTech, our students learn frontier tools on day one. By week four, they have written live code. By graduation, they have deployed a production microservice, an autonomous agent swarm, or a revenue-generating micro-SaaS with active users.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#0c1220] border border-slate-800">
                <p className="text-xl font-bold text-blue-400 tabular-nums">40+</p>
                <p className="text-slate-400 mt-0.5">Countries Represented</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0c1220] border border-slate-800">
                <p className="text-xl font-bold text-emerald-400 tabular-nums">100%</p>
                <p className="text-slate-400 mt-0.5">Practical Capstones</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#090d18] shadow-2xl aspect-[16/10] group">
              <img
                src={ASSETS.aiInnovationLab}
                alt="FutureTech AI Innovation and Robotics Laboratory"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

        {/* Faculty Leadership */}
        <div className="space-y-8 mb-20 text-left">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Distinguished Academic Leadership
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              Our deans and mentors are active practitioners who run engineering teams, publish foundational AI papers, and back high-growth startups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((leader, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0c1220] border border-slate-800 hover:border-slate-700 transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-base mb-3 shadow-md shadow-blue-900/30">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{leader.name}</h3>
                    <p className="text-xs text-blue-400 font-medium">{leader.role}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{leader.credentials}</p>
                  </div>
                </div>

                <div className="border-t border-slate-800/80 pt-3">
                  <ExpandableCaption
                    shortText={leader.bio}
                    maxChars={85}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Hubs */}
        <div className="p-8 rounded-2xl bg-[#0c1220] border border-slate-800 text-left space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-400" />
              <span>International Hybrid Campuses & Timezone Coverage</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              While our curriculum is available asynchronously 24/7, live mentorship and student code review clinics are synchronized across regional hubs to accommodate every global timezone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#080d17] border border-slate-800/80">
              <p className="text-xs font-bold text-white">Nairobi Headquarters</p>
              <p className="text-[11px] text-blue-400 mt-0.5">Silicon Savannah Hub · EAT (UTC+3)</p>
              <p className="text-xs text-slate-400 mt-2">Main African academic center and incubator facilities.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#080d17] border border-slate-800/80">
              <p className="text-xs font-bold text-white">London Hub</p>
              <p className="text-[11px] text-blue-400 mt-0.5">European Operations · GMT (UTC+0)</p>
              <p className="text-xs text-slate-400 mt-2">Focus on international high-ticket client contracting.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#080d17] border border-slate-800/80">
              <p className="text-xs font-bold text-white">Singapore Hub</p>
              <p className="text-[11px] text-blue-400 mt-0.5">Asia-Pacific Tech · SGT (UTC+8)</p>
              <p className="text-xs text-slate-400 mt-2">Robotics, hardware IoT and supply-chain technology.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#080d17] border border-slate-800/80">
              <p className="text-xs font-bold text-white">San Francisco Liaison</p>
              <p className="text-[11px] text-blue-400 mt-0.5">Venture Partnerships · PST (UTC-8)</p>
              <p className="text-xs text-slate-400 mt-2">Venture capital syndicates and AI model access.</p>
            </div>
          </div>
        </div>

        {/* Interlinking Navigation Ribbon */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-purple-950/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">Ready to explore FutureTech?</h3>
            <p className="text-xs text-slate-400">Discover all 15 faculties, test production AI systems, or unlock 50 Bob blueprints.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate('faculties')}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
            >
              Explore 15 Faculties
            </button>
            <button
              onClick={() => navigate('systems')}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold transition-colors"
            >
              Inspect AI Systems
            </button>
            <button
              onClick={() => navigate('kenya-radar')}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/30"
            >
              50 Bob Blueprints
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
