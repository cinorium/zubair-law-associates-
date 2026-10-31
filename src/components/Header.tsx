import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Scale, MessageSquare, ChevronRight } from 'lucide-react';
import { chamberProfile } from '../data/chamberInfo';

interface HeaderProps {
  onOpenConsultation: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Practice Areas', href: '#practice-areas' },
    { label: 'Drafts Library', href: '#drafts-library' },
    { label: 'Procedural Guides', href: '#procedural-guides' },
    { label: 'The Chambers', href: '#about-chambers' },
    { label: 'Court FAQ', href: '#court-faq' },
  ];

  return (
    <>
      <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled ? 'border-slate-200 shadow-xs py-0.5' : 'border-slate-200/80 py-0'
      }`}>
        {/* Strict Top Bar Contract: 3 zones separated by gap-4 md:gap-8 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4 md:gap-8">
          
          {/* Zone 1: Single text element wordmark in authoritative Cormorant serif */}
          <a 
            href="#" 
            className="flex items-center gap-3 text-slate-900 group whitespace-nowrap shrink-0 min-w-0"
          >
            <div className="w-9 h-9 rounded bg-[#0A1224] text-[#C5A059] flex items-center justify-center shadow-xs shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Scale className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-brand-title text-base sm:text-lg lg:text-xl font-bold tracking-wide uppercase text-[#0A1224] group-hover:text-[#B48C48] transition-colors truncate">
                Zubair Law Associates
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-500 font-sans font-medium truncate">
                Chambers of S.M. Zubair · Advocate High Court
              </span>
            </div>
          </a>

          {/* Zone 2: Concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`hover:text-[#0A1224] transition-colors whitespace-nowrap shrink-0 relative py-1 text-[13px] tracking-wide ${
                    isActive
                      ? 'text-[#0A1224] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#B48C48]'
                      : 'hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-[#B48C48]/50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action & responsive action triggers */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Call Icon (Visible on small screens) */}
            <a
              href={`tel:${chamberProfile.phone.replace(/[^0-9+]/g, '')}`}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded transition-colors"
              title={`Call Chambers: ${chamberProfile.phone}`}
              aria-label="Call Chambers"
            >
              <Phone className="w-4 h-4 text-[#B48C48]" />
            </a>

            {/* Desktop Direct Phone */}
            <a
              href={`tel:${chamberProfile.phone.replace(/[^0-9+]/g, '')}`}
              className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-950 px-3 py-2 rounded hover:bg-slate-100 transition-colors whitespace-nowrap"
              title="Call Chambers"
            >
              <Phone className="w-3.5 h-3.5 text-[#B48C48]" />
              <span className="tabular-nums font-mono text-[13px]">{chamberProfile.phone}</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenConsultation}
              className="px-3.5 sm:px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-[#0A1224] rounded hover:bg-[#152342] transition-all duration-200 active:scale-[0.98] shadow-xs hover:shadow whitespace-nowrap shrink-0 cursor-pointer border border-[#0A1224]"
            >
              <span className="hidden sm:inline">Book Consultation</span>
              <span className="sm:hidden">Consult</span>
            </button>

            {/* Mobile menu trigger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-950 rounded hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer & Backdrop */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col">
          {/* Backdrop */}
          <div 
            onClick={() => setMobileMenuOpen(false)} 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-200" 
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="relative bg-white border-b border-slate-200 w-full px-4 pt-4 pb-6 shadow-2xl flex flex-col max-h-[85vh] overflow-y-auto animate-slide-up">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <span className="font-brand-title text-sm font-bold uppercase tracking-wider text-[#0A1224]">
                Directory & Navigation
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-500 hover:text-slate-900 rounded hover:bg-slate-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-3 text-sm font-medium text-slate-800 hover:text-slate-950 hover:bg-slate-50 rounded transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`tel:${chamberProfile.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-800 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B48C48]" />
                <span>Call Chambers: {chamberProfile.phone}</span>
              </a>

              <a
                href={`https://wa.me/${chamberProfile.whatsapp}?text=${encodeURIComponent('Assalam-o-Alaikum Advocate S.M. Zubair. I would like to schedule a legal consultation.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-xs font-semibold text-white py-2.5 px-3 bg-[#0F5132] hover:bg-[#0c4128] rounded transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Connect via WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full text-center py-2.5 px-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#0A1224] rounded hover:bg-[#152342] transition-colors shadow-xs"
              >
                Book Judicial Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
