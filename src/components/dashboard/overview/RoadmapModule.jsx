"use client";

import Link from "next/link";
import { MdOutlineMap } from "react-icons/md";

export default function RoadmapModule({ roadmap }) {
  const total = roadmap?.total ?? 0;
  const avgProgress = roadmap?.avgProgress ?? 0;
  const completedTasks = roadmap?.completedTasks ?? 0;
  const totalTasks = roadmap?.totalTasks ?? 0;
  const remainingTasks = totalTasks - completedTasks;
  const activeRoadmaps = roadmap?.active ?? [];
  const primaryActive = activeRoadmaps[0];

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-headline-md font-headline-md text-primary">
            Roadmaps
          </h3>
          <p className="text-mono-detail font-mono-detail text-on-surface-variant">
            {total} active paths
          </p>
        </div>

        <MdOutlineMap className="text-on-surface-variant" />
      </div>

      {/* Donut Progress */}
      <div className="flex items-center gap-6 py-2">
        <div className="relative w-20 h-20">
          <svg className="w-20 h-20 transform -rotate-90 filter drop-shadow-sm">
            <circle
              className="text-surface-container"
              cx="40"
              cy="40"
              fill="transparent"
              r="34"
              stroke="currentColor"
              strokeWidth="4"
            />
            <circle
              className="text-primary"
              cx="40"
              cy="40"
              fill="transparent"
              r="34"
              stroke="currentColor"
              strokeDasharray={`${2 * Math.PI * 34}`}
              strokeDashoffset={`${2 * Math.PI * 34 * (1 - avgProgress / 100)}`}
              strokeLinecap="round"
              strokeWidth="6"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[14px] font-bold font-mono-detail leading-none">
              {avgProgress}%
            </span>
            <span className="text-[7px] uppercase font-mono-label opacity-50 mt-0.5">
              Done
            </span>
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-mono-label font-mono-label text-on-surface-variant uppercase text-[10px]">
            Learning Progress
          </p>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[11px] font-mono-detail">
                {completedTasks} Completed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-surface-container" />
              <span className="text-[11px] font-mono-detail text-on-surface-variant">
                {remainingTasks} Remaining
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Active Roadmap Card */}
      {primaryActive && (
        <div className="p-5 border border-primary/20 rounded-lg bg-surface-container-lowest relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-mono-label font-mono-label text-on-surface-variant uppercase text-[10px] mb-1">
              Active Roadmap
            </p>
            <h4 className="text-body-md font-bold text-primary mb-4">
              {primaryActive.title}
            </h4>
            <div className="flex items-center gap-4 text-mono-detail font-mono-detail text-on-surface-variant">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  schedule
                </span>
                {primaryActive.duration}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  checklist
                </span>
                {primaryActive.progress.completedTasks}/
                {primaryActive.progress.totalTasks}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Active Paths Comparison */}
      <div className="space-y-3 pt-2">
        <p className="text-mono-label font-mono-label text-on-surface-variant uppercase text-[10px]">
          Active Paths Comparison
        </p>
        <div className="space-y-2">
          {activeRoadmaps.map((rm) => (
            <div key={rm.title} className="flex items-center gap-3">
              <span className="text-[9px] font-mono-detail w-16 truncate">
                {rm.category}
              </span>
              <div className="flex-1 bg-surface-container h-1 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full transition-all duration-700"
                  style={{ width: `${rm.progress.percentage}%` }}
                />
              </div>
              <span className="text-[9px] font-mono-detail">
                {rm.progress.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* View All */}
      <div className="text-center">
        <Link
          href="/dashboard/roadmaps"
          className="text-mono-detail font-mono-detail text-on-surface-variant hover:text-primary underline transition-colors"
        >
          View all roadmaps
        </Link>
      </div>
    </div>
  );
}
