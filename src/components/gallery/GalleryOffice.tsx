"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  ZoomIn,
  Building2,
  AlertCircle,
} from "lucide-react";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { clinicContactInfo } from "@/data/navigation";
import type { GalleryItem } from "@/types";

export interface GalleryOfficeProps {
  officeItem: GalleryItem;
  onOpenLightbox: () => void;
}

/**
 * GalleryOffice Component
 * Reconstructs the Office section of the Gallery page (/gallery/).
 *
 * Provenance & Safeguards (Phase 24.1):
 * - Accurately identifies image as an interior reception and waiting area asset
 * - Removed unsupported "Verified Facility Asset" badge
 * - Address, phone, and hours clearly labeled with verification status
 * - Verified Google Maps coordinates preserved without invented branch claims
 */
export const GalleryOffice: React.FC<GalleryOfficeProps> = ({
  officeItem,
  onOpenLightbox,
}) => {
  return (
    <Section
      id="office"
      background="surface"
      spacing="default"
      className="border-t border-secondary/10"
      aria-label="Clinic Office and Care Facility"
    >
      <Container size="standard">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="FACILITY & LOCATION"
          title="OFFICE"
          description="Clinic location details and interior facility imagery as cataloged on the reference website for the Madhanandapuram, Chennai center."
          align="center"
          accent
          className="mb-10 sm:mb-14"
        />

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Interactive Facility Image (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col">
            <button
              type="button"
              onClick={onOpenLightbox}
              aria-label="View enlarged clinic interior reception photograph"
              className="group relative w-full h-full min-h-[280px] sm:min-h-[340px] rounded-xl overflow-hidden border border-secondary/15 bg-white shadow-sm hover:shadow-xl transition-all duration-300 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[2.06/1] bg-secondary/5 overflow-hidden">
                <Image
                  src={officeItem.src}
                  alt={officeItem.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Hover Overlay with Zoom affordance */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]"
                >
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-secondary/90 text-white text-xs font-medium shadow-md">
                    <ZoomIn className="w-4 h-4 text-accent" />
                    Click to inspect image
                  </span>
                </div>

                {/* Facility Identification Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/90 text-white text-xs font-medium backdrop-blur-md">
                    <Building2 className="w-3.5 h-3.5 text-accent" />
                    Reception &amp; Waiting Area
                  </span>
                </div>
              </div>

              {/* Lower Details Bar */}
              <div className="p-4 sm:p-5 bg-white border-t border-secondary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-heading font-medium text-base sm:text-lg text-secondary">
                    {officeItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/80 font-sans mt-0.5">
                    {officeItem.caption}
                  </p>
                </div>
                <div className="text-xs text-secondary/70 font-sans font-medium whitespace-nowrap">
                  WebP &bull; {officeItem.width}&times;{officeItem.height} px
                </div>
              </div>
            </button>
          </div>

          {/* Right Column: Office Location & Contact Card (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-white p-6 sm:p-8 border border-secondary/15 shadow-sm">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                Clinic Office Information
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-secondary mb-3">
                Pain and Paralysis Clinic
              </h3>

              <p className="text-sm text-charcoal/85 font-sans leading-relaxed mb-6">
                Primary outpatient facility for non-surgical spine decompression, chiropractic treatment, and physical rehabilitation in Chennai.
              </p>

              {/* Office Details List */}
              <div className="space-y-4 pt-2 border-t border-secondary/10">
                {/* Address Block */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface text-primary shrink-0 mt-0.5 border border-secondary/10">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-semibold text-charcoal/60 tracking-wider">
                      Address
                    </span>
                    <a
                      href={clinicContactInfo.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-sans text-secondary font-medium hover:text-primary transition-colors duration-200 mt-0.5 block leading-snug"
                    >
                      {clinicContactInfo.address}
                    </a>
                  </div>
                </div>

                {/* Telephone Block */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface text-primary shrink-0 mt-0.5 border border-secondary/10">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="block text-xs uppercase font-semibold text-charcoal/60 tracking-wider">
                        Telephone
                      </span>
                      <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 font-sans">
                        Awaiting clinic confirmation
                      </span>
                    </div>
                    <a
                      href={`tel:${clinicContactInfo.phone}`}
                      className="text-sm font-sans text-secondary font-medium hover:text-primary transition-colors duration-200 mt-0.5 block"
                    >
                      {clinicContactInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Clinical Hours Block */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface text-primary shrink-0 mt-0.5 border border-secondary/10">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="block text-xs uppercase font-semibold text-charcoal/60 tracking-wider">
                        Clinic Hours
                      </span>
                      <span className="text-[10px] text-charcoal/60 bg-surface px-1.5 py-0.5 rounded border border-secondary/10 font-sans">
                        Reference schedule
                      </span>
                    </div>
                    <span className="text-sm font-sans text-charcoal/90 mt-0.5 block">
                      {clinicContactInfo.workingHours}
                    </span>
                    <span className="text-xs font-sans text-charcoal/70 block">
                      {clinicContactInfo.sundayHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions & Ethical Safeguards Note */}
            <div className="mt-8 pt-6 border-t border-secondary/10 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  href={clinicContactInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  className="flex-1 justify-center inline-flex items-center gap-2"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </Button>

                <Button
                  href="/contact-us"
                  variant="outline"
                  size="md"
                  className="flex-1 justify-center"
                >
                  <span>Contact Clinic</span>
                </Button>
              </div>

              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-surface border border-secondary/10 text-[11px] text-charcoal/70 font-sans leading-relaxed">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Facility address from reference site. Interior reception image and operational contact details subject to on-site clinic confirmation. Zero unverified branch locations.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
