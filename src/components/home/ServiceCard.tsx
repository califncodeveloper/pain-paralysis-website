import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles, Activity } from "lucide-react";
import type { ServiceItem } from "@/types";
import { Badge } from "@/components/ui";

export interface ServiceCardProps {
  service: ServiceItem;
  priority?: boolean;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  priority = false,
  featured = false,
}) => {
  if (featured) {
    const renderFeaturedImage = () => (
      <div className="relative w-full aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden bg-surface">
        <Image
          src={service.heroImage || service.image}
          alt={`${service.title} clinical treatment at Pain & Paralysis Hospital`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority={priority}
        />
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex flex-wrap gap-2">
          <Badge variant="gold" dot size="sm">
            Featured Hospital Service
          </Badge>
          <span className="px-3 py-1 rounded-full bg-secondary/90 backdrop-blur-md text-white font-semibold text-[10px] sm:text-[11px] uppercase tracking-wider shadow-sm">
            25 Beds • 24 Hours
          </span>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-70 group-hover:opacity-50 transition-opacity"
          aria-hidden="true"
        />
      </div>
    );

    return (
      <Link
        href={service.route}
        className="group relative flex flex-col lg:flex-row w-full overflow-hidden rounded-3xl bg-white border border-[#105156]/12 shadow-[0_10px_35px_rgba(16,81,86,0.08)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(28,170,182,0.20)] hover:border-primary/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={`Explore marquee treatment: ${service.title}`}
      >
        {/* Desktop Left Image Frame (50% on lg, hidden on mobile) */}
        <div className="hidden lg:block lg:w-1/2">
          {renderFeaturedImage()}
        </div>

        {/* Content Side */}
        <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-primary shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                {service.category}
              </span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-secondary mb-3 group-hover:text-primary transition-colors">
              {service.title}
            </h3>

            {/* Mobile Image: Positioned strictly between Title and Description */}
            <div className="block lg:hidden rounded-2xl overflow-hidden my-4">
              {renderFeaturedImage()}
            </div>

            <p className="text-sm sm:text-base text-text/80 leading-relaxed font-sans mb-6">
              {service.description || service.shortDescription}
            </p>

            {service.benefits && service.benefits.length > 0 && (
              <div className="space-y-2 mb-6">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider block">
                  Clinical Advantages:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text/80 list-none m-0 p-0">
                  {service.benefits.slice(0, 4).map((b, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-black/5 flex items-center justify-between">
            <span className="text-xs font-semibold text-secondary uppercase tracking-wider group-hover:text-primary transition-colors">
              Explore Clinical Protocol &amp; Indications
            </span>
            <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all transform group-hover:translate-x-1 shadow-sm">
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={service.route}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white border border-[#105156]/12 shadow-[0_4px_20px_rgba(16,81,86,0.06)] transition-all duration-400 ease-out hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_20px_45px_rgba(28,170,182,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={`Explore ${service.title} treatment details`}
    >
      {/* Service Image Frame */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
        <Image
          src={service.image}
          alt={`${service.title} clinical treatment at Pain & Paralysis Hospital`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          priority={priority}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#105156]/80 via-transparent to-transparent opacity-40 group-hover:opacity-75 transition-opacity duration-300"
          aria-hidden="true"
        />

        {service.category && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#105156] font-semibold text-[11px] uppercase tracking-wider shadow-sm border border-white/60">
              {service.category.split("&")[0].trim()}
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 bg-gradient-to-b from-white to-[#F8FBFB]/50">
        <div>
          <h3 className="font-heading text-lg font-semibold leading-snug text-secondary transition-colors duration-200 group-hover:text-primary mb-2">
            {service.title}
          </h3>

          <p className="line-clamp-2 text-xs sm:text-sm leading-relaxed text-text/80 font-sans">
            {service.shortDescription}
          </p>
        </div>

        {/* Read More Link */}
        <div className="mt-5 pt-3.5 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-primary">
          <span className="group-hover:text-secondary transition-colors uppercase tracking-wider font-sans">
            View Clinical Protocol
          </span>
          <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 shadow-xs">
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};
