import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Home, ChevronRight, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui";
import { FAQSection } from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions regarding treatments, clinical consultations, appointments, and rehabilitation expectations at Pain & Paralysis Clinic Chennai.",
  alternates: {
    canonical: "https://painandparalysis.com/faqs",
  },
  openGraph: {
    title: "Frequently Asked Questions | Pain & Paralysis Clinic",
    description:
      "Find answers to common questions regarding treatments, clinical consultations, appointments, and rehabilitation expectations at Pain & Paralysis Clinic Chennai.",
    url: "https://painandparalysis.com/faqs",
    siteName: "Pain & Paralysis Clinic",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/common/clinic-exterior.webp",
        width: 1200,
        height: 582,
        alt: "Pain and Paralysis Clinic facility in Madhanandapuram, Chennai",
      },
    ],
  },
};

export default function FaqsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Banner with Semantic Breadcrumbs */}
      <section
        className="relative w-full overflow-hidden bg-secondary pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-36 md:pb-18 text-white border-b border-white/10"
        aria-label="Frequently Asked Questions Hero Banner"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-slide-01.webp"
            alt="Pain and Paralysis Clinic FAQ background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-15 mix-blend-overlay"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/90 via-secondary/95 to-secondary"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Eyebrow Clinical Tag */}
            <span className="section-badge mb-3 sm:mb-4 font-semibold tracking-[0.14em] uppercase text-xs sm:text-sm text-accent inline-flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-accent" aria-hidden="true" />
              Patient Help &amp; Orientation
            </span>

            {/* Primary Page Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-wide text-white leading-tight mb-4 sm:mb-6">
              Frequently Asked Questions
            </h1>

            {/* Accessible Semantic Breadcrumb Navigation */}
            <nav aria-label="Breadcrumbs">
              <ol className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm backdrop-blur-md border border-white/15">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                  >
                    <Home className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Home</span>
                  </Link>
                </li>
                <li className="inline-flex items-center text-white/40" aria-hidden="true">
                  <ChevronRight className="w-3.5 h-3.5" />
                </li>
                <li className="inline-flex items-center text-white font-medium" aria-current="page">
                  FAQs
                </li>
              </ol>
            </nav>
          </div>
        </Container>
      </section>

      {/* 2. Interactive FAQ Accordion */}
      <FAQSection />
    </div>
  );
}
