// Shared primitives for the Roadmap Detail page

// ─── RadialProgress ────────────────────────────────────────────────────────────
export function RadialProgress({ percentage, size = 160, stroke = 12 }) {
  const r = (size - stroke * 2) / 2;
  const cx = size / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - percentage / 100);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={cx}
          cy={cx}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-surface-container-high"
        />
        <circle
          cx={cx}
          cy={cx}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="text-primary transition-all duration-700"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-headline-lg text-3xl leading-none">
          {percentage}%
        </span>
        <span className="font-mono-label text-[10px] text-on-surface-variant uppercase mt-1">
          Complete
        </span>
      </div>
    </div>
  );
}

// ─── WeeklyProgressBar ─────────────────────────────────────────────────────────
export function WeeklyProgressBar({ label, value, locked = false }) {
  return (
    <div className={`space-y-1.5 ${locked ? "opacity-40" : ""}`}>
      <div className="flex justify-between font-mono-detail text-[11px]">
        <span className="uppercase">{label}</span>
        <span
          className={value > 0 ? "text-primary" : "text-on-surface-variant"}
        >
          {value}%
        </span>
      </div>
      <div className="w-full h-1.5 bg-surface-container overflow-hidden">
        <div
          className="bg-primary h-full transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

// ─── StatCell ──────────────────────────────────────────────────────────────────
export function StatCell({ value, label }) {
  return (
    <div className="text-center py-4 border border-outline-variant/30">
      <p className="font-headline-md text-2xl font-semibold">{value}</p>
      <p className="font-mono-detail text-[10px] text-on-surface-variant uppercase mt-1">
        {label}
      </p>
    </div>
  );
}

// ─── SectionLabel ──────────────────────────────────────────────────────────────
export function SectionLabel({ children }) {
  return (
    <span className="font-mono-label text-mono-label text-on-surface-variant uppercase block mb-6">
      {children}
    </span>
  );
}
