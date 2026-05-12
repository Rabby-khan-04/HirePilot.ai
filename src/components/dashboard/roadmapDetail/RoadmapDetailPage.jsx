"use client";

import { useState } from "react";
import Link from "next/link";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import RoadmapDetailHeader from "./RoadmapDetailHeader";
import WeekAccordion from "./WeekAccordion";
import RoadmapDetailSidebar from "./RoadmapDetailSidebar";
import { MOCK_ROADMAP } from "@/data/roadmapDetailData";
import RoadmapOverviewCard from "./RoadmapOverviewCard";

// Derive per-week progress for sidebar
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
  // TODO: replace MOCK_ROADMAP with real data from API / params
  const [roadmap, setRoadmap] = useState(MOCK_ROADMAP);
  console.log(roadmap);

  const handleToggleTask = (taskId) => {
    setRoadmap((prev) => {
      const updated = {
        ...prev,
        roadmap: prev.roadmap.map((week) => ({
          ...week,
          days: week.days.map((day) => ({
            ...day,
            tasks: day.tasks.map((task) =>
              task._id === taskId
                ? { ...task, isCompleted: !task.isCompleted }
                : task,
            ),
          })),
        })),
      };

      // Recalculate progress
      const allTasks = updated.roadmap.flatMap((w) =>
        w.days.flatMap((d) => d.tasks),
      );
      const completedTasks = allTasks.filter((t) => t.isCompleted).length;
      updated.progress = {
        totalTasks: allTasks.length,
        completedTasks,
        percentage: Math.round((completedTasks / allTasks.length) * 100),
      };

      // TODO: persist to API
      // await roadmapService.toggleTask(roadmap._id, taskId);

      return updated;
    });
  };

  const weekProgress = deriveWeekProgress(roadmap.roadmap);

  return (
    <div className="max-w-7xl mx-auto px-margin-page pt-10 pb-section-padding">
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

      <RoadmapDetailHeader
        title={roadmap.title}
        description="Personalized AI-generated learning roadmap based on your career analysis and skill gaps."
      />

      <div className="grid grid-cols-12 gap-gutter items-start">
        {/* Main content */}
        <div className="col-span-12 lg:col-span-8 space-y-card-gap">
          <RoadmapOverviewCard
            duration={roadmap.duration}
            progress={roadmap.progress}
          />

          {/* Curriculum timeline */}
          <div className="pt-4">
            <span className="font-mono-label text-mono-label text-on-surface-variant uppercase block mb-6">
              Curriculum Timeline
            </span>
            <div className="space-y-4">
              {roadmap.roadmap.map((week, i) => (
                <WeekAccordion
                  key={week.week}
                  week={week}
                  defaultOpen={i === 1} // open the active week by default
                  onToggleTask={handleToggleTask}
                />
              ))}
            </div>
          </div>

          {/* Footer actions */}
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

        {/* Sidebar */}
        <RoadmapDetailSidebar
          percentage={roadmap.progress.percentage}
          weeks={weekProgress}
        />
      </div>
    </div>
  );
}
