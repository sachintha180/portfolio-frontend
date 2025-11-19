import type { User, UserUpdateRequest } from "@/types/api";
import type { useUserAPI } from "@/contexts/hooks/useUserAPI";
import type { useUserState } from "@/contexts/hooks/useUserState";

export function useUserOperations(
  state: ReturnType<typeof useUserState>,
  api: ReturnType<typeof useUserAPI>
) {
  // Get access to the state
  const { setUser, setIsLoading, setError } = state;

  // Get access to the API
  const {
    getUser: apiGetUser,
    updateUser: apiUpdateUser,
    deleteUser: apiDeleteUser,
  } = api;

  // Get user by ID
  const getUser = async (userId: string): Promise<User | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await apiGetUser(userId);
      setUser(result.user);
      return result.user;
    } catch (error) {
      console.error("Get user error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Failed to get user";
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Update user
  const updateUser = async (
    userId: string,
    data: UserUpdateRequest
  ): Promise<User | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await apiUpdateUser(userId, data);
      setUser(result.user);
      return result.user;
    } catch (error) {
      console.error("Update user error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Failed to update user";
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Delete user
  const deleteUser = async (userId: string): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      await apiDeleteUser(userId);
      setUser(null);
    } catch (error) {
      console.error("Delete user error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Failed to delete user";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    getUser,
    updateUser,
    deleteUser,
  };
}
