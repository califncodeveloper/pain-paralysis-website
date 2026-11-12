# Phase 29.1 — Redirect Edge-Case Verification Report

## 1. Executive Summary & Objective

- **Phase**: Phase 29.1
- **Title**: Redirect Edge-Case Verification
- **Objective**: Perform a focused verification of the Phase 29 redirect implementation across all legacy rules, test precedence ordering between explicit and wildcard rules, audit edge cases on unknown legacy service paths, document empirical evidence for `/appointment` and `/appointments`, and apply the minimum necessary routing adjustments.
- **Scope**: Strictly focused on routing verification, edge-case mitigation, empirical HTTP probing, and documentation. No page redesigns, visual alterations, or unrelated code changes were introduced.
- **Status**: Completed successfully. 100% of tested redirect scenarios (45/45) passed empirical validation on a local production server.

---

## 2. Inspection of Redirect Rules in `next.config.ts`

The redirect configuration in `next.config.ts` was audited line by line. The rules are organized into logical groups evaluated in strict sequential order:

1. **Plural Article Archive & Post Redirects** (Lines 20–30):
   - `/tips-articles` & `/tips-articles/:slug*` -> `/tips-article` & `/tips-article/:slug*`
2. **Original WordPress Service URLs to Canonical `/services/[slug]`** (Lines 31–96):
   - 11 core clinical modalities mapped directly from root slugs to `/services/[slug]`
3. **Legacy SEO & Duplicate Landing Page Mappings** (Lines 97–142):
   - High-value duplicate landing pages (`/physiotherapy-centre`, `/physiotherapy-chennai`, `/chiropractic-treatment-centre`, `/aquatic-therapy`, `/advanced-spine-decompression-2`, `/emg-therapy`, `/biofeedback-therapy`, `/neuro-physiotherapy-2`, `/neuro-physiotherapy-3`)
4. **Theme Medilax CPT Archive & Service Detail Redirects** (Lines 143–174):
   - Theme archive (`/all-services`)
   - 4 specific legacy custom post type (CPT) items (`3d-gait-analysis`, `advanced-spine-decompression`, `chiropractor`, `aquatic-therapy`)
   - Wildcard fallback (`/all-services/:slug*`)
5. **Theme Appointment Aliases** (Lines 175–184):
   - `/appointment` & `/appointments` -> `/contact-us`
6. **Legacy Blog Posts & Legal Page Aliases** (Lines 185–228):
   - Root blog post slugs -> `/tips-article/[slug]`
   - Legal aliases (`/privacy`, `/terms`, `/terms-conditions`)

---

## 3. Wildcard Edge-Case Analysis & Minimum Correction

### 3.1 The Edge-Case Issue
In the initial Phase 29 implementation, the wildcard catch-all rule was defined as:
```typescript
{
  source: "/all-services/:slug*",
  destination: "/services/:slug*",
  permanent: true,
}
```
**Problem Identified**:
When an incoming request accessed an unsupported or unknown legacy slug (e.g. `/all-services/unknown-therapy` or `/all-services/cardiology`), this rule redirected with HTTP 308 to `/services/unknown-therapy`. Because `/services/unknown-therapy` is not a registered clinical service in `src/data/services.ts`, the destination rendered a 404 Not Found error. 

This constituted a **misleading redirect** (redirecting an invalid URL to another broken destination rather than a valid canonical resource). Furthermore, the original WordPress site only ever contained 4 custom post types under `/all-services/` in `medilax_service-sitemap.xml`.

### 3.2 The Minimum Routing Correction
The wildcard destination was updated in `next.config.ts` (line 171) from `/services/:slug*` to `/services`:
```typescript
// Theme Medilax CPT archive & service detail redirects
{
  source: "/all-services",
  destination: "/services",
  permanent: true,
},
{
  source: "/all-services/3d-gait-analysis",
  destination: "/services/advanced-3d-gait-analysis",
  permanent: true,
},
{
  source: "/all-services/advanced-spine-decompression",
  destination: "/services/advanced-spine-decompression",
  permanent: true,
},
{
  source: "/all-services/chiropractor",
  destination: "/services/advanced-chiropractor",
  permanent: true,
},
{
  source: "/all-services/aquatic-therapy",
  destination: "/services/advanced-aquatic-therapy",
  permanent: true,
},
{
  source: "/all-services/:slug*",
  destination: "/services",
  permanent: true,
},
```

