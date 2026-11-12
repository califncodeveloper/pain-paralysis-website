# Interactive Elements & Behavior Checklist

## 1. Overview

This checklist defines every interactive component observed on `https://painandparalysis.com/`, documenting user triggers, animations, state transitions, and accessibility requirements for frontend implementation.

---

## 2. Interaction Matrix

| Element / Component | Trigger | Visual Response | Expected Behavior & Accessibility |
| :--- | :--- | :--- | :--- |
| **Sticky Navigation Bar** | Window scroll (> 80px) | Header changes from transparent (`#00000000`) with white text to solid white background with `#105156` text and shadow `0 4px 20px rgba(0,0,0,0.06)`. | Fixed position at top of viewport (`z-index: 50`). Smooth transition `0.3s ease-in-out`. |
| **Header Nav Links** | Mouse hover / Focus | Text color transitions from `#FFFFFF` to `#1CAAB6`. Active route shows subtle indicator bar underneath. | `a` tag navigation with `aria-current="page"` on current route. Focus-visible outline for keyboard navigation. |
| **Header CTA ("Consult Now")** | Click / Tap | Button background shifts from `#1CAAB6` to `#105156`. | Navigates directly to `/contact-us` or opens quick appointment modal. |
| **Mobile Menu Toggle** | Tap on hamburger (`.vs-menu-toggle`) | Hamburger icon animates or toggles to `X`. Off-canvas drawer slides in from the right with backdrop overlay. | Traps keyboard focus within drawer when open. Body scroll is locked (`overflow: hidden`). Pressing `Esc` or clicking backdrop closes drawer. |
| **Hero Banner Swiper Slider** | Auto-timer (5000ms), Swipe, or Dot click | Active slide fades/slides horizontally with smooth cubic-bezier easing. Active pagination bullet expands from `8px` to `24px` pill. | Pauses auto-rotation on mouse hover or touch hold. Accessible via left/right keyboard arrows. Includes `aria-live="polite"`. |
| **Service Cards (11 Treatments)** | Hover / Focus | Card lifts `-8px` vertically (`translateY(-8px)`). Shadow deepens to `0 20px 40px rgba(28, 170, 182, 0.15)`. Top border glows `#1CAAB6`. | Entire card or card title is clickable, redirecting to dedicated service URL. Accessible card link pattern. |
| **Before / After Image Slider** | Mouse drag / Touch move on center divider | Vertical divider thumb tracks cursor/finger horizontally between 0% and 100%. "Before" and "After" image clips adjust width in real-time. | Fully touch-responsive with `touch-action: pan-y`. Keyboard accessible (left/right arrow keys increment handle by 2%). |
| **Doctor / Video Modal Trigger** | Click on video play button in About section | Fullscreen modal overlay opens with smooth scale-up animation (`opacity: 0 -> 1`, `scale: 0.95 -> 1.0`). | Embeds YouTube/Vimeo/HTML5 clinical video. `Esc` key or close button (`X`) closes modal and pauses playback. |
| **Statistics Counter Animation** | Enters viewport (Scroll trigger) | Numbers count up smoothly from 0 to target value (`10+`, `30+`, `12k`, `25+`) over `1500ms`. | Triggered once using `IntersectionObserver`. Honors `prefers-reduced-motion` by displaying target values immediately. |
| **Testimonial Carousel** | Swipe / Drag / Prev-Next buttons | Card transitions with smooth spring easing. Dot indicators highlight current slide. | Drag-to-slide on mobile with touch velocity threshold. Keyboard arrow navigation. |
| **FAQ Accordion (7 Questions)** | Click / Enter on question header | Panel height animates from `0` to `auto` (`max-height` transition). Chevron icon rotates `180deg`. | `aria-expanded="true/false"`, `aria-controls="faq-answer-id"`. Collapses previously open item or permits multi-expand. |
| **Gallery Awards Lightbox** | Click on any of the 5 award images | Dimmed backdrop overlay appears. High-res version of award image scales into center with zoom capabilities. | Left/right arrow keys advance to next award. Close button or click outside closes lightbox. |
| **Appointment / Contact Form** | Form field input & Submit click | Real-time field validation. Invalid fields show red helper text and highlight border. Button shows loading spinner during processing. | Client-side validation via Zod / React Hook Form. Shows verified success toast / banner upon completion. |
| **Click-to-Call Link (`8015559609`)** | Tap / Click | Triggers native phone dialer on mobile devices or softphone prompt on desktop. | `href="tel:8015559609"`, `aria-label="Call Pain and Paralysis Clinic at 8015559609"`. |
| **Google Maps Pin / Directions** | Click on Map or "Get Directions" | Opens clinic coordinates (`13.0182, 80.1415`) directly in Google Maps in a new browser tab. | `target="_blank"`, `rel="noopener noreferrer"`. |
| **Back to Top Button** | Window scroll (> 400px) | Floating circular button with chevron fades in at bottom-right corner. | Clicking triggers smooth window scroll to `(0, 0)`. Focusable and accessible. |

