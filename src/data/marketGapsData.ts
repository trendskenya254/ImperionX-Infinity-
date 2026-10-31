export interface MarketGapItem {
  id: string;
  title: string;
  location: string;
  trendingRank: number;
  marketGapSummary: string;
  demandLevel: 'Exploding' | 'Very High' | 'High';
  targetClients: string;
  estimatedBuildTime: string;
  softwareCostMonthly: string; // '$0 (Free Tiers)'
  earningRoadmap: {
    pricingStrategy: string;
    starterIncomeKes: string;
    scaleIncomeKes: string;
    stepByStepPlan: string[];
  };
  toolsToCombine: {
    name: string;
    role: string;
    isFreeTier: boolean;
    tierNote: string;
    link: string;
  }[];
  pdfBlueprint: {
    title: string;
    pagesCount: number;
    downloadPriceKes: number; // 50 Bob
    includedResources: string[];
  };
  videoTutorial: {
    title: string;
    duration: string;
    youtubeId: string;
    instructor: string;
  };
}

export const KENYA_MARKET_GAPS: MarketGapItem[] = [
  {
    id: 'duka-whatsapp-mpesa',
    title: 'Local Retail Duka & Pharmacy WhatsApp Order Bot with M-Pesa STK',
    location: 'Kenya & East Africa (Nairobi, Mombasa, Kisumu, Eldoret)',
    trendingRank: 1,
    marketGapSummary: 'Over 94% of local neighborhood pharmacies, retail dukas, and hardware stores take customer orders via messy WhatsApp voice notes and paper notebooks. They lose up to 30% of sales through forgotten deliveries and unpaid credit balances.',
    demandLevel: 'Exploding',
    targetClients: 'Neighborhood Chemists, Superettes, Agro-vet shops, Hardware stores',
    estimatedBuildTime: '4 to 6 Hours using AI Templates',
    softwareCostMonthly: 'KES 0 (100% Free Tiers)',
    earningRoadmap: {
      pricingStrategy: 'Charge KES 1,999 setup fee per shop + KES 600/month hosting retainer',
      starterIncomeKes: 'KES 25,990 / month (with 10 neighborhood shops)',
      scaleIncomeKes: 'KES 89,900 / month (with 35 regional shops)',
      stepByStepPlan: [
        'Step 1: Use v0.dev (Free) to generate a clean 1-page mobile product catalog.',
        'Step 2: Connect Supabase Free Tier (500MB PostgreSQL) to store item prices and stock.',
        'Step 3: Integrate Safaricom Daraja STK Push sandbox (Free API) for instant Lipa na M-Pesa prompts.',
        'Step 4: Connect WhatsApp Business API via Twilio Free trial or direct wa.me link with prefilled order tokens.',
        'Step 5: Pitch 5 neighborhood shops in your area using the Before/After smartphone demo.'
      ]
    },
    toolsToCombine: [
      { name: 'v0 by Vercel', role: 'Generates mobile-first catalog UI in minutes', isFreeTier: true, tierNote: 'Free tier credits included', link: 'https://v0.dev' },
      { name: 'Supabase PostgreSQL', role: 'Real-time database for product prices & stock', isFreeTier: true, tierNote: 'Free tier up to 500MB database', link: 'https://supabase.com' },
      { name: 'Daraja 3.0 API', role: 'Instant M-Pesa STK Push payment prompt', isFreeTier: true, tierNote: 'Zero API subscription cost', link: 'https://developer.safaricom.co.ke' },
      { name: 'WhatsApp Business', role: 'Customer communication & order confirmation', isFreeTier: true, tierNote: '100% Free app & link generator', link: 'https://business.whatsapp.com' }
    ],
    pdfBlueprint: {
      title: 'Complete 24H Duka WhatsApp + M-Pesa Bot Blueprint PDF',
      pagesCount: 14,
      downloadPriceKes: 50,
      includedResources: [
        'Copy-paste TypeScript source code for M-Pesa STK webhook',
        'Ready-to-use v0 design prompts for local supermarket/chemist',
        'Sales pitch script & flyer template for shop owners',
        'Database schema for inventory and daily sales'
      ]
    },
    videoTutorial: {
      title: 'How to Build an M-Pesa WhatsApp Ordering System in 30 Minutes',
      duration: '28 min',
      youtubeId: 'dQw4w9WgXcQ', // Placeholder or tutorial embed
      instructor: 'Marcus Omondi · FutureTech Engineering Fellow'
    }
  },
  {
    id: 'school-fees-receipts',
    title: 'Private School & Daycare Fee SMS Tracker + Instant M-Pesa Receipts',
    location: 'Kenya Nationwide (Private Academies, Daycares, Tuition Centers)',
    trendingRank: 2,
    marketGapSummary: 'Private school accountants spend 3 weeks every term cross-referencing paper bank deposit slips and M-Pesa transaction codes against student registers. Parents wait in long queues for manual paper receipts.',
    demandLevel: 'Exploding',
    targetClients: 'Private Primary & Secondary Schools, ECD Daycares, Music & Tutoring Centers',
    estimatedBuildTime: '1 Weekend (12 Hours)',
    softwareCostMonthly: 'KES 0 (Free Tier Stack)',
    earningRoadmap: {
      pricingStrategy: 'Charge KES 15,000 setup fee + KES 3,000 per academic term maintenance',
      starterIncomeKes: 'KES 45,000 / term (from 3 private schools)',
      scaleIncomeKes: 'KES 180,000 / term (from 12 private academies)',
      stepByStepPlan: [
        'Step 1: Set up a Supabase table with Student Name, Grade, Parent Phone, and Fee Balance.',
        'Step 2: Deploy an M-Pesa C2B Paybill validation URL that matches student admission numbers.',
        'Step 3: Trigger an automated Africa’s Talking SMS or WhatsApp message thanking the parent with remaining balance.',
        'Step 4: Generate a PDF receipt instantly and store in free cloud storage.',
        'Step 5: Present the solution to school directors before the start of each new school term.'
      ]
    },
    toolsToCombine: [
      { name: 'n8n Workflow', role: 'Automates fee reconciliation and SMS trigger', isFreeTier: true, tierNote: 'Free community self-hosted', link: 'https://n8n.io' },
      { name: 'Supabase PostgreSQL', role: 'Secure parent records & fee balances', isFreeTier: true, tierNote: 'Free tier', link: 'https://supabase.com' },
      { name: 'Daraja C2B Webhook', role: 'Captures Paybill payments in real time', isFreeTier: true, tierNote: 'Free developer sandbox', link: 'https://developer.safaricom.co.ke' },
      { name: "Africa's Talking SMS", role: 'Dispatches instant balance receipts to parents', isFreeTier: true, tierNote: 'Free sandbox testing credits', link: 'https://africastalking.com' }
    ],
    pdfBlueprint: {
      title: 'School Fee Automation & SMS Receipt Dispatcher Blueprint PDF',
      pagesCount: 18,
      downloadPriceKes: 50,
      includedResources: [
        'Complete n8n workflow JSON ready to import in 1 click',
        'PostgreSQL schema with student balances and terms',
        'Official formal proposal letter to School Directors',
        'Parent SMS notification templates'
      ]
    },
    videoTutorial: {
      title: 'Automating M-Pesa Paybill Reconciliation for Kenyan Schools',
      duration: '34 min',
      youtubeId: 'dQw4w9WgXcQ',
      instructor: 'Kwame Boateng · Fintech Systems Dean'
    }
  },
  {
    id: 'water-tanker-logistics',
    title: 'County Water Tanker & Clean Drinking Water Delivery Dispatcher',
    location: 'Nairobi Estates (Langata, Kilimani, Roysambu, Syokimau, Ruaka)',
    trendingRank: 3,
    marketGapSummary: 'Nairobi water rationing creates constant weekly demand for 5,000L and 10,000L water bowsers. Estate residents call random phone numbers on lampposts and get scammed or delayed for days.',
    demandLevel: 'Very High',
    targetClients: 'Water Bowser Truck Owners, Clean Water Refill Stations, Estate Committees',
    estimatedBuildTime: '5 Hours',
    softwareCostMonthly: 'KES 0 (Free Tiers)',
    earningRoadmap: {
      pricingStrategy: 'Charge KES 250 commission per bowser delivered or KES 3,500/month flat listing',
      starterIncomeKes: 'KES 35,000 / month (handling 140 bowser dispatches)',
      scaleIncomeKes: 'KES 110,000 / month (serving 3 large residential estates)',
      stepByStepPlan: [
        'Step 1: Build a clean responsive booking form with Next.js & Tailwind CSS (Free on Vercel).',
        'Step 2: Customer selects estate location, tanker capacity (5kL or 10kL), and preferred delivery time.',
        'Step 3: M-Pesa STK Push collects deposit or full payment into the trucker escrow ledger.',
        'Step 4: Automated dispatch SMS sends GPS location to the nearest available tanker driver.',
        'Step 5: Share the link in estate WhatsApp & Facebook residential groups.'
      ]
    },
    toolsToCombine: [
      { name: 'Next.js 15 + Tailwind', role: 'Fast mobile web application for residents', isFreeTier: true, tierNote: 'Free hosting on Vercel', link: 'https://nextjs.org' },
      { name: 'Leaflet / OpenStreetMap', role: 'Interactive estate delivery location pin', isFreeTier: true, tierNote: '100% Free open-source maps', link: 'https://leafletjs.com' },
      { name: 'M-Pesa STK Push', role: 'Collects booking fee or full tanker amount', isFreeTier: true, tierNote: 'Zero subscription', link: 'https://developer.safaricom.co.ke' },
      { name: 'Telegram Bot API', role: 'Broadcasts new delivery alerts to driver group', isFreeTier: true, tierNote: '100% Free bot API', link: 'https://telegram.org' }
    ],
    pdfBlueprint: {
      title: 'Water Bowser Delivery & Logistics Dispatcher Blueprint PDF',
      pagesCount: 16,
      downloadPriceKes: 50,
      includedResources: [
        'Next.js clean template with estate dropdown & geolocation',
        'Driver dispatch notification script',
        'Flyer & social media ad kit for residential estates',
        'Driver partnership agreement draft'
      ]
    },
    videoTutorial: {
      title: 'Building a Local Logistics Dispatcher with OpenStreetMap & M-Pesa',
      duration: '25 min',
      youtubeId: 'dQw4w9WgXcQ',
      instructor: 'David Chen · Distributed Systems Architect'
    }
  },
  {
    id: 'ai-salon-beauty-studio',
    title: 'Salon, Barbershop & Spa Appointment Booking with M-Pesa Deposit',
    location: 'Urban Centers across Kenya, Nigeria, South Africa & UK',
    trendingRank: 4,
    marketGapSummary: 'Salons suffer from high client no-show rates (up to 40%) because bookings are done informally. Stylists double-book appointments and waste valuable hours on scheduling calls.',
    demandLevel: 'Very High',
    targetClients: 'Hair Salons, Braiding Specialists, Luxury Barbershops, Nail Studios',
    estimatedBuildTime: '3 Hours',
    softwareCostMonthly: 'KES 0 (Free Tier Stack)',
    earningRoadmap: {
      pricingStrategy: 'Charge KES 1,999 setup + KES 500/month hosting (The ImperionX Model)',
      starterIncomeKes: 'KES 29,990 / month (from 15 salons)',
      scaleIncomeKes: 'KES 75,000 / month (from 40 salons)',
      stepByStepPlan: [
        'Step 1: Clone the FutureTech ImperionX Salon Template in React & Tailwind.',
        'Step 2: Customize stylist photos, service price list, and working hours.',
        'Step 3: Connect Lipa na M-Pesa KES 200 deposit to secure client booking.',
        'Step 4: Automatically add booking to the stylist Google Calendar (Free API).',
        'Step 5: Send appointment reminder SMS 2 hours before the scheduled time.'
      ]
    },
    toolsToCombine: [
      { name: 'Lovable / v0', role: 'Creates visual salon booking UI with stylist avatars', isFreeTier: true, tierNote: 'Free starter tier', link: 'https://lovable.dev' },
      { name: 'Google Calendar API', role: 'Real-time booking slots with zero double-booking', isFreeTier: true, tierNote: 'Free API', link: 'https://developers.google.com' },
      { name: 'M-Pesa STK Push', role: 'Locks in KES 200 commitment deposit', isFreeTier: true, tierNote: 'Standard Lipa na M-Pesa', link: 'https://developer.safaricom.co.ke' },
      { name: 'Notion / Supabase', role: 'Merchant sees daily revenue and client contact list', isFreeTier: true, tierNote: 'Free tier', link: 'https://supabase.com' }
    ],
    pdfBlueprint: {
      title: 'Salon & Spa 24H App + M-Pesa Booking Blueprint PDF',
      pagesCount: 12,
      downloadPriceKes: 50,
      includedResources: [
        'Complete React salon template with booking calendar',
        'WhatsApp booking bot prompt script',
        'Salon marketing flyer templates',
        'Client onboarding agreement'
      ]
    },
    videoTutorial: {
      title: 'Deploying a 24-Hour Salon Booking App with Lipa na M-Pesa',
      duration: '22 min',
      youtubeId: 'dQw4w9WgXcQ',
      instructor: 'Sofia Mendez · Mobile Solutions Lead'
    }
  }
];
