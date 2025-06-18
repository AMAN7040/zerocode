"use client";

import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const { login } = useAuthContext();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const result = await login({ email, password });

    if (!result.success) {
      setError(result.error);
      return;
    }

    router.push("/chat");
  };

  return (
    <div>
      <h1>LOgin page</h1>
      <input
        type="email"
        placeholder="enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full px-3 py-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
