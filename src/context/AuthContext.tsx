import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

const API_URL = import.meta.env.VITE_API_URL as string;
const API_SECRET = import.meta.env.VITE_API_SECRET as string;

type AuthContextType = {
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  authFetch: (path: string, options?: RequestInit) => Promise<any>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(
    () => sessionStorage.getItem("token")
  );

  const login = async (email: string, password: string) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Secret": API_SECRET,
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Inloggen mislukt. Controleer je gegevens.");

    const data = await res.json();
    sessionStorage.setItem("token", data.token);
    setToken(data.token);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setToken(null);
  }; 

  const authFetch = async (path: string, options: RequestInit = {}) => {
    const res = await fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "X-Api-Secret": API_SECRET,
        ...options.headers,
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });

    if (res.status === 401) {
      logout();
      throw new Error("Je sessie is verlopen. Log opnieuw in.");
    }
    if (res.status === 403) {
      throw new Error("Alleen administrators mogen dit doen.");
    }
    if (!res.ok) throw new Error(`Er ging iets mis (${res.status}).`);

    return res.status === 204 ? null : res.json();
  };

  return (
    <AuthContext.Provider value={{ isAdmin: !!token, login, logout, authFetch }}>
      {children}
    </AuthContext.Provider>
  );
}

// Ik zou evt ook een aparte component hiervan kunnen maken... Idee voor later.
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth moet binnen een AuthProvider gebruikt worden");
  return ctx;
};