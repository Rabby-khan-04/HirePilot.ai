import { fetchOverview } from "@/services/dashboard.service";
import { useQuery } from "@tanstack/react-query";

export function useOverview() {
  return useQuery({
    queryKey: ["overview"],
    queryFn: fetchOverview,
    staleTime: 1000 * 60 * 5,
  });
}
