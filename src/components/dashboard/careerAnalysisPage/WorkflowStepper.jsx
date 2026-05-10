"use client";

import { useWorkflowStore } from "@/store/workflowStore";
import { FaCheck } from "react-icons/fa6";

export default function WorkflowStepper() {
  const { activeStep, completedSteps, isStepAccessible, goToStep } =
    useWorkflowStore();

  const STEPS = [
    { id: 1, label: "Resume", icon: "description" },
    { id: 2, label: "Job Profile", icon: "work" },
    { id: 3, label: "AI Analysis", icon: "analytics" },
    { id: 4, label: "Roadmap", icon: "map" },
  ];

  return (
    <div className="flex justify-between items-center mb-16 relative max-w-4xl mx-auto">
      <div className="absolute top-5 left-0 w-full h-px bg-outline-variant/80 z-1" />

      {STEPS.map(({ id, label }) => {
        const isCompleted = completedSteps.includes(id);
        const isActive = activeStep === id;
        const isAccessible = isStepAccessible(id);

        return (
          <button
            key={id}
            onClick={() => isAccessible && goToStep(id)}
            disabled={!isAccessible}
            className={`flex flex-col items-center gap-3 bg-surface px-4 transition-opacity relative z-10 ${
              !isAccessible ? "opacity-90 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {/* Circle */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-mono-label transition-all ${
                isCompleted
                  ? "bg-primary text-on-primary"
                  : isActive
                    ? "bg-primary text-on-primary ring-4 ring-primary/10"
                    : "border border-outline-variant text-on-surface-variant bg-surface"
              }`}
            >
              {isCompleted ? (
                <FaCheck size={18} />
              ) : (
                <span>{String(id).padStart(2, "0")}</span>
              )}
            </div>

            {/* Label */}
            <span
              className={`font-mono-label text-mono-label uppercase tracking-widest transition-colors ${
                isActive || isCompleted
                  ? "text-primary font-bold"
                  : "text-on-surface-variant"
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
