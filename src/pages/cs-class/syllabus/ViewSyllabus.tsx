import Seperator from "@/components/ui/seperator";
import Header from "@/components/portfolio/Header";
import UnderliningLink from "@/components/ui/underlining-link";
import { FiArrowLeft } from "react-icons/fi";
import { useParams } from "react-router-dom";
import NotFound from "@/components/layouts/NotFound";
import { useSyllabus } from "@/contexts";
import { useEffect } from "react";
import LoadingSkeleton from "@/components/skeletons/LoadingSkeleton";

export default function ViewSyllabus() {
  const { id } = useParams();
  const {
    syllabuses,
    isLoading: isLoadingSyllabus,
    getSyllabus,
  } = useSyllabus();

  // If no ID, redirect to home
  if (!id) {
    return <NotFound linkHref="/cs-class" />;
  }

  // Fetch syllabus if not already fetched
  useEffect(() => {
    const fetchSyllabus = async () => {
      if (syllabuses[id]) {
        return;
      }
      await getSyllabus(id);
    };
    fetchSyllabus();
  }, [id, getSyllabus]);

  // Get current syllabus
  const currentSyllabus = syllabuses[id];

  // If loading, show loading skeleton
  if (isLoadingSyllabus) {
    return <LoadingSkeleton className="flex-1 justify-center" />;
  }

  // If no syllabus, show not found
  if (!currentSyllabus) {
    return (
      <NotFound
        description="Sorry, this syllabus does not exist."
        linkHref="/cs-class"
      />
    );
  }

  return (
    <section className="mx-5 my-10 flex flex-1 flex-col gap-5 md:mx-15">
      {/* Header */}
      <Header title="cs class" subtitle={currentSyllabus.name}>
        <UnderliningLink href="/cs-class" variant="link">
          <FiArrowLeft aria-hidden="true" className="h-5 w-5" />
          <span className="text-lg">go back</span>
        </UnderliningLink>
      </Header>

      {/* Seperator */}
      <Seperator />

      {/* Show Syllabus ID */}
      <div className="text-muted">Syllabus ID: {id}</div>
    </section>
  );
}
