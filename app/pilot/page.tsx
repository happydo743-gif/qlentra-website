import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import BookingCTA from "@/components/BookingCTA";
import PricingCard from "@/components/PricingCard";
import { pricingPackages } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "14-Day Pilot",
  description:
    "Test Qlentra on one measurable sales, retention, or revenue-recovery campaign with a focused 14-day pilot starting at $950, before committing to a larger managed operation.",
  alternates: { canonical: "/pilot" },
};

const included = [
  "One part-time managed agent",
  "Up to 40 campaign hours",
  "CRM workspace",
  "US local number and dialer",
  "Call recording",
  "Approved campaign script",
  "Daily performance reports",
  "Final campaign review",
];

export default function PilotPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-800 py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-qlentra-radial"
        />
        <div className="container-qlentra relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow border-white/15 bg-white/5 text-aqua">
              14-Day Pilot
            </span>
            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Start With a Focused 14-Day Revenue Sprint
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
              Test Qlentra on one measurable sales, retention, or
              revenue-recovery campaign before committing to a larger
              operation.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                Request a Pilot
              </Link>
              <BookingCTA
                label="Book a Discovery Call"
                variant="secondary-dark"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-qlentra">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 lg:grid-cols-[1fr,1fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-navy-800">
                What&apos;s Included
              </h2>
              <ul className="mt-6 space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-aqua"
                    />
                    <span className="text-sm leading-relaxed text-navy-700 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-surface p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-navy-500">
                Pricing
              </p>
              <p className="mt-3 font-display text-4xl font-bold text-navy-800">
                Starting at $950
              </p>
              <p className="mt-4 text-sm leading-relaxed text-navy-600">
                Final scope and pricing depend on campaign complexity, call
                volume, integrations, operating hours, and data volume.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <Link href="/contact" className="btn-primary w-full">
                  Request a Pilot
                </Link>
                <BookingCTA
                  label="Book a Discovery Call"
                  variant="secondary"
                  fullWidth
                  showIcon={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-soft/50">
        <div className="container-qlentra">
          <SectionHeading
            eyebrow="Service Packages"
            title="Ready to Scale Beyond the Pilot?"
            description="Custom scope available. Final pricing subject to requirements."
          />
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingPackages.map((pkg) => (
              <PricingCard
                key={pkg.id}
                name={pkg.name}
                subtitle={pkg.subtitle}
                price={pkg.price}
                period={pkg.period === "one-time" ? "one-time" : pkg.period}
                features={pkg.features}
                cta={pkg.cta}
                featured={pkg.featured}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
