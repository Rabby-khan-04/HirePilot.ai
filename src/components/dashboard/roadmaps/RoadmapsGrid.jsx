"use client";

import RoadmapCard from "./RoadmapCard";
import CreateRoadmapCard from "./CreateRoadmapCard";
import { MdOutlineMap, MdSearchOff, MdFilterAltOff } from "react-icons/md";
import { useRoadmapFilterStore } from "@/store/userRoadmapFilterStore";
import { ErrorState } from "./ErrorState";
import { ShimmerGrid } from "@/components/shimmer/Roadmap/ShimmerGrid";
import { EmptySearchState } from "./EmptySearchState";
import { EmptyFilterState } from "./EmptyFilterState";
import { EmptyRoadmapsState } from "./EmptyRoadmapsState";

export default function RoadmapsGrid({ roadmaps, isLoading, isError }) {
  const { search, statusFilter, durationFilter, sortBy, resetFilters } =
    useRoadmapFilterStore();

  const hasActiveFilters =
    search !== "" ||
    statusFilter !== "all" ||
    durationFilter !== "all" ||
    sortBy !== "updatedAt";

  const hasResults = roadmaps.length > 0;

  const renderContent = () => {
    if (isError) return <ErrorState />;

    if (isLoading) return <ShimmerGrid />;

    if (!hasResults) {
      if (search) return <EmptySearchState search={search} />;
      if (hasActiveFilters) return <EmptyFilterState onReset={resetFilters} />;
      return <EmptyRoadmapsState />;
    }

    return (
      <>
        {roadmaps.map((roadmap) => (
          <RoadmapCard key={roadmap._id} roadmap={roadmap} />
        ))}
        <CreateRoadmapCard />
      </>
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-card-gap mt-12">
        {renderContent()}
      </div>
    </>
  );
}
