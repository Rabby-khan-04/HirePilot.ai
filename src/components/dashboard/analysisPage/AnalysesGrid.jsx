"use client";

import AnalysisCard from "./AnalysisCard";
import { useAnalysisFilterStore } from "@/store/useAnalysisFilterStore";
import {
  EmptyAnalysesState,
  EmptyFilterState,
  EmptySearchState,
  ErrorState,
} from "./AnalysesState";
import { AnalysesShimmerGrid } from "@/components/shimmer/aiAnalysis/AnalysesShimmerGrid";
import Pagination from "../../shared/pagination/Pagination";

export default function AnalysesGrid({
  analyses,
  isLoading,
  isError,
  pagination,
  currentPage,
  onPageChange,
}) {
  const { search, scoreFilter, sortBy, resetFilters } =
    useAnalysisFilterStore();

  const hasActiveFilters =
    search !== "" || scoreFilter !== "all" || sortBy !== "mostRecent";

  const renderContent = () => {
    if (isError) return <ErrorState />;
    if (isLoading) return <AnalysesShimmerGrid />;

    if (analyses.length === 0) {
      if (search) return <EmptySearchState search={search} />;
      if (hasActiveFilters) return <EmptyFilterState onReset={resetFilters} />;
      return <EmptyAnalysesState />;
    }

    return analyses.map((analysis) => (
      <AnalysisCard key={analysis._id} analysis={analysis} />
    ));
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-card-gap mt-12">
        {renderContent()}
      </div>

      <Pagination
        pagination={pagination}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
}
