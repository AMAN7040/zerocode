import {
  AuthResponse,
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
): Promise<AuthResponse | string> => {
  const users = getUsers();

  if (users[data.email]) {
    return "Users already exists";
  }

  users[data.email] = { name: data.name, password: data.password };
  saveUsers(users);

  const user: AuthUser = {
    id: data.email,
    name: data.name,
    email: data.email,
  };

  const token = generateMockJWT(user);

  return { token, user };
};

export const userLogin = async (
  data: LoginCredentials
): Promise<AuthResponse | string> => {
  const users = getUsers();
  const userRecord = users[data?.email];

  if (!userRecord) return "Users does not exists";
  if (userRecord.password !== data.email) return "Incorrect Password";

  const user: AuthUser = {
    id: data.email,
    name: userRecord.name,
    email: data.email,
  };

  const token = generateMockJWT(user);

  return { token, user };
};
