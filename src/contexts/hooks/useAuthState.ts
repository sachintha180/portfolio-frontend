import { useState } from "react";

export function useAuthState() {
  // State management for authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // State management for loading
  const [isLoading, setIsLoading] = useState(false);

  // State management for error
  const [error, setError] = useState<string | null>(null);

  return {
    // State
    isAuthenticated,
    isLoading,
    error,

    // Setters
    setIsAuthenticated,
    setIsLoading,
    setError,
  };
}
