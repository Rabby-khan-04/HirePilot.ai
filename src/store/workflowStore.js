import { create } from "zustand";

export const useWorkflowStore = create((set, get) => ({
  activeStep: 1,
  completedSteps: [],
  resume: null,
  jobProfile: null,
  analysis: null,
  roadmap: null,

  goToStep: (step) => set({ activeStep: step }),

  completeStep: (step) =>
    set((state) => ({
      completedSteps: [...new Set([...state.completedSteps, step])],
    })),

  setResume: (resume) =>
    set((state) => ({
      resume,
      completedSteps: [...new Set([...state.completedSteps, 1])],
      activeStep: Math.max(state.activeStep, 2),
    })),

  setJobProfile: (jobProfile) =>
    set((state) => ({
      jobProfile,
      completedSteps: [...new Set([...state.completedSteps, 2])],
      activeStep: Math.max(state.activeStep, 3),
    })),

  setAnalysis: (analysis) =>
    set((state) => ({
      analysis,
      completedSteps: [...new Set([...state.completedSteps, 3])],
      activeStep: Math.max(state.activeStep, 4),
    })),

  setRoadmap: (roadmap) =>
    set((state) => ({
      roadmap,
      completedSteps: [...new Set([...state.completedSteps, 4])],
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
}));
