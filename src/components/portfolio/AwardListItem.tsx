import type { AwardItem, ColorClasses } from "@/types/miscellaneous";
import ListItem from "@/components/ui/list-item";

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
  const colorClasses: ColorClasses = {
    border: "border-cool",
    circle: "bg-cool",
    text: "text-cool",
  };

  return (
    <ListItem
      id={label}
      organization={organization}
      colorClasses={colorClasses}
      isLastInGroup={isLastInGroup}
    >
      {/* Award Title */}
      <h4 className="text-lg font-medium">{title}</h4>

      {/* Award Year */}
      <p className="text-muted/80">{year}</p>

      {/* Award Description */}
      <p className="text-muted/80 text-sm">{description}</p>
    </ListItem>
  );
}
