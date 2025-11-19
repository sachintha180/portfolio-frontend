import { api } from "@/lib/api";
import type {
  AuthLoginRequest,
  AuthRegisterRequest,
  AuthRegisterResponse,
  AuthLoginResponse,
  AuthVerifyResponse,
} from "@/types/api";

export function useAuthAPI() {
  // Register new user
  const register = async (
    payload: AuthRegisterRequest
  ): Promise<AuthRegisterResponse> => {
    const { data } = await api.post<AuthRegisterResponse>(
      "/auth/register",
      payload
    );
    return data;
  };

  // Login user
  const login = async (
    payload: AuthLoginRequest
  ): Promise<AuthLoginResponse> => {
    const { data } = await api.post<AuthLoginResponse>("/auth/login", payload);
    return data;
  };

  // Logout user
  const logout = async (): Promise<void> => {
    await api.post("/auth/logout");
  };

  // Verify authentication status
  const verify = async (): Promise<AuthVerifyResponse> => {
    const { data } = await api.get<AuthVerifyResponse>("/auth/verify");
    return data;
  };

  return {
    register,
    login,
    logout,
    verify,
  };
}
