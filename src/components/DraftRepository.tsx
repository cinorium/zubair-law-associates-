import React, { useState, useMemo, useEffect, useRef } from 'react';
import { legalDrafts } from '../data/legalDrafts';
import { LegalDraft, PracticeCategory } from '../types/legal';
import { 
  Search, 
  Copy, 
  Check, 
  Printer, 
  Sliders, 
  CheckCircle2, 
  BookMarked,
  X,
  ArrowLeft,
  ChevronRight
} from 'lucide-react';

interface DraftRepositoryProps {
  initialSearchQuery?: string;
  onOpenConsultation: (draftTitle?: string) => void;
}

export const DraftRepository: React.FC<DraftRepositoryProps> = ({ 
  initialSearchQuery = '', 
  onOpenConsultation 
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedCategory, setSelectedCategory] = useState<PracticeCategory>('all');
  const [activeDraft, setActiveDraft] = useState<LegalDraft>(legalDrafts[0]);
  const [copied, setCopied] = useState(false);
  
  // Customization state for current draft placeholders
  const [customValues, setCustomValues] = useState<Record<string, string>>({});
  const [viewMode, setViewMode] = useState<'standard' | 'customize' | 'checklist'>('standard');
  
  // Mobile active tab: 'list' | 'reader'
  const [mobileTab, setMobileTab] = useState<'list' | 'reader'>('list');
  const readerRef = useRef<HTMLDivElement>(null);

  // Synchronize initial search query if changed externally
  useEffect(() => {
    if (initialSearchQuery) {
      setSearchQuery(initialSearchQuery);
      setMobileTab('list');
    }
  }, [initialSearchQuery]);

  // Reset custom values when switching active draft
  useEffect(() => {
    const defaults: Record<string, string> = {};
    activeDraft.placeholders.forEach(p => {
      defaults[p.key] = p.defaultValue;
    });
    setCustomValues(defaults);
    setCopied(false);
  }, [activeDraft]);

  const categories: Array<{ id: PracticeCategory; label: string }> = [
    { id: 'all', label: 'All Drafts' },
    { id: 'constitutional', label: 'Constitutional' },
    { id: 'criminal', label: 'Criminal / Bail' },
    { id: 'civil', label: 'Civil Plaints' },
    { id: 'family', label: 'Family / Khula' },
    { id: 'rent', label: 'Rent Eviction' },
    { id: 'corporate', label: 'Conveyancing' },
  ];

  const filteredDrafts = useMemo(() => {
    return legalDrafts.filter(draft => {
      const matchesCategory = selectedCategory === 'all' || draft.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesQuery = 
        draft.title.toLowerCase().includes(q) ||
        draft.shortDescription.toLowerCase().includes(q) ||
        draft.statutoryBasis.toLowerCase().includes(q) ||
        draft.forumCourt.toLowerCase().includes(q) ||
        draft.templateContent.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  // Generate resolved text with custom values
  const compiledDraftText = useMemo(() => {
    let text = activeDraft.templateContent;
    activeDraft.placeholders.forEach(p => {
      const val = customValues[p.key] || p.defaultValue;
      text = text.split(`{{${p.key}}}`).join(val);
    });
    return text;
  }, [activeDraft, customValues]);

  const handleSelectDraft = (draft: LegalDraft) => {
    setActiveDraft(draft);
    setViewMode('standard');
    setMobileTab('reader');
    if (window.innerWidth < 1024 && readerRef.current) {
      setTimeout(() => {
        readerRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(compiledDraftText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${activeDraft.title} - Zubair Law Associates</title>
          <style>
            body {
              font-family: 'Times New Roman', 'Source Serif 4', Georgia, serif;
              line-height: 1.6;
              padding: 40px;
              color: #000;
              max-width: 850px;
              margin: 0 auto;
            }
            pre {
              white-space: pre-wrap;
              word-break: break-word;
              font-family: inherit;
              font-size: 13pt;
              margin: 0;
            }
            .header-banner {
              text-align: center;
              border-bottom: 2px solid #0A1224;
              padding-bottom: 12px;
              margin-bottom: 30px;
            }
            .firm-name {
              font-size: 18pt;
              font-weight: bold;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: #0A1224;
            }
            .firm-sub {
              font-size: 10pt;
              color: #555;
            }
          </style>
        </head>
        <body>
          <div class="header-banner">
            <div class="firm-name">Zubair Law Associates</div>
            <div class="firm-sub">Chambers of S.M. Zubair, Advocate High Court of Sindh · Karachi</div>
          </div>
          <pre>${compiledDraftText}</pre>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <section id="drafts-library" className="py-14 sm:py-18 lg:py-24 bg-[#F1F3F7] border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#B48C48] mb-2">
              Judicial Drafting Repository & Pleadings
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0A1224] leading-tight">
              The Practitioner's Legal Library.
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm lg:text-base max-w-2xl leading-relaxed">
              Curated by Advocate S.M. Zubair from active court pleadings before the High Court of Sindh and District Courts of Karachi. Search, inspect, customize, and print verified drafting formats.
            </p>
          </div>

          <div className="shrink-0 flex items-center">
            <button
              onClick={() => onOpenConsultation(`Review of Draft: ${activeDraft.title}`)}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1224] hover:bg-[#152342] rounded transition-all duration-200 shadow-xs cursor-pointer whitespace-nowrap text-center active:scale-[0.98]"
            >
              Have Advocate Review This Draft
            </button>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 sm:p-5 mb-6 sm:mb-8 shadow-xs">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search: '491', 'bail', 'surety', 'khula', 'rent'..."
                className="w-full pl-10 pr-8 py-2.5 text-xs sm:text-sm bg-[#F8F9FA] border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-[#0A1224]/10 focus:border-[#0A1224] text-slate-900 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Total Results Count */}
            <div className="text-xs text-slate-500 whitespace-nowrap px-1">
              Showing <span className="font-bold text-[#0A1224] tabular-nums">{filteredDrafts.length}</span> verified formats
            </div>
          </div>

          {/* Category Filter Horizontal Scrollbar */}
          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#0A1224] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile View Mode Switcher */}
        <div className="lg:hidden flex items-center mb-4 p-1 bg-slate-200 rounded">
          <button
            onClick={() => setMobileTab('list')}
            className={`flex-1 py-2 text-xs font-semibold rounded text-center transition-colors cursor-pointer ${
              mobileTab === 'list'
                ? 'bg-white text-[#0A1224] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Select Format ({filteredDrafts.length})
          </button>
          <button
            onClick={() => setMobileTab('reader')}
            className={`flex-1 py-2 text-xs font-semibold rounded text-center transition-colors cursor-pointer ${
              mobileTab === 'reader'
                ? 'bg-white text-[#0A1224] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Document Reader
          </button>
        </div>

        {/* Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Draft List Navigation (4 cols) */}
          <div className={`lg:col-span-4 space-y-2.5 ${mobileTab === 'reader' ? 'hidden lg:block' : 'block'}`}>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-1 hidden lg:block">
              Available Court Formats:
            </div>

            {filteredDrafts.length === 0 ? (
              <div className="bg-white border border-dashed border-slate-300 rounded-lg p-6 text-center text-xs sm:text-sm text-slate-500">
                No matching draft found for "{searchQuery}". Try searching "bail", "491", or "suit".
              </div>
            ) : (
              <div className="space-y-2 max-h-[500px] lg:max-h-[640px] overflow-y-auto pr-1">
                {filteredDrafts.map((draft) => {
                  const isSelected = activeDraft.id === draft.id;
                  return (
                    <button
                      key={draft.id}
                      onClick={() => handleSelectDraft(draft)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-white border-[#0A1224] shadow-xs ring-1 ring-[#0A1224]/10'
                          : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                        <span className="font-semibold uppercase tracking-wider text-[#B48C48]">
                          {draft.category}
                        </span>
                        <span className="truncate max-w-[130px] sm:max-w-[160px] text-slate-500 text-right">
                          {draft.forumCourt.split(',')[0]}
                        </span>
                      </div>

                      <h4 className="font-display text-sm sm:text-base font-semibold text-[#0A1224] line-clamp-1">
                        {draft.title}
                      </h4>

                      <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                        {draft.shortDescription}
                      </p>

                      <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#B48C48] font-semibold lg:hidden">
                        <span>Open Document Reader</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Draft Reader & Interactive Customizer (8 cols) */}
          <div 
            ref={readerRef}
            className={`lg:col-span-8 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col ${
              mobileTab === 'list' ? 'hidden lg:flex' : 'flex'
            }`}
          >
            {/* Mobile Back Button to list */}
            <div className="lg:hidden p-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setMobileTab('list')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Formats List</span>
              </button>
              <span className="text-[11px] text-slate-500 truncate max-w-[180px]">
                {activeDraft.title}
              </span>
            </div>

            {/* Document Header Bar */}
            <div className="p-4 sm:p-6 border-b border-slate-200 bg-[#F8F9FA]">
              <div className="flex flex-col gap-3 mb-3">
                <div>
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#B48C48]">
                    {activeDraft.jurisdiction}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0A1224] mt-0.5 leading-snug">
                    {activeDraft.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Statutory Authority: <span className="font-medium text-slate-700">{activeDraft.statutoryBasis}</span>
                  </p>
                </div>

                {/* View Mode Switcher */}
                <div className="flex flex-wrap items-center p-1 bg-slate-200 rounded shrink-0 self-start gap-1">
                  <button
                    onClick={() => setViewMode('standard')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                      viewMode === 'standard'
                        ? 'bg-white text-[#0A1224] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Draft Preview
                  </button>
                  <button
                    onClick={() => setViewMode('customize')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer flex items-center gap-1.5 ${
                      viewMode === 'customize'
                        ? 'bg-white text-[#0A1224] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Sliders className="w-3.5 h-3.5 text-[#B48C48]" />
                    <span>Fill Variables</span>
                  </button>
                  <button
                    onClick={() => setViewMode('checklist')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer flex items-center gap-1.5 ${
                      viewMode === 'checklist'
                        ? 'bg-white text-[#0A1224] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <BookMarked className="w-3.5 h-3.5 text-[#B48C48]" />
                    <span>Checklist</span>
                  </button>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-3 border-t border-slate-200 text-xs">
                <div className="text-slate-500 font-mono text-[11px] truncate">
                  Court: {activeDraft.forumCourt}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 bg-white border border-slate-300 rounded hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs whitespace-nowrap"
                    title="Copy text to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#0F5132]" />
                        <span className="text-[#0F5132] font-semibold">Pleading Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Pleadings</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handlePrint}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 bg-white border border-slate-300 rounded hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs whitespace-nowrap"
                    title="Print or export as clean court document"
                  >
                    <Printer className="w-3.5 h-3.5 text-slate-500" />
                    <span>Print Court Copy</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Reader Body according to selected view mode */}
            {viewMode === 'standard' && (
              <div className="p-4 sm:p-6 lg:p-8 bg-[#F8F9FA] overflow-x-hidden">
                <div className="bg-white p-5 sm:p-9 border border-slate-200 rounded-md shadow-xs max-w-full overflow-x-auto font-document-body text-xs sm:text-sm leading-relaxed text-slate-900">
                  <pre className="font-document-body whitespace-pre-wrap break-words leading-relaxed select-text font-normal text-slate-900 text-[13px] sm:text-[15px]">
                    {compiledDraftText}
                  </pre>
                </div>

                {/* Statutory footnote */}
                <div className="mt-4 p-3.5 sm:p-4 rounded bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  <strong className="text-[#0A1224]">Practitioner Note:</strong> {activeDraft.notes}
                </div>
              </div>
            )}

            {viewMode === 'customize' && (
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#0A1224]">
                    Customize Document Variables
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Update placeholder names, dates, amounts, and court details. Your changes immediately reflect in the preview, copy, and print versions.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {activeDraft.placeholders.map((p) => (
                    <div key={p.key} className="space-y-1">
                      <label className="text-xs font-medium text-slate-700">
                        {p.label}
                      </label>
                      <input
                        type="text"
                        value={customValues[p.key] ?? p.defaultValue}
                        onChange={(e) =>
                          setCustomValues({ ...customValues, [p.key]: e.target.value })
                        }
                        className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#0A1224] focus:border-[#0A1224]"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-end gap-2 sm:gap-3">
                  <button
                    onClick={() => {
                      const defaults: Record<string, string> = {};
                      activeDraft.placeholders.forEach(p => {
                        defaults[p.key] = p.defaultValue;
                      });
                      setCustomValues(defaults);
                    }}
                    className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium"
                  >
                    Reset to Defaults
                  </button>
                  <button
                    onClick={() => setViewMode('standard')}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1224] rounded hover:bg-[#152342] transition-colors"
                  >
                    View Updated Draft
                  </button>
                </div>
              </div>
            )}

            {viewMode === 'checklist' && (
              <div className="p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-6">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#0A1224] mb-1.5">
                    Filing Checklist & Mandatory Annexures
                  </h4>
                  <p className="text-xs text-slate-500 mb-3 sm:mb-4">
                    Ensure all required documents, affidavits, and court stamps are assembled before submitting to the filing counter.
                  </p>
                  <ul className="space-y-2">
                    {activeDraft.draftingChecklist.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 sm:p-3 rounded border border-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#0F5132] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#0A1224] mb-2">
                    Key Legal Provisions & Principles
                  </h4>
                  <ul className="space-y-2">
                    {activeDraft.keyProvisions.map((provision, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="text-[#B48C48] font-bold">•</span>
                        <span>{provision}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <span className="text-xs text-slate-500">
                    Need professional representation in court?
                  </span>
                  <button
                    onClick={() => onOpenConsultation(`Filing Assistance for: ${activeDraft.title}`)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1224] hover:bg-[#152342] rounded transition-colors cursor-pointer text-center"
                  >
                    Engage Chambers for Filing
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
