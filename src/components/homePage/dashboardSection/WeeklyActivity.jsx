import { BAR_HEIGHTS, WEEKLY_STATS } from "@/data/dashboardPreviewData";

export default function WeeklyActivity() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/40 p-6 rounded">
      <span className="font-mono-label text-mono-label text-on-surface-variant block mb-6">
        WEEKLY ACTIVITY
      </span>

      <div className="grid grid-cols-3 gap-gutter">
        {WEEKLY_STATS.map(({ value, label }) => (
          <div key={label}>
            <span className="text-headline-md font-headline-md block">
              {value}
            </span>
            <span className="font-mono-detail text-mono-detail text-on-surface-variant">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-end gap-1 h-24">
        {BAR_HEIGHTS.map(({ height, highlight }, i) => (
          <div
            key={i}
            className={`flex-1 ${height} ${highlight ? "bg-primary" : "bg-surface-container"}`}
          />
        ))}
      </div>
    </div>
  );
}
