export interface LoginCredentials {
  email: string;
  passowrd: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
}

export interface ApiResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}
