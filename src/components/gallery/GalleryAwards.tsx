"use client";

import React from "react";
import Image from "next/image";
import { ZoomIn, Award, Sparkles } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";
import type { GalleryItem } from "@/types";

export interface GalleryAwardsProps {
  awards: GalleryItem[];
  onOpenLightbox: (index: number) => void;
}

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
          title="AWARDS & HONORS"
          description="Photographs, event honors, and public felicitations featuring Dr. Dinesh Anandhan and Pain & Paralysis Hospital as documented on the clinic website."
          align="center"
          accent
          className="mb-10 sm:mb-14"
        />

        {/* 5-Item Responsive Grid: Desktop (3 + 2 centered), Tablet (2 cols), Mobile (1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 items-stretch">
          {awards.map((award, index) => {
            let gridSpanClasses = "lg:col-span-2";
            if (index === 3) {
              gridSpanClasses = "lg:col-span-2 lg:col-start-2";
            } else if (index === 4) {
              gridSpanClasses = "lg:col-span-2";
            }

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
                  className="group relative flex flex-col w-full text-left bg-white rounded-2xl border border-secondary/15 hover:border-primary/45 shadow-[0_4px_20px_rgba(16,81,86,0.06)] hover:shadow-[0_16px_36px_rgba(28,170,182,0.18)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer"
                >
                  {/* Image Frame with Clean Background & Containment */}
                  <div className="relative w-full aspect-square bg-[#F8FBFB] p-4 sm:p-6 flex items-center justify-center overflow-hidden border-b border-secondary/10">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={award.src}
                        alt={award.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Hover Zoom Badge */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]"
                    >
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary/95 text-white text-xs font-semibold shadow-lg border border-white/20">
                        <ZoomIn className="w-3.5 h-3.5 text-accent" />
                        Click to enlarge
                      </span>
                    </div>

                    {/* Type Tag */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 border border-secondary/15 text-[11px] font-sans font-semibold text-secondary/90 shadow-xs backdrop-blur-sm">
                      {award.itemType}
                    </span>
                  </div>

                  {/* Card Content & Caption */}
                  <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-primary font-semibold tracking-wider uppercase mb-1.5">
                        <Award className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                        <span>Felicitation {award.displayOrder}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-base text-secondary group-hover:text-primary transition-colors duration-200 line-clamp-2">
                        {award.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-text/80 font-sans line-clamp-2 leading-relaxed">
                        {award.caption}
                      </p>
                    </div>

                    {/* Neutral Technical & Classification Tag */}
                    <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-[11px] text-text/70">
                      <span className="font-medium text-secondary/80 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-primary" />
                        Verified Event Asset
                      </span>
                      <span className="font-medium text-primary uppercase tracking-wider">
                        Inspect →
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
