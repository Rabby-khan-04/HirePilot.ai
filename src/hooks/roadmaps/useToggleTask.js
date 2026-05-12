"use client";

import { toggleTask } from "@/services/roadmap.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useToggleTask = (roadmapId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (taskId) => toggleTask({ roadmapId, taskId }),

    // ── Optimistic update ────────────────────────────────────────────────
    // Only toggle the task checkbox — progress is recalculated by the
    // backend and synced back via onSettled invalidation.
    onMutate: async (taskId) => {
      await queryClient.cancelQueries({ queryKey: ["roadmap", roadmapId] });

      const previous = queryClient.getQueryData(["roadmap", roadmapId]);

      queryClient.setQueryData(["roadmap", roadmapId], (old) => {
        if (!old) return old;
        return {
          ...old,
          roadmap: old.roadmap.map((week) => ({
            ...week,
            days: week.days.map((day) => ({
              ...day,
              tasks: day.tasks.map((task) =>
                task._id === taskId
                  ? { ...task, isCompleted: !task.isCompleted }
                  : task,
              ),
            })),
          })),
        };
      });

      return { previous };
    },

    // ── Roll back on error ───────────────────────────────────────────────
    onError: (_err, _taskId, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["roadmap", roadmapId], context.previous);
      }
    },

    // ── Sync server truth (progress, etc.) after settle ──────────────────
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["roadmap", roadmapId] });
    },
  });
};
