"use client";

import { useResumes } from "@/hooks/resumes/useResumes";
import ResumesPageHeader from "./ResumesPageHeader";
import ResumesToolbar from "./ResumesToolbar";
import ResumeStats from "./ResumeStats";
import ResumesGrid from "./ResumesGrid.jsx";

export default function ResumesPage() {
  const {
    resumes,
    pagination,
    isLoading,
    isFetching,
    isError,
    resetFilters,
    page,
    setPage,
  } = useResumes();

  return (
    <div className="px-4 md:px-margin-page pb-24 space-y-12">
      <ResumesPageHeader />
      <ResumeStats />
      <ResumesToolbar isFetching={isFetching} onReset={resetFilters} />
      <ResumesGrid
        resumes={resumes}
        isLoading={isLoading}
        isError={isError}
        pagination={pagination}
        onPageChange={setPage}
        currentPage={page}
      />
    </div>
  );
}
