import { ChamberProfile, PracticeArea, LegalGuide } from '../types/legal';

export const chamberProfile: ChamberProfile = {
  name: 'S.M. Zubair',
  title: 'Advocate High Court',
  firmName: 'Zubair Law Associates',
  primaryBar: 'Sindh High Court Bar Association',
  admissions: [
    'Enrolled as Advocate High Court of Sindh',
    'Member, Sindh High Court Bar Association (SHCBA)',
    'Member, Karachi Bar Association (KBA)',
    'Enrolled with Sindh Bar Council'
  ],
  experienceYears: 18,
  phone: '+92 300 9215352',
  whatsapp: '+923009215352',
  email: 'advocatesmzubair@gmail.com',
  location: 'Karachi, Sindh, Pakistan',
  chambersAddress: 'High Court & District Courts Chambers, City Courts / High Court of Sindh Premises, Karachi, Pakistan',
  hours: 'Monday – Saturday: 10:00 AM – 7:00 PM (PST)',
  courtsPracticed: [
    'High Court of Sindh at Karachi (Principal Seat)',
    'District & Sessions Courts (Karachi South, East, Central, Malir, West)',
    'Special Anti-Corruption & Banking Courts',
    'Special Family Courts Karachi',
    'Rent Controller Tribunals & Appellate Authorities'
  ],
  biography: [
    'S.M. Zubair is an established Advocate of the High Court of Sindh with extensive courtroom experience in civil litigation, criminal defence, constitutional writs, family matters, and complex property conveyancing.',
    'Founder of Zubair Law Associates and author of the long-running legal practitioner repository "THE ADVOCATE", he provides both rigorous client advocacy in court and meticulously researched procedural drafts for the wider legal fraternity in Pakistan.',
    'Under his chamber stewardship, the practice emphasizes prompt judicial relief, ethical adherence to statutory codes (CPC, Cr.P.C., Specific Relief Act, Family Courts Act), and meticulous attention to pleadings and evidence preparation.'
  ]
};

