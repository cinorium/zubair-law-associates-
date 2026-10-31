import React, { useState } from 'react';
import { chamberFaqs } from '../data/chamberInfo';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="court-faq" className="py-14 sm:py-18 lg:py-24 bg-[#F8F9FA] border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B48C48] mb-2">
            Frequently Addressed Queries
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0A1224] leading-tight">
            Litigation Questions & Legal Rights.
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
            Direct procedural guidance regarding superior court writs, bail rights, property disputes, and family law in Pakistan.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {chamberFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-200 shadow-2xs hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 sm:px-7 py-4 sm:py-5 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                >
                  <span className="font-display text-base sm:text-lg lg:text-xl font-semibold text-[#0A1224] leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#B48C48]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-7 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-slide-up">
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
