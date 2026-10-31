import { Course } from '../types';
import { ASSETS } from './assets';

export const COURSES: Course[] = [
  {
    id: 'ai-agents-production',
    facultyId: 'ai-agents',
    title: 'Autonomous AI Agents & Multi-Agent Swarms in Production',
    slug: 'autonomous-ai-agents-production',
    tagline: 'Architect, test, and deploy resilient multi-agent swarms with LangGraph and CrewAI.',
    description: 'Learn how modern enterprises deploy autonomous software agents to execute real-world workflows. From state graphs and function calling to self-correcting code loops and human-in-the-loop approvals, this course takes you from agent fundamentals to production multi-agent systems.',
    level: 'Advanced',
    durationWeeks: 8,
    hoursPerWeek: 7,
    rating: 4.95,
    reviewsCount: 318,
    studentsCount: 1420,
    instructor: {
      name: 'Tariq Al-Mansoor',
      role: 'Principal Autonomous Systems Architect',
      company: 'Autonome Labs'
    },
    featured: true,
    popular: true,
    practicalProject: {
      title: 'Automated Financial Due Diligence Swarm',
      deliverable: 'A 4-agent swarm that parses SEC 10-K filings, reconciles balance sheets, drafts audit memos, and notifies Slack channels with zero hallucination.',
      earningPotential: 'Market standard consulting fee: $4,500 – $8,000 per implementation'
    },
    toolsLearned: ['LangGraph', 'CrewAI', 'FastAPI', 'ChromaDB', 'Claude 3.7 Sonnet API', 'Docker'],
    prerequisites: ['Proficiency in Python or TypeScript', 'Basic understanding of REST APIs and prompt design'],
    imageUrl: ASSETS.aiAgents20Stack,
    relatedSystemId: 'agent-stack-20',
    relatedMarketGapId: 'school-fees-receipts',
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Foundations of Agentic Cognitive Architectures',
        duration: '1 week (6 hours)',
        lessonsCount: 4,
        lessons: [
          { title: 'The Evolution: Chatbots vs ReAct vs Stateful Graph Agents', duration: '45 min', isPreviewAvailable: true },
          { title: 'Deterministic Control Flow vs Probabilistic Reasoning', duration: '60 min', isPreviewAvailable: true },
          { title: 'Designing State Schemas in LangGraph', duration: '90 min', isPreviewAvailable: false },
          { title: 'Hands-on Lab: Your First 2-Node Graph Agent with Self-Correction', duration: '120 min', isPreviewAvailable: false }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Tool Calling, Sandboxing & Invariant Enforcement',
        duration: '2 weeks (12 hours)',
        lessonsCount: 5,
        lessons: [
          { title: 'Defining Strict JSON Schemas for Tool Execution', duration: '50 min' },
          { title: 'Sandboxed Python Execution with e2b and Docker', duration: '80 min' },
          { title: 'Handling Rate Limits, Retries, and Graceful Fallbacks', duration: '70 min' },
          { title: 'Human-in-the-Loop Interruption Points and Webhook Handlers', duration: '90 min' },
          { title: 'Security: Prompt Injection Defenses for Autonomous Tools', duration: '75 min' }
        ]
      },
      {
        id: 'm3',
        title: 'Module 3: Multi-Agent Collaboration and Supervisor Patterns',
        duration: '2 weeks (14 hours)',
        lessonsCount: 4,
        lessons: [
          { title: 'Hierarchical Supervisors vs Peer Swarms in CrewAI', duration: '65 min' },
          { title: 'Shared Memory & Context Pruning Across 10,000 Turns', duration: '85 min' },
          { title: 'Consensus Voting and Discrepancy Resolution Mechanisms', duration: '90 min' },
          { title: 'Case Study: The Autonomous Customer Support & Escalation Engine', duration: '110 min' }
        ]
      },
      {
        id: 'm4',
        title: 'Module 4: Production Deployment, Observability & Client Delivery',
        duration: '3 weeks (20 hours)',
        lessonsCount: 5,
        lessons: [
          { title: 'Telemetry and Tracing with LangSmith and OpenTelemetry', duration: '60 min' },
          { title: 'Packaging Agents as High-Throughput REST & WebSocket Microservices', duration: '95 min' },
          { title: 'Pricing and Contracting Agentic Workflows for Enterprise Clients', duration: '75 min' },
          { title: 'Capstone Sprint: Building & Deploying the Financial Due Diligence Swarm', duration: '240 min' },
          { title: 'Graduation Review & Peer Demonstration Clinic', duration: '120 min' }
        ]
      }
    ]
  },
  {
    id: 'ai-prompt-engineering',
    facultyId: 'ai-core',
    title: 'Enterprise AI & Modern LLM Architecture',
    slug: 'enterprise-ai-llm-architecture',
    tagline: 'Build resilient RAG pipelines, fine-tune open models, and deploy production intelligence.',
    description: 'A deep, practical immersion into modern LLM engineering. Learn how to construct high-accuracy Retrieval-Augmented Generation (RAG) architectures, evaluate reasoning benchmarks, and optimize context windows for zero hallucinations.',
    level: 'Intermediate',
    durationWeeks: 10,
    hoursPerWeek: 8,
    rating: 4.92,
    reviewsCount: 412,
    studentsCount: 2150,
    instructor: {
      name: 'Dr. Evelyn Vance',
      role: 'Head of Faculty & AI Research Fellow',
      company: 'FutureTech AI Institute'
    },
    featured: true,
    popular: true,
    practicalProject: {
      title: 'Multimodal Legal Intelligence Assistant',
      deliverable: 'A production RAG engine indexing thousands of PDF contracts, with semantic chunking, citation guarantees, and sub-second retrieval latency.',
      earningPotential: 'Enterprise contract value: $10,000+ or SaaS subscription potential'
    },
    toolsLearned: ['PyTorch', 'Hugging Face', 'Qdrant / Pinecone', 'LangChain', 'LlamaIndex', 'vLLM'],
    prerequisites: ['Python basics', 'Fundamental algebra & statistics'],
    imageUrl: ASSETS.essentialAiSkills9,
    relatedSystemId: 'skills-9',
    relatedMarketGapId: 'duka-whatsapp-mpesa',
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Foundations of Attention & Transformer Mechanics',
        duration: '2 weeks',
        lessonsCount: 4,
        lessons: [
          { title: 'Self-Attention Math from First Principles', duration: '50 min', isPreviewAvailable: true },
          { title: 'Tokenization, Embeddings, and Vector Spaces', duration: '60 min', isPreviewAvailable: true },
          { title: 'Context Window Constraints & RoPE Scaling', duration: '45 min' },
          { title: 'Laboratory: Profiling KV Cache Memory Bottlenecks', duration: '90 min' }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Advanced Retrieval-Augmented Generation (RAG)',
        duration: '3 weeks',
        lessonsCount: 5,
        lessons: [
          { title: 'Semantic Chunking vs Hierarchical Parent-Child Indexing', duration: '75 min' },
          { title: 'Hybrid Search: Combining BM25 with Dense Embeddings', duration: '80 min' },
          { title: 'Cross-Encoder Re-Ranking Strategies for Precision', duration: '60 min' },
          { title: 'Agentic Query Rewriting and Decomposition', duration: '90 min' },
          { title: 'Lab: Benchmarking Retrieval Accuracy using Ragas Framework', duration: '120 min' }
        ]
      },
      {
        id: 'm3',
        title: 'Module 3: Fine-Tuning Open Weight Models (LoRA & QLoRA)',
        duration: '3 weeks',
        lessonsCount: 4,
        lessons: [
          { title: 'When to Prompt, When to RAG, and When to Fine-Tune', duration: '55 min' },
          { title: 'Curating High-Quality Synthetic Datasets', duration: '90 min' },
          { title: 'Parameter-Efficient Fine-Tuning with Unsloth on GPUs', duration: '110 min' },
          { title: 'Model Evaluation, Safety Alignment, and Guardrails', duration: '85 min' }
        ]
      },
      {
        id: 'm4',
        title: 'Module 4: Enterprise Serving & Scalable Inference',
        duration: '2 weeks',
        lessonsCount: 3,
        lessons: [
          { title: 'vLLM and PagedAttention for Maximum Throughput', duration: '70 min' },
          { title: 'Client SLA Architecture & Cost Optimization', duration: '60 min' },
          { title: 'Capstone Defense & Enterprise Architecture Review', duration: '180 min' }
        ]
      }
    ]
  },
  {
    id: 'nextjs-fullstack-saas',
    facultyId: 'web-dev',
    title: 'Full-Stack SaaS Architecture with Next.js, TypeScript & Supabase',
    slug: 'nextjs-fullstack-saas-architecture',
    tagline: 'Engineer complete, multi-tenant software-as-a-service applications with payments and RBAC.',
    description: 'Learn the exact stack modern Silicon Valley startups use to launch products in days instead of months. Build multi-tenant databases with Supabase RLS, implement Stripe webhook billing, structure clean server actions, and deploy to edge infrastructure.',
    level: 'Intermediate',
    durationWeeks: 8,
    hoursPerWeek: 6,
    rating: 4.89,
    reviewsCount: 520,
    studentsCount: 2890,
    instructor: {
      name: 'Marcus Omondi',
      role: 'Principal Staff Engineer',
      company: 'CloudMatrix Global'
    },
    featured: true,
    popular: true,
    practicalProject: {
      title: 'B2B Multi-Tenant Client Portal & Invoicing Engine',
      deliverable: 'A live, multi-tenant software product with role-based team invitations, Stripe customer billing portal, audit logs, and dark mode interface.',
      earningPotential: 'Ready to launch as an active SaaS or sell as turn-key client software for $3,000+'
    },
    toolsLearned: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Supabase (PostgreSQL & RLS)', 'Stripe Connect', 'Zod'],
    prerequisites: ['HTML/CSS and modern JavaScript basics'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    relatedSystemId: 'combinator',
    relatedMarketGapId: 'ai-salon-beauty-studio',
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Modern App Architecture & TypeScript Rigor',
        duration: '2 weeks',
        lessonsCount: 4,
        lessons: [
          { title: 'Next.js App Router Architecture & Edge Runtimes', duration: '55 min', isPreviewAvailable: true },
          { title: 'Strict Type Modeling with Zod & TypeScript Generics', duration: '70 min', isPreviewAvailable: true },
          { title: 'Component Composition Systems in Tailwind v4', duration: '60 min' },
          { title: 'Hands-on: Scaffolding the Production Monorepo', duration: '90 min' }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Supabase PostgreSQL, Authentication & Row Level Security',
        duration: '2 weeks',
        lessonsCount: 4,
        lessons: [
          { title: 'Relational Database Modeling for Multi-Tenant Workspaces', duration: '80 min' },
          { title: 'Supabase Auth with Magic Links and OAuth Providers', duration: '65 min' },
          { title: 'Writing Bulletproof Row Level Security (RLS) Policies', duration: '95 min' },
          { title: 'Database Functions, Triggers, and Real-Time Listeners', duration: '75 min' }
        ]
      },
      {
        id: 'm3',
        title: 'Module 3: Payments, Subscriptions & Webhook Plumbing',
        duration: '2 weeks',
        lessonsCount: 4,
        lessons: [
          { title: 'Stripe Billing Models: Seats, Usage, and Flat Monthly', duration: '60 min' },
          { title: 'Idempotent Webhook Processing with Edge Functions', duration: '85 min' },
          { title: 'Handling Failed Charges, Dunning, and Customer Self-Service Portals', duration: '70 min' },
          { title: 'Multi-Currency Support & Tax Compliance with Stripe Tax', duration: '60 min' }
        ]
      },
      {
        id: 'm4',
        title: 'Module 4: Deployment, Analytics & SaaS Launch Playbook',
        duration: '2 weeks',
        lessonsCount: 4,
        lessons: [
          { title: 'Vercel Deployment, Custom Domains & SSL Automation', duration: '50 min' },
          { title: 'Product Analytics with PostHog and Error Tracking with Sentry', duration: '65 min' },
          { title: 'Building the Public Marketing Funnel & SEO Optimization', duration: '75 min' },
          { title: 'Live Capstone Launch: Onboarding Your First Real Paying User', duration: '180 min' }
        ]
      }
    ]
  },
  {
    id: 'fintech-mpesa-stripe-systems',
    facultyId: 'fintech-payments',
    title: 'International Fintech Systems & Pan-African Payment Gateways',
    slug: 'international-fintech-payment-gateways',
    tagline: 'Master M-Pesa Daraja 3.0, Stripe Connect, multi-currency ledgers, and KYC compliance.',
    description: 'Learn how modern international payments are built. Connect local mobile money rails (M-Pesa, Airtel Money) with global card processing networks (Stripe, Visa Direct) using robust double-entry accounting ledgers and cryptographic security.',
    level: 'Advanced',
    durationWeeks: 8,
    hoursPerWeek: 6,
    rating: 4.97,
    reviewsCount: 284,
    studentsCount: 1680,
    instructor: {
      name: 'Kwame Boateng',
      role: 'Fintech Founder & Payment Systems Architect',
      company: 'PayHorizon Africa'
    },
    featured: true,
    popular: false,
    practicalProject: {
      title: 'Cross-Border B2B Escrow & Multi-Currency Settlement Engine',
      deliverable: 'A live escrow platform allowing international buyers in USD to pay African suppliers via M-Pesa with automated currency conversion and transaction reconciliation.',
      earningPotential: 'Proven commercial demand: Licensed by remittance startups and trade brokers'
    },
    toolsLearned: ['M-Pesa Daraja API', 'Stripe Connect', 'PostgreSQL Double-Entry Ledgers', 'Express / Node.js', 'Redis', 'Twilio'],
    prerequisites: ['Backend API development experience in Node.js or Python'],
    imageUrl: ASSETS.imperionxMpesaChat,
    relatedSystemId: 'agency-24h',
    relatedMarketGapId: 'duka-whatsapp-mpesa',
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Modern Payment Rails & Financial Plumbing',
        duration: '2 weeks',
        lessonsCount: 3,
        lessons: [
          { title: 'The Anatomy of a Card Transaction: Acquiring, Issuing, and Interchange', duration: '60 min', isPreviewAvailable: true },
          { title: 'Mobile Money Architecture: STK Push, C2B, B2C, and B2B in East Africa', duration: '75 min', isPreviewAvailable: true },
          { title: 'Building a Reliable Daraja 3.0 Sandbox Environment', duration: '90 min' }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Ledger Design & Double-Entry Accounting Architecture',
        duration: '2 weeks',
        lessonsCount: 4,
        lessons: [
          { title: 'Why Floats and Single-Column Balances Cause Catastrophic Accounting Bugs', duration: '65 min' },
          { title: 'Designing Immutable Double-Entry Ledgers in PostgreSQL', duration: '85 min' },
          { title: 'ACID Transactions, Locking Strategies, and Idempotency Keys', duration: '90 min' },
          { title: 'Automated Nightly Reconciliation Scripts and Anomaly Detectors', duration: '80 min' }
        ]
      },
      {
        id: 'm3',
        title: 'Module 3: Cross-Border FX, Escrow & Compliance (KYC/AML)',
        duration: '2 weeks',
        lessonsCount: 4,
        lessons: [
          { title: 'Forex Hedging Mechanisms and Spread Calculation Engines', duration: '70 min' },
          { title: 'Automated Sanction List Screening and Identity Verification (KYC)', duration: '85 min' },
          { title: 'Escrow State Machines: Authorization, Hold, Dispute, and Release', duration: '95 min' },
          { title: 'Regulatory Compliance: Central Bank Guidelines & PCI-DSS Scoping', duration: '75 min' }
        ]
      },
      {
        id: 'm4',
        title: 'Module 4: Capstone Execution & Commercial Production Launch',
        duration: '2 weeks',
        lessonsCount: 3,
        lessons: [
          { title: 'Stress-Testing Webhook Endpoints under 1,000 Simulated Concurrent Hits', duration: '90 min' },
          { title: 'Building the Real-Time Merchant Analytics Dashboard', duration: '80 min' },
          { title: 'Capstone Defense with Fintech Venture Mentors', duration: '180 min' }
        ]
      }
    ]
  },
  {
    id: 'ai-video-storytelling',
    facultyId: 'ai-video-content',
    title: 'Generative AI Video Production & Commercial Direction',
    slug: 'generative-ai-video-production',
    tagline: 'Direct cinematic commercials and digital campaigns using Runway, Midjourney, and synthetic voice.',
    description: 'Transform traditional video production into a lightning-fast, high-margin generative studio. Master camera prompting, character consistency across scenes, dynamic depth maps, generative sound design, and automated localization.',
    level: 'Beginner',
    durationWeeks: 6,
    hoursPerWeek: 5,
    rating: 4.88,
    reviewsCount: 310,
    studentsCount: 1980,
    instructor: {
      name: 'Chloe Dupond',
      role: 'Creative Generative Director',
      company: 'Studio Synapse Paris'
    },
    featured: false,
    popular: true,
    practicalProject: {
      title: 'Commercial AI Brand Campaign & Multilingual Video Asset Pack',
      deliverable: 'A 60-second broadcast-quality commercial with lip-synced audio in English, French, and Swahili for an international consumer brand.',
      earningPotential: 'Agency client billing: $2,500 – $6,000 per brand commercial'
    },
    toolsLearned: ['Runway Gen-3', 'Midjourney v6', 'ElevenLabs Voice Engine', 'Kling AI', 'Topaz Video AI', 'DaVinci Resolve'],
    prerequisites: ['Basic computer skills and an eye for visual storytelling'],
    imageUrl: ASSETS.deadlyAiTools8,
    relatedSystemId: 'team-replace-50',
    relatedMarketGapId: 'ai-salon-beauty-studio',
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Generative Visual Foundations & Art Direction',
        duration: '1 week',
        lessonsCount: 3,
        lessons: [
          { title: 'Mastering Cinematic Prompts: Lighting, Lenses, and Film Stocks', duration: '50 min', isPreviewAvailable: true },
          { title: 'Character Consistency Techniques with Reference Seeds', duration: '65 min' },
          { title: 'Upscaling and Denoising for 4K Broadcast Standards', duration: '55 min' }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Motion Synthesis & Camera Choreography',
        duration: '2 weeks',
        lessonsCount: 4,
        lessons: [
          { title: 'Controlling Camera Movements: Panning, Tracking, and Orbiting', duration: '60 min' },
          { title: 'Motion Brushes and Temporal Consistency in Runway Gen-3', duration: '75 min' },
          { title: 'Frame Interpolation & Slow-Motion Fluidity Techniques', duration: '60 min' },
          { title: 'Lab: Directing a 15-Second Action Sequence', duration: '90 min' }
        ]
      },
      {
        id: 'm3',
        title: 'Module 3: Synthetic Voice, Soundscapes & Localization',
        duration: '2 weeks',
        lessonsCount: 3,
        lessons: [
          { title: 'Voice Cloning, Emotion Prompting & Pacing in ElevenLabs', duration: '55 min' },
          { title: 'AI Lip-Syncing for Instant Multi-Language Localization', duration: '70 min' },
          { title: 'Procedural Foley & Generative Sound Design Integration', duration: '65 min' }
        ]
      },
      {
        id: 'm4',
        title: 'Module 4: Commercial Assembly & Client Acquisition',
        duration: '1 week',
        lessonsCount: 3,
        lessons: [
          { title: 'DaVinci Resolve Assembly: Color Grading & Final Master Export', duration: '80 min' },
          { title: 'Packaging AI Video Packages for International E-Commerce Brands', duration: '60 min' },
          { title: 'Capstone Screening & Client Pitch Review', duration: '120 min' }
        ]
      }
    ]
  },
  {
    id: 'freelance-international-consulting',
    facultyId: 'freelancing-careers',
    title: 'High-Ticket International Freelancing & Remote Consulting',
    slug: 'high-ticket-international-freelancing',
    tagline: 'Land international clients paying in USD/EUR, negotiate retainers, and build a remote business.',
    description: 'Learn the exact business systems that allow independent developers, designers, and marketers to earn Silicon Valley rates from anywhere in the world. From outbound positioning and discovery calls to proposal closing and value pricing.',
    level: 'Beginner',
    durationWeeks: 6,
    hoursPerWeek: 5,
    rating: 4.96,
    reviewsCount: 680,
    studentsCount: 3410,
    instructor: {
      name: 'Liam Gallagher',
      role: 'Seven-Figure Remote Consultant',
      company: 'Global Talent Studio'
    },
    featured: true,
    popular: true,
    practicalProject: {
      title: 'International Client Acquisition Funnel & Retainer Agreement',
      deliverable: 'A live personal authority website, validated $3k/mo service offering, cold outbound sequence with 30% reply rates, and signed engagement contract template.',
      earningPotential: 'Targeting $3,000 – $10,000 monthly recurring revenue from remote clients'
    },
    toolsLearned: ['Upwork Enterprise', 'LinkedIn Sales Navigator', 'PandaDoc Contracts', 'Stripe Invoicing', 'Wise Business', 'Notion Client Portals'],
    prerequisites: ['One marketable digital skill (coding, design, marketing, or automation)'],
    imageUrl: ASSETS.freeTools85Grid,
    relatedSystemId: 'combinator',
    relatedMarketGapId: 'water-tanker-logistics',
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Positioning: Escaping the Low-Cost Freelancer Trap',
        duration: '1 week',
        lessonsCount: 3,
        lessons: [
          { title: 'Hourly Billing vs Value Pricing: The Math of High-Ticket Retainers', duration: '50 min', isPreviewAvailable: true },
          { title: 'Narrowing Your Niche: How Specialization 10x’s Your Perceived Value', duration: '60 min', isPreviewAvailable: true },
          { title: 'Crafting Your Irresistible Offer Manifesto', duration: '70 min' }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: International Client Acquisition Engines',
        duration: '2 weeks',
        lessonsCount: 4,
        lessons: [
          { title: 'Optimizing Upwork for Top 1% High-Budget Enterprise Clients', duration: '75 min' },
          { title: 'Direct Outbound on LinkedIn: Reaching US & European Founders', duration: '80 min' },
          { title: 'Building a Lead Scraping & Verification Pipeline', duration: '65 min' },
          { title: 'Running High-Conversion 20-Minute Discovery Calls', duration: '90 min' }
        ]
      },
      {
        id: 'm3',
        title: 'Module 3: Proposals That Close & International Legal Contracts',
        duration: '2 weeks',
        lessonsCount: 3,
        lessons: [
          { title: 'The 5-Page Diagnostic Proposal Template That Wins Against Agencies', duration: '80 min' },
          { title: 'Contract Terms Every Remote Worker Needs: IP, Scope Creep & Indemnity', duration: '70 min' },
          { title: 'Overcoming Common Objections (Timezone Differences, Offshore Hesitation)', duration: '60 min' }
        ]
      },
      {
        id: 'm4',
        title: 'Module 4: Cross-Border Banking, Taxes & Delivery Systems',
        duration: '1 week',
        lessonsCount: 3,
        lessons: [
          { title: 'Setting Up Wise Business, US Virtual Accounts, and Swift Transfers', duration: '55 min' },
          { title: 'Client Onboarding Portals That Create Raving Evangelists', duration: '60 min' },
          { title: 'Closing Your First Target $2,000+ Engagement', duration: '90 min' }
        ]
      }
    ]
  },
  {
    id: 'startup-micro-saas-bootcamp',
    facultyId: 'online-business',
    title: 'Zero-Capital Micro-SaaS: From Idea to $5k MRR',
    slug: 'zero-capital-micro-saas-bootcamp',
    tagline: 'Validate customer pain points, build lean MVPs, and achieve sustainable recurring revenue.',
    description: 'Stop building products nobody wants. This practical bootcamp guides founders through systematic problem discovery, pre-selling software before writing code, launching on product directories, and scaling organic distribution.',
    level: 'Intermediate',
    durationWeeks: 8,
    hoursPerWeek: 6,
    rating: 4.93,
    reviewsCount: 395,
    studentsCount: 2200,
    instructor: {
      name: 'Amina K. Mwangi',
      role: 'Serial Bootstrapped Founder',
      company: 'Ventures Africa'
    },
    featured: false,
    popular: true,
    practicalProject: {
      title: 'Launched Micro-SaaS with Active Paying Subscribers',
      deliverable: 'A live commercial software product listed on Product Hunt with Stripe billing enabled and at least 3 paying early adopters.',
      earningPotential: 'Aiming for $1,000 – $5,000 monthly recurring revenue within 90 days'
    },
    toolsLearned: ['Lean Canvas', 'Cursor / v0 Prototyping', 'Stripe Billing', 'Product Hunt', 'Twitter / X Distribution', 'Senja Testimonials'],
    prerequisites: ['Basic product or coding familiarity'],
    imageUrl: ASSETS.imperionxBeforeAfter,
    relatedSystemId: 'agency-24h',
    relatedMarketGapId: 'duka-whatsapp-mpesa',
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Systematic Opportunity Discovery & Idea Validation',
        duration: '2 weeks',
        lessonsCount: 3,
        lessons: [
          { title: 'Finding Pain Points in Reddit, Twitter & G2 1-Star Reviews', duration: '55 min', isPreviewAvailable: true },
          { title: 'The Mom Test: Conducting 10 Founder Discovery Interviews', duration: '65 min' },
          { title: 'Pre-Selling with a 1-Page Waitlist Before Writing Code', duration: '75 min' }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: 7-Day Rapid MVP Engineering with AI Assistants',
        duration: '2 weeks',
        lessonsCount: 4,
        lessons: [
          { title: 'Scoping the True Minimal Viable Feature Set', duration: '50 min' },
          { title: 'Using Cursor and AI Boilerplates to Ship 5x Faster', duration: '90 min' },
          { title: 'Configuring Authentication and One-Click Payments', duration: '65 min' },
          { title: 'Testing the Complete User Journey End-to-End', duration: '70 min' }
        ]
      },
      {
        id: 'm3',
        title: 'Module 3: Launch Strategies & Zero-CAC Distribution Flywheels',
        duration: '2 weeks',
        lessonsCount: 3,
        lessons: [
          { title: 'The Product Hunt Top 5 Launch Blueprint', duration: '60 min' },
          { title: 'Building in Public on X and LinkedIn Without Sounding Cringe', duration: '65 min' },
          { title: 'Engineering Free Side-Project Tools That Drive Organic Traffic', duration: '80 min' }
        ]
      },
      {
        id: 'm4',
        title: 'Module 4: Retention, Churn Reduction & Exit Strategy',
        duration: '2 weeks',
        lessonsCount: 3,
        lessons: [
          { title: 'Onboarding Sequences That Stop Early Churn Dead', duration: '60 min' },
          { title: 'Customer Feedback Loops and Pricing Optimization', duration: '70 min' },
          { title: 'Acquisition Marketplaces: How to List on Acquire.com for an Exit', duration: '85 min' }
        ]
      }
    ]
  },
  {
    id: 'system-design-cloud-scale',
    facultyId: 'software-engineering',
    title: 'Distributed Systems & High-Scale Cloud Architecture',
    slug: 'distributed-systems-cloud-architecture',
    tagline: 'Design fault-tolerant backend infrastructures capable of handling millions of requests per second.',
    description: 'Learn the architectural principles behind global tech giants. Delve into CAP theorem, distributed consensus algorithms (Raft, Paxos), database partitioning, caching layers, message queues, and zero-downtime deployment pipelines.',
    level: 'Advanced',
    durationWeeks: 10,
    hoursPerWeek: 8,
    rating: 4.96,
    reviewsCount: 340,
    studentsCount: 1540,
    instructor: {
      name: 'David Chen',
      role: 'Principal Distributed Systems Architect',
      company: 'Ex-AWS & Infrastructure Specialist'
    },
    featured: false,
    popular: false,
    practicalProject: {
      title: 'High-Throughput Distributed Rate Limiter & Event Bus',
      deliverable: 'A resilient event ingestion pipeline benchmarked at 100,000 writes/sec using Go, Kafka, Redis Cluster, and PostgreSQL sharding.',
      earningPotential: 'Qualifies candidates for $150k+ Senior & Staff Software Engineer roles'
    },
    toolsLearned: ['Go', 'Apache Kafka', 'Redis Cluster', 'Kubernetes', 'PostgreSQL Sharding', 'Grafana'],
    prerequisites: ['Strong fundamentals in at least one backend programming language'],
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    relatedSystemId: 'agent-stack-20',
    relatedMarketGapId: 'water-tanker-logistics',
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Distributed Fundamentals & Scalability Principles',
        duration: '2 weeks',
        lessonsCount: 3,
        lessons: [
          { title: 'Vertical vs Horizontal Scaling & Bottleneck Profiling', duration: '60 min', isPreviewAvailable: true },
          { title: 'CAP Theorem and Eventual Consistency in Real Systems', duration: '75 min' },
          { title: 'Network Topologies, Latency, and TCP/UDP Trade-offs', duration: '65 min' }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Caching, Storage & Database Partitioning',
        duration: '3 weeks',
        lessonsCount: 4,
        lessons: [
          { title: 'Cache-Aside, Write-Through, and Cache Stampede Mitigations', duration: '75 min' },
          { title: 'Consistent Hashing and Distributed Redis Clusters', duration: '85 min' },
          { title: 'Database Indexing Deep Dive: B-Trees vs LSM Trees', duration: '90 min' },
          { title: 'Horizontal Sharding Strategies for Relational Databases', duration: '95 min' }
        ]
      },
      {
        id: 'm3',
        title: 'Module 3: Message Queues, Streaming & Asynchronous Coordination',
        duration: '3 weeks',
        lessonsCount: 3,
        lessons: [
          { title: 'Event-Driven Architectures with Apache Kafka & RabbitMQ', duration: '80 min' },
          { title: 'Idempotency and Exactly-Once Processing Guarantees', duration: '90 min' },
          { title: 'Distributed Sagas and Two-Phase Commit Protocols', duration: '85 min' }
        ]
      },
      {
        id: 'm4',
        title: 'Module 4: Chaos Engineering, Observability & Live Defense',
        duration: '2 weeks',
        lessonsCount: 3,
        lessons: [
          { title: 'Distributed Tracing with OpenTelemetry and Jaeger', duration: '60 min' },
          { title: 'Chaos Engineering: Simulating Network Partitions and Node Deaths', duration: '80 min' },
          { title: 'Capstone Defense: Mock FAANG Technical System Design Board', duration: '180 min' }
        ]
      }
    ]
  }
];
