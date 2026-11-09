import React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ExternalLink,
  Calendar,
} from "lucide-react";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { clinicContactInfo } from "@/data/navigation";

/**
 * LocationSection Component (Homepage Section 12)
 *
 * Accurately reconstructs Section 12 from the original Pain and Paralysis website:
 * - Eyebrow: LOCATION
 * - Title: Pain and Paralysis Chennai
 * - Facility image: clinic exterior facade (public/images/common/clinic-exterior.webp)
 * - Clinic address: Plot no : 5, Madha Nagar Main Road, Madhanandapuram, Chennai, Tamil Nadu - 600125 (Awaiting final confirmation)
 * - Phone: 8015559609 (+91 80155 59609) (Awaiting final confirmation)
 * - Working hours matching live reference website: Mon - Sat: 8:00 AM - 9:00 PM | Sun: 10:00 AM - 2:00 PM
 * - Verified Google Maps coordinates: 13.0182, 80.1415
 * - Verified navigation destination: https://maps.app.goo.gl/KFe9nQc8Qc85PVAK9
 *
 * Clinical Data Integrity & Compliance:
 * - Address and phone marked as awaiting final clinic confirmation before production publication.
 * - Public email omitted pending primary clinic verification.
 * - No fabricated coordinates or fictitious branch locations.
 */
export const LocationSection: React.FC = () => {
  return (
    <Section
      id="location"
      background="white"
      spacing="default"
      className="scroll-mt-20 sm:scroll-mt-24 border-t border-secondary/10"
      aria-label="Clinic Location and Facility"
    >
      <Container size="standard">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="LOCATION"
          title="Pain and Paralysis Chennai"
          description="Visit our dedicated spine care, non-surgical decompression, and paralysis rehabilitation facility in Madhanandapuram, Chennai."
          align="center"
          accent
        />

        {/* 2-Column Responsive Layout (Desktop: 50% / 50%, Tablet & Mobile: Stacked) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mt-4 md:mt-8">
          {/* Left Column: Facility Exterior & Clinic Contact Details */}
          <div className="flex flex-col space-y-6">
            {/* Facility Exterior Image */}
            <div className="relative aspect-[2.06/1] w-full overflow-hidden rounded-lg border border-secondary/10 bg-surface shadow-sm group">
              <Image
                src={clinicContactInfo.facilityImage || "/images/common/clinic-exterior.webp"}
                alt="Pain and Paralysis Clinic exterior building and facility signage in Madhanandapuram, Chennai"
                fill
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 bg-secondary/90 text-white text-xs font-medium px-3 py-1 rounded backdrop-blur-xs shadow-xs">
                Madhanandapuram Facility
              </div>
            </div>

            {/* Structured Contact & Address Information */}
            <div className="bg-surface rounded-lg border border-secondary/10 p-6 sm:p-7 shadow-xs flex-1 flex flex-col justify-between">
              <address className="not-italic space-y-5 text-sm sm:text-[15px] leading-relaxed text-text">
                {/* Physical Address */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs uppercase tracking-wider font-semibold text-secondary font-sans">
                        Clinic Location
                      </span>
                      <span className="text-[10px] font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        Awaiting final clinic confirmation
                      </span>
                    </div>
                    <strong className="block text-secondary font-medium text-base mb-0.5">
                      {clinicContactInfo.clinicName}
                    </strong>
                    <span className="text-secondary/80">
                      {clinicContactInfo.address}
                    </span>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs uppercase tracking-wider font-semibold text-secondary font-sans">
                        Direct Inquiries &amp; Appointments
                      </span>
                      <span className="text-[10px] font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        Awaiting final clinic confirmation
                      </span>
                    </div>
                    <a
                      href={`tel:${clinicContactInfo.phone}`}
                      className="text-base sm:text-lg font-semibold text-primary hover:text-secondary transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                      aria-label={`Call Pain and Paralysis Clinic at ${clinicContactInfo.phoneDisplay}`}
                    >
                      {clinicContactInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Working Hours (Mon–Sat & Sunday as verified on the live website) */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider font-semibold text-secondary font-sans mb-0.5">
                      Working Hours
                    </span>
                    <div className="space-y-0.5 text-secondary/90 font-medium">
                      <p>{clinicContactInfo.workingHours}</p>
                      {clinicContactInfo.sundayHours && (
                        <p className="text-secondary/80 font-normal">
                          {clinicContactInfo.sundayHours}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </address>

              {/* Action Buttons: Full width on mobile (<640px), inline on tablet & desktop */}
              <div className="pt-6 mt-6 border-t border-secondary/10 flex flex-col sm:flex-row gap-3">
                <Button
                  href={clinicContactInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                  icon={<Navigation className="w-4 h-4 ml-1" />}
                  iconPosition="right"
                  aria-label="Get directions to Pain and Paralysis Clinic on Google Maps (opens in new tab)"
                >
                  Get Directions
                </Button>

                <Button
                  href={`tel:${clinicContactInfo.phone}`}
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto"
                  icon={<Phone className="w-4 h-4 ml-1" />}
                  iconPosition="right"
                  aria-label={`Call Pain and Paralysis Clinic at ${clinicContactInfo.phoneDisplay}`}
                >
                  Call Clinic
                </Button>

                <Button
                  href="/contact-us"
                  variant="ghost"
                  size="md"
                  className="w-full sm:w-auto text-secondary hover:text-primary"
                  icon={<Calendar className="w-4 h-4 ml-1" />}
                  iconPosition="right"
                >
                  Book Visit
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Responsive Embedded Google Maps Widget */}
          <div className="flex flex-col h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[500px] rounded-lg border border-secondary/15 overflow-hidden shadow-xs bg-surface">
            {/* Accessible Interactive Map Embed */}
            <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[360px] bg-slate-100">
              <iframe
                src={
                  clinicContactInfo.mapEmbedUrl ||
                  "https://maps.google.com/maps?q=13.0182,80.1415&hl=en&z=16&output=embed"
                }
                title="Pain and Paralysis Clinic Google Map Location in Madhanandapuram, Chennai"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Interactive map centered at Pain and Paralysis Clinic, Madhanandapuram, Chennai"
              />
            </div>

            {/* Map Action / Verification Footer */}
            <div className="p-4 bg-white border-t border-secondary/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-secondary/80">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="font-medium truncate">
                  Madhanandapuram, Chennai - 600125
                </span>
              </div>
              <a
                href={clinicContactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label="Open Pain and Paralysis Clinic destination in Google Maps app (opens in new tab)"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
