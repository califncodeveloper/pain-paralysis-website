import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  spacing?: "default" | "sm" | "lg" | "none";
  background?: "white" | "surface" | "secondary" | "dark" | "transparent";
  className?: string;
  id?: string;
  as?: React.ElementType;
}

/**
 * Reusable Section wrapper component.
 * Provides consistent vertical rhythm and surface styling across site sections.
 */
export const Section: React.FC<SectionProps> = ({
  children,
  spacing = "default",
  background = "white",
  className,
  id,
  as: Component = "section",
  ...props
}) => {
  const spacingClasses = {
    default: "py-12 sm:py-16 md:py-20 lg:py-24",
    sm: "py-8 sm:py-10 md:py-12",
    lg: "py-16 sm:py-20 md:py-28 lg:py-32",
    none: "py-0",
  };

  const bgClasses = {
    white: "bg-white text-text",
    surface: "bg-surface text-text",
    secondary: "bg-secondary text-white",
    dark: "bg-black/95 text-white",
    transparent: "bg-transparent",
  };

  return (
    <Component
      id={id}
      className={cn(
        "relative w-full overflow-hidden",
        spacingClasses[spacing],
        bgClasses[background],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

