"use client";

import {
  MdLightbulbOutline,
  MdOutlineVerified,
  MdTrendingUp,
} from "react-icons/md";

const INSIGHT_ICONS = [MdOutlineVerified, MdLightbulbOutline, MdTrendingUp];
const INSIGHT_ICON_COLORS = ["text-primary", "text-error", "text-primary"];

export default function OverviewInsights({ data }) {
  const strength = data?.resume?.latest?.insights?.strength;
  const improvement = data?.resume?.latest?.insights?.improvement;
  const topGap = data?.analysis?.topSkillGaps?.[0]?.skill;
  const roadmapProgress = data?.roadmap?.avgProgress ?? 0;

  const insights = [
    strength ||
      `Frontend skills are strong and consistent across all resumes, positioning you in the top tier for Lead roles.`,
    improvement ||
      `${topGap ? `${topGap} and cloud` : "Cloud"} infrastructure skills are the main improvement areas to unlock Architect-level positions.`,
    `Learning roadmap progress is at ${roadmapProgress}%, improving your backend readiness. Consider a "Fullstack" tag for next update.`,
  ];

  return (
    <section className="py-16 border-y border-outline-variant">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 className="text-headline-md font-headline-md text-primary">
            AI Career Insights
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant mt-2">
            Strategic analysis of your professional trajectory based on current
            market data.
          </p>
        </div>
        <div className="md:w-2/3 space-y-6">
          {insights.map((insight, i) => {
            const Icon = INSIGHT_ICONS[i];
            return (
              <div
                key={i}
                className="flex gap-4 p-6 bg-surface rounded-lg hover:bg-surface-container transition-colors border border-outline-variant/30"
              >
                <Icon
                  className={`text-xl shrink-0 mt-0.5 ${INSIGHT_ICON_COLORS[i]}`}
                />
                <p className="text-body-md text-primary">{insight}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
