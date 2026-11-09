# Structured Content Inventory & Data Sources

## 1. Overview & Strategy

This document catalogs all verified static content datasets extracted from `https://painandparalysis.com/` for the Pain & Paralysis Website Reconstruction. Every dataset is fully typed under `src/types/`, stored in modular TypeScript files under `src/data/`, and re-exported via `src/data/index.ts`.

- **Source Integrity**: Extracted directly from live reference website DOM structures, Elementor widget configurations, and certified clinical statements.
- **Strict Typing**: 100% adherence to TypeScript interfaces without `any` types, missing values, duplicate slugs, or broken internal route references.
- **Privacy Compliance**: Sensitive patient identifiers and claims are flagged with authorization statuses.

---

## 2. Prepared Datasets Summary

| Dataset | TypeScript File | Interface | Item Count | Status | Primary Data Source |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Navigation & Links** | `src/data/navigation.ts` | `NavItem[]`, `HeaderConfig`, `FooterSection[]` | 6 main, 11 footer links | Verified | Header `.main-menu`, Footer columns |
| **Clinic Contact & Location** | `src/data/navigation.ts` | `ClinicContactInfo`, `SocialLink[]` | 1 contact profile, 3 socials | Verified | Header top bar, Location section, Footer |
| **Treatment Services** | `src/data/services.ts` | `ServiceItem[]` | 11 Treatment Services | Verified | Homepage Services grid & dedicated subpages |
| **Specialized Care Areas** | `src/data/care-areas.ts` | `CareAreaItem[]` | 4 Specialized Care Areas | Verified | Services catalog page (`/services/`) |
| **Patient Testimonials** | `src/data/testimonials.ts` | `TestimonialItem[]` | 3 Patient Reviews | Awaiting Approval | Testimonial carousel `.elementor-element-0a5a785` |
| **Frequently Asked Questions** | `src/data/faqs.ts` | `FaqItem[]` | 7 FAQs | Documented (Awaiting clinic operational confirmation) | Homepage FAQ section (`.sa-ac-item`) |
| **Health Tips & Articles** | `src/data/articles.ts` | `ArticleItem[]` | 3 Clinical Articles | Verified | Tips & Article catalog (`/tips-article/`) |
| **Clinical Statistics** | `src/data/statistics.ts` | `StatisticItem[]` | 4 Metrics | Awaiting documentation (0 of 4 approved; withheld from UI) | Homepage Counter widget (`.counter.default`) |
| **Hero Banners** | `src/data/hero-slides.ts` | `HeroSlideItem[]` | 5 Slides | Verified | Homepage Sky Slider (`.sky-advanced-slider`) |
| **Clinical Team** | `src/data/team.ts` | `TeamMemberItem[]` | 1 Lead Practitioner Profile | Verified Profile (Credentials withheld pending verification) | Homepage Our Team section & About Us page |

---

## 3. Dataset Detailed Inventories

### 3.1 Services Dataset (`src/data/services.ts`)

Contains all 11 verified clinical treatment modalities:

1. `advanced-spine-decompression` — **Advanced Spine Decompression**
   - Category: *Spine Care & Traction*
   - Image: `/images/services/spine-decompression.webp`
   - Hero Image: `/images/services/spine-decompression-hero.webp`
   - Route: `/services/advanced-spine-decompression`
   - Reference URL: `https://painandparalysis.com/advanced-spine-decompression/`
2. `advanced-chiropractor` — **Advanced Chiropractor**
   - Category: *Spinal Adjustment & Alignment*
   - Image: `/images/services/chiropractic.webp`
   - Route: `/services/advanced-chiropractor`
   - Reference URL: `https://painandparalysis.com/advanced-chiropractor/`
3. `advanced-physiotherapy` — **Advanced Physiotherapy**
   - Category: *Physical Rehabilitation*
   - Image: `/images/services/physiotherapy.webp`
   - Route: `/services/advanced-physiotherapy`
   - Reference URL: `https://painandparalysis.com/advanced-physiotherapy/`
4. `advanced-aquatic-therapy` — **Advanced Aquatic Therapy**
   - Category: *Hydrotherapy Rehabilitation*
   - Image: `/images/services/aquatic-therapy.webp`
   - Route: `/services/advanced-aquatic-therapy`
   - Reference URL: `https://painandparalysis.com/advanced-aquatic-therapy/`
