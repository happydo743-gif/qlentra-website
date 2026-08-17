import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The Terms of Use governing access to and use of the Qlentra website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const lastUpdated = "August 2026";

export default function TermsPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-qlentra">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold text-navy-800 sm:text-4xl">
            Terms of Use
          </h1>
          <p className="mt-3 text-sm text-navy-500">
            Last updated: {lastUpdated}
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <AlertTriangle
              size={20}
              className="mt-0.5 shrink-0 text-amber-600"
            />
            <p className="text-sm leading-relaxed text-amber-800">
              These Terms are provided as a website template and should be
              reviewed by qualified legal counsel before publication.
            </p>
          </div>

          <div className="prose-qlentra mt-10 space-y-9">
            <PolicySection title="1. Acceptance of Terms">
              <p>
                By accessing or using this website, you agree to be bound by
                these Terms of Use. If you do not agree to these terms,
                please do not use this website.
              </p>
            </PolicySection>

            <PolicySection title="2. Website Use">
              <p>
                This website is provided for informational purposes to
                describe Qlentra&apos;s services and to allow prospective
                clients to make enquiries. You agree to use the website
                only for lawful purposes and in a manner that does not
                infringe the rights of, or restrict or inhibit the use and
                enjoyment of, the website by any third party.
              </p>
            </PolicySection>

            <PolicySection title="3. Intellectual Property">
              <p>
                The Qlentra name, logo, brand assets, and all website
                content, including text, graphics, and design, are the
                property of {siteConfig.legalName} or its licensors and are
                protected by applicable intellectual property laws. Nothing
                on this website should be construed as granting any license
                or right to use any trademark or brand asset without prior
                written permission.
              </p>
            </PolicySection>

            <PolicySection title="4. No Guarantee of Business Results">
              <p>
                Qlentra provides managed sales, retention, and customer
                experience services. Descriptions of these services on this
                website are informational and do not constitute a
                guarantee of specific sales, conversion rates, retention
                outcomes, recovered revenue, or return on investment.
                Results depend on numerous factors specific to each
                business, including but not limited to offer, pricing,
                market conditions, and data quality.
              </p>
            </PolicySection>

            <PolicySection title="5. Service Descriptions Are Informational">
              <p>
                Service descriptions, package inclusions, and pricing shown
                on this website are provided for general informational
                purposes and are subject to change. Final scope, pricing,
                and terms for any engagement are established separately in
                a written agreement between Qlentra and the client.
              </p>
            </PolicySection>

            <PolicySection title="6. Third-Party Links and Services">
              <p>
                This website may contain links to third-party websites or
                services, including our scheduling provider (Calendly) and
                social media platforms. We do not control and are not
                responsible for the content, privacy practices, or terms of
                any third-party website or service.
              </p>
            </PolicySection>

            <PolicySection title="7. User Submissions">
              <p>
                Information you submit through our contact form or booking
                system is used to respond to your enquiry and evaluate a
                potential engagement, as described in our Privacy Policy.
                You agree that the information you submit is accurate and
                that you have the right to provide it.
              </p>
            </PolicySection>

            <PolicySection title="8. Disclaimer of Warranties">
              <p>
                This website and its content are provided on an &quot;as
                is&quot; and &quot;as available&quot; basis without
                warranties of any kind, whether express or implied, to the
                fullest extent permitted by applicable law.
              </p>
            </PolicySection>

            <PolicySection title="9. Limitation of Liability">
              <p>
                To the fullest extent permitted by applicable law, Qlentra
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of or
                related to your use of, or inability to use, this website.
              </p>
            </PolicySection>

            <PolicySection title="10. Changes to These Terms">
              <p>
                We may update these Terms of Use from time to time. Changes
                will be reflected by an updated &quot;Last updated&quot;
                date at the top of this page. Continued use of the website
                after changes are posted constitutes acceptance of the
                revised terms.
              </p>
            </PolicySection>

            <PolicySection title="11. Governing Law">
              <p>
                These Terms of Use are governed by the laws of the State of
                Florida, United States, without regard to conflict-of-law
                principles.
              </p>
            </PolicySection>

            <PolicySection title="12. Contact Information">
              <p>
                Questions about these Terms of Use can be directed to{" "}
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
