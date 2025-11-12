import type { Organization, Role } from "@/types/miscellaneous";
import UnderliningLink from "./ui/underlining-link";
import { formatTimelineDate } from "@/lib/utils";
import { FiChevronUp } from "react-icons/fi";

type ExperienceItemProps = {
  organization: Organization;
  roles: Role[];
  colorClasses: {
    border: string;
    circle: string;
    text: string;
  };
  isLastInGroup: boolean;
};

export default function ExperienceListItem({
  organization,
  roles,
  colorClasses,
  isLastInGroup,
}: ExperienceItemProps) {
  return (
    <li key={organization.name} className="md:mb-10 mb-0">
      {/* Circle */}
      <div
        className={`hidden md:block absolute w-4 h-4 rounded-full -left-2 border ${colorClasses.border} ${colorClasses.circle}`}
      />

      {/* Timeline Start Icon */}
      {isLastInGroup && (
        <FiChevronUp
          aria-hidden="true"
          className={`hidden md:block absolute -left-4 -bottom-5 ${colorClasses.text} w-8 h-8 `}
        />
      )}

      {/* Organization Link */}
      <UnderliningLink
        href={organization.url}
        className="text-muted inline-flex mt-1"
        variant="text"
        withIcon={true}
        target="_blank"
        rel="noreferrer"
      >
        {organization.logo && (
          <img
            src={organization.logo.src}
            alt={organization.logo.alt}
            className="h-4 grayscale hidden md:block"
          />
        )}
        {organization.name}
      </UnderliningLink>

      {/* Roles */}
      <ul>
        {roles.map((role) => (
          <li key={role.role} className="mb-5">
            <div>
              {/* Role Title */}
              <h4 className={`${colorClasses.text} text-lg font-medium`}>
                {role.role}
              </h4>

              {/* Role Duration */}
              <p className="text-sm text-muted/80 mt-1">
                {formatTimelineDate(role.startDate, role.endDate)}
              </p>
            </div>

            {/* Role Details */}
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted mt-3">
              {role.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </li>
  );
}
