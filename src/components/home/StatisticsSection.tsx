"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Award, UserCheck, Users, HeartHandshake } from "lucide-react";
import { Container, Section } from "@/components/ui";
import { statisticsData } from "@/data/statistics";
import type { StatisticItem } from "@/types/statistics";

/**
 * Hook to track user preference for reduced motion.
 */
function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerReducedMotionSnapshot(): boolean {
  return false;
}

interface StatisticCounterProps {
  item: StatisticItem;
  isInView: boolean;
  prefersReducedMotion: boolean;
}

/**
 * Individual animated counter card.
 * Animates from 0 to target value when triggered into view.
 */
const StatisticCounter: React.FC<StatisticCounterProps> = ({
  item,
  isInView,
  prefersReducedMotion,
}) => {
  const isK =
    item.suffix?.toLowerCase() === "k" || item.value.toLowerCase().includes("k");
  const targetNumber =
    isK && item.numericValue >= 1000
      ? Math.round(item.numericValue / 1000)
      : item.numericValue;

  const [currentValue, setCurrentValue] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const hasAnimatedRef = useRef<boolean>(false);

  useEffect(() => {
    if (prefersReducedMotion || !isInView || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const duration = 1500; // 1500ms duration per interaction specification
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth exponential ease-out
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const nextValue = Math.round(easeProgress * targetNumber);

      setCurrentValue(nextValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsCompleted(true);
      }
    };

    const animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isInView, prefersReducedMotion, targetNumber]);

  // Icon mapping for clinical metrics
  const getIcon = (id: string) => {
    switch (id) {
      case "stat-experience":
        return <Award className="h-6 w-6 sm:h-7 sm:w-7 text-accent" aria-hidden="true" />;
      case "stat-specialists":
        return <UserCheck className="h-6 w-6 sm:h-7 sm:w-7 text-accent" aria-hidden="true" />;
      case "stat-customers":
        return <Users className="h-6 w-6 sm:h-7 sm:w-7 text-accent" aria-hidden="true" />;
      case "stat-team":
        return <HeartHandshake className="h-6 w-6 sm:h-7 sm:w-7 text-accent" aria-hidden="true" />;
      default:
        return <Award className="h-6 w-6 sm:h-7 sm:w-7 text-accent" aria-hidden="true" />;
    }
  };

  const formattedDisplay =
    prefersReducedMotion || isCompleted
      ? item.value
      : isK
        ? `${currentValue}k`
        : `${currentValue}${item.suffix || ""}`;

  return (
    <div
      className="group relative flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-6 text-center shadow-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:p-8"
      aria-label={`${item.value} ${item.label}`}
    >
      {/* Decorative Icon Badge */}
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-accent ring-1 ring-accent/30 transition-all duration-300 group-hover:scale-105 group-hover:ring-accent/50 sm:h-14 sm:w-14">
        {getIcon(item.id)}
      </div>

      {/* Number Counter */}
      <div className="font-heading font-bold text-4xl sm:text-5xl lg:text-[56px] text-white tracking-tight leading-none tabular-nums">
        <span aria-hidden="true">{formattedDisplay}</span>
        <span className="sr-only">{item.value}</span>
      </div>

      {/* Metric Label */}
      <h3 className="mt-3 font-sans font-medium text-sm sm:text-base text-teal-100/90 capitalize tracking-wide">
        {item.label}
      </h3>

      {/* Supporting Description */}
      {item.description && (
        <p className="mt-1 hidden max-w-[220px] text-xs leading-relaxed text-teal-200/60 sm:block">
          {item.description}
        </p>
      )}
    </div>
  );
};

/**
 * StatisticsSection Component
 * Reconstructs Section 11: Clinical Statistics & Metrics.
 *
 * Design Specifications:
 * - Reference ID: .elementor-element-3f91324
 * - Background Color: #105156 (Deep Marine Teal)
 * - Container: max-w-[1200px] (standard)
 * - Padding: 60px 20px
 * - Typography: Numbers in Marcellus SC (font-heading), Labels in Poppins (font-sans)
 * - Counter: Smooth React-based 1500ms counter animation via IntersectionObserver
 * - Reduced Motion: Immediately displays static target values
 *
 * Medical Truthfulness & Authorization:
 * - Only numerical claims with explicit client verification and approval (`isApproved: true`)
 *   are rendered in the public UI.
 * - If zero statistics are authorized, this section returns `null` to avoid publishing
 *   unverified medical claims or empty placeholder cards.
 */
export const StatisticsSection: React.FC = () => {
  // Only display statistics that have explicit clinical authorization
  const approvedStatistics = statisticsData.filter((item) => item.isApproved);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );

  useEffect(() => {
    // If no approved statistics exist or reduced motion is preferred, skip observer
    if (approvedStatistics.length === 0 || prefersReducedMotion) return;

    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [approvedStatistics.length, prefersReducedMotion]);

  // Hide the section entirely if no statistics are approved
  if (approvedStatistics.length === 0) {
    return null;
  }

  const effectiveInView = prefersReducedMotion || isInView;

  return (
    <Section
      id="statistics"
      background="secondary"
      spacing="default"
      className="relative scroll-mt-20 sm:scroll-mt-24 border-t border-b border-white/10"
      aria-label="Clinic Statistics and Achievements"
    >
      {/* Background Subtle Radial Lighting */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"
        aria-hidden="true"
      />

      <Container size="standard" className="relative z-10">
        <div ref={sectionRef}>
          {/* Accessible Screen Reader Heading */}
          <h2 className="sr-only">Key Clinic Statistics & Milestones</h2>

          {/* Grid Layout: 4 columns desktop (1440/1024), 2x2 tablet (768), 1 column mobile (390/360) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {approvedStatistics.map((stat) => (
              <StatisticCounter
                key={stat.id}
                item={stat}
                isInView={effectiveInView}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
