// components/tailwind/ExperienceCard.tsx

import type { ExperienceEntryType } from "@/types/miscellaneous";
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
    <div className="flex items-start gap-2 sm:gap-3">
      {/* Timeline Icon */}
      {children}

      {/* Title and Organization */}
      <div className="space-y-1 flex-1">
        <h4 className="text-sm sm:text-base text-purple-400 font-bold">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-gray-400">{organization}</p>
      </div>

      {/* Year */}
      <p className="text-gray-400 text-xs sm:text-sm font-numeric shrink-0">
        {year}
      </p>
    </div>
  );
}
