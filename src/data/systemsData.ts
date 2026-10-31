export interface AgentToolItem {
  id: string;
  number: number;
  name: string;
  url: string;
  domain: string;
  tagline: string;
  category: 'Editor & Code' | 'MCP & Data' | 'Workflows' | 'Frameworks' | 'Swarm & Orchestration' | 'Inference & Models' | 'Sandboxes' | 'Vector DB & Memory' | 'Cloud Compute' | 'Prompting & Architecture';
  description: string;
  badge: string;
}

export const AGENT_STACK_20_TOOLS: AgentToolItem[] = [
  {
    id: 't1',
    number: 1,
    name: 'Cursor',
    url: 'https://cursor.com',
    domain: 'cursor.com',
    tagline: 'AI-first code editor',
    category: 'Editor & Code',
    description: 'Next-generation IDE with native semantic indexing, multi-file code editing, and integrated terminal debugging.',
    badge: 'Code Editor'
  },
  {
    id: 't2',
    number: 2,
    name: 'Oxylabs Web-API-MCP',
    url: 'https://github.com/oxylabs/web-api-mcp',
    domain: 'github.com/oxylabs/web-api-mcp',
    tagline: 'Oxylabs MCP server: live web search & scraping into any AI agent',
    category: 'MCP & Data',
    description: 'Production Model Context Protocol (MCP) server providing live web scraping, SERP queries, and proxy rotation for autonomous research.',
    badge: 'Live Web MCP'
  },
  {
    id: 't3',
    number: 3,
    name: 'n8n',
    url: 'https://n8n.io',
    domain: 'n8n.io',
    tagline: 'Build agent workflows visually',
    category: 'Workflows',
    description: 'Fair-code visual workflow orchestrator connecting LLMs, AI agents, custom HTTP webhooks, and 400+ enterprise connectors.',
    badge: 'Visual Workflow'
  },
  {
    id: 't4',
    number: 4,
    name: 'Model Context Protocol (MCP)',
    url: 'https://modelcontextprotocol.io',
    domain: 'modelcontextprotocol.io',
    tagline: 'Learn how MCP connects agents to tools',
    category: 'MCP & Data',
    description: 'Open standard developed by Anthropic allowing AI models to securely discover, negotiate, and query local files, databases, and APIs.',
    badge: 'Open Protocol'
  },
  {
    id: 't5',
    number: 5,
    name: 'LangChain',
    url: 'https://langchain.com',
    domain: 'langchain.com',
    tagline: 'Framework for LLM apps & agents',
    category: 'Frameworks',
    description: 'Standard composable library for Python and TypeScript to chain model prompts, memories, retrieval systems, and tool invocation.',
    badge: 'Core Framework'
  },
  {
    id: 't6',
    number: 6,
    name: 'CrewAI',
    url: 'https://crewai.com',
    domain: 'crewai.com',
    tagline: 'Run teams of AI agents',
    category: 'Swarm & Orchestration',
    description: 'Multi-agent orchestration framework where specialized autonomous agents collaborate with role-playing, goal delegation, and shared memory.',
    badge: 'Multi-Agent'
  },
  {
    id: 't7',
    number: 7,
    name: 'OpenRouter',
    url: 'https://openrouter.ai',
    domain: 'openrouter.ai',
    tagline: 'One API for hundreds of models',
    category: 'Inference & Models',
    description: 'Unified high-availability API gateway routing requests across Claude 3.7, GPT-4o, DeepSeek-R1, Llama 3, and Gemini with automated failover.',
    badge: 'Universal API'
  },
  {
    id: 't8',
    number: 8,
    name: 'Ollama',
    url: 'https://ollama.com',
    domain: 'ollama.com',
    tagline: 'Run open models locally',
    category: 'Inference & Models',
    description: 'Get up and running with large language models locally on Mac, Linux, and Windows with zero GPU cloud costs.',
    badge: 'Local Runner'
  },
  {
    id: 't9',
    number: 9,
    name: 'LM Studio',
    url: 'https://lmstudio.ai',
    domain: 'lmstudio.ai',
    tagline: 'Local LLMs with a simple app',
    category: 'Inference & Models',
    description: 'Desktop GUI to discover, download, and test GGUF models offline, exposing a local OpenAI-compatible endpoint.',
    badge: 'Desktop Runner'
  },
  {
    id: 't10',
    number: 10,
    name: 'Hugging Face',
    url: 'https://huggingface.co',
    domain: 'huggingface.co',
    tagline: 'Open models & datasets',
    category: 'Inference & Models',
    description: 'The premier open-source AI community hosting over 500k foundation models, fine-tuning checkpoints, and evaluation datasets.',
    badge: 'Model Hub'
  },
  {
    id: 't11',
    number: 11,
    name: 'E2B',
    url: 'https://e2b.dev',
    domain: 'e2b.dev',
    tagline: 'Secure sandboxes for agent code',
    category: 'Sandboxes',
    description: 'MicroVM cloud sandboxes allowing autonomous AI agents to write, execute, and debug Python and JavaScript code safely in milliseconds.',
    badge: 'Code Sandbox'
  },
  {
    id: 't12',
    number: 12,
    name: 'Composio',
    url: 'https://composio.dev',
    domain: 'composio.dev',
    tagline: 'Connect agents to hundreds of apps',
    category: 'MCP & Data',
    description: 'Production tooling platform allowing agents to trigger actions in GitHub, Slack, Gmail, Notion, Salesforce, and 250+ enterprise services.',
    badge: 'App Tooling'
  },
  {
    id: 't13',
    number: 13,
    name: 'Langfuse',
    url: 'https://langfuse.com',
    domain: 'langfuse.com',
    tagline: 'Trace & debug LLM calls',
    category: 'Workflows',
    description: 'Open-source LLM observability, tracing, cost attribution, and prompt evaluation platform for production agent swarms.',
    badge: 'Observability'
  },
  {
    id: 't14',
    number: 14,
    name: 'Pinecone',
    url: 'https://pinecone.io',
    domain: 'pinecone.io',
    tagline: 'Vector database for RAG',
    category: 'Vector DB & Memory',
    description: 'Managed serverless vector database providing sub-10ms nearest neighbor search over billions of semantic embeddings.',
    badge: 'Vector DB'
  },
  {
    id: 't15',
    number: 15,
    name: 'Qdrant',
    url: 'https://qdrant.tech',
    domain: 'qdrant.tech',
    tagline: 'Open-source vector search',
    category: 'Vector DB & Memory',
    description: 'Rust-based high-performance vector search engine featuring advanced payload filtering, quantization, and hybrid search.',
    badge: 'Open Vector DB'
  },
  {
    id: 't16',
    number: 16,
    name: 'Supabase',
    url: 'https://supabase.com',
    domain: 'supabase.com',
    tagline: 'Postgres backend with vector search',
    category: 'Vector DB & Memory',
    description: 'Full-stack PostgreSQL backend with pgvector embeddings, row-level security, auth, edge functions, and real-time streams.',
    badge: 'Postgres & Vector'
  },
  {
    id: 't17',
    number: 17,
    name: 'Together AI',
    url: 'https://together.ai',
    domain: 'together.ai',
    tagline: 'Fast inference for open models',
    category: 'Cloud Compute',
    description: 'Ultra-fast serverless API cloud serving Llama 3, DeepSeek, and Mixtral at industry-leading tokens-per-second benchmarks.',
    badge: 'Fast Inference'
  },
  {
    id: 't18',
    number: 18,
    name: 'Modal',
    url: 'https://modal.com',
    domain: 'modal.com',
    tagline: 'Run AI code on cloud GPUs',
    category: 'Cloud Compute',
    description: 'Serverless cloud compute platform allowing developers to run arbitrary Python container functions on A100/H100 GPUs in seconds.',
    badge: 'Cloud GPU'
  },
  {
    id: 't19',
    number: 19,
    name: 'Prompting Guide',
    url: 'https://promptingguide.ai',
    domain: 'promptingguide.ai',
    tagline: 'Learn prompt engineering',
    category: 'Prompting & Architecture',
    description: 'Comprehensive research guide on prompt engineering techniques: Chain-of-Thought, ReAct, Directional Stimulus, and DSPy.',
    badge: 'Curriculum'
  },
  {
    id: 't20',
    number: 20,
    name: 'Excalidraw',
    url: 'https://excalidraw.com',
    domain: 'excalidraw.com',
    tagline: 'Sketch your agent architecture',
    category: 'Prompting & Architecture',
    description: 'Virtual collaborative whiteboard tool to diagram agent control flows, state machines, and system architectures.',
    badge: 'Architecture'
  }
];

