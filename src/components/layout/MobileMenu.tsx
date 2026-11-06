"use client";

import React, { useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Phone, Clock, MapPin } from "lucide-react";
import {
  mainNavigation,
  headerConfig,
  clinicContactInfo,
  socialLinks,
} from "@/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  // Handle ESC key press to close drawer
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close drawer on route change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in drawer */}
      <aside
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-[320px] sm:max-w-[360px] bg-white shadow-2xl flex flex-col transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none hidden"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/10">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            aria-label="Pain and Paralysis Clinic Home"
          >
            <Image
              src="/images/logo/logo-color.webp"
              alt="Pain and Paralysis Clinic"
              width={180}
              height={51}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded-md text-secondary hover:text-primary hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
          {/* Main Navigation Links */}
          <nav aria-label="Mobile Links">
            <ul className="space-y-1">
              {mainNavigation.map((item) => {
                const active = isLinkActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between px-4 py-3 rounded-md text-[15px] font-medium transition-colors ${
                        active
                          ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                          : "text-secondary hover:text-primary hover:bg-surface"
                      }`}
                    >
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA Action */}
          <div className="pt-2">
            <Link
              href={headerConfig.ctaButton.href}
              onClick={onClose}
              className="btn btn-primary w-full text-center py-3.5 shadow-sm text-[15px] font-semibold"
            >
              {headerConfig.ctaButton.label}
            </Link>
          </div>

          {/* Contact Details & Quick Info */}
          <div className="border-t border-black/10 pt-5 space-y-3.5">
            <h3 className="font-heading text-sm text-secondary tracking-wider uppercase">
              Quick Contact
            </h3>

            {/* Telephone */}
            <a
              href={`tel:${clinicContactInfo.phone}`}
              className="flex items-center gap-3 text-sm text-text hover:text-primary transition-colors group"
              aria-label={`Call Pain and Paralysis Clinic at ${clinicContactInfo.phoneDisplay}`}
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-medium text-text group-hover:text-primary transition-colors">
                {clinicContactInfo.phoneDisplay}
              </span>
            </a>

            {/* Operating Hours */}
            <div className="flex items-center gap-3 text-sm text-text/80">
              <div className="w-8 h-8 rounded-full bg-surface text-secondary flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs sm:text-sm">
                {clinicContactInfo.workingHours}
              </span>
            </div>

            {/* Address */}
            <a
              href={clinicContactInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm text-text/80 hover:text-primary transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-surface text-secondary flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs leading-relaxed group-hover:text-primary transition-colors">
                {clinicContactInfo.address}
              </span>
            </a>
          </div>
        </div>

        {/* Drawer Footer (Social Media) */}
        <div className="px-6 py-4 border-t border-black/10 bg-surface flex items-center justify-between">
          <span className="text-xs text-text/70 font-medium">Follow Us</span>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-secondary hover:text-white hover:bg-primary hover:border-primary transition-all shadow-xs"
              >
                {social.platform === "Instagram" && (
                  <svg
                    className="w-4 h-4"
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
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
                {social.platform === "LinkedIn" && (
                  <svg
                    className="w-4 h-4"
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
        </div>
      </aside>
    </>
  );
};

