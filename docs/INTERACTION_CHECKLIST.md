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

