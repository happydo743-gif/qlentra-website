"use client";

const stages = [
  { label: "Lead", angle: -90 },
  { label: "Conversion", angle: -18 },
  { label: "Customer", angle: 54 },
  { label: "Retention", angle: 126 },
  { label: "Renewal", angle: 198 },
  { label: "Win-Back", angle: 270 },
];

/**
 * Signature hero visual: an abstract customer-lifecycle orbit built from the
 * same interlocking-ring / node language as the Qlentra mark, without
 * reproducing the logo itself. Purely decorative — aria-hidden.
 */
export default function OrbitalLifecycle() {
  const radius = 168;
  const center = 220;

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[440px] select-none"
    >
      <svg
        viewBox="0 0 440 440"
        fill="none"
        className="h-full w-full animate-orbit-slow"
        style={{ animationDuration: "70s" }}
      >
        <defs>
          <linearGradient id="ringA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6A3DFF" />
            <stop offset="100%" stopColor="#8A5CFF" />
          </linearGradient>
          <linearGradient id="ringB" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2EDCC4" />
            <stop offset="100%" stopColor="#6A3DFF" />
          </linearGradient>
        </defs>
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="url(#ringA)"
          strokeWidth="1.5"
          strokeDasharray="2 10"
          strokeLinecap="round"
        />
        <circle
          cx={center}
          cy={center}
          r={radius - 34}
          stroke="url(#ringB)"
          strokeOpacity="0.5"
          strokeWidth="1"
          strokeDasharray="1 8"
          strokeLinecap="round"
        />
      </svg>

      {/* Counter-rotating inner ring for subtle depth */}
      <svg
        viewBox="0 0 440 440"
        fill="none"
        className="absolute inset-0 h-full w-full animate-orbit-slower"
        style={{ animationDuration: "90s" }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius + 40}
          stroke="#0B0F2A"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
      </svg>

      {/* Center node */}
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-qlentra-gradient shadow-glow" />
      <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
        <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-white">
          Qlentra
        </span>
      </div>

      {/* Orbit stage nodes */}
      {stages.map((stage, i) => {
        const rad = (stage.angle * Math.PI) / 180;
        const x = center + radius * Math.cos(rad);
        const y = center + radius * Math.sin(rad);
        const leftPct = (x / 440) * 100;
        const topPct = (y / 440) * 100;
        return (
          <div
            key={stage.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
            style={{ left: `${leftPct}%`, top: `${topPct}%` }}
          >
            <div
              className="h-3 w-3 rounded-full shadow-md"
              style={{
                background:
                  i % 2 === 0
                    ? "linear-gradient(135deg, #6A3DFF, #8A5CFF)"
                    : "linear-gradient(135deg, #2EDCC4, #6A3DFF)",
              }}
            />
            <span className="whitespace-nowrap rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-navy-700 shadow-sm ring-1 ring-navy-800/5">
              {stage.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