5. `advanced-3d-gait-analysis` — **Advanced 3D Gait Analysis**
   - Category: *Diagnostic Biomechanics*
   - Image: `/images/services/3d-gait-analysis.webp`
   - Route: `/services/advanced-3d-gait-analysis`
   - Reference URL: `https://painandparalysis.com/advanced3d-gait-analysis/`
6. `advanced-knee-decompression` — **Advanced Knee Decompression**
   - Category: *Joint Decompression*
   - Image: `/images/services/knee-decompression.webp`
   - Route: `/services#advanced-knee-decompression`
   - Reference URL: `https://painandparalysis.com/#`
7. `advanced-laser-treatment` — **Advanced Laser Treatment**
   - Category: *Photobiomodulation*
   - Image: `/images/services/laser-therapy.webp`
   - Route: `/services#advanced-laser-treatment`
   - Reference URL: `https://painandparalysis.com/#`
8. `high-frequency-emg` — **High Frequency EMG**
   - Category: *Neuromuscular Diagnostics*
   - Image: `/images/services/emg-therapy.webp`
   - Route: `/services#high-frequency-emg`
   - Reference URL: `https://painandparalysis.com/#`
9. `biofeedback` — **Biofeedback**
   - Category: *Neuromuscular Re-education*
   - Image: `/images/services/biofeedback.webp`
   - Route: `/services#biofeedback`
   - Reference URL: `https://painandparalysis.com/#`
10. `neuro-physiotherapy` — **Neuro Physiotherapy**
    - Category: *Neurological Rehabilitation*
    - Image: `/images/services/neuro-physiotherapy.webp`
    - Route: `/services#neuro-physiotherapy`
    - Reference URL: `https://painandparalysis.com/#`
11. `pelvic-floor-therapy` — **Pelvic Floor**
    - Category: *Pelvic Health & Core*
    - Image: `/images/services/pelvic-floor.webp`
    - Route: `/services#pelvic-floor-therapy`
    - Reference URL: `https://painandparalysis.com/#`

---

### 3.2 Care Areas Dataset (`src/data/care-areas.ts`)

Extracted from the Services Catalog page (`/services/`):

1. **Posture Correction**: *"Restore spinal alignment and body balance"*
   - Image: `/images/services/care-posture.webp`
2. **Spinal Therapy**: *"Non-invasive care for back and neck pain"*
   - Image: `/images/services/care-spine.webp`
3. **Injury & Trauma Recovery**: *"Heal from accidents, falls or surgeries"*
   - Image: `/images/services/care-trauma.webp`
4. **Rehab & Fitness Integration**: *"Functional training tailored to your recovery stage"*
   - Image: `/images/services/care-fitness.webp`

---

### 3.3 Patient Testimonials Dataset (`src/data/testimonials.ts`)

| Patient Name | Location | Condition / Scope | Rating | Avatar Path | Authorization Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Dharshini Andal V** | Chennai | Consultation & Clinical Care | 5/5 | `/images/testimonials/dharshini.webp` | Awaiting client confirmation |
| **Annadurai S** | Chennai | Hand Rehabilitation (7–8 Sessions) | 5/5 | `/images/testimonials/annadurai.webp` | Awaiting client confirmation |
| **Sudha Seshadri** | Adyar, Chennai | Chronic Shoulder Pain & Robotic Physiotherapy | 5/5 | `/images/testimonials/sudha.webp` | Awaiting client confirmation |

> **Medical Privacy Note**: Identifiable patient photographs and individual medical testimonials are staged for interface validation but marked pending explicit client sign-off.

---

### 3.4 Frequently Asked Questions Dataset (`src/data/faqs.ts`)

All 7 clinical and operational questions documented from the live homepage accordion:

