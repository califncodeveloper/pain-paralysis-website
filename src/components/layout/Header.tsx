"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { mainNavigation, headerConfig } from "@/data/navigation";
import { Button } from "@/components/ui";
import { MobileMenu } from "./MobileMenu";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll position to toggle sticky state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Initialize state on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  // Transparent only when on the homepage and not scrolled
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
            ? "bg-transparent py-4 md:py-5 text-white"
            : "bg-white/95 backdrop-blur-md py-3 md:py-3.5 text-secondary shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-black/5"
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            aria-label="Pain and Paralysis Clinic Home"
          >
            {isTransparent ? (
              <Image
                src="/images/logo/logo-white.webp"
                alt="Pain and Paralysis Clinic"
                width={220}
                height={61}
                priority
                className="h-8 sm:h-10 lg:h-12 w-auto max-w-[150px] sm:max-w-[200px] object-contain transition-opacity duration-300"
              />
            ) : (
              <Image
                src="/images/logo/logo-color.webp"
                alt="Pain and Paralysis Clinic"
                width={220}
                height={62}
                priority
                className="h-8 sm:h-10 lg:h-12 w-auto max-w-[150px] sm:max-w-[200px] object-contain transition-opacity duration-300"
              />
            )}
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-8"
          >
            <ul className="flex items-center gap-6 xl:gap-8 m-0 p-0 list-none">
              {mainNavigation.map((item) => {
                const active = isLinkActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative py-1 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded ${
                        isTransparent
                          ? active
                            ? "text-primary font-semibold"
                            : "text-white hover:text-primary"
                          : active
                          ? "text-primary font-semibold"
                          : "text-secondary hover:text-primary"
                      }`}
                    >
                      <span>{item.title}</span>
                      {/* Active indicator bar */}
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

          {/* Header Actions: Consult Now Button & Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Button
                href={headerConfig.ctaButton.href}
                variant="primary"
                size="sm"
                className="text-sm font-semibold px-6 py-2.5 rounded-[4px] shadow-sm hover:bg-secondary transition-all"
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
              className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
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
        className={isHomePage ? "hidden" : "h-[70px] sm:h-[76px] lg:h-[88px]"}
      />

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

