"use client";

import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import { useRoadmapFilterStore } from "@/store/userRoadmapFilterStore";
import { fetchRoadmaps } from "@/services/roadmap.service";

// ── Hook ───────────────────────────────────────────────────────────────────

export const useRoadmaps = () => {
  const {
    search,
    statusFilter,
    durationFilter,
    sortBy,
    setSearch,
    setStatusFilter,
    setDurationFilter,
    setSortBy,
    resetFilters,
  } = useRoadmapFilterStore();

  // Debounce search so we don't fire a request on every keystroke
  const [debouncedSearch] = useDebounce(search, 400);

  const query = useQuery({
    queryKey: [
      "roadmaps",
      debouncedSearch,
      statusFilter,
      durationFilter,
      sortBy,
    ],
    queryFn: () =>
      fetchRoadmaps({
        search: debouncedSearch || undefined,
        status: statusFilter !== "all" ? statusFilter : undefined,
        duration: durationFilter !== "all" ? durationFilter : undefined,
        sortBy,
      }),
    staleTime: 1000 * 30, // treat data as fresh for 30 s
    placeholderData: (prev) => prev, // keep previous results while refetching (avoids flash)
  });

  return {
    // data
    roadmaps: query.data ?? [],

    // states the UI typically needs
    isLoading: query.isLoading, // true only on first load (no cached data yet)
    isFetching: query.isFetching, // true on every background refetch
    isError: query.isError,
    error: query.error,

    // filters
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    durationFilter,
    setDurationFilter,
    sortBy,
    setSortBy,
    resetFilters,
  };
};
