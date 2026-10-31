import React, { useState } from 'react';
import { FAQS } from '../../data/faqs';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('f1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clarity & Transparencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Everything you need to know about our Stage 1 platform, admissions, faculties, and international payment plans.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-slate-800 bg-[#0c1220] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-semibold text-sm sm:text-base text-white hover:text-blue-300 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-blue-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
