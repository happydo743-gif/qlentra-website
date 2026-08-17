import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface BookingCTAProps {
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "secondary-dark";
  fullWidth?: boolean;
  showIcon?: boolean;
  className?: string;
}

const sizeClasses: Record<string, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3.5 text-sm",
  lg: "px-8 py-4 text-base",
};

const variantClasses: Record<string, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  "secondary-dark": "btn-secondary-dark",
};

/**
 * Primary conversion CTA used across the site.
 * Opens the Calendly booking page configured via NEXT_PUBLIC_CALENDLY_URL.
 */
export default function BookingCTA({
  label = "Book a Discovery Call",
  size = "md",
  variant = "primary",
  fullWidth = false,
  showIcon = true,
  className = "",
}: BookingCTAProps) {
  return (
    <a
      href={siteConfig.calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {label}
      {showIcon && <ArrowRight size={16} strokeWidth={2.5} />}
    </a>
  );
}
