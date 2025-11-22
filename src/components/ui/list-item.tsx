import type { ColorClasses, Organization } from "@/types/miscellaneous";
import { FiChevronUp } from "react-icons/fi";
import UnderliningLink from "./underlining-link";
import type { ReactNode } from "react";

type ListItemProps = {
  organization: Organization;
  colorClasses: ColorClasses;
  isLastInGroup: boolean;
  children: ReactNode;
  id: string;
};

export default function ListItem({
  organization,
  colorClasses,
  isLastInGroup,
  children,
  id,
}: ListItemProps) {
  return (
    <li id={id} className="mb-5 md:mb-10">
      {/* Circle */}
      <div
        className={`absolute -left-1 h-2 w-2 rounded-full border md:-left-2 md:h-4 md:w-4 ${colorClasses.border} ${colorClasses.circle}`}
      />

      {/* Timeline Start Icon */}
      {isLastInGroup && (
        <FiChevronUp
          aria-hidden="true"
          className={`absolute -bottom-5 -left-4 hidden md:block ${colorClasses.text} h-8 w-8`}
        />
      )}

      {/* Organization Link */}
      <UnderliningLink
        href={organization.url}
        className="text-muted mt-1 inline-flex"
        variant="text"
        withIcon={true}
        target="_blank"
        rel="noreferrer"
      >
        {organization.logo && (
          <img
            src={organization.logo.src}
            alt={organization.logo.alt}
            className="hidden h-4 grayscale md:block"
          />
        )}
        {organization.name}
      </UnderliningLink>

      {/* Children */}
      {children}
    </li>
  );
}
