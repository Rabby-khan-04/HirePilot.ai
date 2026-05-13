"use client";

import { useResumeFilterStore } from "@/store/useResumesFilterStroe";
import ResumeCard from "./ResumeCard";
import {
  EmptyResumesState,
  EmptyFilterState,
  EmptySearchState,
  ErrorState,
} from "./ResumesState";

import Pagination from "@/components/shared/pagination/Pagination";
import { ResumesShimmerGrid } from "@/components/shimmer/resume/ResumesShimmerGrid";

export default function ResumesGrid({
  resumes,
  isLoading,
  isError,
  pagination,
  currentPage,
  onPageChange,
}) {
  const { search, statusFilter, sortBy, resetFilters } = useResumeFilterStore();

  const hasActiveFilters =
    search !== "" || statusFilter !== "all" || sortBy !== "mostRecent";

  const renderContent = () => {
    if (isError) return <ErrorState />;
    if (isLoading) return <ResumesShimmerGrid />;

    if (resumes.length === 0) {
      if (search) return <EmptySearchState search={search} />;
      if (hasActiveFilters) return <EmptyFilterState onReset={resetFilters} />;
      return <EmptyResumesState />;
    }

    return resumes.map((resume) => (
      <ResumeCard key={resume._id} resume={resume} />
    ));
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-card-gap mt-12">
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
