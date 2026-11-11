import type { GalleryItem } from "@/types";

/**
 * Gallery Items Dataset (Phase 24.2 Genuine WebP Correction)
 *
 * Source: Extracted directly from live reference website https://painandparalysis.com/gallery/
 *
 * Technical Correction (Phase 24.2):
 * All 5 gallery award images and the clinic reception image are confirmed genuine WebP binary assets
 * (magic bytes RIFF....WEBP, MIME type image/webp) with exact original dimensions preserved.
 *
 * Verified Subjects & Provenance:
 * 1. award-spine-care.webp (WebP, 1024x1024 px):
 *    - Subject: Event graphic poster for Tamilnadu Awards 2026 presented by National Excellence Council,
 *      depicting Dr. Dinesh Anandhan with physical trophy for Excellence in Robotic Chiropractic.
 *
 * 2. award-leadership.webp (WebP, 768x1024 px):
 *    - Subject: Office felicitation photograph; Dr. Dinesh Anandhan with colleagues holding a flower bouquet.
 *    - Note: Informal office presentation; unverified award status.
 *
 * 3. award-robotic-physio.webp (WebP, 1024x1024 px):
 *    - Subject: Press Meet 2026 media interview photograph; Dr. Dinesh Anandhan at microphones before
 *      an Indian Medical Awards 2026 / Twell Magazine media backdrop.
 *
 * 4. award-accreditation.webp (WebP, 1024x1024 px):
 *    - Subject: Stage felicitation handshake between Dr. Dinesh Anandhan and presenter at Indian Medical Awards 2026.
 *
 * 5. award-plaque.webp (WebP, 1024x1024 px):
 *    - Subject: Stage certificate presentation photograph; handover of framed "Most Trusted Doctor" certificate.
 *
 * 6. clinic-exterior.webp (WebP, 743x361 px):
 *    - Subject: Clinic interior reception desk and patient waiting area from reference site.
 */
export const galleryAwards: GalleryItem[] = [
  {
    id: "award-spine-care",
    title: "Tamilnadu Awards 2026 - Robotic Chiropractic Felicitation",
    caption: "Event poster recognizing Dr. Dinesh Anandhan for Excellence in Robotic Chiropractic & Non-Surgical Pain Management (National Excellence Council)",
    alt: "Tamilnadu Awards 2026 event poster featuring Dr. Dinesh Anandhan holding an award trophy from National Excellence Council",
    src: "/images/gallery/award-spine-care.webp",
    width: 1024,
    height: 1024,
    aspectRatio: "square",
    category: "award",
    itemType: "Award Graphic",
    binaryFormat: "WebP",
    mimeType: "image/webp",
    provenance: "Event poster asset from reference website; depicts physical trophy presented by National Excellence Council",
    displayOrder: 1,
  },
  {
    id: "award-leadership",
    title: "Office Felicitation Photograph",
    caption: "Dr. Dinesh Anandhan with colleagues and well-wishers holding a flower basket felicitation (Informal office presentation)",
    alt: "Dr. Dinesh Anandhan holding a flower basket alongside colleagues in an office setting",
    src: "/images/gallery/award-leadership.webp",
    width: 768,
    height: 1024,
    aspectRatio: "portrait",
    category: "award",
    itemType: "Felicitation Photograph",
    binaryFormat: "WebP",
    mimeType: "image/webp",
    provenance: "Office greeting photograph from reference website; contains no visible certificate or plaque text",
    displayOrder: 2,
  },
  {
    id: "award-robotic-physio",
    title: "Press Meet 2026 - Media Interview",
    caption: "Dr. Dinesh Anandhan speaking to news microphones before an Indian Medical Awards 2026 / Twell Magazine media backdrop",
    alt: "Dr. Dinesh Anandhan addressing media microphones at the Press Meet 2026 event with Indian Medical Awards backdrop",
    src: "/images/gallery/award-robotic-physio.webp",
    width: 1024,
    height: 1024,
    aspectRatio: "square",
    category: "award",
    itemType: "Press Meet Photograph",
    binaryFormat: "WebP",
    mimeType: "image/webp",
    provenance: "Media press meet event photograph from reference website; depicts media conference, not a physical trophy",
    displayOrder: 3,
  },
  {
    id: "award-accreditation",
    title: "Indian Medical Awards 2026 - Stage Felicitation",
    caption: "Dr. Dinesh Anandhan on stage with event presenter at the Indian Medical Awards 2026 ceremony presented by Twell Magazine",
    alt: "Dr. Dinesh Anandhan on stage shaking hands with presenter at the Indian Medical Awards 2026 ceremony",
    src: "/images/gallery/award-accreditation.webp",
    width: 1024,
    height: 1024,
    aspectRatio: "square",
    category: "award",
    itemType: "Stage Event Photograph",
    binaryFormat: "WebP",
    mimeType: "image/webp",
    provenance: "Stage presentation photo from reference website; depicts event ceremony, not a clinical accreditation plaque",
    displayOrder: 4,
  },
  {
    id: "award-plaque",
    title: "Certificate Presentation - Indian Medical Awards 2026",
    caption: "Stage presentation of framed 'Most Trusted Doctor' recognition certificate to Dr. Dinesh Anandhan at Indian Medical Awards 2026",
    alt: "Dr. Dinesh Anandhan receiving framed recognition certificates on stage at the Indian Medical Awards 2026 ceremony",
    src: "/images/gallery/award-plaque.webp",
    width: 1024,
    height: 1024,
    aspectRatio: "square",
    category: "award",
    itemType: "Certificate Presentation Photo",
    binaryFormat: "WebP",
    mimeType: "image/webp",
    provenance: "Stage certificate handover photo from reference website; depicts framed recognition certificates",
    displayOrder: 5,
  },
];

export const officeGalleryItem: GalleryItem = {
  id: "office-exterior",
  title: "Clinic Reception & Patient Waiting Area",
  caption: "Reception desk, waiting room seating, and consultation entrance (Reference website asset; subject to on-site verification)",
  alt: "Clinic interior reception desk and patient waiting area with metal seating and medical information display",
  src: "/images/common/clinic-exterior.webp",
  width: 743,
  height: 361,
  aspectRatio: "landscape",
  category: "office",
  itemType: "Clinic Interior Asset",
  binaryFormat: "WebP",
  mimeType: "image/webp",
  provenance: "Interior facility photograph from reference website location section; depicts reception/waiting room rather than exterior building",
  displayOrder: 6,
};

export function getGalleryAwards(): GalleryItem[] {
  return [...galleryAwards].sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getOfficeGalleryItem(): GalleryItem {
  return officeGalleryItem;
}

export function getAllGalleryItems(): GalleryItem[] {
  return [...galleryAwards, officeGalleryItem].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );
}
