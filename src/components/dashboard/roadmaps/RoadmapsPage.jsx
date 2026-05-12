"use client";

import { useRoadmaps } from "@/hooks/roadmaps/useRoadmaps";
import CareerTrajectorySection from "./CareerTrajectorySection";
import RoadmapsGrid from "./RoadmapsGrid";
import RoadmapsPageHeader from "./RoadmapsPageHeader";
import RoadmapsToolbar from "./RoadmapsToolbar";

export default function RoadmapsPage() {
  const {
    roadmaps,
    isLoading,
    isFetching,
    isError,
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    durationFilter,
    setDurationFilter,
    sortBy,
    setSortBy,
    resetFilters,
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
        isFetching={isFetching}
        onReset={resetFilters}
      />

      <RoadmapsGrid
        roadmaps={roadmaps}
        search={search}
        isLoading={isLoading}
        isError={isError}
      />

      <CareerTrajectorySection />
    </div>
  );
}
