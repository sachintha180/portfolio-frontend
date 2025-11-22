import Seperator from "@/components/ui/seperator";
import PageButton from "@/components/ui/page-button";
import Header from "@/components/portfolio/Header";
import { CLASS_ITEMS } from "@/lib/cs-class/constants";
import UnderliningLink from "@/components/ui/underlining-link";
import { FiLogOut } from "react-icons/fi";
import RecentUploads from "@/components/cs-class/RecentUploads";
import { PAGE_ITEMS } from "@/lib/cs-class/constants";
import { useSyllabus } from "@/contexts";
import { useEffect } from "react";

export default function Dashboard() {
  const { getAllSyllabuses } = useSyllabus();

  useEffect(() => {
    getAllSyllabuses();
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
      <RecentUploads />

      {/* Seperator */}
      <Seperator />

      {/* All Syllabuses Buttons */}
      <section className="flex flex-col gap-2">
        <h3 className="text-secondary mb-5 text-2xl">all syllabuses</h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CLASS_ITEMS.map((classItem) => (
            <PageButton key={classItem.nodeLabel} {...classItem} />
          ))}
        </div>
      </section>
    </section>
  );
}
