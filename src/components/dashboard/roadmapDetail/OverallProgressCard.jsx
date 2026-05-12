import { RadialProgress, SectionLabel, WeeklyProgressBar } from "./ui";

export function OverallProgressCard({ percentage, weeks }) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant p-8 shadow-sm rounded">
      <SectionLabel>Overall Progress</SectionLabel>
      <div className="flex justify-center py-4">
        <RadialProgress percentage={percentage} size={180} stroke={12} />
      </div>
      <div className="space-y-4 pt-6 border-t border-outline-variant/20 mt-6">
        {weeks.map((w) => (
          <WeeklyProgressBar
            key={w.week}
            label={`Week ${w.week}`}
            value={w.progress}
            locked={w.locked}
          />
        ))}
      </div>
    </div>
  );
}
