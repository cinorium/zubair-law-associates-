import React from 'react';
import { chamberProfile } from '../data/chamberInfo';
import { Scale, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-[#0A1224] text-slate-300 pt-14 sm:pt-18 pb-12 sm:pb-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 sm:pb-14 border-b border-slate-800/90">
          
          {/* Brand & Chamber Summary (5 cols) */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-slate-900 border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <span className="font-brand-title text-lg sm:text-xl font-bold tracking-wider uppercase text-white truncate">
                Zubair Law Associates
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Chambers of <strong>S.M. Zubair, Advocate High Court</strong>. Dedicated to principled courtroom advocacy across civil, criminal, family, and constitutional writ jurisdictions, and maintaining Pakistan’s digital repository of standard pleadings.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="leading-snug">{chamberProfile.chambersAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`tel:${chamberProfile.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors tabular-nums font-mono text-slate-200">
                  {chamberProfile.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="truncate">{chamberProfile.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Practice Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
              Practice Domains
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#practice-areas" className="hover:text-white transition-colors block py-0.5">
                  Civil Suits & Sale Deed Cancellation
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-white transition-colors block py-0.5">
                  Criminal Bail & Reduction of Sureties
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-white transition-colors block py-0.5">
                  Habeas Corpus Writs (Section 491)
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-white transition-colors block py-0.5">
                  Family Dissolution (Khula) & Custody
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-white transition-colors block py-0.5">
                  Rent Ejectment Applications (SRPO)
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-white transition-colors block py-0.5">
                  Conveyancing & Agreement to Sell
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Drafts Quick Access (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
              Pleadings Archive
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#drafts-library" className="hover:text-white transition-colors block py-0.5">
                  Habeas Corpus 491 Format
                </a>
              </li>
              <li>
                <a href="#drafts-library" className="hover:text-white transition-colors block py-0.5">
                  Surety Reduction Application
                </a>
              </li>
              <li>
                <a href="#drafts-library" className="hover:text-white transition-colors block py-0.5">
                  Civil Plaint Formats (CPC)
                </a>
              </li>
              <li>
                <a href="#drafts-library" className="hover:text-white transition-colors block py-0.5">
                  Legal Notice under Defamation
                </a>
              </li>
              <li>
                <a href="#drafts-library" className="hover:text-white transition-colors block py-0.5">
                  Agreement to Sell Format
                </a>
              </li>
            </ul>
          </div>

          {/* Consultation CTA (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
              Chambers Advisory
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Available for judicial briefs, legal drafting vetting, and courtroom appearances.
            </p>
            <button
              onClick={onOpenConsultation}
              className="w-full px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0A1224] bg-[#C5A059] hover:bg-[#d4b067] rounded transition-all duration-200 cursor-pointer text-center active:scale-[0.98] shadow-sm"
            >
              Book Advisory
            </button>
          </div>

        </div>

        {/* Legal Disclaimer & Bar Council Compliance Notice */}
        <div className="pt-8 space-y-3 text-[11px] text-slate-400 leading-relaxed">
          <p>
            <strong>Statutory Legal Notice & Bar Ethics:</strong> In compliance with the rules and regulations framed under the Legal Practitioners and Bar Councils Act, 1973 and the Canons of Professional Conduct of the Pakistan Bar Council, this digital portal does not constitute solicitation, advertisement, or personal publicity. All legal drafts and procedural commentary are provided for informational and educational reference for law students and practitioners. Consult qualified counsel for specific legal advice.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 border-t border-slate-800 text-slate-400 text-center sm:text-left">
            <div>
              © {new Date().getFullYear()} Zubair Law Associates · All Rights Reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs">
              <span className="text-slate-400">Redesigned from "The Advocate" Repository</span>
              <a
                href="https://advocatesmzubair.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white inline-flex items-center gap-1 transition-colors text-slate-300"
              >
                <span>Original Blogspot Archive</span>
                <ExternalLink className="w-3 h-3 text-[#C5A059]" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
