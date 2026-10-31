import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PracticeAreas } from './components/PracticeAreas';
import { CaseIntakeEstimator } from './components/CaseIntakeEstimator';
import { DraftRepository } from './components/DraftRepository';
import { LegalProcedureGuide } from './components/LegalProcedureGuide';
import { AboutChambers } from './components/AboutChambers';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { MessageSquare, Phone } from 'lucide-react';
import { chamberProfile } from './data/chamberInfo';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationSubject, setConsultationSubject] = useState<string>('');
  const [draftSearchQuery, setDraftSearchQuery] = useState<string>('');
  const [activeNavSection, setActiveNavSection] = useState<string>('home');

  const handleOpenConsultation = (subject?: string) => {
    setConsultationSubject(subject || '');
    setIsConsultationOpen(true);
  };

  const handleSearchDrafts = (query: string) => {
    setDraftSearchQuery(query);
  };

  const handleSelectDraftFromEstimator = (draftId: string) => {
    setDraftSearchQuery(draftId.replace(/-/g, ' '));
    const el = document.getElementById('drafts-library');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 flex flex-col font-sans selection:bg-[#0A1224] selection:text-[#C5A059] overflow-x-hidden">
      
      {/* Top Bar Header */}
      <Header
        activeSection={activeNavSection}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation('General Case Assessment')}
          onSearchDrafts={handleSearchDrafts}
        />

        {/* Practice Areas Section */}
        <PracticeAreas
          onSelectPracticeArea={(area) => handleOpenConsultation(`Matter regarding: ${area.title}`)}
          onOpenConsultation={(title) => handleOpenConsultation(title)}
        />

        {/* Preliminary Case Intake & Process Estimator */}
        <CaseIntakeEstimator
          onSelectDraft={handleSelectDraftFromEstimator}
          onOpenConsultation={(subject) => handleOpenConsultation(subject)}
        />

        {/* Legal Drafting Repository & Interactive Pleadings Library */}
        <DraftRepository
          initialSearchQuery={draftSearchQuery}
          onOpenConsultation={(title) => handleOpenConsultation(title)}
        />

        {/* Pakistani Court Procedural Timelines & Roadmaps */}
        <LegalProcedureGuide
          onOpenConsultation={(guideTitle) => handleOpenConsultation(guideTitle)}
        />

        {/* Chambers Profile & S.M. Zubair Biography */}
        <AboutChambers
          onOpenConsultation={() => handleOpenConsultation('Direct Chambers Consultation')}
        />

        {/* Court Frequently Addressed Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Case Consultation Intake Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefilledSubject={consultationSubject}
      />

      {/* Floating Quick Action Hub (Non-intrusive bottom corner for urgent assistance) */}
      <aside aria-label="Urgent Contact Actions" className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-30 flex items-center gap-2">
        <a
          href={`https://wa.me/${chamberProfile.whatsapp}?text=${encodeURIComponent('Assalam-o-Alaikum Advocate S.M. Zubair. I require urgent legal assistance regarding a court matter.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-[#0F5132] hover:bg-[#0c4128] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-xs font-semibold active:scale-95"
          title="WhatsApp Advocate S.M. Zubair"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline font-sans">WhatsApp Chambers</span>
        </a>

        <a
          href={`tel:${chamberProfile.phone.replace(/[^0-9+]/g, '')}`}
          className="flex items-center justify-center w-10 h-10 bg-[#0A1224] hover:bg-[#152342] text-[#C5A059] border border-[#C5A059]/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
          title="Call Chambers"
        >
          <Phone className="w-4 h-4" />
        </a>
      </aside>

    </div>
  );
}