1. `faq-01`: "Do you accept insurance?" (*Insurance & Payment*) — *Status: Documented on reference website; awaiting primary clinic administrative verification of active insurance partner network and cashless empanelment.*
2. `faq-02`: "What is the difference between a chiropractor and a physiotherapist?" (*Treatment Differences*) — *Status: Documented on reference website; standard clinical educational distinction; awaiting final clinical director sign-off.*
3. `faq-03`: "Will I need X-rays or diagnostic tests before treatment?" (*Diagnosis & Clinical Assessment*) — *Status: Documented on reference website; conservative diagnostic assessment protocol; awaiting formal clinic protocol confirmation.*
4. `faq-04`: "Can I Get a Same Day Appointment?" (*Appointments & Scheduling*) — *Status: Documented on reference website; operational scheduling policy awaiting active front-desk appointment capacity confirmation.*
5. `faq-05`: "How Long does a chiropractic Treatment session last?" (*Session Duration*) — *Status: Documented on reference website; clinical session duration awaiting current operational schedule confirmation.*
6. `faq-06`: "What conditions do you treat?" (*Conditions Treated*) — *Status: Documented on reference website; clinical scope of musculoskeletal conditions awaiting comprehensive diagnostic index confirmation.*
7. `faq-07`: "What type of Services does Pain and Paralysis provide?" (*Clinical Services*) — *Status: Documented on reference website; clinical rehabilitation service list aligned with clinic modalities; awaiting primary clinic service registry verification.*

---

### 3.5 Health Tips & Articles Dataset (`src/data/articles.ts`)

The 3 authentic clinical health articles:

1. **How Does Spine Decompression Therapy Ease Back Pain?**
   - Slug: `how-does-spine-decompression-therapy-ease-back-pain`
   - Category: Spine Care
   - Cover Image: `/images/articles/spine-decompression-article.webp`
   - Published: April 2025
2. **The Role of Physiotherapy in Chronic Back Pain Management**
   - Slug: `the-role-of-physiotherapy-in-chronic-back-pain-management`
   - Category: Physiotherapy
   - Cover Image: `/images/articles/physiotherapy-back-pain-article.webp`
   - Published: April 2025
3. **Deep Tissue Thermotherapy for Neck and Shoulder Pain**
   - Slug: `deep-tissue-thermotherapy-for-neck-and-shoulder-pain`
   - Category: Pain Relief
   - Cover Image: `/images/articles/thermotherapy-neck-pain-article.webp`
   - Published: April 2025

---

### 3.6 Clinical Statistics Dataset (`src/data/statistics.ts`)

| Metric Key | Value Displayed | Numeric Value | Label | Status |
| :--- | :--- | :--- | :--- | :--- |
| `stat-experience` | `10+` | 10 | Years of Experience | Awaiting clinic documentation and authorization (`isApproved: false`, withheld from UI) |
| `stat-specialists` | `30+` | 30 | Our Specialists | Awaiting clinic roster verification and authorization (`isApproved: false`, withheld from UI) |
| `stat-customers` | `12k` | 12000 | Happy Customers | Awaiting clinic patient volume audit and authorization (`isApproved: false`, withheld from UI) |
| `stat-team` | `25+` | 25 | Team Members | Awaiting clinic staff roster verification and authorization (`isApproved: false`, withheld from UI) |

---

### 3.7 Hero Sliders Dataset (`src/data/hero-slides.ts`)

| Slide # | Heading Text | Supporting Text | Button | Route | Image Path |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | Experience Relief & Wellness with Expert Chiropractic Care! | Comprehensive spine and joint adjustments engineered to eliminate chronic pain... | Book Appointment | `/contact-us` | `/images/hero/hero-slide-01.webp` |
| **2** | Recover. Restore. Rejuvenate, reduce pain, and enhance your well-being | Personalized clinical rehabilitation protocols restoring physical vitality... | Book Appointment | `/contact-us` | `/images/hero/hero-slide-02.webp` |
| **3** | Unlock healing with advanced therapies—innovative treatments and personalize care | Cutting-edge robotic physiotherapy, deep tissue thermotherapy... | Book Appointment | `/contact-us` | `/images/hero/hero-slide-03.webp` |
| **4** | Heal with water—improve mobility, ease pain, and relax. | Temperature-controlled aquatic therapy pool unloads joint pressure... | Book Appointment | `/contact-us` | `/images/hero/hero-slide-04.webp` |
| **5** | Improve your posture, enhance your well-being! Discover effective solutions | Computerized 3D postural analysis and targeted alignment therapy... | Book Appointment | `/contact-us` | `/images/hero/hero-slide-05.webp` |

