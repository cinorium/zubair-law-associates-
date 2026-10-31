export type PracticeCategory = 
  | 'all'
  | 'civil'
  | 'criminal'
  | 'family'
  | 'constitutional'
  | 'rent'
  | 'corporate';

export interface PracticeArea {
  id: string;
  category: PracticeCategory;
  title: string;
  headline: string;
  description: string;
  keyRemedies: string[];
  governingLaws: string[];
  courtForum: string;
  draftsCount: number;
}

export interface LegalDraft {
  id: string;
  category: PracticeCategory;
  title: string;
  shortDescription: string;
  statutoryBasis: string;
  forumCourt: string;
  jurisdiction: string;
  standardParties: {
    petitionerOrPlaintiff: string;
    respondentOrDefendant: string;
  };
  keyProvisions: string[];
  draftingChecklist: string[];
  placeholders: Array<{
    key: string;
    label: string;
    defaultValue: string;
  }>;
  templateContent: string;
  notes: string;
}

export interface LegalGuide {
  id: string;
  title: string;
  category: string;
  estimatedDuration: string;
  primaryCourt: string;
  steps: Array<{
    title: string;
    description: string;
    documentsRequired: string[];
    timeline: string;
  }>;
}

export interface ChamberProfile {
  name: string;
  title: string;
  firmName: string;
  primaryBar: string;
  admissions: string[];
  experienceYears: number;
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
  chambersAddress: string;
  hours: string;
  courtsPracticed: string[];
  biography: string[];
}
