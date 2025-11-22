import type {
  Syllabus,
  SyllabusCreateRequest,
  SyllabusUpdateRequest,
} from "@/types/api";
import { createContext, useContext, type ReactNode } from "react";
import { useSyllabusAPI } from "./hooks/useSyllabusAPI";
import { useSyllabusOperations } from "./hooks/useSyllabusOperations";
import { useSyllabusState } from "./hooks/useSyllabusState";

type SyllabusContextType = {
  syllabuses: Record<string, Syllabus>;
  isLoading: boolean;
  error: string | null;
  getSyllabus: (syllabusId: string) => Promise<Syllabus | null>;
  getAllSyllabuses: () => Promise<Syllabus[] | null>;
  createSyllabus: (data: SyllabusCreateRequest) => Promise<Syllabus | null>;
  updateSyllabus: (
    syllabusId: string,
    data: SyllabusUpdateRequest
  ) => Promise<Syllabus | null>;
  deleteSyllabus: (syllabusId: string) => Promise<void>;
};

const SyllabusContext = createContext<SyllabusContextType | undefined>(
  undefined
);

export function SyllabusProvider({ children }: { children: ReactNode }) {
  const state = useSyllabusState();
  const api = useSyllabusAPI();
  const operations = useSyllabusOperations(state, api);

  return (
    <SyllabusContext.Provider value={{ ...state, ...operations }}>
      {children}
    </SyllabusContext.Provider>
  );
}

export function useSyllabus() {
  const context = useContext(SyllabusContext);
  if (context === undefined) {
    throw new Error("useSyllabus must be used within a SyllabusProvider");
  }
  return context;
}
