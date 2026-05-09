"use client";

import { useInitAuth } from "@/hooks/useInitUser";

export default function AuthProvider({ children }) {
  useInitAuth();
  return <>{children}</>;
}
