import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Qlentra's Privacy Policy explains what information is collected through the website, how it is used, stored, and shared, and how to exercise your privacy rights.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const lastUpdated = "August 2026";

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-qlentra">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold text-navy-800 sm:text-4xl">
            Privacy Policy
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
              This Privacy Policy is provided as a website template and
              should be reviewed by qualified legal counsel before
              publication.
            </p>
          </div>

          <div className="prose-qlentra mt-10 space-y-9">
            <PolicySection title="1. Information We Collect">
              <p>
                We collect information you provide directly to us through
                the website, including:
              </p>
              <ul>
                <li>
                  Information submitted through our contact form, such as
                  your name, company name, business email, phone number,
                  website, industry, company size, primary challenge,
                  current CRM or booking software, estimated lead or
                  customer volume, and any message you provide.
                </li>
                <li>
                  Information provided when scheduling a discovery call
                  through our booking system (Calendly), such as your name,
                  email address, and any details you choose to share as
                  part of the scheduling process.
                </li>
                <li>
                  Basic website analytics information, if analytics tools
                  are enabled, such as pages visited, general location
                  (country or region level), device and browser type, and
                  referral source.
                </li>
                <li>
                  Cookies or similar technologies, if enabled, used to
                  support core website functionality and, where applicable,
                  analytics.
                </li>
                <li>
                  Records of communications between you and Qlentra,
                  including emails and messages related to your enquiry.
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="2. How We Use Information">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to enquiries submitted through the website.</li>
                <li>Schedule and manage discovery calls and meetings.</li>
                <li>
                  Evaluate whether Qlentra&apos;s services may be a fit for
                  your business.
                </li>
                <li>
                  Operate, maintain, and improve the functionality and
                  performance of the website.
                </li>
                <li>
                  Communicate with you about your enquiry or, where
                  applicable, an active engagement with Qlentra.
                </li>
                <li>Comply with applicable legal obligations.</li>
              </ul>
            </PolicySection>

            <PolicySection title="3. How Information Is Stored">
              <p>
                Information submitted through the website is stored using
                reputable third-party service providers, which may include
                form-processing tools, email services, customer
                relationship management (CRM) systems, and scheduling
                platforms such as Calendly. We take reasonable steps to
                limit access to this information to personnel who need it
                to perform their role.
              </p>
            </PolicySection>

            <PolicySection title="4. How Information May Be Shared">
              <p>
                We do not sell personal information. We may share
                information with:
              </p>
              <ul>
                <li>
                  Service providers who help us operate the website,
                  process enquiries, manage scheduling, or provide related
                  services, subject to appropriate confidentiality
                  obligations.
                </li>
                <li>
                  Professional advisors, such as legal or accounting
                  professionals, where necessary.
                </li>
                <li>
                  Authorities where required by applicable law, regulation,
                  or legal process.
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="5. Data Retention">
              <p>
                We retain information for as long as reasonably necessary
                to respond to your enquiry, maintain business records, and
                comply with legal, accounting, or reporting obligations,
                after which it is deleted or anonymized in accordance with
                our internal practices.
              </p>
            </PolicySection>

            <PolicySection title="6. Security Practices">
              <p>
                We use reasonable administrative and technical measures
                intended to protect information submitted through the
                website. No method of transmission over the internet or
                electronic storage is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </PolicySection>

            <PolicySection title="7. Your Rights">
              <p>
                Depending on your location, you may have rights regarding
                your personal information, which may include the right to
                access, correct, or request deletion of information we
                hold about you, or to object to certain processing. To
                exercise any such rights, please contact us using the
                details below.
              </p>
            </PolicySection>

            <PolicySection title="8. Contact for Privacy Requests">
              <p>
                For questions about this Privacy Policy or to submit a
                privacy-related request, please contact us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-violet hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </PolicySection>

            <PolicySection title="9. Updates to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Any
                changes will be reflected by an updated &quot;Last
                updated&quot; date at the top of this page. We encourage
                you to review this page periodically.
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
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-navy-600 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