---

## 3. Advanced Chiropractor Page Interaction Matrix (Phase 19)

| Element / Component | Trigger | Visual Response | Expected Behavior & Accessibility |
| :--- | :--- | :--- | :--- |
| **Breadcrumb Navigation** | Click / Tap | Link color transitions from white/80 to accent cyan (`#07CCEC`). | Semantic breadcrumb with `nav[aria-label="Breadcrumbs"]` and `aria-current="page"` on current route. Focus visible ring on Tab. |
| **Primary Booking CTA** (`ChiropractorIntroduction.tsx`) | Click / Tap | Button transitions from primary teal (`#1CAAB6`) to deep marine teal (`#105156`). | Direct client routing to `/contact-us` with smooth focus preservation. |
| **Conditions Anchor Link** (`#conditions-treated`) | Click / Tap | Border highlights with subtle background transition. | Smooth scroll jump to conditions section with `scroll-mt-20` header clearance. |
| **Benefits Cards (6 items)** | Mouse hover / Focus | Card lifts `-4px` (`translateY(-4px)`), shadow expands, border transitions to `primary/30`. Icon container flips color from `primary/10` to solid `primary`. | Accessible card markup with readable text hierarchy; respects `prefers-reduced-motion`. |
| **Conditions Addressed Cards (6 items)** | Mouse hover / Focus | Background shifts from soft surface (`#F8FBFB`) to white, shadow expands, border glows `primary/30`. "Request diagnostic evaluation" link transitions to `#105156`. | Deep link triggers navigation to `/contact-us` for clinical evaluation. |
| **Methodology Protocol Cards (4 items)** | Mouse hover / Focus | Card lifts `-4px`, step number color shifts from `primary/30` to solid `primary`. | Clear semantic phase indicators (`Phase 1` through `Phase 4`). |
| **Chiropractor FAQ Accordion (7 items)** | Click / Enter on question trigger | Panel height expands smoothly (`grid-rows-[0fr]` to `grid-rows-[1fr]`), chevron icon rotates `180deg` with teal circular highlight. | ARIA expanded (`aria-expanded="true/false"`), `aria-controls`, `role="region"`. Accessible via keyboard Enter/Space. |
| **Related Specialized Therapies (4 cards)** | Mouse hover / Focus | Card lifts `-4px`, image zooms `scale-105`, exploration arrow slides right (`translateX(4px)`). | Direct Next.js Link routing to corresponding service detail pages. |

---

## 4. Advanced Physiotherapy Page Interaction Matrix (Phase 20)

