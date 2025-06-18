export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
}
 
export interface AuthSuccess{
    success: true,
    data: AuthResponse,
}

export interface AuthFailure{
   success: false,
   error: string,
}

export type AuthResult = AuthSuccess | AuthFailure;