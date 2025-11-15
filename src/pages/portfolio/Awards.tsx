import { FiArrowLeft } from "react-icons/fi";
import UnderliningLink from "@/components/ui/underlining-link";
import Seperator from "@/components/ui/seperator";
import { SORTED_AWARD_ITEMS } from "@/lib/portfolio/awards";
import AwardListItem from "@/components/portfolio/AwardListItem";
import Header from "@/components/portfolio/Header";

export default function Awards() {
  return (
    <section className="flex flex-col gap-5 mx-5 md:mx-15 my-10">
      {/* Header */}
      <Header subtitle="honors and awards">
        <UnderliningLink href="/" variant="link">
          <FiArrowLeft aria-hidden="true" className="w-5 h-5" />
          <span className="text-lg">back to home</span>
        </UnderliningLink>
      </Header>

      {/* Seperator */}
      <Seperator />

      {/* Education Section */}
      <section className="flex-1">
        {/* Timeline */}
        <ol className="relative border-l-2 border-cool md:ml-2 md:pb-1 pl-3 md:pl-6">
          {SORTED_AWARD_ITEMS.map((item, index) => (
            <AwardListItem
              key={`${item.organization.name}-${index}`}
              {...item}
              isLastInGroup={index === SORTED_AWARD_ITEMS.length - 1}
            />
          ))}
        </ol>
      </section>
    </section>
  );
}
