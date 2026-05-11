import { authClient } from "@/lib/client/api-client";

export const generateLearningRoadMap = (analysisId) =>
  authClient.post("/learning-roadmaps/generate", { analysisId });
