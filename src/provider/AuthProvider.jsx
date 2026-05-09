"use client";

import { useInitAuth } from "@/hooks/auth/useInitUser";

export default function AuthProvider({ children }) {
  useInitAuth();
  return <>{children}</>;
}
