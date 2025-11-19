import { api } from "@/lib/api";
import type { User, UserUpdate } from "@/types/api";

export function useUserAPI() {
  // Get user by ID
  const getUser = async (userId: string): Promise<User> => {
    const { data } = await api.get<User>(`/users/${userId}`);
    return data;
  };

  // Update user
  const updateUser = async (
    userId: string,
    payload: UserUpdate
  ): Promise<User> => {
    const { data } = await api.patch<User>(`/users/${userId}`, payload);
    return data;
  };

  // Delete user
  const deleteUser = async (userId: string): Promise<void> => {
    await api.delete(`/users/${userId}`);
  };

  return {
    getUser,
    updateUser,
    deleteUser,
  };
}
