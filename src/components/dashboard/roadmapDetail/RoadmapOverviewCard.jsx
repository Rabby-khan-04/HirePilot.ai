import { RadialProgress, SectionLabel } from "./ui";

export default function RoadmapOverviewCard({ duration, progress }) {
  const { totalTasks, completedTasks, percentage } = progress;

  return (
    <div className="bg-surface-container-lowest border border-outline-variant p-8 flex items-center justify-between shadow-sm rounded">
      <div>
        <SectionLabel>Active Roadmap Overview</SectionLabel>
        <div className="flex gap-12 mt-2">
          <div>
            <p className="font-mono-detail text-mono-detail text-on-surface-variant mb-1">
              Duration
            </p>
            <p className="font-headline-md text-headline-md">{duration}</p>
          </div>
          <div>
            <p className="font-mono-detail text-mono-detail text-on-surface-variant mb-1">
              Task Status
            </p>
            <p className="font-headline-md text-headline-md">
              {completedTasks} / {totalTasks}
            </p>
          </div>
        </div>
      </div>
      <RadialProgress percentage={percentage} size={128} stroke={8} />
    </div>
  );
}
