import RoadmapStats from "./RoadmapStats";
import { OverallProgressCard } from "./OverallProgressCard";
import { AiInsightCard } from "./AiInsightCard";
import { SessionStatsCard } from "./SessionStatsCard";

export default function RoadmapDetailSidebar({ percentage, weeks, data }) {
  return (
    <aside className="col-span-12 lg:col-span-4 space-y-card-gap sticky top-24">
      <RoadmapStats
        duration={weeks.length}
        totalTasks={data.task}
        days={data.days}
      />
      <OverallProgressCard percentage={percentage} weeks={weeks} />
      <AiInsightCard />
      <SessionStatsCard />
    </aside>
  );
}
