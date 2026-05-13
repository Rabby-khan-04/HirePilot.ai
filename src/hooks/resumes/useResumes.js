"use client";

import { fetchResumes } from "@/services/resume.service";
import { useResumeFilterStore } from "@/store/useResumesFilterStroe";
import { useQuery } from "@tanstack/react-query";

export function useResumes() {
  const {
    search,
    statusFilter,
    sortBy,
    page,
    setSearch,
    setStatusFilter,
    setSortBy,
    setPage,
    resetFilters,
  } = useResumeFilterStore();

  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["resumes", { search, statusFilter, sortBy, page }],
    queryFn: () => fetchResumes({ search, statusFilter, sortBy, page }),
    placeholderData: (prev) => prev,
    staleTime: 30_000,
  });

  return {
    resumes: data?.resumes ?? [],
    pagination: data?.pagination ?? null,
    hasLatest: data?.hasLatest ?? false, // exposed from the backend facet

    isLoading,
    isFetching,
    isError,

    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    sortBy,
    setSortBy,
    page,
    setPage,
    resetFilters,
  };
}
