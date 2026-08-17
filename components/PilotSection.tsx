import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import BookingCTA from "@/components/BookingCTA";

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

export default function PilotSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-qlentra">
        <div className="relative overflow-hidden rounded-2xl bg-navy-800 px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-qlentra-gradient opacity-30 blur-3xl"
          />
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <span className="eyebrow border-white/15 bg-white/5 text-aqua">
                14-Day Pilot
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Start With a Focused 14-Day Revenue Sprint
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
                Test Qlentra on one measurable sales, retention, or
                revenue-recovery campaign before committing to a larger
                operation.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="font-display text-3xl font-bold text-white">
                  Starting at $950
                </span>
              </div>
              <p className="mt-3 max-w-md text-xs leading-relaxed text-white/45">
                Final scope and pricing depend on campaign complexity, call
                volume, integrations, operating hours, and data volume.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/pilot" className="btn-primary">
                  Request a Pilot
                </Link>
                <BookingCTA
                  label="Book a Discovery Call"
                  variant="secondary-dark"
                  showIcon={false}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/50">
                What&apos;s Included
              </p>
              <ul className="mt-4 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-aqua"
                    />
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
