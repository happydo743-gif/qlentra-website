import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import IndustryCard from "@/components/IndustryCard";
import FinalCTA from "@/components/FinalCTA";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Qlentra supports car wash membership businesses, residential cleaning and housekeeping companies, and other recurring home-service businesses with sales, retention, and customer experience outsourcing.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-800 py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-qlentra-radial"
        />
        <div className="container-qlentra relative">
          <SectionHeading
            eyebrow="Industries"
            title="Built for Membership &amp; Recurring-Service Businesses"
            light
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-qlentra">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.title}
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                outcomes={industry.outcomes}
              />
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-navy-800/8 bg-gray-soft/60 p-7 text-center">
            <p className="text-sm leading-relaxed text-navy-600">
              Additional future verticals may include pest control, pool
              cleaning, lawn care, HVAC maintenance plans, mobile detailing,
              fitness memberships, and other recurring-service businesses.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