export interface TeamReplacementCategory {
  name: string;
  iconName: string;
  traditionalRole: string;
  traditionalCost: string;
  aiMonthlyCost: string;
  savingsMonthly: string;
  color: string;
  tools: {
    name: string;
    description: string;
    website: string;
    isPrimary?: boolean;
  }[];
}

export const TEAM_REPLACEMENT_50_DATA: TeamReplacementCategory[] = [
  {
    name: 'Image & Creative',
    iconName: 'Image',
    traditionalRole: 'Senior Graphic Designer / Illustrator',
    traditionalCost: '$3,500/mo',
    aiMonthlyCost: '$40/mo',
    savingsMonthly: '$3,460/mo',
    color: '#8B5CF6',
    tools: [
      { name: 'Midjourney', description: 'Photorealistic commercial assets & art direction', website: 'https://midjourney.com', isPrimary: true },
      { name: 'Stable Diffusion', description: 'Open weight generation with ControlNet precision', website: 'https://stability.ai' },
      { name: 'Flux', description: 'Next-gen typography and anatomical generation', website: 'https://blackforestlabs.ai', isPrimary: true },
      { name: 'Leonardo AI', description: 'Game asset, icon, and texture generator', website: 'https://leonardo.ai' },
      { name: 'Designs.ai', description: 'Automated banner creation and brand suites', website: 'https://designs.ai' },
      { name: 'DALL-E 3', description: 'Prompt-faithful semantic generation inside ChatGPT', website: 'https://openai.com' },
      { name: 'Lucidpic', description: 'Synthetic photo studio with customized avatar poses', website: 'https://lucidpic.com' }
    ]
  },
  {
    name: 'Video Production',
    iconName: 'Video',
    traditionalRole: 'Video Editor & Motion Designer',
    traditionalCost: '$4,000/mo',
    aiMonthlyCost: '$95/mo',
    savingsMonthly: '$3,905/mo',
    color: '#EC4899',
    tools: [
      { name: 'Descript', description: 'Text-based audio and video editor with studio sound', website: 'https://descript.com', isPrimary: true },
      { name: 'Vid AI', description: 'AI video generation and caption automation', website: 'https://vid.ai' },
      { name: 'Synthesia', description: 'AI human presenters and avatars in 120+ languages', website: 'https://synthesia.io', isPrimary: true },
      { name: 'Syllaby', description: 'Video script generator and content schedule planner', website: 'https://syllaby.io' },
      { name: 'RecCloud', description: 'Screen recording, subtitle translation, and AI speech', website: 'https://reccloud.com' },
      { name: 'Rendernet', description: 'Consistent character generation across multi-scene video', website: 'https://rendernet.ai' }
    ]
  },
  {
    name: 'Full-Stack Code',
    iconName: 'Code',
    traditionalRole: 'Junior-to-Mid Software Engineers',
    traditionalCost: '$6,000/mo',
    aiMonthlyCost: '$60/mo',
    savingsMonthly: '$5,940/mo',
    color: '#3B82F6',
    tools: [
      { name: 'Cursor', description: 'AI IDE that writes, refactors, and fixes entire repos', website: 'https://cursor.com', isPrimary: true },
      { name: 'Lovable', description: 'Full-stack web application builder from prompt to Supabase', website: 'https://lovable.dev', isPrimary: true },
      { name: 'Replit Agent', description: 'Autonomous agent that scaffolds and deploys full apps', website: 'https://replit.com' },
      { name: 'n8n', description: 'Self-hosted AI agent workflow automation', website: 'https://n8n.io' },
      { name: 'Tabnine', description: 'Private enterprise AI code completion engine', website: 'https://tabnine.com' },
      { name: 'Mintlify', description: 'Automated interactive technical documentation', website: 'https://mintlify.com' }
    ]
  },
  {
    name: 'Websites & Landing Pages',
    iconName: 'Globe',
    traditionalRole: 'Web Agency / Frontend Developer',
    traditionalCost: '$2,500/mo',
    aiMonthlyCost: '$35/mo',
    savingsMonthly: '$2,465/mo',
    color: '#06B6D4',
    tools: [
      { name: 'Framer', description: 'Interactive React-based designer with AI layout generation', website: 'https://framer.com', isPrimary: true },
      { name: 'Relume', description: 'AI site builder, wireframing, and Figma component exporter', website: 'https://relume.io', isPrimary: true },
      { name: 'Wix AI', description: 'Instant responsive business websites with M-Pesa/Stripe checkout', website: 'https://wix.com' },
      { name: 'Shuffle', description: 'Visual UI builder for Tailwind, Bootstrap, and Bulma', website: 'https://shuffle.dev' },
      { name: 'Dorik', description: 'White-label CMS and client portal builder', website: 'https://dorik.com' },
      { name: 'Durable', description: 'Builds complete local business websites in 30 seconds', website: 'https://durable.co' }
    ]
  },
  {
    name: 'SEO & Growth Marketing',
    iconName: 'TrendingUp',
    traditionalRole: 'SEO Manager & Content Strategist',
    traditionalCost: '$3,200/mo',
    aiMonthlyCost: '$120/mo',
    savingsMonthly: '$3,080/mo',
    color: '#F97316',
    tools: [
      { name: 'Surfer SEO', description: 'Data-driven content optimization and NLP term scoring', website: 'https://surferseo.com', isPrimary: true },
      { name: 'SEMrush', description: 'Competitive intelligence, keyword magic, and backlink audit', website: 'https://semrush.com', isPrimary: true },
      { name: 'SEOJuice', description: 'Internal linking automation with zero manual tagging', website: 'https://seojuice.com' },
      { name: 'Seona AI', description: 'Autonomous weekly SEO fixes directly injected into code', website: 'https://styleai.com/seona' },
      { name: 'SEOWriting AI', description: 'One-click long-form affiliate articles with citations', website: 'https://seowriting.ai' },
      { name: 'VidIQ', description: 'YouTube video keyword prediction and title generator', website: 'https://vidiq.com' }
    ]
  },
  {
    name: 'Chatbots & Customer Support',
    iconName: 'MessageSquare',
    traditionalRole: 'Customer Support Representative (2 FTEs)',
    traditionalCost: '$2,400/mo',
    aiMonthlyCost: '$49/mo',
    savingsMonthly: '$2,351/mo',
    color: '#10B981',
    tools: [
      { name: 'ChatGPT', description: 'Custom GPTs with action APIs and corporate knowledge', website: 'https://chatgpt.com', isPrimary: true },
      { name: 'Chatbase', description: 'Embeddable custom AI chatbot trained on your docs and Zendesk', website: 'https://chatbase.co', isPrimary: true },
      { name: 'SiteGPT', description: 'Instant chatbot for your website with zero configuration', website: 'https://sitegpt.ai' },
      { name: 'Aidbase.ai', description: 'AI ticketing, email auto-responders, and helpdesk triage', website: 'https://aidbase.ai' },
      { name: 'DeepSeek', description: 'High-reasoning open-weights model for mathematical logic', website: 'https://deepseek.com' },
      { name: 'Chatsonic', description: 'Real-time conversational bot grounded with Google search', website: 'https://writesonic.com/chat' }
    ]
  },
  {
    name: 'Writing & Copywriting',
    iconName: 'PenTool',
    traditionalRole: 'Copywriter & Technical Writer',
    traditionalCost: '$3,000/mo',
    aiMonthlyCost: '$30/mo',
    savingsMonthly: '$2,970/mo',
    color: '#EAB308',
    tools: [
      { name: 'Claude', description: 'Anthropic reasoning model with human-like prose and nuance', website: 'https://claude.ai', isPrimary: true },
      { name: 'Jasper', description: 'Enterprise brand voice, campaign briefs, and marketing copy', website: 'https://jasper.ai', isPrimary: true },
      { name: 'FeedHive', description: 'AI social media copy, schedule recycle, and viral scoring', website: 'https://feedhive.com' },
      { name: 'Writesonic', description: 'High-conversion sales pages, landing page headlines, and ads', website: 'https://writesonic.com' },
      { name: 'Jenni AI', description: 'Academic paper co-writer with literature review citations', website: 'https://jenni.ai' },
      { name: 'QuillBot', description: 'Paraphraser, grammar checker, and tone rewording tool', website: 'https://quillbot.com' }
    ]
  },
  {
    name: 'Idea & Deep Research',
    iconName: 'Search',
    traditionalRole: 'Market Research Analyst',
    traditionalCost: '$4,200/mo',
    aiMonthlyCost: '$20/mo',
    savingsMonthly: '$4,180/mo',
    color: '#38BDF8',
    tools: [
      { name: 'Perplexity Pro', description: 'Real-time multi-source research engine with citations', website: 'https://perplexity.ai', isPrimary: true },
      { name: 'Gemini Deep Research', description: 'Multi-step autonomous agent browsing dozens of technical papers', website: 'https://gemini.google.com', isPrimary: true },
      { name: 'Monica AI', description: 'All-in-one browser sidebar assistant for instant page summaries', website: 'https://monica.im' },
      { name: 'HIX.AI', description: 'Comprehensive research, translation, and search intelligence', website: 'https://hix.ai' },
      { name: 'Ideanote', description: 'Innovation funnel to collect, evaluate, and launch team ideas', website: 'https://ideanote.io' },
      { name: 'Behance', description: 'Global design research and visual trend discovery', website: 'https://behance.net' }
    ]
  }
];

