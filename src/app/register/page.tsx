import AuthForm from "@/components/ui/AuthForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | ZeroCode",
  description: "Create your new ZeroCode account",
};

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <AuthForm mode="register" />
    </main>
  );
}
