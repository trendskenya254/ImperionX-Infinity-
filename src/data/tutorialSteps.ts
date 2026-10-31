import { TutorialSequence, TutorialStep } from '../types/tutorial';
import { ASSETS } from './assets';

export const COURSE_TUTORIALS: Record<string, TutorialSequence> = {
  'ai-agents-production': {
    id: 'tut-ai-agents',
    title: 'Hands-On Tutorial: Building Autonomous Multi-Agent Swarms',
    subtitle: 'A step-by-step visual blueprint from model to data to production serverless deployment.',
    badge: 'Production Lab Walkthrough',
    category: 'Autonomous Systems',
    estimatedMinutes: 25,
    steps: [
      {
        id: 'agent-step-1',
        stepNumber: 1,
        title: 'Environment & MCP Protocol Wiring',
        subtitle: 'Configure Cursor, Model Context Protocol (MCP), and secure API keys',
        caption: 'Initialize your agent environment using Cursor and connect external tools via Model Context Protocol (MCP) servers for live web scraping and database queries.',
        fullExplanation: 'MCP (Model Context Protocol) allows your agent to dynamically inspect file schemas, run bash commands in isolated sandboxes, and query databases without hardcoding API endpoints. By using Cursor with MCP, you configure an agent capable of self-debugging code and executing live web searches without human intervention.',
        imageUrl: ASSETS.aiAgents20Stack,
        badge: 'Step 01 · Architecture',
        tags: ['Cursor', 'Model Context Protocol', 'n8n', 'Python 3.12'],
        codeSnippet: 'git clone https://github.com/futuretech/agent-swarm-starter.git\ncd agent-swarm-starter && cp .env.example .env\npython -m venv venv && source venv/bin/activate && pip install crewai langgraph e2b-code-interpreter',
        practicalTip: 'Pro Tip: Always configure an MCP sandbox before giving your agent write privileges to prevent uncontrolled filesystem modifications during autonomous self-healing loops.'
      },
      {
        id: 'agent-step-2',
        stepNumber: 2,
        title: 'Hierarchical Crew & State Graph Assembly',
        subtitle: 'Structure supervisor nodes and specialized worker agent roles',
        caption: 'Assemble your agent swarm with CrewAI and LangGraph. Assign strict roles: Researcher, Auditor, Invariant Checker, and Executive Synthesizer.',
        fullExplanation: 'A single monolithic prompt hallucinates on complex workflows. In this step, we decouple the task into 4 distinct agent nodes connected through a directed acyclic state graph (DAG). The Supervisor agent routes intermediate JSON outputs, while the Invariant Checker validates all mathematical reconciliation before state transition.',
        imageUrl: ASSETS.deadlyAiTools8,
        badge: 'Step 02 · Agent Topology',
        tags: ['CrewAI', 'LangGraph', 'State Management', 'JSON Schema'],
        codeSnippet: 'from crewai import Agent, Crew, Process, Task\n\nauditor = Agent(role="Due Diligence Auditor", goal="Reconcile SEC 10-K balance sheets", backstory="Ex-Big4 forensic CPA", verbose=True)\nsupervisor = Agent(role="Executive Orchestrator", goal="Synthesize multi-agent audit memos", verbose=True)',
        practicalTip: 'Notice: Enforce Pydantic validation schemas on all agent tool outputs. If a worker outputs malformed JSON, the supervisor automatically triggers a retry reflection node.'
      },
      {
        id: 'agent-step-3',
        stepNumber: 3,
        title: 'Sandboxed Python Execution with E2B',
        subtitle: 'Run dynamically generated code safely in isolated cloud micro-VMs',
        caption: 'Equip your agent with the E2B code sandbox to execute Python calculations, graph plot generation, and data parsing without risk to host infrastructure.',
        fullExplanation: 'Autonomous agents must execute arbitrary code to solve real-world problems. E2B provides sub-second container sandboxes where agents can pip install packages, parse dirty CSV files, run mathematical models, and return raw figures safely.',
        imageUrl: ASSETS.aiTools50Wheel,
        badge: 'Step 03 · Execution Sandbox',
        tags: ['E2B Cloud Sandboxes', 'Safe Code Execution', 'Docker', 'Sub-second Boot'],
        codeSnippet: 'from e2b_code_interpreter import Sandbox\n\ndef execute_code_sandboxed(code: str):\n    with Sandbox() as sandbox:\n        execution = sandbox.run_code(code)\n        return execution.results, execution.logs.stdout',
        practicalTip: 'Save Money: E2B provides 100+ free sandbox minutes each month—perfect for prototyping your B2B SaaS without cloud bills.'
      },
      {
        id: 'agent-step-4',
        stepNumber: 4,
        title: 'M-Pesa Webhook & Real-Time WhatsApp Alert Dispatch',
        subtitle: 'Wire real payment triggers and client notification channels',
        caption: 'Connect Safaricom Daraja STK push and WhatsApp Business API so your autonomous agent delivers instant invoices and status updates directly to clients.',
        fullExplanation: 'Monetization requires zero-friction payment confirmation. In this step, we bind Safaricom Daraja 2.0 webhooks into FastAPI. When a customer sends KES 1,999 or KES 50 via Lipa na M-Pesa, the webhook triggers the agent swarm immediately and dispatches an automated PDF receipt over WhatsApp Business.',
        imageUrl: ASSETS.imperionxMpesaChat,
        badge: 'Step 04 · Monetization Integration',
        tags: ['Daraja 2.0', 'M-Pesa STK Push', 'WhatsApp API', 'FastAPI'],
        codeSnippet: '@app.post("/api/v1/mpesa/callback")\nasync def mpesa_callback(payload: dict):\n    trans_id = payload["Body"]["stkCallback"]["CallbackMetadata"]["Item"][1]["Value"]\n    await agent_swarm.execute_client_brief(trans_id)\n    return {"ResultCode": 0, "ResultDesc": "Accepted"}',
        practicalTip: 'Local Insight: In Kenya, 89% of business transactions complete via M-Pesa. Adding an instant STK push doubles your SaaS conversion rate over card payments.'
      },
      {
        id: 'agent-step-5',
        stepNumber: 5,
        title: 'Zero-Downtime Serverless Deployment & Observability',
        subtitle: 'Deploy onto Modal cloud GPUs with LangSmith telemetry tracking',
        caption: 'Deploy your completed multi-agent system onto serverless infrastructure (Modal / Cloud Run) with full LangSmith tracing for latency, token costs, and accuracy.',
        fullExplanation: 'Your agent is now complete. In this final step, we package the FastAPI microservice into a serverless Modal container with auto-scaling down to zero when idle, ensuring your monthly cloud hosting bill is virtually $0 until paying clients start submitting tasks.',
        imageUrl: ASSETS.heroAcademy,
        badge: 'Step 05 · Cloud Production',
        tags: ['Modal.com', 'LangSmith', 'Serverless GPU', 'Auto-scaling'],
        codeSnippet: 'modal deploy server.py --name agent-financial-swarm\n# Production endpoint active: https://futuretech--agent-financial-swarm.modal.run',
        practicalTip: 'Milestone: You now possess a production-ready autonomous agent ready to bill B2B clients between $4,500 and $8,000 per implementation.'
      }
    ]
  },

  'ai-prompt-engineering': {
    id: 'tut-prompt-llm',
    title: 'Hands-On Tutorial: Enterprise LLM Architecture & RAG Pipelines',
    subtitle: 'From tokenizer mechanics to sub-second vector search and LoRA fine-tuning.',
    badge: 'Enterprise Architecture Lab',
    category: 'LLM Engineering',
    estimatedMinutes: 20,
    steps: [
      {
        id: 'llm-step-1',
        stepNumber: 1,
        title: 'Attention Mechanics & Context Budgeting',
        subtitle: 'Understand KV Cache memory bottlenecks and RoPE scaling in modern LLMs',
        caption: 'Visualize how transformer attention tokens flow and how to budget context windows to prevent reasoning degradation during long-document analysis.',
        fullExplanation: 'LLMs suffer from context dilution if documents are shoved unselectively into the prompt. We calculate token density, inspect self-attention weights, and structure system prompts with delimiter tags (<context>, <instruction>, <grounding>) to ensure zero hallucinations.',
        imageUrl: ASSETS.essentialAiSkills9,
        badge: 'Step 01 · Transformer Mechanics',
        tags: ['Attention', 'Context Window', 'RoPE', 'System Prompts'],
        codeSnippet: 'from tiktoken import get_encoding\nenc = get_encoding("cl100k_base")\ntokens = len(enc.encode(contract_document))\nprint(f"Context Tokens: {tokens} | Estimated KV Cache: {tokens * 0.000128:.2f} MB")',
        practicalTip: 'Keep context under 8k tokens for initial reasoning turns to maintain sub-second time-to-first-token (TTFT).'
      },
      {
        id: 'llm-step-2',
        stepNumber: 2,
        title: 'Hybrid Semantic & BM25 Vector RAG Indexing',
        subtitle: 'Combine keyword precision with dense embeddings in Qdrant & Pinecone',
        caption: 'Build a production RAG pipeline using hierarchical parent-child chunking with hybrid BM25 and dense vector embeddings to achieve 98.4% retrieval recall.',
        fullExplanation: 'Pure vector search struggles with acronyms, part numbers, and Kenyan legal codes. Hybrid search fuses dense semantic embeddings with sparse BM25 indices via Reciprocal Rank Fusion (RRF), ensuring every query finds exact contract clauses.',
        imageUrl: ASSETS.aiTools50Wheel,
        badge: 'Step 02 · Hybrid RAG',
        tags: ['Qdrant', 'Pinecone', 'Reciprocal Rank Fusion', 'Hybrid Search'],
        codeSnippet: 'client.query_points(\n  collection_name="legal_vault",\n  query=SparseVector(indices=[14, 203], values=[0.8, 1.2]),\n  using="hybrid",\n  limit=5\n)',
        practicalTip: 'Always pass query rewrites through an agentic expansion node to handle user typos and colloquial Swahili/English phrasing.'
      },
      {
        id: 'llm-step-3',
        stepNumber: 3,
        title: 'Parameter-Efficient LoRA Fine-Tuning with Unsloth',
        subtitle: 'Train open-weight models (Llama 3, DeepSeek) on free Google Colab T4 GPUs',
        caption: 'Fine-tune 8B parameter models on domain-specific datasets using Unsloth and QLoRA at 5x faster speed with 70% less VRAM consumption.',
        fullExplanation: 'When prompting is not enough to enforce strict Kenyan legal nomenclature, we fine-tune a model using Low-Rank Adaptation (LoRA). Unsloth custom kernels allow training on a free T4 GPU in 35 minutes.',
        imageUrl: ASSETS.secretAiTools20,
        badge: 'Step 03 · QLoRA Fine-Tuning',
        tags: ['Unsloth', 'QLoRA', 'Llama 3.3', 'Hugging Face'],
        codeSnippet: 'from unsloth import FastLanguageModel\nmodel, tokenizer = FastLanguageModel.from_pretrained(\n    model_name="unsloth/llama-3-8b-bnb-4bit",\n    max_seq_length=4096,\n    load_in_4bit=True\n)',
        practicalTip: 'Focus 90% of your effort on cleaning your 500-sample JSONL training dataset rather than tweaking hyperparameters.'
      },
      {
        id: 'llm-step-4',
        stepNumber: 4,
        title: 'Evaluation Benchmarks & Production Serving',
        subtitle: 'Measure faithfulness with Ragas and deploy high-throughput vLLM engine',
        caption: 'Implement automated regression testing with the Ragas benchmark framework and deploy your model behind vLLM with PagedAttention for 100+ concurrent users.',
        fullExplanation: 'Never deploy an LLM system without automated faithfulness scoring. We set up an evaluation harness checking answer relevance, context recall, and hallucination rates before pushing new model weights to production.',
        imageUrl: ASSETS.practicalTechShowcase,
        badge: 'Step 04 · Production Serving',
        tags: ['vLLM', 'Ragas', 'PagedAttention', 'Production SLA'],
        codeSnippet: 'python -m vllm.entrypoints.openai.api_server --model meta-llama/Llama-3-8B-Instruct --gpu-memory-utilization 0.90 --port 8000',
        practicalTip: 'Milestone: Your enterprise RAG engine is now fully benchmarked with a verified 98.4% accuracy score.'
      }
    ]
  },

  'nextjs-fullstack-saas': {
    id: 'tut-fullstack-saas',
    title: 'Hands-On Tutorial: Full-Stack SaaS with Next.js, Supabase & M-Pesa',
    subtitle: 'Build a multi-tenant client portal from blank folder to paying subscribers in 4 steps.',
    badge: 'Full-Stack Lab Walkthrough',
    category: 'Web Engineering',
    estimatedMinutes: 20,
    steps: [
      {
        id: 'saas-step-1',
        stepNumber: 1,
        title: 'Project Setup & Multi-Tenant Supabase Schema',
        subtitle: 'Initialize Next.js 15 App Router, TypeScript, and Row Level Security (RLS)',
        caption: 'Scaffold your SaaS with Next.js 15, Tailwind CSS, and configure Supabase PostgreSQL with strict Row Level Security policies so tenants cannot access each other data.',
        fullExplanation: 'A production SaaS requires secure data partitioning. We write SQL migrations defining organizations, memberships, and billing tiers, backed by Postgres RLS policies that automatically filter queries based on the authenticated JWT token.',
        imageUrl: ASSETS.imperionxBeforeAfter,
        badge: 'Step 01 · Schema & RLS',
        tags: ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL RLS'],
        codeSnippet: 'npx create-next-app@latest future-saas --typescript --tailwind --app\n# In Supabase SQL Editor:\ncreate policy "Tenant isolation" on public.invoices\nfor select using (org_id in (select org_id from public.memberships where user_id = auth.uid()));',
        practicalTip: 'Pro Tip: Always test your RLS policies with anonymous and authenticated roles in Supabase SQL editor before writing frontend components.'
      },
      {
        id: 'saas-step-2',
        stepNumber: 2,
        title: 'M-Pesa STK Push Checkout & Instant Webhook Settlement',
        subtitle: 'Embed Lipa na M-Pesa online checkout with real-time payment confirmation',
        caption: 'Wire Safaricom Daraja STK Push into Next.js Server Actions. Trigger phone prompt for KES 1,999 and listen on webhook endpoints for instant user provisioning.',
        fullExplanation: 'Unlike Stripe which requires international credit cards, M-Pesa enables direct billing across Kenya. When the user clicks Subscribe, the server triggers an STK push to their mobile phone. Once confirmed via PIN, the webhook updates the user subscription status in Supabase in under 3 seconds.',
        imageUrl: ASSETS.imperionxMpesaChat,
        badge: 'Step 02 · Kenyan Payment Gateway',
        tags: ['Daraja API', 'M-Pesa STK Push', 'Server Actions', 'Webhooks'],
        codeSnippet: 'export async function initiateMpesaSTK(phoneNumber: string, amount: number) {\n  const token = await getDarajaAuthToken();\n  const timestamp = new Date().toISOString().replace(/[^0-9]/g, "").slice(0, 14);\n  const password = Buffer.from(`${BUSINESS_SHORTCODE}${PASSKEY}${timestamp}`).toString("base64");\n  // Execute STK Push POST request\n}',
        practicalTip: 'Store the CheckoutRequestID in your database so you can match the asynchronous callback even if the customer phone experiences network delays.'
      },
      {
        id: 'saas-step-3',
        stepNumber: 3,
        title: 'Client Dashboard, Dark Mode UI & Dynamic Invoicing',
        subtitle: 'Build high-converting responsive interfaces with Lucide icons and Tailwind',
        caption: 'Create an executive dark mode dashboard displaying real-time revenue, active orders, customer CRM cards, and 1-click PDF invoice generation.',
        fullExplanation: 'A SaaS product lives or dies by its UX. We construct modular card layouts, animated revenue charts, and clean table views that make business owners feel like they are operating a Fortune 500 company on their mobile phones.',
        imageUrl: ASSETS.freeTools85Grid,
        badge: 'Step 03 · High-Converting UI',
        tags: ['React 19', 'Tailwind CSS', 'Lucide Icons', 'PDF Invoicing'],
        codeSnippet: '<div className="grid grid-cols-1 md:grid-cols-3 gap-6">\n  <MetricCard title="Today\'s Revenue" value="KES 24,500" change="+18%" />\n  <MetricCard title="M-Pesa Settled" value="18 Transactions" status="verified" />\n  <MetricCard title="Active Seats" value="6 Team Members" />\n</div>',
        practicalTip: 'Always design mobile-first: over 70% of Kenyan entrepreneurs check their business dashboard on mobile while in traffic or on the go.'
      },
      {
        id: 'saas-step-4',
        stepNumber: 4,
        title: 'Deploy to Cloud & White-Label Client Onboarding',
        subtitle: 'Host on Vercel / Cloud Run with custom domains and automated email receipts',
        caption: 'Push your repository to production with automatic SSL, configure custom domains for your clients, and package your software for KES 1,999 - KES 25,000 licensing.',
        fullExplanation: 'Your multi-tenant SaaS is now deployed and taking payments. We set up DNS records, configure transactional emails with Resend, and establish a repeatable onboarding script that provisions new client tenants in under 60 seconds.',
        imageUrl: ASSETS.practicalTechShowcase,
        badge: 'Step 04 · Production Launch',
        tags: ['Vercel Edge', 'Cloud Run', 'Custom Domains', 'White-Label'],
        codeSnippet: 'vercel --prod\n# Deployed: https://portal.imperionx.africa\n# Automatic HTTPS & Global CDN active',
        practicalTip: 'Milestone: You now possess a working, monetizable SaaS template ready to sell to local businesses and international startups.'
      }
    ]
  },

  'fintech-african-payments': {
    id: 'tut-fintech-payments',
    title: 'Hands-On Tutorial: Kenyan M-Pesa & Cross-Border FinTech Engine',
    subtitle: 'From Daraja 2.0 sandbox to live STK push, C2B validation, and automated reconciliation.',
    badge: 'FinTech Engineering Lab',
    category: 'Financial Technology',
    estimatedMinutes: 20,
    steps: [
      {
        id: 'fin-step-1',
        stepNumber: 1,
        title: 'Daraja 2.0 Credentials & OAuth Token Rotation',
        subtitle: 'Obtain consumer keys, configure passkey, and generate ephemeral bearer tokens',
        caption: 'Register on Safaricom Developer Portal, acquire sandbox credentials, and create an auto-refreshing OAuth 2.0 service that handles token expiry seamlessly.',
        fullExplanation: 'Daraja tokens expire after 3,599 seconds. We write a caching wrapper that refreshes the bearer token 5 minutes before expiration, avoiding rejected API calls during peak payment hours in Kenya.',
        imageUrl: ASSETS.imperionxMpesaChat,
        badge: 'Step 01 · OAuth 2.0 Service',
        tags: ['Daraja 2.0', 'Safaricom Developer', 'OAuth Bearer', 'Token Cache'],
        codeSnippet: 'async function getValidDarajaToken() {\n  if (cachedToken && Date.now() < tokenExpiryTime) return cachedToken;\n  const auth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString("base64");\n  const res = await fetch("https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {\n    headers: { Authorization: `Basic ${auth}` }\n  });\n  // Cache and return new token\n}',
        practicalTip: 'Always keep your Consumer Secret and Passkey in secure server environment variables; never bundle them in client bundles.'
      },
      {
        id: 'fin-step-2',
        stepNumber: 2,
        title: 'STK Push Trigger with Real-Time User Feedback',
        subtitle: 'Initiate Lipa na M-Pesa online prompts with live WebSocket status polling',
        caption: 'Trigger the native SIM prompt on the customer phone and use server-sent events to update the browser UI as soon as the PIN is entered.',
        fullExplanation: 'When a customer checks out, waiting for a redirect causes drop-offs. By displaying a countdown spinner with real-time feedback (Prompt sent -> PIN entered -> Payment confirmed), we reduce checkout abandonment by 42%.',
        imageUrl: ASSETS.imperionxBeforeAfter,
        badge: 'Step 02 · STK Push Flow',
        tags: ['STK Push', 'Lipa na M-Pesa', 'WebSockets', 'UX Feedback'],
        codeSnippet: 'const stkPayload = {\n  BusinessShortCode: "174379",\n  Password: generatePassword(),\n  Timestamp: getTimestamp(),\n  TransactionType: "CustomerPayBillOnline",\n  Amount: 1999,\n  PartyA: "254712345678",\n  PartyB: "174379",\n  PhoneNumber: "254712345678",\n  CallBackURL: "https://yourdomain.com/api/daraja/callback",\n  AccountReference: "ImperionX-App",\n  TransactionDesc: "Payment for 24H App Setup"\n};',
        practicalTip: 'Phone numbers must be formatted in international 254 format without the leading plus sign.'
      },
      {
        id: 'fin-step-3',
        stepNumber: 3,
        title: 'C2B Validation & Asynchronous Webhook Reconciliation',
        subtitle: 'Handle paybill overpayments, cancellations, and duplicate transaction prevention',
        caption: 'Implement idempotent callback processing so that Safaricom automatic retries never credit a customer twice or miss an edge-case timeout.',
        fullExplanation: 'Network spikes happen. If your callback endpoint is slow, Safaricom resends the payload. We store every TransID in a unique Postgres column; duplicate webhooks are acknowledged with HTTP 200 without double-crediting credits or re-dispatching receipts.',
        imageUrl: ASSETS.aiAgents20Stack,
        badge: 'Step 03 · Idempotency & Safety',
        tags: ['Idempotent DB', 'C2B Webhooks', 'Reconciliation', 'Postgres'],
        codeSnippet: 'const { data, error } = await supabase.from("mpesa_transactions").insert({\n  transaction_id: payload.MpesaReceiptNumber,\n  amount: payload.Amount,\n  phone: payload.PhoneNumber,\n  status: "COMPLETED"\n});\nif (error && error.code === "23505") return { status: "already_processed" };',
        practicalTip: 'Always respond to Safaricom callback URL within 3000ms with { "ResultCode": 0, "ResultDesc": "Success" } to prevent retries.'
      },
      {
        id: 'fin-step-4',
        stepNumber: 4,
        title: 'WhatsApp Business API Automated Receipt & Service Delivery',
        subtitle: 'Dispatch official PDF receipts and account access links via WhatsApp within 5s',
        caption: 'Wire the Meta WhatsApp Cloud API to automatically send the customer their invoice, welcome message, and 1-click dashboard link the moment M-Pesa clears.',
        fullExplanation: 'In Kenya and across Africa, SMS is often ignored while WhatsApp has a 98% open rate. Automated WhatsApp delivery creates immediate trust and gives customers an active channel to chat with your support or bot.',
        imageUrl: ASSETS.imperionxSalonPromo,
        badge: 'Step 04 · Instant Delivery',
        tags: ['WhatsApp Cloud API', 'PDF Receipt', 'Customer Delight', 'Retention'],
        codeSnippet: 'await sendWhatsAppMessage({\n  to: customerPhone,\n  template: "payment_receipt_instant",\n  params: [customerName, "KES 1,999", mpesaReceipt, downloadLink]\n});',
        practicalTip: 'Milestone: You now command a complete end-to-end FinTech automation pipeline with high conversion and zero manual reconciliation.'
      }
    ]
  }
};

