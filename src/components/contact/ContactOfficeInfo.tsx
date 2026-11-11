import React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  AlertCircle,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui";
import { clinicContactInfo } from "@/data/navigation";

/**
 * ContactOfficeInfo Component
 * Displays clinic location, address, telephone, hours, and clinical qualifications.
 *
 * Adheres to Phase 25 specifications:
 * - Address: Plot No. 5, Madha Nagar Main Road, Madhanandapuram, Chennai, Tamil Nadu – 600125.
 * - Phone (+91 80155 59609) clearly marked as awaiting primary clinic confirmation.
 * - Working hours (Mon-Sat 8:00 AM–9:00 PM, Sun 10:00 AM–2:00 PM) marked as subject to clinic confirmation.
 * - Verified Google Maps destination link preserved without invented branches.
 * - Reception / facility asset clearly qualified.
 */
export const ContactOfficeInfo: React.FC = () => {
  return (
    <div className="rounded-2xl bg-white border border-secondary/15 p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col justify-between h-full">
      <div>
        {/* Card Eyebrow & Title */}
        <div className="border-b border-secondary/10 pb-5 mb-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
            Clinic Headquarters
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-secondary">
            Pain and Paralysis Chennai
          </h2>
          <p className="text-sm text-charcoal/80 font-sans mt-2 leading-relaxed">
            Outpatient clinic offering computerized non-surgical spine decompression, evidence-aligned chiropractic care, and comprehensive physical rehabilitation.
          </p>
        </div>

        {/* Facility Asset Preview */}
        <div className="relative aspect-[2.06/1] w-full overflow-hidden rounded-xl border border-secondary/10 bg-surface shadow-xs mb-6 group">
          <Image
            src={clinicContactInfo.facilityImage || "/images/common/clinic-exterior.webp"}
            alt="Pain and Paralysis Clinic facility exterior facade in Madhanandapuram, Chennai"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-secondary/90 text-white text-[11px] font-medium px-2.5 py-1 rounded backdrop-blur-xs flex items-center gap-1.5 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            <span>Madhanandapuram Facility</span>
          </div>
          <div className="absolute bottom-2 right-2 bg-secondary/80 text-white text-[10px] px-2 py-0.5 rounded font-sans">
            Reference Facility Asset
          </div>
        </div>

        {/* Structured Contact Details List */}
        <div className="space-y-5">
          {/* Physical Address */}
          <div className="flex items-start gap-3.5">
            <div
              className="p-2.5 rounded-lg bg-surface text-primary shrink-0 mt-0.5 border border-secondary/10"
              aria-hidden="true"
            >
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs uppercase font-semibold text-charcoal/60 tracking-wider">
                Address
              </span>
              <a
                href={clinicContactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-[15px] font-sans text-secondary font-medium hover:text-primary transition-colors duration-200 mt-0.5 block leading-relaxed"
                aria-label={`View clinic address on Google Maps: ${clinicContactInfo.address}`}
              >
                {clinicContactInfo.address}
              </a>
              <span className="text-[11px] text-charcoal/60 block mt-0.5">
                Madhanandapuram, Chennai, Tamil Nadu – 600125
              </span>
            </div>
          </div>

          {/* Telephone Line */}
          <div className="flex items-start gap-3.5">
            <div
              className="p-2.5 rounded-lg bg-surface text-primary shrink-0 mt-0.5 border border-secondary/10"
              aria-hidden="true"
            >
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="block text-xs uppercase font-semibold text-charcoal/60 tracking-wider">
                  Telephone Inquiries
                </span>
                <span className="text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-sans font-medium">
                  Awaiting primary clinic confirmation
                </span>
              </div>
              <a
                href={`tel:${clinicContactInfo.phone}`}
                className="text-base sm:text-lg font-semibold text-primary hover:text-secondary transition-colors mt-0.5 block"
                aria-label={`Call Pain and Paralysis Clinic at ${clinicContactInfo.phoneDisplay}`}
              >
                {clinicContactInfo.phoneDisplay}
              </a>
              <span className="text-[11px] text-charcoal/60 block mt-0.5">
                Published reference listing (awaiting primary clinic confirmation)
              </span>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="flex items-start gap-3.5">
            <div
              className="p-2.5 rounded-lg bg-surface text-primary shrink-0 mt-0.5 border border-secondary/10"
              aria-hidden="true"
            >
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="block text-xs uppercase font-semibold text-charcoal/60 tracking-wider">
                  Operating Hours
                </span>
                <span className="text-[10px] text-charcoal/70 bg-surface px-2 py-0.5 rounded border border-secondary/10 font-sans">
                  Subject to clinic confirmation
                </span>
              </div>
              <div className="mt-1 space-y-0.5 text-sm font-sans text-secondary">
                <p className="font-medium">{clinicContactInfo.workingHours}</p>
                {clinicContactInfo.sundayHours && (
                  <p className="text-charcoal/80 text-xs sm:text-sm">
                    {clinicContactInfo.sundayHours}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons & Safeguard Notice */}
      <div className="mt-8 pt-6 border-t border-secondary/10 space-y-3.5">
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

          <div className="flex-1 flex flex-col">
            <Button
              href={`tel:${clinicContactInfo.phone}`}
              variant="outline"
              size="md"
              className="w-full justify-center inline-flex items-center gap-2"
              aria-label={`Call published reference number ${clinicContactInfo.phoneDisplay} (awaiting confirmation)`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call Clinic</span>
            </Button>
            <span className="text-[10px] text-amber-800 font-medium text-center mt-1 w-full block">
              Awaiting primary confirmation
            </span>
          </div>
        </div>

        {/* Ethical Safeguard Notice */}
        <div className="flex items-start gap-2.5 p-3 rounded-lg bg-surface border border-secondary/10 text-[11px] text-charcoal/70 font-sans leading-relaxed">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            Office location sourced from reference website catalog. Telephone number, operating hours, and interior imagery remain subject to final on-site clinic confirmation. No fictitious branch centers.
          </span>
        </div>
      </div>
    </div>
  );
};
