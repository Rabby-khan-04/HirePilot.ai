import { create } from "zustand";

const DEFAULT_FILTERS = {
  search: "",
  statusFilter: "all",
  durationFilter: "all",
  sortBy: "updatedAt",
};

export const useRoadmapFilterStore = create((set) => ({
  ...DEFAULT_FILTERS,
  setSearch: (search) => set({ search }),
  setStatusFilter: (statusFilter) => set({ statusFilter }),
  setDurationFilter: (durationFilter) => set({ durationFilter }),
  setSortBy: (sortBy) => set({ sortBy }),
  resetFilters: () => set(DEFAULT_FILTERS),
}));
