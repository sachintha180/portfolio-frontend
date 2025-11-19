import type { AuthLoginRequest, AuthRegisterRequest } from "@/types/api";
import type { useAuthAPI } from "@/contexts/hooks/useAuthAPI";
import type { useAuthState } from "@/contexts/hooks/useAuthState";

export function useAuthOperations(
  state: ReturnType<typeof useAuthState>,
  api: ReturnType<typeof useAuthAPI>
) {
  // Get access to the state
  const { setIsAuthenticated, setIsLoading, setError } = state;

  // Get access to the API
  const {
    register: apiRegister,
    login: apiLogin,
    logout: apiLogout,
    verify: apiVerify,
  } = api;

  // Verify authentication status
  const verify = async (): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await apiVerify();
      setIsAuthenticated(result.authenticated);
      return result.authenticated;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Verification failed";
      setError(errorMessage);
      setIsAuthenticated(false);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Register new user
  const register = async (data: AuthRegisterRequest): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      await apiRegister(data);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Registration failed";
      setError(errorMessage);
      setIsAuthenticated(false);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Login user
  const login = async (credentials: AuthLoginRequest): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      await apiLogin(credentials);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Login failed";
      setError(errorMessage);
      setIsAuthenticated(false);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout user
  const logout = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      await apiLogout();
      setIsAuthenticated(false);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Logout failed";
      setError(errorMessage);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    login,
    logout,
    verify,
  };
}
