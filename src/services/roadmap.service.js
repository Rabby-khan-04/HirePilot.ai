import { authClient } from "@/lib/client/api-client";

export const generateLearningRoadMap = (analysisId) =>
  authClient.post("/learning-roadmaps/generate", { analysisId });

export const fetchRoadmaps = async (params) => {
  const { data } = await authClient.get("/learning-roadmaps", { params });
  return data.data;
};
