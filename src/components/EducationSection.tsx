// components/EducationSection.tsx

import { useMemo, useRef } from "react";
import EducationCard from "./EducationCard";
import { education } from "../lib/education";
import { DotIcon } from "lucide-react";
import Connector from "./ui/Connector";

export default function EducationSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dotRefs = useMemo(
    () => education.map(() => ({ current: null as SVGSVGElement | null })),
    [education]
  );

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-gray-900 pb-0.5">
        <h2 className="text-xl sm:text-2xl text-blue-500 font-bold bg-gray-900 pb-2">
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
              <DotIcon
                ref={(element) => {
                  dotRefs[index].current = element;
                }}
                className="text-blue-500 shrink-0 z-20"
                strokeWidth={8}
              />
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
