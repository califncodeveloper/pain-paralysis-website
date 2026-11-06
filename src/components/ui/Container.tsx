import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "wide" | "standard" | "narrow" | "full";
  className?: string;
  as?: React.ElementType;
}

/**
 * Reusable layout Container component.
 * Constrains content width and applies consistent responsive horizontal padding.
 *
 * - `wide`: 1300px max width (Hero, Header, wide showcases)
 * - `standard`: 1200px max width (Default reading width, grids)
 * - `narrow`: 860px max width (Focused reader, FAQ, single articles)
 * - `full`: 100% fluid width
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  size = "standard",
  className,
  as: Component = "div",
  ...props
}) => {
  const sizeClasses = {
    wide: "max-w-[1300px]",
    standard: "max-w-[1200px]",
    narrow: "max-w-[860px]",
    full: "max-w-full",
  };

  return (
    <Component
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

