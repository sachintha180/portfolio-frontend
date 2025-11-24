import { useState } from "react";

export function useAuthState() {
  // State management for authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // State management for loading
  // NOTE: isLoading is set to true to prevent premature redirects
  //       before initial verification
  const [isLoading, setIsLoading] = useState(true);

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
