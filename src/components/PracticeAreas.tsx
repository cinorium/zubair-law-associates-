import React, { useState } from 'react';
import { practiceAreas } from '../data/chamberInfo';
import { PracticeArea, PracticeCategory } from '../types/legal';
import { ArrowUpRight, X, Check, Landmark, ShieldCheck } from 'lucide-react';

interface PracticeAreasProps {
  onSelectPracticeArea: (area: PracticeArea) => void;
  onOpenConsultation: (matterTitle?: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<PracticeCategory>('all');
  const [selectedAreaModal, setSelectedAreaModal] = useState<PracticeArea | null>(null);

  const categories: Array<{ id: PracticeCategory; label: string }> = [
    { id: 'all', label: 'All Practice Domains' },
    { id: 'civil', label: 'Civil & Property' },
    { id: 'criminal', label: 'Criminal Defence' },
    { id: 'family', label: 'Family & Custody' },
    { id: 'constitutional', label: 'Constitutional / Writs' },
    { id: 'rent', label: 'Rent Eviction' },
    { id: 'corporate', label: 'Conveyancing & Contracts' },
  ];

  const filteredAreas = activeCategory === 'all' 
    ? practiceAreas 
    : practiceAreas.filter(area => area.category === activeCategory);

  return (
    <section id="practice-areas" className="py-14 sm:py-18 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B48C48] mb-2 flex items-center gap-2">
            <span className="w-6 h-px bg-[#B48C48]/60 inline-block"></span>
            <span>Areas of Legal Practice</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0A1224] leading-tight">
            Litigation, Procedural Advocacy & Advisory Services.
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
            Every case is approached with evidentiary rigor, deep statutory mastery of Pakistani codes, and timely proactive litigation before the competent judicial forums.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex gap-1.5 sm:gap-2 mb-10 pb-2 border-b border-slate-200 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 active:scale-[0.98] ${
                activeCategory === cat.id
                  ? 'bg-[#0A1224] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* High-Precision Uniform Grid: Cards with Pixel-Perfect Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredAreas.map((area, index) => {
            const indexFormatted = String(index + 1).padStart(2, '0');
            // Clean forum display text
            const primaryForum = area.courtForum.split('/')[0].trim();

            return (
              <div
                key={area.id}
                className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between chamber-card group hover:border-[#0A1224]/30 h-full"
              >
                {/* Upper Content Block */}
                <div className="flex flex-col flex-1">
                  
                  {/* Row 1: Index Number & Standardized Forum Tag */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#0A1224] transition-colors">
                      {indexFormatted}.
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#B48C48] bg-amber-50/70 border border-amber-200/60 px-2.5 py-0.5 rounded-xs truncate max-w-[210px]">
                      {primaryForum}
                    </span>
                  </div>

                  {/* Row 2: Card Title - Standardized Min-Height for 2-Line Uniform Baseline */}
                  <div className="min-h-[3.5rem] flex items-start mb-2.5">
                    <h3 className="font-display text-xl sm:text-[22px] font-semibold text-[#0A1224] leading-snug group-hover:text-[#1E3A8A] transition-colors">
                      {area.title}
                    </h3>
                  </div>

                  {/* Row 3: Card Description - Strict 3-Line Clamped Height for Uniform Vertical Grid */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3 min-h-[4rem] mb-5">
                    {area.description}
                  </p>

                  {/* Row 4: Dedicated Core Remedies Container (Uniform Panel) */}
                  <div className="bg-[#F8F9FA] border border-slate-200/80 rounded-lg p-3.5 mb-5 flex-1 flex flex-col justify-center">
                    <div className="text-[11px] font-semibold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#B48C48]" />
                        <span>Core Remedies & Pleadings</span>
                      </span>
                      <span className="font-mono text-[10px] text-slate-400">
                        {area.draftsCount} Formats
                      </span>
                    </div>

                    <div className="space-y-2">
                      {area.keyRemedies.slice(0, 2).map((remedy, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B48C48] mt-1.5 shrink-0" />
                          <span className="line-clamp-1 leading-snug font-medium" title={remedy}>
                            {remedy}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Actions Footer - Pinned Perfectly to Bottom */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <button
                    onClick={() => setSelectedAreaModal(area)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A1224] hover:text-[#B48C48] transition-colors cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>Remedies & Statutes</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B48C48]" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(area.title)}
                    className="text-xs font-semibold text-slate-500 hover:text-[#0A1224] hover:underline transition-colors cursor-pointer"
                  >
                    Consult on this
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal for Selected Practice Area */}
      {selectedAreaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
          <div className="bg-white border border-slate-300 rounded-xl max-w-2xl w-full p-5 sm:p-7 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto animate-slide-up">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#B48C48]">
                  Practice Domain Dossier
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1224] mt-1">
                  {selectedAreaModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedAreaModal(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 sm:mb-6">
              {selectedAreaModal.description}
            </p>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5 flex items-center gap-1.5">
                  <Landmark className="w-3.5 h-3.5 text-[#B48C48]" />
                  <span>Competent Court / Jurisdiction Forum</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-800 bg-[#F8F9FA] p-3 rounded-lg border border-slate-200 font-medium">
                  {selectedAreaModal.courtForum}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5">
                  Statutory Governing Codes & Acts
                </h4>
                <ul className="space-y-1.5">
                  {selectedAreaModal.governingLaws.map((law, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#0F5132] shrink-0" />
                      <span>{law}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5">
                  Key Petitions & Legal Remedies Handled
                </h4>
                <ul className="space-y-2">
                  {selectedAreaModal.keyRemedies.map((remedy, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded border border-slate-200/80">
                      <span className="text-[#B48C48] font-bold">•</span>
                      <span>{remedy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-200">
              <button
                onClick={() => setSelectedAreaModal(null)}
                className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedAreaModal.title;
                  setSelectedAreaModal(null);
                  onOpenConsultation(title);
                }}
                className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-[#0A1224] hover:bg-[#152342] rounded transition-colors cursor-pointer shadow-xs"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
