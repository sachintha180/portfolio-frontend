import { createContext, useContext, type ReactNode } from "react";
import type { AuthLoginRequest, AuthRegisterRequest } from "@/types/api";
import { useAuthState } from "@/contexts/hooks/useAuthState";
import { useAuthAPI } from "@/contexts/hooks/useAuthAPI";
import { useAuthOperations } from "@/contexts/hooks/useAuthOperations";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  register: (data: AuthRegisterRequest) => Promise<boolean>;
  login: (credentials: AuthLoginRequest) => Promise<boolean>;
  logout: () => Promise<void>;
  verify: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const state = useAuthState();
  const api = useAuthAPI();
  const operations = useAuthOperations(state, api);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        error: state.error,
        register: operations.register,
        login: operations.login,
        logout: operations.logout,
        verify: operations.verify,
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
