import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/site-config";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet/10 blur-3xl"
      />
      <div className="container-qlentra relative py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/brand/qlentra-white-logo.png"
              alt="Qlentra"
              width={180}
              height={101}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm text-white/60">
              {siteConfig.descriptor}
            </p>
            <p className="mt-3 font-display text-base font-semibold text-white/90">
              {siteConfig.tagline}
            </p>
            <div className="mt-6">
              <SocialLinks variant="dark" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-aqua"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-aqua"
                >
                  <Mail size={15} />
                  {siteConfig.email}
                </a>
              </li>
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-aqua"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Sales, Retention &amp; Customer Experience Outsourcing
          </p>
        </div>
      </div>
    </footer>
  );
}
