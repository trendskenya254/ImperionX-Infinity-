export interface FAQItem {
  id: string;
  category: 'General' | 'Curriculum & Pedagogy' | 'Pricing & Access' | 'Technical Architecture';
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    category: 'General',
    question: 'What is FutureTech Business School and who is it for?',
    answer: 'FutureTech Business School is an international online technology and entrepreneurship academy dedicated to empowering African and global tech creators, developers, designers, and innovators. Our curriculum bridges technical execution (AI, Full-Stack, Automation, Robotics) with commercial monetization (SaaS creation, international freelancing, fintech, venture building).'
  },
  {
    id: 'f2',
    category: 'Curriculum & Pedagogy',
    question: 'What makes the "Learn. Innovate. Build. Earn." pedagogy unique?',
    answer: 'Traditional universities teach theory that is outdated before graduation. FutureTech operates on a build-first model: every module culminates in a functional production artifact (e.g. an autonomous multi-agent swarm, a live micro-SaaS, or a client acquisition system) designed to generate income or land high-paying international remote contracts.'
  },
  {
    id: 'f3',
    category: 'Pricing & Access',
    question: 'How do the six membership plans work, and can I upgrade or cancel anytime?',
    answer: 'We believe world-class education should be universally accessible. Plans start from Explorer at KSh 200/mo up to Business Master at KSh 2,000/mo. You can switch tiers, pause, or cancel your subscription at any time with no lock-in contracts or penalty fees.'
  },
  {
    id: 'f4',
    category: 'Pricing & Access',
    question: 'How do currency conversions and international payments work?',
    answer: 'Our transparent baseline pricing is in Kenyan Shillings (KSh). International students can toggle display currencies (USD, EUR, GBP, NGN, ZAR). All conversions reflect configurable official reference exchange rates. In subsequent development stages, native payment gateways including M-Pesa STK Push, Stripe, Wise, and Flutterwave will be active.'
  },
  {
    id: 'f5',
    category: 'Curriculum & Pedagogy',
    question: 'Do I need prior programming experience before joining?',
    answer: 'Not at all. We offer dedicated foundational tracks in our Explorer and Beginner tiers designed specifically for beginners. Simultaneously, our advanced faculties cater to senior software engineers, founders, and executives seeking cutting-edge expertise in multi-agent swarms and distributed systems.'
  },
  {
    id: 'f6',
    category: 'Technical Architecture',
    question: 'What is the current technical stage of FutureTech Business School?',
    answer: 'This is Stage 1 of the FutureTech platform: a production-grade frontend architecture with complete catalogue browsing, interactive syllabi, responsive UI, dynamic currency management, and typed database schema contracts prepared for Supabase PostgreSQL and authentication integration in Stage 2.'
  },
  {
    id: 'f7',
    category: 'Curriculum & Pedagogy',
    question: 'Are FutureTech certificates verifiable by international employers?',
    answer: 'Yes. Upon successfully delivering and defending your practical capstone project, you receive a cryptographically verifiable digital Certificate of Mastery complete with public GitHub verification link and skills transcript suitable for LinkedIn and enterprise HR verification.'
  }
];
