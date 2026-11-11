import React from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { clinicContactInfo } from "@/data/navigation";

/**
 * ContactLocationMap Component
 * Interactive embedded Google Maps section for the Contact Us page.
 *
 * Provides:
 * - Responsive embedded map iframe with verified coordinates (13.0182, 80.1415)
 * - Navigation links to Google Maps app / web
 * - Madhanandapuram, Chennai clinic location confirmation
 */
export const ContactLocationMap: React.FC = () => {
  return (
    <Section
      id="clinic-location-map"
      background="surface"
      spacing="default"
      className="border-t border-secondary/10"
      aria-label="Clinic Map and Navigation"
    >
      <Container size="standard">
        <SectionHeading
          eyebrow="FACILITY LOCATION"
          title="Find Our Chennai Clinic"
          description="Plan your visit to Pain and Paralysis Clinic in Madhanandapuram. Conveniently situated for outpatient consultations across Chennai."
          align="center"
          accent
          className="mb-8 sm:mb-12"
        />

        {/* Map Frame Card */}
        <div className="rounded-2xl border border-secondary/15 overflow-hidden shadow-sm bg-white">
          {/* Responsive Map Embed Container */}
          <div className="relative w-full h-[340px] sm:h-[420px] md:h-[480px] bg-slate-100">
            <iframe
              src={
                clinicContactInfo.mapEmbedUrl ||
                "https://maps.google.com/maps?q=13.0182,80.1415&hl=en&z=16&output=embed"
              }
              title="Pain and Paralysis Clinic interactive location map in Madhanandapuram, Chennai"
              className="w-full h-full border-0 absolute inset-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Interactive Google Map showing Pain and Paralysis Clinic location"
            />
          </div>

          {/* Map Information Bar */}
          <div className="p-4 sm:p-6 bg-white border-t border-secondary/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <div
                className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 sm:mt-0"
                aria-hidden="true"
              >
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <strong className="block text-secondary font-medium text-sm sm:text-base">
                  {clinicContactInfo.clinicName}
                </strong>
                <span className="text-xs sm:text-sm text-charcoal/80">
                  {clinicContactInfo.address}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <Button
                href={clinicContactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2"
                aria-label="Open directions to Pain and Paralysis Clinic in Google Maps (opens in new tab)"
              >
                <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 ml-0.5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
