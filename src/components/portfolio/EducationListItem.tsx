import type {
  ColorClasses,
  Organization,
  Program,
} from "@/types/miscellaneous";
import ListItem from "@/components/ui/list-item";

type EducationItemProps = {
  institution: Organization;
  label: string;
  programs: Program[];
  isLastInGroup: boolean;
};

export default function EducationListItem({
  institution,
  label,
  programs,
  isLastInGroup,
}: EducationItemProps) {
  const colorClasses: ColorClasses = {
    border: "border-danger",
    circle: "bg-danger",
    text: "text-danger",
  };

  return (
    <ListItem
      id={label}
      organization={institution}
      colorClasses={colorClasses}
      isLastInGroup={isLastInGroup}
    >
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
              <div className="flex flex-row items-center gap-1">
                <p className="text-muted/80 text-sm">
                  {program.pursuing && "Present - "}
                  {program.endYear}
                </p>
                {program.grade && (
                  <p className="text-success text-center text-sm font-bold">
                    - {program.grade}
                  </p>
                )}
              </div>
            </div>

            {/* Program Details */}
            <ul className="text-muted mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
              {program.description.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </ListItem>
  );
}
