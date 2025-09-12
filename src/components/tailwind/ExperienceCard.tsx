// components/tailwind/ExperienceCard.tsx

import type { ExperienceEntryType } from "@/types/miscellaneous";
import type { ReactNode } from "react";

type ExperienceCardProps = ExperienceEntryType & {
  children: ReactNode;
};

export default function ExperienceCard({
  title,
  organization,
  startYear,
  endYear,
  details,
  children,
}: ExperienceCardProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-2 sm:gap-3">
        {/* Timeline Icon */}
        {children}

        <div className="space-y-1 flex-1">
          {/* Title and Organization */}
          <h4 className="text-sm sm:text-base text-purple-700 dark:text-purple-400 font-bold">
            {title}
          </h4>
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">
            {organization}
          </p>
        </div>

        {/* Year */}
        <p className="text-gray-700 dark:text-gray-400 text-xs sm:text-sm shrink-0">
          {startYear} {endYear && `- ${endYear}`}
        </p>
      </div>

      {/* Details */}
      {details.length > 0 && (
        <ul className="text-sm text-gray-500 list-disc ml-10">
          {details.map((detail, index) => (
            <li
              key={`${title}-$detail-${index}`}
              className={index === 0 ? "font-bold" : "font-normal"}
            >
              {detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
