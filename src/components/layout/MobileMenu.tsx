"use client";

import React, { useEffect, useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Phone, Clock, MapPin, ChevronDown, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import {
  mainNavigation,
  headerConfig,
  clinicContactInfo,
} from "@/data/navigation";
import { Button } from "@/components/ui";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);

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
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-[340px] sm:max-w-[380px] bg-white shadow-2xl flex flex-col transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 bg-[#F8FBFB]">
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
              height={50}
              className="h-9 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-secondary hover:bg-black/5 hover:text-primary transition-colors border border-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X className="w-5 h-5 stroke-current" />
          </button>
        </div>

        {/* Drawer Body - Scrollable Navigation */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {/* Main Navigation Stack */}
          <nav aria-label="Mobile Navigation">
            <ul className="space-y-1.5 m-0 p-0 list-none">
              {mainNavigation.map((item) => {
                const active = isLinkActive(item.href);
                const isServices = item.href === "/services";

                if (isServices) {
                  return (
                    <li key={item.href} className="border-b border-black/5 pb-1">
                      <div className="flex items-center justify-between py-2">
                        <Link
                          href={item.href}
                          onClick={onClose}
                          aria-current={active ? "page" : undefined}
                          className={`text-base font-medium transition-colors ${
                            active
                              ? "text-primary font-semibold"
                              : "text-secondary hover:text-primary"
                          }`}
                        >
                          {item.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                          className="p-1 text-secondary/70 hover:text-primary transition-colors"
                          aria-label="Toggle all 14 services submenu"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isServicesExpanded ? "rotate-180 text-primary" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Expandable Services Accordion */}
                      {isServicesExpanded && (
                        <div className="pl-3 pr-1 py-2 my-1 space-y-1 bg-[#F8FBFB] rounded-xl border border-black/5">
                          <Link
                            href="/services/inpatient-care"
                            onClick={onClose}
                            className="flex items-center justify-between text-xs font-medium text-secondary hover:text-primary py-1.5 px-2 rounded hover:bg-white transition-colors"
                          >
                            <span>Hospital &amp; Inpatient Care</span>
                            <ArrowRight className="w-3 h-3 text-primary/40 shrink-0" />
                          </Link>
                          <Link
                            href="/services/robotic-neuro-rehabilitation"
                            onClick={onClose}
                            className="flex items-center justify-between text-xs font-medium text-secondary hover:text-primary py-1.5 px-2 rounded hover:bg-white transition-colors"
                          >
                            <span>Neurological &amp; Advanced Rehabilitation</span>
                            <ArrowRight className="w-3 h-3 text-primary/40 shrink-0" />
                          </Link>
                          <Link
                            href="/services/pain-management"
                            onClick={onClose}
                            className="flex items-center justify-between text-xs font-medium text-secondary hover:text-primary py-1.5 px-2 rounded hover:bg-white transition-colors"
                          >
                            <span>Pain Management &amp; Spine Care</span>
                            <ArrowRight className="w-3 h-3 text-primary/40 shrink-0" />
                          </Link>
                          <div className="pt-1 mt-1 border-t border-black/5">
                            <Link
                              href="/services"
                              onClick={onClose}
                              className="flex items-center justify-between text-xs font-semibold text-primary py-1.5 px-2 rounded hover:bg-primary/5 transition-colors"
                            >
                              <span>View All Services</span>
                              <ArrowRight className="w-3 h-3 text-primary shrink-0" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.href} className="border-b border-black/5 pb-1">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={`block py-2.5 text-base font-medium transition-colors ${
                        active
                          ? "text-primary font-semibold pl-2 border-l-2 border-primary"
                          : "text-secondary hover:text-primary"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Quick CTA Actions */}
          <div className="space-y-3 pt-2">
            <Button
              href={headerConfig.ctaButton.href}
              onClick={onClose}
              variant="primary"
              size="md"
              rounded="full"
              icon={<Calendar className="w-4 h-4" />}
              iconPosition="left"
              className="w-full text-center justify-center font-semibold shadow-md"
            >
              {headerConfig.ctaButton.label}
            </Button>

            <a
              href={`tel:${clinicContactInfo.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full border border-primary/30 text-secondary hover:bg-primary/5 text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Call: {clinicContactInfo.phoneDisplay}</span>
            </a>
          </div>

          {/* Clinic Contact & Operating Hours */}
          <div className="pt-4 border-t border-black/10 space-y-3 text-xs text-text/80">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{clinicContactInfo.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <span>{clinicContactInfo.workingHours}</span>
            </div>
            <div className="flex items-center gap-2.5 text-primary font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Specialized Non-Surgical Clinical Care</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
