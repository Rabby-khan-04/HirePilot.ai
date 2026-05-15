"use client";

import ActivityFeed from "@/components/admin/dashboard/ActivityFeed";
import DashboardHeader from "@/components/admin/dashboard/DashboardHeader";
import IntelligenceSection from "@/components/admin/dashboard/IntelligenceSection";
import ResumeActivityChart from "@/components/admin/dashboard/ResumeActivityChart";
import StatCards from "@/components/admin/dashboard/StatCards";
import UserGrowthChart from "@/components/admin/dashboard/UserGrowthChart";
import { useAdminDashboard } from "@/hooks/dashboard/useAdminDashboard";

export default function AdminDashboardPage() {
  const {
    overview,
    overviewLoading,
    resumeChart,
    userChart,
    chartsLoading,
    chartPeriod,
    setChartPeriod,
    intelligence,
    intelligenceLoading,
    recentActivity,
    recentActivityLoading,
    activeTab,
    setActiveTab,
  } = useAdminDashboard();

  const handleRefresh = () => {
    // Trigger re-fetch by clearing store or calling loadCharts manually
    window.location.reload();
  };

  const handleExport = () => {
    // Placeholder — wire to your export service
    console.log("Exporting dashboard data...");
  };

  return (
    <main className="flex-1 h-screen overflow-y-auto scroll-smooth">
      <DashboardHeader onRefresh={handleRefresh} onExport={handleExport} />

      <div className="p-margin-page space-y-12 pb-24">
        <StatCards overview={overview} loading={overviewLoading} />

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <ResumeActivityChart
            resumeChart={resumeChart}
            loading={chartsLoading}
          />
          <UserGrowthChart
            userChart={userChart}
            chartPeriod={chartPeriod}
            onPeriodChange={setChartPeriod}
            loading={chartsLoading}
          />
        </section>

        <IntelligenceSection
          intelligence={intelligence}
          loading={intelligenceLoading}
        />

        <ActivityFeed
          recentActivity={recentActivity}
          loading={recentActivityLoading}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </main>
  );
}
