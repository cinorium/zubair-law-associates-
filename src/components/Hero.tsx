import React, { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onSearchDrafts: (query: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onSearchDrafts }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearchDrafts(searchInput.trim());
      const el = document.getElementById('drafts-library');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickTopicClick = (topic: string) => {
    setSearchInput(topic);
    onSearchDrafts(topic);
    const el = document.getElementById('drafts-library');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-18 lg:pt-16 lg:pb-24 border-b border-slate-200 bg-[#F4F6F9] animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Signal (No pills, quiet unboxed editorial metadata) */}
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold uppercase tracking-widest text-[#B48C48] mb-5 sm:mb-7 animate-slide-up">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#B48C48] shrink-0" />
            <span>Chambers of S.M. Zubair</span>
          </div>
          <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
          <span>Advocate High Court of Sindh</span>
          <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
          <span className="text-slate-600">Karachi, Pakistan</span>
        </div>

        {/* 2-Column Split: Editorial Value Prop on Left, High-Fidelity Chamber Asset on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Heading, Value Proposition & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-tight text-[#0A1224] leading-[1.12] mb-5 sm:mb-6">
              Precision Advocacy in Superior Courts & Definitive Legal Drafting.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl mb-7 sm:mb-8 font-normal">
              Led by <strong>S.M. Zubair, Advocate High Court</strong>, Zubair Law Associates delivers principled courtroom representation across civil, criminal, family, and constitutional matters, alongside an open, rigorously vetted procedural drafting repository for litigants and legal practitioners.
            </p>

            {/* Interactive Search for Legal Drafts */}
            <form onSubmit={handleSearchSubmit} className="relative max-w-xl mb-4 sm:mb-5">
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0 shadow-xs rounded-lg overflow-hidden border border-slate-300 focus-within:border-[#0A1224] focus-within:ring-2 focus-within:ring-[#0A1224]/10 transition-all bg-white">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search drafts: 'Habeas Corpus 491', 'Bail 498', 'Khula'..."
                    className="w-full pl-10 pr-4 sm:pr-24 py-3 text-xs sm:text-sm bg-transparent border-0 focus:outline-none text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 sm:py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1224] hover:bg-[#152342] transition-colors whitespace-nowrap cursor-pointer text-center"
                >
                  Find Draft
                </button>
              </div>
            </form>

            {/* Quick Draft Filters */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-500 mb-7 sm:mb-9">
              <span className="font-semibold text-slate-700 shrink-0 uppercase tracking-wider text-[11px]">Key Precedents:</span>
              {[
                'Habeas Corpus 491',
                'Surety Reduction',
                'Sale Deed Cancellation',
                'Family Khula Suit',
                'Rent Ejectment 15'
              ].map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => handleQuickTopicClick(topic)}
                  className="text-slate-600 hover:text-[#0A1224] hover:underline transition-colors cursor-pointer py-0.5"
                >
                  {topic}
                </button>
              ))}
            </div>

            {/* Primary Action & Secondary Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#0A1224] hover:bg-[#152342] rounded shadow-xs hover:shadow transition-all duration-200 active:scale-[0.98] whitespace-nowrap cursor-pointer border border-[#0A1224]"
              >
                <span>Request Case Evaluation</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </button>

              <a
                href="#drafts-library"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-medium text-slate-800 bg-white border border-slate-300 rounded hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 whitespace-nowrap text-center shadow-2xs"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Explore Court Formats</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Photographic Carrier (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full relative rounded-xl overflow-hidden border border-slate-300 shadow-md bg-[#0A1224] chamber-card group">
              <img
                src="/src/assets/images/hero_law_chambers_1793450805328.jpg"
                alt="Law Chambers Library and Consultation Desk at Zubair Law Associates"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-84 lg:h-[430px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1224]/90 via-[#0A1224]/25 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-white">
                <p className="text-[11px] font-semibold tracking-widest uppercase text-[#C5A059] mb-1">
                  Chambers Practice Scope
                </p>
                <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold leading-snug text-white">
                  High Court of Sindh & Subordinate Courts
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
                  Specialized in procedural pleadings, constitutional petitions, and evidentiary civil-criminal defense before all Karachi judicial districts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Editorial Metric & Trust Strip */}
        <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 text-slate-900">
          <div className="p-2 sm:p-0">
            <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A1224] tabular-nums">
              18+ Years
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider font-medium mt-1">
              Trial & Appellate Standing
            </div>
          </div>

          <div className="p-2 sm:p-0">
            <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A1224]">
              High Court
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider font-medium mt-1">
              Sindh High Court Bar (SHCBA)
            </div>
          </div>

          <div className="p-2 sm:p-0">
            <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A1224] tabular-nums">
              100%
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider font-medium mt-1">
              Statutory Vetting (CPC / Cr.P.C.)
            </div>
          </div>

          <div className="p-2 sm:p-0">
            <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A1224]">
              Karachi
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider font-medium mt-1">
              Principal Seat & City Courts
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
