import { useCallback } from "react";
import { api } from "@/lib/api";
import type {
  SyllabusCreateRequest,
  SyllabusCreateResponse,
  SyllabusGetResponse,
  SyllabusesGetResponse,
  SyllabusUpdateRequest,
  SyllabusUpdateResponse,
} from "@/types/api";

export function useSyllabusAPI() {
  // Create a new syllabus
  const createSyllabus = useCallback(
    async (payload: SyllabusCreateRequest): Promise<SyllabusCreateResponse> => {
      const { data } = await api.post<SyllabusCreateResponse>(
        "/syllabus",
        payload
      );
      return data;
    },
    []
  );

  // Get all syllabuses
  const getAllSyllabuses =
    useCallback(async (): Promise<SyllabusesGetResponse> => {
      const { data } = await api.get<SyllabusesGetResponse>("/syllabus/all");
      return data;
    }, []);

  // Get a syllabus by ID
  const getSyllabus = useCallback(
    async (syllabusId: string): Promise<SyllabusGetResponse> => {
      const { data } = await api.get<SyllabusGetResponse>(
        `/syllabus/${syllabusId}`
      );
      return data;
    },
    []
  );

  // Update syllabus
  const updateSyllabus = useCallback(
    async (
      syllabusId: string,
      payload: SyllabusUpdateRequest
    ): Promise<SyllabusUpdateResponse> => {
      const { data } = await api.patch<SyllabusUpdateResponse>(
        `/syllabus/${syllabusId}`,
        payload
      );
      return data;
    },
    []
  );

  // Delete syllabus
  const deleteSyllabus = useCallback(
    async (syllabusId: string): Promise<void> => {
      await api.delete(`/syllabus/${syllabusId}`);
    },
    []
  );

  return {
    createSyllabus,
    getSyllabus,
    getAllSyllabuses,
    updateSyllabus,
    deleteSyllabus,
  };
}
