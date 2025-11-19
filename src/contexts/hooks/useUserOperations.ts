import type { User, UserUpdate } from "@/types/api";
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
      // Get user by ID
      const result = await apiGetUser(userId);
      setUser(result);
      return result;
    } catch (error) {
      // Handle get user error
      console.error("Get user error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Failed to get user";
      setError(errorMessage);
      return null;
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

  // Update user
  const updateUser = async (
    userId: string,
    data: UserUpdate
  ): Promise<User | null> => {
    setIsLoading(true);
    setError(null);

    try {
      // Update user
      const result = await apiUpdateUser(userId, data);
      setUser(result);
      return result;
    } catch (error) {
      // Handle update user error
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
      // Delete user
      await apiDeleteUser(userId);
      setUser(null);
    } catch (error) {
      // Handle delete user error
      console.error("Delete user error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Failed to delete user";
      setError(errorMessage);
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

  return {
    getUser,
    updateUser,
    deleteUser,
  };
}
