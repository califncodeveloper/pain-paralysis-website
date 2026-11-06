import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
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
  className,
  children,
  icon,
  iconPosition = "right",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-semibold rounded-[4px] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs sm:text-sm gap-1.5",
    md: "px-6 py-2.5 sm:py-3 text-sm sm:text-[15px] gap-2",
    lg: "px-7 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-primary !text-white shadow-sm hover:bg-secondary hover:shadow",
    secondary:
      "bg-secondary !text-white shadow-sm hover:bg-primary hover:shadow",
    outline:
      "bg-transparent border-2 border-primary !text-primary hover:bg-primary hover:!text-white",
    white:
      "bg-white !text-secondary hover:bg-primary hover:!text-white shadow-sm hover:shadow",
    ghost:
      "bg-transparent !text-secondary hover:bg-black/5 hover:!text-primary",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  const combinedClassName = cn(
    baseStyles,
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
