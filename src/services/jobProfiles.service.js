import { authClient } from "@/lib/client/api-client";

export const createJobProfile = (title, jobDescription) =>
  authClient.post("/job-profiles", { title, jobDescription });
