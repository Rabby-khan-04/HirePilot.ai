"use client";

import { useEffect, useCallback } from "react";
import { useAdminDashboardStore } from "@/store/adminDashboardStore";
import {
  fetchAnalysisChart,
  fetchIntelligence,
  fetchOverviewStats,
  fetchRecentActivity,
  fetchResumeChart,
  fetchRoadmapChart,
  fetchUserChart,
} from "@/services/dashboard.service";

export function useAdminDashboard() {
  // Select primitive values and setters separately
  const overview = useAdminDashboardStore((s) => s.overview);
  const overviewLoading = useAdminDashboardStore((s) => s.overviewLoading);
  const overviewError = useAdminDashboardStore((s) => s.overviewError);
  const setOverview = useAdminDashboardStore((s) => s.setOverview);
  const setOverviewLoading = useAdminDashboardStore(
    (s) => s.setOverviewLoading,
  );
  const setOverviewError = useAdminDashboardStore((s) => s.setOverviewError);

  const userChart = useAdminDashboardStore((s) => s.userChart);
  const resumeChart = useAdminDashboardStore((s) => s.resumeChart);
  const analysisChart = useAdminDashboardStore((s) => s.analysisChart);
  const roadmapChart = useAdminDashboardStore((s) => s.roadmapChart);
  const chartPeriod = useAdminDashboardStore((s) => s.chartPeriod);
  const chartsLoading = useAdminDashboardStore((s) => s.chartsLoading);
  const setUserChart = useAdminDashboardStore((s) => s.setUserChart);
  const setResumeChart = useAdminDashboardStore((s) => s.setResumeChart);
  const setAnalysisChart = useAdminDashboardStore((s) => s.setAnalysisChart);
  const setRoadmapChart = useAdminDashboardStore((s) => s.setRoadmapChart);
  const setChartPeriod = useAdminDashboardStore((s) => s.setChartPeriod);
  const setChartsLoading = useAdminDashboardStore((s) => s.setChartsLoading);

  const intelligence = useAdminDashboardStore((s) => s.intelligence);
  const intelligenceLoading = useAdminDashboardStore(
    (s) => s.intelligenceLoading,
  );
  const setIntelligence = useAdminDashboardStore((s) => s.setIntelligence);
  const setIntelligenceLoading = useAdminDashboardStore(
    (s) => s.setIntelligenceLoading,
  );

  const recentActivity = useAdminDashboardStore((s) => s.recentActivity);
  const recentActivityLoading = useAdminDashboardStore(
    (s) => s.recentActivityLoading,
  );
  const setRecentActivity = useAdminDashboardStore((s) => s.setRecentActivity);
  const setRecentActivityLoading = useAdminDashboardStore(
    (s) => s.setRecentActivityLoading,
  );

  const activeTab = useAdminDashboardStore((s) => s.activeTab);
  const setActiveTab = useAdminDashboardStore((s) => s.setActiveTab);

  // Fetch overview once
  useEffect(() => {
    if (overview) return;
    setOverviewLoading(true);
    fetchOverviewStats()
      .then(setOverview)
      .catch((e) => setOverviewError(e.message))
      .finally(() => setOverviewLoading(false));
  }, [overview, setOverview, setOverviewLoading, setOverviewError]);

  // Fetch charts when period changes
  const loadCharts = useCallback(async () => {
    setChartsLoading(true);
    try {
      const [users, resumes, analyses, roadmaps] = await Promise.all([
        fetchUserChart(chartPeriod),
        fetchResumeChart(chartPeriod),
        fetchAnalysisChart(chartPeriod),
        fetchRoadmapChart(chartPeriod),
      ]);
      setUserChart(users);
      setResumeChart(resumes);
      setAnalysisChart(analyses);
      setRoadmapChart(roadmaps);
    } finally {
      setChartsLoading(false);
    }
  }, [
    chartPeriod,
    setChartsLoading,
    setUserChart,
    setResumeChart,
    setAnalysisChart,
    setRoadmapChart,
  ]);

  useEffect(() => {
    loadCharts();
  }, [loadCharts]);

  // Fetch intelligence once
  useEffect(() => {
    if (intelligence) return;
    setIntelligenceLoading(true);
    fetchIntelligence()
      .then(setIntelligence)
      .finally(() => setIntelligenceLoading(false));
  }, [intelligence, setIntelligence, setIntelligenceLoading]);

  // Fetch recent activity once
  useEffect(() => {
    if (recentActivity) return;
    setRecentActivityLoading(true);
    fetchRecentActivity()
      .then(setRecentActivity)
      .finally(() => setRecentActivityLoading(false));
  }, [recentActivity, setRecentActivity, setRecentActivityLoading]);

  return {
    overview,
    overviewLoading,
    overviewError,
    userChart,
    resumeChart,
    analysisChart,
    roadmapChart,
    chartPeriod,
    chartsLoading,
    intelligence,
    intelligenceLoading,
    recentActivity,
    recentActivityLoading,
    activeTab,
    setChartPeriod,
    setActiveTab,
  };
}
