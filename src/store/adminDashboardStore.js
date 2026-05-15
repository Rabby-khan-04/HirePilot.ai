import { create } from "zustand";

export const useAdminDashboardStore = create((set) => ({
  // Overview
  overview: null,
  overviewLoading: false,
  overviewError: null,

  // Charts
  userChart: null,
  resumeChart: null,
  analysisChart: null,
  roadmapChart: null,
  chartPeriod: "week",
  chartsLoading: false,

  // Intelligence
  intelligence: null,
  intelligenceLoading: false,

  // Recent Activity
  recentActivity: null,
  recentActivityLoading: false,

  // Active tab for activity feed
  activeTab: "users",

  setOverview: (data) => set({ overview: data }),
  setOverviewLoading: (val) => set({ overviewLoading: val }),
  setOverviewError: (err) => set({ overviewError: err }),

  setUserChart: (data) => set({ userChart: data }),
  setResumeChart: (data) => set({ resumeChart: data }),
  setAnalysisChart: (data) => set({ analysisChart: data }),
  setRoadmapChart: (data) => set({ roadmapChart: data }),
  setChartPeriod: (period) => set({ chartPeriod: period }),
  setChartsLoading: (val) => set({ chartsLoading: val }),

  setIntelligence: (data) => set({ intelligence: data }),
  setIntelligenceLoading: (val) => set({ intelligenceLoading: val }),

  setRecentActivity: (data) => set({ recentActivity: data }),
  setRecentActivityLoading: (val) => set({ recentActivityLoading: val }),

  setActiveTab: (tab) => set({ activeTab: tab }),
}));
