import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { type User, getToken, removeToken } from "../services/api";

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState<string | null>(() => getToken());

  const login = (newToken: string, newUser: User) => {
    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    removeToken();
    setToken(null);
    setUser(null);
    localStorage.removeItem("isLoggedIn");
  };

  // Sync logout across tabs
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "token" && !e.newValue) {
        setToken(null);
        setUser(null);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, token, isLoggedIn: !!token && !!user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
