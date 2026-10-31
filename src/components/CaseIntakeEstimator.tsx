import React, { useState } from 'react';
import { Scale, ArrowRight, Clock, FileText, CheckCircle, Landmark } from 'lucide-react';

interface CaseIntakeEstimatorProps {
  onSelectDraft: (draftId: string) => void;
  onOpenConsultation: (subject: string) => void;
}

interface CaseMatterConfig {
  id: string;
  name: string;
  category: string;
  court: string;
  duration: string;
  primaryStatute: string;
  recommendedDraftId: string;
  draftName: string;
  essentialDocs: string[];
  remedySummary: string;
}

export const CaseIntakeEstimator: React.FC<CaseIntakeEstimatorProps> = ({
  onSelectDraft,
  onOpenConsultation,
}) => {
  const matters: CaseMatterConfig[] = [
    {
      id: 'habeas',
      name: 'Unlawful Police Detention / Missing Person',
      category: 'Constitutional / Liberty',
      court: 'High Court of Sindh or Sessions Judge',
      duration: '24 to 48 Hours',
      primaryStatute: 'Section 491 Cr.P.C. & Art. 199 Constitution',
      recommendedDraftId: 'habeas-corpus-491',
      draftName: 'Habeas Corpus 491 Petition',
      essentialDocs: ['Affidavit of close kin', 'Date, time & location of pick-up', 'CNIC of applicant'],
      remedySummary: 'Urgent raid order through Court Bailiff to recover detainee and produce before bench.'
    },
    {
      id: 'surety',
      name: 'High / Prohibitive Surety Bond Amount',
      category: 'Criminal Procedure',
      court: 'Judicial Magistrate / Sessions Judge',
      duration: '3 to 7 Days',
      primaryStatute: 'Section 498 Cr.P.C.',
      recommendedDraftId: 'surety-reduction-application',
      draftName: 'Surety Reduction Application',
      essentialDocs: ['Bail grant order copy', 'Salary/indigence proof', 'Surety PR bond papers'],
      remedySummary: 'Judicial reduction of bail bond figure to prevent constructive imprisonment.'
    },
    {
      id: 'title-fraud',
      name: 'Forged Property Sale Deed / Fraudulent Transfer',
      category: 'Civil Litigation',
      court: 'Senior Civil Judge / District Judge',
      duration: '6 to 18 Months (Immediate Ad-Interim Stay)',
      primaryStatute: 'Order 7 Rule 1 CPC & Sec 39/42 Specific Relief Act',
      recommendedDraftId: 'civil-plaint-cancellation-deed',
      draftName: 'Plaint for Cancellation of Sale Deed',
      essentialDocs: ['Original title chain', 'Certified copy of fraudulent deed', 'Mutation extracts'],
      remedySummary: 'Ad-interim injunction restraining alienation and final decree declaring deed void.'
    },
    {
      id: 'khula',
      name: 'Dissolution of Marriage (Khula) & Maintenance',
      category: 'Family Jurisprudence',
      court: 'Special Family Court (District East/South/Central)',
      duration: '3 to 6 Months',
      primaryStatute: 'Family Courts Act 1964 & Sec 17-A',
      recommendedDraftId: 'family-khula-maintenance',
      draftName: 'Khula & Maintenance Family Plaint',
      essentialDocs: ['Nikahnama', 'Children birth certificates', 'Itemized list of dowry articles'],
      remedySummary: 'Expedited decree of Khula, interim child maintenance order, and dowry restitution.'
    },
    {
      id: 'rent-eviction',
      name: 'Commercial or Residential Tenant Default',
      category: 'Tenancy / Real Estate',
      court: 'Court of Rent Controller',
      duration: '4 to 8 Months',
      primaryStatute: 'Section 15, Sindh Rented Premises Ordinance 1979',
      recommendedDraftId: 'rent-eviction-srpo',
      draftName: 'Rent Ejectment Application',
      essentialDocs: ['Tenancy Agreement', 'Proof of ownership', 'Written notice of default'],
      remedySummary: 'Tentative rent deposit order under Section 16(1) and ejectment decree.'
    },
    {
      id: 'defamation-notice',
      name: 'Reputational Slander or Defamatory Social Media Post',
      category: 'Civil Pre-Action',
      court: 'District Judge (Preceded by 14-Day Notice)',
      duration: '14-Day Statutory Notice Period',
      primaryStatute: 'Section 8, Defamation Ordinance 2002',
      recommendedDraftId: 'legal-notice-defamation-damages',
      draftName: 'Defamation Statutory Notice',
      essentialDocs: ['Certified screenshots/links of posts', 'Proof of professional standing'],
      remedySummary: 'Formal advocate notice demanding immediate apology and damages compensation.'
    }
  ];

  const [selectedMatterId, setSelectedMatterId] = useState(matters[0].id);
  const activeMatter = matters.find(m => m.id === selectedMatterId) || matters[0];

  return (
    <section className="py-14 sm:py-18 lg:py-24 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B48C48] mb-2">
            Preliminary Case Assessment
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0A1224] leading-tight">
            Determine Court Forum & Legal Next Steps.
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
            Select your legal dispute type to review jurisdictional forum, procedural timeline, necessary documents, and corresponding verified pleading templates.
          </p>
        </div>

        {/* Matter Type Pills / Buttons - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
          {matters.map((matter) => {
            const isSelected = matter.id === activeMatter.id;
            return (
              <button
                key={matter.id}
                onClick={() => setSelectedMatterId(matter.id)}
                className={`p-3 sm:p-3.5 text-left rounded border text-xs transition-all duration-200 cursor-pointer flex flex-col justify-between active:scale-[0.98] ${
                  isSelected
                    ? 'bg-[#0A1224] text-white border-[#0A1224] shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <span className="font-semibold line-clamp-2 leading-snug">{matter.name}</span>
                <span className={`text-[10px] mt-2 truncate font-medium ${isSelected ? 'text-[#C5A059]' : 'text-slate-500'}`}>
                  {matter.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Assessment Card Output */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-7 lg:p-9 shadow-sm chamber-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left Column: Procedural Dossier (8 cols) */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              <div>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#B48C48]">
                  Assessment Overview
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1224] mt-1">
                  {activeMatter.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {activeMatter.remedySummary}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1">
                <div className="bg-[#F8F9FA] p-3.5 rounded border border-slate-200">
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Landmark className="w-3.5 h-3.5 text-[#B48C48] shrink-0" />
                    <span>Court Forum</span>
                  </div>
                  <div className="text-xs font-semibold text-[#0A1224]">
                    {activeMatter.court}
                  </div>
                </div>

                <div className="bg-[#F8F9FA] p-3.5 rounded border border-slate-200">
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#B48C48] shrink-0" />
                    <span>Est. Timeline</span>
                  </div>
                  <div className="text-xs font-semibold text-[#0A1224]">
                    {activeMatter.duration}
                  </div>
                </div>

                <div className="bg-[#F8F9FA] p-3.5 rounded border border-slate-200">
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Scale className="w-3.5 h-3.5 text-[#B48C48] shrink-0" />
                    <span>Governing Code</span>
                  </div>
                  <div className="text-xs font-semibold text-[#0A1224]">
                    {activeMatter.primaryStatute}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Essential Documents Needed to File:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activeMatter.essentialDocs.map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-[#F8F9FA] p-2.5 rounded border border-slate-200">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0F5132] shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Actions (4 cols) */}
            <div className="lg:col-span-4 bg-[#F8F9FA] p-5 sm:p-6 rounded-lg border border-slate-200 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Recommended Court Format
                </span>
                <h4 className="font-display text-base sm:text-lg font-semibold text-[#0A1224] mt-1">
                  {activeMatter.draftName}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Standard template compliant with High Court rules.
                </p>
              </div>

              <div className="space-y-2">
                <a
                  href="#drafts-library"
                  onClick={() => onSelectDraft(activeMatter.recommendedDraftId)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#0A1224] bg-white border border-slate-300 hover:bg-slate-50 rounded transition-colors text-center"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Inspect & Customize Draft</span>
                </a>

                <button
                  onClick={() => onOpenConsultation(`Case Intake: ${activeMatter.name}`)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1224] hover:bg-[#152342] rounded transition-all duration-200 cursor-pointer shadow-xs text-center active:scale-[0.98]"
                >
                  <span>Book Case Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center leading-normal">
                Direct briefing with Advocate S.M. Zubair before filing in court.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
