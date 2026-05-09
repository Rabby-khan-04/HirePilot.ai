"use client";

import { authClient } from "@/lib/client/api-client";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";

export const useInitAuth = () => {
  const { setUser, clearUser } = useUserStore();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const res = await authClient.get("/users/user");
        setUser(res.data.data);
      } catch {
        clearUser();
      }
    };

    initAuth();
  }, [clearUser, setUser]);
};
