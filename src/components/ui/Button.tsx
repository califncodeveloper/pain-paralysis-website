import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost" | "cyan" | "pill-teal";
  size?: "sm" | "md" | "lg";
  rounded?: "default" | "full" | "md";
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

export type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
    target?: string;
    rel?: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Reusable Button component that renders either a styled `<button>`
 * or Next.js `<Link>` / `<a>` depending on the presence of the `href` prop.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  rounded = "default",
  className,
  children,
  icon,
  iconPosition = "right",
  ...props
}) => {
  const roundedStyles = {
    default: "rounded-lg",
    full: "rounded-full",
    md: "rounded-md",
  };

  const baseStyles =
    "inline-flex items-center justify-center font-sans font-semibold tracking-wide transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs sm:text-sm gap-1.5",
    md: "px-6 py-2.5 sm:py-3 text-sm sm:text-[15px] gap-2.5 shadow-sm hover:shadow-md",
    lg: "px-8 py-3.5 sm:py-4 text-base gap-3 shadow-md hover:shadow-lg",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-primary to-[#07CCEC] !text-white shadow-[0_6px_20px_rgba(28,170,182,0.35)] hover:shadow-[0_10px_28px_rgba(28,170,182,0.45)] hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0 border border-white/20",
    secondary:
      "bg-gradient-to-r from-[#105156] to-[#0d3f43] !text-white shadow-[0_6px_20px_rgba(16,81,86,0.3)] hover:shadow-[0_10px_28px_rgba(28,170,182,0.35)] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 border border-white/10",
    outline:
      "bg-transparent border-2 border-primary !text-primary hover:bg-primary hover:!text-white hover:shadow-[0_6px_20px_rgba(28,170,182,0.3)] hover:-translate-y-0.5 active:translate-y-0",
    white:
      "bg-white !text-secondary shadow-[0_4px_18px_rgba(0,0,0,0.08)] hover:bg-gradient-to-r hover:from-primary hover:to-[#07CCEC] hover:!text-white hover:shadow-[0_8px_25px_rgba(28,170,182,0.35)] hover:-translate-y-0.5 active:translate-y-0 border border-white/60",
    ghost:
      "bg-transparent !text-secondary hover:bg-primary/10 hover:!text-primary",
    cyan:
      "bg-accent !text-secondary font-bold shadow-[0_4px_14px_rgba(7,204,236,0.3)] hover:bg-primary hover:!text-white hover:-translate-y-0.5",
    "pill-teal":
      "bg-primary/10 !text-secondary border border-primary/30 hover:bg-primary hover:!text-white hover:border-primary",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  const combinedClassName = cn(
    baseStyles,
    roundedStyles[rounded],
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, target, rel, ...rest } = props as ButtonAsLink;
    const isExternal =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? rel || "noopener noreferrer" : rel}
          className={combinedClassName}
          {...rest}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClassName} {...rest}>
        {content}
      </Link>
    );
  }

  const { type = "button", disabled, ...rest } = props as ButtonAsButton;
  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClassName}
      {...rest}
    >
      {content}
    </button>
  );
};
