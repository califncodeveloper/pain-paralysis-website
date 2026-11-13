"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  Phone,
  Clock,
  MapPin,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { mainNavigation, headerConfig, clinicContactInfo } from "@/data/navigation";
import { Button } from "@/components/ui";
import { MobileMenu } from "./MobileMenu";

// Minimal core hospital service categories for clean dropdown view
const serviceCategories = [
  {
    title: "Hospital & Inpatient Care",
    href: "/services/inpatient-care",
  },
  {
    title: "Neurological & Advanced Rehabilitation",
    href: "/services/robotic-neuro-rehabilitation",
  },
  {
    title: "Pain Management & Spine Care",
    href: "/services/pain-management",
  },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsServicesOpen(false);
  }

  const handleServicesMouseEnter = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !isScrolled;

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          isTransparent
            ? "bg-transparent text-white"
            : "bg-white/95 backdrop-blur-md text-secondary shadow-[0_4px_24px_rgba(16,81,86,0.08)] border-b border-black/5"
        }`}
      >
        {/* Top Utility Bar (Healthcare Trust & Fast Access) */}
        <div
          className={`hidden md:block transition-all duration-300 border-b ${
            isTransparent
              ? "bg-[#105156]/40 border-white/10 text-white/90 text-xs py-1.5 backdrop-blur-xs"
              : "bg-[#F8FBFB] border-black/5 text-[#354547] text-xs py-1.5"
          }`}
        >
          <div className="container-wide flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{clinicContactInfo.area}, Chennai</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{clinicContactInfo.workingHours}</span>
              </span>
            </div>

            <div className="flex items-center gap-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>25-Bedded, 24-Hour Hospital</span>
              </span>
              <a
                href={`tel:${clinicContactInfo.phone}`}
                className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-secondary transition-colors"
                aria-label={`Call Clinic Helpline ${clinicContactInfo.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>{clinicContactInfo.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="container-wide flex items-center justify-between py-3 md:py-4">
          {/* Clinic Brand Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            aria-label="Pain and Paralysis Clinic Home"
          >
            {isTransparent ? (
              <Image
                src="/images/logo/logo-white.webp"
                alt="Pain and Paralysis Clinic"
                width={220}
                height={61}
                priority
                className="h-9 sm:h-11 lg:h-12 w-auto max-w-[160px] sm:max-w-[210px] object-contain transition-opacity duration-300"
              />
            ) : (
              <Image
                src="/images/logo/logo-color.webp"
                alt="Pain and Paralysis Clinic"
                width={220}
                height={62}
                priority
                className="h-9 sm:h-11 lg:h-12 w-auto max-w-[160px] sm:max-w-[210px] object-contain transition-opacity duration-300"
              />
            )}
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 xl:gap-9"
          >
            <ul className="flex items-center gap-7 xl:gap-9 m-0 p-0 list-none">
              {mainNavigation.map((item) => {
                const active = isLinkActive(item.href);
                const isServices = item.href === "/services";

                if (isServices) {
                  return (
                    <li
                      key={item.href}
                      className="relative"
                      onMouseEnter={handleServicesMouseEnter}
                      onMouseLeave={handleServicesMouseLeave}
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        aria-expanded={isServicesOpen}
                        className={`inline-flex items-center gap-1.5 py-1 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded ${
                          isTransparent
                            ? active
                              ? "text-accent font-semibold"
                              : "text-white hover:text-accent"
                            : active
                            ? "text-primary font-semibold"
                            : "text-secondary hover:text-primary"
                        }`}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180 text-primary" : ""
                          }`}
                        />
                        {active && (
                          <span
                            className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"
                            aria-hidden="true"
                          />
                        )}
                      </Link>

                      {/* Minimal Services Category Dropdown */}
                      <div
                        className={`absolute top-full left-0 pt-2 w-72 sm:w-80 transition-all duration-200 z-50 ${
                          isServicesOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto visible"
                            : "opacity-0 -translate-y-1 pointer-events-none invisible"
                        }`}
                      >
                        <div className="bg-white rounded-2xl shadow-[0_12px_32px_rgba(16,81,86,0.14)] border border-secondary/15 p-2 text-text backdrop-blur-md">
                          <ul className="space-y-1 list-none p-0 m-0">
                            {serviceCategories.map((cat) => (
                              <li key={cat.title}>
                                <Link
                                  href={cat.href}
                                  onClick={() => setIsServicesOpen(false)}
                                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-secondary hover:text-primary hover:bg-[#F0F7F7] transition-all group"
                                >
                                  <span className="group-hover:translate-x-1 transition-transform">
                                    {cat.title}
                                  </span>
                                  <ChevronRight className="w-4 h-4 text-primary/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                                </Link>
                              </li>
                            ))}

                            <li className="pt-2 mt-1 border-t border-black/5">
                              <Link
                                href="/services"
                                onClick={() => setIsServicesOpen(false)}
                                className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold text-primary hover:bg-primary/10 transition-colors group"
                              >
                                <span>View All Services</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative py-1 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded ${
                        isTransparent
                          ? active
                            ? "text-accent font-semibold"
                            : "text-white hover:text-accent"
                          : active
                          ? "text-primary font-semibold"
                          : "text-secondary hover:text-primary"
                      }`}
                    >
                      <span>{item.title}</span>
                      {active && (
                        <span
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full transition-all"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Header Action: Book Consultation Button & Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Button
                href={headerConfig.ctaButton.href}
                variant={isTransparent ? "white" : "primary"}
                size="sm"
                rounded="full"
                icon={<Calendar className="w-4 h-4" />}
                iconPosition="left"
                className="text-sm font-semibold px-5 py-2.5 shadow-md transition-all"
              >
                {headerConfig.ctaButton.label}
              </Button>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                isTransparent
                  ? "bg-black/40 hover:bg-primary text-white border border-white/25 backdrop-blur-md shadow-sm"
                  : "bg-surface hover:bg-black/5 text-secondary border border-black/10"
              }`}
            >
              <Menu className="w-5 h-5 stroke-current" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent layout jumping and content overlap on inner pages */}
      <div
        aria-hidden="true"
        className={isHomePage ? "hidden" : "h-[90px] sm:h-[105px] md:h-[115px]"}
      />

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
