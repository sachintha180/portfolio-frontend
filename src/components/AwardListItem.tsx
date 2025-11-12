import UnderliningLink from "./ui/underlining-link";
import { FiChevronUp } from "react-icons/fi";
import type { AwardItem } from "@/types/miscellaneous";

type AwardItemProps = AwardItem & {
  isLastInGroup: boolean;
};

export default function AwardListItem({
  title,
  label,
  organization,
  year,
  description,
  isLastInGroup,
}: AwardItemProps) {
  return (
    <li id={label} key={organization.name} className="md:mb-10 mb-5">
      {/* Circle */}
      <div className="hidden md:block absolute w-4 h-4 rounded-full -left-2 border border-cool bg-cool" />

      {/* Timeline Start Icon */}
      {isLastInGroup && (
        <FiChevronUp
          aria-hidden="true"
          className="hidden md:block absolute -left-4 -bottom-5 text-cool w-8 h-8 "
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

      {/* Award Title */}
      <h4 className="text-lg font-medium">{title}</h4>

      {/* Award Year */}
      <p className="text-muted/80">{year}</p>

      {/* Award Description */}
      <p className="text-sm text-muted/80">{description}</p>
    </li>
  );
}
