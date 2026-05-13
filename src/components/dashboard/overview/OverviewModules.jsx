"use client";

import { Skeleton } from "@/components/ui/skeleton";
import ResumeModule from "./ResumeModule";
import AnalysisModule from "./AnalysisModule";
import RoadmapModule from "./RoadmapModule";

export default function OverviewModules({ data, isLoading }) {
  if (isLoading) {
    return (
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-card-gap">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-135 rounded-lg" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-card-gap">
        <ResumeModule resume={data?.resume} />
        <AnalysisModule analysis={data?.analysis} />
        <RoadmapModule roadmap={data?.roadmap} />
      </div>
    </section>
  );
}
