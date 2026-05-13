"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { MdOutlineDescription } from "react-icons/md";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

export default function ResumeModule({ resume }) {
  const total = resume?.total ?? 0;
  const completed = resume?.completed ?? 0;
  const processing = resume?.processing ?? 0;
  const failed = resume?.failed ?? 0;
  const pending = Math.max(total - completed - processing - failed, 0);
  const latest = resume?.latest;
  const topSkills = resume?.topSkills ?? [];

  const maxCount = Math.max(...topSkills.map((s) => s.count), 1);
  const skillChartData = topSkills.map((s) => ({
    skill: s.skill,
    pct: Math.round((s.count / maxCount) * 100),
  }));

  const chartConfig = {
    pct: {
      label: "Frequency",
      color: "var(--color-primary)",
    },
  };

  const pieData = [
    { label: "Done", value: completed, color: "var(--color-primary)" },
    { label: "Proc", value: processing, color: "var(--color-outline)" },
    { label: "Fail", value: failed, color: "var(--color-error)" },
    { label: "Pend", value: pending, color: "var(--color-surface-dim)" },
  ];

  let offset = 0;

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-headline-md font-headline-md text-primary">
            Resumes
          </h3>
          <p className="text-mono-detail font-mono-detail text-on-surface-variant">
            {total} total documents
          </p>
        </div>
        <MdOutlineDescription className="text-on-surface-variant" />
      </div>

      {/* Top Skills Bar Chart */}
      <div className="space-y-3">
        <p className="text-mono-label font-mono-label text-on-surface-variant uppercase text-[10px] mb-2">
          Top Skills Frequency
        </p>
        {skillChartData.length > 0 ? (
          <ChartContainer config={chartConfig} className="h-32 w-full">
            <BarChart
              data={skillChartData}
              margin={{ top: 4, right: 0, left: -28, bottom: 0 }}
            >
              <XAxis
                dataKey="skill"
                tick={{ fontSize: 9, fontFamily: "var(--font-mono)" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 9 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
                tickFormatter={(v) => `${v}%`}
              />
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
                      opacity={1 - index * 0.15}
                    />
                  );
                }}
              />
            </BarChart>
          </ChartContainer>
        ) : (
          <p className="text-mono-detail font-mono-detail text-on-surface-variant text-[11px]">
            No skill data available.
          </p>
        )}
      </div>

      {/* Latest Resume */}
      {latest && (
        <div className="p-4 bg-surface-container-low border border-outline-variant/30 rounded flex justify-between items-center ring-1 ring-primary/5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-primary text-on-primary text-[10px] px-2 py-0.5 rounded uppercase font-bold">
                Latest
              </span>
              <span className="text-body-md font-bold">{latest.title}</span>
            </div>
            <span className="text-mono-detail font-mono-detail text-on-surface-variant">
              {latest.skillsCount} skills · {latest.experienceCount} exp ·{" "}
              {latest.projectsCount} projects
            </span>
          </div>
          <span className="text-headline-md font-bold text-primary">
            {latest.score}
          </span>
        </div>
      )}

      {/* Processing Status Donut */}
      <div className="pt-4 border-t border-outline-variant/30">
        <p className="text-mono-label font-mono-label text-on-surface-variant uppercase text-[10px] mb-3">
          Resume Processing Status
        </p>
        <div className="flex items-center gap-4">
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 32 32">
            <circle cx="16" cy="16" fill="#f1edec" r="16" />
            {pieData.map((seg, i) => {
              const dashArray = total > 0 ? (seg.value / total) * 100 : 0;
              const dashOffset = -offset;
              offset += dashArray;
              return (
                <circle
                  key={i}
                  cx="16"
                  cy="16"
                  fill="transparent"
                  r="16"
                  stroke={seg.color}
                  strokeDasharray={`${dashArray} 100`}
                  strokeDashoffset={dashOffset}
                  strokeWidth="32"
                />
              );
            })}
          </svg>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px] font-mono-detail">
            {pieData.map((seg) => (
              <div key={seg.label} className="flex items-center gap-1">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: seg.color }}
                />
                <span>
                  {seg.label} ({seg.value})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
