import { create } from "zustand";

const DEFAULT_STATE = {
  search: "",
  statusFilter: "all",
  sortBy: "mostRecent",
  page: 1,
};

export const useResumeFilterStore = create((set) => ({
  ...DEFAULT_STATE,

  setSearch: (search) => set({ search, page: 1 }),
  setStatusFilter: (statusFilter) => set({ statusFilter, page: 1 }),
  setSortBy: (sortBy) => set({ sortBy, page: 1 }),
  setPage: (page) => set({ page }),

  resetFilters: () => set(DEFAULT_STATE),
}));
