// =============================================================
// SAEED - BEFORE MERGING: every statement on this page is a public
// operating promise. Confirm each one is true in day-to-day
// operations (DNC scrubbing, call-time windows, recording notice,
// no card data by phone). If one is not true yet, make it true
// operationally first or remove that section before publishing.
// =============================================================
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Calling & Messaging Compliance",
  description:
    "How Qlentra conducts outbound calling on behalf of clients: TCPA awareness, do-not-call handling, calling hours, call recording disclosure, and payment-data practices.",
  alternates: { canonical: "/compliance" },
  robots: { index: true, follow: true },
};

const lastUpdated = "November 2026";

export default function CompliancePage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-qlentra">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold text-navy-800 sm:text-4xl">
            Calling &amp; Messaging Compliance
          </h1>
          <p className="mt-3 text-sm text-navy-500">
            Last updated: {lastUpdated}
          </p>

          <p className="mt-6 text-sm leading-relaxed text-navy-600">
            Qlentra conducts outreach on behalf of its clients, to those
            clients&apos; own leads and customers. This page describes the
            standards our agents and operations follow on every campaign.
          </p>

          <div className="prose-qlentra mt-10 space-y-9">
            <PolicySection title="1. Who We Contact">
              <p>
                Our agents contact only individuals and businesses included
                in data that our clients provide and confirm they are
                authorized to use - typically existing customers, members,
                recent enquirers, or lapsed accounts. We do not buy or
                scrape consumer contact lists.
              </p>
            </PolicySection>

            <PolicySection title="2. Do-Not-Call Handling">
              <p>
                We operate in awareness of the U.S. Telephone Consumer
                Protection Act (TCPA) and applicable state calling rules.
                Client-provided do-not-call and opt-out lists are applied
                before any campaign begins, and our internal do-not-contact
                records are updated the moment a recipient asks not to be
                called again. That request is honored on every future
                campaign.
              </p>
            </PolicySection>

            <PolicySection title="3. Calling Hours">
              <p>
                Calls are placed only during permitted calling hours in the
                recipient&apos;s local time zone.
              </p>
            </PolicySection>

            <PolicySection title="4. Identification &amp; Call Recording">
              <p>
                Agents identify themselves and the client they are calling
                on behalf of at the start of every call. Calls are recorded
                for quality assurance and training, with an audible
                recording notice where applicable law requires one.
              </p>
            </PolicySection>

            <PolicySection title="5. No Payment Data by Phone">
              <p>
                Qlentra agents never request, collect, or store payment
                card numbers, security codes, or expiration dates by phone
                or any other channel. Where a campaign involves a payment
                update, the customer is directed to a secure payment link
                provided by the client.
              </p>
            </PolicySection>

            <PolicySection title="6. Client Data Use">
              <p>
                Client-provided data is used solely to operate the agreed
                campaign and is deleted or returned after the engagement,
                as described in our Privacy Policy and service agreements.
              </p>
            </PolicySection>

            <PolicySection title="7. Questions">
              <p>
                Questions about our calling practices can be directed to{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-violet hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </PolicySection>
          </div>
        </div>
      </div>
    </section>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-navy-800">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-navy-600">
        {children}
      </div>
    </div>
  );
}
