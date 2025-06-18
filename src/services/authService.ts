import { userLogin, userRegister } from "@/lib/mockAuth";
import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from "@/types/authTypes";

export const login = async (
  credentials: LoginCredentials
): Promise<AuthResponse | string> => {
  return userLogin(credentials);
};

export const register = async (
  credentials: RegisterCredentials
): Promise<AuthResponse | string> => {
  return userRegister(credentials);
};
