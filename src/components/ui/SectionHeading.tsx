import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  headingTag?: "h1" | "h2" | "h3";
  theme?: "light" | "dark";
  accent?: boolean;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

/**
 * Reusable SectionHeading component.
 * Standardizes section intros with optional uppercase eyebrow badge,
 * serif heading (Marcellus SC), and contextual description.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  headingTag: Heading = "h2",
  theme = "light",
  accent = false,
  className,
  titleClassName,
  descriptionClassName,
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col mb-8 md:mb-12 max-w-3xl",
        alignClasses[align],
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "section-badge mb-2 font-semibold tracking-[0.12em] uppercase text-xs sm:text-sm inline-flex items-center gap-2",
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
            ? "text-3xl sm:text-4xl md:text-5xl"
            : Heading === "h2"
            ? "text-2xl sm:text-3xl md:text-4xl"
            : "text-xl sm:text-2xl md:text-3xl",
          isDark ? "!text-white" : "!text-secondary",
          titleClassName
        )}
      >
        {title}
      </Heading>

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
    </div>
  );
};