export const practiceAreas: PracticeArea[] = [
  {
    id: 'civil-litigation',
    category: 'civil',
    title: 'Civil Litigation & Property Suits',
    headline: 'Substantive declaration of rights, title recovery, and permanent injunctions.',
    description: 'Representation in contentious civil disputes involving immovable property, cancellation of fraudulent sale deeds, specific performance of contracts, partition suits, and execution of decrees.',
    keyRemedies: [
      'Suit for Declaration & Cancellation of Sale Deed / Power of Attorney',
      'Suit for Permanent and Mandatory Injunction (Order 39 CPC)',
      'Suit for Specific Performance of Agreement to Sell',
      'Suit for Partition of Ancestral & Joint Property'
    ],
    governingLaws: [
      'Code of Civil Procedure, 1908 (CPC)',
      'Specific Relief Act, 1877',
      'Transfer of Property Act, 1882',
      'Limitation Act, 1908'
    ],
    courtForum: 'Civil Judges & District Courts / High Court of Sindh (Original Jurisdiction)',
    draftsCount: 3
  },
  {
    id: 'criminal-defence',
    category: 'criminal',
    title: 'Criminal Defence & Bail Jurisprudence',
    headline: 'Protection of liberty through pre-arrest and post-arrest bail advocacy.',
    description: 'Vigorous criminal defence covering bail petitions, quashment of malicious FIRs, reduction of excessive surety bonds, private criminal complaints, and defence trials before Magistrates and Sessions Judges.',
    keyRemedies: [
      'Pre-Arrest Bail Application under Section 498 Cr.P.C.',
      'Post-Arrest Bail Application under Section 497 Cr.P.C.',
      'Application for Reduction of Surety Bond under Sec 498 / 497(5) Cr.P.C.',
      'Quashment of FIR under Section 561-A Cr.P.C. (Sindh High Court)'
    ],
    governingLaws: [
      'Code of Criminal Procedure, 1898 (Cr.P.C.)',
      'Pakistan Penal Code, 1860 (PPC)',
      'Sindh Judicial Rules & High Court Rules'
    ],
    courtForum: 'Magistrates, District & Sessions Courts, and High Court of Sindh',
    draftsCount: 3
  },
  {
    id: 'constitutional-habeas',
    category: 'constitutional',
    title: 'Constitutional Writs & Habeas Corpus',
    headline: 'Emergency human rights petitions and judicial review of administrative actions.',
    description: 'Urgent habeas corpus petitions for recovery of illegally detained individuals under Section 491 Cr.P.C. and Article 199 Constitutional Writs against arbitrary state overreach or failure of public duty.',
    keyRemedies: [
      'Habeas Corpus Petition under Section 491 Cr.P.C.',
      'Constitutional Writ of Mandamus & Prohibition (Article 199)',
      'Writ of Certiorari challenging unlawful administrative orders',
      'Protection Orders against harassment by law enforcement'
    ],
    governingLaws: [
      'Constitution of the Islamic Republic of Pakistan, 1973 (Art. 199)',
      'Section 491, Code of Criminal Procedure, 1898',
      'High Court of Sindh Rules & Orders'
    ],
    courtForum: 'High Court of Sindh (Principal Seat Karachi) & District & Sessions Judges',
    draftsCount: 2
  },
  {
    id: 'family-law',
    category: 'family',
    title: 'Family Law, Khula & Minor Custody',
    headline: 'Dignified resolution of matrimonial rights, dower, maintenance, and custody.',
    description: 'Compassionate and resolute representation in family disputes including dissolution of marriage on ground of Khula, dower and dowry recovery, child maintenance, and legal custody/guardianship under the Guardian & Wards Act.',
    keyRemedies: [
      'Suit for Dissolution of Marriage (Khula) & Recovery of Dower / Maintenance',
      'Custody Application under Section 25, Guardian & Wards Act, 1890',
      'Interim Maintenance Application for minors and wife (Section 17-A)',
      'Restitution of Conjugal Rights & Execution of Family Decrees'
    ],
    governingLaws: [
      'Family Courts Act, 1964',
      'Guardian and Wards Act, 1890',
      'Muslim Family Laws Ordinance, 1961'
    ],
    courtForum: 'Special Family Courts & District Judges (Family Appellate Authority)',
    draftsCount: 2
  },
  {
    id: 'rent-property',
    category: 'rent',
    title: 'Rent Litigation & Tenancy Disputes',
    headline: 'Eviction proceedings, fair rent determination, and recovery of rent arrears.',
    description: 'Comprehensive legal assistance for commercial and residential landlords and tenants. Enforcing lawful ejectment on grounds of non-payment of rent, personal bona fide need, damage to premises, or subletting.',
    keyRemedies: [
      'Rent Ejectment Application under Section 15 of SRPO 1979',
      'Application for Tentative Rent Order under Section 16(1) & 16(2)',
      'Rent Appeal before District Judge / High Court',
      'Fixation of Fair Rent & Rent Deposit Applications'
    ],
    governingLaws: [
      'Sindh Rented Premises Ordinance, 1979 (SRPO)',
      'Relevant Karachi Urban Development & Tenancy Regulations'
    ],
    courtForum: 'Rent Controller / District Judge Karachi / High Court of Sindh',
    draftsCount: 1
  },
  {
    id: 'conveyancing-corporate',
    category: 'corporate',
    title: 'Conveyancing, Deeds & Legal Notices',
    headline: 'Meticulous drafting of contracts, powers of attorney, and statutory legal notices.',
    description: 'Precision contract drafting and title vetting to protect commercial investments and prevent future litigation. Drafting sales agreements, lease deeds, partnership deeds, irrevocable powers of attorney, and formal legal notices.',
    keyRemedies: [
      'Comprehensive Agreement to Sell Immovable Property with Title Covenants',
      'Irrevocable General & Special Power of Attorney',
      'Legal Notice under Defamation Ordinance & Recovery of Liquidated Damages',
      'Succession Certificate & Letter of Administration Petitions'
    ],
    governingLaws: [
      'Transfer of Property Act, 1882',
      'Registration Act, 1908 & Stamp Act, 1899',
      'Contract Act, 1872',
      'Succession Act, 1925'
    ],
    courtForum: 'Sub-Registrar Offices, High Court of Sindh, and Civil Courts',
    draftsCount: 3
  }
];

