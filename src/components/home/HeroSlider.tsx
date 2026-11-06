"use client";

import React, { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlidesData } from "@/data/hero-slides";
import { Container, Button } from "@/components/ui";

interface HeroSliderProps {
  autoPlayInterval?: number;
}

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

export const HeroSlider: React.FC<HeroSliderProps> = ({
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = heroSlidesData.length;

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );

  // Touch tracking references
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const touchEndYRef = useRef<number | null>(null);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay timer with pause support
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const timer = setInterval(() => {
      goToNextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [goToNextSlide, isPaused, prefersReducedMotion, autoPlayInterval, currentIndex]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToPrevSlide();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goToNextSlide();
    }
  };

  // Mobile swipe handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsPaused(true);
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
    setIsPaused(false);
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
    const minSwipeDistance = 45;

    // Verify horizontal intent
    if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        goToNextSlide();
      } else {
        goToPrevSlide();
      }
    }

    // Reset touch coordinates
    touchStartXRef.current = null;
    touchStartYRef.current = null;
    touchEndXRef.current = null;
    touchEndYRef.current = null;
  };

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Clinic Highlights and Services Slideshow"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full overflow-hidden bg-secondary select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary h-[560px] sm:h-[620px] md:h-[700px] lg:h-[820px] xl:h-[929px]"
    >
      {/* Top gradient vignette to ensure transparent header legibility */}
      <div
        className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/60 via-black/25 to-transparent z-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Sliding Track */}
      <div
        className={`flex h-full w-full ${
          prefersReducedMotion ? "" : "transition-transform duration-700 ease-in-out"
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {heroSlidesData.map((slide, index) => {
          const isActive = index === currentIndex;

          return (
            <div
              key={slide.id}
              className="relative w-full h-full shrink-0 flex items-center"
              aria-hidden={!isActive}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${totalSlides}: ${slide.heading}`}
            >
              {/* Background Banner Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-center w-full h-full"
                />
                {/* Contrast overlay gradient: darker on left for text readability, subtle across the whole frame */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35 md:from-black/80 md:via-black/50 md:to-black/25"
                  aria-hidden="true"
                />
              </div>

              {/* Slide Content Container */}
              <Container
                size="wide"
                className="relative z-10 w-full pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 flex flex-col justify-center"
              >
                <div
                  className={`max-w-3xl sm:px-12 md:px-14 lg:px-8 transition-all duration-700 delay-100 ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  {/* Category Eyebrow Badge */}
                  <div className="mb-3 sm:mb-4">
                    <span className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-primary/20 border border-primary/40 text-accent text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      Integrated Spine &amp; Paralysis Care
                    </span>
                  </div>

                  {/* Main Slide Title */}
                  <h1 className="font-heading font-semibold !text-white text-[22px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] leading-[1.18] tracking-tight">
                    {slide.heading}
                  </h1>

                  {/* Supporting Description */}
                  <p className="mt-3 sm:mt-5 !text-white/90 font-sans text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                    {slide.supportingText}
                  </p>

                  {/* Call to Action Button */}
                  <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
                    <Button
                      href={slide.destinationRoute}
                      variant="primary"
                      size="lg"
                      className="shadow-lg shadow-primary/30"
                    >
                      {slide.buttonLabel}
                    </Button>
                    <Button
                      href="/services"
                      variant="outline"
                      size="lg"
                      className="border-white/70 !text-white hover:bg-white hover:!text-secondary"
                    >
                      Explore Treatments
                    </Button>
                  </div>
                </div>
              </Container>
            </div>
          );
        })}
      </div>

      {/* Previous Slide Button */}
      <button
        type="button"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-primary text-white border border-white/20 backdrop-blur-md items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg cursor-pointer hover:scale-105 active:scale-95"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Next Slide Button */}
      <button
        type="button"
        onClick={goToNextSlide}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-primary text-white border border-white/20 backdrop-blur-md items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg cursor-pointer hover:scale-105 active:scale-95"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Pagination Bullet Indicators */}
      <div
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-2.5"
        role="tablist"
        aria-label="Slideshow pagination"
      >
        {heroSlidesData.map((slide, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${index + 1} of ${totalSlides}`}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer ${
                isActive
                  ? "w-8 sm:w-10 h-2.5 sm:h-3 bg-primary shadow-sm"
                  : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/50 hover:bg-white/80"
              }`}
            />
          );
        })}
      </div>

      {/* Screen Reader Live Region for Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {`Slide ${currentIndex + 1} of ${totalSlides}: ${
          heroSlidesData[currentIndex]?.heading
        }`}
      </div>
    </section>
  );
};
