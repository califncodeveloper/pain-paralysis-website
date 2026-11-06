import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/types";

export interface ServiceCardProps {
  service: ServiceItem;
  priority?: boolean;
}

/**
 * ServiceCard Component
 * Displays a single service item with native 455x533 aspect-ratio image,
 * category badge, title, short description, and interactive hover/focus states.
 */
export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  priority = false,
}) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white border border-secondary/10 shadow-[0_4px_20px_rgba(16,81,86,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(28,170,182,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label={`Explore ${service.title} treatment details`}
    >
      {/* Top accent line that animates to primary teal on hover/focus */}
      <div
        className="h-1 w-full bg-transparent transition-colors duration-300 group-hover:bg-primary group-focus-visible:bg-primary"
        aria-hidden="true"
      />

      {/* Service Image Frame - Native 455x533 Aspect Ratio */}
      <div className="relative aspect-[455/533] w-full overflow-hidden bg-surface">
        <Image
          src={service.image}
          alt={`${service.title} clinical treatment at Pain & Paralysis Clinic`}
          width={455}
          height={533}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          priority={priority}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
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
        <div className="mt-4 flex items-center justify-between border-t border-black/[0.06] pt-3.5 text-xs font-semibold text-primary transition-colors duration-200 group-hover:text-secondary sm:text-sm">
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