### 3.3 Verification of the Correction
1. **Explicit Rules Maintained**: Known legacy CPT slugs still redirect directly to their respective bespoke service pages (`/services/advanced-3d-gait-analysis`, etc.).
2. **Safe Fallback**: Any unknown, outdated, or arbitrary slug under `/all-services/` (e.g. `/all-services/unknown-slug`) safely redirects with HTTP 308 to `/services` (the canonical services overview page), returning HTTP 200 OK without landing on an invalid `/services/[slug]` 404 page.

---

## 4. Precedence Hierarchy: Explicit Redirects vs Wildcard Rules

In Next.js, redirect rules defined in `next.config.ts` are evaluated sequentially from top to bottom. The first matching rule executes immediately, terminating further evaluation.

- **Explicit Rules Precede Wildcard**:
  - `next.config.ts` defines the explicit routes for `/all-services/3d-gait-analysis` (line 150), `/all-services/advanced-spine-decompression` (line 155), `/all-services/chiropractor` (line 160), and `/all-services/aquatic-therapy` (line 165) **before** the catch-all wildcard `/all-services/:slug*` (line 170).
- **Empirical Proof**:
  - Testing `/all-services/3d-gait-analysis` yields Location: `/services/advanced-3d-gait-analysis` (matches line 150), proving that the wildcard rule at line 170 does **not** override explicit rules.
  - Testing `/all-services/unknown-slug` bypasses lines 150–165 and matches line 170, resolving to Location: `/services`.

---

## 5. Verification of Known Legacy Service URLs

All historical variants of the 4 primary legacy services were tested across both root and theme CPT namespaces:

| Service | Legacy Source URL | Observed Status | Location Header | Final Destination | Status | Result |
|---|---|---|---|---|---|---|
| **3D Gait Analysis** | `/all-services/3d-gait-analysis` | 308 | `/services/advanced-3d-gait-analysis` | `/services/advanced-3d-gait-analysis` | 200 OK | **PASS** |
| | `/3d-gait-analysis` | 308 | `/services/advanced-3d-gait-analysis` | `/services/advanced-3d-gait-analysis` | 200 OK | **PASS** |
| | `/advanced3d-gait-analysis` | 308 | `/services/advanced-3d-gait-analysis` | `/services/advanced-3d-gait-analysis` | 200 OK | **PASS** |
| | `/advanced-3d-gait-analysis` | 308 | `/services/advanced-3d-gait-analysis` | `/services/advanced-3d-gait-analysis` | 200 OK | **PASS** |
| **Advanced Spine Decompression** | `/all-services/advanced-spine-decompression` | 308 | `/services/advanced-spine-decompression` | `/services/advanced-spine-decompression` | 200 OK | **PASS** |
| | `/advanced-spine-decompression` | 308 | `/services/advanced-spine-decompression` | `/services/advanced-spine-decompression` | 200 OK | **PASS** |
| | `/advanced-spine-decompression-2` | 308 | `/services/advanced-spine-decompression` | `/services/advanced-spine-decompression` | 200 OK | **PASS** |
| **Chiropractor** | `/all-services/chiropractor` | 308 | `/services/advanced-chiropractor` | `/services/advanced-chiropractor` | 200 OK | **PASS** |
| | `/advanced-chiropractor` | 308 | `/services/advanced-chiropractor` | `/services/advanced-chiropractor` | 200 OK | **PASS** |
| | `/chiropractic-treatment-centre` | 308 | `/services/advanced-chiropractor` | `/services/advanced-chiropractor` | 200 OK | **PASS** |
| **Aquatic Therapy** | `/all-services/aquatic-therapy` | 308 | `/services/advanced-aquatic-therapy` | `/services/advanced-aquatic-therapy` | 200 OK | **PASS** |
| | `/aquatic-therapy` | 308 | `/services/advanced-aquatic-therapy` | `/services/advanced-aquatic-therapy` | 200 OK | **PASS** |
| | `/advanced-aquatic-therapy` | 308 | `/services/advanced-aquatic-therapy` | `/services/advanced-aquatic-therapy` | 200 OK | **PASS** |

---

## 6. Unknown Legacy URL Edge-Case Verification

To ensure that neither misleading redirects nor broken canonical destinations are produced, both root and nested unknown URLs were tested:

