import type { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";
import OrbitalLifecycle from "@/components/OrbitalLifecycle";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-navy-800">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-qlentra-radial"
      />
      <div className="container-qlentra relative grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="text-center lg:text-left">
          <span className="eyebrow border-white/15 bg-white/5 text-aqua">
            404
          </span>
          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            You&apos;re Off the Customer Journey.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/70 lg:mx-0">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved.
          </p>
          <div className="mt-9 flex justify-center lg:justify-start">
            <Link href="/" className="btn-primary px-8 py-4 text-base">
              <Home size={16} />
              Return Home
            </Link>
          </div>
        </div>
        <div className="flex justify-center opacity-80">
          <OrbitalLifecycle />
        </div>
      </div>
    </section>
  );
}
