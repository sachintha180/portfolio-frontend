import Seperator from "@/components/ui/seperator";
import Header from "@/components/portfolio/Header";
import UnderliningLink from "@/components/ui/underlining-link";
import { FiArrowLeft } from "react-icons/fi";
import { useParams } from "react-router-dom";
import NotFound from "@/components/layouts/NotFound";
import SyllabusDeleteModal from "@/components/cs-class/SyllabusDeleteModal";

export default function DeleteSyllabus() {
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

      {/* Syllabus Delete Modal */}
      <div className="flex flex-1 items-center justify-center">
        <SyllabusDeleteModal syllabusId={id} />
      </div>
    </section>
  );
}
