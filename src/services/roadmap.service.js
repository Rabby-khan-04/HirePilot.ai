import { authClient } from "@/lib/client/api-client";

export const generateLearningRoadMap = (analysisId) =>
  authClient.post("/learning-roadmaps/generate", { analysisId });

export const fetchRoadmaps = async (params) => {
  const { data } = await authClient.get("/learning-roadmaps", { params });
  return data.data;
};

export const fetchRoadmap = async (roadmapId) => {
  const { data } = await authClient.get(`/learning-roadmaps/${roadmapId}`);
  return data.data;
};

export const toggleTask = async ({ roadmapId, taskId }) => {
  const { data } = await authClient.patch(
    `/learning-roadmaps/${roadmapId}/tasks/${taskId}/toggle`,
  );
  return data.data;
};
