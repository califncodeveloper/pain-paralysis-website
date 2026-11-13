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
  Bed,
  ShieldCheck,
  Navigation,
  Calendar,
} from "lucide-react";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { clinicContactInfo } from "@/data/navigation";
import type { GalleryItem } from "@/types";

export interface GalleryOfficeProps {
  officeItem: GalleryItem;
  onOpenLightbox: () => void;
}

export const GalleryOffice: React.FC<GalleryOfficeProps> = ({
  officeItem,
  onOpenLightbox,
}) => {
  const facilityPillars = [
    {
      title: "25-Bed Inpatient Care",
      subtitle: "24-Hour Supportive Care",
      icon: Bed,
    },
    {
      title: "Robotic Neuro Suite",
      subtitle: "Motor Retraining",
      icon: Building2,
    },
    {
      title: "Spine Decompression",
      subtitle: "Computerized Traction",
      icon: ShieldCheck,
    },
  ];

  return (
    <Section
      id="office"
      background="surface"
      spacing="default"
      className="border-t border-secondary/10 relative overflow-hidden"
      aria-label="Clinic Office and Care Facility"
    >
      {/* Background ambient accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="standard" className="relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="HOSPITAL FACILITY & ENVIRONMENT"
          title="FACILITY & RECEPTION"
          description="Operating as a 25-bedded, 24-hour hospital in Virugambakkam, Chennai, our care environment is purpose-built for inpatient recovery, robotic neuro rehabilitation, and specialized outpatient spine care."
          align="center"
          accent
          className="mb-10 sm:mb-14"
        />

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Interactive Facility Image (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <button
              type="button"
              onClick={onOpenLightbox}
              aria-label="View enlarged hospital interior reception and facility photograph"
              className="group relative w-full h-full min-h-[300px] sm:min-h-[380px] rounded-3xl overflow-hidden border border-[#105156]/15 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 flex flex-col justify-between cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[16/10] bg-secondary/5 overflow-hidden">
                <Image
                  src={officeItem.src}
                  alt={officeItem.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle gradient vignette */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity"
                  aria-hidden="true"
                />

                {/* Hover Overlay with Zoom affordance */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]"
                >
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/95 text-white text-xs font-semibold shadow-2xl border border-white/25 transform group-hover:scale-105 transition-transform">
                    <ZoomIn className="w-4 h-4 text-accent" />
                    Inspect Full Facility Photo
                  </span>
                </div>

                {/* Facility Identification Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary/90 text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-md">
                    <Building2 className="w-3.5 h-3.5 text-accent" />
                    Reception &amp; Waiting Lounge
                  </span>
                </div>

                {/* Hospital Status Tag */}
                <div className="absolute top-4 right-4 z-10 hidden sm:block">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/95 text-white text-xs font-semibold backdrop-blur-md shadow-md border border-white/20">
                    25 Beds • 24 Hours
                  </span>
                </div>
              </div>

              {/* Lower Details Bar */}
              <div className="p-5 sm:p-6 bg-white border-t border-secondary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-heading font-semibold text-lg text-secondary group-hover:text-primary transition-colors">
                    {officeItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text/80 font-sans mt-0.5">
                    {officeItem.caption}
                  </p>
                </div>
                <div className="text-xs font-semibold text-primary inline-flex items-center gap-1.5 shrink-0 bg-primary/10 px-3 py-1.5 rounded-full">
                  <span>Click to expand</span>
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>
            </button>

            {/* Quick 3-Pillar Facility Badges */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {facilityPillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="p-3.5 rounded-2xl bg-white border border-[#105156]/12 text-center flex flex-col items-center justify-center shadow-xs hover:border-primary/40 hover:shadow-sm transition-all"
                  >
                    <Icon className="w-4 h-4 text-primary mb-1.5" />
                    <span className="font-heading font-semibold text-xs text-secondary block truncate w-full">
                      {p.title}
                    </span>
                    <span className="text-[10px] text-text/75 block truncate w-full">
                      {p.subtitle}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Office Location & Contact Card (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-8 border border-secondary/15 shadow-xl relative overflow-hidden">
            {/* Subtle corner glow */}
            <div
              className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                Hospital &amp; Inpatient Information
              </div>

              <h3 className="font-heading text-2xl font-semibold text-secondary mb-2">
                Pain &amp; Paralysis Hospital
              </h3>

              <p className="text-sm text-text/80 font-sans leading-relaxed mb-6">
                25-bedded, 24-hour hospital dedicated to inpatient recovery, robotic neuro rehabilitation, non-surgical spine decompression, and pain management in Chennai.
              </p>

              {/* Office Details List */}
              <div className="space-y-4 pt-3 border-t border-secondary/10">
                {/* Address Block */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-semibold text-secondary/60 tracking-wider">
                      Hospital Facility Address
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
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="block text-xs uppercase font-semibold text-secondary/60 tracking-wider">
                        24/7 Hospital Helpline
                      </span>
                      <span className="text-[10px] text-primary bg-primary/10 px-2.5 py-0.5 rounded-full font-semibold">
                        24 Hours
                      </span>
                    </div>
                    <a
                      href={`tel:${clinicContactInfo.phone}`}
                      className="text-base font-sans text-primary font-semibold hover:text-secondary transition-colors duration-200 mt-0.5 block"
                    >
                      {clinicContactInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Clinical Hours Block */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-semibold text-secondary/60 tracking-wider">
                      Consultation &amp; Inpatient Hours
                    </span>
                    <p className="text-sm text-secondary font-medium mt-0.5">
                      {clinicContactInfo.workingHours}
                    </p>
                    {clinicContactInfo.sundayHours && (
                      <p className="text-xs text-text/75 mt-0.5">
                        {clinicContactInfo.sundayHours} (Inpatient 24/7)
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-secondary/10 flex flex-col sm:flex-row gap-3">
              <Button
                href={clinicContactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                rounded="full"
                className="w-full sm:w-auto font-semibold shadow-md bg-gradient-to-r from-primary to-[#07CCEC]"
                icon={<Navigation className="w-4 h-4" />}
                iconPosition="right"
              >
                Directions
              </Button>

              <Button
                href={`tel:${clinicContactInfo.phone}`}
                variant="outline"
                size="md"
                rounded="full"
                className="w-full sm:w-auto border-primary/40 text-secondary hover:bg-primary/5"
                icon={<Phone className="w-4 h-4" />}
                iconPosition="right"
              >
                Call Helpline
              </Button>

              <Button
                href="/contact-us"
                variant="ghost"
                size="md"
                rounded="full"
                className="w-full sm:w-auto text-secondary hover:text-primary"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
