import { Cpu, Target, ShieldCheck, Layers } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { whyQlentra } from "@/lib/content";

const icons = [Cpu, Target, ShieldCheck, Layers];

export default function WhySection() {
  return (
    <section className="section-padding bg-gray-soft/50">
      <div className="container-qlentra">
        <SectionHeading
          eyebrow="Why Qlentra"
          title="More Than an Outsourced Call Center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyQlentra.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="text-center sm:text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-violet shadow-card sm:mx-0">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-navy-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
