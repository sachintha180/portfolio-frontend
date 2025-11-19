import { createContext, useContext, type ReactNode } from "react";
import type { User, UserUpdateRequest } from "@/types/api";
import { useUserState } from "@/contexts/hooks/useUserState";
import { useUserAPI } from "@/contexts/hooks/useUserAPI";
import { useUserOperations } from "@/contexts/hooks/useUserOperations";

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  getUser: (userId: string) => Promise<User | null>;
  updateUser: (userId: string, data: UserUpdateRequest) => Promise<User | null>;
  deleteUser: (userId: string) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const state = useUserState();
  const api = useUserAPI();
  const operations = useUserOperations(state, api);

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        error: state.error,
        getUser: operations.getUser,
        updateUser: operations.updateUser,
        deleteUser: operations.deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
