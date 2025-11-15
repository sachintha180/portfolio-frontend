import type { ColorClasses, Organization, Role } from "@/types/miscellaneous";
import { formatTimelineDate } from "@/lib/portfolio/utils";
import ListItem from "@/components/ui/list-item";

type ExperienceItemProps = {
  organization: Organization;
  label: string;
  roles: Role[];
  colorClasses: ColorClasses;
  isLastInGroup: boolean;
};

export default function ExperienceListItem({
  organization,
  label,
  roles,
  colorClasses,
  isLastInGroup,
}: ExperienceItemProps) {
  return (
    <ListItem
      id={label}
      organization={organization}
      colorClasses={colorClasses}
      isLastInGroup={isLastInGroup}
    >
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
    </ListItem>
  );
}
