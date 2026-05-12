"use client";

import { useState } from "react";
import { LuChevronDown, LuCheck, LuLock } from "react-icons/lu";
import { DayBlock } from "./DayBlock";

export default function WeekAccordion({
  week,
  defaultOpen = false,
  onToggleTask,
}) {
  const [open, setOpen] = useState(defaultOpen);

  const allTasks = week.days.flatMap((d) => d.tasks);
  const completed = allTasks.filter((t) => t.isCompleted).length;
  const total = allTasks.length;
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  const isLocked = total === 0;
  const isCompleted = total > 0 && completed === total;
  const isActive = !isLocked && !isCompleted;

  return (
    <div
      className={`border overflow-hidden transition-all rounded ${
        isLocked
          ? "border-outline-variant/20 opacity-50"
          : isActive
            ? "border-primary/20"
            : "border-outline-variant/30 opacity-70 hover:opacity-100"
      }`}
    >
      {/* Header */}
      <button
        disabled={isLocked}
        onClick={() => !isLocked && setOpen((o) => !o)}
        className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
          isLocked
            ? "cursor-not-allowed"
            : "hover:bg-surface-container-low cursor-pointer"
        } ${isActive && open ? "bg-surface-container-low border-b border-outline-variant/20" : ""}`}
      >
        <div className="flex items-center gap-4">
          {/* Week badge */}
          <div
            className={`w-10 h-10 flex items-center justify-center font-bold font-mono-label shrink-0 rounded ${
              isCompleted
                ? "bg-primary text-on-primary"
                : isActive
                  ? "border-2 border-primary text-primary"
                  : "border border-outline-variant text-on-surface-variant"
            }`}
          >
            {isCompleted ? (
              <LuCheck size={18} strokeWidth={3} />
            ) : (
              `W${week.week}`
            )}
          </div>

          <div>
            <p
              className={`font-mono-label text-mono-label uppercase ${isActive ? "text-primary" : "text-on-surface-variant"}`}
            >
              Week {week.week} —{" "}
              {isLocked
                ? "Upcoming"
                : isCompleted
                  ? "Completed"
                  : "In Progress"}
            </p>
            <h4 className="font-headline-md text-xl font-semibold text-on-surface">
              {week.focus}
            </h4>
            {!isLocked && (
              <div className="flex items-center gap-3 mt-1.5">
                <div className="w-32 h-1 bg-surface-container-high overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="font-mono-detail text-mono-detail text-on-surface-variant">
                  {progress}% Complete
                </span>
              </div>
            )}
          </div>
        </div>

        {isLocked ? (
          <LuLock size={18} className="text-outline-variant shrink-0" />
        ) : (
          <LuChevronDown
            size={18}
            className={`text-on-surface-variant shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        )}
      </button>

      {/* Body — smooth accordion */}
      {!isLocked && (
        <div
          className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="overflow-hidden">
            <div className="p-8 space-y-8">
              {week.days.map((day) => (
                <DayBlock key={day.day} day={day} onToggleTask={onToggleTask} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
