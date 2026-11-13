import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "surface" | "gold" | "outline" | "accent" | "luxury";
  size?: "sm" | "md";
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  dot = false,
  className,
  ...props
}) => {
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs font-semibold tracking-wider",
    md: "px-3.5 py-1 text-xs sm:text-[13px] font-semibold tracking-wider",
  };

  const variantStyles = {
    primary: "bg-[#1CAAB6]/10 text-[#105156] border border-[#1CAAB6]/30",
    secondary: "bg-[#105156] text-white border border-[#105156]",
    surface: "bg-[#F8FBFB] text-[#354547] border border-[#105156]/15",
    gold: "bg-[#FEC624]/15 text-[#354547] border border-[#FEC624]/40 font-bold",
    outline: "bg-transparent text-[#105156] border border-[#1CAAB6]/40",
    accent: "bg-[#07CCEC]/15 text-[#105156] border border-[#07CCEC]/30 font-bold",
    luxury: "bg-white/10 text-accent border border-white/25 backdrop-blur-md font-bold shadow-sm",
  };

  const dotColors = {
    primary: "bg-[#1CAAB6]",
    secondary: "bg-[#07CCEC]",
    surface: "bg-[#1CAAB6]",
    gold: "bg-[#FEC624]",
    outline: "bg-[#1CAAB6]",
    accent: "bg-[#07CCEC]",
    luxury: "bg-accent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-sans uppercase transition-colors",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full shrink-0 animate-pulse", dotColors[variant])}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
};

