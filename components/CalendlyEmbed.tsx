"use client";

import { siteConfig } from "@/lib/site-config";

/**
 * Inline Calendly embed. Uses Calendly's standard inline widget iframe so no
 * extra script dependency is required. Meeting location (e.g. Google Meet)
 * is configured directly in the Calendly event settings, not here.
 */
export default function CalendlyEmbed() {
  const embedUrl = `${siteConfig.calendlyUrl}?embed_domain=qlentra&embed_type=Inline`;

  return (
    <div className="card-surface overflow-hidden">
      <iframe
        title="Book a discovery call with Qlentra"
        src={embedUrl}
        className="h-[720px] w-full border-0"
        loading="lazy"
      />
    </div>
  );
}