export const legalGuides: LegalGuide[] = [
  {
    id: 'habeas-corpus-procedure',
    title: 'Emergency Habeas Corpus Procedure (Sec 491 Cr.P.C.)',
    category: 'Constitutional / Criminal Liberty',
    estimatedDuration: '24 to 48 Hours',
    primaryCourt: 'High Court of Sindh or District & Sessions Judge',
    steps: [
      {
        title: 'Filing & Urgent Mentioning',
        description: 'Draft the petition detailing the date, time, and identity of the raiding police party or unlawful detainer, supported by affidavit of kin. Petition is moved for urgent motion before the Bench/Sessions Judge.',
        documentsRequired: ['Affidavit of close relative/applicant', 'Copy of CNIC', 'Any CCTV/call record or witness statements', 'Wakalatanama'],
        timeline: 'Day 1 (Morning)'
      },
      {
        title: 'Court Direction & Raid / Bailiff Appointment',
        description: 'Court issues immediate directions or appoints a Court Bailiff to conduct a surprise raid at the police station or confinement place to produce the detainee.',
        documentsRequired: ['Court Bailiff Order', 'Police Station Roster Register inspection memo'],
        timeline: 'Day 1 (Within hours)'
      },
      {
        title: 'Production of Detainee & Judicial Release',
        description: 'Detainee is produced in custody. If no formal FIR or valid remand order exists, the Court orders immediate release and initiates action against errant officers.',
        documentsRequired: ['Daily Diary (Roznamcha) extract', 'Medical examination if torture alleged'],
        timeline: 'Day 1 – Day 2'
      }
    ]
  },
  {
    id: 'succession-certificate-procedure',
    title: 'Succession Certificate & Letter of Administration',
    category: 'Civil / Estate Law',
    estimatedDuration: '6 to 12 Weeks',
    primaryCourt: 'High Court of Sindh (Karachi) / District Court (Assets outside Karachi)',
    steps: [
      {
        title: 'Petition Drafting & Genealogical Pedigree Table',
        description: 'Prepare petition under Section 372/278 of Succession Act with comprehensive schedule of movable assets (bank accounts, shares, savings certificates) and list of all legal heirs.',
        documentsRequired: ['Death Certificate from NADRA', 'FRC (Family Registration Certificate)', 'Title documents/bank balance certificates', 'Affidavits of all legal heirs'],
        timeline: 'Week 1 – 2'
      },
      {
        title: 'Public Citation in Daily Newspapers',
        description: 'Court orders citation to be published in leading English and Urdu daily newspapers inviting any public objections within statutory notice period.',
        documentsRequired: ['Court Citation Notice', 'Newspaper tear sheets (Dawn / Jang)'],
        timeline: 'Week 3 – 5'
      },
      {
        title: 'Recording of Evidence & Grant of Certificate',
        description: 'Recording statement of petitioner and independent witness. If no objection is filed, the Court grants the Succession Certificate upon furnishing administrative surety bond.',
        documentsRequired: ['Surety Bond & Solvency proof', 'Court fee stamps'],
        timeline: 'Week 6 – 10'
      }
    ]
  },
  {
    id: 'rent-eviction-procedure',
    title: 'Tenant Ejectment under Sindh Rented Premises Ordinance',
    category: 'Tenancy & Real Estate',
    estimatedDuration: '4 to 8 Months',
    primaryCourt: 'Court of Rent Controller (Concerned District Karachi)',
    steps: [
      {
        title: 'Statutory Notice & Application Filing',
        description: 'Serve formal notice of default or bona fide personal need. File eviction application under Section 15 of SRPO 1979 before the jurisdictional Rent Controller.',
        documentsRequired: ['Tenancy Agreement', 'Proof of ownership / Title Deed', 'Bank records showing non-payment / default', 'Affidavit of Landlord'],
        timeline: 'Month 1'
      },
      {
        title: 'Section 16(1) Tentative Rent Order',
        description: 'Court directs tenant to deposit monthly rent arrears and current rent into the Court account before the 10th of every calendar month.',
        documentsRequired: ['Statement of arrears calculation', 'Rent Controller treasury challan'],
        timeline: 'Month 2'
      },
      {
        title: 'Evidence & Final Eviction Order',
        description: 'If tenant defaults in court deposit (Section 16(2)), defence is struck off and eviction ordered immediately. Otherwise, brief affidavit-in-evidence is recorded leading to final ejectment order.',
        documentsRequired: ['Affidavit-in-evidence', 'Writ of Possession through Court Bailiff'],
        timeline: 'Month 3 – 6'
      }
    ]
  }
];

export const chamberFaqs = [
  {
    question: 'How do I initiate an urgent Habeas Corpus petition for someone in illegal police custody?',
    answer: 'Under Section 491 Cr.P.C. and Article 199 of the Constitution, an immediate petition can be filed before the High Court of Sindh or the District & Sessions Judge. The petitioner (usually a close relative) submits an affidavit detailing the arrest without FIR/remand. The court routinely appoints a Court Bailiff to raid the police station and produce the detainee within hours.'
  },
  {
    question: 'What is the ground for obtaining Khula (Dissolution of Marriage) under Pakistani Family Law?',
    answer: 'A Muslim wife is entitled to obtain Khula as a matter of right under the Family Courts Act 1964 if she satisfies the court that she cannot live with her husband within the limits prescribed by Allah. Upon filing, reconciliation is attempted. If reconciliation fails, the court grants Khula decree, subject to restoration of dower if received.'
  },
  {
    question: 'How can a landlord lawfully evict a defaulting tenant in Karachi?',
    answer: 'Eviction cannot be executed privately or through police without a judicial order. The landlord must file an application under Section 15 of the Sindh Rented Premises Ordinance 1979 before the Rent Controller on grounds such as default in rent payment, bona fide personal requirement, or expiry of fixed tenancy. The Rent Controller will issue a Section 16 tentative rent order and subsequently a writ of possession.'
  },
  {
    question: 'What is the difference between Pre-Arrest and Post-Arrest Bail in Pakistan?',
    answer: 'Pre-Arrest Bail (Anticipatory Bail under Section 498 Cr.P.C.) is sought when a person apprehends imminent arrest in a false or politically motivated case to prevent humiliation. Post-Arrest Bail (Section 497 Cr.P.C.) is applied for after the accused has already been taken into police or judicial custody.'
  },
  {
    question: 'Can I draft legal documents using templates without an advocate?',
    answer: 'Our drafting repository is designed to educate law students, junior practitioners, and clients regarding statutory requirements and standard judicial formats. However, because court jurisdictions, territorial limits, court fees, and limitation laws in Pakistan are strict, we strongly advise having every final plaint, petition, or conveyancing deed reviewed by Advocate S.M. Zubair before filing.'
  }
];
