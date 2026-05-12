"use client";

import { useRoadmaps } from "@/hooks/roadmaps/useRoadmaps";
import CareerTrajectorySection from "./CareerTrajectorySection";
import RoadmapsGrid from "./RoadmapsGrid";
import RoadmapsPageHeader from "./RoadmapsPageHeader";
import RoadmapsToolbar from "./RoadmapsToolbar";

export default function RoadmapsPage() {
  const {
    roadmaps,
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    durationFilter,
    setDurationFilter,
    sortBy,
    setSortBy,
  } = useRoadmaps();

  return (
    <div className="px-4 md:px-margin-page pb-24">
      <RoadmapsPageHeader />

      <RoadmapsToolbar
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        durationFilter={durationFilter}
        onDurationChange={setDurationFilter}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <RoadmapsGrid roadmaps={roadmaps} search={search} />

      <CareerTrajectorySection />
    </div>
  );
}
