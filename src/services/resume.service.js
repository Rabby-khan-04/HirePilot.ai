import { authClient } from "@/lib/client/api-client";

export const parseResume = (fileUrl) =>
  authClient.post("/resumes", { fileUrl });
