# Pain and Paralysis Clinic Website Reconstruction

A modern, high-performance, and accessible web application reconstructing the online presence of **Pain & Paralysis Clinic** ([painandparalysis.com](https://painandparalysis.com/)).

This project is built using Next.js App Router with TypeScript, Tailwind CSS, and component-driven architecture to deliver an optimal patient experience, fast load times, and clean maintainability.

---

## 1. Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, Partial Prerendering ready)
- **UI Library**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode enabled)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Schema Validation**: [Zod](https://zod.dev/)
- **Media Optimization**: Next.js native `next/image`

> **Note**: This application operates without a dedicated backend or external database. Content is statically managed and structured in TypeScript data modules.

---

## 2. Folder Architecture

The project adheres to a clean, scalable directory structure with separation of concerns:

```
pain-paralysis-website/
│
├── public/
│   ├── images/
│   │   ├── logo/             # Clinic brand logos, badges, and crests
│   │   ├── hero/             # Banners and hero section media
│   │   ├── about/            # Clinic story, infrastructure, and facility photos
│   │   ├── services/         # Treatment, therapy, and clinical service images
│   │   ├── doctors/          # Medical staff and doctor portrait photography
│   │   ├── testimonials/     # Patient recovery story media
│   │   ├── gallery/          # Event, campus, and rehabilitation photo gallery
│   │   ├── awards/           # Certifications, accreditations, and achievements
│   │   └── common/           # Shared UI assets, default placeholders, OG images
│   ├── icons/                # Custom SVG icons and favicons
│   └── fonts/                # Local custom web fonts (offline fallback)
│
├── src/
│   ├── app/                  # Next.js App Router routes & layouts
│   │   ├── layout.tsx        # Root HTML layout and global providers
│   │   ├── page.tsx          # Home page route (/)
│   │   ├── globals.css       # Tailwind CSS declarations & global styles
│   │   ├── not-found.tsx     # Custom 404 error page
│   │   │
│   │   ├── about-us/
│   │   │   └── page.tsx      # About Us route (/about-us)
│   │   ├── services/
│   │   │   └── page.tsx      # Treatments & Services catalog route (/services)
│   │   ├── tips-articles/
│   │   │   ├── page.tsx      # Articles listing route (/tips-articles)
│   │   │   └── [slug]/
│   │   │       └── page.tsx  # Dynamic article details (/tips-articles/[slug])
│   │   ├── gallery/
│   │   │   └── page.tsx      # Photo and media gallery route (/gallery)
│   │   └── faqs/
│   │       └── page.tsx      # Frequently Asked Questions route (/faqs)
│   │
│   ├── components/           # Reusable UI components
│   │   ├── layout/           # Shared structural components (Header, Footer, Navigation)
│   │   ├── home/             # Home page specific section components
│   │   ├── about/            # About page specific components
│   │   ├── services/         # Service cards and treatment highlights
│   │   ├── articles/         # Article cards, grids, and reader components
│   │   ├── gallery/          # Lightbox, gallery grids, and filters
│   │   ├── faqs/             # Accordion and category filters
│   │   ├── contact/          # Appointment inquiry and contact components
│   │   └── ui/               # Atomic / reusable UI primitives (buttons, dialogs, inputs)
│   │
│   ├── data/                 # Static data stores
│   │   ├── navigation.ts     # Header and footer navigation links
│   │   ├── services.ts       # Structured treatment and clinical services data
│   │   ├── testimonials.ts   # Patient reviews and testimonials
│   │   ├── faqs.ts           # Frequently asked questions dataset
│   │   └── articles.ts       # Articles and health tips metadata
│   │
│   ├── hooks/                # Custom reusable client hooks
│   ├── lib/                  # Shared helper functions, formatting, and utils
│   ├── types/                # TypeScript interfaces and type definitions
│   └── constants/            # Site configuration, route maps, and global constants
│
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore rules
├── package.json              # Project dependencies and script runner
├── tsconfig.json             # TypeScript compiler settings
├── next.config.ts            # Next.js build and runtime configuration
└── README.md                 # Project architecture and developer guide
```

---

## 3. Route Structure

All routes are planned and prepared using Next.js App Router:

| Route | File Path | Description |
| :--- | :--- | :--- |
| `/` | `src/app/page.tsx` | Main landing page highlighting key services, doctor intro, and emergency contact |
| `/about-us` | `src/app/about-us/page.tsx` | Clinic history, medical team, clinical philosophy, and certifications |
| `/services` | `src/app/services/page.tsx` | Comprehensive catalog of paralysis and pain management treatments |
| `/tips-articles` | `src/app/tips-articles/page.tsx` | Health tips, articles, lifestyle guidance, and rehabilitation insights |
| `/tips-articles/[slug]` | `src/app/tips-articles/[slug]/page.tsx` | Dynamic article view with slug-based metadata generation |
| `/gallery` | `src/app/gallery/page.tsx` | Photo and video showcases of clinic facilities and patient recoveries |
| `/faqs` | `src/app/faqs/page.tsx` | Searchable/categorized frequently asked questions |
| `/*` (Fallback) | `src/app/not-found.tsx` | Custom 404 page for unmatched URLs |

---

## 4. Installation & Setup

### Prerequisites
- **Node.js**: v20 or higher recommended
- **npm** (or pnpm / yarn)

### Installation
Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd pain-paralysis-website
npm install
```

### Environment Configuration
Copy `.env.example` to create your local environment file:

```bash
cp .env.example .env.local
```

---

## 5. Development Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Turbopack on `http://localhost:3000` |
| `npm run build` | Compiles the production build |
| `npm run start` | Runs the compiled production server |
| `npm run lint` | Runs ESLint across the codebase |
| `npx tsc --noEmit` | Runs TypeScript compiler type-check |

---

## 6. Asset Organization Guidelines

All static media files are categorized under `public/`:

1. **Logo Assets (`public/images/logo/`)**:
   - High-resolution SVG or transparent PNG versions of clinic logos.
2. **Feature Specific Folders**:
   - `public/images/hero/`: Landing and subpage banner artwork.
   - `public/images/about/`: Clinic campus, facilities, and staff portraits.
   - `public/images/services/`: Treatment-specific imagery.
   - `public/images/doctors/`: Standardized doctor headshots.
   - `public/images/testimonials/`: Patient recovery photos (with consent).
   - `public/images/gallery/`: Categorized clinic facility and activity photos.
   - `public/images/awards/`: Accreditation badges, awards, and ISO certificates.
   - `public/images/common/`: Shared icons, open-graph cards (`og-image.jpg`), and fallback graphics.
3. **Icons & Fonts**:
   - `public/icons/`: Standalone vector icons.
   - `public/fonts/`: Local webfont files (`.woff2`) for airgapped / offline font support.
4. **Optimization Rules**:
   - Use Next.js `<Image />` component with descriptive `alt` text, explicit aspect ratios (`width`/`height`), or `fill`.
   - Prefer WebP/AVIF formats for raster photos to optimize core web vitals.

---

## 7. Component Development Guidelines

1. **Server Components First**:
   - All components are React Server Components by default.
   - Use Client Components (`"use client"`) **only** when DOM interaction, client state (`useState`, `useEffect`), form hooks, or browser event listeners are strictly required.
2. **Route-Specific Components**:
   - Put components dedicated to a single route inside `src/components/<route-name>/` (e.g., `src/components/about/`, `src/components/services/`).
3. **Shared & Primitive Components**:
   - Put shared compound components in `src/components/layout/` or `src/components/ui/`.
   - Keep atomic UI components agnostic of domain logic.
4. **Data Isolation**:
   - Do not hardcode content inside UI components. Store structured content in `src/data/` typed by interfaces defined in `src/types/`.
5. **Type Safety**:
   - Export and reuse strong TypeScript interfaces for all data structures in `src/types/`.
6. **Styling Standards**:
   - Apply utility-first styling with Tailwind CSS.
   - Use `cn()` helper from `src/lib/utils.ts` for dynamic class name merging.
