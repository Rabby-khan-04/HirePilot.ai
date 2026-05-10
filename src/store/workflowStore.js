import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWorkflowStore = create(
  persist(
    (set, get) => ({
      activeStep: 1,
      completedSteps: [],
      resume: null,
      jobProfile: null,
      analysis: null,
      roadmap: null,

      goToStep: (step) => set({ activeStep: step }),

      setResume: (resume) =>
        set((s) => ({
          resume,
          completedSteps: [...new Set([...s.completedSteps, 1])],
          activeStep: Math.max(s.activeStep, 2),
        })),

      setJobProfile: (jobProfile) =>
        set((s) => ({
          jobProfile,
          completedSteps: [...new Set([...s.completedSteps, 2])],
          activeStep: Math.max(s.activeStep, 3),
        })),

      setAnalysis: (analysis) =>
        set((s) => ({
          analysis,
          completedSteps: [...new Set([...s.completedSteps, 3])],
          activeStep: Math.max(s.activeStep, 4),
        })),

      setRoadmap: (roadmap) =>
        set((s) => ({
          roadmap,
          completedSteps: [...new Set([...s.completedSteps, 4])],
        })),

      isStepCompleted: (step) => get().completedSteps.includes(step),
      isStepActive: (step) => get().activeStep === step,
      isStepAccessible: (step) => step <= get().activeStep,

      reset: () =>
        set({
          activeStep: 1,
          completedSteps: [],
          resume: null,
          jobProfile: null,
          analysis: null,
          roadmap: null,
        }),
    }),
    {
      name: "hirepilot-workflow", // localStorage key
      partialState: (s) => ({
        // don't persist loading/UI state
        activeStep: s.activeStep,
        completedSteps: s.completedSteps,
        resume: s.resume,
        jobProfile: s.jobProfile,
        analysis: s.analysis,
        roadmap: s.roadmap,
      }),
    },
  ),
);
