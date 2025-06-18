import { AuthUser } from "@/types/authTypes";

//jwt are signed and encoded
export const generateMockJWT = (user: AuthUser): string => {
  const payload = {
    id: user?.id,
    name: user?.name,
    email: user?.email,
    iat: Date.now(),
  };

  return btoa(JSON.stringify(payload));
};

//jwt decoder
export const decodeMockJWT = (token: string): AuthUser | null => {
  try {
    const payload = JSON.parse(atob(token));
    const { id, name, email } = payload;
    return { id, name, email };
  } catch {
    return null;
  }
};
