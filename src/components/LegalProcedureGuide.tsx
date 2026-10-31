import React, { useState } from 'react';
import { legalGuides } from '../data/chamberInfo';
import { Clock, Landmark, FileCheck, ArrowRight } from 'lucide-react';

interface LegalProcedureGuideProps {
  onOpenConsultation: (guideTitle?: string) => void;
}

export const LegalProcedureGuide: React.FC<LegalProcedureGuideProps> = ({ onOpenConsultation }) => {
  const [selectedGuideId, setSelectedGuideId] = useState(legalGuides[0].id);

  const activeGuide = legalGuides.find((g) => g.id === selectedGuideId) || legalGuides[0];

  return (
    <section id="procedural-guides" className="py-14 sm:py-18 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B48C48] mb-2">
            Pakistani Court Procedural Roadmaps
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0A1224] leading-tight">
            Litigation Lifecycles & Court Timelines.
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
            Understanding realistic milestones, judicial stages, and required evidence eliminates uncertainty. Explore our verified procedural roadmaps for key Sindh judicial proceedings.
          </p>
        </div>

        {/* Guide Selector Tabs - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
          {legalGuides.map((guide) => {
            const isSelected = guide.id === activeGuide.id;
            return (
              <button
                key={guide.id}
                onClick={() => setSelectedGuideId(guide.id)}
                className={`p-4 sm:p-5 rounded-lg text-left border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#0A1224] shadow-xs ring-1 ring-[#0A1224]'
                    : 'bg-[#F8F9FA] border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#B48C48] mb-1">
                  {guide.category}
                </div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-[#0A1224] line-clamp-1 mb-2">
                  {guide.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{guide.estimatedDuration}</span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Roadmap Detailed Card */}
        <div className="bg-[#F8F9FA] border border-slate-200 rounded-xl p-5 sm:p-8 lg:p-10 shadow-sm chamber-card">
          
          {/* Card Summary Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 mb-6 sm:mb-8 border-b border-slate-200">
            <div>
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 mb-0.5 sm:mb-1">
                Roadmap Breakdown
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1224]">
                {activeGuide.title}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs">
              <div className="px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-700 flex items-center gap-1.5">
                <Landmark className="w-3.5 h-3.5 text-[#B48C48] shrink-0" />
                <span className="truncate max-w-[220px]">Forum: <strong>{activeGuide.primaryCourt}</strong></span>
              </div>
              <div className="px-3 py-1.5 bg-[#0A1224] text-white rounded font-semibold flex items-center gap-1.5 whitespace-nowrap">
                <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>Est: {activeGuide.estimatedDuration}</span>
              </div>
            </div>
          </div>

          {/* Sequential Timeline Steps */}
          <div className="space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-slate-200 before:hidden md:before:block">
            {activeGuide.steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row items-start gap-4 sm:gap-6">
                
                {/* Step Indicator */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0A1224] text-[#C5A059] flex items-center justify-center font-mono font-bold text-xs sm:text-sm shrink-0 shadow-xs z-10 border border-[#C5A059]/30">
                  {idx + 1}
                </div>

                {/* Step Content */}
                <div className="flex-1 bg-white border border-slate-200 rounded-lg p-5 sm:p-6 w-full shadow-2xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-2">
                    <h4 className="font-display text-lg sm:text-xl font-semibold text-[#0A1224]">
                      {step.title}
                    </h4>
                    <span className="text-[11px] sm:text-xs font-mono font-medium text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded self-start sm:self-auto shrink-0 border border-slate-200">
                      Timeline: {step.timeline}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-4">
                    {step.description}
                  </p>

                  {/* Required Documents for Step */}
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2 flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>Required Proof / Documents:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {step.documentsRequired.map((doc, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-[11px] sm:text-xs text-slate-700 bg-[#F8F9FA] border border-slate-200 px-2 sm:px-2.5 py-1 rounded"
                        >
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Roadmap Footer Action */}
          <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              Need personalized procedural strategy or court appearance for this matter?
            </p>
            <button
              onClick={() => onOpenConsultation(`Guidance for: ${activeGuide.title}`)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1224] hover:bg-[#152342] rounded transition-all duration-200 cursor-pointer text-center active:scale-[0.98]"
            >
              <span>Schedule Case Advisory</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
