import { useState } from "react";
import type { Syllabus } from "@/types/api";

export function useSyllabusState() {
  // State management for syllabuses map
  const [syllabuses, setSyllabuses] = useState<Record<string, Syllabus>>({});

  // State management for loading
  const [isLoading, setIsLoading] = useState(false);

  // State management for error
  const [error, setError] = useState<string | null>(null);

  return {
    // State
    syllabuses,
    isLoading,
    error,

    // Setters
    setSyllabuses,
    setIsLoading,
    setError,
  };
}
