import { authClient } from "@/lib/client/api-client";

export async function fetchOverview() {
  const { data } = await authClient.get("/dashboard/user/stats");
  return data.data;
}
