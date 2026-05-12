"use client";

import { useState } from "react";
import { LuChevronDown, LuCheck, LuLock, LuExternalLink } from "react-icons/lu";

// ─── TaskRow ───────────────────────────────────────────────────────────────────
function TaskRow({ task, onToggle }) {
  return (
    <div
      onClick={() => onToggle(task._id)}
      className={`flex items-center justify-between p-4 border transition-colors cursor-pointer group ${
        task.isCompleted
          ? "border-outline-variant/20 opacity-60"
          : "border-outline-variant/30 hover:border-primary"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-5 h-5 border-2 flex items-center justify-center shrink-0 transition-colors ${
            task.isCompleted
              ? "bg-primary border-primary"
              : "border-outline-variant group-hover:border-primary"
          }`}
        >
          {task.isCompleted && (
            <LuCheck size={12} className="text-on-primary" strokeWidth={3} />
          )}
        </div>
        <span
          className={`font-body-md text-body-md ${task.isCompleted ? "line-through text-on-surface-variant" : "text-on-surface"}`}
        >
          {task.text}
        </span>
      </div>
      {task.resource && (
        <a
          href={task.resource}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1 font-mono-detail text-mono-detail text-primary hover:underline shrink-0 ml-4"
        >
          <LuExternalLink size={14} />
          Resource
        </a>
      )}
    </div>
  );
}

// ─── DayBlock ──────────────────────────────────────────────────────────────────
function DayBlock({ day, onToggleTask }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-2">
        <span className="font-mono-label text-mono-label px-2 py-0.5 bg-surface-container-high text-on-surface-variant">
          DAY {String(day.day).padStart(2, "0")}
        </span>
        <h5 className="font-headline-md font-medium text-on-surface">
          {day.title}
        </h5>
      </div>
      <div className="space-y-2">
        {day.tasks.map((task) => (
          <TaskRow key={task._id} task={task} onToggle={onToggleTask} />
        ))}
      </div>
    </div>
  );
}

// ─── WeekAccordion ─────────────────────────────────────────────────────────────
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
