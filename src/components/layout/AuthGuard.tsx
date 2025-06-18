"use client";

import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, token, isAuthLoading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthLoading && (!user || !token)) {
      router.push("/login");
    }
  }, [user, token, isAuthLoading, router]);

  if (isAuthLoading || !user || !token) return null;

  return <>{children}</>;
}
