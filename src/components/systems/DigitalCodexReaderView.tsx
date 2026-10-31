import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { 
  BookOpen, Play, CheckCircle2, Award, ChevronRight, ChevronLeft, 
  ExternalLink, Download, Sparkles, Video, HelpCircle, Layers, ShieldCheck, Zap
} from 'lucide-react';

interface CodexChapter {
  id: string;
  volumeNumber: number;
  title: string;
  subtitle: string;
  readTimeMinutes: number;
  audiovisualTutorial: {
    videoTitle: string;
    duration: string;
    instructor: string;
    role: string;
    videoUrl: string;
    keyTakeaways: string[];
  };
  sections: {
    heading: string;
    content: string;
    graphicTip?: string;
    checklist?: string[];
  }[];
  quizQuestions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

const CODEX_CHAPTERS: CodexChapter[] = [
  {
    id: 'ch-1',
    volumeNumber: 1,
    title: 'The Zero-Capital Founder Blueprint',
    subtitle: 'How someone who has never written a line of code can launch a live paid web business in 24 hours.',
    readTimeMinutes: 12,
    audiovisualTutorial: {
      videoTitle: 'Zero-to-One: Launching Your First M-Pesa Web App with Zero Prior Experience',
      duration: '32 min',
      instructor: 'Marcus Omondi',
      role: 'Lead Architect, FutureTech Nairobi',
      videoUrl: 'https://youtube.com',
      keyTakeaways: [
        'How modern AI eliminates the need to spend 4 years learning low-level syntax',
        'Identifying local neighborhood businesses who still record transactions in paper books',
        'Why charging KES 1,999 setup creates an irresistible no-brainer offer'
      ]
    },
    sections: [
      {
        heading: '1. The Paradigm Shift: From Syntax Memory to System Orchestration',
        content: 'For decades, building software required memorizing hundreds of language commands. In 2026, technology is visual and declarative. You describe the exact business outcome you want, and AI engines (such as v0, Cursor, and Lovable) assemble the underlying code. Your role is no longer a code typist—you are an orchestrator who knows what local businesses need.',
        graphicTip: 'Orchestrator Mindset: Client Pain Point ➔ English Description ➔ AI Code Scaffolding ➔ M-Pesa STK Integration ➔ KES 1,999 in 24 Hours.'
      },
      {
        heading: '2. Stacking Free Tiers: Never Pay SaaS Subscriptions Early',
        content: 'The biggest mistake beginner founders make is subscribing to 5 different $20/month SaaS tools before earning their first shilling. FutureTech teaches the Zero-Overhead Stack: Free Vercel Edge Hosting, Free 500MB Supabase Database, Free Safaricom Daraja Sandbox, and Free WhatsApp Business communication.',
        checklist: [
          'Create a free GitHub account for source code hosting',
          'Deploy free edge hosting on Vercel or Netlify',
          'Provision a free PostgreSQL database on Supabase',
          'Register developer keys on Safaricom Daraja portal'
        ]
      },
      {
        heading: '3. The 24-Hour Pitch: Walking into Local Neighborhood Businesses',
        content: 'Do not pitch abstract technology. Walk into a local salon, pharmacy, or water refill station with a live demo on your smartphone that already features their business name. When the owner sees their own shop name and taps "Lipa na M-Pesa", the sale is made.'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the primary role of a modern tech entrepreneur in 2026?',
        options: [
          'Memorizing low-level programming syntax for years',
          'Orchestrating AI tools and solving real local business problems',
          'Paying expensive monthly subscriptions before having clients',
          'Writing paper notebooks for local merchants'
        ],
        correctIndex: 1,
        explanation: 'Correct! Modern founders orchestrate free AI tools and solve local cash-flow bottlenecks.'
      },
      {
        question: 'What is the recommended software subscription cost for starting your first agency?',
        options: ['KES 10,000 / month', '$50 / month', '$0 / KES 0 (Stacking free tiers)', 'KES 5,000 per tool'],
        correctIndex: 2,
        explanation: 'FutureTech teaches the $0 overhead approach using enterprise-grade free tiers.'
      }
    ]
  },
  {
    id: 'ch-2',
    volumeNumber: 2,
    title: 'The Visual Combinator: Building Systems Like Lego Blocks',
    subtitle: 'Connecting Frontend UI, Cloud Database, and Instant Mobile Payments.',
    readTimeMinutes: 15,
    audiovisualTutorial: {
      videoTitle: 'The Visual Combinator Masterclass: Wiring v0 + Supabase + M-Pesa in Under 60 Minutes',
      duration: '45 min',
      instructor: 'Kwame Boateng',
      role: 'Fintech Systems Dean',
      videoUrl: 'https://youtube.com',
      keyTakeaways: [
        'Live prompt engineering for high-converting business layouts',
        'Creating Supabase tables with Row Level Security',
        'Testing M-Pesa STK push popups on real Android/iOS smartphones'
      ]
    },
    sections: [
      {
        heading: '1. The Golden Rule of Tool Combination',
        content: 'No single tool does everything. One tool builds the visual layout, another remembers the appointments, and a third collects the money. When you connect them, you create an invincible commercial asset.',
        graphicTip: '[v0 UI Generator] + [Supabase DB] + [Daraja M-Pesa API] = Production Business App'
      },
      {
        heading: '2. The 3-Hour Build Schedule',
        content: 'Hour 1: Generate and polish the mobile user interface. Hour 2: Configure database tables and inventory. Hour 3: Test M-Pesa STK push and push live to custom domain.',
        checklist: [
          'Hour 1: Prompt AI for client catalogue & pricing grid',
          'Hour 2: Add database records for appointments and products',
          'Hour 3: Connect Safaricom Daraja STK Push credentials',
          'Launch: Hand over QR code and live link to merchant'
        ]
      }
    ],
    quizQuestions: [
      {
        question: 'Why do we combine separate free tools instead of buying an all-in-one platform?',
        options: [
          'Because all-in-one platforms charge heavy recurring monthly fees and restrict customization',
          'Because combining tools takes 6 months of coding',
          'Because single tools are illegal in Kenya',
          'Because databases cannot store customer phone numbers'
        ],
        correctIndex: 0,
        explanation: 'Combining best-in-class free tiers avoids recurring SaaS taxes and gives you full ownership.'
      }
    ]
  },
  {
    id: 'ch-3',
    volumeNumber: 3,
    title: 'African Mobile Money & Lipa na M-Pesa Architecture',
    subtitle: 'How cash actually moves: Paybills, Till numbers, STK Pushes, and Instant Webhooks.',
    readTimeMinutes: 14,
    audiovisualTutorial: {
      videoTitle: 'Demystifying Safaricom Daraja 3.0: STK Push, Callback URLs & Accounting Webhooks',
      duration: '38 min',
      instructor: 'Sofia Mendez',
      role: 'Mobile Solutions Lead',
      videoUrl: 'https://youtube.com',
      keyTakeaways: [
        'How Daraja triggers the PIN modal on customer smartphones',
        'Validating payments on callback URLs without race conditions',
        'Building instant WhatsApp / SMS receipt dispatchers'
      ]
    },
    sections: [
      {
        heading: '1. What is an STK Push (Sim Tool Kit)?',
        content: 'An STK Push forces the Safaricom M-Pesa PIN prompt to appear directly on the customer’s phone screen. The customer does not have to remember a 7-digit Paybill or account number. They tap "Pay", the phone prompts for their 4-digit PIN, and within 3 seconds your database receives a cryptographic confirmation.',
        graphicTip: 'Customer Phone ➔ STK Modal ➔ Enter PIN ➔ Safaricom Callback ➔ Your Database ➔ Merchant Alert'
      },
      {
        heading: '2. The ImperionX Agency Pricing Model',
        content: 'Charge KES 1,999 setup + KES 500/month hosting retainer. With just 20 neighborhood businesses on your books, you generate KES 10,000 in passive monthly retainers plus KES 39,980 in initial setup revenue.'
      }
    ],
    quizQuestions: [
      {
        question: 'What happens when an STK Push is initiated?',
        options: [
          'The customer has to open their bank branch in person',
          'The M-Pesa PIN prompt automatically appears on their smartphone screen',
          'An email invoice is sent within 48 hours',
          'The transaction is delayed until end of business day'
        ],
        correctIndex: 1,
        explanation: 'STK push delivers the PIN prompt directly to the phone screen for instant conversion.'
      }
    ]
  }
];

export const DigitalCodexReaderView: React.FC = () => {
  const { navigate } = useNavigation();
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<string, number>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const activeChapter = CODEX_CHAPTERS[currentChapterIndex];

  const handleSelectQuiz = (qIndex: number, optionIndex: number) => {
    setSelectedQuizAnswers({
      ...selectedQuizAnswers,
      [`${activeChapter.id}-${qIndex}`]: optionIndex
    });
  };

  const nextChapter = () => {
    if (currentChapterIndex < CODEX_CHAPTERS.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const prevChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-10">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950/70 via-slate-900/90 to-blue-950/70 border border-purple-500/20 p-8 sm:p-10 backdrop-blur-xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs font-semibold mb-4">
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            <span>FutureTech Academic Codex & Masterclass Library</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            The Interactive School Codex. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-300">
              Read Like a Book. Master Like an Engineer.
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Written for absolute beginners and ambitious builders alike. Every volume breaks down complex tech into graphical diagrams, clickable resource vaults, and audiovisual masterclasses.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setShowVideoModal(true)}
              className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-lg shadow-purple-600/20"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Watch Video Masterclass ({activeChapter.audiovisualTutorial.duration})</span>
            </button>

            <button
              onClick={() => navigate('kenya-radar')}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold text-xs flex items-center gap-2 transition-colors border border-slate-700"
            >
              <span>Explore 50 Bob Blueprints</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Chapters Index Strip */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {CODEX_CHAPTERS.map((chap, idx) => {
          const isActive = idx === currentChapterIndex;
          return (
            <button
              key={chap.id}
              onClick={() => setCurrentChapterIndex(idx)}
              className={`px-4 py-3 rounded-2xl border text-left shrink-0 transition-all min-w-[240px] max-w-[280px] ${
                isActive
                  ? 'bg-purple-950/60 border-purple-500/80 ring-2 ring-purple-500/20'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">
                Volume {chap.volumeNumber} · {chap.readTimeMinutes} min read
              </div>
              <div className="text-xs font-bold text-white truncate mt-1">
                {chap.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Book Reader Container */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 backdrop-blur-md shadow-2xl">
        {/* Chapter Header */}
        <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
              Codex Volume {activeChapter.volumeNumber} of {CODEX_CHAPTERS.length}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {activeChapter.title}
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              {activeChapter.subtitle}
            </p>
          </div>

          <button
            onClick={() => setShowVideoModal(true)}
            className="self-start md:self-center px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/30 text-purple-300 text-xs font-semibold flex items-center gap-2 transition-colors shrink-0"
          >
            <Video className="w-4 h-4 text-purple-400" />
            <span>Launch Video Player</span>
          </button>
        </div>

        {/* Chapter Sections */}
        <div className="space-y-8">
          {activeChapter.sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-4">
              <h4 className="text-lg font-bold text-white">
                {section.heading}
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {section.content}
              </p>

              {section.graphicTip && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-slate-950 border border-purple-500/30 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-purple-200 font-mono font-medium leading-relaxed">
                    {section.graphicTip}
                  </div>
                </div>
              )}

              {section.checklist && (
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                    Execution Checklist:
                  </div>
                  {section.checklist.map((item, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Knowledge Mastery Check (Interactive Mini-Quiz) */}
        <div className="pt-8 border-t border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-cyan-400" />
              <span>Volume Mastery Check</span>
            </h4>
            <span className="text-xs text-slate-400">
              Answer all questions to test your comprehension
            </span>
          </div>

          <div className="space-y-4">
            {activeChapter.quizQuestions.map((q, qIdx) => {
              const selectedAnswer = selectedQuizAnswers[`${activeChapter.id}-${qIdx}`];
              const isAnswered = selectedAnswer !== undefined;

              return (
                <div key={qIdx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-white">
                    {qIdx + 1}. {q.question}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = selectedAnswer === oIdx;
                      const isCorrect = isAnswered && oIdx === q.correctIndex;
                      const isWrong = isAnswered && isSelected && oIdx !== q.correctIndex;

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleSelectQuiz(qIdx, oIdx)}
                          className={`p-3 rounded-xl border text-left text-xs transition-all ${
                            isSelected
                              ? 'bg-purple-950/60 border-purple-500 text-white font-medium'
                              : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                          } ${isCorrect ? '!bg-emerald-950/60 !border-emerald-500 !text-emerald-200' : ''} ${
                            isWrong ? '!bg-rose-950/60 !border-rose-500 !text-rose-200' : ''
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{opt}</span>
                            {isCorrect && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div className="text-[11px] text-slate-400 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80">
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={prevChapter}
            disabled={currentChapterIndex === 0}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center gap-1.5 transition-colors disabled:opacity-40"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Volume</span>
          </button>

          <span className="text-xs text-slate-500">
            Volume {activeChapter.volumeNumber} / {CODEX_CHAPTERS.length}
          </span>

          <button
            onClick={nextChapter}
            disabled={currentChapterIndex === CODEX_CHAPTERS.length - 1}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors disabled:opacity-40"
          >
            <span>Next Volume</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Audiovisual Video Walkthrough Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-4 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {activeChapter.audiovisualTutorial.videoTitle}
                </h4>
                <div className="text-xs text-purple-300 mt-0.5">
                  Instructor: {activeChapter.audiovisualTutorial.instructor} · {activeChapter.audiovisualTutorial.role}
                </div>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="aspect-video bg-slate-950 flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center shadow-lg shadow-purple-600/30">
                <Play className="w-8 h-8 fill-purple-400 ml-1" />
              </div>
              <div className="text-white font-bold text-base max-w-md">
                Stream Chapter Video Walkthrough
              </div>
              <p className="text-xs text-slate-400 max-w-sm">
                Interactive masterclass stream with code terminal demonstrations, real Kenyan business case studies, and mobile testing.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => alert('Starting simulated 1080p HD stream...')}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs"
                >
                  Play Full Masterclass ({activeChapter.audiovisualTutorial.duration})
                </button>
              </div>
            </div>

            <div className="p-5 bg-slate-950/90 border-t border-slate-800 space-y-2">
              <div className="text-xs font-bold text-white uppercase tracking-wider">Key Takeaways Covered:</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {activeChapter.audiovisualTutorial.keyTakeaways.map((item, i) => (
                  <div key={i} className="text-[11px] text-slate-300 bg-slate-900 p-2.5 rounded-xl border border-slate-800/80">
                    • {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
