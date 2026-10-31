export interface FreeTierTool {
  id: string;
  name: string;
  category: 'Frontend & UI' | 'Backend & DB' | 'AI Model & Reasoning' | 'Payments & Monies' | 'Automation & Webhooks' | 'Media & Graphics';
  freeTierPerks: string;
  monthlyCost: '$0 Free';
  logoPlaceholder: string;
}

export interface CombinationRecipe {
  id: string;
  title: string;
  tagline: string;
  monetizationOutcome: string;
  earningPotentialKes: string;
  timeToBuild: string;
  combinedTools: FreeTierTool[];
  architectureFlow: {
    step: number;
    title: string;
    description: string;
    toolName: string;
  }[];
  interactiveLayoutPreview: {
    headline: string;
    summary: string;
    elements: string[];
  };
}

export const FREE_TIER_TOOLS_POOL: FreeTierTool[] = [
  {
    id: 'v0-dev',
    name: 'v0 by Vercel',
    category: 'Frontend & UI',
    freeTierPerks: 'Generates polished Tailwind CSS React interfaces from English prompts',
    monthlyCost: '$0 Free',
    logoPlaceholder: 'v0'
  },
  {
    id: 'supabase-free',
    name: 'Supabase Free Tier',
    category: 'Backend & DB',
    freeTierPerks: '500MB PostgreSQL, Row Level Security, Auth & Realtime WebSockets',
    monthlyCost: '$0 Free',
    logoPlaceholder: 'SB'
  },
  {
    id: 'daraja-mpesa',
    name: 'M-Pesa Daraja 3.0',
    category: 'Payments & Monies',
    freeTierPerks: 'Free developer sandbox, zero monthly maintenance fee for Lipa na M-Pesa',
    monthlyCost: '$0 Free',
    logoPlaceholder: 'MP'
  },
  {
    id: 'ollama-deepseek',
    name: 'Ollama + DeepSeek-R1',
    category: 'AI Model & Reasoning',
    freeTierPerks: '100% Free local AI reasoning running offline on your laptop',
    monthlyCost: '$0 Free',
    logoPlaceholder: 'OL'
  },
  {
    id: 'n8n-selfhosted',
    name: 'n8n Self-Hosted',
    category: 'Automation & Webhooks',
    freeTierPerks: 'Unlimited visual agent workflow automations on free cloud runner',
    monthlyCost: '$0 Free',
    logoPlaceholder: 'N8'
  },
  {
    id: 'vercel-free',
    name: 'Vercel Hobby Tier',
    category: 'Frontend & UI',
    freeTierPerks: 'Unlimited edge deploys, free SSL certificates, 100GB monthly bandwidth',
    monthlyCost: '$0 Free',
    logoPlaceholder: 'VC'
  },
  {
    id: 'canva-free',
    name: 'Canva AI Free',
    category: 'Media & Graphics',
    freeTierPerks: 'Fast social media marketing flyers, pitch decks, and client mockups',
    monthlyCost: '$0 Free',
    logoPlaceholder: 'CV'
  },
  {
    id: 'whatsapp-business',
    name: 'WhatsApp Business API',
    category: 'Automation & Webhooks',
    freeTierPerks: 'Direct wa.me payment links and automated catalog order routing',
    monthlyCost: '$0 Free',
    logoPlaceholder: 'WA'
  }
];

