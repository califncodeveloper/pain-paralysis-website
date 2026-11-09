import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Activity } from "lucide-react";
import type { ServiceItem } from "@/types";

export interface ServicesOverviewCardProps {
  service: ServiceItem;
  priority?: boolean;
}

/**
 * ServicesOverviewCard Component
 * Faithfully reconstructs the original .serv-ice-icon .specialist-card design
 * from the live Services Overview page (https://painandparalysis.com/services/).
 *
 * Verified Reference Specifications:
 * - Image Aspect Ratio: Native 455x533 with 15px border radius
 * - Top-Right Floating Icon Box: Primary Teal (#1CAAB6) badge with inverted white icon
 * - Bottom Title Badge: Positioned over lower image area with #105156a1 backdrop
 * - Hover Dynamics: Smooth vertical lift, image scale-up, and rising bottom gradient
 * - Full Keyboard & Screen Reader Accessibility
 */
export const ServicesOverviewCard: React.FC<ServicesOverviewCardProps> = ({
  service,
  priority = false,
}) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white/95 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_20px_40px_rgba(28,170,182,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label={`Explore ${service.title} clinical treatment`}
    >
      {/* Top accent line that animates to primary teal on hover/focus */}
      <div
        className="h-1 w-full bg-transparent transition-colors duration-300 group-hover:bg-primary group-focus-visible:bg-primary"
        aria-hidden="true"
      />

      {/* Image Frame with Floating Icon and Overlay Title Badge */}
      <div className="relative aspect-[455/533] w-full overflow-hidden bg-secondary/20">
        <Image
          src={service.image}
          alt={`${service.title} clinical treatment at Pain & Paralysis Clinic`}
          width={455}
          height={533}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          priority={priority}
        />

        {/* Top-Right Floating Teal Icon Box (Signature Reference Element) */}
        <div
          className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-md transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          <Activity className="h-5 w-5 text-white" />
        </div>

        {/* Gradient Rising Overlay on Hover */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/80 via-secondary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />

        {/* Reference Signature Title Overlay Badge (Bottom of Image) */}
        <div className="absolute inset-x-3 bottom-3 z-10">
          <span className="inline-block max-w-full truncate rounded-md bg-[#105156]/90 px-3 py-1.5 font-heading text-xs sm:text-sm font-semibold tracking-wide text-white uppercase backdrop-blur-md shadow-sm transition-colors duration-200 group-hover:bg-primary/95">
            {service.title}
          </span>
        </div>
      </div>

      {/* Card Content & Clinical Summary */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 bg-white text-secondary">
        {service.category && (
          <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
            {service.category}
          </span>
        )}

        <h3 className="font-heading text-lg font-semibold leading-snug text-secondary transition-colors duration-200 group-hover:text-primary sm:text-xl">
          {service.title}
        </h3>

        {service.shortDescription && (
          <p className="mt-2.5 flex-1 font-sans text-xs leading-relaxed text-text/80 line-clamp-3 sm:text-sm">
            {service.shortDescription}
          </p>
        )}

        {/* Action Link Row */}
        <div className="mt-4 flex items-center justify-between border-t border-black/[0.08] pt-3.5 text-xs font-semibold text-primary transition-colors duration-200 group-hover:text-secondary sm:text-sm">
          <span>Explore Treatment</span>
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
};
