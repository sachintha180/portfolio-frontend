import { useState } from "react";

export function useAuthState() {
  // State management for authentication
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("access_token")
  );

  // State management for loading
  const [isLoading, setIsLoading] = useState(false);

  // State management for error
  const [error, setError] = useState<string | null>(null);

  return {
    // State
    token,
    isAuthenticated: !!token,
    isLoading,
    error,

    // Setters
    setToken,
    setIsLoading,
    setError,
  };
}