| Element / Component | Trigger | Visual Response | Expected Behavior & Accessibility |
| :--- | :--- | :--- | :--- |
| **Breadcrumb Navigation** | Click / Tap | Link color transitions from white/80 to accent cyan (`#07CCEC`). | Semantic breadcrumb with `nav[aria-label="Breadcrumbs"]` and `aria-current="page"` on current route. Focus visible ring on Tab. |
| **Primary Booking CTA** (`PhysiotherapyIntroduction.tsx`) | Click / Tap | Button transitions from primary teal (`#1CAAB6`) to deep marine teal (`#105156`). | Direct client routing to `/contact-us` with smooth focus preservation. |
| **Conditions Anchor Link** (`#conditions-treated`) | Click / Tap | Border highlights with subtle background transition. | Smooth scroll jump to conditions section with `scroll-mt-20` header clearance. |
| **Conditions Addressed Cards (6 items)** | Mouse hover / Focus | Card lifts `-4px`, shadow expands, border transitions to `primary/30`. "Request Evaluation" link arrow slides right (`translateX(4px)`). | Deep link triggers navigation to `/contact-us` for clinical consultation. |
| **When to Seek Cards (6 items)** | Mouse hover / Focus | Background shifts from soft surface (`#F8FBFB`) to pure white, shadow expands, border glows `primary/30`. Icon background shifts to solid primary teal. | Clear educational guidance cards; accessible card markup with readable text hierarchy. |
| **Approaches & Methodology Cards (6 items)** | Mouse hover / Focus | Card lifts `-4px` (`translateY(-4px)`), shadow expands, border transitions to `primary/40`. Icon container flips color from surface soft to solid `primary`. | Accessible methodology presentation with clinical rationale footnotes; respects `prefers-reduced-motion`. |
| **Process Protocol Cards (4 items)** | Mouse hover / Focus | Card lifts `-4px`, step number color shifts from `primary/30` to solid `primary`. | Clear semantic stage indicators (`Stage 1` through `Stage 4`). |
| **Physiotherapy FAQ Accordion (7 items)** | Click / Enter on question trigger | Panel height expands smoothly (`grid-rows-[0fr]` to `grid-rows-[1fr]`), chevron icon rotates `180deg` with teal circular highlight. | ARIA expanded (`aria-expanded="true/false"`), `aria-controls`, `role="region"`. Accessible via keyboard Enter/Space. |
| **Related Specialized Therapies (4 cards)** | Mouse hover / Focus | Card lifts `-4px`, image zooms `scale-105`, exploration arrow slides right (`translateX(4px)`). | Direct Next.js Link routing to corresponding service detail pages (`/services/advanced-spine-decompression`, `/services/advanced-chiropractor`, `/services/advanced-aquatic-therapy`, `/services/advanced-3d-gait-analysis`). |
| **Consultation Quick Inquiry Form** | Form Submit | Button displays submit state, notice alerts user that backend integration is simulated. | Transparent disclosure prevents deceptive submission confirmation; telephone dialer fallback available. |

---

## 5. Advanced Aquatic Therapy Page Interaction Matrix (Phase 21)

| Element / Component | Trigger | Visual Response | Expected Behavior & Accessibility |
| :--- | :--- | :--- | :--- |
| **Breadcrumb Navigation** | Click / Tap | Link color transitions from white/80 to accent cyan (`#07CCEC`). | Semantic breadcrumb with `nav[aria-label="Breadcrumbs"]` and `aria-current="page"` on current route. Focus visible ring on Tab. |
| **Primary Consultation CTA** (`AquaticTherapyIntroduction.tsx`) | Click / Tap | Button transitions from primary teal (`#1CAAB6`) to deep marine teal (`#105156`). | Direct client routing to `#cta` / `/contact-us` with smooth focus preservation. |
| **Movement Considerations Cards (6 items)** | Mouse hover / Focus | Card lifts `-4px`, shadow expands, border transitions to `primary/30`. "Discuss Consultation" link arrow slides right (`translateX(4px)`). | Deep link triggers navigation to `#cta` for clinical consultation. |
| **When to Consider Cards (6 items)** | Mouse hover / Focus | Background shifts from soft surface (`#F8FBFB`) to pure white, shadow expands, border glows `primary/30`. Icon background shifts to solid primary teal. | Clear educational guidance cards; accessible card markup with readable text hierarchy. |
| **Core Biomechanical Properties (6 items)** | Mouse hover / Focus | Card lifts `-4px` (`translateY(-4px)`), shadow expands, border transitions to `primary/40`. | Educational hydrodynamic physics presentation with non-promissory principles. |
| **Consultation Stages (4 items)** | Mouse hover / Focus | Card lifts `-4px`, step number color shifts from `primary/30` to solid `primary`. | Clear semantic stage indicators (`Stage 01` through `Stage 04`). |
| **Aquatic Therapy FAQ Accordion (7 items)** | Click / Enter on question trigger | Panel height expands smoothly (`grid-rows-[0fr]` to `grid-rows-[1fr]`), chevron icon rotates `180deg` with teal circular highlight. | ARIA expanded (`aria-expanded="true/false"`), `aria-controls`, `role="region"`. Accessible via keyboard Enter/Space. |
| **Related Specialized Therapies (3 cards)** | Mouse hover / Focus | Card lifts `-4px`, image zooms `scale-105`, exploration arrow slides right (`translateX(4px)`). | Direct Next.js Link routing to corresponding approved service detail pages (`/services/advanced-spine-decompression`, `/services/advanced-chiropractor`, `/services/advanced-physiotherapy`). |
| **Consultation Quick Inquiry Form** | Form Submit | Button displays submit state, notice alerts user that backend integration is simulated. | Transparent disclosure prevents deceptive submission confirmation; telephone dialer fallback available. |

