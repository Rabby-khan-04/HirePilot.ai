"use client";

import { authClient } from "@/lib/client/api-client";
import { useUserStore } from "@/store/userStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useInitAuth = () => {
  const { setUser, clearUser } = useUserStore();

  const { data, isError } = useQuery({
    queryKey: ["auth-user"],
    queryFn: async () => {
      const res = await authClient.get("/users/user");
      return res.data.data;
    },
    retry: false,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    if (data) setUser(data);
  }, [data, setUser]);

  useEffect(() => {
    if (isError) clearUser();
  }, [clearUser, isError]);
};
