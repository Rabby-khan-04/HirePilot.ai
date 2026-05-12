import { SESSION_STATS } from "@/data/roadmapDetailData";
import { SectionLabel } from "./ui";

export function SessionStatsCard() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant p-8 shadow-sm rounded">
      <SectionLabel>Session Stats</SectionLabel>
      <div className="space-y-4">
        {SESSION_STATS.map(({ label, value, highlight }) => (
          <div key={label} className="flex items-center justify-between">
            <span className="font-body-md text-on-surface-variant">
              {label}
            </span>
            <span
              className={`font-mono-detail font-medium ${highlight ? "text-primary" : "text-on-surface"}`}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
