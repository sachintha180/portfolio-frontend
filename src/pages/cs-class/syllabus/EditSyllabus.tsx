import Seperator from "@/components/ui/seperator";
import Header from "@/components/portfolio/Header";
import SyllabusEditModal from "@/components/cs-class/SyllabusEditModal";
import UnderliningLink from "@/components/ui/underlining-link";
import { FiArrowLeft } from "react-icons/fi";
import { useParams } from "react-router-dom";
import NotFound from "@/components/layouts/NotFound";

export default function EditSyllabus() {
  const { id } = useParams();

  // If no ID, redirect to home
  if (!id) {
    return <NotFound linkHref="/cs-class" />;
  }

  return (
    <section className="mx-5 my-10 flex flex-1 flex-col gap-5 md:mx-15">
      {/* Header */}
      <Header title="cs class" subtitle="notes, videos, and more">
        <UnderliningLink href="/cs-class" variant="link">
          <FiArrowLeft aria-hidden="true" className="h-5 w-5" />
          <span className="text-lg">go back</span>
        </UnderliningLink>
      </Header>

      {/* Seperator */}
      <Seperator />

      {/* Syllabus Edit Modal */}
      <div className="flex flex-1 items-center justify-center">
        <SyllabusEditModal syllabusId={id} />
      </div>
    </section>
  );
}