1. **Unknown Slug under CPT Archive (`/all-services/unknown-slug`)**:
   - Initial HTTP Status: `308 Permanent Redirect`
   - Initial Location: `/services`
   - Final HTTP Status: `200 OK`
   - Behavior: Safely routes the visitor to the canonical services catalog rather than an invalid 404 slug.
2. **Unsupported Clinical Specialty under CPT Archive (`/all-services/cardiology`)**:
   - Initial HTTP Status: `308 Permanent Redirect`
   - Initial Location: `/services`
   - Final HTTP Status: `200 OK`
3. **Deep Nested Unknown Path (`/all-services/sample/deep/nested`)**:
   - Initial HTTP Status: `308 Permanent Redirect`
   - Initial Location: `/services`
   - Final HTTP Status: `200 OK`
4. **Unknown Legacy Root URL (`/unknown-legacy-service`)**:
   - Initial HTTP Status: `404 Not Found`
   - Location Header: `null` (No redirect)
   - Final HTTP Status: `404 Not Found`
   - Behavior: Confirmed that non-existent root paths do **not** produce a misleading redirect loop or redirect to unrelated pages; they correctly invoke `src/app/not-found.tsx`.
5. **Non-Existent Medical Treatment URL (`/nonexistent-medical-treatment`)**:
   - Initial HTTP Status: `404 Not Found`
   - Location Header: `null` (No redirect)
   - Final HTTP Status: `404 Not Found`

---

## 7. Reference Website Evidence: `/appointment` and `/appointments`

### 7.1 Historical Context on Live WordPress Site
An analysis of the live reference site (`https://painandparalysis.com/`) documented in `docs/PHASE_28_ROUTE_COVERAGE_AUDIT.md` (Sections 3.1 & 5) reveals:

1. **Theme Scaffolding in Sitemaps**:
   - The WordPress production instance runs the Medilax medical theme.
   - In `page-sitemap.xml`, the theme generated `/appointment/` and `/appointments/` as default demo template pages (Status: HTTP 200, Medilax theme appointment booking placeholder).
2. **Live Site Interaction Pattern**:
   - The clinic did **not** use an automated appointment scheduling plugin or dedicated booking engine at `/appointment` or `/appointments`.
   - All "Book Appointment", "Consult Now", and inquiry buttons across the entire live site (header navigation, homepage hero banners, and service detail pages) either link to `/contact-us/` or invoke the contact form to dispatch patient inquiries to the clinic reception.
3. **SEO and Link Preservation**:
   - Inbound visitors, legacy theme links, or search engine crawlers accessing `/appointment` or `/appointments` must land on the functional patient appointment and inquiry booking destination: `/contact-us`.
4. **Empirical Verification**:
   - Requesting `/appointment` returns HTTP 308 -> `/contact-us` (HTTP 200 OK).
   - Requesting `/appointments` returns HTTP 308 -> `/contact-us` (HTTP 200 OK).
   - Requesting with trailing slash `/appointment/` or `/appointments/` normalizes seamlessly to `/contact-us` (HTTP 200 OK).

---

## 8. Comprehensive Empirical Verification Matrix (45 Scenarios)

The test suite executed via automated HTTP probing (`node scripts/test-redirects.js`) on the Next.js production build (`http://127.0.0.1:3015`):

