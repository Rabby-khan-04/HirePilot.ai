"use client";

import { useQuery } from "@tanstack/react-query";
import { useAnalysisFilterStore } from "@/store/useAnalysisFilterStore";
import { fetchAnalyses } from "@/services/aiAnalysis.service";

export function useAnalyses() {
  const {
    search,
    scoreFilter,
    sortBy,
    page,
    setSearch,
    setScoreFilter,
    setSortBy,
    setPage,
    resetFilters,
  } = useAnalysisFilterStore();

  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["analyses", { search, scoreFilter, sortBy, page }],
    queryFn: () => fetchAnalyses({ search, scoreFilter, sortBy, page }),
    placeholderData: (prev) => prev, // keeps stale data visible while fetching
    staleTime: 30_000,
  });

  return {
    analyses: data?.analyses ?? [],
    pagination: data?.pagination ?? null,

    isLoading,
    isFetching,
    isError,

    search,
    setSearch,
    scoreFilter,
    setScoreFilter,
    sortBy,
    setSortBy,
    page,
    setPage,
    resetFilters,
  };
}
