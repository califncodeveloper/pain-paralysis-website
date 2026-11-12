import type { Metadata } from "next";
import { getGalleryAwards, getOfficeGalleryItem, getAllGalleryItems } from "@/data/gallery";
import { GalleryHero, GalleryView } from "@/components/gallery";

export const metadata: Metadata = {
  title: "Gallery & Honors",
  description:
    "Explore public honors, event felicitations, and clinic facility imagery of Pain & Paralysis Clinic in Chennai.",
  alternates: {
    canonical: "https://painandparalysis.com/gallery",
  },
  openGraph: {
    title: "Gallery & Honors | Pain & Paralysis Clinic",
    description:
      "Explore public honors, event felicitations, and clinic facility imagery of Pain & Paralysis Clinic in Chennai.",
    url: "https://painandparalysis.com/gallery",
    siteName: "Pain & Paralysis Clinic",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/gallery/award-spine-care.webp",
        width: 1024,
        height: 1024,
        alt: "Pain and Paralysis Clinic event honors and facility gallery",
      },
    ],
  },
};

/**
 * GalleryPage Component (/gallery)
 * Phase 24.1 Implementation (Asset Provenance & Content Verification)
 *
 * Structure adhering strictly to the live reference website (https://painandparalysis.com/gallery/):
 * 1. Global Header (via RootLayout)
 * 2. Hero Banner: "Gallery" with semantic breadcrumbs
 * 3. AWARDS Section: 5 image positions displaying event honors & felicitations
 * 4. OFFICE Section: Clinic interior reception asset and location profile with verification disclosures
 * 5. Global Footer (via RootLayout)
 */
export default function GalleryPage() {
  const awards = getGalleryAwards();
  const officeItem = getOfficeGalleryItem();
  const allGalleryItems = getAllGalleryItems();

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Banner */}
      <GalleryHero />

      {/* 2. Interactive Gallery View (AWARDS + OFFICE + Lightbox) */}
      <GalleryView
        awards={awards}
        officeItem={officeItem}
        allGalleryItems={allGalleryItems}
      />
    </div>
  );
}
