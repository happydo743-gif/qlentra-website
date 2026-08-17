import { Check } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export default function PricingCard({
  name,
  subtitle,
  price,
  period,
  features,
  cta,
  featured = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl p-8 ${
        featured
          ? "bg-navy-800 text-white shadow-glow ring-1 ring-violet/40"
          : "card-surface"
      }`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-8 rounded-full bg-gradient-to-r from-violet to-purple px-3.5 py-1 text-xs font-semibold text-white shadow-md">
          Most Popular
        </span>
      )}
      <h3
        className={`text-xl font-semibold ${
          featured ? "text-white" : "text-navy-800"
        }`}
      >
        {name}
      </h3>
      <p
        className={`mt-1.5 text-sm ${
          featured ? "text-white/60" : "text-navy-500"
        }`}
      >
        {subtitle}
      </p>

      <div className="mt-6 flex items-baseline gap-1.5">
        <span
          className={`font-display text-3xl font-bold ${
            featured ? "text-white" : "text-navy-800"
          }`}
        >
          {price}
        </span>
        <span
          className={`text-sm ${featured ? "text-white/50" : "text-navy-500"}`}
        >
          {period}
        </span>
      </div>

      <ul className="mt-7 flex-1 space-y-3.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <Check
              size={17}
              strokeWidth={2.5}
              className={`mt-0.5 shrink-0 ${
                featured ? "text-aqua" : "text-violet"
              }`}
            />
            <span
              className={`text-sm leading-snug ${
                featured ? "text-white/80" : "text-navy-700"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`mt-8 w-full text-center ${
          featured ? "btn-primary" : "btn-secondary"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
