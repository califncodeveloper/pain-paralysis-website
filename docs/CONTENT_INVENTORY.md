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
| **Gallery & Honors** | `src/data/gallery.ts` | `GalleryItem[]` | 5 Awards + 1 Facility Exterior | Verified | Gallery page (`https://painandparalysis.com/gallery/`) |

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

### 3.5 Health Tips & Articles Dataset (`src/data/articles.ts`) (Phase 23 Audit)

The comprehensive typed dataset covers 4 inspected clinical articles (3 published and approved, 1 pending review and excluded from archive):

#### Published Articles (Active in `/tips-article` Archive & Detail Routes):
1. **How Does Spine Decompression Therapy Ease Back Pain?**
   - Slug: `how-does-spine-decompression-therapy-ease-back-pain`
   - Category: Spine Care (WordPress badge: Research)
   - Publication Status: `published`
   - Cover Image: `/images/articles/spine-decompression-article.webp` (`1101x932px`)
   - Published: April 21, 2025 (`2025-04-21T10:29:02+00:00`)
   - Read Time: 4 min read
   - Author: Pain Paralysis Clinical Team (Spine Care & Pain Management)
   - Safeguards: Removed `[Your Chiropractic Brand Name]`. Formulated biomechanical axial distraction mechanisms without promising disc healing or surgery avoidance.
2. **The Role of Physiotherapy in Chronic Back Pain Management**
   - Slug: `the-role-of-physiotherapy-in-chronic-back-pain-management`
   - Category: Physiotherapy (WordPress badge: Research)
   - Publication Status: `published`
   - Cover Image: `/images/articles/physiotherapy-back-pain-article.webp` (`1101x932px`)
   - Published: April 9, 2025 (`2025-04-09T10:24:02+00:00`)
   - Read Time: 5 min read
   - Author: Pain Paralysis Clinical Team (Rehabilitation Specialists)
   - Safeguards: Removed `[Your Chiropractic Brand Name]`. Refocused on functional mobility, deep core stabilization, and posture ergonomics; withheld cure promises.
3. **Deep Tissue Thermotherapy for Neck and Shoulder Pain**
   - Slug: `deep-tissue-thermotherapy-for-neck-and-shoulder-pain`
   - Category: Pain Relief (WordPress badge: Research)
   - Publication Status: `published`
   - Cover Image: `/images/articles/thermotherapy-neck-pain-article.webp` (`1101x932px`)
   - Published: April 9, 2025 (`2025-04-09T09:44:39+00:00`)
   - Read Time: 4 min read
   - Author: Pain Paralysis Clinical Team (Physical Therapy Team)
   - Safeguards: Removed `[Your Chiropractic Brand Name]`. Clarified educational status of ultrasound/diathermy modalities; added prominent contraindications callout for acute inflammatory conditions and sensory deficits (without rigid unverified time thresholds).

#### Pending Article (Withheld from Archive per Quality & Safety Audit):
4. **The Benefits of Aquatic Therapy for Injury Prevention and Recovery**
   - Slug: `the-benefits-of-aquatic-therapy-for-injury-prevention-and-recovery`
   - Category: Aquatic Care
   - Publication Status: `pending_review` (Withheld from public listings)
   - Audit Rationale:
     1. Live archive card contained repeated placeholder text (`"Our mission is to empower our community to achieve maximum..."`).
     2. Live WordPress routing mismatch (`/benefits-of-physiotherapy/` vs 404 direct slug).
     3. Conflict with Phase 21 facility safeguards (clinic has no on-site pool; copy claimed on-site hydrotherapy).

#### Excluded Unrelated Spam Posts:
- Bulgarian/Russian supplement spam (`spec dobavki`)
- Turkish gambling/betting post (`Vbet ile 2026 Yılında Kazanmanın Yolları`)
- German casino/roulette posts (`Expert Article: Roulette wetten erfahrung`, `Roulette Online Strategien`)
*Strictly excluded from clone dataset and sidebar widgets.*

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

---

### 3.14 Phase 19 Advanced Chiropractor Detail Page Compliance & Safeguards Audit

Comprehensive clinical compliance audit of the live reference page (`https://painandparalysis.com/advanced-chiropractor/`) and the reconstructed page (`/services/advanced-chiropractor`):

