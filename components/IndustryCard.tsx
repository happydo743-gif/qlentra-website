import { LucideIcon, CheckCircle2 } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  outcomes: string[];
}

export default function IndustryCard({
  icon: Icon,
  title,
  description,
  outcomes,
}: IndustryCardProps) {
  return (
    <div className="card-surface flex h-full flex-col overflow-hidden">
      <div className="relative bg-navy-800 p-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet/25 blur-2xl"
        />
        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-aqua backdrop-blur">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <h3 className="relative mt-5 text-xl font-semibold text-white">
          {title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="text-sm leading-relaxed text-navy-600">{description}</p>
        <div className="mt-6 border-t border-navy-800/8 pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-navy-500">
            Key Outcomes
          </p>
          <ul className="mt-3 space-y-2.5">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2.5">
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-aqua"
                  strokeWidth={2}
                />
                <span className="text-sm text-navy-700">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
