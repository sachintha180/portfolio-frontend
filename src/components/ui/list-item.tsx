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
    <li id={id} className="md:mb-10 mb-5">
      {/* Circle */}
      <div
        className={`absolute h-2 w-2 md:w-4 md:h-4 rounded-full -left-1 md:-left-2 border ${colorClasses.border} ${colorClasses.circle}`}
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

      {/* Children */}
      {children}
    </li>
  );
}
