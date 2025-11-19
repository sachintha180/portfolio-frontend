import { api } from "@/lib/api";
import type { AuthLogin, AuthRegister, AuthToken } from "@/types/api";

export function useAuthAPI() {
  // Register new user
  const register = async (payload: AuthRegister): Promise<AuthToken> => {
    const { data } = await api.post<AuthToken>("/auth/register", payload);
    return data;
  };

  // Login user
  const login = async (payload: AuthLogin): Promise<AuthToken> => {
    const { data } = await api.post<AuthToken>("/auth/login", payload);
    return data;
  };

  return {
    register,
    login,
  };
}
