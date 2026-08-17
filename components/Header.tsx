"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-config";
import BookingCTA from "@/components/BookingCTA";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;
  // backdrop-blur (a CSS "filter") on this element would create a new
  // containing block for any fixed-position descendant, which breaks the
  // full-screen mobile menu below (nested inside <header>) by making it
  // position itself relative to this 76px bar instead of the viewport.
  // Only apply the blur when the menu itself isn't open.
  const showBlur = scrolled && !mobileOpen;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        solid
          ? `bg-white/90 shadow-[0_1px_0_0_rgba(11,15,42,0.06)] ${
              showBlur ? "backdrop-blur-md" : ""
            }`
          : "bg-transparent"
      }`}
    >
      <div className="container-qlentra flex h-[76px] items-center justify-between">
        <Link
          href="/"
          className="relative z-10 flex items-center gap-2"
          aria-label="Qlentra home"
        >
          <Image
            src="/brand/qlentra-horizontal-logo.png"
            alt="Qlentra"
            width={168}
            height={38}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-navy-700 transition-colors hover:text-violet"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BookingCTA size="sm" label="Book a Discovery Call" />
        </div>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-navy-800 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile full-screen menu — only mounted in the DOM while open, so it
          can never render in a partially-transparent in-between state. */}
      {mobileOpen && (
        <div
          className="fixed inset-x-0 bottom-0 top-[76px] z-40 flex flex-col overflow-y-auto bg-white lg:hidden"
          style={{ backgroundColor: "#ffffff", opacity: 1 }}
        >
          <nav
            className="container-qlentra flex flex-1 flex-col gap-1 bg-white pt-6"
            aria-label="Mobile"
            style={{ backgroundColor: "#ffffff" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="border-b border-navy-800/8 py-4 text-lg font-semibold text-navy-800"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 pb-8">
              <BookingCTA size="md" label="Book a Discovery Call" fullWidth />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
