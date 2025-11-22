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
  const createSyllabus = async (
    payload: SyllabusCreateRequest
  ): Promise<SyllabusCreateResponse> => {
    const { data } = await api.post<SyllabusCreateResponse>(
      "/syllabus",
      payload
    );
    return data;
  };

  // Get a syllabus by ID
  const getSyllabus = async (
    syllabusId: string
  ): Promise<SyllabusGetResponse> => {
    const { data } = await api.get<SyllabusGetResponse>(
      `/syllabus/${syllabusId}`
    );
    return data;
  };

  // Get all syllabuses
  const getAllSyllabuses = async (): Promise<SyllabusesGetResponse> => {
    const { data } = await api.get<SyllabusesGetResponse>("/syllabus/all");
    return data;
  };

  // Update syllabus
  const updateSyllabus = async (
    syllabusId: string,
    payload: SyllabusUpdateRequest
  ): Promise<SyllabusUpdateResponse> => {
    const { data } = await api.patch<SyllabusUpdateResponse>(
      `/syllabus/${syllabusId}`,
      payload
    );
    return data;
  };

  // Delete syllabus
  const deleteSyllabus = async (syllabusId: string): Promise<void> => {
    await api.delete(`/syllabus/${syllabusId}`);
  };

  return {
    createSyllabus,
    getSyllabus,
    getAllSyllabuses,
    updateSyllabus,
    deleteSyllabus,
  };
}
