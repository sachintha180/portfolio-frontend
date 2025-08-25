// components/EducationCard.tsx

import type { ExperienceEntryType } from "../types/miscellaneous";
import type { ReactNode } from "react";

type ExperienceCardProps = ExperienceEntryType & {
  children: ReactNode;
};

export default function ExperienceCard({
  title,
  organization,
  year,
  children,
}: ExperienceCardProps) {
  return (
    <div className="flex items-start gap-3">
      {/* Timeline Icon */}
      {children}

      {/* Title and Organization */}
      <div className="space-y-1">
        <h4 className="text-purple-600 font-bold">{title}</h4>
        <p className="text-sm text-gray-500">{organization}</p>
      </div>

      {/* Year */}
      <p className="text-gray-400 text-sm ml-auto font-numeric">{year}</p>
    </div>
  );
}
