"use client";

import OverviewActions from "@/components/dashboard/overview/OverviewActions";
import OverviewHero from "@/components/dashboard/overview/OverviewHero";
import OverviewInsights from "@/components/dashboard/overview/OverviewInsights";
import OverviewModules from "@/components/dashboard/overview/OverviewModules";
import { useOverview } from "@/hooks/dashboard/useOverview";

export default function OverviewPage() {
  const { data, isLoading, isError } = useOverview();

  return (
    <div className="px-margin-page pb-24 space-y-section-padding">
      <OverviewHero data={data} isLoading={isLoading} />
      <OverviewModules data={data} isLoading={isLoading} />
      <OverviewInsights data={data} />
      <OverviewActions />
    </div>
  );
}
