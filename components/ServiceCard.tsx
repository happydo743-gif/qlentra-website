import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <div className="card-surface group relative flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-qlentra-gradient-soft text-violet transition-colors duration-300 group-hover:bg-qlentra-gradient group-hover:text-white">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        {typeof index === "number" && (
          <span className="font-display text-xs font-semibold text-navy-800/20">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-navy-800">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-navy-600">
        {description}
      </p>
    </div>
  );
}