---

## 6. Advanced 3D Gait Analysis Page Interaction Matrix (Phase 22)

| Element / Component | Trigger | Visual Response | Expected Behavior & Accessibility |
| :--- | :--- | :--- | :--- |
| **Breadcrumb Navigation** (`GaitAnalysisHero.tsx`) | Click / Tap | Link color transitions from white/70 to accent cyan (`#07CCEC`). | Semantic breadcrumb with `nav[aria-label="Breadcrumb"]` and `aria-current="page"` on current route. Focus visible ring on Tab. |
| **Primary Consultation CTA** (`GaitAnalysisIntroduction.tsx`) | Click / Tap | Button transitions from primary teal (`#1CAAB6`) to deep marine teal (`#105156`). | Direct client routing to `#cta` with smooth focus preservation. |
| **Methodology Anchor Link** (`#how-it-works`) | Click / Tap | Link text transitions from secondary to primary teal; arrow slides right. | Smooth scroll jump to evaluation process section with `scroll-mt-20` header clearance. |
| **Evaluation Roadmap Cards (4 items)** | Mouse hover / Focus | Card lifts `-4px`, step number color shifts from `primary/30` to solid `primary`, icon flips to solid teal. | Clear semantic stage indicators (`Stage 01` through `Stage 04`). Accessible card markup. |
| **Movement Parameters Cards (6 items)** | Mouse hover / Focus | Card lifts `-4px` (`translateY(-4px)`), shadow expands, border transitions to `primary/40`. Icon container flips color to solid `primary`. | Comprehensive parameter cards detailing kinematic metrics and observable indicators. |
| **Conditions Evaluated Cards (6 items)** | Mouse hover / Focus | Card lifts `-4px`, shadow expands, border transitions to `primary/40`. "Discuss during consultation" link arrow slides right (`translateX(4px)`). | Deep link triggers navigation to `#cta` for clinical consultation. Accompanied by prominent non-diagnostic notice. |
| **Sports & Neurological Context Cards (2 pillars)** | Mouse hover / Focus | Card border transitions to `primary/40`, shadow lifts. | Comparative clinical application containers with independent non-promissory scope disclaimers. |
| **Rehabilitation Integration Pillars (3 cards)** | Mouse hover / Focus | Card lifts `-4px`, icon container flips to solid `primary`, shadow expands. | Clear clinical strategies with bulleted checklist. |
| **Patient Preparation Cards (4 items)** | Mouse hover / Focus | Card border highlights, text remains legible. | Actionable guidance on clothing, footwear, session duration, and clinical oversight. |
| **3D Gait Analysis FAQ Accordion (7 items)** | Click / Enter on question trigger | Panel height expands smoothly (`grid-rows-[0fr]` to `grid-rows-[1fr]`), chevron icon rotates `180deg` with teal circular highlight. | WAI-ARIA accordion pattern with `aria-expanded="true/false"`, `aria-controls`, `role="region"`. Accessible via keyboard Enter/Space. |
| **Related Specialized Therapies (4 cards)** | Mouse hover / Focus | Card lifts `-4px`, image zooms `scale-105`, exploration arrow slides right (`translateX(4px)`). | Direct Next.js Link routing to completed approved pages (`/services/advanced-spine-decompression`, `/services/advanced-chiropractor`, `/services/advanced-physiotherapy`, `/services/advanced-aquatic-therapy`). |
| **Consultation Quick Inquiry Form** | Form Submit | Button displays submit state, notice alerts user that backend integration is simulated. | Transparent disclosure prevents deceptive submission confirmation; telephone dialer fallback (`tel:8015559609`) available. |

