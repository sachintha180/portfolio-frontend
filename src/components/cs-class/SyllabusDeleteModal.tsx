import { useSyllabus } from "@/contexts/SyllabusContext";
import NotFound from "../layouts/NotFound";
import { useEffect } from "react";
import LoadingSkeleton from "../skeletons/LoadingSkeleton";
import { FiArrowRight, FiLoader } from "react-icons/fi";
import UnderliningLink from "../ui/underlining-link";
import { useNavigate } from "react-router-dom";

type SyllabusDeleteModalProps = {
  syllabusId: string;
};

export default function SyllabusDeleteModal({
  syllabusId,
}: SyllabusDeleteModalProps) {
  const navigate = useNavigate();
  const {
    getSyllabus,
    syllabuses,
    isLoading,
    deleteSyllabus,
    error: deleteError,
  } = useSyllabus();

  // Fetch syllabus if not already in context
  useEffect(() => {
    if (!syllabuses[syllabusId]) {
      getSyllabus(syllabusId);
    }
  }, [syllabusId, syllabuses, getSyllabus]);

  // Get current syllabus
  const syllabus = syllabuses[syllabusId];

  // Show loading if fetching syllabus
  if (isLoading && !syllabus) {
    return <LoadingSkeleton className="flex-1 justify-center" />;
  }

  // Show not found if syllabus doesn't exist
  if (!syllabus) {
    return (
      <NotFound
        description="Sorry, this syllabus does not exist."
        linkHref="/cs-class"
      />
    );
  }

  const onSubmit = async () => {
    await deleteSyllabus(syllabusId);
    navigate("/cs-class");
  };

  return (
    <div className="border-muted/30 mx-auto mt-3 flex w-full flex-1 flex-col gap-5 border p-5 sm:max-w-md">
      {/* Header */}
      <h2 className="text-center text-2xl lg:text-left">delete syllabus</h2>

      {/* Delete Error */}
      {deleteError && (
        <div className="bg-red-500 p-2 text-center text-white">
          {deleteError}
        </div>
      )}

      {/* Warning Message */}
      <div className="text-muted flex flex-col gap-2">
        <p>Are you sure you want to delete the following syllabus?</p>
        <p className="text-xl font-semibold">{syllabus.name}</p>
        <p className="font-semibold text-red-500">
          This will permanently delete all associated lessons, files, tests, and
          results.
        </p>
      </div>

      {/* Delete Button */}
      <button
        type="button"
        disabled={isLoading}
        className="mt-2 w-full cursor-pointer bg-red-600 px-3 py-2 font-semibold text-white transition duration-150 hover:bg-red-600/80 disabled:cursor-not-allowed disabled:bg-red-500/50"
        onClick={onSubmit}
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <span>Deleting syllabus</span>
            <FiLoader className="h-5 w-5 animate-spin" />
          </div>
        ) : (
          "Yes, Delete"
        )}
      </button>

      {/* Register Link */}
      <UnderliningLink href="/cs-class" variant="link" className="self-center">
        <span>No, return to dashboard</span>
        <FiArrowRight aria-hidden="true" className="h-5 w-5" />
      </UnderliningLink>
    </div>
  );
}
