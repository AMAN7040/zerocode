import {
  AuthResult,
  AuthUser,
  LoginCredentials,
  RegisterCredentials,
} from "@/types/authTypes";
import {
  login as loginService,
  register as registerService,
} from "@/services/authService";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { decodeMockJWT } from "@/lib/jwt";

interface AuthContextProps {
  user: AuthUser | null;
  token: string | null;
  login: (data: LoginCredentials) => Promise<AuthResult>;
  register: (data: RegisterCredentials) => Promise<AuthResult>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const decode = decodeMockJWT(storedToken);
      setUser(decode);
      setToken(storedToken);
    }
  }, []);

  const login = useCallback(
    async (data: LoginCredentials): Promise<AuthResult> => {
      const res = await loginService(data);
      if (res.success) {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        setToken(res.data.token);
      }
      return res;
    },
    []
  );

  const register = useCallback(
    async (data: RegisterCredentials): Promise<AuthResult> => {
      const res = await registerService(data);
      if (res.success) {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        setToken(res.data.token);
      }
      return res;
    },
    []
  );

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
