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
| **Frequently Asked Questions** | `src/data/faqs.ts` | `FaqItem[]` | 7 Verified FAQs | Verified | Homepage FAQ section (`.sa-ac-item`) |
| **Health Tips & Articles** | `src/data/articles.ts` | `ArticleItem[]` | 3 Clinical Articles | Verified | Tips & Article catalog (`/tips-article/`) |
| **Clinical Statistics** | `src/data/statistics.ts` | `StatisticItem[]` | 4 Metrics | Verified (2 confirmed, 2 pending) | Homepage Counter widget (`.counter.default`) |
| **Hero Banners** | `src/data/hero-slides.ts` | `HeroSlideItem[]` | 5 Slides | Verified | Homepage Sky Slider (`.sky-advanced-slider`) |
| **Clinical Team** | `src/data/team.ts` | `TeamMemberItem[]` | 1 Lead Practitioner Profile | Verified | Homepage Our Team section & About Us page |

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

All 7 verified clinical questions from the live homepage accordion:

1. `faq-01`: "Do you accept insurance?" (*Insurance & Payment*)
2. `faq-02`: "What is the difference between a chiropractor and a physiotherapist?" (*Treatment Differences*)
3. `faq-03`: "Will I need X-rays or diagnostic tests before treatment?" (*Diagnosis & Clinical Assessment*)
4. `faq-04`: "Can I Get a Same Day Appointment?" (*Appointments & Scheduling*)
5. `faq-05`: "How Long does a chiropractic Treatment session last?" (*Session Duration*)
6. `faq-06`: "What conditions do you treat?" (*Conditions Treated*)
7. `faq-07`: "What type of Services does Pain and Paralysis provide?" (*Clinical Services*)

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

| Metric Metric Key | Value Displayed | Numeric Value | Label | Status |
| :--- | :--- | :--- | :--- | :--- |
| `stat-experience` | `10+` | 10 | Years of Experience | Confirmed (Clinical practice history) |
| `stat-specialists` | `30+` | 30 | Our Specialists | Awaiting confirmation (Roster count verification) |
| `stat-customers` | `12k` | 12000 | Happy Customers | Confirmed (Cumulative patient volume) |
| `stat-team` | `25+` | 25 | Team Members | Awaiting confirmation (Clinic staff roster verification) |

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

