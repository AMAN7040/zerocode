import { z } from "zod";

// Shared field rules
const emailSchema = z.string().email({ message: "Invalid email address" });
const passwordSchema = z
  .string()
  .min(6, { message: "Password must be at least 6 characters" });

// Register form schema
export const registerSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: emailSchema,
  password: passwordSchema,
});

// Login form schema
export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

// Inferred types
export type RegisterFormValues = z.infer<typeof registerSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;
