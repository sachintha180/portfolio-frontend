import { useCallback } from "react";
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
    refresh: apiRefresh,
  } = api;

  // Verify authentication status
  // NOTE: Don't set error here, otherwise will show up in the login / register modal
  const verify = useCallback(async (): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await apiVerify();
      setIsAuthenticated(result.authenticated);
      return result.authenticated;
    } catch (error) {
      setIsAuthenticated(false);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [apiVerify, setIsAuthenticated, setIsLoading, setError]);

  // Register new user
  const register = useCallback(
    async (data: AuthRegisterRequest): Promise<boolean> => {
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
    },
    [apiRegister, setIsAuthenticated, setIsLoading, setError]
  );

  // Login user
  const login = useCallback(
    async (credentials: AuthLoginRequest): Promise<boolean> => {
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
    },
    [apiLogin, setIsAuthenticated, setIsLoading, setError]
  );

  // Logout user
  const logout = useCallback(async (): Promise<void> => {
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
  }, [apiLogout, setIsAuthenticated, setIsLoading, setError]);

  // Refresh access token
  const refresh = useCallback(async (): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      await apiRefresh();
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Refresh failed";
      setError(errorMessage);
      setIsAuthenticated(false);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [apiRefresh, setIsAuthenticated, setIsLoading, setError]);

  return {
    register,
    login,
    logout,
    verify,
    refresh,
  };
}
