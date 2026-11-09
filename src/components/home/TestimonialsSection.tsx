"use client";

import React, {
  useState,
  useRef,
  useCallback,
  useSyncExternalStore,
} from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, MapPin } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import type { TestimonialItem } from "@/types/testimonials";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * Hook to track user preference for reduced motion.
 */
function subscribeReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerReducedMotionSnapshot(): boolean {
  return false;
}

/**
 * Breakpoint subscription for responsive visible card count via useSyncExternalStore.
 */
function subscribeBreakpoint(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getVisibleCountSnapshot(): number {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

function getServerVisibleCountSnapshot(): number {
  return 3;
}

/**
 * Helper to compute patient initials for clean text-based avatar monogram.
 */
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

/**
 * Individual Testimonial Card Component
 * Strictly complies with patient privacy & medical consent ethics:
 * Identifiable patient photographs are not displayed pending client sign-off.
 * Uses an elegant text-based card design with authorized UI quote vector,
 * verified 5-star rating, patient name, treatment modality, and location.
 */
interface TestimonialCardProps {
  item: TestimonialItem;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => {
  return (
    <div
      className={cn(
        "relative w-full h-full p-6 sm:p-7 md:p-8 bg-white rounded-2xl border border-black/[0.08]",
        "shadow-[0_4px_20px_-2px_rgba(16,81,86,0.06)]",
        "hover:shadow-[0_20px_35px_-5px_rgba(28,170,182,0.16)] hover:-translate-y-1.5",
        "transition-all duration-300 flex flex-col justify-between group",
        "before:absolute before:inset-x-8 before:top-0 before:h-1 before:bg-transparent hover:before:bg-primary before:rounded-full before:transition-colors before:duration-300"
      )}
    >
      <div>
        {/* Top Header: Quote Vector & Star Rating */}
        <div className="flex items-center justify-between gap-4">
          <div className="relative h-7 w-9 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
            <Image
              src="/images/testimonials/quote-icon.webp"
              alt=""
              width={42}
              height={31}
              className="h-full w-auto object-contain"
              aria-hidden="true"
            />
          </div>

          <div className="flex items-center gap-2">
            <div
              className="flex items-center gap-0.5"
              role="img"
              aria-label={`Rating: ${item.rating} out of 5 stars`}
            >
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star
                  key={starIndex}
                  className={cn(
                    "w-4 h-4 sm:w-4.5 sm:h-4.5",
                    starIndex < item.rating
                      ? "fill-[#FEC624] text-[#FEC624]"
                      : "fill-transparent text-black/15"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-secondary/80 bg-surface px-2 py-0.5 rounded-full border border-black/[0.05]">
              {item.rating}.0
            </span>
          </div>
        </div>

        {/* Testimonial Review Text */}
        <blockquote className="mt-5 mb-6 text-sm sm:text-[15px] leading-relaxed text-text/85 font-sans italic">
          &ldquo;{item.testimonialText}&rdquo;
        </blockquote>
      </div>

      {/* Card Footer: Patient Attribution (Text-based, Consent-compliant) */}
      <div className="pt-4 border-t border-black/[0.06] flex items-center gap-3.5">
        {/* Text monogram initials badge */}
        <div
          className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/10 to-secondary/15 border border-primary/20 flex items-center justify-center font-heading font-semibold text-secondary text-sm shrink-0 select-none shadow-xs"
          aria-hidden="true"
        >
          {getInitials(item.patientName)}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-heading font-semibold text-base sm:text-lg text-secondary truncate">
            {item.patientName}
          </h3>
          <p className="text-xs sm:text-sm font-sans font-medium text-primary truncate">
            {item.conditionOrTreatment}
          </p>
          {item.location && (
            <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-text-muted mt-0.5 truncate">
              <MapPin className="w-3 h-3 text-primary/70 shrink-0" aria-hidden="true" />
              {item.location}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * TestimonialsSection Component
 * Reconstructs homepage Section 9: Patient Testimonials Carousel.
 *
 * Verified Specifications:
 * - Eyebrow: "Testimonials"
 * - Title: "What our clients say"
 * - Background: #FFFFFF (White)
 * - Container: 1300px max-width (size="wide")
 * - Layout: 3 cards on desktop (1440px / 1024px), 2 on tablet (768px), 1 on mobile (390px / 360px)
 * - Carousel Controls: Previous/Next navigation buttons, active pill pagination indicators
 * - Touch & Swipe: Full touch gesture support with horizontal swipe threshold
 * - Keyboard: ArrowLeft / ArrowRight navigation with visible focus indicators
 * - Reduced Motion: Immediate transition without animation when user prefers reduced motion
 * - Medical Ethics: Patient portrait assets awaiting consent are excluded in favor of clean text cards
 */
export const TestimonialsSection: React.FC = () => {
  // Only testimonials with explicit client publication authorization are rendered
  const approvedTestimonials = testimonialsData.filter((item) => item.isApproved);
  const totalItems = approvedTestimonials.length;

  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Touch tracking references
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const touchEndYRef = useRef<number | null>(null);

  // Duplicated items track to support seamless responsive carousel navigation
  const displayItems = [...approvedTestimonials, ...approvedTestimonials];

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );

  const visibleCount = useSyncExternalStore(
    subscribeBreakpoint,
    getVisibleCountSnapshot,
    getServerVisibleCountSnapshot
  );

  const goToNextSlide = useCallback(() => {
    if (totalItems === 0) return;
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const goToPrevSlide = useCallback(() => {
    if (totalItems === 0) return;
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToSlide = (index: number) => {
    if (totalItems === 0) return;
    setCurrentIndex(index % totalItems);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToPrevSlide();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goToNextSlide();
    } else if (e.key === "Home") {
      e.preventDefault();
      goToSlide(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goToSlide(totalItems - 1);
    }
  };

  // Touch swipe event handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    touchEndXRef.current = null;
    touchEndYRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndXRef.current = e.touches[0].clientX;
    touchEndYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (
      touchStartXRef.current === null ||
      touchEndXRef.current === null ||
      touchStartYRef.current === null ||
      touchEndYRef.current === null
    ) {
      return;
    }

    const deltaX = touchStartXRef.current - touchEndXRef.current;
    const deltaY = touchStartYRef.current - touchEndYRef.current;
    const minSwipeDistance = 40;

    // Verify horizontal swipe intent
    if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        goToNextSlide();
      } else {
        goToPrevSlide();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
    touchEndXRef.current = null;
    touchEndYRef.current = null;
  };

  // If no testimonials have received explicit publication authorization,
  // omit the section entirely to safeguard patient privacy.
  if (totalItems === 0) {
    return null;
  }

  return (
    <Section
      id="testimonials"
      background="white"
      spacing="default"
      className="scroll-mt-20 sm:scroll-mt-24 select-none"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          description="Read authentic experiences and recovery stories from patients who found lasting relief through our non-surgical spine care, robotic physiotherapy, and personalized rehabilitation."
          align="center"
          accent
        />

        {/* Carousel Container */}
        <div
          ref={containerRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Patient Testimonials"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 rounded-2xl"
        >
          {/* Overflow Track Wrapper */}
          <div className="overflow-hidden py-2 -mx-2.5 sm:-mx-3 px-0.5">
            <div
              className={cn(
                "flex",
                prefersReducedMotion
                  ? ""
                  : "transition-transform duration-500 ease-out"
              )}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
              aria-live="polite"
            >
              {displayItems.map((item, index) => {
                const baseIndex = index % totalItems;
                const isVisible =
                  index >= currentIndex && index < currentIndex + visibleCount;

                return (
                  <div
                    key={`${item.id}-item-${index}`}
                    className="shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2.5 sm:px-3 flex"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Testimonial ${baseIndex + 1} of ${totalItems}: ${item.patientName}`}
                    aria-hidden={!isVisible}
                  >
                    <TestimonialCard item={item} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls & Pagination Indicators */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4 sm:gap-6">
            {/* Previous Slide Button */}
            <button
              type="button"
              onClick={goToPrevSlide}
              aria-label="Previous testimonial"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-black/15 bg-white text-secondary hover:bg-primary hover:text-white hover:border-primary shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Pagination Bullet Indicators */}
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Testimonial slides"
            >
              {approvedTestimonials.map((slide, index) => {
                const isActive = currentIndex === index;

                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Go to slide ${index + 1} of ${totalItems}: ${slide.patientName}`}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      "h-2.5 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                      isActive
                        ? "w-7 sm:w-8 bg-primary"
                        : "w-2.5 bg-black/20 hover:bg-black/40"
                    )}
                  />
                );
              })}
            </div>

            {/* Next Slide Button */}
            <button
              type="button"
              onClick={goToNextSlide}
              aria-label="Next testimonial"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-black/15 bg-white text-secondary hover:bg-primary hover:text-white hover:border-primary shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Bottom Consultation Call-to-Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-text/75 text-sm sm:text-base mb-4 font-sans max-w-lg mx-auto">
            Ready to experience personalized care and restore your mobility?
          </p>
          <Button href="/contact-us" variant="primary" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </Container>
    </Section>
  );
};
