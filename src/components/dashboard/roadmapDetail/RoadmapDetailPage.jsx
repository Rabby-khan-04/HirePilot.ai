"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import RoadmapDetailHeader from "./RoadmapDetailHeader";
import WeekAccordion from "./WeekAccordion";
import RoadmapDetailSidebar from "./RoadmapDetailSidebar";
import RoadmapOverviewCard from "./RoadmapOverviewCard";
import { useRoadmapDetail } from "@/hooks/roadmaps/useRoadmapDetail";
import { useToggleTask } from "@/hooks/roadmaps/useToggleTask";
import { DetailSkeleton } from "@/components/shimmer/roadmapDetails/DetailSkeleton";
import { ErrorState } from "./ErrorState";

function deriveWeekProgress(weeks) {
  return weeks.map((w) => {
    const all = w.days.flatMap((d) => d.tasks);
    const done = all.filter((t) => t.isCompleted).length;
    return {
      week: w.week,
      progress: all.length > 0 ? Math.round((done / all.length) * 100) : 0,
      locked: all.length === 0,
    };
  });
}

export default function RoadmapDetailPage() {
  const { roadmapId } = useParams();
  const { data: roadmap, isLoading, isError } = useRoadmapDetail(roadmapId);
  const { mutate: toggleTask } = useToggleTask(roadmapId);

  const handleToggleTask = (taskId) => {
    toggleTask(taskId);
  };

  const derivedData = () => {
    let days = 0;

    roadmap.roadmap.forEach((w) => {
      days += w.days.length;
    });

    return { days, tasks: roadmap.progress.totalTasks };
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-margin-page pt-10 pb-section-padding">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-6 font-mono-label text-mono-label uppercase text-on-surface-variant">
        <Link
          href="/dashboard"
          className="hover:text-primary transition-colors"
        >
          Dashboard
        </Link>
        <span className="text-outline-variant">/</span>
        <Link
          href="/dashboard/roadmaps"
          className="hover:text-primary transition-colors"
        >
          Roadmaps
        </Link>
        <span className="text-outline-variant">/</span>
        <span className="text-primary font-bold">Roadmap Details</span>
      </nav>

      {isLoading && <DetailSkeleton />}
      {isError && <ErrorState />}

      {!isLoading && !isError && roadmap && (
        <>
          <RoadmapDetailHeader
            title={roadmap.title}
            description={roadmap.description}
          />

          <div className="grid grid-cols-12 gap-gutter items-start">
            <div className="col-span-12 lg:col-span-8 space-y-card-gap">
              <RoadmapOverviewCard
                duration={roadmap.duration}
                progress={roadmap.progress}
              />

              <div className="pt-4">
                <span className="font-mono-label text-mono-label text-on-surface-variant uppercase block mb-6">
                  Curriculum Timeline
                </span>
                <div className="space-y-4">
                  {roadmap.roadmap.map((week, i) => (
                    <WeekAccordion
                      key={week.week}
                      week={week}
                      defaultOpen={i === 1}
                      onToggleTask={handleToggleTask}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center py-12 border-t border-outline-variant/30">
                <Link
                  href="/dashboard/roadmaps"
                  className="flex items-center gap-2 font-mono-label text-mono-label text-on-surface-variant hover:text-primary transition-colors group"
                >
                  <LuArrowLeft
                    size={14}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                  Back to Roadmaps
                </Link>
                <Link
                  href="/dashboard/career-analysis"
                  className="flex items-center gap-2 font-mono-label text-mono-label text-on-surface-variant hover:text-primary transition-colors group"
                >
                  Continue Career Analysis
                  <LuArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            <RoadmapDetailSidebar
              percentage={roadmap.progress.percentage}
              weeks={deriveWeekProgress(roadmap.roadmap)}
              data={derivedData()}
            />
          </div>
        </>
      )}
    </div>
  );
}
