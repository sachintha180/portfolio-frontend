// components/tailwind/TechStackSection.tsx

import { techStack, techStackMap } from "@/lib/techStack";
import type { TechStackKeyType } from "@/types/miscellaneous";
import { interpolate as d3Interpolate } from "d3-interpolate";
import TechStackCard from "@/components/tailwind/TechStackCard";

type TechStackSectionProps = React.ComponentProps<"section">;

export default function TechStackSection({
  className,
  ...props
}: TechStackSectionProps) {
  return (
    <section className={className} {...props}>
      <div className="space-y-3 sm:space-y-4">
        {/* Section Header */}
        <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-gray-900 pb-0.5">
          <h2 className="text-xl sm:text-2xl text-purple-500 font-bold bg-gray-900 pb-2">
            tech stack
          </h2>
        </div>

        {/* Content */}
        <article className="text-white space-y-4 sm:space-y-6">
          {Object.entries(techStack).map(([key, stack], index) => {
            // Cast key and get label
            const techStackKey = key as TechStackKeyType;
            const label = techStackMap[techStackKey].label;

            // Initialize D3.js color interpolator
            const colorInterpolator = d3Interpolate(
              techStackMap[techStackKey].startColor,
              techStackMap[techStackKey].endColor
            );

            return (
              <TechStackCard
                key={`${label}-${index}`}
                stack={stack}
                colorInterpolator={colorInterpolator}
                label={label}
              />
            );
          })}
        </article>
      </div>
    </section>
  );
}
