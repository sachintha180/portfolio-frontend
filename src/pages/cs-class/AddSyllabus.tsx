import Seperator from "@/components/ui/seperator";
import Header from "@/components/portfolio/Header";
import SyllabusCreateModal from "@/components/cs-class/SyllabusCreateModal";
import UnderliningLink from "@/components/ui/underlining-link";
import { FiArrowLeft } from "react-icons/fi";

export default function AddSyllabus() {
  return (
    <section className="mx-5 my-10 flex flex-1 flex-col gap-5 md:mx-15">
      {/* Header */}
      <Header title="cs class" subtitle="notes, videos, and more">
        <UnderliningLink href="/cs-class/dashboard" variant="link">
          <FiArrowLeft aria-hidden="true" className="h-5 w-5" />
          <span className="text-lg">go back</span>
        </UnderliningLink>
      </Header>

      {/* Seperator */}
      <Seperator />

      {/* Syllabus Create Modal */}
      <div className="flex flex-1 items-center justify-center">
        <SyllabusCreateModal />
      </div>
    </section>
  );
}
