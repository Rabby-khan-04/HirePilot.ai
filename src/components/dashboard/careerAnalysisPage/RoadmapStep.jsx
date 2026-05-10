"use client";

import { useState } from "react";
import { AIStatusLoader, ProgressBar, WorkflowActions } from "./ui";
import { useWorkflowStore } from "@/store/workflowStore";
import { MdOutlineCelebration } from "react-icons/md";
// ─── RoadmapTask ───────────────────────────────────────────────────────────────
function RoadmapTask({ task, onToggle }) {
  return (
    <div
      className={`flex items-start gap-4 p-4 rounded-lg border transition-all ${
        task.isCompleted
          ? "bg-surface-container-low border-primary/20 opacity-70"
          : "bg-surface border-outline-variant/30 hover:border-primary/30"
      }`}
    >
      <button
        onClick={() => onToggle(task._id)}
        className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-all ${
          task.isCompleted
            ? "bg-primary border-primary text-on-primary"
            : "border-outline-variant hover:border-primary"
        }`}
      >
        {task.isCompleted && (
          <span className="material-symbols-outlined text-[14px]">check</span>
        )}
      </button>
      <div className="flex-1 space-y-1">
        <p
          className={`text-body-md ${task.isCompleted ? "line-through text-on-surface-variant" : "text-on-surface"}`}
        >
          {task.text}
        </p>
        {task.resource && (
          <a
            href={task.resource}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-detail text-mono-detail text-primary hover:underline flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[14px]">
              open_in_new
            </span>
            Resource
          </a>
        )}
      </div>
    </div>
  );
}

// ─── RoadmapWeekAccordion ──────────────────────────────────────────────────────
function RoadmapWeekAccordion({ week, onToggleTask }) {
  const [open, setOpen] = useState(week.week === 1);
  const totalTasks = week.days.flatMap((d) => d.tasks).length;
  const completedTasks = week.days
    .flatMap((d) => d.tasks)
    .filter((t) => t.isCompleted).length;

  return (
    <div className="border border-outline-variant/30 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between p-6 hover:bg-surface-container-low transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="font-mono-label text-mono-label text-primary">
              {week.week}
            </span>
          </div>
          <div className="text-left">
            <p className="font-headline-md text-headline-md text-on-surface">
              {week.title}
            </p>
            <p className="font-mono-detail text-mono-detail text-on-surface-variant">
              {completedTasks}/{totalTasks} tasks completed
            </p>
          </div>
        </div>
        <span
          className="material-symbols-outlined text-on-surface-variant transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }}
        >
          expand_more
        </span>
      </button>

      {open && (
        <div className="px-6 pb-6 space-y-6">
          {week.days.map((day) => (
            <div key={day.day}>
              <p className="font-mono-label text-mono-label text-on-surface-variant uppercase mb-3">
                Day {day.day}
              </p>
              <div className="space-y-2">
                {day.tasks.map((task) => (
                  <RoadmapTask
                    key={task._id}
                    task={task}
                    onToggle={onToggleTask}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── ProgressSidebar ──────────────────────────────────────────────────────────
function ProgressSidebar({ roadmap, totalTasks, completedTasks }) {
  const percent = totalTasks
    ? Math.round((completedTasks / totalTasks) * 100)
    : 0;

  return (
    <div className="sticky top-24 space-y-6">
      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-6 space-y-6">
        <h3 className="font-mono-label text-mono-label uppercase tracking-widest text-on-surface-variant">
          Progress
        </h3>
        <ProgressBar label="Overall Completion" value={percent} />
        <div className="space-y-2">
          <div className="flex justify-between font-mono-detail text-mono-detail text-on-surface-variant">
            <span>Tasks done</span>
            <span>
              {completedTasks}/{totalTasks}
            </span>
          </div>
          <div className="flex justify-between font-mono-detail text-mono-detail text-on-surface-variant">
            <span>Duration</span>
            <span>{roadmap.duration}</span>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-6 space-y-4">
        <h3 className="font-mono-label text-mono-label uppercase tracking-widest text-on-surface-variant">
          Weeks
        </h3>
        {roadmap.roadmap.map((week) => {
          const wTotal = week.days.flatMap((d) => d.tasks).length;
          const wDone = week.days
            .flatMap((d) => d.tasks)
            .filter((t) => t.isCompleted).length;
          const complete = wTotal > 0 && wDone === wTotal;
          return (
            <div key={week.week} className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${complete ? "bg-primary" : "border border-outline-variant"}`}
              >
                {complete && (
                  <span className="material-symbols-outlined text-on-primary text-[14px]">
                    check
                  </span>
                )}
              </div>
              <span
                className={`font-mono-detail text-mono-detail ${complete ? "text-primary" : "text-on-surface-variant"}`}
              >
                Week {week.week}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── RoadmapStep ──────────────────────────────────────────────────────────────
export default function RoadmapStep() {
  const { roadmap, setRoadmap, goToStep } = useWorkflowStore();
  const [isLoading, setIsLoading] = useState(!roadmap);
  const [localRoadmap, setLocalRoadmap] = useState(roadmap);

  useState(() => {
    if (!roadmap) {
      const load = async () => {
        await new Promise((r) => setTimeout(r, 1500));
        const mock = {
          title: "Frontend Developer Mastery Path",
          duration: "4 Weeks",
          progress: 0,
          roadmap: [
            {
              week: 1,
              title: "System Design Fundamentals",
              days: [
                {
                  day: 1,
                  tasks: [
                    {
                      _id: "t1",
                      text: "Study scalability patterns",
                      resource: "https://example.com",
                      isCompleted: false,
                    },
                    {
                      _id: "t2",
                      text: "Read about load balancing",
                      resource: "",
                      isCompleted: false,
                    },
                  ],
                },
                {
                  day: 2,
                  tasks: [
                    {
                      _id: "t3",
                      text: "Practice designing a URL shortener",
                      resource: "",
                      isCompleted: false,
                    },
                  ],
                },
              ],
            },
            {
              week: 2,
              title: "Testing & CI/CD",
              days: [
                {
                  day: 1,
                  tasks: [
                    {
                      _id: "t4",
                      text: "Set up Jest in a React project",
                      resource: "https://jestjs.io",
                      isCompleted: false,
                    },
                    {
                      _id: "t5",
                      text: "Write unit tests for 3 components",
                      resource: "",
                      isCompleted: false,
                    },
                  ],
                },
              ],
            },
          ],
        };
        setLocalRoadmap(mock);
        setRoadmap(mock);
        setIsLoading(false);
      };
      load();
    } else {
      setIsLoading(false);
    }
  });

  const handleToggleTask = (taskId) => {
    const updated = {
      ...localRoadmap,
      roadmap: localRoadmap.roadmap.map((week) => ({
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
    setLocalRoadmap(updated);
    // TODO: call API to persist task completion
  };

  if (isLoading)
    return <AIStatusLoader message="Building your learning roadmap..." />;
  if (!localRoadmap) return null;

  const allTasks = localRoadmap.roadmap.flatMap((w) =>
    w.days.flatMap((d) => d.tasks),
  );
  const completedTasks = allTasks.filter((t) => t.isCompleted).length;

  return (
    <div>
      <div className="mb-10">
        <span className="font-mono-label text-mono-label text-on-surface-variant uppercase block mb-2">
          Learning Roadmap
        </span>
        <h2 className="font-headline-lg text-headline-lg text-primary">
          {localRoadmap.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Weeks */}
        <div className="lg:col-span-8 space-y-4">
          {localRoadmap.roadmap.map((week) => (
            <RoadmapWeekAccordion
              key={week.week}
              week={week}
              onToggleTask={handleToggleTask}
            />
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <ProgressSidebar
            roadmap={localRoadmap}
            totalTasks={allTasks.length}
            completedTasks={completedTasks}
          />
        </div>
      </div>

      <WorkflowActions
        onBack={() => goToStep(3)}
        backLabel="Back to Analysis"
        nextLabel="Complete Journey"
        nextIcon={MdOutlineCelebration}
        onNext={() => {}}
      />
    </div>
  );
}