---

### 3.8 Clinical Team Dataset (`src/data/team.ts`)

- **Lead Specialist**: Dr. Dinesh Anandhan
- **Designation**: Chiropractor & Physiotherapist
- **Department**: Pain Management & Spine Care
- **Image**: `/images/doctors/dr-dinesh-anandhan.webp`
- **Key Qualifications**:
  - Master of Chiropractic Science (Palms College, Osaka, Japan — Cert. No: 250910)
  - Licensed Physical Therapist (State of New York, USA — Reg No: 121319)
  - Gonstead Chiropractic Technique Specialist (Reg No: 295)
  - Certified Orthopaedic Manual Therapist (OMT)
  - Certified Mulligan Concept Practitioner
  - State Coordinator – Tamil Nadu Physiotherapists Association (TNPA Reg No: A-1238)
  - Certified Aquatic Fitness Instructor (QFCAFI – 25-0050)

---

### 3.9 Medical Content Audit & Regulatory Compliance Status (Phase 17.1)

| Category / Claim Item | Original Statement / Scope | Compliance Status | Action Taken in Phase 17.1 |
| :--- | :--- | :--- | :--- |
| **Spine Decompression Regulatory Claim** | "FDA-cleared non-invasive mechanical traction technology" | **Unapproved / Withheld** | Removed "FDA-cleared" from public services dataset pending documentation identifying specific medical device and 510(k) clearance number. |
| **Specific Technique Claims (Gonstead)** | "Gonstead alignment to correct vertebral subluxations", "precise Gonstead adjustments" | **Withheld from General Copy** | Replaced with neutral "Targeted manual adjustments to correct vertebral misalignments" and "manual adjustments of the spine" to avoid making specific technique qualification claims without confirmed accreditation. |
| **Outcome Claims ("Permanently Prevent")** | "permanently prevent symptom recurrence" | **Prohibited / Withheld** | Replaced with realistic clinical statement: "support long-term functional recovery." |
| **Outcome Claims ("Proven Solution")** | "Proven non-surgical solution for aging joints" | **Prohibited / Withheld** | Replaced with compliant statement: "Non-surgical therapy designed for degenerative joint discomfort." |
| **Trauma Recovery Claims** | "Heal from accidents, falls or surgeries", "accelerating soft tissue repair... returning patients to full functional independence" | **Neutralized** | Replaced with compliant supportive phrasing: "Support recovery after accidents, falls or surgeries" and "assist soft tissue recovery, address joint stiffness, and support functional mobility." |
| **Evidence-Based Terminology in Public Copy** | "evidence-based chiropractic care / adjustments / protocols" in headers & meta | **Neutralized** | Replaced with "focused / targeted / specialized clinical care" across Services page metadata, Hero, Care Areas, and CTA. |
| **Contact Phone (`8015559609`)** | Exposed as active `tel:` link in CTA section | **Awaiting Confirmation** | Removed active `tel:` click-to-call link from CTA; replaced with neutral routing to `/contact-us` for verified location and consultation information. Phone approval status unchanged (`awaitingConfirmation: true`). |
| **Inquiry Form Connectivity** | Frontend form previously showed false delivery message ("Inquiry Received / clinic desk will contact you") | **Staging / No Backend** | Replaced false success banner with transparent notice stating that online submissions are not yet connected to clinic systems and no data has been stored, directing users to the Contact page. |

---

### 3.10 Final Services Clinical Content Audit (Phase 17.2)

Detailed compliance review of the five specific clinical statements in the Services Overview page and shared service datasets:

