import {
  GROUPED_EXPERIENCE_ITEMS,
  GROUPED_EXPERIENCE_DURATIONS,
} from "@/lib/portfolio/experience";
import { convertMonthsToOptimisticYears } from "@/lib/portfolio/utils";
import ExperienceListItem from "@/components/portfolio/ExperienceListItem";

const BORDER_COLOR_PALETTE = ["border-cool", "border-success"];
const CIRCLE_COLOR_PALETTE = ["bg-cool", "bg-success"];
const TEXT_COLOR_PALETTE = ["text-cool", "text-success"];

export default function ExperienceSection() {
  return (
    <section className="flex flex-col items-start gap-2 md:flex-row md:gap-10">
      {GROUPED_EXPERIENCE_ITEMS.map((groupItem, index) => {
        const borderColorClass =
          BORDER_COLOR_PALETTE[index % BORDER_COLOR_PALETTE.length] ?? "";
        const circleColorClass =
          CIRCLE_COLOR_PALETTE[index % CIRCLE_COLOR_PALETTE.length] ?? "";
        const textColorClass =
          TEXT_COLOR_PALETTE[index % TEXT_COLOR_PALETTE.length] ?? "";

        return (
          <div id={groupItem.group} key={groupItem.group} className="flex-1">
            {/* Group Name */}
            <h3 className={`${textColorClass} text-2xl font-bold lowercase`}>
              {groupItem.group}
            </h3>

            <p className={`${textColorClass} grayscale-50`}>
              {convertMonthsToOptimisticYears(
                GROUPED_EXPERIENCE_DURATIONS[groupItem.group] ?? 0
              )}{" "}
              of experience
            </p>

            {/* Timeline */}
            <ol
              className={`relative border-l-2 ${borderColorClass} mt-5 pl-3 md:ml-2 md:pb-1 md:pl-6`}
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
  );
}
