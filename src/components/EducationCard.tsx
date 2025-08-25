// components/EducationCard.tsx

import type { EducationEntryType } from "../types/miscellaneous";
import type { ReactNode } from "react";

type EducationCardProps = EducationEntryType & {
  children: ReactNode;
};

export default function EducationCard({
  title,
  description,
  grade,
  year,
  children,
}: EducationCardProps) {
  return (
    <div className="flex items-start gap-3">
      {/* Timeline Icon */}
      {children}

      {/* Title, Grade and Description */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <h4 className="text-blue-600 font-bold">{title}</h4>
          <span className="text-white bg-green-700 text-xs h-fit px-1 rounded-sm">
            {grade}
          </span>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      {/* Year */}
      <p className="text-gray-400 text-sm ml-auto font-numeric">{year}</p>
    </div>
  );
}
