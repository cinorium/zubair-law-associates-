import React from 'react';
import { chamberProfile } from '../data/chamberInfo';
import { Landmark, Award, MapPin, CheckCircle, Phone, Mail } from 'lucide-react';

interface AboutChambersProps {
  onOpenConsultation: () => void;
}

export const AboutChambers: React.FC<AboutChambersProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about-chambers" className="py-14 sm:py-18 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B48C48] mb-2">
            The Advocate & Chambers Profile
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0A1224] leading-tight">
            Principled Representation in Superior & Subordinate Courts.
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
            Advocate S.M. Zubair has served the Karachi and Sindh legal fraternity for nearly two decades, combining rigorous courtroom advocacy with public legal education.
          </p>
        </div>

        {/* 2-Column Split: Editorial Profile + Judicial Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 sm:mb-16">
          
          {/* Left Column: Biography & Professional Ethos (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="border-l-2 border-[#B48C48] pl-3.5 sm:pl-4 py-1">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1224]">
                S.M. Zubair, Advocate High Court
              </h3>
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-slate-500 font-sans mt-0.5 font-medium">
                Principal Advocate, Zubair Law Associates · Enrolled High Court of Sindh
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {chamberProfile.biography.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Bar Admissions & Standing */}
            <div className="pt-3 sm:pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 sm:mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#B48C48] shrink-0" />
                <span>Bar Admissions & Statutory Standing</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {chamberProfile.admissions.map((admission, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-[#F8F9FA] p-3 rounded border border-slate-200">
                    <CheckCircle className="w-4 h-4 text-[#0F5132] shrink-0 mt-0.5" />
                    <span>{admission}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Strip */}
            <div className="pt-3 sm:pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600">
              <a 
                href={`tel:${chamberProfile.phone.replace(/[^0-9+]/g, '')}`} 
                className="flex items-center gap-2 hover:text-[#0A1224] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B48C48] shrink-0" />
                <span className="font-semibold text-slate-900 tabular-nums font-mono">{chamberProfile.phone}</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B48C48] shrink-0" />
                <span className="truncate">{chamberProfile.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B48C48] shrink-0" />
                <span>{chamberProfile.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Imagery & Court Venues (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="relative rounded-xl overflow-hidden border border-slate-300 shadow-md bg-[#0A1224] chamber-card group">
              <img
                src="/src/assets/images/high_court_facade_1793450805831.jpg"
                alt="High Court Judicial Architecture"
                referrerPolicy="no-referrer"
                className="w-full h-52 sm:h-60 lg:h-68 object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="p-4 bg-[#0A1224] text-slate-200 border-t border-[#C5A059]/20">
                <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-[#C5A059]">
                  Judicial Forum
                </div>
                <div className="font-display text-sm sm:text-base font-semibold text-white">
                  High Court of Sindh (Principal Seat, Karachi)
                </div>
              </div>
            </div>

            {/* Courts Practiced List */}
            <div className="bg-[#F8F9FA] border border-slate-200 rounded-lg p-5 chamber-card">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 sm:mb-3 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#B48C48] shrink-0" />
                <span>Court Appearances & Territorial Reach</span>
              </h4>
              <ul className="space-y-2">
                {chamberProfile.courtsPracticed.map((court, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="text-[#B48C48] mt-0.5">•</span>
                    <span>{court}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