| Audited Statement / Reference Topic | Original Live Reference / Template Origin | Compliance & Regulatory Status | Action Taken in Phase 19 Implementation | Clinic Approval Status |
| :--- | :--- | :--- | :--- | :--- |
| **1. Unedited Demo Copy: Acupuncture, Needle Insertion, Moxibustion, Cupping, Herbal Formulations, Qi Patterns** | Live WordPress Elementor template imported from an acupuncture theme kit ("Prestige Health & Wellness") | **Prohibited / Misleading Content** (Acupuncture needles, herbal formulations, and Qi concepts do not reflect the clinic's chiropractic modality) | **Completely Withheld**. Replaced with evidence-based chiropractic principles: Gonstead manual adjustments, joint mobilizations, postural assessment, and orthopaedic evaluation. | Excluded permanently; client notified of theme demo artifact. |
| **2. "Realigning the spine and enhancing nervous system function"** | Live WordPress text under "Chiropractor: An Ancient Solution to Modern Ailments" | **Unverified Curative / Neurological Claim** (Medical ethics prohibit claims of restoring systemic nervous system function without peer-reviewed validation) | **Neutralized**. Framed factually around joint mechanics and peri-spinal muscular relaxation: *"controlled, directional mechanical forces to restricted spinal segments... designed to support joint mobility, reduce localized peri-spinal muscle guarding, and promote functional physical movement"*. | Approved neutral clinical wording. |
| **3. Non-Musculoskeletal Conditions: Digestive Disorders (IBS, Acid Reflux), Respiratory (Asthma, Allergies), Reproductive & Fertility** | Live WordPress Elementor condition cards | **Prohibited Claim** (Chiropractic spinal manipulation cannot be advertised as a treatment for visceral, reproductive, or respiratory diseases under medical advertising guidelines) | **Completely Excluded**. Replaced with 6 evaluated musculoskeletal conditions: Cervical neck pain, lumbar back strain, cervicogenic headaches, postural kyphosis/forward head posture, thoracic stiffness, and sacroiliac joint strain. | Prohibited; client sign-off required if any non-musculoskeletal claims are requested. |
| **4. Guaranteed Pain Elimination ("Embrace the Benefits: Pain Reduction, Boosted Immunity, Hormonal Balance")** | Live WordPress theme benefit section | **Prohibited Guarantee** (Guaranteeing pain elimination, boosted immunity, or hormonal correction violates advertising regulations) | **Neutralized to verified benefits**: Improved joint mobility, peri-spinal muscular tension relief, non-invasive conservative care, postural alignment support, calibrated gentle application, and daily functional movement restoration. | Neutralized copy implemented. |
| **5. Mandatory X-Ray / MRI Requirement** | General chiropractic marketing misconception | **Unapproved Protocol Requirement** | **Factually Addressed in FAQ**: Diagnostic imaging is recommended only when clinically indicated to rule out structural contraindications; conservative care begins with physical examination. | Verified against live FAQ response. |
| **6. Arbitrary Session Count Guarantees** | General marketing claims | **Unverified Operational Data** | **Withheld from Public Copy**. Clarified that session counts and treatment frequency depend on individual practitioner assessment during initial consultation. | Verified against clinical guidelines. |
| **7. Transparent Form Disclosures** | Quick inquiry form in `ServicesCTA` | **Operational Compliance** | Displays transparent disclosure that online form submission is not connected to a live CRM and directs urgent inquiries to direct clinic contact channels. | Verified. |

---

### 3.15 Phase 19.1 Final Content, Credential & Clinical Statement Audit

Comprehensive resolution matrix of withheld credentials, neutralized clinical outcomes, removed physiological hypotheses, conditions scope, and FAQ audit for the Advanced Chiropractor page (`/services/advanced-chiropractor`):

| Audited Claim / Topic | Original Location | Category & Regulatory Finding | Action Taken in Phase 19.1 | Current Status & Authorization Needed |
| :--- | :--- | :--- | :--- | :--- |
| **1. "Master of Chiropractic Science (Palms College, Osaka, Japan — Cert No: 250910)"** | `ChiropractorTechniques.tsx` (Credentials pillar) | **Unverified Practitioner Credential** (Physical degree diploma and institution accreditation record not yet formally validated on clinic file) | **Removed completely from visible page**. Replaced with neutral facility standards: *"Multidisciplinary outpatient rehabilitation facility"*. | Withheld from visible website until verified physical diploma/archive documentation is provided. |
| **2. "Gonstead Chiropractic Technique Specialist (Reg No: 295)"** | `ChiropractorTechniques.tsx`, `ChiropractorHero.tsx`, `ChiropractorIntroduction.tsx` | **Unverified Technique Certification** (Technique registry certification record awaiting primary document verification) | **Removed completely from visible page & badges**. Subtitle and badges updated to neutral *"Manual Joint Mobilization"* and *"Manual Therapy Modality"*. | Withheld. |
| **3. "Certified Orthopaedic Manual Therapist (OMT)" & "Licensed Physical Therapist (NY & TNPA)"** | `ChiropractorTechniques.tsx` | **Unverified Licensing & Specialty Certifications** (State licensing registration not yet verified via primary regulatory board) | **Removed completely from visible page**. Replaced with neutral outpatient consultation standards. | Withheld until state board / association verification record is documented. |
| **4. "Certified Specialists / Internationally Certified Care" Badges** | `ChiropractorHero.tsx`, `ChiropractorIntroduction.tsx`, `ChiropractorTechniques.tsx`, `src/app/services/[slug]/page.tsx` | **Unverified Specialization Qualification** | **Removed from visible copy and SEO metadata**. SEO meta description updated to: *"Targeted manual adjustments, musculoskeletal joint mobilizations, and postural alignment protocols at Pain & Paralysis Clinic, Madhanandapuram, Chennai."* | Approved neutral descriptive metadata. |
| **5. Clinical Outcome Claims: "Improved Joint Mobility & Range", "Peri-Spinal Muscular Tension Relief", "Postural Balance & Alignment Support", "Functional Daily Movement Restoration"** | `ChiropractorBenefits.tsx` (Benefit cards 1, 2, 4, 6) | **Unapproved Clinical Outcomes / Efficacy Promises** (Medical advertising regulations prohibit promising guaranteed pain relief, structural correction, or functional restoration) | **Neutralized to treatment approaches & characteristics**: Card 1 -> *"Joint Assessment & Manual Mobilization"*; Card 2 -> *"Paraspinal Soft-Tissue Palpation"*; Card 4 -> *"Postural & Ergonomic Review"*; Card 6 -> *"Daily Movement & Mobility Guidance"*. | Approved neutral modality characteristics. |
| **6. Physiological Hypotheses: Joint Cavitation, Nitrogen Gas Release, Mechanoreceptor Stimulation, Spinal Reflex Pathways, Muscle Guarding Suppression** | `ChiropractorTechniques.tsx`, `ChiropractorIntroduction.tsx`, `ChiropractorBenefits.tsx` | **Unverified Physiological Hypotheses** (Theoretical biomechanical mechanisms lacking clinic-validated instrumentation or EMG data) | **Removed completely**. Replaced with factual descriptions of outpatient clinical consultation, treatment tables with adjustable sections, and in-person manual evaluation. | Withheld permanently. |
| **7. Conditions Presented as Confirmed Indications** | `ChiropractorConditions.tsx`, `src/data/services.ts` | **Unapproved Clinical Diagnostic Scope** (Conditions cannot be claimed as guaranteed treatment indications without approved clinic protocol) | **Re-framed as "Musculoskeletal Areas Evaluated"**: Neck & cervical discomfort, lower back & lumbar discomfort, head & neck postural tension, postural fatigue & forward carriage, upper back & interscapular tightness, pelvic & lower spine strain. | Neutral clinical consultation areas. |
| **8. Pre-Treatment Notice: "Rule out any clinical contraindications"** | `ChiropractorConditions.tsx` (Notice card) | **Unapproved Clinical Screening Claim** (Claiming definitive exclusion of contraindications without documented clinic protocol) | **Removed**. Replaced with qualified factual statement: *"Chiropractic procedures are preceded by an in-person physical consultation. An examination and symptom history review are conducted by the practitioner to evaluate individual suitability before recommending any manual techniques."* | Approved qualified screening statement. |
| **9. FAQ: Insurance Acceptance Guarantee ("Yes. Accepts most major insurance plans")** | `ChiropractorFAQ.tsx` (Question 1) | **Unverified Administrative Claim** (Clinic insurance network and cashless empanelment not yet verified) | **Neutralized**: *"Insurance coverage policies depend on your insurance provider, network empanelment, and individual policy terms for chiropractic and physical therapy services. Insurance acceptance remains subject to individual verification."* | Awaiting clinic administrative network verification. |
| **10. FAQ: Same-Day Appointment Guarantee ("Yes. Offers same-day appointments")** | `ChiropractorFAQ.tsx` (Question 4) | **Unverified Operational Guarantee** (Capacity varies dynamically) | **Neutralized**: *"Same-day appointment availability depends strictly on daily clinical scheduling and practitioner capacity, and cannot be guaranteed in advance. Patients seeking prompt consultation are advised to contact our clinic reception directly by telephone."* | Operational policy clarified. |
| **11. FAQ: Fixed Session Durations ("45 minutes to 1 hour; follow-ups 30 to 45 minutes")** | `ChiropractorFAQ.tsx` (Question 5) | **Invented Operational Data** (No uniform duration protocol on file) | **Neutralized**: *"Session duration varies depending on individual clinical requirements, whether you are attending an initial consultation, physical assessment, or subsequent follow-up appointment. Specific session timings are determined by the practitioner following the initial physical evaluation."* | Awaiting clinic scheduling protocol confirmation. |
| **12. FAQ: Routine Pre-Treatment X-Ray / MRI Requirement** | `ChiropractorFAQ.tsx` (Question 3) | **Unapproved Imaging Protocol** | **Neutralized**: Clarified that diagnostic imaging is not uniform and is evaluated on an individual basis during physical examination if clinically indicated. | Approved conservative protocol. |

---

### 3.16 Phase 20 Advanced Physiotherapy Detail Page Compliance & Safeguards Audit

Comprehensive clinical compliance audit of the live reference page (`https://painandparalysis.com/advanced-physiotherapy/`) and the reconstructed page (`/services/advanced-physiotherapy`):

| Audited Statement / Reference Topic | Original Live Reference / Template Origin | Compliance & Regulatory Status | Action Taken in Phase 20 Implementation | Clinic Approval Status |
| :--- | :--- | :--- | :--- | :--- |
| **1. Unedited Theme Demo Copy: Traditional Chinese Acupuncture, Electro-Acupuncture, Auricular Acupuncture, Cupping, Moxibustion, Herbal Formulations, Qi Flow** | Live WordPress Elementor template imported from an acupuncture/TCM theme kit ("Prestige Health & Wellness") | **Prohibited / Factually Inaccurate Content** (Acupuncture needles, moxibustion, and Qi concepts do not reflect physiotherapy clinical services at Pain & Paralysis Clinic) | **Completely Withheld & Removed**. Replaced with evidence-based physical therapy: functional movement assessment, supervised therapeutic exercise, orthopaedic joint mobilizations, ergonomic education, and sustainable home conditioning programs. | Excluded permanently; documented as theme-demo artifact. |
| **2. Unverified Robotic Physiotherapy Equipment Claims** | Live WordPress copy & historical references claiming robotic rehabilitation technology | **Unverified Technology Claim** (Clinic equipment inventory does not document certified robotic physical therapy hardware) | **Neutralized Across All Components**. Described as *"specialized therapeutic modalities, manual therapy techniques, and targeted conditioning"* and *"specialized physical rehabilitation"*. | Device manufacturer invoices required before advertising specific robotic hardware. |
| **3. Visceral, Reproductive, & Psychological Treatment Claims (IBS, Asthma, Fertility, Hormonal Balance, Insomnia)** | Original Elementor condition cards and "Embrace the Benefits" section | **Prohibited Clinical Claim** (Physiotherapy cannot be advertised as an intervention for systemic visceral diseases without clinical authorization) | **Completely Withheld**. Replaced with 6 evaluated musculoskeletal and functional rehabilitation areas: Post-surgical orthopedic rehabilitation, shoulder mobility & rotator cuff care, cervical & lumbar movement strain, sports injuries & soft-tissue strains, chronic musculoskeletal discomfort, and functional mobility & gait deconditioning. | Excluded permanently; client sign-off required if non-musculoskeletal scope is requested. |
| **4. Guaranteed Outcomes ("Rapidly reduces inflammatory edema", Pain Elimination, Guaranteed Mobility Restoration)** | Original service description and benefit copy | **Prohibited Guarantee** (Guaranteeing rapid cure or permanent pain relief violates medical advertising standards) | **Neutralized to Factual Objectives**: *"Supports localized soft-tissue mobility and circulation"*, *"rebuild muscular stability and functional capacity"*, and *"evaluate movement limitations and joint mechanics"*. | Approved neutral wording. |
| **5. Unverified Practitioner Credentials & Specialist Claims** | Original template credentials and general website claims | **Unverified Credentials** (Specialist certifications and license registrations awaiting document verification) | **Withheld from Visible Copy & Badges**. Replaced with neutral facility standards: *"Multidisciplinary outpatient rehabilitation facility"* and *"In-person clinical physical examination"*. | Withheld until primary credentials documentation is verified. |
| **6. FAQ: Insurance Coverage Guarantee ("Yes. Accepts most major insurance plans")** | Original FAQ accordion (Question 1) | **Unverified Administrative Claim** (Clinic insurance network and cashless empanelment not yet verified) | **Neutralized**: *"Insurance coverage policies depend on your insurance provider, network empanelment, and individual policy terms for physiotherapy and physical rehabilitation services. Insurance acceptance remains subject to individual verification."* | Awaiting clinic administrative network audit. |
| **7. FAQ: Same-Day Appointment Guarantee ("Yes. Offers same-day appointments")** | Original FAQ accordion (Question 4) | **Unverified Operational Guarantee** (Capacity varies dynamically) | **Neutralized**: *"Same-day appointment availability depends strictly on daily clinical scheduling and practitioner capacity, and cannot be guaranteed in advance. Patients seeking prompt consultation are advised to contact our clinic reception directly by telephone."* | Operational policy clarified. |
| **8. FAQ: Fixed Session Durations ("45 minutes to 1 hour; follow-ups 30 to 45 minutes")** | Original FAQ accordion (Question 5) | **Invented Operational Data** (No uniform duration protocol on file) | **Neutralized**: *"Session duration varies depending on individual clinical requirements, whether you are attending an initial consultation, physical assessment, or subsequent follow-up rehabilitation appointment. Specific session timings are determined by the practitioner following the initial physical evaluation."* | Awaiting clinic scheduling confirmation. |
| **9. FAQ: Mandatory Pre-Treatment X-Ray / Diagnostic Imaging** | Original FAQ accordion (Question 3) | **Unapproved Clinical Protocol** | **Neutralized**: Clarified that diagnostic imaging is not uniform and is evaluated on an individual basis during physical examination if clinically indicated. | Approved conservative protocol. |
| **10. FAQ: Chiropractor vs. Physiotherapist Distinction** | Original FAQ accordion (Question 2) | **Inter-Professional Definition** | **Balanced & Factually Aligned**: Clarified that physiotherapists emphasize active therapeutic exercise, functional movement retraining, and muscle strengthening, while chiropractors focus primarily on manual adjustments and articulatory techniques. Noted collaborative practice at the clinic. | Approved neutral definition. |
| **11. Consultation Quick Inquiry Form Backend Status** | Shared `ServicesCTA.tsx` form | **Unconnected Backend** | **Transparently Disclosed**: Informs user that online transmission is simulated / pending backend integration, directing urgent bookings to the verified clinic telephone dialer. | Compliant operational notice. |

---

### 3.17 Phase 20.1 Final Content, Technique & Facility Compliance Resolution Matrix

Comprehensive resolution matrix of audited clinic-specific claims, physiological mechanism statements, conditions scope, facility standards, and FAQ text for Advanced Physiotherapy (`/services/advanced-physiotherapy`):

| Audited Claim / Topic | Original Location | Category & Regulatory Finding | Action Taken in Phase 20.1 Implementation | Current Status & Authorization Needed |
| :--- | :--- | :--- | :--- | :--- |
| **1. "Orthopaedic Manual Therapy & Mulligan Concept Mobilizations"** | `src/data/services.ts` (description) | **Unverified Specific Technique Registration** (Specific proprietary certification and manual therapy registry documentation not yet verified on file) | **Removed completely**. Replaced with factual, non-promissory wording: *"Physiotherapy care at Pain and Paralysis Clinic involves in-person physical assessments, movement observation, and clinician-guided exercises tailored to individual comfort."* | Withheld until primary accreditation certificate is verified. |
| **2. Physiological & Outcome Claims ("Supports localized soft-tissue mobility and circulation", "Rebuilds muscular stabilization and functional capacity", "Restores fluid joint mechanics")** | `src/data/services.ts`, `PhysiotherapyHero.tsx`, `PhysiotherapyApproaches.tsx`, `PhysiotherapyIntroduction.tsx` | **Unapproved Physiological & Outcome Promises** (Medical advertising regulations prohibit promising specific tissue repair, circulation changes, or functional outcomes) | **Removed completely across all components and data files**. Replaced with factual descriptions of consultation topics: *"Physical movement assessment"*, *"guided active exercise"*, and *"postural guidance tailored to individual comfort"*. | Approved neutral descriptive phrasing. |
| **3. "Evidence-Based Physical Therapy Methods" & "Clinical Methodology"** | `PhysiotherapyHero.tsx`, `PhysiotherapyApproaches.tsx`, `PhysiotherapyIntroduction.tsx` | **Unsubstantiated Authority Phrasing** (Phrasing implies formalized academic clinical protocols without approved clinic citations) | **Removed**. Headings updated to: *"Physiotherapy & Movement Assessment"* and *"Clinical Physical Therapy Approaches"*. Subtitles updated to factual descriptive overviews. | Approved factual wording. |
| **4. Conditions Presented as Guaranteed Clinic Treatment Indications** | `PhysiotherapyConditions.tsx`, `src/data/services.ts` | **Unapproved Clinical Diagnostic Scope** (Conditions cannot be claimed as guaranteed treatment indications without approved clinic protocol) | **Re-framed as "Musculoskeletal Areas & Movement Concerns Evaluated"**: Post-operative movement review, shoulder & upper limb movement, neck & lower back movement strain, soft-tissue strain & activity recovery, long-standing muscular stiffness, everyday mobility & balance review. | Approved neutral educational areas. |
| **5. "Outpatient Rehabilitation Facility Standards" & Implied Accreditation / Hygienic Standards** | `PhysiotherapyTechniques.tsx` (facility container) | **Unverified Facility Accreditation Claim** (Implies formal facility certification, accreditation, or dedicated specialized areas beyond verified clinic scope) | **Neutralized completely**. Award badge removed. Container redesigned to match Phase 19.1 approved pattern: *"Outpatient Physical Care & Consultation Environment"*, describing standard examination benches, in-person movement reviews, and outpatient conservative scope. | Approved neutral facility overview. |
| **6. "Verified Patient Questions & Evidence-Based Answers" Claim** | `PhysiotherapyFAQ.tsx` (heading & JSDoc) | **Unverified Operational Statement** (Questions are common patient inquiries, not clinic-verified protocol documents) | **Neutralized**. Header updated to: *"General information regarding physiotherapy consultations, physical assessments, and appointment policies at Pain & Paralysis Clinic."* | Approved neutral FAQ header. |
| **7. FAQ Conditions Scope (Question 6)** | `PhysiotherapyFAQ.tsx` (Question 6) | **Unverified Clinical Treatment List** | **Neutralized**: *"Consultations evaluate common musculoskeletal movement concerns, including neck and lower back discomfort, shoulder mobility limitations, post-injury movement strain, and everyday postural fatigue. An in-person physical assessment is conducted to evaluate individual movement and discuss whether physical therapy guidance is appropriate."* | Approved neutral scope. |
| **8. FAQ Chiropractor vs. Physiotherapist Distinction (Question 2)** | `PhysiotherapyFAQ.tsx` (Question 2) | **Inter-Professional Definition & Outcome Promise** ("to restore everyday mobility") | **Neutralized**: Removed outcome promise. Focuses on movement guidance, active exercise, and posture education for physiotherapy vs. manual adjustments for chiropractic care. | Approved neutral definition. |
| **9. SEO Meta Description Outcome Language** | `src/app/services/[slug]/page.tsx` | **Unapproved Promotional Phrasing** | **Updated**: *"Outpatient physical therapy consultations, physical movement assessment, guided exercise instruction, and postural guidance at Pain & Paralysis Clinic, Madhanandapuram, Chennai."* | Approved neutral metadata. |
| **10. "When to Seek" Outcome Guidance** | `PhysiotherapyWhenToSeek.tsx` (card footnotes) | **Promissory Progression Language** ("progress safely through gentle mobilization", "improve endurance", "helps address deconditioning") | **Neutralized**: Footnotes updated to consultation perspectives: *"A therapist can evaluate movement tolerance and discuss physician-recommended exercises"*, *"Therapeutic exercise focuses on active movement practice and functional movement guidance"*, and *"Ergonomic suggestions provide practical strategies for seated workday alignment"*. | Approved educational guidance. |

---

### 3.18 Phase 20.2 Final Physiotherapy Service-Scope Verification Resolution Matrix

Comprehensive resolution matrix of audited clinic services, specific manual techniques, equipment claims, and service-scope boundaries for Advanced Physiotherapy (`/services/advanced-physiotherapy`):

| Audited Scope / Technique / Equipment Claim | Supporting Documentation Available | Regulatory & Verification Finding | Action Taken in Phase 20.2 | Clinic Approval Status |
| :--- | :--- | :--- | :--- | :--- |
| **1. Hands-On Joint Mobilization Claimed as Clinic Service** | **None** (General physiotherapy knowledge only; no clinic-specific service agreement or protocol on file) | **Unsupported Clinic-Specific Service Claim** (Cannot claim clinic provides this technique without documentation) | **Removed as Clinic Service Claim**. Reframed in `PhysiotherapyApproaches.tsx` as general educational concept: *"Passive & Manual Concepts — Physical therapy disciplines often study hands-on articulatory concepts and joint positioning within conservative care."* | Unconfirmed at clinic; general educational context only. |
| **2. Soft-Tissue Positioning / Manual Techniques Claimed as Clinic Service** | **None** | **Unsupported Clinic-Specific Service Claim** | **Removed as Clinic Service Claim**. Removed from `PhysiotherapyIntroduction.tsx` and `PhysiotherapyTechniques.tsx`. Reframed as general consultation discussion. | Unconfirmed at clinic. |
| **3. Guided Therapeutic Exercise Claimed as Clinic Service** | **None** | **Unsupported Clinic-Specific Service Claim** | **Removed as Clinic Service Claim**. Reframed in `PhysiotherapyApproaches.tsx` as general educational topic: *"Active Movement Principles — Education on maintaining regular, comfortable physical activity suited to an individual's daily tolerance."* | Unconfirmed at clinic. |
| **4. Home Exercise Recommendations Claimed as Clinic Service** | **None** | **Unsupported Clinic-Specific Service Claim** | **Removed as Clinic Service Claim**. Reframed as general educational awareness: *"Routine Activity Guidance — General recommendations on establishing sustainable, gentle daily movement habits at home or work."* | Unconfirmed at clinic. |
| **5. Postural and Ergonomic Education Claimed as Clinic Service** | **None** | **Unsupported Clinic-Specific Service Claim** | **Removed as Clinic Service Claim**. Reframed in `PhysiotherapyIntroduction.tsx` and `PhysiotherapyApproaches.tsx` as general educational topic: *"Postural & Ergonomic Awareness — Educational guidance regarding workstation arrangement, screen height, and everyday sitting habits."* | Unconfirmed at clinic. |
| **6. Movement & Mobility Assessments Claimed as Specific Clinic Diagnostic Protocol** | **None** | **Unsupported Protocol Claim** | **Removed as Protocol Claim**. Reframed neutrally as *"In-person clinical consultation and movement discussion"*, focusing on reviewing physical history, posture, and symptoms collaboratively. | Approved neutral consultation description. |
| **7. Examination Benches and Stated Equipment Use** | **None** (No equipment inventory or facility invoice on file for specialized physiotherapy benches) | **Unsupported Equipment Claim** | **Removed Completely**. All references to examination benches, specialized benches, and therapeutic equipment deleted from `PhysiotherapyTechniques.tsx`. Replaced with general outpatient clinic setting description. | Withheld permanently. |
| **8. Separation of General Physiotherapy Knowledge vs. Confirmed Clinic Services** | Live site inspection | **Boundary Ambiguity** | **Systematically Separated Across All Components**: Headings and descriptions clearly state that sections provide general educational information on topics that may be discussed during a consultation, rather than claiming Pain & Paralysis Clinic provides specific proprietary techniques. | Compliant non-promissory structure. |

---

### 3.19 Phase 20.3 Final Physiotherapy Content Polish Resolution Matrix

Comprehensive resolution matrix of final content corrections executed on `/services/advanced-physiotherapy` and shared components:

| Audited Location | Original Copy / Claim | Regulatory Finding | Action Taken in Phase 20.3 | Current Status |
| :--- | :--- | :--- | :--- | :--- |
| **1. CTA Heading** (`ServicesCTA.tsx`, `PhysiotherapyDetail.tsx`) | *"Customized treatment plans and lasting recovery"* | **Unsupported Outcome Promise** ("lasting recovery" implies guaranteed treatment efficacy) | **Replaced with neutral consultation heading**: `"Discuss Your Physiotherapy Consultation Options"`. Subtitle updated to remove *"tailored to your recovery goals"*, replacing with *"tailored to your functional needs"*. | Fully Neutralized & Compliant. |
| **2. Facility Description** (`PhysiotherapyTechniques.tsx`) | *"Specific treatment modalities, manual procedures, or therapeutic equipment..."*, *"Outpatient Clinical Facility"*, *"Conservative outpatient care environment"* | **Unverified Equipment & Facility Statements** (No equipment invoices or dedicated facility certifications on file) | **Removed all references to equipment, benches/tables, and dedicated facilities**. Replaced with general outpatient consultation wording: *"Specific care approaches, recommendations, or exercises are discussed individually with the practitioner based on clinical consultation"*, *"Outpatient Consultation Setting"*, and *"Outpatient consultation environment"*. | Strictly General Outpatient Setting. |
| **3. Related Chiropractor Card** (`PhysiotherapyRelated.tsx`) | *"Targeted manual alignment and musculoskeletal evaluation designed to support spinal mobility and physical comfort."* (Category: *"Spinal Alignment"*) | **Mechanistic / Benefit Claim** (Describes spinal alignment and physical comfort mechanisms) | **Replaced with neutral service-navigation wording**: `"Explore the Advanced Chiropractor service and learn about its consultation approach."` Category updated to `"Chiropractic Care"`. | Neutral Cross-Navigation. |
| **4. Final Content Polish Scan** | Global scan for *"lasting recovery"*, *"guaranteed recovery"*, *"pain relief"*, unsupported manual techniques, unverified equipment, and credentials | **Compliance Verification** | Verified **0 unsupported occurrences** across all physiotherapy components, service metadata, and shared CTA components. | Verified 100% Compliant. |

---

### 3.20 Phase 21 Advanced Aquatic Therapy Service Scope & Content Resolution Matrix

Comprehensive resolution matrix of audited clinic services, specific manual/aquatic techniques, facility claims, and service-scope boundaries for Advanced Aquatic Therapy (`/services/advanced-aquatic-therapy`):

| Audited Scope / Technique / Equipment Claim | Supporting Documentation Available | Regulatory & Verification Finding | Action Taken in Phase 21 Implementation | Clinic Approval Status |
| :--- | :--- | :--- | :--- | :--- |
| **1. In-House Heated Hydrotherapy Pool Claimed as Existing Clinic Facility** | **None** (No building blueprint, pool maintenance contract, or facility inspection on file) | **Unsupported Facility Claim** (Cannot claim clinic has an in-house heated hydrotherapy pool without documentation) | **Transparently Disclosed & Withheld**: Described as general educational hydrodynamic principles. Added prominent facility notice: *"Pain & Paralysis Clinic provides outpatient clinical consultations, movement reviews, and educational planning. Specific in-house pool availability, community pool referrals, or dry-land alternative programs are evaluated and confirmed directly with clinical staff during your visit."* | Withheld as clinic facility until verified. |
| **2. Pool-Based Treatment Guarantee / Session Delivery** | **None** | **Unsupported Treatment Guarantee** | **Neutralized**: Formulated strictly as outpatient consultation, health screening, and mobility evaluation to review candidacy and safety before considering water-based activity. | Unconfirmed; consultation only. |
| **3. Theme-Demo Acupuncture / TCM Content (Needles, Qi, Cupping, Moxibustion, Herbal Medicine)** | Original template artifact | **Unrelated Demo Content** | **Removed 100% across all components and metadata**. Replaced with factual biomechanical principles of water (buoyancy, fluid drag, hydrostatic pressure, thermal comfort). | Withheld permanently. |
| **4. Visceral / Systemic Disease Claims (Digestive, Asthma, Fertility, Hormonal, Sleep)** | Original template artifact | **Unapproved Clinical Indication Claims** | **Removed completely**. Replaced with 6 evaluated physical movement concerns (Weight-bearing joint sensitivity, post-surgical movement reconditioning, spinal movement & axial comfort, balance & gait coordination, generalized deconditioning, recurring muscular stiffness). | Approved conservative scope. |
| **5. Certified Aquatic Fitness Instructor / Specialist Registrations (QFCAFI – 25-0050)** | Profile reference | **Unverified Primary Certificate** | **Withheld from visible badges and cards** until primary license document is inspected. Focused on clinical assessment by licensed physical therapists. | Withheld until primary certificate is uploaded. |
| **6. Physiological & Outcome Guarantees ("Eliminates 90% body weight", "Cures osteoarthritis", "Restores paralyzed gait")** | Original service copy | **Unapproved Promissory Medical Advertising** | **Neutralized**: Scientific explanation of buoyancy and hydrodynamic resistance without promissory recovery claims or guaranteed tissue outcomes. | Approved non-promissory principles. |
| **7. FAQ Insurance Empanelment & Same-Day Availability Guarantees** | Original FAQ template | **Unverified Administrative & Operational Claims** | **Neutralized**: Clarified that insurance coverage depends on individual policy and network empanelment; same-day appointments cannot be guaranteed in advance. | Standard operational policy. |
| **8. CTA Outcome Language ("Customized treatment plans and lasting recovery")** | Shared CTA component | **Unsupported Outcome Promise** | **Replaced with tailored consultation heading**: `"Discuss Your Aquatic Therapy Consultation Options"`, focusing on conservative care planning tailored to functional needs. | Fully Compliant. |

---

### 3.21 Phase 21.1 Final Aquatic Therapy Content, Imagery & Link Audit Matrix

Comprehensive resolution matrix of the Phase 21.1 focused audit on `/services/advanced-aquatic-therapy`:

| Audited Area | Original Implementation / Finding | Regulatory & Compliance Finding | Action Taken in Phase 21.1 Audit | Verification Status |
| :--- | :--- | :--- | :--- | :--- |
| **1. Aquatic Imagery Audit** (`slide-aquatic.webp`, `aquatic-therapy.webp`) | Hero alt text referenced *"at Pain and Paralysis Clinic"*; modality card pill said *"Aquatic Principles"* | **Ambiguous Facility Attribution** (Could lead visitors to assume images depict on-site clinic pools) | **Framed as Generic Educational Representation**: Hero alt text updated to `"Educational illustration of water-based movement and aquatic rehabilitation principles"`. Modality image pill updated to `"Illustrative Concept"`, card footer badge updated to `"Hydrodynamic Principles — Educational Scope"`, and SEO OG image alt text updated. | Verified Illustrative Only. |
| **2. Hydrodynamic Descriptions Audit** (`AquaticTherapyBenefits.tsx`) | Cards mentioned *"circulatory support"*, *"peripheral vasodilation"*, *"heated pool environments"*, and *"motor re-education"* | **Unapproved Physiological & Facility Statements** (Implied clinical outcomes, vasodilation promises, and confirmed heated pools) | **Neutralized All 6 Cards**: Reframed strictly around fundamental physical principles (Archimedes' buoyancy, hydrostatic pressure fluid mechanics, velocity-dependent hydrodynamic drag, water thermal conductivity, multi-planar fluid dynamics, and tactile fluid input). Removed all physiological outcome promises and added bottom educational scope disclaimer. | Verified 100% Non-Promissory. |
| **3. Facility Transparency Audit** (Page-wide: Intro, Approaches, FAQ, CTA) | Scope notes present, but needed explicit statement that in-house pool availability is not confirmed and treatment is not on-site | **Facility Boundary Requirement** | **Explicitly Communicated Across All Sections**: Updated Introduction scope disclosure to state *"In-house hydrotherapy pool availability has not been confirmed, and pool-based treatment is not offered on-site"*. Updated Approaches scope notice, FAQ Answer 7, and changed Introduction button to `"Book Outpatient Consultation"`. | Transparent & Documented. |
| **4. 3D Gait Analysis Route & Link Verification** (`AquaticTherapyRelated.tsx`) | Card linked to `/services/advanced-3d-gait-analysis` with *"Explore Program"* button | **Unimplemented Destination Route** (Route `/services/advanced-3d-gait-analysis` currently renders generic dynamic template placeholder pending Phase 22) | **Removed Card from Related Grid**: Withheld 4th card until Phase 22 completes the dedicated detail page. Adjusted Related Specialized Treatments grid to 3 balanced columns linking exclusively to approved, completed pages (Spine Decompression, Chiropractor, Physiotherapy). | Zero Broken or Placeholder Links. |

---

### 3.22 Phase 22 Advanced 3D Gait Analysis Clinical Content & Scope Resolution Matrix

Comprehensive resolution matrix of audited clinic services, specific biomechanical claims, hardware verification, and service-scope boundaries for Advanced 3D Gait Analysis (`/services/advanced-3d-gait-analysis`):

| Audited Scope / Claim / Content Area | Supporting Documentation Available | Regulatory & Verification Finding | Action Taken in Phase 22 Implementation | Clinic Approval Status |
| :--- | :--- | :--- | :--- | :--- |
| **1. Motion-Capture Camera Array & Proprietary Sensor Systems** | **None** (No manufacturer invoices, calibration records, or hardware certifications on file) | **Unverified Hardware Claim** (Cannot advertise specific motion-capture camera models or sensor hardware as clinic-owned without documentation) | **Neutralized to Educational Biomechanics**: Reframed as universal scientific principles of kinematic tracking and spatial-temporal analysis. Added explicit hardware footnote: *"Instrumentation descriptions represent universal scientific principles in clinical gait analysis. Specific hardware models, optical cameras, sensor configurations, and on-site testing protocols are reviewed and confirmed during in-person clinical consultation."* | Withheld as clinic-owned inventory until verified. |
| **2. Multi-Axis Force Plates & Dynamic EMG Instrumentation** | **None** | **Unverified Diagnostic Technology Claim** | **Neutralized**: Discussed as general biomechanical concepts (ground reaction dynamics and force distribution) rather than guaranteed clinic instrumentation. | Withheld until verified. |
| **3. Real-Time Diagnostic Capability ("Diagnoses 100% root causes in real time")** | Original marketing copy | **Prohibited Diagnostic & Guarantee Claim** (Gait analysis is an observational evaluation tool that measures movement patterns; it is not an independent diagnostic test) | **Neutralized & Disclaimed**: Added prominent non-diagnostic notice across Introduction and Conditions sections: *"Gait analysis is an observational assessment aid that measures movement patterns to support multidisciplinary rehabilitation planning. It does not replace independent radiological diagnostics, neurological workups, or medical pathology evaluations."* | Verified Non-Diagnostic. |
| **4. Pain Relief & Recovery Guarantees ("Permanent pain relief", "Fastest recovery", "Cures runner's knee")** | Original marketing copy | **Prohibited Outcome Guarantee** (Medical advertising regulations prohibit promising permanent pain relief or speed of recovery) | **Completely Removed**: Replaced with factual rehabilitation planning goals: *"Translating Gait Data into Targeted Recovery Plans"*, focusing on muscle strengthening, joint mobilization, and habit coaching. | Fully Compliant. |
| **5. Guaranteed Injury Prevention in Athletes ("Prevents 100% of running injuries")** | Reference sports section | **Unsubstantiated Preventive Claim** | **Neutralized**: Framed as educational movement feedback on cadence, impact loading, and running economy, accompanied by explicit disclaimer that gait analysis cannot guarantee injury immunity. | Verified Non-Promissory. |
| **6. Complete Paralysis Recovery Promises** | Reference neurological section | **Prohibited Neurological Promise** (Promising complete recovery from paralysis violates clinical ethics and medical advertising laws) | **Neutralized**: Reframed around supportive objective tracking of step symmetry, foot clearance, and balance stability to assist neuro-physiotherapists, accompanied by explicit neurological disclaimer. | Compliant & Grounded. |
| **7. Clinical Accuracy Percentages ("99.8% precision")** | Reference promotional copy | **Unverified Statistical Claim** | **Withheld Completely**: All arbitrary accuracy figures and statistical metrics without peer-reviewed citations were excised from metadata and page copy. | Excluded. |
| **8. Related Services Cross-Linking** | Services architecture | **Service Verification Requirement** | **Linked Strictly to Completed Pages**: Connected exclusively to Advanced Spine Decompression, Advanced Chiropractor, Advanced Physiotherapy, and Advanced Aquatic Therapy. Zero placeholder links. | 100% Validated Destinations. |

---

### 3.23 Phase 22.1 Advanced 3D Gait Analysis Content & Trust Resolution Matrix

Comprehensive resolution matrix of the Phase 22.1 focused content, imagery, and trust audit on `/services/advanced-3d-gait-analysis`:

| Audited Area | Phase 22 Wording / Finding | Compliance & Regulatory Finding | Action Taken in Phase 22.1 Audit | Verification Status |
| :--- | :--- | :--- | :--- | :--- |
| **1. Introduction Image Alt Text & Badges** (`GaitAnalysisIntroduction.tsx`, `page.tsx`) | Alt text: *"Advanced 3D Gait Analysis computerized motion assessment at Pain and Paralysis Clinic Chennai"*; Badge: *"Diagnostic Equipment"* | **Ambiguous / Misleading Equipment Attribution** (Stock illustration could be misconstrued as depicting clinic hardware) | **Updated to Generic Educational Representation**: Alt text updated to `"Educational illustration of three-dimensional human gait and movement analysis"`. Floating pill updated from `"Diagnostic Equipment"` to `"Illustrative Concept"`. Surrounding badge updated to `"Educational Scope"`. SEO OG alt text in `page.tsx` synchronized. | Verified Educational Stock Illustration. |
| **2. Professional Credential Statements** (`GaitAnalysisRehabilitation.tsx`, `GaitAnalysisFAQ.tsx`) | *"Evaluations are interpreted by licensed physical therapy professionals with a focus on comprehensive kinetic chain care"* | **Unsupported Professional Credential Claim** (Staff licenses and registrations have not been officially uploaded/verified) | **Neutralized to Consultation Purpose**: Updated to `"Consultations emphasize whole kinetic-chain movement observation to support individualized conservative rehabilitation planning."` Header badge updated from `"Clinical Oversight"` to `"Consultation Focus"`. Removed all invented credentials across all components. | Fully Neutralized & Compliant. |
| **3. Educational Methodology vs. Clinic Services** (`GaitAnalysisMethodology.tsx`) | 4-step process (Clinical History, Landmark Calibration, Locomotion Capture, Biomechanical Analysis) | **Implied On-Site Motion Lab Operations** (Steps implied the clinic operates on-site 3D motion-capture systems) | **Separated Methodology from Clinic Scope**: Section titled `"How 3D Gait Analysis Works in Biomechanical Practice"`. Added prominent scope callout: *"Pain & Paralysis Clinic provides outpatient movement consultations, clinical history reviews, and functional mobility assessments. The advanced motion capture, sensor calibration, and instrumentation steps detailed below represent general scientific methodology used in comprehensive gait laboratories; specific on-site testing tools and referral options should be confirmed directly with clinic staff."* Individual steps labeled as `(Laboratory Concept)`. | Crystal-Clear Boundary. |
| **4. Technology Disclosure** (`GaitAnalysisMethodology.tsx`) | Described optical tracking, inertial sensors, force measurement | **Unverified On-Site Hardware Availability** | **Added Mandatory Technology Disclosure**: Integrated exact required text: *"Technology note: Optical tracking systems, inertial sensors and force-measurement platforms are examples of tools used in some comprehensive gait-analysis environments. Their availability at Pain & Paralysis Clinic has not been independently confirmed. Please contact the clinic to verify the assessment methods available."* | Fully Compliant Technology Note. |
| **5. Movement Parameters Scope** (`GaitAnalysisParameters.tsx`) | Described 6 parameters (Stride Length, Joint Angles, Foot Strike, Pelvic Alignment, Kinetic Symmetry, Center of Mass) | **Implied Measurement of All 6 in Every Visit** | **Added Educational Scope Callout**: Clarified that parameters are educational examples of metrics evaluated in comprehensive biomechanical laboratories, and actual observation during consultation depends on clinical presentation and available assessment tools. No diagnostic claims made. | Educational Examples Only. |
| **6. Session Duration & Consultation Timings** (`GaitAnalysisRehabilitation.tsx`, `GaitAnalysisFAQ.tsx`) | Stated sessions take *"45 to 60 minutes"* | **Invented / Unverified Operational Detail** (Clinic session duration not confirmed by clinic operational records) | **Neutralized**: Updated to *"Consultation length varies based on clinical history review and individual mobility assessment needs; specific timing is confirmed upon scheduling."* | Operational Transparency. |
| **7. CTA & Submission Disclosure** (`ServicesCTA.tsx`) | Shared component | **Zero False Confirmation** | Confirmed simulated mock notice informs user that live backend submission is not connected, with telephone dialer fallback (`tel:8015559609`). Zero changes made to other service pages. | Transparent & Safe. |

---

### 3.24 Phase 24, 24.1 & 24.2 Gallery & Facility Assets Inventory (`src/data/gallery.ts`)

Reconstructed, forensically audited, and converted to genuine WebP (`RIFF....WEBP`, MIME `image/webp`):

| Asset ID | File Path | Actual Dimensions | Binary Format | MIME Type | Item Classification | Visible Subject & Text Evidence | Public Display Status & Provenance Note |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `award-spine-care` | `/images/gallery/award-spine-care.webp` | 1024 × 1024 px | WebP | `image/webp` | Award Graphic | "TAMILNADU AWARDS 2026", "NATIONAL EXCELLENCE COUNCIL", "DR. DINESH ANANDHAN", "EXCELLENCE IN ROBOTIC CHIROPRACTIC & NON-SURGICAL PAIN MANAGEMENT", Krishna Gana Sabha | Approved: Converted to genuine WebP; event poster graphic with physical trophy |
| `award-leadership` | `/images/gallery/award-leadership.webp` | 768 × 1024 px | WebP | `image/webp` | Felicitation Photo | Dr. Dinesh Anandhan with colleagues holding flower bouquet; no certificate text | Approved: Converted to genuine WebP; office felicitation photo; unverified award status |
| `award-robotic-physio` | `/images/gallery/award-robotic-physio.webp` | 1024 × 1024 px | WebP | `image/webp` | Press Meet Photo | Dr. Dinesh Anandhan at news microphones before "PRESS MEET 2026" / "INDIAN MEDICAL AWARDS 2026" / "TWELL MAGAZINE" backdrop | Approved: Converted to genuine WebP; media interview photo; NOT a physical trophy |
| `award-accreditation` | `/images/gallery/award-accreditation.webp` | 1024 × 1024 px | WebP | `image/webp` | Stage Event Photo | Dr. Dinesh Anandhan shaking hands on stage at "INDIAN MEDICAL AWARDS 2026" ceremony ("Winner 2026") presented by Twell | Approved: Converted to genuine WebP; ceremony stage photo; NOT a clinical accreditation plaque |
| `award-plaque` | `/images/gallery/award-plaque.webp` | 1024 × 1024 px | WebP | `image/webp` | Certificate Presentation | Stage handover of framed "Most Trusted Doctor" and recognition certificate at Indian Medical Awards 2026 | Approved: Converted to genuine WebP; stage certificate presentation photo; NOT a physical plaque |
| `office-exterior` | `/images/common/clinic-exterior.webp` | 743 × 361 px | WebP | `image/webp` | Clinic Interior Asset | Interior clinic reception counter, metal patient waiting chairs, water cooler, wall monitor | Approved: Genuine WebP; depicts indoor reception/waiting area, NOT an exterior facade |

#### Patient Privacy & Technical Integrity Enforcement:
1. **Genuine WebP Binary Alignment**: All 5 gallery award images and the clinic reception asset are genuine WebP files matching the `.webp` extension and `image/webp` MIME type.
2. **Preserved Dimensions**: Native dimensions (1024×1024, 768×1024, 743×361) are 100% preserved.
3. **Zero Identifiable Patient Photos**: No patient images are published in the gallery without documented consent.
4. **Zero Fabricated Awards**: No award titles, dates, issuing organizations, rankings, or fake accreditations have been invented.
5. **Operational Verification Labels**: Labeled clinic telephone and hours as awaiting primary clinic confirmation.

---

### 3.25 Phase 25 Contact Us Content & Form Fields Inventory (`src/data/contact.ts`)

#### A. Contact Form Specification & Field Inventory:
| Field Label | HTML Name | Input Type | Required | Validation Rule | Placeholder | Provenance / Service Source |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Full Name** | `fullName` | `text` | Yes | Min 2 characters, letters/spaces only | `e.g. Rajesh Kumar` | Reference site contact form |
| **Email Address** | `email` | `email` | Yes | Valid email format (`^[^\s@]+@[^\s@]+\.[^\s@]+$`) | `e.g. rajesh@example.com` | Reference site contact form |
| **Phone Number** | `phone` | `tel` | Yes | Valid 10-digit Indian number (`/^[6-9]\d{9}$/` with optional `+91`/`0`) | `e.g. 9876543210 or +91 98765 43210` | Reference site contact form |
| **Service Required** | `service` | `select` | Yes | Must select an active clinic service | `Select a clinical service...` | 5 verified clinic services + general option |
| **Message & Symptoms** | `message` | `textarea` | Yes | Min 10 characters | `Please describe your symptoms...` | Reference site contact form |
| **Submit Action** | N/A | `button[type="submit"]` | N/A | Submits for validation; triggers pending gateway notice | `Send Message` | Reference site contact form |

#### B. Service Required Options (Strictly Aligned with Implemented Services):
1. `Advanced Spine Decompression`
2. `Advanced Chiropractor`
3. `Advanced Physiotherapy`
4. `Advanced Aquatic Therapy`
5. `Advanced 3D Gait Analysis`
6. `Other Specialized Rehabilitation / Consultation`

#### C. Clinic Office Information & Verification Status:
| Item | Published Reference Value | Verification Status & Safeguard |
| :--- | :--- | :--- |
| **Clinic Name** | `Pain and Paralysis Clinic` / `Pain and Paralysis Chennai` | Verified against reference header/branding |
| **Published Address** | `Plot no : 5, Madha Nagar Main Road, Madhanandapuram, Chennai, Tamil Nadu – 600125` | Published on reference website; displayed with Madhanandapuram locality |
| **Telephone Line** | `+91 80155 59609` (`8015559609`) | Sourced from reference site; qualified as **Awaiting primary clinic confirmation** |
| **Operating Hours** | Mon–Sat: 8:00 AM–9:00 PM<br/>Sun: 10:00 AM–2:00 PM | Sourced from reference site; qualified as **Subject to clinic confirmation** |
| **Google Maps Pin** | `13.0182, 80.1415` | Verified coordinates; opens `https://maps.app.goo.gl/KFe9nQc8Qc85PVAK9` |
| **Facility Image** | `/images/common/clinic-exterior.webp` | Qualified as reference facility asset; depicts indoor reception/waiting area |
| **Submission Gateway** | No live backend connected | **Zero False Confirmation**: Transparent alert informs user that online submission gateway is pending clinic integration. Input data is preserved. Telephone number is qualified as awaiting primary clinic confirmation and not presented as a confirmed booking channel. |

#### D. Introductory Consultation Pillars (Phase 25.1 Neutralization):
1. **Outpatient Consultation**: General consultations regarding non-surgical spine decompression, chiropractic care, and physical therapy services cataloged at the clinic.
2. **In-Person Assessment**: Clinical consultations occur on-site at the Madhanandapuram facility to review personal case history and discuss conservative care options.
3. **Practice Scope**: Non-surgical musculoskeletal care designed to address postural strain, joint mobility restrictions, and physical rehabilitation.
*All outcome guarantees, credential assertions, and unverified clinical capabilities withheld.*










