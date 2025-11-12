import type { Organization, Program } from "@/types/miscellaneous";
import UnderliningLink from "./ui/underlining-link";
import { FiChevronUp } from "react-icons/fi";

type EducationItemProps = {
  label: string;
  institution: Organization;
  programs: Program[];
  isLastInGroup: boolean;
};

export default function EducationListItem({
  label,
  institution,
  programs,
  isLastInGroup,
}: EducationItemProps) {
  return (
    <li id={label} key={institution.name} className="md:mb-10 mb-0">
      {/* Circle */}
      <div className="hidden md:block absolute w-4 h-4 rounded-full -left-2 border border-danger bg-danger" />

      {/* Timeline Start Icon */}
      {isLastInGroup && (
        <FiChevronUp
          aria-hidden="true"
          className="hidden md:block absolute -left-4 -bottom-5 text-danger w-8 h-8 "
        />
      )}

      {/* Institution Link */}
      <UnderliningLink
        href={institution.url}
        className="text-muted inline-flex mt-1"
        variant="text"
        withIcon={true}
        target="_blank"
        rel="noreferrer"
      >
        {institution.logo && (
          <img
            src={institution.logo.src}
            alt={institution.logo.alt}
            className="h-4 grayscale hidden md:block"
          />
        )}
        {institution.name}
      </UnderliningLink>

      {/* Programs */}
      <ul>
        {programs.map((program) => (
          <li key={program.name} className="mb-5">
            <div>
              {/* Program Title */}
              <h4 className="text-lg font-medium">
                {program.name} {program.field && `- ${program.field}`}
              </h4>

              {/* Program Duration & Grades */}
              <div className="flex flex-row gap-1 items-center">
                <p className="text-sm text-muted/80">
                  {program.pursuing && "Present - "}
                  {program.endYear}
                </p>
                {program.grade && (
                  <p className="text-sm text-center text-success font-bold">
                    - {program.grade}
                  </p>
                )}
              </div>
            </div>

            {/* Program Details */}
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted mt-3">
              {program.description.split(",").map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </li>
  );
}