export const SYSTEM_TUTORIALS: Record<string, TutorialSequence> = {
  'agency-24h': {
    id: 'tut-sys-agency-24h',
    title: 'Visual Workflow: The 24H AI Agency (ImperionX Model)',
    subtitle: 'From identifying struggling businesses to delivering complete apps and collecting KES 1,999.',
    badge: 'Monetization Blueprint',
    category: 'Commercial System',
    estimatedMinutes: 15,
    steps: [
      {
        id: 'agency-step-1',
        stepNumber: 1,
        title: 'Before vs After: The Visual Diagnosis',
        subtitle: 'Show Kenyan business owners the contrast between chaotic paper records and digital control',
        caption: 'Identify manual bottlenecks in local retail shops, salons, and clinics. Show them how paper ledgers lose money and how a digital dashboard brings clarity.',
        fullExplanation: 'The ImperionX model succeeds because of visual contrast: before (frustrated owner buried in paper receipts, cash shortages, lost stock) vs after (smiling entrepreneur holding a phone with real-time sales charts and M-Pesa settlements). Never sell "AI"; sell peace of mind and time saved.',
        imageUrl: ASSETS.imperionxBeforeAfter,
        badge: 'Step 01 · Visual Pitch',
        tags: ['Problem Identification', 'Visual Contrast', 'Pitch Script', 'Local SMEs'],
        codeSnippet: '# Pitch Script for WhatsApp / In-Person:\n"Jambo! I noticed your salon takes bookings on paper. We build custom booking apps with automatic M-Pesa deposits and WhatsApp reminders in 24 hours for only KES 1,999."',
        practicalTip: 'Always bring a working demo on your own smartphone to let the owner tap and experience the interface firsthand.'
      },
      {
        id: 'agency-step-2',
        stepNumber: 2,
        title: '24-Hour AI Generation Pipeline',
        subtitle: 'Generate bespoke UI, backend schema, and branding using stacked AI tools in 3 hours',
        caption: 'Use Cursor, v0, Tailwind, and Supabase templates to assemble their custom mobile-friendly website and app in a single afternoon without writing boilerplate from scratch.',
        fullExplanation: 'By pre-building 5 industry templates (Salon, Retail Duka, Pharmacy, Hardware, Restaurant), you only need 90 minutes with AI tools to customize their logo, inventory items, prices, and phone numbers, allowing you to easily fulfill the 24-hour turnaround promise.',
        imageUrl: ASSETS.deadlyAiTools8,
        badge: 'Step 02 · 24H Production',
        tags: ['v0.dev', 'Cursor AI', 'Tailwind Templates', 'Supabase Starter'],
        codeSnippet: 'git clone https://github.com/futuretech/kenya-sme-starter.git\n# Customize client assets, color palette, and M-Pesa paybill\nnpm run build && vercel --prod',
        practicalTip: 'Keep reusable industry templates on GitHub ready to branch so you never start an agency client from zero.'
      },
      {
        id: 'agency-step-3',
        stepNumber: 3,
        title: 'KES 1,999 M-Pesa STK Push Settlement',
        subtitle: 'Collect upfront setup fees via automated WhatsApp Business and Lipa na M-Pesa',
        caption: 'Send a professional WhatsApp payment request with an automated STK push prompt. The client enters their M-Pesa PIN, triggering instant code delivery.',
        fullExplanation: 'Low ticket friction eliminates skepticism. At KES 1,999 (was 5,000 promo), local merchants do not require board approvals or lengthy procurement delays; they pay instantly via M-Pesa on their phone.',
        imageUrl: ASSETS.imperionxMpesaChat,
        badge: 'Step 03 · Frictionless Checkout',
        tags: ['M-Pesa STK Push', 'Lipa na M-Pesa', 'WhatsApp Pay', 'KES 1,999'],
        codeSnippet: '# Automated payment trigger:\nPOST /api/stkpush {\n  "phone": "2547XXXXXXXX",\n  "amount": 1999,\n  "account": "ImperionX-Setup"\n}',
        practicalTip: 'Always display a countdown urgency banner ("Was KES 5,000 · 5 Slots Only") to encourage same-day payment.'
      },
      {
        id: 'agency-step-4',
        stepNumber: 4,
        title: 'Client Handover & Monthly Retainer Conversion',
        subtitle: 'Deliver login credentials and upsell ongoing maintenance for KES 999 - KES 2,500/month',
        caption: 'Provide the business owner with their admin dashboard credentials and offer monthly hosting, backups, and WhatsApp catalog updates for a steady recurring retainer.',
        fullExplanation: 'The KES 1,999 upfront fee covers your acquisition and build time; the real agency profit comes from recurring retainers. With 30 SME clients paying KES 1,500/month, you generate KES 45,000/month in predictable passive income.',
        imageUrl: ASSETS.imperionxSalonPromo,
        badge: 'Step 04 · Recurring Retainer',
        tags: ['Client Retention', 'Monthly Retainer', 'Passive Income', 'White-Label'],
        codeSnippet: '# Retainer Package:\n- Hosting & SSL: Free tier cloud\n- Database backups: Automated weekly\n- WhatsApp Support: 24/7\n- Retainer Fee: KES 1,499 / month',
        practicalTip: 'Celebrate client wins: share a screenshot of their first online sale on your WhatsApp status to attract 3 new inbound clients.'
      }
    ]
  },

  'agent-stack-20': {
    id: 'tut-sys-agent-stack-20',
    title: 'Visual Workflow: The 20-Tool AI Agent Architecture',
    subtitle: 'Step-by-step masterclass covering model selection, sandboxing, orchestration, and vector storage.',
    badge: 'Full Architecture Stack',
    category: 'Autonomous Systems',
    estimatedMinutes: 20,
    steps: [
      {
        id: 'stack-step-1',
        stepNumber: 1,
        title: 'Coding & Protocol Foundation (Cursor + MCP + n8n)',
        subtitle: 'Set up an AI-native code editor and universal protocol tools',
        caption: 'Start in Cursor. Connect the Model Context Protocol (MCP) server so your agent can directly access web scraping, local git commands, and visual n8n workflows.',
        fullExplanation: 'The first tier of the 20-tool stack ensures your development loop is lightning fast. Cursor gives you inline agentic refactoring, while MCP provides standard RPC pipes for tool calling across any third-party API without proprietary SDK lock-in.',
        imageUrl: ASSETS.aiAgents20Stack,
        badge: 'Tier 01 · Tools 1 to 4',
        tags: ['Cursor.com', 'MCP Protocol', 'n8n.io', 'LangChain.com'],
        codeSnippet: 'cursor .\n# Add MCP server configuration:\n{\n  "mcpServers": {\n    "web-search": { "command": "npx", "args": ["-y", "@oxylabs/web-api-mcp"] }\n  }\n}',
        practicalTip: 'Use n8n for visual webhook routing and save Python coding only for deep reasoning and state graph logic.'
      },
      {
        id: 'stack-step-2',
        stepNumber: 2,
        title: 'Model Routing & Multi-Agent Frameworks (CrewAI + OpenRouter)',
        subtitle: 'Switch between hundreds of models with one unified API key',
        caption: 'Use OpenRouter to route simple tasks to fast, low-cost models (Llama 3.3, DeepSeek R1) and complex reasoning to Claude 3.7 Sonnet or OpenAI o3.',
        fullExplanation: 'Never hardcode a single model provider. OpenRouter gives you a drop-in OpenAI-compatible endpoint with automatic fallbacks if a provider goes down or throttles your rate limit. CrewAI coordinates your autonomous agent teams with role-based backstories and collaborative delegations.',
        imageUrl: ASSETS.deadlyAiTools8,
        badge: 'Tier 02 · Tools 5 to 10',
        tags: ['CrewAI', 'OpenRouter.ai', 'Ollama.com', 'LMStudio.ai', 'HuggingFace'],
        codeSnippet: 'export OPENAI_BASE_URL="https://openrouter.ai/api/v1"\nexport OPENAI_API_KEY="sk-or-v1-..."\n# Access 200+ models with zero code changes',
        practicalTip: 'For offline or zero-cost development, run Ollama locally on your laptop with deepseek-r1:8b or llama3.2.'
      },
      {
        id: 'stack-step-3',
        stepNumber: 3,
        title: 'Secure Sandboxes & Vector Databases (E2B + Qdrant + Pinecone)',
        subtitle: 'Isolate untrusted agent code and query millions of document embeddings',
        caption: 'Execute agent-written Python code safely in E2B sandboxes while storing persistent knowledge in Qdrant or Pinecone vector databases.',
        fullExplanation: 'An agent that cannot execute code is just a chatbot. E2B provides secure Linux micro-VMs that boot in 300ms. For memory and RAG, Qdrant offers blazing fast Rust-based vector search with zero memory leaks.',
        imageUrl: ASSETS.aiTools50Wheel,
        badge: 'Tier 03 · Tools 11 to 15',
        tags: ['E2B.dev', 'Composio.dev', 'Langfuse.com', 'Pinecone.io', 'Qdrant.tech'],
        codeSnippet: 'from qdrant_client import QdrantClient\nqdrant = QdrantClient(url="https://xyz.qdrant.io", api_key="...")\nqdrant.upsert(collection_name="knowledge", points=vectors)',
        practicalTip: 'Use Langfuse to trace every prompt, token cost, and LLM latency in production with zero performance overhead.'
      },
      {
        id: 'stack-step-4',
        stepNumber: 4,
        title: 'Production Infrastructure & Cloud GPUs (Supabase + Modal)',
        subtitle: 'Deploy serverless Python code to cloud GPUs with instant scaling',
        caption: 'Wire Supabase for your relational Postgres database and deploy agent execution loops onto Modal cloud GPUs that run code in the cloud with zero server management.',
        fullExplanation: 'Complete your 20-tool stack by deploying to production. Supabase stores structured tables, auth, and vectors, while Modal handles heavy Python and AI jobs that need to scale from 0 to 100 GPUs dynamically without paying for idle servers.',
        imageUrl: ASSETS.heroAcademy,
        badge: 'Tier 04 · Tools 16 to 20',
        tags: ['Supabase.com', 'Together.ai', 'Modal.com', 'PromptingGuide', 'Excalidraw'],
        codeSnippet: 'import modal\napp = modal.App("swarm-runner")\n@app.function(gpu="T4")\ndef run_inference(prompt: str):\n    return model.generate(prompt)',
        practicalTip: 'Milestone: By combining these 20 tools, you can build systems in hours that used to require a 10-person software team.'
      }
    ]
  },

  'team-replace-50': {
    id: 'tut-sys-team-replace-50',
    title: 'Visual Workflow: 50+ Best AI Tools to Replace Entire Teams',
    subtitle: 'How modern lean enterprises save $28,000/mo across 8 organizational departments.',
    badge: 'Enterprise Replacement',
    category: 'Lean Enterprise',
    estimatedMinutes: 18,
    steps: [
      {
        id: 'replace-step-1',
        stepNumber: 1,
        title: 'Design & Visual Production Department Replacement',
        subtitle: 'Replace $5,000/mo design agencies with Midjourney, Flux & Ideogram',
        caption: 'Generate studio-grade product photos, marketing banners, and brand packaging in seconds using Midjourney v6, Flux Schnell, and Leonardo AI.',
        fullExplanation: 'Traditional photography and graphic agencies take 2 weeks and charge thousands of dollars. With Midjourney and Flux, you generate 4K photorealistic product mockups, 3D typography, and marketing creatives in under 60 seconds with zero license royalties.',
        imageUrl: ASSETS.aiTools50Wheel,
        badge: 'Department 01 · Design & Images',
        tags: ['Midjourney', 'Flux', 'Leonardo AI', 'Designs.ai', 'DALL-E 3'],
        codeSnippet: '# Studio Lighting Prompt Template:\n"Commercial product photography of sleek matte black cosmetic bottle, soft studio lighting, water droplet condensation, 8k resolution, minimalist depth of field --ar 16:9 --style raw"',
        practicalTip: 'Always upscale finished generations using DeepImage or Upscayl for crisp print and billboard resolution.'
      },
      {
        id: 'replace-step-2',
        stepNumber: 2,
        title: 'Video & Motion Department Replacement',
        subtitle: 'Replace video editors and actors with HeyGen, Synthesia, and Descript',
        caption: 'Produce multilingual spokesperson videos, video ads, and YouTube tutorials with AI avatars and text-to-speech without hiring actors or studio cameras.',
        fullExplanation: 'HeyGen and Synthesia generate hyper-realistic digital humans that speak 120+ languages with synchronized lip movement. Descript allows you to edit video by simply deleting words from the written transcript, cutting video production time by 80%.',
        imageUrl: ASSETS.deadlyAiTools8,
        badge: 'Department 02 · Video & Voice',
        tags: ['HeyGen', 'Synthesia', 'Descript', 'Play.ht', 'Jitter'],
        codeSnippet: '# Workflow:\n1. Generate script with Claude 3.7\n2. Voiceover with Play.ht ultra-natural clone\n3. Avatar synthesis on HeyGen in 4K\n4. Add animated lower thirds in Jitter',
        practicalTip: 'Use Play.ht cloned voices to produce localized Kenyan English and Swahili marketing campaigns for local businesses.'
      },
      {
        id: 'replace-step-3',
        stepNumber: 3,
        title: 'Software Development & Web Engineering Replacement',
        subtitle: 'Replace $12,000/mo engineering sprint costs with Cursor, Lovable & Replit',
        caption: 'Generate fully functional React applications, database schemas, and payment integrations using Cursor, Lovable.dev, and v0.dev in hours.',
        fullExplanation: 'Full-stack engineering teams spend weeks on boilerplate setup, CSS alignment, and CRUD forms. AI-first development tools generate complete production-grade frontends and API routes from natural language descriptions and uploaded screenshots.',
        imageUrl: ASSETS.aiAgents20Stack,
        badge: 'Department 03 · Code & Web',
        tags: ['Cursor', 'Lovable.dev', 'v0.dev', 'Replit Agent', 'Framer'],
        codeSnippet: 'cursor --prompt "Build a responsive Next.js booking form with M-Pesa STK push trigger and Supabase PostgreSQL persistence"',
        practicalTip: 'Always review generated database schemas and enforce strict Row Level Security (RLS) rules before deployment.'
      },
      {
        id: 'replace-step-4',
        stepNumber: 4,
        title: 'Marketing, SEO & 24/7 Customer Support Operations',
        subtitle: 'Replace copywriting agencies and support centers with Chatbase & SEOJuice',
        caption: 'Deploy intelligent WhatsApp and web chatbots that resolve 85% of customer inquiries and rank articles at the top of Google using automated SEO clusters.',
        fullExplanation: 'Chatbase and SiteGPT index your knowledge base, FAQs, and product manuals to answer customer inquiries 24 hours a day with zero wait times. Automated SEO tools analyze search intent, optimize headers, and produce search-engine-ready content.',
        imageUrl: ASSETS.freeTools85Grid,
        badge: 'Department 04 · Growth & Support',
        tags: ['Chatbase', 'SiteGPT', 'SEOJuice', 'Surfer SEO', 'SEOWriting AI'],
        codeSnippet: '# Embed Chatbot in 1 line of HTML:\n<script src="https://chatbase.co/embed.min.js" id="futuretech-bot" defer></script>',
        practicalTip: 'Milestone: By operating these 4 AI department stacks, a solo founder can execute the output of a 25-person company.'
      }
    ]
  },

  'skills-9': {
    id: 'tut-sys-skills-9',
    title: 'Visual Workflow: 9 Essential AI Skills for 2026',
    subtitle: 'The master competencies that differentiate high-earning AI engineers and tech entrepreneurs.',
    badge: 'Core Competency Map',
    category: 'Skill Roadmap',
    estimatedMinutes: 20,
    steps: [
      {
        id: 'skill-step-1',
        stepNumber: 1,
        title: 'Cognitive Architecture & Advanced Prompt Engineering',
        subtitle: 'Chain-of-thought, few-shot conditioning, and structured JSON output guarantees',
        caption: 'Master the foundations of LLM reasoning: system instruction framing, few-shot exemplar design, and deterministic schema enforcement.',
        fullExplanation: 'Prompt engineering is not about typing casual questions; it is software engineering with probabilistic engines. You learn to control temperature, top_p, and frequency penalties while enforcing Pydantic output schemas that never break API parsers.',
        imageUrl: ASSETS.essentialAiSkills9,
        badge: 'Skill 01 · Prompting & Reasoning',
        tags: ['Few-Shot', 'Chain-of-Thought', 'Structured Output', 'Pydantic'],
        codeSnippet: 'system_prompt = """You are a deterministic financial compliance auditor.\nAlways emit your final synthesis matching the following JSON Schema: { "risk_score": float, "flags": list[str] }"""',
        practicalTip: 'Always request reasoning tokens (<thought>...</thought>) before final answers to improve accuracy on math and logic by 40%.'
      },
      {
        id: 'skill-step-2',
        stepNumber: 2,
        title: 'Enterprise RAG & Hybrid Vector Retrieval',
        subtitle: 'Semantic chunking, cross-encoder re-ranking, and context compression',
        caption: 'Build search engines that understand user intent, connect unstructured enterprise PDFs with vector databases, and eliminate model hallucinations.',
        fullExplanation: 'RAG is the primary way businesses integrate internal data with generative AI. You master chunking strategies, embedding models (text-embedding-3-large), and cross-encoder re-ranking to deliver precise citations.',
        imageUrl: ASSETS.aiTools50Wheel,
        badge: 'Skill 02 · Retrieval Augmented Generation',
        tags: ['RAG', 'Vector Embeddings', 'Cross-Encoders', 'Semantic Search'],
        codeSnippet: 'from sentence_transformers import CrossEncoder\nreranker = CrossEncoder("cross-encoder/ms-marco-MiniLM-L-6-v2")\nscores = reranker.predict([(query, doc) for doc in retrieved_docs])',
        practicalTip: 'Never chunk documents purely by character count; chunk by semantic markdown headers or natural paragraph boundaries.'
      },
      {
        id: 'skill-step-3',
        stepNumber: 3,
        title: 'Autonomous Swarms & Multi-Agent Collaboration',
        subtitle: 'State machines, human-in-the-loop approvals, and self-healing agent loops',
        caption: 'Move beyond single prompts to multi-agent swarms that delegate tasks, critique each other code, and execute multi-hour enterprise workflows.',
        fullExplanation: 'You learn how to construct supervisor patterns, peer review networks, and consensus voting algorithms in LangGraph and CrewAI, giving software agents the ability to autonomously conduct research and build products.',
        imageUrl: ASSETS.aiAgents20Stack,
        badge: 'Skill 03 · Multi-Agent Swarms',
        tags: ['LangGraph', 'CrewAI', 'State Machines', 'Human-in-the-Loop'],
        codeSnippet: 'workflow = StateGraph(AgentState)\nworkflow.add_node("coder", generate_code)\nworkflow.add_node("tester", test_code)\nworkflow.add_edge("coder", "tester")',
        practicalTip: 'Always implement a max_iterations limit (e.g., 5 turns) to prevent infinite loops when an agent encounters unexpected errors.'
      },
      {
        id: 'skill-step-4',
        stepNumber: 4,
        title: 'Model Fine-Tuning, Quantization & Serving',
        subtitle: 'LoRA, QLoRA, GGUF quantization, and high-throughput vLLM inference',
        caption: 'Adapt open-source models like Llama and DeepSeek to specialized company vocabulary, quantize them to run on local devices, and deploy scalable inference engines.',
        fullExplanation: 'Master the end-to-end model adaptation lifecycle. Learn when to fine-tune versus when to prompt, how to prepare clean synthetic datasets, and how to serve models at high speeds with vLLM and TensorRT-LLM.',
        imageUrl: ASSETS.secretAiTools20,
        badge: 'Skill 04 · Model Adaptation',
        tags: ['LoRA', 'vLLM', 'GGUF', 'Quantization', 'Inference'],
        codeSnippet: 'python -m vllm.entrypoints.openai.api_server --model deepseek-ai/DeepSeek-R1-Distill-Qwen-8B --gpu-memory-utilization 0.95',
        practicalTip: 'Milestone: Mastering these 9 skills places you in the top 1% of AI practitioners capable of architecting enterprise solutions.'
      }
    ]
  },

  'free-vault-85': {
    id: 'tut-sys-free-vault-85',
    title: 'Visual Workflow: 85 Free Tools & Zero-Cost Startup Stack',
    subtitle: 'How to build, launch, and monetize tech platforms with $0 monthly software overhead.',
    badge: 'Zero-Cost Stack',
    category: 'Bootstrap Engine',
    estimatedMinutes: 15,
    steps: [
      {
        id: 'free-step-1',
        stepNumber: 1,
        title: 'Idea Validation & Content Generation on Free Tiers',
        subtitle: 'Use ChatGPT free tier, Copy.ai, and Writesonic to validate market demand',
        caption: 'Harness 10 powerful free AI ideation and writing tools to generate business plans, cold pitch emails, and sales copy without paying a dime in subscriptions.',
        fullExplanation: 'Never spend money before validating demand. We show how to extract maximum value from free tiers of ChatGPT, Writesonic, and Rytr by chaining outputs and storing structured prompts in Google Sheets.',
        imageUrl: ASSETS.freeTools85Grid,
        badge: 'Category 01 · 10 Free Idea Tools',
        tags: ['ChatGPT Free', 'Copy.ai', 'Writesonic', 'Rytr', 'Scalenut'],
        codeSnippet: '# Zero-Cost Validation Workflow:\n1. Identify problem on Kenya Market Gap Radar\n2. Generate 10 pitch emails on ChatGPT Free\n3. Send directly to 20 local business WhatsApp numbers\n4. Collect first KES 1,999 deposit before building',
        practicalTip: 'Do not pay for premium AI accounts until your client deposits cover the subscription cost 5x over.'
      },
      {
        id: 'free-step-2',
        stepNumber: 2,
        title: 'Free High-Impact Visuals, Design & Background Removal',
        subtitle: 'Create brand identities using Canva free, Remove.bg, and Leonardo AI',
        caption: 'Combine free graphic design tools, transparent PNG cutouts, and AI image generation credits to craft professional logos, social media posts, and banners.',
        fullExplanation: 'High-end branding no longer requires expensive Adobe software. Canva Free, Remove.bg, Snappa, and Leonardo AI provide 150 daily free credits to generate flawless brand assets for client deliverables.',
        imageUrl: ASSETS.deadlyAiTools8,
        badge: 'Category 02 · 10 Free Design Tools',
        tags: ['Canva Free', 'Remove.bg', 'Leonardo AI', 'Snappa', 'Lumen5'],
        codeSnippet: '# Workflow:\n1. Generate avatar with Leonardo AI free credits\n2. Strip background in Remove.bg in 1-click\n3. Assemble into mobile marketing mockup on Canva Free',
        practicalTip: 'Stack free daily credit allowances across multiple tools (Leonardo + Ideogram + Canva) to produce unlimited client assets.'
      },
      {
        id: 'free-step-3',
        stepNumber: 3,
        title: 'Free Data Visualization, Infographics & Stock Media',
        subtitle: 'Turn boring spreadsheets into executive client dashboards with Tableau Public and Plotly',
        caption: 'Embed free charts, interactive graphs, and royalty-free 4K stock photos from Unsplash, Pexels, and Pixabay to elevate client presentations.',
        fullExplanation: 'Clients pay premium prices when data looks executive. We combine Datawrapper, Plotly, and Tableau Public to generate responsive interactive charts that embed seamlessly into Next.js websites.',
        imageUrl: ASSETS.aiTools50Wheel,
        badge: 'Category 03 & 04 · Graphs & Stock',
        tags: ['Tableau Public', 'Datawrapper', 'Plotly', 'Unsplash', 'Pexels'],
        codeSnippet: '<script src="https://cdn.plot.ly/plotly-2.29.0.min.js"></script>\n<div id="chart"></div>\n<script>Plotly.newPlot("chart", [{x: ["Mon", "Tue", "Wed"], y: [12000, 18500, 24500], type: "bar"}]);</script>',
        practicalTip: 'Always use high-resolution Unsplash photos as hero backgrounds to make local websites look international.'
      },
      {
        id: 'free-step-4',
        stepNumber: 4,
        title: 'Free Social Automation, Analytics & Productivity Engine',
        subtitle: 'Schedule posts with Buffer, track users with Google Analytics & Notion AI',
        caption: 'Connect free scheduling tools, web analytics, and AI productivity organizers to run your entire tech agency on autopilot without overhead.',
        fullExplanation: 'Buffer and CoSchedule free tiers allow queueing weeks of social content in advance. Combine this with free Google Analytics and Notion AI to manage client pipelines, tasks, and follow-ups.',
        imageUrl: ASSETS.secretAiTools20,
        badge: 'Category 05 - 08 · Growth & Ops',
        tags: ['Buffer Free', 'Google Analytics', 'Notion AI', 'Taskade', 'Otter.ai'],
        codeSnippet: '# Stack Overview:\n- Hosting: Vercel Free ($0)\n- Database: Supabase Free ($0)\n- Analytics: Google Analytics 4 ($0)\n- Email: Resend 3,000 free emails/mo ($0)\n- Total Monthly Cost: $0.00',
        practicalTip: 'Milestone: You can scale your agency to over KES 150,000/month before ever needing to upgrade to paid software tiers.'
      }
    ]
  }
};

export const getTutorialForCourse = (courseId: string): TutorialSequence => {
  return COURSE_TUTORIALS[courseId] || COURSE_TUTORIALS['ai-agents-production'];
};

export const getTutorialForSystem = (systemId: string): TutorialSequence => {
  return SYSTEM_TUTORIALS[systemId] || SYSTEM_TUTORIALS['agency-24h'];
};

export const getAllTutorialSequences = (): TutorialSequence[] => {
  return [
    ...Object.values(COURSE_TUTORIALS),
    ...Object.values(SYSTEM_TUTORIALS)
  ];
};
