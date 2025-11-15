import { FiArrowLeft } from "react-icons/fi";
import UnderliningLink from "@/components/ui/underlining-link";
import Seperator from "@/components/ui/seperator";
import PortfolioLayout from "@/components/layouts/PortfolioLayout";
import {
  GROUPED_EXPERIENCE_ITEMS,
  GROUPED_EXPERIENCE_DURATIONS,
} from "@/lib/portfolio/experience";
import { convertMonthsToOptimisticYears } from "@/lib/portfolio/utils";
import ExperienceListItem from "@/components/portfolio/ExperienceListItem";
import Header from "@/components/portfolio/Header";

const BORDER_COLOR_PALETTE = ["border-cool", "border-success"];
const CIRCLE_COLOR_PALETTE = ["bg-cool", "bg-success"];
const TEXT_COLOR_PALETTE = ["text-cool", "text-success"];

export default function Experience() {
  return (
    <PortfolioLayout>
      {/* Content Container */}
      <section className="flex flex-col gap-5 mx-5 md:mx-15 my-10">
        {/* Header */}
        <Header subtitle="my experience">
          <UnderliningLink href="/" variant="link">
            <FiArrowLeft aria-hidden="true" className="w-5 h-5" />
            <span className="text-lg">back to home</span>
          </UnderliningLink>
        </Header>

        {/* Seperator */}
        <Seperator />

        {/* Experience Section */}
        <section className="flex flex-col md:flex-row items-start gap-2 md:gap-10">
          {GROUPED_EXPERIENCE_ITEMS.map((groupItem, index) => {
            const borderColorClass =
              BORDER_COLOR_PALETTE[index % BORDER_COLOR_PALETTE.length];
            const circleColorClass =
              CIRCLE_COLOR_PALETTE[index % CIRCLE_COLOR_PALETTE.length];
            const textColorClass =
              TEXT_COLOR_PALETTE[index % TEXT_COLOR_PALETTE.length];

            return (
              <div
                id={groupItem.group}
                key={groupItem.group}
                className="flex-1"
              >
                {/* Group Name */}
                <h3
                  className={`${textColorClass} font-bold text-2xl lowercase `}
                >
                  {groupItem.group}
                </h3>

                <p className={`${textColorClass} grayscale-50`}>
                  {convertMonthsToOptimisticYears(
                    GROUPED_EXPERIENCE_DURATIONS[groupItem.group]
                  )}{" "}
                  of experience
                </p>

                {/* Timeline */}
                <ol
                  className={`relative border-l-2 ${borderColorClass} md:ml-2 mt-5 md:pb-1 pl-3 md:pl-6`}
                >
                  {groupItem.items.map((item, index) => (
                    <ExperienceListItem
                      key={`${item.organization.name}-${index}`}
                      organization={item.organization}
                      label={item.organization.name}
                      roles={item.roles}
                      colorClasses={{
                        border: borderColorClass,
                        circle: circleColorClass,
                        text: textColorClass,
                      }}
                      isLastInGroup={index === groupItem.items.length - 1}
                    />
                  ))}
                </ol>
              </div>
            );
          })}
        </section>
      </section>
    </PortfolioLayout>
  );
}
