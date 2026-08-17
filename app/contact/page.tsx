import type { Metadata } from "next";
import { Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import BookingCTA from "@/components/BookingCTA";
import SocialLinks from "@/components/SocialLinks";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a discovery call with Qlentra to discuss your sales, customer-retention, lead follow-up, cancellation recovery, revenue-recovery, or recurring-revenue opportunity.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
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
              Contact
            </span>
            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Let&apos;s Find the Revenue You&apos;re Currently Missing
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
              Book a focused 20-minute discovery call to discuss your sales,
              customer-retention, lead follow-up, cancellation recovery,
              revenue-recovery, or recurring-revenue opportunity.
            </p>
            <div className="mt-9 flex justify-center">
              <BookingCTA label="Book a Discovery Call" size="lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-qlentra">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr,0.85fr]">
            <div>
              <h2 className="text-2xl font-semibold text-navy-800">
                Send an Enquiry
              </h2>
              <p className="mt-2 text-sm text-navy-600">
                Fill in a few details and a member of the Qlentra team will
                follow up.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-surface p-7">
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-navy-500">
                  Direct Contact
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 flex items-center gap-2.5 text-base font-medium text-navy-800 hover:text-violet"
                >
                  <Mail size={18} className="text-violet" />
                  {siteConfig.email}
                </a>
                <div className="mt-6 border-t border-navy-800/8 pt-6">
                  <p className="text-sm text-navy-600">
                    Follow Qlentra
                  </p>
                  <div className="mt-3">
                    <SocialLinks />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-navy-800 to-navy-700 p-7 text-white">
                <h3 className="text-lg font-semibold">
                  Prefer to talk it through?
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Book a 20-minute discovery call directly on our calendar —
                  no forms required.
                </p>
                <div className="mt-5">
                  <BookingCTA
                    label="Book a Discovery Call"
                    variant="secondary-dark"
                    fullWidth
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-soft/50">
        <div className="container-qlentra">
          <SectionHeading
            eyebrow="Schedule Directly"
            title="Book a Discovery Call"
            description="Choose a time that works for you. Meetings are conducted over Google Meet."
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
