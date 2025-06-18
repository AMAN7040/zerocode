import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const auth = useAuthContext();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!auth) return;
    if (!auth.user || !auth.token) {
      router.replace("/login");
    } else {
      setChecked(true);
    }
  }, [auth, router]);

  if (!checked) return null;
  return <>{children}</>;
}
