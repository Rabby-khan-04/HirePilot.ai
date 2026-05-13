"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { MdOutlineQueryStats } from "react-icons/md";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

export default function AnalysisModule({ analysis }) {
  const total = analysis?.total ?? 0;
  const avgScore = analysis?.avgScore ?? 0;
  const bestScore = analysis?.bestScore ?? 0;
  const topMatchedSkills = analysis?.topMatchedSkills ?? [];
  const topSkillGaps = analysis?.topSkillGaps ?? [];
  const bestAnalysis = analysis?.bestAnalysis;

  const highGaps = topSkillGaps.filter((g) => g.severity === "high");
  const highGapPct =
    topSkillGaps.length > 0
      ? Math.round((highGaps.length / topSkillGaps.length) * 100)
      : 0;
  const lowPct = 100 - highGapPct;

  const maxCount = Math.max(...topMatchedSkills.map((s) => s.count), 1);
  const chartData = topMatchedSkills.map((s) => ({
    skill: s.skill,
    pct: Math.round((s.count / maxCount) * 100),
  }));

  const chartConfig = {
    pct: {
      label: "Match",
      color: "var(--color-primary)",
    },
  };

  return (
    <div className="bg-white border border-outline-variant rounded-lg p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-headline-md font-headline-md text-primary">
            Analyses
          </h3>
          <p className="text-mono-detail font-mono-detail text-on-surface-variant">
            {total} sessions run
          </p>
        </div>

        <MdOutlineQueryStats className="text-on-surface-variant" />
      </div>

      {/* Top Matched Skills Bar Chart */}
      <div>
        <p className="text-mono-label font-mono-label text-on-surface-variant uppercase text-[10px] mb-2">
          Top Matched Skills
        </p>
        {chartData.length > 0 ? (
          <ChartContainer config={chartConfig} className="h-24 w-full">
            <BarChart
              data={chartData}
              margin={{ top: 0, right: 0, left: -32, bottom: 0 }}
            >
              <XAxis
                dataKey="skill"
                tick={{ fontSize: 8, fontFamily: "var(--font-mono)" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide domain={[0, 100]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="pct"
                radius={[3, 3, 0, 0]}
                shape={(props) => {
                  const { x, y, width, height, index } = props;
                  return (
                    <rect
                      x={x}
                      y={y}
                      width={width}
                      height={height}
                      rx={3}
                      ry={3}
                      fill="var(--color-primary)"
                      opacity={
                        0.3 + (index / Math.max(chartData.length, 1)) * 0.7
                      }
                    />
                  );
                }}
              />
            </BarChart>
          </ChartContainer>
        ) : (
          <p className="text-mono-detail font-mono-detail text-on-surface-variant text-[11px]">
            No match data yet.
          </p>
        )}
      </div>

      {/* Score Stats */}
      <div className="space-y-3 pt-2">
        <div className="flex justify-between border-b border-outline-variant pb-2">
          <span className="text-body-md text-on-surface-variant">
            Average Score
          </span>
          <span className="text-body-md font-bold">{avgScore}%</span>
        </div>
        <div className="flex justify-between border-b border-outline-variant pb-2">
          <span className="text-body-md text-on-surface-variant">
            Best Score
          </span>
          <span className="text-body-md font-bold text-primary">
            {bestScore}%
          </span>
        </div>
        {bestAnalysis && (
          <div className="flex justify-between border-b border-outline-variant pb-2">
            <span className="text-body-md text-on-surface-variant">
              Best Match
            </span>
            <span className="text-body-md font-bold text-primary truncate max-w-40">
              {bestAnalysis.jobTitle}
            </span>
          </div>
        )}
      </div>

      {/* Gap Severity */}
      <div className="flex items-center justify-between py-4 border-y border-outline-variant/30">
        <div className="space-y-1">
          <p className="text-mono-label font-mono-label text-on-surface-variant uppercase text-[10px]">
            Gap Severity
          </p>
          <div className="text-[11px] font-mono-detail">
            <span className="text-error font-bold">
              High: {highGaps.length > 0 ? highGaps[0].skill : "—"}
            </span>
            <span className="text-on-surface-variant mx-2">|</span>
            <span>Low: {lowPct}%</span>
          </div>
        </div>
        <div className="relative w-12 h-12">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 32 32"
          >
            <circle cx="16" cy="16" fill="var(--color-error)" r="16" />
            <circle
              cx="16"
              cy="16"
              fill="transparent"
              r="16"
              stroke="var(--color-surface-container)"
              strokeDasharray={`${lowPct} 100`}
              strokeDashoffset="0"
              strokeWidth="32"
            />
          </svg>
        </div>
      </div>

      {/* AI Insight */}
      <div className="p-4 bg-tertiary-fixed text-on-tertiary-fixed rounded border border-outline-variant">
        <p className="text-mono-label font-mono-label uppercase text-[10px] mb-2 opacity-70">
          AI Insight
        </p>
        <p className="text-body-md leading-relaxed italic">
          {`"`}
          {topMatchedSkills[0]
            ? `Your strongest skill pattern is ${topMatchedSkills[0].skill} consistency.`
            : "Complete more analyses to unlock insights."}
          {`"`}
        </p>
      </div>
    </div>
  );
}