| # | Test Scenario Description | Requested URL | Initial Status | Initial Location | Final URL | Final Status | Result |
|---|---|---|---|---|---|---|---|
| 1 | CPT 3D Gait Analysis | `/all-services/3d-gait-analysis` | 308 | `/services/advanced-3d-gait-analysis` | `/services/advanced-3d-gait-analysis` | 200 | **PASS** |
| 2 | CPT Spine Decompression | `/all-services/advanced-spine-decompression` | 308 | `/services/advanced-spine-decompression` | `/services/advanced-spine-decompression` | 200 | **PASS** |
| 3 | CPT Chiropractor | `/all-services/chiropractor` | 308 | `/services/advanced-chiropractor` | `/services/advanced-chiropractor` | 200 | **PASS** |
| 4 | CPT Aquatic Therapy | `/all-services/aquatic-therapy` | 308 | `/services/advanced-aquatic-therapy` | `/services/advanced-aquatic-therapy` | 200 | **PASS** |
| 5 | CPT Root Archive | `/all-services` | 308 | `/services` | `/services` | 200 | **PASS** |
| 6 | Unknown CPT slug fallback | `/all-services/unknown-slug` | 308 | `/services` | `/services` | 200 | **PASS** |
| 7 | Unsupported specialty slug fallback | `/all-services/cardiology` | 308 | `/services` | `/services` | 200 | **PASS** |
| 8 | Deep nested unknown slug fallback | `/all-services/sample/deep/nested` | 308 | `/services` | `/services` | 200 | **PASS** |
| 9 | Root 3d-gait-analysis | `/3d-gait-analysis` | 308 | `/services/advanced-3d-gait-analysis` | `/services/advanced-3d-gait-analysis` | 200 | **PASS** |
| 10 | Root advanced3d-gait-analysis | `/advanced3d-gait-analysis` | 308 | `/services/advanced-3d-gait-analysis` | `/services/advanced-3d-gait-analysis` | 200 | **PASS** |
| 11 | Root advanced-3d-gait-analysis | `/advanced-3d-gait-analysis` | 308 | `/services/advanced-3d-gait-analysis` | `/services/advanced-3d-gait-analysis` | 200 | **PASS** |
| 12 | Root advanced-spine-decompression | `/advanced-spine-decompression` | 308 | `/services/advanced-spine-decompression` | `/services/advanced-spine-decompression` | 200 | **PASS** |
| 13 | WordPress duplicate spine decompression | `/advanced-spine-decompression-2` | 308 | `/services/advanced-spine-decompression` | `/services/advanced-spine-decompression` | 200 | **PASS** |
| 14 | Root advanced-chiropractor | `/advanced-chiropractor` | 308 | `/services/advanced-chiropractor` | `/services/advanced-chiropractor` | 200 | **PASS** |
| 15 | SEO chiropractic landing page | `/chiropractic-treatment-centre` | 308 | `/services/advanced-chiropractor` | `/services/advanced-chiropractor` | 200 | **PASS** |
| 16 | Root advanced-physiotherapy | `/advanced-physiotherapy` | 308 | `/services/advanced-physiotherapy` | `/services/advanced-physiotherapy` | 200 | **PASS** |
| 17 | SEO physiotherapy centre landing | `/physiotherapy-centre` | 308 | `/services/advanced-physiotherapy` | `/services/advanced-physiotherapy` | 200 | **PASS** |
| 18 | Local SEO physiotherapy chennai | `/physiotherapy-chennai` | 308 | `/services/advanced-physiotherapy` | `/services/advanced-physiotherapy` | 200 | **PASS** |
| 19 | Root aquatic-therapy | `/aquatic-therapy` | 308 | `/services/advanced-aquatic-therapy` | `/services/advanced-aquatic-therapy` | 200 | **PASS** |
| 20 | Root advanced-aquatic-therapy | `/advanced-aquatic-therapy` | 308 | `/services/advanced-aquatic-therapy` | `/services/advanced-aquatic-therapy` | 200 | **PASS** |
| 21 | Shorthand EMG therapy | `/emg-therapy` | 308 | `/services/high-frequency-emg` | `/services/high-frequency-emg` | 200 | **PASS** |
| 22 | Shorthand Biofeedback therapy | `/biofeedback-therapy` | 308 | `/services/biofeedback` | `/services/biofeedback` | 200 | **PASS** |
| 23 | Duplicate Neuro-physiotherapy-2 | `/neuro-physiotherapy-2` | 308 | `/services/neuro-physiotherapy` | `/services/neuro-physiotherapy` | 200 | **PASS** |
| 24 | Duplicate Neuro-physiotherapy-3 | `/neuro-physiotherapy-3` | 308 | `/services/neuro-physiotherapy` | `/services/neuro-physiotherapy` | 200 | **PASS** |
| 25 | Unknown root URL (no misleading redirect) | `/unknown-legacy-service` | 404 | `null` | `/unknown-legacy-service` | 404 | **PASS** |
| 26 | Non-existent medical treatment (direct 404) | `/nonexistent-medical-treatment` | 404 | `null` | `/nonexistent-medical-treatment` | 404 | **PASS** |
| 27 | Theme /appointment alias | `/appointment` | 308 | `/contact-us` | `/contact-us` | 200 | **PASS** |
| 28 | Theme /appointments alias | `/appointments` | 308 | `/contact-us` | `/contact-us` | 200 | **PASS** |
| 29 | Trailing slash on `/all-services/` | `/all-services/` | 308 | `/all-services` | `/services` | 200 | **PASS** |
| 30 | Trailing slash on CPT 3D gait analysis | `/all-services/3d-gait-analysis/` | 308 | `/all-services/3d-gait-analysis` | `/services/advanced-3d-gait-analysis` | 200 | **PASS** |
| 31 | Trailing slash on unknown CPT slug | `/all-services/unknown-slug/` | 308 | `/all-services/unknown-slug` | `/services` | 200 | **PASS** |
| 32 | Trailing slash on SEO landing | `/physiotherapy-centre/` | 308 | `/physiotherapy-centre` | `/services/advanced-physiotherapy` | 200 | **PASS** |
| 33 | Trailing slash on `/appointment/` | `/appointment/` | 308 | `/appointment` | `/contact-us` | 200 | **PASS** |
| 34 | Trailing slash on `/appointments/` | `/appointments/` | 308 | `/appointments` | `/contact-us` | 200 | **PASS** |
| 35 | Query preservation on explicit CPT redirect | `/all-services/3d-gait-analysis?src=campaign&utm_medium=cpc` | 308 | `/services/advanced-3d-gait-analysis?src=campaign&utm_medium=cpc` | `/services/advanced-3d-gait-analysis?src=campaign&utm_medium=cpc` | 200 | **PASS** |
| 36 | Query preservation on wildcard fallback | `/all-services/unknown-slug?ref=adwords` | 308 | `/services?ref=adwords` | `/services?ref=adwords` | 200 | **PASS** |
| 37 | Query preservation on `/appointment` | `/appointment?slot=morning&doctor=dr-prince` | 308 | `/contact-us?slot=morning&doctor=dr-prince` | `/contact-us?slot=morning&doctor=dr-prince` | 200 | **PASS** |
| 38 | Query preservation on physiotherapy SEO | `/physiotherapy-centre?gclid=xyz123` | 308 | `/services/advanced-physiotherapy?gclid=xyz123` | `/services/advanced-physiotherapy?gclid=xyz123` | 200 | **PASS** |
| 39 | Canonical `/services` catalog | `/services` | 200 | `null` | `/services` | 200 | **PASS** |
| 40 | Canonical 3D Gait Analysis page | `/services/advanced-3d-gait-analysis` | 200 | `null` | `/services/advanced-3d-gait-analysis` | 200 | **PASS** |
| 41 | Canonical Spine Decompression page | `/services/advanced-spine-decompression` | 200 | `null` | `/services/advanced-spine-decompression` | 200 | **PASS** |
| 42 | Canonical Chiropractor page | `/services/advanced-chiropractor` | 200 | `null` | `/services/advanced-chiropractor` | 200 | **PASS** |
| 43 | Canonical Aquatic Therapy page | `/services/advanced-aquatic-therapy` | 200 | `null` | `/services/advanced-aquatic-therapy` | 200 | **PASS** |
| 44 | Canonical Physiotherapy page | `/services/advanced-physiotherapy` | 200 | `null` | `/services/advanced-physiotherapy` | 200 | **PASS** |
| 45 | Canonical Contact Us page | `/contact-us` | 200 | `null` | `/contact-us` | 200 | **PASS** |

