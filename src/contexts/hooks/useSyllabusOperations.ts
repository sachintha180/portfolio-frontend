import { useCallback, useMemo } from "react";
import type {
  Syllabus,
  SyllabusCreateRequest,
  SyllabusUpdateRequest,
} from "@/types/api";
import type { useSyllabusAPI } from "@/contexts/hooks/useSyllabusAPI";
import type { useSyllabusState } from "@/contexts/hooks/useSyllabusState";

export function useSyllabusOperations(
  state: ReturnType<typeof useSyllabusState>,
  api: ReturnType<typeof useSyllabusAPI>
) {
  // Get access to the state
  const { setSyllabuses, setIsLoading, setError } = state;

  // Get access to the API
  const {
    createSyllabus: apiCreateSyllabus,
    getSyllabus: apiGetSyllabus,
    getAllSyllabuses: apiGetAllSyllabuses,
    updateSyllabus: apiUpdateSyllabus,
    deleteSyllabus: apiDeleteSyllabus,
  } = api;

  // Create a new syllabus
  const createSyllabus = useCallback(
    async (data: SyllabusCreateRequest): Promise<Syllabus | null> => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await apiCreateSyllabus(data);
        const newSyllabus = result.syllabus;
        if (!newSyllabus.id) {
          throw new Error("Syllabus ID is undefined");
        }
        const id = newSyllabus.id;
        setSyllabuses((prev) => ({
          ...prev,
          [id]: newSyllabus,
        }));
        return newSyllabus;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to create syllabus";
        setError(errorMessage);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [apiCreateSyllabus, setSyllabuses, setIsLoading, setError]
  );

  // Get syllabus by ID
  const getSyllabus = useCallback(
    async (syllabusId: string): Promise<Syllabus | null> => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await apiGetSyllabus(syllabusId);
        const syllabus = result.syllabus;
        if (!syllabus.id) {
          throw new Error("Syllabus ID is undefined");
        }
        const id = syllabus.id;
        setSyllabuses((prev) => ({
          ...prev,
          [id]: syllabus,
        }));
        return syllabus;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to get syllabus";
        setError(errorMessage);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [apiGetSyllabus, setSyllabuses, setIsLoading, setError]
  );

  // Get all syllabuses
  const getAllSyllabuses = useCallback(async (): Promise<Syllabus[] | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await apiGetAllSyllabuses();
      const syllabusesMap = result.syllabuses.reduce<Record<string, Syllabus>>(
        (acc, syllabus) => {
          if (syllabus.id) {
            acc[syllabus.id] = syllabus;
          }
          return acc;
        },
        {}
      );
      setSyllabuses(syllabusesMap);
      return result.syllabuses;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to get syllabuses";
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [apiGetAllSyllabuses, setSyllabuses, setIsLoading, setError]);

  // Update syllabus
  const updateSyllabus = useCallback(
    async (
      syllabusId: string,
      data: SyllabusUpdateRequest
    ): Promise<Syllabus | null> => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await apiUpdateSyllabus(syllabusId, data);
        const updatedSyllabus = result.syllabus;
        if (!updatedSyllabus.id) {
          throw new Error("Syllabus ID is undefined");
        }
        const id = updatedSyllabus.id;
        setSyllabuses((prev) => ({
          ...prev,
          [id]: updatedSyllabus,
        }));
        return updatedSyllabus;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to update syllabus";
        setError(errorMessage);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [apiUpdateSyllabus, setSyllabuses, setIsLoading, setError]
  );

  // Delete syllabus
  const deleteSyllabus = useCallback(
    async (syllabusId: string): Promise<void> => {
      setIsLoading(true);
      setError(null);

      try {
        await apiDeleteSyllabus(syllabusId);
        setSyllabuses((prev) => {
          const { [syllabusId]: _, ...rest } = prev;
          return rest;
        });
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to delete syllabus";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    [apiDeleteSyllabus, setSyllabuses, setIsLoading, setError]
  );

  return useMemo(
    () => ({
      createSyllabus,
      getSyllabus,
      getAllSyllabuses,
      updateSyllabus,
      deleteSyllabus,
    }),
    [
      createSyllabus,
      getSyllabus,
      getAllSyllabuses,
      updateSyllabus,
      deleteSyllabus,
    ]
  );
}
