// components/TechStackSection.tsx

import { lazy, Suspense } from "react";
import { techStack, techStackMap } from "../lib/techStack";
import * as d3 from "d3";
import type { TechStackKeyType } from "../types/miscellaneous";
import TechStackCardSkeleton from "./skeleton/TechStackCardSkeleton";

const TechStackCard = lazy(() => import("./TechStackCard"));

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
          {Object.entries(techStack).map(([key, stack]) => {
            // Cast key and get label
            const techStackKey = key as TechStackKeyType;
            const label = techStackMap[techStackKey].label;

            // Initialize D3.js color interpolator
            const colorInterpolator = d3.interpolate(
              techStackMap[techStackKey].startColor,
              techStackMap[techStackKey].endColor
            );

            return (
              <Suspense key={key} fallback={<TechStackCardSkeleton />}>
                <TechStackCard
                  stack={stack}
                  colorInterpolator={colorInterpolator}
                  label={label}
                />
              </Suspense>
            );
          })}
        </article>
      </div>
    </section>
  );
}
