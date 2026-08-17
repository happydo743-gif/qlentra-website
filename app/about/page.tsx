import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FinalCTA from "@/components/FinalCTA";
import { Ear, MessagesSquare, LineChart } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Qlentra provides structured, managed customer operations designed to help recurring-service businesses convert more opportunities, retain more customers, and build more predictable recurring revenue.",
  alternates: { canonical: "/about" },
};

const pillars = [
  {
    icon: Ear,
    title: "Listening",
    description:
      "Real customer conversations still require attentive, human listening — especially at moments of cancellation, hesitation, or complaint.",
  },
  {
    icon: MessagesSquare,
    title: "Judgment",
    description:
      "Objection handling, reassurance, and de-escalation require human judgment that automated messaging cannot replicate.",
  },
  {
    icon: LineChart,
    title: "Measurement",
    description:
      "Every conversation is structured, recorded, and reported so outcomes — not just activity — can be tracked and improved.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-800 py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-qlentra-radial"
        />
        <div className="container-qlentra relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow border-white/15 bg-white/5 text-aqua">
              About Qlentra
            </span>
            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Human Conversations. Intelligent Operations. Measurable
              Growth.
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-qlentra">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-lg leading-relaxed text-navy-700">
              Qlentra was created to help recurring-service businesses close
              the gap between automated communication and the customer
              conversations that still require listening, objection
              handling, reassurance, and human judgment.
            </p>
            <p className="text-lg leading-relaxed text-navy-700">
              We provide structured, managed customer operations designed to
              help businesses convert more opportunities, retain more
              customers, and build more predictable recurring revenue.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-soft/50">
        <div className="container-qlentra">
          <SectionHeading
            eyebrow="What We Believe"
            title="Where Automation Ends, Qlentra Begins"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-violet shadow-card">
                  <pillar.icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-navy-800">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