| Statement Reviewed | Original Usage & Location | Source / Approval Status | Neutralized Replacement (Phase 17.2) | Remaining Approvals Needed |
| :--- | :--- | :--- | :--- | :--- |
| **1. "Reduce nerve impingement"** | `src/data/services.ts` (Chiropractic description & benefits bullet) | **Unapproved Clinical Efficacy Claim** (No clinical trial documentation or diagnostic clearance confirming nerve decompression via manual adjustment) | Replaced with neutral functional description: *"designed to support structural alignment, ease spinal tension, and improve functional mobility"* and *"Addresses spinal tension and associated movement discomfort"* | Clinical director sign-off on conservative manual therapy scope. |
| **2. "Correct vertebral misalignments"** | `src/data/services.ts` (Chiropractic shortDescription) | **Unapproved Anatomical Correction Claim** (Historical subluxation theory; anatomical realignment claim unverified by post-adjustment radiography) | Replaced with neutral modality purpose: *"Targeted manual adjustments designed to support spinal mobility, joint biomechanics, and functional physical comfort."* | Radiographic verification protocols if structural correction claims are reinstated. |
| **3. "Relieve musculoskeletal pain"** | `src/data/services.ts` (Chiropractic shortDescription) | **Unapproved Pain Relief Guarantee** (Promising guaranteed pain relief is prohibited under medical advertising ethics) | Replaced with neutral comfort statement: *"support spinal mobility, joint biomechanics, and functional physical comfort."* | Formal patient outcome study or clinical trial authorization. |
| **4. "Robotic physical therapy / physiotherapy / rehabilitation"** | `src/data/services.ts`, `src/data/care-areas.ts`, `ServicesHero.tsx`, `ServicesGrid.tsx`, `src/app/services/page.tsx` | **Unverified Technology Claim** (Clinic's actual equipment roster lacks documentation or certification of specific robotic rehabilitation hardware) | Replaced across all files with factual clinical equipment phrasing: *"specialized therapeutic modalities, manual therapy techniques, and targeted conditioning"* and *"specialized physiotherapy"* | Equipment manufacturer invoice and device regulatory clearance documentation. |
| **5. "Pelvic diaphragm dysfunction"** | `src/data/services.ts` (Pelvic Floor description & conditions list) | **Unverified Diagnostic Scope Claim** (Formal medical diagnosis requiring specialized diagnostic protocols not currently verified for the clinic) | Replaced with neutral functional conditioning description: *"non-surgical clinical care focused on pelvic muscle strengthening and conditioning... supports tone, coordination, and functional stability in pelvic support muscles"* | Clinical director diagnostic scope authorization. |

---

### 3.11 Phase 18 Advanced Spine Decompression Detail Page Compliance Audit

Detailed compliance audit of the clinical statements, conditions treated, benefits, and operational disclosures implemented in `/services/advanced-spine-decompression`:

| Statement / Claim Audited | Original Reference / Template Origin | Compliance & Regulatory Status | Action Taken in Phase 18 | Clinic Approval Status |
| :--- | :--- | :--- | :--- | :--- |
| **1. Generic Theme Conditions (Digestive, Respiratory, Reproductive)** | Medilax WordPress theme demo cards (IBS, Acid Reflux, Asthma, Reproductive Health) | **Prohibited / Non-Compliant** (No verified clinical trial documentation linking mechanical spinal decompression to systemic autonomic or visceral cures) | **Excluded from Decompression Page**. Replaced with 6 authentic musculoskeletal conditions: Herniated & Bulging Discs, Sciatica & Radicular Pain, Degenerative Disc Disease, Spinal Canal Stenosis, Posterior Facet Syndrome, and Secondary Sleep & Musculoskeletal Stress. | Prohibited; client sign-off required if any systemic claims are requested. |
| **2. Guaranteed Pain Elimination & Permanent Disc Regeneration** | Generic spine marketing ("Permanently regenerate discs", "100% cure for back pain") | **Prohibited Claim** (Guaranteeing permanent anatomical regeneration or total pain elimination violates medical ethics) | **Neutralized**. Expressed as verified biomechanical mechanisms: *"creates negative intradiscal vacuum pressure"*, *"supports natural disc retraction"*, and *"promotes nutrient imbibition to aid rehydration and tissue health"*. | Neutralized text approved for production staging. |
| **3. Universal Avoidance of Surgery** | Common marketing claim ("Avoid back surgery completely") | **Unverified / High Risk** (Decompression is a conservative modality, not a universal guarantee against emergency surgical necessity) | **Neutralized**. Framed factually as an evidence-informed conservative alternative: *"Provides an evidence-informed conservative intervention for patients seeking relief prior to invasive surgical consideration"*, noting red-flag surgical referrals. | Neutralized copy verified. |
| **4. Arbitrary Treatment Durations & Session Counts** | Common clinic scripts ("24 sessions of 30 minutes guaranteed to heal") | **Unverified Operational Data** (No verified clinic protocol specifying uniform session counts; patient needs vary) | **Withheld from Public Copy**. Framed around individualized diagnostic calibration: parameters (poundage tension, distraction angles, cycle times) are digitally calibrated following clinical examination and MRI/X-ray review. | Requires clinic director protocol confirmation. |
| **5. Equipment Model & Regulatory Specification (FDA / CE)** | "FDA-cleared computerized robotic table" | **Withheld Pending Documentation** (Specific equipment vendor 510(k) or regulatory certificate not yet on file) | **Described Factually**. Referenced as *"computerized motorized decompression traction system"* and *"calibrated mechanical traction"* without unverified brand claims. | Equipment invoice / compliance certificate needed for reinstatement. |
| **6. Practitioner Efficacy Claims** | Unverified practitioner success percentages | **Withheld** | Kept focus strictly on biomechanical and physiological mechanisms rather than unverified practitioner statistical claims. | Documented. |

---

### 3.12 Phase 18.1 Final Audit & Statement Neutralization Matrix

Final comprehensive audit of specific clinical phrases, conditions evaluated, and FAQ disclosures conducted in Phase 18.1:

| Audited Phrase / Topic | Component & File Location | Initial Source / Basis | Approval Status | Final Action Taken in Phase 18.1 |
| :--- | :--- | :--- | :--- | :--- |
| **"Promotes nutrient imbibition to aid tissue health"** | `SpineDecompressionIntroduction.tsx`, `SpineDecompressionBenefits.tsx` | Decompression equipment marketing theory (cellular fluid diffusion under distraction) | **Unapproved Clinical Outcome** (No clinic histological/biochemical documentation on file) | **Removed completely**. Replaced with factual mechanical modality text: *"The computerized mechanism alternates between calibrated distraction holds and gentle relaxation intervals."* and *"Cyclic Distraction & Rest Phases"*. |
| **"Supports natural disc retraction"** | `SpineDecompressionHero.tsx`, `SpineDecompressionIntroduction.tsx`, `SpineDecompressionProcess.tsx` | Theoretical vacuum/intradiscal negative pressure claims | **Unapproved Anatomical Claim** (No post-traction radiographic verification clearance) | **Removed completely**. Replaced with factual mechanical tension text: *"delivering calibrated distraction and relaxation cycles along lumbar and cervical spinal segments"* and *"temporarily reduce compressive mechanical loads across adjacent vertebral bodies"*. |
| **"Evidence-informed conservative outpatient alternative"** | `SpineDecompressionBenefits.tsx`, `SpineDecompressionFAQ.tsx` | General conservative spine marketing copy | **Unapproved Efficacy Qualification** (No clinic trial registry on file) | **Neutralized to descriptive scope**: *"Administered entirely in an outpatient clinical setting with non-invasive supportive harnesses as an adjunct physical therapy modality within an individualized conservative rehabilitation plan."* |
| **"Designed to relieve herniated discs, sciatica, and chronic back pain"** | `src/app/services/[slug]/page.tsx` (Metadata description & OpenGraph) | Legacy WordPress service description snippet | **Unapproved Curative Guarantee** (Medical regulations prohibit guaranteeing pain/condition relief) | **Neutralized in SEO metadata**: *"Computerized mechanical spinal decompression traction therapy and clinical evaluation for back pain and disc-related care at Pain & Paralysis Clinic, Madhanandapuram, Chennai."* |
| **Condition 6: "Secondary Sleep & Musculoskeletal Stress"** | `SpineDecompressionConditions.tsx` | Theme demo adaptation (Medilax "Sleep Disorders") | **Outside Approved Scope** (Clinic scope in `src/data/services.ts` does not diagnose sleep disorders) | **Replaced with verified scope**: *"Mechanical Postural Strain (Chronic Musculoskeletal Tension)"* focused on postural fatigue from repetitive sedentary desk loading. |
| **Symptom Checklists (18 items)** | `SpineDecompressionConditions.tsx` | General medical symptom list (radiculopathy, claudication) | **Unapproved Diagnostic Scope** | **Replaced with patient-reported complaints**: Localized movement restrictions, postural discomfort with sitting/standing, and paraspinal muscle tightness. |
| **Surgery Avoidance Claim in FAQ** | `SpineDecompressionFAQ.tsx` (Question 4) | Common traction marketing claim ("avoid spine surgery") | **Prohibited Clinical Guarantee** | **Explicitly Clarified**: Clarified that mechanical decompression is an adjunct physical therapy modality, NOT a replacement or substitute for surgical evaluation. Indicated that emergency red-flag symptoms require immediate surgical/hospital care. |
| **Candidate Suitability Rules in FAQ** | `SpineDecompressionFAQ.tsx` (Question 3) | Unverified uniform eligibility criteria | **Unapproved Clinic Protocol** | **Qualified**: Clarified that suitability cannot be self-determined and requires in-person medical evaluation and imaging review (MRI/X-ray) by qualified practitioners. |

---

### 3.13 Phase 18.2 Final Clinical Wording Safeguard & Statement Resolution Matrix

Final safeguard review of mechanical, physiological, contraindication, and imaging statements in the Advanced Spine Decompression page:

| Audited Statement / Topic | Component & File Location | Regulatory & Clinical Status | Final Action Taken in Phase 18.2 | Remaining Approvals Needed |
| :--- | :--- | :--- | :--- | :--- |
| **"Temporarily reduce compressive mechanical loads across adjacent vertebral bodies"** | `SpineDecompressionBenefits.tsx`, `SpineDecompressionProcess.tsx` | **Unverified Physiological Claim** (Proposed biomechanical hypothesis lacking in-clinic biomechanical load-sensor validation) | **Removed**. Replaced with factual equipment description: *"The computerized traction table delivers controlled mechanical tensile force along practitioner-selected axes"* and *"apply linear tensile forces along the spine in a supported, monitored position"*. | Withheld permanently until validated clinical trial documentation is provided. |
| **"Minimizes the abrupt loading that can trigger muscular resistance"** | `SpineDecompressionIntroduction.tsx` | **Unverified Physiological Effect** (Proposed neuromuscular reflex suppression claim without in-clinic electromyography data) | **Removed**. Replaced with factual operational description: *"The computerized table utilizes motorized controls to alternate between programmed tension hold times and rest intervals. Rather than constant static pulling, the motorized system allows practitioners to configure specific poundage settings and cycle timing"*. | Withheld. |
| **"Cyclic distraction and rest phases" & "Calibrated distraction and relaxation cycles"** | `SpineDecompressionHero.tsx`, `SpineDecompressionBenefits.tsx`, `SpineDecompressionFAQ.tsx` | **Proposed Anatomical Distraction Terminology** | **Neutralized to Equipment Functions**: Replaced with factual mechanical equipment terms: *"controlled tension and release intervals"* and *"programmed tension and release intervals, alternating between configured hold times and rest periods"*. | Approved factual wording. |
| **Definitive Contraindication List** | `SpineDecompressionFAQ.tsx` (Question 3), `SpineDecompressionConditions.tsx` (Notice box) | **Unapproved Clinical Screening Protocol** (Definitive exclusion criteria not formally codified in clinic documentation) | **Removed unapproved list**. Replaced with standard qualified rule: *"Suitability for mechanical spinal decompression and any necessary clinical investigations are determined through an in-person assessment by an appropriately qualified practitioner."* | Clinical Director sign-off on formal clinic contraindication guidelines if specific list is reinstated. |
| **Mandatory Diagnostic Imaging (MRI/X-ray) Claims** | `SpineDecompressionConditions.tsx`, `SpineDecompressionProcess.tsx`, `SpineDecompressionFAQ.tsx` | **Unapproved Protocol Requirement** (Mandating imaging for all patients without documented clinic protocol) | **Removed mandatory imaging claim**. Replaced with neutral statement: *"suitability and any necessary clinical investigations are determined through an in-person assessment by an appropriately qualified practitioner."* | Formal clinic protocol sign-off if routine pre-traction imaging is mandatory. |