---

## 7. Tips & Articles / Blog Section Interaction Matrix (Phase 23)

| Element / Component | Trigger | Visual Response | Expected Behavior & Accessibility |
| :--- | :--- | :--- | :--- |
| **Archive Breadcrumbs** (`ArticlesHero.tsx`) | Click / Tap | Text transitions from slate-300 to pure white, focus ring visible. | Accessible semantic breadcrumb `nav[aria-label="Breadcrumb"]` with `aria-current="page"` on current route. |
| **Archive Search Bar** (`ArticleArchiveView.tsx`) | Keyup / Input | Search icon fixed on left; matches dynamically filter cards in real time; "Clear" button appears when query is non-empty. | Real-time substring filter on article titles, excerpts, and tags. Resets to page 1 automatically upon typing. |
| **Category Filter Pills** (`ArticleArchiveView.tsx`) | Click / Tap / Space | Selected pill transitions to solid primary teal with white text; count badge indicates matching articles. | Filters active cards to chosen clinical category (`All`, `Spine Care`, `Physiotherapy`, `Pain Relief`). Sets `aria-selected="true"`. |
| **Search Empty State Reset** | Click / Tap | Button transitions to secondary dark teal. | Clears search input, restores "All" category, resets pagination to page 1. |
| **Pagination Previous / Next** | Click / Enter | Previous/Next buttons highlight with primary teal background; disabled state reduces opacity to 40% with `cursor-not-allowed`. Hidden when only 1 archive page exists. | Navigates between archive pages when article count exceeds page limit; automatically hidden when single page suffices. |
| **Pagination Page Number Pills** | Click / Enter | Active page pill highlights with solid primary teal and elevation shadow; inactive pills highlight on hover. Hidden when only 1 archive page exists. | Sets `aria-current="page"`. Accessible via keyboard Tab and Enter when multiple pages exist. |
| **Article Card** (`ArticleCard.tsx`) | Mouse hover / Focus | Card lifts with expanded shadow, image zooms `scale-105`, title color transitions from dark teal (`#105156`) to primary teal (`#1CAAB6`), Read More arrow slides right (`translateX(6px)`). | Card header and "Read Full Article" link open individual article route (`/tips-article/[slug]`). |
| **Sidebar Newest Posts Widget** (`ArticleSidebar.tsx`) | Mouse hover / Focus | Thumbnail zooms `scale-105`, article title color shifts to primary teal. | Direct deep link to corresponding article detail page. |
| **Sidebar Categories Filter** (`ArticleSidebar.tsx`) | Click / Tap | Selected category row highlights with primary teal background and white text. | Synchronized with main archive view filtering. |
| **Article Detail Breadcrumbs** (`ArticleDetailHero.tsx`) | Click / Tap | Link transitions to pure white with visible focus ring. | Semantic breadcrumb with Home -> Tips & Article -> Current Article trail. |
| **Related Services Links** (`ArticleRelatedServices.tsx`) | Mouse hover / Focus | Card border shifts to primary/40, card lifts with shadow, exploration arrow slides right. | Navigates to corresponding clinical service page (`/services/[slug]`). |
| **Back to Archive Link** (`ArticleDetailContent.tsx`) | Click / Tap | Button background transitions from transparent to solid primary teal with white text, arrow slides left. | Navigates back to `/tips-article` archive. |

---

## 8. Gallery Page Interaction Matrix (Phase 24)