---

## 9. Code Quality & Build Validation

| Check | Command Executed | Result | Notes |
|---|---|---|---|
| **TypeScript Compilation** | `npx tsc --noEmit` | **PASS** (Exit 0) | Zero type discrepancies; strict type checking satisfied. |
| **ESLint Validation** | `npm run lint` | **PASS** (Exit 0) | Clean lint run across all project files. |
| **Next.js Production Build** | `npm run build` | **PASS** (Exit 0) | Turbopack compiled clean; all 33 static pages generated successfully. |

---

## 10. Conclusion & Next Steps

All 8 verification criteria set forth for Phase 29.1 have been confirmed and empirically tested:
1. All rules in `next.config.ts` are inspected and verified.
2. Wildcard `/all-services/:slug*` now redirects unknown or unsupported slugs directly to the canonical `/services` catalog (preventing broken `/services/[slug]` 404s).
3. Explicit redirects strictly precede wildcard rules and execute first.
4. Known legacy URLs for 3D Gait Analysis, Spine Decompression, Chiropractor, and Aquatic Therapy all resolve to their canonical pages.
5. Unknown legacy URLs do not produce misleading redirects.
6. `/appointment` and `/appointments` redirects are documented with reference website evidence.
7. Trailing slashes and query parameters preserve pass-through values without loss.
8. Only minimal routing changes were made in `next.config.ts`.

