"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { MdOutlineTrendingUp } from "react-icons/md";

function ResumeStrengthRing({ score }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="bg-white border border-outline-variant rounded-lg p-8 flex flex-col items-center justify-center space-y-6 shadow-[0px_20px_40px_rgba(0,0,0,0.02)]">
      <span className="text-mono-label font-mono-label text-on-surface-variant uppercase self-start">
        Resume Strength
      </span>
      <div className="relative flex items-center justify-center">
        <svg className="w-40 h-40 transform -rotate-90">
          <circle
            className="text-surface-container"
            cx="80"
            cy="80"
            fill="transparent"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
          />
          <circle
            className="text-primary"
            cx="80"
            cy="80"
            fill="transparent"
            r={radius}
            stroke="currentColor"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeWidth="8"
          />
        </svg>
        <span className="absolute text-headline-md font-headline-md text-primary">
          {score}
        </span>
      </div>
      <span className="text-mono-detail font-mono-detail text-on-surface-variant">
        Top 5% of candidates
      </span>
    </div>
  );
}

function AnalysisPerformanceCard({ avgScore }) {
  return (
    <div className="bg-white border border-outline-variant rounded-lg p-8 flex flex-col justify-between shadow-[0px_20px_40px_rgba(0,0,0,0.02)]">
      <span className="text-mono-label font-mono-label text-on-surface-variant uppercase">
        Analysis Performance
      </span>
      <div className="py-8 text-center">
        <span className="text-display-xl font-display-xl text-primary">
          {avgScore}%
        </span>
      </div>
      <div className="flex items-center gap-2 text-on-error-container">
        <MdOutlineTrendingUp size={14} />
        <span className="text-mono-detail font-mono-detail text-on-surface-variant">
          +12% from last month
        </span>
      </div>
    </div>
  );
}

function RoadmapProgressCard({ avgProgress, completedTasks, totalTasks }) {
  return (
    <div className="bg-white border border-outline-variant rounded-lg p-8 flex flex-col justify-between shadow-[0px_20px_40px_rgba(0,0,0,0.02)]">
      <span className="text-mono-label font-mono-label text-on-surface-variant uppercase">
        Roadmap Progress
      </span>
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <span className="text-headline-md font-headline-md text-primary">
            {avgProgress}%
          </span>
          <span className="text-mono-detail font-mono-detail text-on-surface-variant">
            {completedTasks} / {totalTasks} Tasks
          </span>
        </div>
        <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-700"
            style={{ width: `${avgProgress}%` }}
          />
        </div>
      </div>
      <span className="text-mono-detail font-mono-detail text-on-surface-variant">
        On track for Q3 goals
      </span>
    </div>
  );
}

export default function OverviewHero({ data, isLoading }) {
  if (isLoading) {
    return (
      <section>
        <div className="mb-16">
          <Skeleton className="h-8 w-96 mb-4" />
          <Skeleton className="h-4 w-130" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-card-gap">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-64 rounded-lg" />
          ))}
        </div>
      </section>
    );
  }

  const resumeScore = data?.resume?.latest?.score ?? 0;
  const avgScore = data?.analysis?.avgScore ?? 0;
  const avgProgress = data?.roadmap?.avgProgress ?? 0;
  const completedTasks = data?.roadmap?.completedTasks ?? 0;
  const totalTasks = data?.roadmap?.totalTasks ?? 0;

  return (
    <section>
      <div className="mb-16">
        <h2 className="text-headline-lg font-headline-lg text-primary tracking-tight">
          Your Career Progress Dashboard
        </h2>
        <p className="text-body-md font-body-md text-on-surface-variant mt-4 max-w-2xl">
          Track your resume strength, AI analysis insights, and learning roadmap
          progress in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-card-gap">
        <ResumeStrengthRing score={resumeScore} />
        <AnalysisPerformanceCard avgScore={avgScore} />
        <RoadmapProgressCard
          avgProgress={avgProgress}
          completedTasks={completedTasks}
          totalTasks={totalTasks}
        />
      </div>
    </section>
  );
}
