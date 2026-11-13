import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  mobileMedia?: React.ReactNode;
  align?: "left" | "center" | "right";
  headingTag?: "h1" | "h2" | "h3";
  theme?: "light" | "dark";
  accent?: boolean;
  layout?: "stacked" | "split";
  action?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

/**
 * Reusable SectionHeading component.
 * Standardizes section intros with optional uppercase eyebrow badge,
 * serif heading (Marcellus SC), editorial layouts, and contextual description.
 *
 * Supports mobileMedia prop to position section images between title
 * and description specifically on mobile screens while preserving
 * original desktop layouts.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  mobileMedia,
  align = "left",
  headingTag: Heading = "h2",
  theme = "light",
  accent = false,
  layout = "stacked",
  action,
  className,
  titleClassName,
  descriptionClassName,
}) => {
  const isDark = theme === "dark";

  if (layout === "split") {
    return (
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 md:mb-16",
          className
        )}
      >
        <div className="lg:col-span-7 flex flex-col items-start">
          {eyebrow && (
            <span
              className={cn(
                "section-badge mb-3 font-semibold tracking-[0.14em] uppercase text-xs sm:text-sm inline-flex items-center gap-2",
                isDark ? "text-accent" : "text-primary"
              )}
            >
              {accent && (
                <span
                  className={cn(
                    "w-2 h-2 rounded-full",
                    isDark ? "bg-accent" : "bg-primary"
                  )}
                  aria-hidden="true"
                />
              )}
              {eyebrow}
            </span>
          )}

          <Heading
            className={cn(
              "font-heading font-semibold leading-[1.15] tracking-tight text-3xl sm:text-4xl lg:text-[44px]",
              isDark ? "!text-white" : "!text-secondary",
              titleClassName
            )}
          >
            {title}
          </Heading>

          {mobileMedia && (
            <div className="w-full my-5 block lg:hidden">
              {mobileMedia}
            </div>
          )}
        </div>

        <div className="lg:col-span-5 flex flex-col justify-end">
          {description && (
            <p
              className={cn(
                "text-sm sm:text-base leading-relaxed font-sans",
                isDark ? "!text-white/80" : "!text-text/80",
                descriptionClassName
              )}
            >
              {description}
            </p>
          )}
          {action && <div className="mt-4">{action}</div>}
        </div>
      </div>
    );
  }

  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col mb-8 md:mb-14 max-w-3xl",
        alignClasses[align],
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "section-badge mb-3 font-semibold tracking-[0.14em] uppercase text-xs sm:text-sm inline-flex items-center gap-2",
            isDark ? "text-accent" : "text-primary"
          )}
        >
          {accent && (
            <span
              className={cn(
                "w-2 h-2 rounded-full",
                isDark ? "bg-accent" : "bg-primary"
              )}
              aria-hidden="true"
            />
          )}
          {eyebrow}
        </span>
      )}

      <Heading
        className={cn(
          "font-heading font-semibold leading-[1.2] tracking-tight",
          Heading === "h1"
            ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            : Heading === "h2"
            ? "text-2xl sm:text-3xl md:text-4xl lg:text-[40px]"
            : "text-xl sm:text-2xl md:text-3xl",
          isDark ? "!text-white" : "!text-secondary",
          titleClassName
        )}
      >
        {title}
      </Heading>

      {mobileMedia && (
        <div className="w-full my-5 block lg:hidden">
          {mobileMedia}
        </div>
      )}

      {description && (
        <p
          className={cn(
            "mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed font-sans",
            isDark ? "!text-white/80" : "!text-text/80",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}

      {action && <div className="mt-5">{action}</div>}
    </div>
  );
};
