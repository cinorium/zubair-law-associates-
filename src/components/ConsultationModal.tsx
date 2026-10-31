import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Phone, MessageSquare, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import { chamberProfile } from '../data/chamberInfo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledSubject?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledSubject = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [practiceDomain, setPracticeDomain] = useState(prefilledSubject || 'Civil Litigation & Property Suits');
  const [urgency, setUrgency] = useState<'urgent' | 'regular'>('regular');
  const [caseSummary, setCaseSummary] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Update practiceDomain when prefilledSubject changes
  useEffect(() => {
    if (prefilledSubject) {
      setPracticeDomain(prefilledSubject);
    }
  }, [prefilledSubject]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleReset();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Form validation
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    const cleanPhone = phone.trim().replace(/[\s-]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid contact phone number with country/area code (e.g. 0300-1234567 or +923001234567).');
      return;
    }

    if (!caseSummary.trim() || caseSummary.trim().length < 15) {
      setErrorMsg('Please provide a brief description of the legal matter (at least 15 characters) so counsel can prepare.');
      return;
    }

    setIsSubmitting(true);

    // Simulate consultation booking receipt
    setTimeout(() => {
      const generatedRef = `ZLA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setRefId(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setCaseSummary('');
    setErrorMsg('');
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Assalam-o-Alaikum Advocate S.M. Zubair. I am reaching out regarding a legal matter (${practiceDomain}). Please advise on scheduling a consultation.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white border border-slate-300 rounded-xl max-w-lg w-full p-5 sm:p-7 md:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto animate-slide-up"
      >
        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute right-3.5 top-3.5 sm:right-5 sm:top-5 p-1.5 text-slate-400 hover:text-slate-700 rounded hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-4 sm:py-6 space-y-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-50 text-[#0F5132] flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1224]">
              Consultation Intake Received
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              Thank you, <strong>{fullName}</strong>. Your consultation dossier has been registered under case docket reference:
            </p>

            <div className="bg-[#F8F9FA] border border-slate-300 py-2.5 px-5 rounded font-mono text-base font-bold text-[#0A1224] inline-block tracking-wider">
              {refId}
            </div>

            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Chambers of Advocate S.M. Zubair will review your matter and contact you at <strong>{phone}</strong> within our standard consultation hours.
            </p>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
              <a
                href={`https://wa.me/${chamberProfile.whatsapp}?text=${encodeURIComponent(`Assalam-o-Alaikum Advocate S.M. Zubair. I submitted consultation request ref ${refId} for ${practiceDomain}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#0F5132] hover:bg-[#0c4128] rounded transition-colors flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Connect via WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors cursor-pointer text-center"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4 sm:mb-6 pr-6">
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#B48C48] mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B48C48] shrink-0" />
                <span>Chamber Intake & Confidential Advisory</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1224]">
                Schedule Legal Consultation
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Consult Advocate S.M. Zubair regarding High Court writs, bail applications, property title, or family litigation.
              </p>
            </div>

            {/* Quick Urgent Connect Notice */}
            <div className="mb-4 sm:mb-6 p-3 bg-[#F8F9FA] rounded border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-[#B48C48] shrink-0" />
                <span>Direct Chambers:</span>
                <strong className="text-[#0A1224] font-mono tabular-nums">{chamberProfile.phone}</strong>
              </div>

              <a
                href={`https://wa.me/${chamberProfile.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#0F5132] hover:underline flex items-center gap-1 whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Quick WhatsApp</span>
              </a>
            </div>

            {errorMsg && (
              <div className="mb-4 p-2.5 sm:p-3 bg-red-50 border border-red-200 rounded flex items-start gap-2 text-xs text-red-700">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700">
                    Full Name <span className="text-[#0A1224] font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Muhammad Farhan"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0A1224] focus:border-[#0A1224]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700">
                    Contact Phone Number <span className="text-[#0A1224] font-bold">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0300-9215352"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0A1224] focus:border-[#0A1224]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. client@domain.com"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0A1224] focus:border-[#0A1224]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700">
                    Legal Category <span className="text-[#0A1224] font-bold">*</span>
                  </label>
                  <select
                    value={practiceDomain}
                    onChange={(e) => setPracticeDomain(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0A1224] focus:border-[#0A1224]"
                  >
                    <option value="Civil Litigation & Property Suits">Civil Litigation & Property Suits</option>
                    <option value="Criminal Defence & Bail Jurisprudence">Criminal Defence & Bail Jurisprudence</option>
                    <option value="Constitutional Writs & Habeas Corpus">Constitutional Writs & Habeas Corpus (Sec 491)</option>
                    <option value="Family Law, Khula & Minor Custody">Family Law, Khula & Minor Custody</option>
                    <option value="Rent Eviction & Tenancy Disputes">Rent Eviction & Tenancy Disputes (SRPO)</option>
                    <option value="Conveyancing, Contracts & Drafting Review">Conveyancing, Contracts & Drafting Review</option>
                    <option value="Other High Court Matter">Other High Court Matter</option>
                  </select>
                </div>
              </div>

              {/* Urgency Radio Indicator */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700">
                  Case Urgency
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="urgency"
                      checked={urgency === 'regular'}
                      onChange={() => setUrgency('regular')}
                      className="text-[#0A1224] focus:ring-[#0A1224]"
                    />
                    <span>Standard Consultation (Within 24-48 hrs)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="urgency"
                      checked={urgency === 'urgent'}
                      onChange={() => setUrgency('urgent')}
                      className="text-[#B48C48] focus:ring-[#B48C48]"
                    />
                    <span className="text-[#0A1224] font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#B48C48]" />
                      Immediate / Detention / Bail Motion
                    </span>
                  </label>
                </div>
              </div>

              {/* Case Summary */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700">
                  Brief Facts of the Matter <span className="text-[#0A1224] font-bold">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={caseSummary}
                  onChange={(e) => setCaseSummary(e.target.value)}
                  placeholder="Summarize the core facts: relevant court/police station, date of cause of action, property survey number or FIR number if applicable..."
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0A1224] focus:border-[#0A1224] leading-relaxed"
                />
              </div>

              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                <div className="text-[11px] text-slate-500 text-center sm:text-left">
                  Strict Attorney-Client Confidentiality
                </div>

                <div className="flex items-center gap-2 justify-end">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex-1 sm:flex-none px-3.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer text-center"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1224] hover:bg-[#152342] rounded transition-colors shadow-xs cursor-pointer disabled:opacity-50 text-center"
                  >
                    {isSubmitting ? 'Registering...' : 'Submit Dossier'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
