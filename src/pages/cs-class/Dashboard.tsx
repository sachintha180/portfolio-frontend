import Seperator from "@/components/ui/seperator";
import PageButton from "@/components/ui/page-button";
import Header from "@/components/portfolio/Header";
import UnderliningLink from "@/components/ui/underlining-link";
import { FiEdit, FiLogOut, FiPlus, FiTrash } from "react-icons/fi";
import { PAGE_ITEMS, SYLLABUS_LEVELS } from "@/lib/cs-class/constants";
import { useSyllabus } from "@/contexts";
import { useEffect } from "react";
import LoadingSkeleton from "@/components/skeletons/LoadingSkeleton";

const SYLLABUS_COLOR_PALETTE = [
  "bg-warm",
  "bg-cool",
  "bg-success",
  "bg-danger",
  "bg-secondary",
  "bg-link",
];

export default function Dashboard() {
  const {
    getAllSyllabuses,
    syllabuses,
    isLoading: isLoadingSyllabuses,
  } = useSyllabus();

  // NOTE: The syllabuses state is not referentially stable, so we don't include it in the dependency array.
  //       If can be made stable using useMemo + deep comparision (since syllabuses is an object), but this is
  //       computationally expensive.
  useEffect(() => {
    const fetchSyllabuses = async () => {
      if (Object.keys(syllabuses).length) {
        return;
      }
      await getAllSyllabuses();
    };
    fetchSyllabuses();
  }, [getAllSyllabuses]);

  return (
    <section className="mx-5 my-10 flex flex-1 flex-col gap-5 md:mx-15">
      {/* Header  */}
      <Header title="cs class" subtitle="welcome to class, sachintha">
        <UnderliningLink href="/cs-class/logout" variant="link">
          <FiLogOut aria-hidden="true" className="h-5 w-5" />
          <span className="text-lg">logout</span>
        </UnderliningLink>
      </Header>

      {/* Seperator */}
      <Seperator />

      {/* Quick Links */}
      <section className="flex flex-col gap-2">
        <h3 className="text-secondary mb-5 text-2xl">quick links</h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PAGE_ITEMS.map((pageItem) => (
            <PageButton key={pageItem.nodeLabel} {...pageItem} />
          ))}
        </div>
      </section>

      {/* Seperator */}
      <Seperator />

      {/* Recent Uploads */}
      <section className="flex flex-col gap-2">
        {/* Section Header */}
        <div className="mb-5 flex items-start justify-between">
          <h3 className="text-secondary text-2xl">recent uploads</h3>

          {/* Add Syllabus Button */}
          <UnderliningLink href="/cs-class/file/add" variant="link">
            <FiPlus aria-hidden="true" className="h-5 w-5" />
            <span className="hidden text-lg sm:block">add file</span>
          </UnderliningLink>
        </div>

        {/* Section Content */}
        <div className="space-y-2">
          <div className="text-muted">No recent uploads found.</div>
        </div>
        {/* <div className="space-y-2">
          <UploadItem
            type="note"
            url="https://www.google.com"
            title="Syllabus Notes.pdf"
            itemCategoryLabel="Edexcel IGCSE CS (4CP0)"
            relativeUploadTime="2 hrs ago"
          />
          <UploadItem
            type="video"
            url="https://www.google.com"
            title="Lecture1.mp4"
            itemCategoryLabel="Cambridge OL CS (2210)"
            relativeUploadTime="4 hrs ago"
          />
          <UploadItem
            type="code"
            url="https://www.google.com"
            title="BubbleSort.py"
            itemCategoryLabel="Edexcel IGCSE ICT (41T1)"
            relativeUploadTime="1 day ago"
          />
          <UploadItem
            type="quiz"
            url="https://www.google.com"
            title="Mock Quiz"
            itemCategoryLabel="Edexcel IAL IT (X/YIT11)"
            relativeUploadTime="5 days ago"
          />
        </div> */}
      </section>

      {/* Seperator */}
      <Seperator />

      {/* All Syllabuses Buttons */}
      <section className="flex flex-col gap-2">
        {/* Section Header */}
        <div className="mb-5 flex items-start justify-between">
          <h3 className="text-secondary text-2xl">all syllabuses</h3>

          {/* Add Syllabus Button */}
          <UnderliningLink href="/cs-class/syllabus/add" variant="link">
            <FiPlus aria-hidden="true" className="h-5 w-5" />
            <span className="hidden text-lg sm:block">add syllabus</span>
          </UnderliningLink>
        </div>

        {/* Section Content */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {isLoadingSyllabuses ? (
            <LoadingSkeleton message="Loading syllabuses" />
          ) : Object.keys(syllabuses).length ? (
            Object.values(syllabuses).map((syllabus, index) => {
              const colorClass =
                SYLLABUS_COLOR_PALETTE[index % SYLLABUS_COLOR_PALETTE.length] ??
                "bg-secondary";
              const syllabusLevel = SYLLABUS_LEVELS[syllabus.level];

              return (
                <PageButton
                  key={syllabus.code}
                  buttonLabel={syllabus.name}
                  nodeLabel={syllabus.code}
                  href={`/cs-class/syllabus/${syllabus.id}`}
                  colorClass={colorClass}
                >
                  <div className="flex items-center justify-between">
                    {/* Syllabus Level and Code */}
                    <span className="text-sm">{`${syllabusLevel} - ${syllabus.code}`}</span>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between gap-2">
                      {/* Delete Syllabus Button */}
                      <UnderliningLink
                        href={`/cs-class/syllabus/${syllabus.id}/delete`}
                        variant="surface"
                        className="mr-2 pb-1"
                      >
                        <FiTrash aria-hidden="true" className="h-5 w-5" />
                      </UnderliningLink>

                      {/* Edit Syllabus Button */}
                      <UnderliningLink
                        href={`/cs-class/syllabus/${syllabus.id}/edit`}
                        variant="surface"
                        className="mr-2 pb-1"
                      >
                        <FiEdit aria-hidden="true" className="h-5 w-5" />
                      </UnderliningLink>
                    </div>
                  </div>
                </PageButton>
              );
            })
          ) : (
            <div className="text-muted">No syllabuses found.</div>
          )}
        </div>
      </section>
    </section>
  );
}
