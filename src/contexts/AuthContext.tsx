import { createContext, useContext, type ReactNode } from "react";
import type { AuthLogin, AuthRegister, AuthToken } from "@/types/api";
import { useAuthState } from "@/contexts/hooks/useAuthState";
import { useAuthAPI } from "@/contexts/hooks/useAuthAPI";
import { useAuthOperations } from "@/contexts/hooks/useAuthOperations";

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  register: (data: AuthRegister) => Promise<AuthToken | null>;
  login: (credentials: AuthLogin) => Promise<AuthToken | null>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const state = useAuthState();
  const api = useAuthAPI();
  const operations = useAuthOperations(state, api);

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        error: state.error,
        register: operations.register,
        login: operations.login,
        logout: operations.logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