export interface EssentialSkillItem {
  number: number;
  title: string;
  focus: string;
  tools: string[];
  courseSlug: string;
  difficulty: 'Fundamental' | 'Intermediate' | 'Advanced';
  marketDemand: 'Ultra-High' | 'High' | 'Exploding';
  earningBenchmark: string;
}

export const ESSENTIAL_AI_SKILLS_9: EssentialSkillItem[] = [
  {
    number: 1,
    title: 'Prompt Engineering',
    focus: 'Learn to write precise, structured prompts that give AI the right context and goal so it produces useful, reliable answers.',
    tools: ['ChatGPT', 'Claude 3.7', 'Gemini 2.0'],
    courseSlug: 'enterprise-ai-llm-architecture',
    difficulty: 'Fundamental',
    marketDemand: 'High',
    earningBenchmark: '$2,500 – $5,000 / month'
  },
  {
    number: 2,
    title: 'AI Workflow Automation',
    focus: 'Link multiple apps together using automation tools so AI handles repetitive tasks like scheduling, data entry, or content delivery.',
    tools: ['Zapier', 'Make', 'n8n'],
    courseSlug: 'autonomous-ai-agents-production',
    difficulty: 'Intermediate',
    marketDemand: 'Exploding',
    earningBenchmark: '$4,000 – $8,000 / month'
  },
  {
    number: 3,
    title: 'Autonomous AI Agents',
    focus: 'Build multi-step systems where AI agents work together, remember context, and complete complex tasks without human input.',
    tools: ['CrewAI', 'LangChain', 'AutoGPT / Autogen'],
    courseSlug: 'autonomous-ai-agents-production',
    difficulty: 'Advanced',
    marketDemand: 'Exploding',
    earningBenchmark: '$6,000 – $12,000 / month'
  },
  {
    number: 4,
    title: 'Retrieval-Augmented Generation (RAG)',
    focus: 'Connect LLMs to your private data such as PDFs, documents, or databases so they give source-backed, accurate responses with zero hallucination.',
    tools: ['LangChain', 'Vectara', 'LlamaIndex', 'Pinecone'],
    courseSlug: 'enterprise-ai-llm-architecture',
    difficulty: 'Advanced',
    marketDemand: 'Ultra-High',
    earningBenchmark: '$5,500 – $10,000 / month'
  },
  {
    number: 5,
    title: 'Fine-Tuning & Custom Models',
    focus: 'Train or adapt existing models for a specific task or brand to make them smarter, domain-aligned, and significantly more cost-effective.',
    tools: ['OpenAI Fine-Tuning', 'Hugging Face', 'Cohere'],
    courseSlug: 'enterprise-ai-llm-architecture',
    difficulty: 'Advanced',
    marketDemand: 'High',
    earningBenchmark: '$7,000 – $14,000 / month'
  },
  {
    number: 6,
    title: 'Multimodal AI Engineering',
    focus: 'Work with AI that understands and generates text, images, video, and audio simultaneously in unified perception pipelines.',
    tools: ['Gemini 2.0 Multimodal', 'GPT-4o Vision', 'Grok Vision'],
    courseSlug: 'generative-ai-video-production',
    difficulty: 'Intermediate',
    marketDemand: 'Ultra-High',
    earningBenchmark: '$5,000 – $9,000 / month'
  },
  {
    number: 7,
    title: 'AI Video & Media Generation',
    focus: 'Turn concepts, scripts, or images into dynamic broadcast-quality video content and commercial campaigns quickly and effortlessly.',
    tools: ['Runway Gen-3', 'OpusClip', 'Pika Labs', 'ElevenLabs'],
    courseSlug: 'generative-ai-video-production',
    difficulty: 'Intermediate',
    marketDemand: 'High',
    earningBenchmark: '$3,500 – $7,000 / month'
  },
  {
    number: 8,
    title: 'AI Tool Stacking & Operations',
    focus: 'Combine distinct AI and productivity apps into cohesive end-to-end operational software for modern lean businesses.',
    tools: ['Notion AI', 'ClickUp AI', 'Zapier Central', 'Supabase'],
    courseSlug: 'nextjs-fullstack-saas-architecture',
    difficulty: 'Fundamental',
    marketDemand: 'High',
    earningBenchmark: '$3,000 – $6,500 / month'
  },
  {
    number: 9,
    title: 'LLM Evaluation & Observability',
    focus: 'Track, trace, benchmark, and improve your AI systems accuracy, latency, token costs, and response quality in production environments.',
    tools: ['Helicone', 'PromptLayer', 'TruLens', 'Langfuse'],
    courseSlug: 'distributed-systems-cloud-architecture',
    difficulty: 'Advanced',
    marketDemand: 'Exploding',
    earningBenchmark: '$6,500 – $13,000 / month'
  }
];

