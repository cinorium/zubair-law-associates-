import { LegalDraft } from '../types/legal';

export const legalDrafts: LegalDraft[] = [
  {
    id: 'habeas-corpus-491',
    category: 'constitutional',
    title: 'Habeas Corpus Petition under Section 491 Cr.P.C.',
    shortDescription: 'Emergency application for recovery and production of a person unlawfully or illegally confined in police station or private custody.',
    statutoryBasis: 'Section 491 of the Code of Criminal Procedure, 1898 read with Article 199 of the Constitution of Pakistan',
    forumCourt: 'In the Court of District & Sessions Judge, Karachi South / High Court of Sindh at Karachi',
    jurisdiction: 'Criminal Miscellaneous Jurisdiction',
    standardParties: {
      petitionerOrPlaintiff: 'Applicant / Relative of Detainee',
      respondentOrDefendant: 'The State through S.H.O. Police Station & Detaining Authority'
    },
    keyProvisions: [
      'Immediate production of the detainee before the court',
      'Appointment of Court Bailiff for surprise raid on police premises',
      'Discharge of detainee if no formal FIR or statutory remand exists',
      'Legal action against errant police officers under Police Order 2002'
    ],
    draftingChecklist: [
      'Affidavit of applicant/deponent specifically stating relationship to detainee',
      'Date, approximate time, and venue of the alleged unlawful pick-up/raid',
      'Specific averment that no FIR was registered or communicated to family',
      'Wakalatanama duly signed by petitioner'
    ],
    placeholders: [
      { key: 'COURT_NAME', label: 'Court Name', defaultValue: 'IN THE COURT OF DISTRICT & SESSIONS JUDGE, KARACHI SOUTH' },
      { key: 'CASE_NO', label: 'Cr. Misc. Appln No.', defaultValue: 'Cr. Misc. Application No. _______ of 2026' },
      { key: 'APPLICANT_NAME', label: 'Applicant / Deponent', defaultValue: 'Muhammad Aslam S/o Ghulam Qadir' },
      { key: 'APPLICANT_ADDRESS', label: 'Applicant Address', defaultValue: 'House No. 42-B, Clifton Block 4, Karachi' },
      { key: 'DETAINEE_NAME', label: 'Detainee Full Name', defaultValue: 'Tariq Mehmood S/o Muhammad Aslam' },
      { key: 'POLICE_STATION', label: 'Police Station / S.H.O.', defaultValue: 'S.H.O. Police Station Artillery Maidan, Karachi' },
      { key: 'ARREST_DATETIME', label: 'Date & Time of Confinement', defaultValue: '28th October 2026 at approximately 11:30 PM' },
      { key: 'ADVOCATE_NAME', label: 'Advocate on Record', defaultValue: 'S.M. ZUBAIR, Advocate High Court' }
    ],
    templateContent: `{{COURT_NAME}}

{{CASE_NO}}

IN THE MATTER OF:
{{APPLICANT_NAME}}
Resident of: {{APPLICANT_ADDRESS}}
... APPLICANT / PETITIONER

VERSUS

1. THE STATE
2. {{POLICE_STATION}}
3. Sub-Divisional Police Officer (SDPO) concerned
... RESPONDENTS

APPLICATION UNDER SECTION 491 Cr.P.C. FOR THE PRODUCTION AND RELEASE OF DETAINEE {{DETAINEE_NAME}} UNLAWFULLY CONFINED BY RESPONDENT NO. 2

Respectfully Sheweth:

1. That the Applicant is a law-abiding citizen of Pakistan, residing at the address given above, and is the real father / brother of the detainee namely {{DETAINEE_NAME}}, who is aged about 26 years and has clean antecedents.

2. That on {{ARREST_DATETIME}}, a police party from Respondent No. 2 Police Station, dressed partly in uniform and partly in plain clothes, raided the residence of the Applicant without any search warrant, without any lawful authority, and forcefully whisked away the detainee {{DETAINEE_NAME}} without disclosing any cause of arrest or FIR.

3. That since the illegal detention, the Applicant and other family members repeatedly visited the police station of Respondent No. 2 to enquire about the whereabouts and legal reason for the detention of the detainee, but Respondent No. 2 and subordinate staff treated them with utter discourtesy, demanded illegal gratification, and refused to produce the detainee before any competent Magistrate within the mandatory statutory period of 24 hours as guaranteed by Article 10 of the Constitution of Islamic Republic of Pakistan, 1973.

4. That the life and liberty of the detainee is in grave peril, and there is serious apprehension that the police officials may torture him or implicate him in false and fabricated criminal cases to cover up their unlawful acts.

5. That the confinement of the detainee at the hands of Respondent No. 2 is purely arbitrary, illegal, without jurisdiction, and in gross violation of fundamental rights guaranteed under Articles 4, 9, 10, and 14 of the Constitution.

PRAYER:
In view of the above submissions, it is most respectfully prayed that this Honourable Court may graciously be pleased to:

a) Direct Respondent No. 2 to produce the detainee, namely {{DETAINEE_NAME}}, before this Honourable Court forthwith along with the daily diary (Roznamcha) of the Police Station;
b) Appoint a Court Bailiff with directions to immediately conduct a surprise raid at the premises of {{POLICE_STATION}} or wherever the detainee is confined, recover the detainee, and produce him before this Honourable Court;
c) Set the detainee at liberty forthwith if no lawful FIR or judicial remand exists against him;
d) Grant any other relief deemed just, fit, and proper under the circumstances.

Karachi.
Dated: _____________

DRAWN & FILED BY:
{{ADVOCATE_NAME}}
Advocate for the Applicant
Zubair Law Associates, Karachi`,
    notes: 'Drafted in strict accordance with High Court Rules and Section 491 of the Code of Criminal Procedure. The Court routinely issues notice returnable on the same day or deputes a Bailiff with police escort upon deposit of prescribed bailiff fee.'
  },
  {
    id: 'surety-reduction-application',
    category: 'criminal',
    title: 'Application for Reduction of Surety Amount (Sec 498 / 497(5) Cr.P.C.)',
    shortDescription: 'Application moved before Judicial Magistrate or Sessions Judge when bail was granted but surety bond amount is exorbitant and beyond the accused person’s financial reach.',
    statutoryBasis: 'Section 498 Cr.P.C. read with Section 497 and inherent judicial discretion',
    forumCourt: 'In the Court of Judicial Magistrate / Additional Sessions Judge, Karachi',
    jurisdiction: 'Criminal Summary Jurisdiction',
    standardParties: {
      petitionerOrPlaintiff: 'Applicant / Accused',
      respondentOrDefendant: 'The State'
    },
    keyProvisions: [
      'Bail is a matter of judicial relief, not a punitive measure through excessive sureties',
      'Section 498 Cr.P.C. empowers courts to reduce surety amounts to avoid constructive denial of bail',
      'Affidavit of poverty or modest employment status'
    ],
    draftingChecklist: [
      'Certified copy of the bail granting order',
      'Proof of modest income / inability of family to furnish hefty solvency certificates',
      'Affidavit of the applicant / surety'
    ],
    placeholders: [
      { key: 'COURT_NAME', label: 'Court Name', defaultValue: 'IN THE COURT OF IXth JUDICIAL MAGISTRATE, KARACHI SOUTH' },
      { key: 'CASE_NO', label: 'Criminal Case / FIR No.', defaultValue: 'Criminal Case No. 341 of 2026 (FIR No. 112/2026, P.S. Preedy)' },
      { key: 'ACCUSED_NAME', label: 'Accused Name', defaultValue: 'Kashif Ali S/o Noor Muhammad' },
      { key: 'ORIGINAL_SURETY', label: 'Original Surety Amount (PKR)', defaultValue: 'PKR 100,000/- (Rupees One Hundred Thousand)' },
      { key: 'REQUESTED_SURETY', label: 'Requested Reduced Surety (PKR)', defaultValue: 'PKR 25,000/- (Rupees Twenty-Five Thousand)' },
      { key: 'ADVOCATE_NAME', label: 'Advocate on Record', defaultValue: 'S.M. ZUBAIR, Advocate High Court' }
    ],
    templateContent: `{{COURT_NAME}}

{{CASE_NO}}
STATE  VERSUS  {{ACCUSED_NAME}}
Offence under Section: 379 / 411 PPC

APPLICATION UNDER SECTION 498 Cr.P.C. FOR REDUCTION OF SURETY AMOUNT ON BEHALF OF THE ACCUSED / APPLICANT

The applicant / accused above-named most respectfully submits as under:

1. That vide order dated ___________, this Honourable Court was pleased to grant post-arrest bail to the applicant/accused subject to furnishing solvent surety in the sum of {{ORIGINAL_SURETY}} with PR bond in the like amount to the satisfaction of this Honourable Court.

2. That the applicant/accused belongs to an extremely poor and indigent family. He works as a daily-wage laborer, earning barely enough to feed his dependent children and elderly parents.

3. That despite strenuous efforts made by the impoverished relatives of the applicant, they have failed to arrange a surety of such a high amount, with the consequence that the applicant remains incarcerated behind bars solely on account of his financial poverty, which virtually frustrates the benevolent object of the bail order.

4. That the purpose of requiring a surety under criminal law is not punitive or penal, but merely to ensure the presence of the accused during trial proceedings. The applicant undertakes to attend this Honourable Court on each and every date of hearing without fail.

5. That settled principles laid down by the Superior Courts affirm that surety amount must never be fixed at a prohibitive figure so as to amount to refusal of bail to indigent citizens.

PRAYER:
It is therefore respectfully prayed that this Honourable Court may graciously be pleased to reduce the surety amount from {{ORIGINAL_SURETY}} to {{REQUESTED_SURETY}} in the interest of justice.

Karachi.
Dated: _____________

THROUGH:
{{ADVOCATE_NAME}}
Advocate for the Applicant / Accused
Zubair Law Associates`,
    notes: 'Well-established jurisprudence of Sindh High Court and Supreme Court of Pakistan provides that poverty must not lead to detention when bail has already been sanctioned on merits.'
  },
  {
    id: 'civil-plaint-cancellation-deed',
    category: 'civil',
    title: 'Plaint for Declaration, Cancellation of Sale Deed & Permanent Injunction',
    shortDescription: 'Comprehensive civil suit plaint under Order VII Rule 1 CPC challenging fraudulent transfer, forged power of attorney, and seeking cancellation of registered sale deed.',
    statutoryBasis: 'Order VII Rule 1 of Code of Civil Procedure 1908 read with Sections 39 & 42 of Specific Relief Act 1877',
    forumCourt: 'In the Court of Senior Civil Judge / District Judge, Karachi',
    jurisdiction: 'Original Civil Jurisdiction',
    standardParties: {
      petitionerOrPlaintiff: 'Plaintiff (Lawful Owner / Aggrieved Title Holder)',
      respondentOrDefendant: 'Defendant No. 1 (Fraudulent Buyer) & Sub-Registrar / Revenue Authority'
    },
    keyProvisions: [
      'Declaration of Plaintiff as true, lawful, and sole owner of suit property',
      'Cancellation and declaring null and void the impugned registered sale deed',
      'Permanent injunction restraining defendants from selling, alienating, or creating third-party charge',
      'Mandatory injunction directing Sub-Registrar to cancel registration entry in register'
    ],
    draftingChecklist: [
      'Complete schedule of the immovable property with boundaries and survey number',
      'Detailed chronology showing how the fraud or forgery was orchestrated',
      'Court fee computation and valuation for purposes of court fees and jurisdiction under Suits Valuation Act',
      'Verification clause under oath'
    ],
    placeholders: [
      { key: 'COURT_NAME', label: 'Court Name', defaultValue: 'IN THE COURT OF SENIOR CIVIL JUDGE, KARACHI EAST' },
      { key: 'PLAINTIFF_NAME', label: 'Plaintiff Name & Details', defaultValue: 'Haji Abdul Rasheed S/o Noor-ud-Din, Muslim, adult, R/o Gulshan-e-Iqbal, Karachi' },
      { key: 'DEFENDANT_1', label: 'Defendant No. 1 (Imposter/Buyer)', defaultValue: 'Farhan Sheikh S/o Rafiq Sheikh, R/o PECHS Block 6, Karachi' },
      { key: 'DEFENDANT_OFFICIAL', label: 'Official Defendant (Registrar)', defaultValue: 'The Sub-Registrar, Jamshed Town-I, Board of Revenue, Karachi' },
      { key: 'PROPERTY_DESCRIPTION', label: 'Description of Suit Property', defaultValue: 'Residential Plot No. B-114, measuring 400 Sq. Yards, situated in Block 13-D, Gulshan-e-Iqbal, Scheme 24, Karachi' },
      { key: 'IMPUGNED_DEED_NO', label: 'Deed Number & Date', defaultValue: 'Registered Sale Deed No. 4519, Book I, dated 14th June 2025' },
      { key: 'SUIT_VALUATION', label: 'Valuation for Jurisdiction', defaultValue: 'PKR 15,000,000/- (Rupees Fifteen Million)' },
      { key: 'ADVOCATE_NAME', label: 'Advocate on Record', defaultValue: 'S.M. ZUBAIR, Advocate High Court' }
    ],
    templateContent: `{{COURT_NAME}}

CIVIL SUIT NO. _________ OF 2026

{{PLAINTIFF_NAME}}
... PLAINTIFF

VERSUS

1. {{DEFENDANT_1}}
2. {{DEFENDANT_OFFICIAL}}
... DEFENDANTS

SUIT FOR DECLARATION, CANCELLATION OF REGISTERED SALE DEED, AND PERMANENT & MANDATORY INJUNCTION

The Plaintiff above-named states as follows:

1. That the Plaintiff is the sole, absolute, and lawful owner in peaceful physical possession of the suit property, specifically described as:
"{{PROPERTY_DESCRIPTION}}" (hereinafter referred to as the "SUIT PROPERTY").

2. That the Plaintiff purchased the suit property through genuine registered conveyance deed and has been paying all government taxes, municipal charges, and utility bills uninterruptedly since its acquisition.

3. That on or about __________, the Plaintiff was shocked to discover that Defendant No. 1, in criminal collusion with corrupt elements, managed to procure a fabricated, bogus, and forged {{IMPUGNED_DEED_NO}} before Defendant No. 2, impersonating the Plaintiff and falsely claiming to have purchased the suit property.

4. That the Plaintiff has never executed any agreement to sell, nor received any sale consideration, nor executed any power of attorney or sale deed in favor of Defendant No. 1. The impugned document is a product of fraud, forgery, and misrepresentation, bearing forged signatures/thumb impressions.

5. That under Section 39 of the Specific Relief Act, 1877, any written instrument which is void or voidable and which may cause serious injury to the rightful owner is liable to be adjudged null and void and delivered up and cancelled.

6. That Defendant No. 1 has now started openly threatening to trespass into the suit property and alienate, transfer, or mortgage the same to unsuspecting third parties in order to create third-party interest and complicate title.

7. That the cause of action accrued to the Plaintiff firstly on _________ when the fraudulent deed was clandestinely registered, and finally on _________ when Defendant No. 1 refused to surrender the forged deed upon notice.

8. That the suit property is situated within the territorial limits of this Honourable Court, and this Court has ample jurisdiction to try and adjudicate this suit. Valuation of the suit for the purpose of court fee and jurisdiction is fixed at {{SUIT_VALUATION}}, and maximum court fee of PKR 15,000/- has been affixed on the plaint.

PRAYER:
The Plaintiff respectfully prays for a judgment and decree against Defendants as follows:

a) Declaration that the Plaintiff is the sole, lawful, and absolute owner of {{PROPERTY_DESCRIPTION}};
b) Declaration that the impugned {{IMPUGNED_DEED_NO}} registered with Defendant No. 2 is fraudulent, forged, illegal, null, and void ab initio, and directing that the same be cancelled;
c) Mandatory Injunction directing Defendant No. 2 (Sub-Registrar) to make an endorsement of cancellation in the relevant registration books;
d) Permanent Injunction restraining Defendant No. 1, his agents, or assigns from interfering in the peaceful possession of the Plaintiff, or selling, transferring, leasing, or encumbering the suit property in any manner whatsoever;
e) Costs of the suit and any other equitable relief.

Karachi.
Dated: _____________

PLAINTIFF

THROUGH:
{{ADVOCATE_NAME}}
Advocate for the Plaintiff
Zubair Law Associates, Karachi

VERIFICATION:
I, the Plaintiff above-named, do hereby verify on oath at Karachi on this _____ day of ________ 2026, that the contents of paragraphs 1 to 6 of the plaint are true to my personal knowledge, and paragraphs 7 to 8 are believed to be true upon legal information received from my counsel.

DEPONENT`,
    notes: 'Drafted strictly in accordance with Order VII Rule 1 CPC and Section 39/42 of Specific Relief Act 1877. Must be accompanied by application for ad-interim injunction under Order 39 Rules 1 & 2 CPC.'
  },
  {
    id: 'family-khula-maintenance',
    category: 'family',
    title: 'Plaint in Family Suit for Dissolution of Marriage (Khula) & Maintenance',
    shortDescription: 'Suit filed by wife before Family Court under Family Courts Act 1964 claiming Khula, past and future maintenance for self and minor child, and recovery of dowry articles.',
    statutoryBasis: 'Section 5 & Schedule of the Family Courts Act 1964 read with Muslim Family Laws Ordinance 1961',
    forumCourt: 'In the Court of Judge Family Court / Senior Civil Judge, Karachi',
    jurisdiction: 'Special Family Jurisdiction',
    standardParties: {
      petitionerOrPlaintiff: 'Plaintiff (Wife / Mother of minor)',
      respondentOrDefendant: 'Defendant (Husband)'
    },
    keyProvisions: [
      'Irretrievable breakdown of marriage and hatred preventing living within divine limits',
      'Surrender of unpaid dower / restoration of settled consideration for Khula decree',
      'Fixation of interim maintenance under Section 17-A Family Courts Act',
      'Decree for delivery of dowry articles (Jahez list) or market value in lieu thereof'
    ],
    draftingChecklist: [
      'Copy of Nikahnama duly translated/attested',
      'Birth certificates / B-Form of minor children',
      'Itemized list of dowry articles (Annexure-A) with valuation',
      'Verification under Section 19 of Family Courts Act (Court fee Rs. 15/-)'
    ],
    placeholders: [
      { key: 'COURT_NAME', label: 'Court Name', defaultValue: 'IN THE COURT OF FAMILY JUDGE (EAST), KARACHI' },
      { key: 'PLAINTIFF_NAME', label: 'Plaintiff (Wife)', defaultValue: 'Mst. Sadia Bibi D/o Abdul Ghaffar' },
      { key: 'DEFENDANT_NAME', label: 'Defendant (Husband)', defaultValue: 'Salman Tariq S/o Tariq Mehmood' },
      { key: 'NIKAH_DATE', label: 'Nikah Date & Dower Details', defaultValue: '12th March 2021; Dower fixed at PKR 200,000/- (Deferred/Prompt)' },
      { key: 'MINOR_DETAILS', label: 'Minor Child Name & Age', defaultValue: 'Minor Rayan (Son), born on 15th January 2023, aged 3 years' },
      { key: 'MONTHLY_MAINTENANCE', label: 'Monthly Maintenance Claimed', defaultValue: 'PKR 35,000/- per month for minor and PKR 25,000/- for plaintiff' },
      { key: 'DOWRY_VALUATION', label: 'Total Dowry Valuation', defaultValue: 'PKR 850,000/- as per attached itemized schedule' },
      { key: 'ADVOCATE_NAME', label: 'Advocate on Record', defaultValue: 'S.M. ZUBAIR, Advocate High Court' }
    ],
    templateContent: `{{COURT_NAME}}

FAMILY SUIT NO. _________ OF 2026

{{PLAINTIFF_NAME}}
Resident of: Karachi
... PLAINTIFF

VERSUS

{{DEFENDANT_NAME}}
Resident of: Karachi
... DEFENDANT

SUIT FOR:
1. DISSOLUTION OF MARRIAGE BY WAY OF KHULA
2. RECOVERY OF PAST AND FUTURE MAINTENANCE OF PLAINTIFF AND MINOR CHILD
3. RECOVERY OF DOWRY ARTICLES OR CASH EQUIVALENT

The Plaintiff above-named respectfully states:

1. That the Plaintiff and Defendant were lawfully married on {{NIKAH_DATE}} at Karachi in accordance with Muslim personal law.

2. That out of this wedlock, one child namely {{MINOR_DETAILS}} was born, who is presently in the custody and care of the Plaintiff.

3. That unfortunately, soon after the marriage, the attitude of the Defendant turned hostile, cruel, and abusive. The Defendant frequently subjected the Plaintiff to physical and psychological violence and neglected to provide basic sustenance, food, or medical care to her and the minor child.

4. That all reconciliation efforts made by elders and family members have miserably failed. The Plaintiff has developed intense aversion and hatred towards the Defendant and cannot live with him within the limits ordained by Almighty Allah. She is ready and willing to forgo any unpaid dower for grant of Khula.

5. That the Defendant is a man of affluent means earning not less than PKR 150,000/- per month from business/employment, yet he has utterly failed to maintain the Plaintiff and the minor child since _________. The minor requires {{MONTHLY_MAINTENANCE}} for nutrition, clothing, education, and shelter.

6. That at the time of marriage, the Plaintiff's parents gave extensive dowry articles worth {{DOWRY_VALUATION}} (as itemized in Annexure 'A'), which remain in the illegal custody of the Defendant and which he has unlawfully refused to return.

7. That under Section 17-A of the Family Courts Act 1964, this Honourable Court has statutory power and duty to pass an interim order of maintenance for the minor child upon the first appearance of the Defendant.

PRAYER:
The Plaintiff respectfully prays that this Honourable Court may be pleased to:

a) Pass a decree for dissolution of marriage by way of Khula in favor of the Plaintiff against the Defendant;
b) Direct the Defendant to pay {{MONTHLY_MAINTENANCE}} towards past and future maintenance of the minor child with an annual statutory 10% increase;
c) Pass a decree directing the Defendant to return the dowry articles itemized in Annexure 'A' or in default to pay the sum of {{DOWRY_VALUATION}};
d) Grant any other relief deemed equitable and just.

Karachi.
Dated: _____________

PLAINTIFF

THROUGH:
{{ADVOCATE_NAME}}
Advocate for the Plaintiff
Zubair Law Associates`,
    notes: 'Under Pakistani law (Family Courts Amendment Act), Family Courts are mandated to fix interim maintenance at early stage and conclude Khula proceedings without prolonged delay.'
  },
  {
    id: 'rent-eviction-srpo',
    category: 'rent',
    title: 'Ejectment Application under Section 15 of Sindh Rented Premises Ordinance, 1979',
    shortDescription: 'Eviction application filed by Landlord before the Rent Controller on grounds of wilful default in payment of rent and personal bona fide need.',
    statutoryBasis: 'Section 15(2)(ii) & (vii) of the Sindh Rented Premises Ordinance, 1979 (SRPO)',
    forumCourt: 'In the Court of Rent Controller (South/East/Central), Karachi',
    jurisdiction: 'Special Rent Jurisdiction',
    standardParties: {
      petitionerOrPlaintiff: 'Applicant / Landlord',
      respondentOrDefendant: 'Opponent / Tenant'
    },
    keyProvisions: [
      'Wilful default in payment of monthly rent for more than 60 days',
      'Personal bona fide requirement of the premises for landlord or family member',
      'Application under Section 16(1) for tentative rent order',
      'Writ of possession upon striking off defence under Section 16(2)'
    ],
    draftingChecklist: [
      'Original or certified copy of Tenancy Agreement',
      'Legal notice of default served upon tenant with postal receipts / courier slips',
      'Statement of monthly arrears calculation',
      'Affidavit of applicant affirming personal need'
    ],
    placeholders: [
      { key: 'COURT_NAME', label: 'Court Name', defaultValue: 'IN THE COURT OF RENT CONTROLLER (KARACHI SOUTH)' },
      { key: 'APPLICANT_NAME', label: 'Applicant (Landlord)', defaultValue: 'Syed Mansoor Ali S/o Syed Kazim Ali' },
      { key: 'OPPONENT_NAME', label: 'Opponent (Tenant)', defaultValue: 'Muhammad Asif S/o Abdul Majeed' },
      { key: 'TENANTED_PREMISES', label: 'Tenanted Premises Details', defaultValue: 'Shop No. 4, Ground Floor, Plaza Commercial Area, Saddar, Karachi' },
      { key: 'RENT_RATE', label: 'Monthly Rent Amount', defaultValue: 'PKR 45,000/- per month' },
      { key: 'DEFAULT_PERIOD', label: 'Default Period & Arrears', defaultValue: 'From January 2026 to October 2026 (10 months total arrears of PKR 450,000/-)' },
      { key: 'ADVOCATE_NAME', label: 'Advocate on Record', defaultValue: 'S.M. ZUBAIR, Advocate High Court' }
    ],
    templateContent: `{{COURT_NAME}}

RENT APPLICATION NO. ________ OF 2026

{{APPLICANT_NAME}}
... APPLICANT

VERSUS

{{OPPONENT_NAME}}
... OPPONENT

RENT EJECTMENT APPLICATION UNDER SECTION 15 OF SINDH RENTED PREMISES ORDINANCE, 1979

The Applicant states as follows:

1. That the Applicant is the lawful owner and landlord of the tenanted property:
"{{TENANTED_PREMISES}}".

2. That the Opponent was inducted as a monthly tenant in the subject premises at the agreed monthly rental of {{RENT_RATE}}, payable on or before the 10th day of each Gregorian calendar month.

3. That the Opponent has committed continuous and wilful default in payment of monthly rent {{DEFAULT_PERIOD}}, despite repeated oral reminders and formal legal notice served upon him.

4. That the Applicant bona fide requires the subject premises in good faith for his own personal commercial use and for the business occupation of his adult son who is presently unemployed, and the Applicant owns no other suitable commercial premises within the same urban area.

5. That the Opponent was served with a statutory legal notice dated ________ requiring him to vacate the premises and pay accumulated rent arrears, but he failed to comply.

PRAYER:
The Applicant most respectfully prays that this Honourable Court may graciously be pleased to:

a) Direct the Opponent to immediately vacate {{TENANTED_PREMISES}} and hand over peaceful, vacant possession to the Applicant;
b) Direct the Opponent to deposit total rent arrears along with future monthly rent under Section 16(1) of SRPO 1979;
c) Order the issuance of a Writ of Possession through the Court Bailiff with police aid if the Opponent fails to comply.

Karachi.
Dated: _____________

APPLICANT

THROUGH:
{{ADVOCATE_NAME}}
Advocate for Applicant
Zubair Law Associates, Karachi`,
    notes: 'The Sindh Rented Premises Ordinance 1979 gives strict statutory protection to owners once default of over 60 days is established and tentative rent orders are defaulted upon.'
  },
  {
    id: 'legal-notice-defamation-damages',
    category: 'civil',
    title: 'Legal Notice for Defamation, False Imputation & Damages',
    shortDescription: 'Formal statutory advocate notice served prior to initiating a damages suit under Defamation Ordinance 2002 or criminal proceedings under Section 500 PPC.',
    statutoryBasis: 'Section 8 of Defamation Ordinance 2002 read with Section 499/500 Pakistan Penal Code',
    forumCourt: 'Pre-litigation Statutory Notice before filing in Court of District Judge',
    jurisdiction: 'Civil & Criminal Pre-Action',
    standardParties: {
      petitionerOrPlaintiff: 'Aggrieved Party / Complainant',
      respondentOrDefendant: 'Defaming Person / Publisher / Online User'
    },
    keyProvisions: [
      'Specification of defamatory remarks, social media posts, or verbal slander',
      'Injury to professional reputation, social status, and business goodwill',
      'Demand for unconditional written apology published with equal prominence within 14 days',
      'Liquidated damages claim and warning of immediate civil suit under Defamation Ordinance'
    ],
    draftingChecklist: [
      'Exact transcription or screenshots of the defamatory publication with dates and URLs',
      'Mandatory 14-day statutory notice period required by Section 8 of Defamation Ordinance 2002',
      'Delivery via Registered Post A/D and reliable courier service'
    ],
    placeholders: [
      { key: 'NOTICE_DATE', label: 'Notice Date', defaultValue: '31st October 2026' },
      { key: 'CLIENT_NAME', label: 'Client / Aggrieved Person', defaultValue: 'Dr. Tariq Jamil, Senior Consultant Surgeon' },
      { key: 'RECIPIENT_NAME', label: 'Recipient / Defamer', defaultValue: 'Nadeem Ahmed, Resident of DHA Phase 6, Karachi' },
      { key: 'DEFAMATORY_CONTENT', label: 'Summary of Slander / Libel', defaultValue: 'Circulation of malicious, false, and unverified allegations on public social media forums accusing my client of medical malpractice and fraud' },
      { key: 'DAMAGES_AMOUNT', label: 'Damages Amount (PKR)', defaultValue: 'PKR 50,000,000/- (Rupees Fifty Million)' },
      { key: 'ADVOCATE_NAME', label: 'Advocate on Record', defaultValue: 'S.M. ZUBAIR, Advocate High Court' }
    ],
    templateContent: `LEGAL NOTICE
(BY REGISTERED POST A/D & COURIER)

Date: {{NOTICE_DATE}}

TO:
{{RECIPIENT_NAME}}

UNDER INSTRUCTIONS FROM MY CLIENT:
{{CLIENT_NAME}}

Sir,

Under instructions from and on behalf of my client {{CLIENT_NAME}}, I hereby serve upon you this formal LEGAL NOTICE under Section 8 of the Defamation Ordinance, 2002 as follows:

1. That my client is a person of high social repute, impeccable professional integrity, and unblemished moral character, held in immense respect within his professional fraternity and society at large.

2. That on or about __________, you maliciously, intentionally, and without any lawful justification or verified basis published and circulated defamatory statements against my client, specifically:
"{{DEFAMATORY_CONTENT}}".

3. That the aforesaid defamatory statements are completely false, fabricated, malicious, and designed solely to injure my client's reputation, professional standing, and business goodwill.

4. That by reason of your scandalous and defamatory actions, my client has suffered severe mental agony, public ridicule, distress, and grave financial and reputational damages estimated conservatively at {{DAMAGES_AMOUNT}}.

NOW THEREFORE, I hereby call upon you that within FOURTEEN (14) DAYS of the receipt of this legal notice, you must:

a) Tend an unconditional written apology to my client and publish the same with equal prominence on all public forums where the defamation was made;
b) Immediately delete, withdraw, and cease circulating all defamatory remarks;
c) Pay to my client the sum of {{DAMAGES_AMOUNT}} as compensation and damages for the loss caused to his reputation.

TAKE NOTICE that in the event of your failure to comply within the stipulated 14-day statutory period, my client has given me strict instructions to institute a Suit for Damages under the Defamation Ordinance, 2002 before the Court of District Judge, alongside criminal prosecution under Section 500 PPC, entirely at your risk, cost, and consequence.

Yours faithfully,

{{ADVOCATE_NAME}}
Advocate High Court of Sindh
Zubair Law Associates, Karachi`,
    notes: 'Under Section 8 of the Defamation Ordinance 2002, serving a 14-day statutory notice is a mandatory condition precedent before instituting a civil suit for damages in Pakistan.'
  },
  {
    id: 'agreement-to-sell-property',
    category: 'corporate',
    title: 'Agreement to Sell Immovable Property (Conveyancing Format)',
    shortDescription: 'Standard bilingual legal deed for sale of residential/commercial plots and houses with robust title covenants, earnest money clauses, and default remedies.',
    statutoryBasis: 'Contract Act 1872 & Transfer of Property Act 1882',
    forumCourt: 'Conveyancing Deed / Sub-Registrar Office Execution',
    jurisdiction: 'Contractual / Real Estate Law',
    standardParties: {
      petitionerOrPlaintiff: 'Vendor / Seller (First Party)',
      respondentOrDefendant: 'Vendee / Purchaser (Second Party)'
    },
    keyProvisions: [
      'Warranty of unencumbered title, free from liens, mortgages, and litigation',
      'Earnest money receipt and balance payment milestones',
      'Specific performance covenant if vendor defaults under Section 12 Specific Relief Act',
      'Forfeiture / liquidated damages clause if vendee defaults'
    ],
    draftingChecklist: [
      'Verification of mother title deeds from KDA, MDA, SBCA, or Board of Revenue',
      'Clear survey number, plot dimensions, and boundary markings',
      'Non-Encumbrance Certificate (NEC) from Sub-Registrar',
      'Signatures of two independent adult male witnesses'
    ],
    placeholders: [
      { key: 'DEED_DATE', label: 'Execution Date', defaultValue: '31st October 2026' },
      { key: 'VENDOR_NAME', label: 'Vendor (Seller) Name & CNIC', defaultValue: 'Mirza Kamran Baig S/o Mirza Afzal Baig, CNIC No. 42101-XXXXXXX-1' },
      { key: 'VENDEE_NAME', label: 'Vendee (Purchaser) Name & CNIC', defaultValue: 'Zeeshan Ali S/o Muhammad Rafiq, CNIC No. 42201-XXXXXXX-3' },
      { key: 'PROPERTY_PARTICULARS', label: 'Property Particulars', defaultValue: 'Plot No. 89-C, Sunset Commercial Street 4, Phase II Extension, DHA Karachi, measuring 100 Sq. Yards' },
      { key: 'TOTAL_CONSIDERATION', label: 'Total Sale Price (PKR)', defaultValue: 'PKR 28,000,000/- (Rupees Twenty-Eight Million)' },
      { key: 'EARNEST_MONEY', label: 'Token / Bayana Amount', defaultValue: 'PKR 3,000,000/- (Rupees Three Million paid via Pay Order No. 482910)' },
      { key: 'COMPLETION_TIMELINE', label: 'Target Completion Period', defaultValue: '60 days from date of execution upon issuance of NOC' },
      { key: 'ADVOCATE_NAME', label: 'Drafting Advocate', defaultValue: 'S.M. ZUBAIR, Advocate High Court' }
    ],
    templateContent: `AGREEMENT TO SELL IMMOVABLE PROPERTY

This Agreement to Sell is made and executed at Karachi on this {{DEED_DATE}} BY AND BETWEEN:

{{VENDOR_NAME}}
(hereinafter referred to as the "FIRST PARTY / VENDOR", which expression shall include his legal heirs, executors, and assigns) of the ONE PART;

AND

{{VENDEE_NAME}}
(hereinafter referred to as the "SECOND PARTY / VENDEE", which expression shall include his legal heirs, executors, and assigns) of the OTHER PART.

WHEREAS the Vendor is the sole, absolute, and unencumbered owner of:
"{{PROPERTY_PARTICULARS}}" (hereinafter called the "SAID PROPERTY").

AND WHEREAS the Vendor has agreed to sell and the Vendee has agreed to purchase the Said Property on the terms and conditions set forth below:

NOW THIS AGREEMENT WITNESSETH AS FOLLOWS:

1. TOTAL CONSIDERATION:
The total agreed sale price of the Said Property is {{TOTAL_CONSIDERATION}}.

2. EARNEST MONEY / ADVANCE:
The Vendee has paid to the Vendor the sum of {{EARNEST_MONEY}} as token/advance payment, the receipt whereof the Vendor hereby acknowledges and confirms.

3. BALANCE PAYMENT & COMPLETION:
The balance consideration shall be paid by the Vendee within {{COMPLETION_TIMELINE}}, concurrently with the execution and registration of the Final Conveyance / Sale Deed before the Sub-Registrar and handing over of peaceful physical possession with all original title documents.

4. WARRANTY OF TITLE & NON-ENCUMBRANCE:
The Vendor expressly guarantees and warrants that the Said Property is free from all encumbrances, mortgages, liens, disputes, court litigation, or attachment by any tax authority. If any defect in title is discovered, the Vendor shall indemnify the Vendee in full.

5. DEFAULT CLAUSE & SPECIFIC PERFORMANCE:
If the Vendor fails or refuses to complete the sale upon tender of balance consideration, the Vendee shall be entitled to seek Specific Performance of this Agreement through Court of Law under the Specific Relief Act 1877 at the cost and risk of the Vendor.

IN WITNESS WHEREOF the parties have set their hands on this Agreement in the presence of marginal witnesses.

FIRST PARTY (VENDOR): ____________________
SECOND PARTY (VENDEE): ____________________

WITNESS 1: ____________________
WITNESS 2: ____________________

DRAFTED & VETTED BY:
{{ADVOCATE_NAME}}
Advocate High Court of Sindh
Zubair Law Associates, Karachi`,
    notes: 'Essential conveyancing instrument governed by the Contract Act 1872 and Transfer of Property Act 1882. High Court precedents require clear forfeiture clauses and time-essence stipulations.'
  }
];
