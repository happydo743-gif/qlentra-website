import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import FinalCTA from "@/components/FinalCTA";
import { ServiceJsonLd } from "@/components/StructuredData";
import { services } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Sales outsourcing, customer retention, revenue recovery, recurring revenue growth, customer experience, and CRM, QA & reporting — a managed revenue and customer experience desk from Qlentra.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      {services.map((service) => (
        <ServiceJsonLd
          key={service.title}
          name={service.title}
          description={service.description}
        />
      ))}

      <section className="relative overflow-hidden bg-navy-800 py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-qlentra-radial"
        />
        <div className="container-qlentra relative">
          <SectionHeading
            eyebrow="Solutions"
            title="A Managed Revenue &amp; Customer Experience Desk"
            description={siteConfig.shortDescription}
            light
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-qlentra">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={i + 1}
              />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
