import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionsPreview from "@/components/SolutionsPreview";
import IndustriesPreview from "@/components/IndustriesPreview";
import ProcessSteps from "@/components/ProcessSteps";
import SectionHeading from "@/components/SectionHeading";
import ProvidesSection from "@/components/ProvidesSection";
import PilotSection from "@/components/PilotSection";
import WhySection from "@/components/WhySection";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import { OrganizationJsonLd, FAQJsonLd } from "@/components/StructuredData";
import { siteConfig, faqItems } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.descriptor}`,
  description: siteConfig.shortDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <FAQJsonLd items={faqItems} />
      <Hero />
      <ProblemSection />
      <SolutionsPreview />
      <IndustriesPreview />

      <section id="how-it-works" className="section-padding bg-gray-soft/50">
        <div className="container-qlentra">
          <SectionHeading
            eyebrow="How It Works"
            title="From Opportunity to Managed Operation"
          />
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <ProvidesSection />
      <PilotSection />
      <WhySection />

      <section className="section-padding bg-white">
        <div className="container-qlentra">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Answers to common questions about how Qlentra operates."
          />
          <div className="mt-14">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
