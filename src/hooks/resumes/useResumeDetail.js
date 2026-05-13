"use client";

import { fetchResumeById } from "@/services/resume.service";
import { useQuery } from "@tanstack/react-query";

export function useResumeDetail(resumeId) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["resume", resumeId],
    queryFn: () => fetchResumeById(resumeId),
    staleTime: 60_000,
    enabled: !!resumeId,
  });

  return {
    resume: data ?? null,
    isLoading,
    isError,
  };
}
