"use client";

import React from "react";
import Image from "next/image";
import { ZoomIn, Award } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";
import type { GalleryItem } from "@/types";

export interface GalleryAwardsProps {
  awards: GalleryItem[];
  onOpenLightbox: (index: number) => void;
}

/**
 * GalleryAwards Component
 * Reconstructs the AWARDS section of the Gallery page (/gallery/).
 *
 * Provenance & Safeguards (Phase 24.1):
 * - Displays authentic reference images without invented accreditation claims
 * - Neutral item descriptions based on visual evidence
 * - Clear identification of actual binary formats (JPEG, PNG)
 * - Removed unsupported "Verified Asset" badges
 */
export const GalleryAwards: React.FC<GalleryAwardsProps> = ({
  awards,
  onOpenLightbox,
}) => {
  return (
    <Section
      id="awards"
      background="white"
      spacing="default"
      aria-label="Awards and Recognitions"
    >
      <Container size="standard">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="RECOGNITIONS & EVENTS"
          title="AWARDS"
          description="Photographs, event honors, and public felicitations featuring Dr. Dinesh Anandhan as documented on the clinic website."
          align="center"
          accent
          className="mb-10 sm:mb-14"
        />

        {/* 5-Item Responsive Grid: Desktop (3 + 2 centered), Tablet (2 cols), Mobile (1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 items-stretch">
          {awards.map((award, index) => {
            // Apply balanced centering on large screens:
            // Items 0, 1, 2 take 2 cols each on lg (filling 6 cols)
            // Item 3 starts at col 2 on lg (filling cols 2-3), item 4 fills cols 4-5
            let gridSpanClasses = "lg:col-span-2";
            if (index === 3) {
              gridSpanClasses = "lg:col-span-2 lg:col-start-2";
            } else if (index === 4) {
              gridSpanClasses = "lg:col-span-2";
            }

            // On tablet (2 cols), center the 5th item across 2 cols
            const tabletSpanClass =
              index === 4
                ? "md:col-span-2 md:max-w-md md:mx-auto w-full"
                : "";

            return (
              <div
                key={award.id}
                className={`${gridSpanClasses} ${tabletSpanClass} flex`}
              >
                <button
                  type="button"
                  onClick={() => onOpenLightbox(index)}
                  aria-label={`View enlarged image: ${award.title}`}
                  className="group relative flex flex-col w-full text-left bg-white rounded-xl border border-secondary/15 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {/* Image Frame with Clean Background & Containment */}
                  <div className="relative w-full aspect-square bg-surface/80 p-4 sm:p-6 flex items-center justify-center overflow-hidden border-b border-secondary/10">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={award.src}
                        alt={award.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Hover Zoom Badge */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]"
                    >
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/90 text-white text-xs font-medium shadow-md">
                        <ZoomIn className="w-3.5 h-3.5 text-accent" />
                        Click to enlarge
                      </span>
                    </div>

                    {/* Aspect Ratio Badge */}
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-white/90 border border-secondary/10 text-[11px] font-sans font-medium text-secondary/80">
                      {award.aspectRatio === "portrait" ? "3:4" : "1:1"}
                    </span>
                  </div>

                  {/* Card Content & Caption */}
                  <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between bg-white">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-primary font-semibold tracking-wider uppercase mb-1">
                        <Award className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Item {award.displayOrder}</span>
                      </div>
                      <h3 className="font-heading font-medium text-base sm:text-lg text-secondary group-hover:text-primary transition-colors duration-200 line-clamp-2">
                        {award.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-charcoal/80 font-sans line-clamp-2">
                        {award.caption}
                      </p>
                    </div>

                    {/* Neutral Technical & Classification Tag */}
                    <div className="mt-4 pt-3 border-t border-secondary/10 flex items-center justify-between text-[11px] text-charcoal/70">
                      <span className="font-medium text-secondary/80">
                        {award.itemType}
                      </span>
                      <span className="font-mono text-secondary/60">
                        {award.binaryFormat} &bull; {award.width}&times;{award.height}
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
