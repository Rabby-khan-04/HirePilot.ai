import { authClient } from "@/lib/client/api-client";

export const generateAiAnalysis = (resumeId, jobProfileId) =>
  authClient.post("/ai-analyses/generate", { resumeId, jobProfileId });

export const fetchAnalyses = async ({
  search,
  scoreFilter,
  sortBy,
  page,
  limit = 9,
}) => {
  const params = new URLSearchParams({
    search,
    scoreFilter,
    sortBy,
    page: String(page),
    limit: String(limit),
  });

  const { data } = await authClient.get(`/ai-analyses?${params}`);
  return data.data;
};

export const fetchAnalysisById = async (id) => {
  const { data } = await authClient.get(`/ai-analyses/${id}`);
  return data.data;
};
