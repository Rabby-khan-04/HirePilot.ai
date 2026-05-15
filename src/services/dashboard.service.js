import { authClient } from "@/lib/client/api-client";

export async function fetchOverview() {
  const { data } = await authClient.get("/dashboard/user/stats");
  return data.data;
}

const BASE = "/admin/dashboard";

export const fetchOverviewStats = async () => {
  const { data } = await authClient.get(`${BASE}/overview`);
  return data.data;
};

export const fetchUserChart = async (period = "week") => {
  const { data } = await authClient.get(
    `${BASE}/charts/users?period=${period}`,
  );
  return data.data;
};

export const fetchResumeChart = async (period = "week") => {
  const { data } = await authClient.get(
    `${BASE}/charts/resumes?period=${period}`,
  );
  return data.data;
};

export const fetchAnalysisChart = async (period = "week") => {
  const { data } = await authClient.get(
    `${BASE}/charts/analyses?period=${period}`,
  );
  return data.data;
};

export const fetchRoadmapChart = async (period = "week") => {
  const { data } = await authClient.get(
    `${BASE}/charts/roadmaps?period=${period}`,
  );
  return data.data;
};

export const fetchRecentActivity = async () => {
  const { data } = await authClient.get(`${BASE}/recent-activity`);
  return data.data;
};

export const fetchIntelligence = async () => {
  const { data } = await authClient.get(`${BASE}/intelligence`);
  return data.data;
};
