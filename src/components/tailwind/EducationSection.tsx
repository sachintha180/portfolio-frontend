// components/tailwind/EducationSection.tsx

import { useMemo, useRef } from "react";
import EducationCard from "@/components/tailwind/EducationCard";
import { education } from "@/lib/education";
import Connector from "@/components/ui/Connector";
import { GoDotFill } from "react-icons/go";

export default function EducationSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dotRefs = useMemo(
    () => education.map(() => ({ current: null as HTMLDivElement | null })),
    [education]
  );

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-white dark:to-gray-900 pb-0.5">
        <h2 className="text-xl sm:text-2xl text-blue-500 font-bold bg-white dark:bg-gray-900 pb-2">
          education
        </h2>
      </div>

      {/* Content */}
      <article ref={containerRef} className="space-y-6 sm:space-y-8 relative">
        {/* Education Cards */}
        {education.map((education, index) => {
          return (
            <EducationCard key={`education-entry-${index}`} {...education}>
              {/* Timeline Icon */}
              <div
                ref={(element) => {
                  dotRefs[index].current = element;
                }}
                className="z-20 pt-2"
              >
                <GoDotFill
                  className="text-blue-500 shrink-0 h-3 w-3"
                  strokeWidth={8}
                />
              </div>
            </EducationCard>
          );
        })}

        {/* Connecting Lines */}
        {dotRefs.map((_, i) =>
          i === 0 ? null : (
            <Connector
              key={`connector-${i}`}
              fromRef={dotRefs[i - 1]}
              toRef={dotRefs[i]}
              containerRef={containerRef}
              className="text-blue-800 z-10"
            />
          )
        )}
      </article>
    </div>
  );
}
