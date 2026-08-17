import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import IndustryCard from "@/components/IndustryCard";
import { industries } from "@/lib/content";

export default function IndustriesPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-qlentra">
        <SectionHeading
          eyebrow="Industries"
          title="Built for Membership &amp; Recurring-Service Businesses"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
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

        <div className="mt-12 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet hover:underline"
          >
            View All Industries
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
