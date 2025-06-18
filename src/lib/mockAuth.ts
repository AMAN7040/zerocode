import {
  AuthResult,
  AuthUser,
  LoginCredentials,
  RegisterCredentials,
} from "@/types/authTypes";
import { generateMockJWT } from "./jwt";

const USERS_KEY = "mock_users";

const getUsers = (): Record<string, { name: string; password: string }> => {
  const data = localStorage.getItem(USERS_KEY);

  return data ? JSON.parse(data) : {};
};

const saveUsers = (
  users: Record<string, { name: string; password: string }>
) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const userRegister = async (
  data: RegisterCredentials
): Promise<AuthResult> => {
  const users = getUsers();

  if (users[data.email]) {
    return { success: false, error: "Users already exists" };
  }

  users[data.email] = { name: data.name, password: data.password };
  saveUsers(users);

  const user: AuthUser = {
    id: data.email,
    name: data.name,
    email: data.email,
  };

  const token = generateMockJWT(user);

  return { success: true, data: { token, user } };
};

export const userLogin = async (
  data: LoginCredentials
): Promise<AuthResult> => {
  const users = getUsers();
  const userRecord = users[data?.email];

  if (!userRecord) return { success: false, error: "Users does not exists" };
  if (userRecord.password !== data.password)
    return { success: false, error: "Incorrect Password" };
  const user: AuthUser = {
    id: data.email,
    name: userRecord.name,
    email: data.email,
  };

  const token = generateMockJWT(user);

  return { success: true, data: { token, user } };
};
