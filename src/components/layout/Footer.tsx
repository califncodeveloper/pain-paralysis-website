import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import {
  footerNavigation,
  clinicContactInfo,
  socialLinks,
} from "@/data/navigation";

export const Footer: React.FC = () => {
  const quickLinksSection = footerNavigation.find(
    (sec) => sec.title === "Links"
  );
  const servicesSection = footerNavigation.find(
    (sec) => sec.title === "SERVICES"
  );

  return (
    <footer className="bg-gradient-to-b from-[#105156] via-[#0d3f43] to-[#072427] text-white pt-16 pb-8 md:pt-20 md:pb-10 border-t border-white/10">
      <div className="container-wide">
        {/* Brand Header Banner in Footer */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 mb-12 border-b border-white/10 gap-6">
          <Link
            href="/"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            aria-label="Pain and Paralysis Clinic Home"
          >
            <Image
              src="/images/logo/logo-white.webp"
              alt="Pain and Paralysis Clinic"
              width={220}
              height={61}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="text-teal-100/80 text-sm md:text-[15px] max-w-xl leading-relaxed">
            Specialized Healthcare Clinic in Chennai for Non-Surgical Spine
            Decompression, Paralysis Rehabilitation, and Advanced Chiropractic
            Care.
          </p>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 xl:gap-12">
          {/* Column 1: Office Address & Contact */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg sm:text-xl text-white font-semibold tracking-wide uppercase">
              Office
            </h3>
            <div className="space-y-3.5 pt-1 text-sm text-teal-100/80 leading-relaxed">
              {/* Address with Google Maps Link */}
              <a
                href={clinicContactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-primary transition-colors group"
                aria-label="View Pain and Paralysis Clinic on Google Maps"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="group-hover:text-primary transition-colors">
                  <strong className="text-white block font-medium">
                    {clinicContactInfo.clinicName}
                  </strong>
                  {clinicContactInfo.address}
                </span>
              </a>

              {/* Telephone */}
              <a
                href={`tel:${clinicContactInfo.phone}`}
                className="flex items-center gap-3 hover:text-primary transition-colors group pt-1"
                aria-label={`Call ${clinicContactInfo.phoneDisplay}`}
              >
                <div className="w-8 h-8 rounded-full bg-white/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium text-white group-hover:text-primary transition-colors">
                  {clinicContactInfo.phoneDisplay}
                </span>
              </a>

              {/* Operating Hours */}
              <div className="flex items-center gap-3 pt-1">
                <div className="w-8 h-8 rounded-full bg-white/10 text-primary flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span>{clinicContactInfo.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg sm:text-xl text-white font-semibold tracking-wide uppercase">
              Links
            </h3>
            <ul className="space-y-2.5 pt-1 m-0 p-0 list-none">
              {quickLinksSection?.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm md:text-[15px] text-teal-100/80 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-primary opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg sm:text-xl text-white font-semibold tracking-wide uppercase">
              Services
            </h3>
            <ul className="space-y-2.5 pt-1 m-0 p-0 list-none">
              {servicesSection?.links.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 text-sm md:text-[15px] text-teal-100/80 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-primary opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Links & Consultation Note */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg sm:text-xl text-white font-semibold tracking-wide uppercase">
              Social
            </h3>
            <p className="text-sm text-teal-100/80 leading-relaxed pt-1">
              Connect with us for regular healthcare updates, spine wellness tips,
              and patient recovery stories.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-teal-100 hover:text-white hover:bg-primary hover:border-primary transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {social.platform === "Instagram" && (
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  )}
                  {social.platform === "Facebook" && (
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {social.platform === "LinkedIn" && (
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>

            {/* Quick Action Button */}
            <div className="pt-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center btn btn-primary text-xs uppercase tracking-wider py-2.5 px-4 rounded-[4px] w-full text-center"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Sub-footer Copyright Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-teal-100/70">
          <p className="text-center sm:text-left m-0">
            &copy; 2025 Pain And Paralysis | All Rights Reserved.
          </p>
          <p className="text-center sm:text-right m-0">
            Developed by{" "}
            <a
              href="https://indiafloats.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white underline underline-offset-4 transition-colors"
            >
              Indiafloats
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};
