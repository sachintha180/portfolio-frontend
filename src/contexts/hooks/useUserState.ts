import { useState } from "react";
import type { User } from "@/types/api";

export function useUserState() {
  // State management for user
  const [user, setUser] = useState<User | null>(null);

  // State management for loading
  const [isLoading, setIsLoading] = useState(false);

  // State management for error
  const [error, setError] = useState<string | null>(null);

  return {
    // State
    user,
    isLoading,
    error,

    // Setters
    setUser,
    setIsLoading,
    setError,
  };
}
