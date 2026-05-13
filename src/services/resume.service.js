import { authClient } from "@/lib/client/api-client";

export const parseResume = (fileUrl) =>
  authClient.post("/resumes", { fileUrl });

export const fetchResumes = async ({
  search,
  statusFilter,
  sortBy,
  page,
  limit = 9,
}) => {
  const params = new URLSearchParams({
    search,
    status: statusFilter, // backend expects "status" not "statusFilter"
    sortBy,
    page: String(page),
    limit: String(limit),
  });

  const { data } = await authClient.get(`/resumes?${params}`);
  return data.data;
};
