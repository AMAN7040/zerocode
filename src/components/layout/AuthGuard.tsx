import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AuthGuard({children}:{children: React.ReactNode}) {
  const {user, token} = useAuthContext();
  const router= useRouter();

  useEffect(()=> {
    if(!user || !token){
        router.push("/login");
    }
  },[user, token, router]);

  if(!user || !token) return null;

  return (
    <>
    {children}
    </>
  )
}