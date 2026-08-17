import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/content";

export default function SolutionsPreview() {
  return (
    <section className="section-padding bg-gray-soft/50">
      <div className="container-qlentra">
        <SectionHeading
          eyebrow="Solutions"
          title="A Managed Revenue &amp; Customer Experience Desk"
          description="Six connected capabilities that work together as one managed operation."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        <div className="mt-12 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet hover:underline"
          >
            View All Solutions
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
