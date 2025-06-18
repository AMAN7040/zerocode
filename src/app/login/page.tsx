// src/app/login/page.tsx
import AuthForm from "@/components/ui/AuthForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | ZeroCode",
  description: "Securely log in to your account",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <AuthForm mode="login" />
    </main>
  );
}