export interface ImperionxAgencySystem {
  headline: string;
  subheadline: string;
  priceKes: number;
  originalPriceKes: number;
  deliveryTimeHours: number;
  guaranteedFeatures: string[];
  transformation: {
    beforeProblem: string;
    beforeImageNote: string;
    afterSolution: string;
    afterImageNote: string;
  };
  sampleUseCases: {
    businessType: string;
    icon: string;
    appFeatures: string;
    dailyVolumeKes: string;
  }[];
}

export const IMPERIONX_AGENCY_BLUEPRINT: ImperionxAgencySystem = {
  headline: 'Get Your Business App + Website For 1,999 KES',
  subheadline: 'We Build It In 24 Hours With 50+ Frontier AI Tools',
  priceKes: 1999,
  originalPriceKes: 5000,
  deliveryTimeHours: 24,
  guaranteedFeatures: [
    'Custom Branded Mobile Web App (PWA installed directly on customer phone)',
    'Fast Responsive Website with WhatsApp Order Routing',
    'Direct M-Pesa STK Push Payment Integration (Lipa na M-Pesa)',
    'Real-time Merchant Sales Dashboard with Transaction Graphs',
    '24-Hour Express Turnaround powered by FutureTech AI templates'
  ],
  transformation: {
    beforeProblem: 'Manual paperwork, lost receipts, unrecorded cash, painful debt tracking in paper notebooks, and zero visibility into daily revenue.',
    beforeImageNote: 'Merchant burdened by chaotic manual ledgers, stacks of paper currency, and high transaction reconciliation stress.',
    afterSolution: 'Sleek smartphone sales dashboard showing KES 24,500+ daily sales, 18 automated M-Pesa payments, and instant client receipts.',
    afterImageNote: 'Smiling merchant managing orders smoothly on an intuitive smartphone dashboard with automated M-Pesa verification.'
  },
  sampleUseCases: [
    {
      businessType: 'Salons, Braids, Nails & Beauty Parlours',
      icon: 'Scissors',
      appFeatures: 'Appointment slot booking, stylist selection, deposit payment via M-Pesa, automated SMS reminders.',
      dailyVolumeKes: 'KES 15,000 – KES 45,000'
    },
    {
      businessType: 'Hardware, Spare Parts & Building Materials',
      icon: 'Wrench',
      appFeatures: 'Instant inventory lookup, contractor WhatsApp quotes, invoice generation, M-Pesa Till number receipts.',
      dailyVolumeKes: 'KES 35,000 – KES 120,000'
    },
    {
      businessType: 'Boutiques, Footwear & Apparel Shops',
      icon: 'ShoppingBag',
      appFeatures: 'Visual product catalog, stock size availability, 1-tap WhatsApp checkout, doorstep delivery tracking.',
      dailyVolumeKes: 'KES 18,000 – KES 50,000'
    },
    {
      businessType: 'Pharmacy, Chemists & Wellness Clinics',
      icon: 'HeartPulse',
      appFeatures: 'Prescription upload, medicine price check, confidential patient chat, refill notifications.',
      dailyVolumeKes: 'KES 25,000 – KES 80,000'
    }
  ]
};
