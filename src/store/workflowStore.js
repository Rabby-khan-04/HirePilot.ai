import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { useShallow } from "zustand/react/shallow";

// ─── Initial State ────────────────────────────────────────────────────────────

const initialState = {
  activeStep: 1,
  completedSteps: [],
  resume: null,
  jobProfile: null,
  analysis: null,
  roadmap: null,
  isLoading: false,
  error: null,
};

// ─── Store ────────────────────────────────────────────────────────────────────

export const useWorkflowStore = create(
  devtools(
    persist(
      immer((set, get) => ({
        ...initialState,

        // ── Step Navigation ──
        goToStep: (step) => {
          if (!get().isStepAccessible(step)) return; // guard: can't skip ahead
          set((s) => {
            s.activeStep = step;
          });
        },

        // ── Data Setters ──
        setResume: (resume) =>
          set((s) => {
            s.resume = resume;
            s.error = null;
            if (!s.completedSteps.includes(1)) s.completedSteps.push(1);
            if (s.activeStep < 2) s.activeStep = 2;
          }),

        setJobProfile: (jobProfile) =>
          set((s) => {
            s.jobProfile = jobProfile;
            s.error = null;
            if (!s.completedSteps.includes(2)) s.completedSteps.push(2);
            if (s.activeStep < 3) s.activeStep = 3;
          }),

        setAnalysis: (analysis) =>
          set((s) => {
            s.analysis = analysis;
            s.error = null;
            if (!s.completedSteps.includes(3)) s.completedSteps.push(3);
            if (s.activeStep < 4) s.activeStep = 4;
          }),

        setRoadmap: (roadmap) =>
          set((s) => {
            s.roadmap = roadmap;
            s.error = null;
            if (!s.completedSteps.includes(4)) s.completedSteps.push(4);
          }),

        // ── Roadmap Item Toggle ──
        toggleRoadmapItem: (id) =>
          set((s) => {
            if (!s.roadmap) return;
            const item = s.roadmap.items.find((i) => i.id === id);
            if (item) item.completed = !item.completed;
          }),

        // ── UI State ──
        setLoading: (isLoading) =>
          set((s) => {
            s.isLoading = isLoading;
          }),

        setError: (error) =>
          set((s) => {
            s.error = error;
            s.isLoading = false;
          }),

        // ── Step Helpers ──
        isStepCompleted: (step) => get().completedSteps.includes(step),
        isStepActive: (step) => get().activeStep === step,
        isStepAccessible: (step) => step <= get().activeStep,

        // ── Full Reset ──
        reset: () => {
          set(() => ({ ...initialState }));
          useWorkflowStore.persist.clearStorage();
        },
      })),
      {
        name: "hirepilot-workflow",
        storage: createJSONStorage(() => localStorage),
        // Only persist actual data, not UI state (loading, error, activeStep)
        partialize: (s) => ({
          activeStep: s.activeStep,
          completedSteps: s.completedSteps,
          resume: s.resume,
          jobProfile: s.jobProfile,
          analysis: s.analysis,
          roadmap: s.roadmap,
        }),
        // Bump version if you change the data shape — prevents old data breaking the app
        version: 1,
        migrate: (persistedState, version) => {
          // Example: if (version === 0) { migrate old shape here }
          return persistedState;
        },
      },
    ),
    {
      name: "WorkflowStore", // label in Redux DevTools
      enabled: process.env.NODE_ENV === "development",
    },
  ),
);

// ─── Selectors ────────────────────────────────────────────────────────────────
// Use these in components instead of the full store —
// each one only re-renders the component when that specific slice changes.

export const useActiveStep = () => useWorkflowStore((s) => s.activeStep);
export const useCompletedSteps = () =>
  useWorkflowStore((s) => s.completedSteps);
export const useResume = () => useWorkflowStore((s) => s.resume);
export const useJobProfile = () => useWorkflowStore((s) => s.jobProfile);
export const useAnalysis = () => useWorkflowStore((s) => s.analysis);
export const useRoadmap = () => useWorkflowStore((s) => s.roadmap);
export const useWorkflowLoading = () => useWorkflowStore((s) => s.isLoading);
export const useWorkflowError = () => useWorkflowStore((s) => s.error);

// All actions in one hook — actions never trigger re-renders
export const useWorkflowActions = () =>
  useWorkflowStore(
    useShallow((s) => ({
      goToStep: s.goToStep,
      setResume: s.setResume,
      setJobProfile: s.setJobProfile,
      setAnalysis: s.setAnalysis,
      setRoadmap: s.setRoadmap,
      toggleRoadmapItem: s.toggleRoadmapItem,
      setLoading: s.setLoading,
      setError: s.setError,
      reset: s.reset,
    })),
  );
