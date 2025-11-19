import axios from "axios";
import type { AxiosResponse, AxiosError } from "axios";

// Initialize axios instance
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Required for HTTP-only cookies
});

// Response interceptor for handling errors
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Transform error messages to use FastAPI detail
    if (axios.isAxiosError(error) && error.response?.data) {
      const data = error.response.data as { detail?: string };
      if (data.detail) {
        error.message = data.detail;
      }

      // NOTE: To be implemented later
      // // Handle session expiry (440) on non-public routes
      // if (status === 440 && !publicRoutes.includes(window.location.pathname)) {
      //   toast.error("Session expired. Redirecting to home");
      //   window.location.href = "/";
      //   return Promise.reject(error);
      // }
    }

    // All other errors pass through unchanged
    return Promise.reject(error);
  }
);
