import type { AuthLogin, AuthRegister, AuthToken } from "@/types/api";
import type { useAuthAPI } from "@/contexts/hooks/useAuthAPI";
import type { useAuthState } from "@/contexts/hooks/useAuthState";

export function useAuthOperations(
  state: ReturnType<typeof useAuthState>,
  api: ReturnType<typeof useAuthAPI>
) {
  // Get access to the state
  const { setToken, setIsLoading, setError } = state;

  // Get access to the API
  const { register: apiRegister, login: apiLogin } = api;

  // Register new user
  const register = async (data: AuthRegister): Promise<AuthToken | null> => {
    setIsLoading(true);
    setError(null);

    try {
      // Register user and get the token
      const result = await apiRegister(data);
      setToken(result.access_token);
      localStorage.setItem("access_token", result.access_token);
      return result;
    } catch (error) {
      // Handle registration error
      console.error("Registration error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Registration failed";
      setError(errorMessage);
      return null;
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

  // Login user
  const login = async (credentials: AuthLogin): Promise<AuthToken | null> => {
    setIsLoading(true);
    setError(null);

    try {
      // Login user and get the token
      const result = await apiLogin(credentials);
      setToken(result.access_token);
      localStorage.setItem("access_token", result.access_token);
      return result;
    } catch (error) {
      // Handle login error
      console.error("Login error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Login failed";
      setError(errorMessage);
      return null;
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

  // Logout user
  const logout = () => {
    // Clear the token and remove it from localStorage
    setToken(null);
    localStorage.removeItem("access_token");
    setError(null);
  };

  return {
    register,
    login,
    logout,
  };
}
