"use client";

import { fetchRoadmap } from "@/services/roadmap.service";
import { useQuery } from "@tanstack/react-query";

export const useRoadmapDetail = (roadmapId) => {
  return useQuery({
    queryKey: ["roadmap", roadmapId],
    queryFn: () => fetchRoadmap(roadmapId),
    enabled: !!roadmapId,
    staleTime: 1000 * 60,
  });
};
