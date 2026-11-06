import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View our clinic infrastructure, treatment facilities, patient activities, and event photos.",
};

export default function GalleryPage() {
  return (
    <div className="container-standard section-spacing">
      <span className="section-badge">Clinic Milestones</span>
      <h1 className="text-h1 mt-2">Photo &amp; Video Gallery</h1>
      <p className="text-body mt-4 max-w-2xl">
        Visual showcase of our facilities, healing environments, and clinical achievements.
      </p>
    </div>
  );
}
