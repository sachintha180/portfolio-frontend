// components/TechStackSection.tsx

import { techStack, techStackMap } from "../lib/techStack";
import * as d3 from "d3";
import type { TechStackKeyType } from "../types/miscellaneous";

type TechStackSectionProps = React.ComponentProps<"section">;

export default function TechStackSection({
  className,
  ...props
}: TechStackSectionProps) {
  return (
    <section className={className} {...props}>
      <div className="space-y-4 z-10">
        {/* Section Header */}
        <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-gray-900 pb-0.5">
          <h2 className="text-2xl text-purple-500 font-bold bg-gray-900 pb-2">
            tech stack
          </h2>
        </div>

        {/* Content */}
        <article className="text-white space-y-6">
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
              <div key={key} className="flex relative mr-5">
                {/* Tool Grid */}
                <div className="flex-1 flex gap-1 flex-wrap">
                  {stack.tools.map((tool, toolIndex) => {
                    const backgroundColor = colorInterpolator(
                      toolIndex / stack.tools.length
                    );
                    return (
                      <span
                        key={`${key}-tool-${toolIndex}`}
                        className="min-w-30 px-2 py-1 flex-1 lowercase"
                        style={{
                          backgroundColor: backgroundColor,
                        }}
                      >
                        {tool}
                      </span>
                    );
                  })}
                </div>

                {/* Stack Label */}
                <div
                  className="[writing-mode:vertical-lr] text-xs px-2 py-1 pb-10 rounded-br-3xl z-20 -mr-2"
                  style={{
                    backgroundColor: colorInterpolator(0),
                    boxShadow: "0px 0px 5px 0px #000000aa",
                  }}
                >
                  {label}
                </div>

                {/* Language Logo */}
                {stack.languageLogoSrc && (
                  <img
                    src={stack.languageLogoSrc}
                    alt={`${label} language logo`}
                    className="w-5 h-5 absolute right-1 bottom-2 z-20"
                  />
                )}
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}
