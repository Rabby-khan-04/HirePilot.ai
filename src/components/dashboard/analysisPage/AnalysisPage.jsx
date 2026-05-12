"use client";

import { useAnalyses } from "@/hooks/aiAnalysis/useAnalyses";
import AnalysesGrid from "./AnalysesGrid";
import AnalysesPageHeader from "./AnalysesPageHeader";
import AnalysesToolbar from "./AnalysesToolbar";

export default function AnalysesPage() {
  const {
    analyses,
    pagination,
    isLoading,
    isFetching,
    isError,
    resetFilters,
    page,
    setPage,
  } = useAnalyses();

  return (
    <div className="px-4 md:px-margin-page pb-24 space-y-12">
      <AnalysesPageHeader />

      <AnalysesToolbar isFetching={isFetching} onReset={resetFilters} />

      <AnalysesGrid
        analyses={analyses}
        isLoading={isLoading}
        isError={isError}
        pagination={pagination}
        onPageChange={setPage}
        currentPage={page}
      />
    </div>
  );
}
