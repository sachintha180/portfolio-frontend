// components/tailwind/ExperienceSection.tsx

import { useMemo, useRef } from "react";
import { experience } from "@/lib/experience";
import ExperienceCard from "@/components/tailwind/ExperienceCard";
import { DotIcon } from "lucide-react";
import Connector from "@/components/ui/Connector";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dotRefs = useMemo(
    () => experience.map(() => ({ current: null as SVGSVGElement | null })),
    [experience]
  );
  const currentYear = new Date().getFullYear();

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-white dark:to-gray-900 pb-0.5">
        <h2 className="text-xl sm:text-2xl text-purple-500 font-bold bg-white dark:bg-gray-900 pb-2">
          experience (+
          {currentYear - experience[experience.length - 1].startYear}
          y)
        </h2>
      </div>

      {/* Content */}
      <article ref={containerRef} className="space-y-6 sm:space-y-8 relative">
        {/* Experience Cards */}
        {experience.map((experience, index) => {
          return (
            <ExperienceCard key={`experience-entry-${index}`} {...experience}>
              {/* Timeline Icon */}
              <DotIcon
                ref={(element) => {
                  dotRefs[index].current = element;
                }}
                className="text-purple-500 shrink-0 z-20"
                strokeWidth={8}
              />
            </ExperienceCard>
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
              className="text-purple-800 z-10"
            />
          )
        )}
      </article>
    </div>
  );
}
