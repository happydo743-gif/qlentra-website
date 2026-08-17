import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { provisions } from "@/lib/content";

export default function ProvidesSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-navy-800">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-violet/15 blur-3xl"
      />
      <div className="container-qlentra relative">
        <SectionHeading
          eyebrow="What's Included"
          title="Everything Required to Launch &amp; Manage the Campaign"
          light
        />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {provisions.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
            >
              <CheckCircle2 size={18} className="shrink-0 text-aqua" />
              <span className="text-sm font-medium text-white/85">{item}</span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-white/50">
          Clients provide authorized customer data, approved offers, service
          policies, secure payment links, and required product training.
        </p>
      </div>
    </section>
  );
}
