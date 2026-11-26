import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FinalCTA from "@/components/FinalCTA";
import { Ear, MessagesSquare, LineChart } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Qlentra is a managed sales, retention, and customer experience desk founded to close the gap between automation and the customer conversations that save revenue.",
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
          <div className="mx-auto max-w-3xl space-y-6">
            <SectionHeading
              eyebrow="Our Story"
              title="Built to Make the Calls Nobody Had Time For"
            />
            <p className="text-lg leading-relaxed text-navy-700">
              Qlentra was built around a pattern that repeats across
              membership and recurring-service businesses: real money goes
              into winning customers, then revenue leaks out quietly -
              leads nobody called back, cancellations processed without a
              save conversation, failed payments that got automated emails
              and zero phone calls, and past customers nobody contacted
              again.
            </p>
            <p className="text-lg leading-relaxed text-navy-700">
              The fix is not more automation. It is trained people making
              the right calls at the right moments, with a clear offer, a
              calm tone, and a record of every outcome.
            </p>
            <p className="text-lg leading-relaxed text-navy-700">
              That is what Qlentra is: a managed desk of trained human
              agents - not software, not bots - who make exactly those
              calls for membership and recurring-service businesses. Every
              call recorded, every outcome in a daily report.
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

      <section className="section-padding bg-white">
        <div className="container-qlentra">
          <div className="mx-auto max-w-3xl">
import SectionHeading from "@/components/SectionHeading";
import FinalCTA from "@/components/FinalCTA";
import { Ear, MessagesSquare, LineChart } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Qlentra is a managed sales, retention, and customer experience desk founded to close the gap between automation and the customer conversations that save revenue.",
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
          <div className="mx-auto max-w-3xl space-y-6">
            <SectionHeading
              eyebrow="Our Story"
              title="Built to Make the Calls Nobody Had Time For"
            />
            <p className="text-lg leading-relaxed text-navy-700">
              Qlentra was built around a pattern that repeats across
              membership and recurring-service businesses: real money goes
              into winning customers, then revenue leaks out quietly -
              leads nobody called back, cancellations processed without a
              save conversation, failed payments that got automated emails
              and zero phone calls, and past customers nobody contacted
              again.
            </p>
            <p className="text-lg leading-relaxed text-navy-700">
              The fix is not more automation. It is trained people making
              the right calls at the right moments, with a clear offer, a
              calm tone, and a record of every outcome.
            </p>
            <p className="text-lg leading-relaxed text-navy-700">
              That is what Qlentra is: a managed desk of trained human
              agents - not software, not bots - who make exactly those
              calls for membership and recurring-service businesses. Every
              call recorded, every outcome in a daily report.
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

      <section className="section-padding bg-white">
        <div className="container-qlentra">
          <div className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="Company Details" title="Who You Are Working With" />
            <dl className="mt-10 space-y-4 text-sm leading-relaxed text-navy-700">
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 font-semibold text-navy-800">
                  Legal entity
                </dt>
                <dd>QLENTRA CX</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 font-semibold text-navy-800">
                  Registered
                </dt>
                <dd>Florida, United States</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 font-semibold text-navy-800">
                  Mailing address
                </dt>
                <dd>2232 Dell Range Blvd, Cheyenne, WY 82009, United States</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 font-semibold text-navy-800">
                  Team
                </dt>
                <dd>A team of Egyptian and American specialists.</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 font-semibold text-navy-800">
                  Operations
                </dt>
                <dd>
                  Remote-first managed team serving US businesses on US
                  hours and US local numbers.
                </dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 font-semibold text-navy-800">
                  Contact
                </dt>
                <dd>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-violet hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
            }
