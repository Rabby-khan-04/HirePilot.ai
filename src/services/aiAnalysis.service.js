import { authClient } from "@/lib/client/api-client";

export const generateAiAnalysis = (resumeId, jobProfileId) =>
  authClient.post("/ai-analyses/generate", { resumeId, jobProfileId });
