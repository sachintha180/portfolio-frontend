import { api } from "@/lib/api";
import type {
  AuthLoginRequest,
  AuthRegisterRequest,
  AuthRegisterResponse,
  AuthLoginResponse,
  AuthVerifyResponse,
} from "@/types/api";
import { useCallback } from "react";

export function useAuthAPI() {
  // Register new user
  const register = useCallback(
    async (payload: AuthRegisterRequest): Promise<AuthRegisterResponse> => {
      const { data } = await api.post<AuthRegisterResponse>(
        "/auth/register",
        payload
      );
      return data;
    },
    []
  );

  // Login user
  const login = useCallback(
    async (payload: AuthLoginRequest): Promise<AuthLoginResponse> => {
      const { data } = await api.post<AuthLoginResponse>(
        "/auth/login",
        payload
      );
      return data;
    },
    []
  );

  // Logout user
  const logout = useCallback(async (): Promise<void> => {
    await api.post("/auth/logout");
  }, []);

  // Verify authentication status
  const verify = useCallback(async (): Promise<AuthVerifyResponse> => {
    const { data } = await api.get<AuthVerifyResponse>("/auth/verify");
    return data;
  }, []);

  return {
    register,
    login,
    logout,
    verify,
  };
}