export const COMBINATION_RECIPES: CombinationRecipe[] = [
  {
    id: 'rec-1',
    title: 'The 24H Local Business Mobile App + M-Pesa System',
    tagline: 'Combine v0 + Supabase + Daraja M-Pesa + WhatsApp',
    monetizationOutcome: 'Sell to local shops, salons & chemists for KES 1,999 – 15,000 setup + KES 500/mo',
    earningPotentialKes: 'KES 35,000 – KES 95,000 / month',
    timeToBuild: '4 Hours',
    combinedTools: [
      FREE_TIER_TOOLS_POOL[0], // v0
      FREE_TIER_TOOLS_POOL[1], // Supabase
      FREE_TIER_TOOLS_POOL[2], // M-Pesa
      FREE_TIER_TOOLS_POOL[7]  // WhatsApp
    ],
    architectureFlow: [
      { step: 1, toolName: 'v0 by Vercel', title: 'Generate UI', description: 'Prompt: "Create a modern mobile booking app for a Nairobi salon with stylist cards, service price list, and M-Pesa payment button."' },
      { step: 2, toolName: 'Supabase', title: 'Store Data', description: 'Create a free database table with appointments, service names, and transaction IDs.' },
      { step: 3, toolName: 'Daraja M-Pesa', title: 'Collect Cash', description: 'Trigger STK push when user taps "Pay KES 200 Booking Deposit".' },
      { step: 4, toolName: 'WhatsApp Business', title: 'Notify Merchant', description: 'Route confirmed order directly to salon owner phone with appointment time.' }
    ],
    interactiveLayoutPreview: {
      headline: 'Zuri Beauty Studio App (Live Layout)',
      summary: 'Clean mobile web app with 1-click M-Pesa STK deposit and instant booking calendar.',
      elements: ['Stylist Avatar Gallery', 'Service Price Matrix', 'Lipa na M-Pesa STK Button', 'Live Merchant Sales Graph']
    }
  },
  {
    id: 'rec-2',
    title: 'Zero-Cost Autonomous Customer Support Agent',
    tagline: 'Combine Ollama + n8n + WhatsApp Webhook + Supabase',
    monetizationOutcome: 'Deploy automated 24/7 client support bots for e-commerce brands & property agents',
    earningPotentialKes: 'KES 25,000 – KES 60,000 / month retainers',
    timeToBuild: '6 Hours',
    combinedTools: [
      FREE_TIER_TOOLS_POOL[3], // Ollama
      FREE_TIER_TOOLS_POOL[4], // n8n
      FREE_TIER_TOOLS_POOL[1], // Supabase
      FREE_TIER_TOOLS_POOL[7]  // WhatsApp
    ],
    architectureFlow: [
      { step: 1, toolName: 'Ollama', title: 'Local AI Brain', description: 'Run DeepSeek-R1 or Llama 3 locally for free with zero API token costs.' },
      { step: 2, toolName: 'Supabase Vector', title: 'Company Knowledge', description: 'Store company product FAQs, return policies, and stock availability as vector embeddings.' },
      { step: 3, toolName: 'n8n Workflow', title: 'Connect Actions', description: 'Ingest WhatsApp messages, query the local AI brain, and return human-sounding responses in under 2 seconds.' },
      { step: 4, toolName: 'WhatsApp Business', title: 'Automate Responses', description: 'Zero missed inquiries, automatic human handoff when client wants to place a large order.' }
    ],
    interactiveLayoutPreview: {
      headline: 'Apex Auto Parts 24/7 AI WhatsApp Agent',
      summary: 'Answers vehicle spare parts inquiries, checks warehouse stock, and sends M-Pesa Paybill details automatically.',
      elements: ['Instant Part Number Lookup', 'Vehicle Model Compatibility Check', 'Automated Delivery Quote', 'Human Escalation Button']
    }
  },
  {
    id: 'rec-3',
    title: 'High-Ticket International Freelancer Showcase Portfolio',
    tagline: 'Combine Cursor + Tailwind CSS + Vercel + Canva AI',
    monetizationOutcome: 'Land high-paying US & European remote development contracts ($500 – $2,500)',
    earningPotentialKes: 'KES 65,000 – KES 300,000 / contract',
    timeToBuild: '3 Hours',
    combinedTools: [
      FREE_TIER_TOOLS_POOL[0], // v0 / Cursor
      FREE_TIER_TOOLS_POOL[5], // Vercel
      FREE_TIER_TOOLS_POOL[6]  // Canva AI
    ],
    architectureFlow: [
      { step: 1, toolName: 'Canva AI', title: 'Branding & Identity', description: 'Generate high-resolution logo mark, client case study graphics, and pitch deck.' },
      { step: 2, toolName: 'Cursor / v0', title: 'Build Portfolio', description: 'Scaffold a dark-mode, high-conversion engineering authority portfolio with interactive demos.' },
      { step: 3, toolName: 'Vercel Hobby', title: 'Free Global Hosting', description: 'Deploy with custom domain and edge CDN with 100% uptime and sub-second load times.' }
    ],
    interactiveLayoutPreview: {
      headline: 'International Tech Consultant Authority Portal',
      summary: 'Showcases verifiable GitHub repositories, live demo systems, and direct booking calendar for international clients.',
      elements: ['Proof-of-Work Video Demos', 'Client Outcome Case Studies', 'Cal.com Meeting Scheduler', 'Cryptographic Verified Credentials']
    }
  }
];
