import { create } from "zustand";

const DEFAULT_STATE = {
  search: "",
  scoreFilter: "all",
  sortBy: "mostRecent",
  page: 1,
};

export const useAnalysisFilterStore = create((set) => ({
  ...DEFAULT_STATE,

  setSearch: (search) => set({ search, page: 1 }),
  setScoreFilter: (scoreFilter) => set({ scoreFilter, page: 1 }),
  setSortBy: (sortBy) => set({ sortBy, page: 1 }),
  setPage: (page) => set({ page }),

  resetFilters: () => set(DEFAULT_STATE),
}));
