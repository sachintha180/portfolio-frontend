import Seperator from "@/components/ui/seperator";
import PageButton from "@/components/ui/page-button";
import Header from "@/components/portfolio/Header";
import { CLASS_ITEMS } from "@/lib/cs-class/constants";
import UnderliningLink from "@/components/ui/underlining-link";
import { FiArrowLeft } from "react-icons/fi";

export default function Home() {
  return (
    <section className="flex-1 flex flex-col gap-5 mx-5 md:mx-15 my-10">
      {/* Header w/ copyright */}
      <Header title="cs class" subtitle="material, meetings, and modules">
        <UnderliningLink href="/projects" variant="link">
          <FiArrowLeft aria-hidden="true" className="w-5 h-5" />
          <span className="text-lg">back to projects</span>
        </UnderliningLink>
      </Header>

      {/* Seperator */}
      <Seperator />

      {/* Class Progress Section */}
      <section className="flex flex-col gap-2">
        <h3 className="text-secondary text-2xl mb-5">class progress</h3>
      </section>

      {/* Seperator */}
      <Seperator />

      {/* Recent Uploads Section */}
      <section className="flex flex-col gap-2">
        <h3 className="text-secondary text-2xl mb-5">recent uploads</h3>
      </section>

      {/* Seperator */}
      <Seperator />

      {/* Classes Buttons */}
      <section className="flex flex-col gap-2">
        <h3 className="text-secondary text-2xl mb-5">all classes</h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {CLASS_ITEMS.map((classItem) => (
            <PageButton key={classItem.nodeLabel} {...classItem} />
          ))}
        </div>
      </section>
    </section>
  );
}
