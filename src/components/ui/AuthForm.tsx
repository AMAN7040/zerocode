"use client";

import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthContext } from "@/context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  loginSchema,
  registerSchema,
  LoginFormValues,
  RegisterFormValues,
} from "@/types/authSchema";
import { cn } from "@/lib/utlis";

interface AuthFormProps {
  mode: "login" | "register";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const isLogin = mode === "login";
  const schema = isLogin ? loginSchema : registerSchema;

  type FormValues = LoginFormValues | RegisterFormValues;

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const { login, register: registerUser } = useAuthContext();
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (data: FormValues) => {
    setError("");
    const result = isLogin
      ? await login(data as LoginFormValues)
      : await registerUser(data as RegisterFormValues);

    if (!result.success) {
      setError(result.error || "Authentication failed");
    } else {
      router.replace("/chat");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-4 border border-border rounded-xl max-w-md w-full mx-auto"
    >
      <h2 className="text-xl font-semibold text-center capitalize">{mode}</h2>

      {/* ✅ Name field - only shown in register mode */}
      {!isLogin && (
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            {...formRegister("name" as keyof RegisterFormValues)}
            className={cn("input-class", {
              "border-red-500": "name" in errors,
            })}
          />
          {"name" in errors && (
            <p className="text-red-500 text-xs mt-1">
              {(errors as FieldErrors<RegisterFormValues>).name?.message}
            </p>
          )}
        </div>
      )}

      {/* ✅ Email Field */}
      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          {...formRegister("email")}
          className={cn("input-class", {
            "border-red-500": !!errors.email,
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">
            {errors.email.message as string}
          </p>
        )}
      </div>

      {/* ✅ Password Field */}
      <div>
        <label className="text-sm font-medium">Password</label>
        <input
          type="password"
          {...formRegister("password")}
          className={cn("input-class", {
            "border-red-500": !!errors.password,
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">
            {errors.password.message as string}
          </p>
        )}
      </div>

      {/* ✅ Global form error */}
      {error && <p className="text-red-600 text-sm">{error}</p>}

      {/* ✅ Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary text-white w-full py-2 rounded-md disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : isLogin ? "Login" : "Register"}
      </button>
    </form>
  );
}
