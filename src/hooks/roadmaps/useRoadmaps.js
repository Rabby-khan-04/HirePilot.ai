"use client";

import { MOCK_ROADMAPS } from "@/data/roadmapMockData";
import { useState, useMemo } from "react";

// TODO: replace MOCK_ROADMAPS with real API call
// import { authClient } from "@/lib/api-client";

export const useRoadmaps = () => {
  const [roadmaps, setRoadmaps] = useState(MOCK_ROADMAPS);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("updatedAt");
  const [isLoading, setIsLoading] = useState(false);

  // TODO: replace mock with real fetch
  // useEffect(() => {
  //   const fetch = async () => {
  //     setIsLoading(true);
  //     const res = await authClient.get("/roadmaps");
  //     setRoadmaps(res.data.data);
  //     setIsLoading(false);
  //   };
  //   fetch();
  // }, []);

  const filtered = useMemo(() => {
    let result = [...roadmaps];

    // search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.category?.toLowerCase().includes(q) ||
          r.skills?.some((s) => s.toLowerCase().includes(q)),
      );
    }

    // status filter
    if (statusFilter === "completed") {
      result = result.filter((r) => r.progress.percentage === 100);
    } else if (statusFilter === "in-progress") {
      result = result.filter(
        (r) => r.progress.percentage > 0 && r.progress.percentage < 100,
      );
    } else if (statusFilter === "not-started") {
      result = result.filter((r) => r.progress.percentage === 0);
    }

    // duration filter
    if (durationFilter !== "all") {
      result = result.filter((r) =>
        r.duration.toLowerCase().includes(durationFilter),
      );
    }

    // sort
    if (sortBy === "updatedAt") {
      result.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    } else if (sortBy === "progress") {
      result.sort((a, b) => b.progress.percentage - a.progress.percentage);
    } else if (sortBy === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [roadmaps, search, statusFilter, durationFilter, sortBy]);

  return {
    roadmaps: filtered,
    isLoading,
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    durationFilter,
    setDurationFilter,
    sortBy,
    setSortBy,
  };
};
