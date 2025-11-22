import { FiArrowLeft } from "react-icons/fi";
import UnderliningLink from "@/components/ui/underlining-link";
import Seperator from "@/components/ui/seperator";
import { EDUCATION_ITEMS } from "@/lib/portfolio/education";
import EducationListItem from "@/components/portfolio/EducationListItem";
import Header from "@/components/portfolio/Header";

export default function Education() {
  return (
    <section className="mx-5 my-10 flex flex-1 flex-col gap-5 md:mx-15">
      {/* Header */}
      <Header title="sachintha senanayake" subtitle="my education">
        <UnderliningLink href="/portfolio" variant="link">
          <FiArrowLeft aria-hidden="true" className="h-5 w-5" />
          <span className="text-lg">back to home</span>
        </UnderliningLink>
      </Header>

      {/* Seperator */}
      <Seperator />

      {/* Education Section */}
      <section className="flex-1">
        {/* Timeline */}
        <ol className="border-danger relative border-l-2 pl-3 md:ml-2 md:pb-1 md:pl-6">
          {EDUCATION_ITEMS.map((item, index) => (
            <EducationListItem
              key={`${item.institution.name}-${index}`}
              {...item}
              isLastInGroup={index === EDUCATION_ITEMS.length - 1}
            />
          ))}
        </ol>
      </section>
    </section>
  );
}
