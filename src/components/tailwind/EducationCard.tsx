// components/tailwind/EducationCard.tsx

import type { EducationEntryType } from "@/types/miscellaneous";
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
    <div className="flex items-start gap-2 sm:gap-3">
      {/* Timeline Icon */}
      {children}

      {/* Title, Grade and Description */}
      <div className="space-y-1 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <h4 className="text-sm sm:text-base text-blue-400 font-bold">
            {title}
          </h4>
          <span className="text-white bg-green-700 text-xs h-fit px-1 rounded-sm w-fit">
            {grade}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-gray-400">{description}</p>
      </div>

      {/* Year */}
      <p className="text-gray-400 text-xs sm:text-sm font-numeric shrink-0">
        {year}
      </p>
    </div>
  );
}
