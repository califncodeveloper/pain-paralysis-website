import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import {
  clinicContactInfo,
  socialLinks,
} from "@/data/navigation";
import { servicesData } from "@/data/services";
import { Button } from "@/components/ui";

export const Footer: React.FC = () => {
  // Balanced columns for all 14 services across Inpatient & Neuro Rehab, and Pain Management & Spine
  const inpatientAndNeuroServices = servicesData.filter((s) =>
    [
      "inpatient-care",
      "robotic-neuro-rehabilitation",
      "neuro-physiotherapy",
      "advanced-physiotherapy",
      "advanced-3d-gait-analysis",
      "high-frequency-emg",
      "biofeedback",
    ].includes(s.slug)
  );

  const painAndSpecializedServices = servicesData.filter((s) =>
    [
      "pain-management",
      "advanced-spine-decompression",
      "advanced-chiropractor",
      "advanced-knee-decompression",
      "advanced-laser-treatment",
      "advanced-aquatic-therapy",
      "pelvic-floor-therapy",
    ].includes(s.slug)
  );

  return (
    <footer className="bg-gradient-to-b from-[#105156] via-[#0d3f43] to-[#072427] text-white pt-16 pb-8 md:pt-20 md:pb-12 border-t border-white/10">
      <div className="container-wide">
        {/* Brand Header Banner in Footer */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-12 mb-12 border-b border-white/10 gap-8">
          <div className="space-y-3 max-w-xl">
            <Link
              href="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label="Pain and Paralysis Clinic Home"
            >
              <Image
                src="/images/logo/logo-white.webp"
                alt="Pain and Paralysis Clinic"
                width={220}
                height={61}
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-teal-100/80 text-sm sm:text-[15px] leading-relaxed">
              25-Bedded, 24-Hour Hospital in Virugambakkam, Chennai specializing
              in Inpatient Care, Robotic Neuro Rehabilitation, and Comprehensive
              Pain Management.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              href="/contact-us"
              variant="white"
              size="md"
              rounded="full"
              icon={<Calendar className="w-4 h-4 text-primary" />}
              iconPosition="left"
              className="font-semibold shadow-lg hover:bg-primary hover:!text-white"
            >
              Book Clinical Consultation
            </Button>
            <a
              href={`tel:${clinicContactInfo.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors border border-white/15"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>{clinicContactInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Office Address & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-accent text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>25-Bed Hospital • 24 Hours</span>
            </div>

            <h3 className="font-heading text-xl text-white font-semibold tracking-wide">
              Virugambakkam Hospital
            </h3>

            <div className="space-y-3.5 text-sm text-teal-100/80 leading-relaxed">
              {/* Address with Google Maps Link */}
              <a
                href={clinicContactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors group"
                aria-label="View Pain and Paralysis Hospital on Google Maps"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 text-accent flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>
                  <strong className="text-white block font-medium">
                    {clinicContactInfo.clinicName}
                  </strong>
                  {clinicContactInfo.address}
                </span>
              </a>

              {/* Working Hours */}
              <div className="flex items-start gap-3 pt-1">
                <div className="w-8 h-8 rounded-full bg-white/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white block font-medium">Hospital Availability</span>
                  <span>{clinicContactInfo.workingHours}</span>
                  {clinicContactInfo.sundayHours && (
                    <span className="block text-xs text-teal-200/70 mt-0.5">
                      {clinicContactInfo.sundayHours}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Inpatient & Neuro Rehab (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading text-base sm:text-lg text-white font-semibold tracking-wide uppercase">
              Inpatient &amp; Neuro Rehab
            </h3>
            <ul className="space-y-2.5 text-sm text-teal-100/80 m-0 p-0 list-none">
              {inpatientAndNeuroServices.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={svc.route}
                    className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-accent shrink-0 group-hover:text-white" />
                    <span>{svc.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Pain Management & Specialized Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading text-base sm:text-lg text-white font-semibold tracking-wide uppercase">
              Pain &amp; Specialized Care
            </h3>
            <ul className="space-y-2.5 text-sm text-teal-100/80 m-0 p-0 list-none">
              {painAndSpecializedServices.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={svc.route}
                    className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-accent shrink-0 group-hover:text-white" />
                    <span>{svc.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Patient Guidance & Social (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading text-base sm:text-lg text-white font-semibold tracking-wide uppercase">
              Patient Info
            </h3>
            <ul className="space-y-2.5 text-sm text-teal-100/80 m-0 p-0 list-none">
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">
                  About the Clinic
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services Directory
                </Link>
              </li>
              <li>
                <Link href="/tips-article" className="hover:text-white transition-colors">
                  Health Articles
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Awards & Facility
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition-colors">
                  Patient FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="pt-3">
              <span className="text-xs font-semibold text-teal-200/80 uppercase tracking-wider block mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    {social.platform === "Instagram" && (
                      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )}
                    {social.platform === "Facebook" && (
                      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                        <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
                      </svg>
                    )}
                    {social.platform === "LinkedIn" && (
                      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer Callout */}
        <div className="pt-8 pb-6 border-b border-white/10 text-xs text-teal-100/60 leading-relaxed">
          <p>
            <strong>Medical Notice:</strong> Information presented on this website is for educational and clinical guidance only and does not substitute for an individual physician consultation or clinical diagnosis. Rehabilitation protocols and treatment durations are determined following in-person biomechanical evaluation at Pain & Paralysis Clinic, Madhanandapuram, Chennai.
          </p>
        </div>

        {/* Sub-footer Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-teal-100/70 gap-4">
          <p className="m-0">
            © 2026 Pain and Paralysis Clinic. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
