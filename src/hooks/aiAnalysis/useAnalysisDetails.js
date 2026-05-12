"use client";

import { fetchAnalysisById } from "@/services/aiAnalysis.service";
import { useQuery } from "@tanstack/react-query";

export function useAnalysisDetails(id) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["analysis", id],
    queryFn: () => fetchAnalysisById(id),
    enabled: !!id,
    staleTime: 30_000,
  });

  return {
    analysis: data ?? null,
    isLoading,
    isError,
  };
}
