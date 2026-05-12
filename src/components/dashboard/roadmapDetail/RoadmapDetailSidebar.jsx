import { LuArrowUpRight, LuSparkles } from "react-icons/lu";
import { RadialProgress, WeeklyProgressBar, SectionLabel } from "./ui";
import { AI_INSIGHT, SESSION_STATS } from "@/data/roadmapDetailData";

// ─── OverallProgressCard ───────────────────────────────────────────────────────
function OverallProgressCard({ percentage, weeks }) {
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

// ─── AiInsightCard ─────────────────────────────────────────────────────────────
function AiInsightCard() {
  return (
    <div className="bg-primary text-on-primary p-8 shadow-sm relative overflow-hidden group rounded">
      <LuSparkles
        size={96}
        className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700"
      />
      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-2">
          <LuSparkles size={16} />
          <span className="font-mono-label text-mono-label">AI Motivator</span>
        </div>
        <p className="font-headline-md text-xl leading-relaxed">
          {`"`}
          {AI_INSIGHT.quote}
          {`"`}
        </p>
        <button className="flex items-center gap-2 font-mono-label text-mono-label text-on-primary/70 hover:text-on-primary transition-colors group/btn">
          <span>{AI_INSIGHT.cta.toUpperCase()}</span>
          <LuArrowUpRight
            size={14}
            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
          />
        </button>
      </div>
    </div>
  );
}

// ─── SessionStatsCard ──────────────────────────────────────────────────────────
function SessionStatsCard() {
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

// ─── RoadmapDetailSidebar ──────────────────────────────────────────────────────
export default function RoadmapDetailSidebar({ percentage, weeks }) {
  return (
    <aside className="col-span-12 lg:col-span-4 space-y-card-gap sticky top-24">
      <OverallProgressCard percentage={percentage} weeks={weeks} />
      <AiInsightCard />
      <SessionStatsCard />
    </aside>
  );
}
