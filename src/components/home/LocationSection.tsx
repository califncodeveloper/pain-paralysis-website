import React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ExternalLink,
  Calendar,
  Bed,
  ShieldCheck,
} from "lucide-react";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { clinicContactInfo } from "@/data/navigation";

export const LocationSection: React.FC = () => {
  // Reusable Facility Image Framing (Rendered between title & description on mobile, in left column on desktop)
  const renderFacilityImage = (isMobile = false) => (
    <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-secondary/20 bg-surface shadow-xl group shrink-0 ${isMobile ? "max-w-lg mx-auto my-2" : ""}`}>
      <Image
        src={clinicContactInfo.facilityImage || "/images/common/clinic-exterior.webp"}
        alt="Pain and Paralysis Hospital exterior building and facility in Virugambakkam, Chennai"
        fill
        priority={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#105156]/95 via-[#105156]/30 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#105156]/90 text-white text-[11px] sm:text-xs font-semibold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full backdrop-blur-md shadow-lg border border-white/20 flex items-center gap-1.5 sm:gap-2">
        <Bed className="w-3.5 h-3.5 text-accent" />
        <span>25-Bed Inpatient Hospital • 24 Hours</span>
      </div>
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white flex items-end justify-between">
        <div>
          <span className="text-[10px] sm:text-xs font-semibold text-accent uppercase tracking-wider block">
            Campus Facility
          </span>
          <h4 className="font-heading text-lg sm:text-xl font-semibold text-white">
            Virugambakkam, Chennai
          </h4>
        </div>
        <div className="hidden sm:block">
          <span className="text-[11px] font-medium text-white/90 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            24/7 Admissions
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <Section
      id="location"
      background="white"
      spacing="default"
      className="scroll-mt-20 sm:scroll-mt-24 border-t border-secondary/10"
      aria-label="Clinic Location and Facility"
    >
      <Container size="standard">
        {/* Section Heading with mobileMedia positioned between title & description on mobile */}
        <SectionHeading
          eyebrow="HOSPITAL LOCATION & CAMPUS"
          title="Pain &amp; Paralysis Hospital Chennai"
          mobileMedia={renderFacilityImage(true)}
          description="Visit our 25-bedded, 24-hour hospital campus for inpatient care, robotic neuro rehabilitation, non-surgical spine decompression, and pain management in Virugambakkam, Chennai."
          align="center"
          accent
        />

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mt-6 md:mt-10">
          {/* Left Column: Facility Exterior & Structured Contact Card */}
          <div className="flex flex-col space-y-6 h-full justify-between">
            {/* Facility Exterior Image (Desktop) */}
            <div className="hidden lg:block">
              {renderFacilityImage(false)}
            </div>

            {/* Structured Contact & Address Information */}
            <div className="bg-[#F8FBFB] rounded-3xl border border-secondary/10 p-6 sm:p-8 shadow-xs flex-1 flex flex-col justify-between">
              <address className="not-italic space-y-5 text-sm sm:text-[15px] leading-relaxed text-text">
                {/* Physical Address */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs uppercase tracking-wider font-semibold text-secondary font-sans">
                        Hospital Facility Location
                      </span>
                      <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                        25 Beds • 24 Hours
                      </span>
                    </div>
                    <strong className="block text-secondary font-medium text-base mb-0.5 font-heading">
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
                    className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs uppercase tracking-wider font-semibold text-secondary font-sans">
                        24/7 Hospital Line &amp; Consultations
                      </span>
                    </div>
                    <a
                      href={`tel:${clinicContactInfo.phone}`}
                      className="text-base sm:text-lg font-semibold text-primary hover:text-secondary transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                      aria-label={`Call Pain and Paralysis Hospital at ${clinicContactInfo.phoneDisplay}`}
                    >
                      {clinicContactInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider font-semibold text-secondary font-sans mb-0.5">
                      Consultation &amp; Hospital Hours
                    </span>
                    <div className="space-y-0.5 text-secondary/90 font-medium">
                      <p>{clinicContactInfo.workingHours}</p>
                      {clinicContactInfo.sundayHours && (
                        <p className="text-secondary/80 font-normal">
                          {clinicContactInfo.sundayHours} (Inpatient Care Active 24/7)
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </address>

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
                  icon={<Navigation className="w-4 h-4 ml-1" />}
                  iconPosition="right"
                  aria-label="Get directions to Pain and Paralysis Hospital on Google Maps (opens in new tab)"
                >
                  Get Directions
                </Button>

                <Button
                  href={`tel:${clinicContactInfo.phone}`}
                  variant="outline"
                  size="md"
                  rounded="full"
                  className="w-full sm:w-auto border-primary/40 text-secondary hover:bg-primary/5"
                  icon={<Phone className="w-4 h-4 ml-1" />}
                  iconPosition="right"
                  aria-label={`Call Pain and Paralysis Hospital at ${clinicContactInfo.phoneDisplay}`}
                >
                  Call Hospital
                </Button>

                <Button
                  href="/contact-us"
                  variant="ghost"
                  size="md"
                  rounded="full"
                  className="w-full sm:w-auto text-secondary hover:text-primary"
                  icon={<Calendar className="w-4 h-4 ml-1" />}
                  iconPosition="right"
                >
                  Book Visit
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Google Maps Widget */}
          <div className="flex flex-col h-full min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] rounded-3xl border border-secondary/15 overflow-hidden shadow-md bg-surface">
            {/* Accessible Interactive Map Embed */}
            <div className="relative w-full flex-1 flex flex-col min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] bg-slate-100">
              <iframe
                src={
                  clinicContactInfo.mapEmbedUrl ||
                  "https://maps.google.com/maps?q=PAIN+%26+PARALYSIS+HOSPITAL+Virugambakkam+Chennai&hl=en&t=&z=15&ie=UTF8&iwloc=&output=embed"
                }
                title="Pain and Paralysis Hospital Google Map Location in Virugambakkam, Chennai"
                width="100%"
                height="100%"
                className="w-full h-full flex-1 min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] border-0 block grow"
                style={{
                  border: 0,
                  width: "100%",
                  height: "100%",
                  minHeight: "100%",
                  display: "block",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Interactive map centered at Pain and Paralysis Hospital, Virugambakkam, Chennai"
              />
            </div>

            {/* Map Action / Verification Footer */}
            <div className="p-4 sm:p-5 bg-white border-t border-secondary/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm shrink-0">
              <div className="flex items-center gap-2 text-secondary/80">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="font-semibold text-secondary truncate">
                  Virugambakkam, Chennai - 600092
                </span>
              </div>
              <a
                href={clinicContactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label="Open Pain and Paralysis Hospital in Google Maps app (opens in new tab)"
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