| Element / Component | Trigger | Visual Response | Expected Behavior & Accessibility |
| :--- | :--- | :--- | :--- |
| **Gallery Breadcrumbs** (`GalleryHero.tsx`) | Click / Tap | Link transitions from white/80 to accent cyan (`#07CCEC`), visible focus ring. | Accessible semantic breadcrumbs `nav[aria-label="Breadcrumbs"]` with `aria-current="page"` on current route. |
| **Award & Event Card Trigger** (`GalleryAwards.tsx`) | Click / Enter / Space on card button | Card lifts `-4px` with elevated shadow, image zooms `scale-105`, "Click to enlarge" badge fades in. | Opens `GalleryLightbox` modal at the selected item index (0 to 4). Sets focus inside dialog; captures active element to restore upon close. |
| **Office Reception Card Trigger** (`GalleryOffice.tsx`) | Click / Enter / Space on facility card | Reception photo lifts `-4px`, zoom overlay badge appears. | Opens `GalleryLightbox` modal focused on the clinic interior reception asset (index 5 in combined gallery list). |
| **Lightbox Close Button** (`GalleryLightbox.tsx`) | Click / Enter / Space on close button (`X`) | Button highlights with white/20 background; modal fades out. | Closes lightbox modal; unlocks body scrolling (`overflow: auto`); restores focus to previous triggering button. `aria-label="Close image viewer"`. |
| **Lightbox Escape Key** | `Escape` keypress | Lightbox dismisses immediately. | Dismisses modal from anywhere inside the document; unlocks body scroll; restores trigger focus. |
| **Lightbox Backdrop Scrim Click** | Click on blurred backdrop outside image | Modal closes smoothly. | Dismisses lightbox modal; prevents closing when clicking image or controls. |
| **Lightbox Next Button (`>`)** | Click / Tap / Space on next arrow | Image transitions to next item in sequence; counter updates (e.g., `2 / 6`). | Wraps around seamlessly to first item after last item. `aria-label="View next image"`. |
| **Lightbox Previous Button (`<`)** | Click / Tap / Space on prev arrow | Image transitions to previous item in sequence; counter updates. | Wraps around seamlessly to last item when at index 0. `aria-label="View previous image"`. |
| **Lightbox Arrow Key Navigation** | `ArrowRight` / `ArrowLeft` keys | Image advances to next / previous asset in real-time. | Native keyboard accessibility across all gallery items; respects focus trap. |
| **Lightbox Background Scroll Lock** | While modal is open | Window scrollbar locked (`document.body.style.overflow = "hidden"`). | Prevents background page scrolling while inspecting high-res award and facility photos. Restored on cleanup. |
| **Get Directions Button** (`GalleryOffice.tsx`) | Click / Tap | Button shifts from primary teal to dark marine teal. | Opens verified clinic coordinates (`13.0182, 80.1415`) directly in Google Maps in a new tab (`target="_blank"`, `rel="noopener noreferrer"`). |
| **Contact Clinic Button** (`GalleryOffice.tsx`) | Click / Tap | Outline button fills with primary teal and white text. | Next.js Link client-side navigation to `/contact-us`. |
| **Telephone Dialer Link** (`GalleryOffice.tsx`) | Tap / Click | Phone number highlights in primary teal. | Triggers native phone dialer (`tel:8015559609`) with verified clinic phone number. |
| **Google Maps Address Link** (`GalleryOffice.tsx`) | Click / Tap | Address link shifts to primary teal with underline. | Opens clinic address in Google Maps in new tab. |

---

## 8. Contact Us Page Interactions (`/contact-us`, Phase 25)

