import { api } from "@/lib/api";
import type {
  UserUpdateRequest,
  UserGetResponse,
  UserUpdateResponse,
} from "@/types/api";

export function useUserAPI() {
  // Get user by ID
  const getUser = async (userId: string): Promise<UserGetResponse> => {
    const { data } = await api.get<UserGetResponse>(`/users/${userId}`);
    return data;
  };

  // Update user
  const updateUser = async (
    userId: string,
    payload: UserUpdateRequest
  ): Promise<UserUpdateResponse> => {
    const { data } = await api.patch<UserUpdateResponse>(
      `/users/${userId}`,
      payload
    );
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
