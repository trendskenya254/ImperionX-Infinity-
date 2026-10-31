import { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'micro-pass-50',
    name: '50 Bob Blueprint Pass',
    tagline: 'Instant single-blueprint PDF & link vault access',
    priceKshMonthly: 50,
    badge: '50 Bob Micro-Pass',
    description: 'Unlock any complete step-by-step graphical roadmap PDF, clickable link vault, prompt recipes, and video guides for 50 Kenyan Shillings.',
    idealFor: 'First-time builders needing instant step-by-step blueprints',
    maxFaculties: 1,
    liveMentorship: false,
    projectReviews: false,
    certificateOfMastery: false,
    communityAccess: 'Standard',
    features: [
      'Instant access to chosen Project Blueprint PDF',
      'Complete clickable Resource Vault with 100+ verified links',
      'Step-by-step graphical combination workflow diagram',
      'Free-tier stack blueprint (Zero monthly software costs)',
      'Video walkthrough links & mobile implementation checklist'
    ],
    notIncluded: [
      'Live weekly mentor group sessions',
      'Verified Certificate of Mastery',
      'Private 1-on-1 sprint advisory'
    ]
  },
  {
    id: 'explorer',
    name: 'Explorer',
    tagline: 'Foundational literacy for tech enthusiasts',
    priceKshMonthly: 200,
    badge: 'Starter',
    description: 'Essential orientation for individuals stepping into the AI and modern technology ecosystem.',
    idealFor: 'Students & beginners exploring technology disciplines',
    maxFaculties: 1,
    liveMentorship: false,
    projectReviews: false,
    certificateOfMastery: false,
    communityAccess: 'Standard',
    features: [
      'Access to 1 foundational faculty track',
      'Curated AI tools library & workflow prompts',
      'Community forum access & discussion boards',
      'Standard student dashboard & progress tracking',
      'Weekly tech newsletter & industry digests'
    ],
    notIncluded: [
      'Live weekly mentor code reviews',
      'Commercial capstone project grading',
      'Verified Certificate of Mastery',
      'Direct WhatsApp mentor hotline'
    ]
  },
  {
    id: 'beginner',
    name: 'Beginner',
    tagline: 'Practical skills for early builders',
    priceKshMonthly: 500,
    badge: 'Popular for Beginners',
    description: 'Structured progressive learning to gain practical, portfolio-ready development and AI skills.',
    idealFor: 'Career transitioners building their first functional projects',
    maxFaculties: 2,
    liveMentorship: false,
    projectReviews: true,
    certificateOfMastery: true,
    communityAccess: 'Standard',
    features: [
      'Access to any 2 faculty tracks of your choice',
      'Step-by-step hands-on coding exercises',
      'Monthly asynchronous project feedback',
      'Official FutureTech Certificate of Completion',
      'Access to student repository templates & starters',
      'Community project showcase voting'
    ],
    notIncluded: [
      '1-on-1 sprint coaching',
      'Direct client pitching masterclasses',
      'VIP mastermind access'
    ]
  },
  {
    id: 'creator',
    name: 'Creator',
    tagline: 'Generative media, branding & content craft',
    priceKshMonthly: 800,
    badge: 'Creative Specialization',
    description: 'Master generative AI video, audio cloning, brand design, and rapid digital media monetization.',
    idealFor: 'Designers, content producers, and digital agency freelancers',
    maxFaculties: 3,
    liveMentorship: true,
    projectReviews: true,
    certificateOfMastery: true,
    communityAccess: 'Pro',
    features: [
      'Full access to 3 faculties (including AI Video & Design)',
      'High-resolution generative prompt asset vault',
      'Bi-weekly group portfolio feedback clinics',
      'Commercial client contract templates & rate cards',
      'Official verified credential for LinkedIn',
      'Private Discord / Slack Creator channels'
    ],
    notIncluded: [
      'Executive pitch deck reviews',
      'VC angel syndicate access'
    ]
  },
  {
    id: 'builder',
    name: 'Builder',
    tagline: 'Full-stack engineering & agent automation',
    priceKshMonthly: 999,
    popular: true,
    badge: 'Most Popular',
    description: 'The core flagship tier for software engineers, automation builders, and full-stack product creators.',
    idealFor: 'Software developers, autonomous agent builders, and makers',
    maxFaculties: 5,
    liveMentorship: true,
    projectReviews: true,
    certificateOfMastery: true,
    communityAccess: 'Pro',
    features: [
      'Full access to 5 faculties across engineering & AI',
      'Weekly live group office hours with faculty architects',
      'Rigorous GitHub code reviews on all capstones',
      'Production deployment sandbox & API starter kits',
      'Priority job board & remote freelance leads feed',
      'Unlimited AI tool discounts & cloud credits access'
    ],
    notIncluded: [
      'Private 1-on-1 monthly strategic advisory'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'High-ticket international career acceleration',
    priceKshMonthly: 1499,
    badge: 'Career Accelerator',
    description: 'Comprehensive access engineered to land global remote roles, scale consulting, or launch tech ventures.',
    idealFor: 'Senior practitioners, consultants, and growth leaders',
    maxFaculties: 'Unlimited',
    liveMentorship: true,
    projectReviews: true,
    certificateOfMastery: true,
    communityAccess: 'Pro',
    features: [
      'Unrestricted access to all 15 faculties',
      'Weekly 1-on-1 sprint coaching & resume audits',
      'Direct introductions to international hiring partners',
      'Fintech & payment integration lab credentials',
      'Full commercial IP ownership of all capstone projects',
      'Dedicated student concierge & WhatsApp mentor channel'
    ],
    notIncluded: []
  },
  {
    id: 'business-master',
    name: 'Business Master',
    tagline: 'Venture scaling, angel syndicate & executive innovation',
    priceKshMonthly: 2000,
    badge: 'Executive Tier',
    description: 'Elite program for tech founders, C-suite executives, and corporate innovators building defensible companies.',
    idealFor: 'Founders, executives, and venture builders',
    maxFaculties: 'Unlimited',
    liveMentorship: true,
    projectReviews: true,
    certificateOfMastery: true,
    communityAccess: 'Executive VIP',
    features: [
      'Complete VIP access to all 15 faculties & all course archives',
      'Monthly private advisory with Dean & Venture Partners',
      'Investor pitch deck review & angel syndicate introductions',
      'Corporate AI audit playbooks & legal governance kits',
      'Executive mastermind dinners (in-person & virtual hubs)',
      'Lifetime alumni directory & syndicate deal-flow access'
    ],
    notIncluded: []
  }
];