| Interactive Element | Trigger / Event | Visual & CSS Feedback | Functional & Accessibility Behavior |
| :--- | :--- | :--- | :--- |
| **Breadcrumb Navigation** (`ContactHero.tsx`) | Click / Tap | Link text shifts to accent cyan (`#07CCEC`). | Semantic breadcrumb with `nav[aria-label="Breadcrumbs"]` and `aria-current="page"` on current route. |
| **Full Name Input** (`ContactForm.tsx`) | Input / Blur | Red border and alert text if empty or < 2 characters; focus ring on focus. | Real-time inline validation; `aria-invalid="true"` and `aria-describedby` error link; auto-focus on failed submit. |
| **Email Address Input** (`ContactForm.tsx`) | Input / Blur | Red border and alert text if invalid email pattern; teal focus ring on focus. | Validates standard email regex; shows actionable error message ("Please enter a valid email address"). |
| **Phone Number Input** (`ContactForm.tsx`) | Input / Blur | Red border and alert text if not 10-digit Indian number; helper note under field. | Cleans input (`+91`, `0`, spaces) and validates `^[6-9]\d{9}$`; helper text for user guidance. |
| **Service Required Dropdown** (`ContactForm.tsx`) | Change / Blur | Focus ring; custom chevron indicator; selection populates state. | Accessible `<select>` with `<option disabled>` placeholder; strictly contains verified clinic services. |
| **Message Textarea** (`ContactForm.tsx`) | Input / Blur | Red border if < 10 characters; character counter updates live. | Inline validation for meaningful message length; resize-y with min-height constraint. |
| **Send Message Button** (`ContactForm.tsx`) | Click / Enter | Primary teal transitions to marine teal; spinner and "Processing Inquiry..." during submission. | Prevents duplicate submissions (`disabled={isSubmitting}`); validates all fields before triggering state change. |
| **Submission Gateway Banner** (`ContactForm.tsx`) | Valid form submit | Smooth fade-in alert in amber palette; scrolls into view smoothly. | **Zero false confirmation**: Informs user that online gateway is pending clinic integration; preserves all user input; notes telephone line is awaiting primary clinic confirmation without instructing immediate telephone booking. |
| **Telephone Call Links** (`ContactForm.tsx`, `ContactOfficeInfo.tsx`) | Tap / Click | Phone number highlights in primary teal. | Triggers native phone dialer (`tel:8015559609`) with clearly visible "Awaiting primary confirmation" badge next to action. |
| **Get Directions Button** (`ContactOfficeInfo.tsx`, `ContactLocationMap.tsx`) | Click / Tap | Button transitions from primary teal to marine teal. | Opens verified clinic coordinates (`13.0182, 80.1415`) directly in Google Maps in new tab (`target="_blank"`, `rel="noopener noreferrer"`). |
| **Google Maps Embed Frame** (`ContactLocationMap.tsx`) | Pan / Zoom / Interact | Interactive Google Maps iframe. | Accessible iframe with descriptive `title` and `aria-label`; lazy-loaded for performance. |

---

## 9. Privacy Policy Page Interactions (`/privacy-policy`, Phase 26 & 26.1)

| Interactive Element | Trigger / Event | Visual & CSS Feedback | Functional & Accessibility Behavior |
| :--- | :--- | :--- | :--- |
| **Breadcrumb Navigation** (`PrivacyPolicyHero.tsx`) | Click / Tap | Link transitions to accent cyan (`#07CCEC`), visible keyboard focus ring. | Semantic breadcrumb `nav[aria-label="Breadcrumbs"]` with `aria-current="page"` on current route. Focus-visible outline for keyboard navigation. |
| **Footer Sub-footer Privacy Link** (`Footer.tsx`) | Click / Tap | Underlined text transitions to primary teal; visible focus ring on Tab. | Accessible Next.js Link routing to canonical `/privacy-policy` with `focus-visible:ring-2`. |

---

## 10. Terms & Conditions Page Interactions (`/terms-and-conditions`, Phase 27)

| Interactive Element | Trigger / Event | Visual & CSS Feedback | Functional & Accessibility Behavior |
| :--- | :--- | :--- | :--- |
| **Breadcrumb Navigation** (`TermsHero.tsx`) | Click / Tap | Home link transitions to accent cyan (`#07CCEC`); visible keyboard focus ring (`ring-2 ring-accent`). | Semantic breadcrumb `nav[aria-label="Breadcrumbs"]` with `aria-current="page"` on Terms & Conditions. Focus-visible outline for keyboard users. |
| **Footer Sub-footer Terms Link** (`Footer.tsx`) | Click / Tap | Underlined text transitions to primary teal (`#1CAAB6`); visible focus ring on Tab (`focus-visible:ring-2 focus-visible:ring-primary`). | Accessible Next.js Link routing to canonical `/terms-and-conditions`. |
| **Redirect Aliases** (`next.config.ts`) | Direct URL request (`/terms`, `/terms-conditions`) | Browser navigates seamlessly with HTTP 308 permanent redirect. | Next.js server-side permanent redirects resolving to canonical `/terms-and-conditions`. |






