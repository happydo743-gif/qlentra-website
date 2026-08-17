import Link from "next/link";
import BookingCTA from "@/components/BookingCTA";
import OrbitalLifecycle from "@/components/OrbitalLifecycle";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-800">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-qlentra-radial"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-72 w-72 rounded-full bg-aqua/10 blur-3xl"
      />

      <div className="container-qlentra relative grid grid-cols-1 items-center gap-16 pb-20 pt-16 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr,0.95fr] lg:gap-8 lg:pb-28 lg:pt-24">
        <div className="animate-fade-up">
          <span className="eyebrow border-white/15 bg-white/5 text-aqua">
            Sales, Retention &amp; Customer Experience Outsourcing
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
            Convert More.
            <br />
            Retain Longer.
            <br />
            <span className="bg-gradient-to-r from-violet-light via-violet to-aqua bg-clip-text text-transparent">
              Grow Smarter.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Qlentra provides dedicated sales, customer retention, and
            customer experience teams for membership and recurring-service
            businesses.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/55">
            We combine trained human agents, structured CRM workflows, call
            recording, quality assurance, and measurable reporting to help
            businesses convert more opportunities, reduce churn, recover
            lost revenue, and grow recurring sales.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <BookingCTA label="Book a Discovery Call" size="lg" />
            <Link href="/solutions" className="btn-secondary-dark px-8 py-4 text-base">
              Explore Our Solutions
            </Link>
          </div>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.1em] text-white/40">
            Managed Agents &nbsp;•&nbsp; US Numbers &nbsp;•&nbsp; CRM
            Workflows &nbsp;•&nbsp; Call Recording &nbsp;•&nbsp; Daily
            Reporting
          </p>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <OrbitalLifecycle />
        </div>
      </div>
    </section>
  );
}
