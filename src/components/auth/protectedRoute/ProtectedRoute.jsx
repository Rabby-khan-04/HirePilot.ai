"use client";

import LoadingScreen from "@/components/shared/loading/LoadingScreen";
import { useUserStore } from "@/store/userStore";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUserStore();

  if (isLoading) return <LoadingScreen />;
  if (!isAuthenticated) return null;

  return <>{children}</>;
}
