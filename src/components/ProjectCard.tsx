// components/ProjectCard.tsx

import type { ProjectEntryType } from "../types/miscellaneous";
import { techStackMap } from "../lib/techStack";
import { ExternalLinkIcon, LockIcon, ClockIcon } from "lucide-react";
import * as d3 from "d3";

export default function ProjectCard({
  title,
  stackTypeKey,
  description,
  tools,
  link,
  imageSrc,
  timeDuration,
}: ProjectEntryType) {
  // Initialize D3.js color interpolator
  const colorInterpolator = d3.interpolate(
    techStackMap[stackTypeKey].startColor,
    techStackMap[stackTypeKey].endColor
  );

  // Prepare lighter color for badges
  const badgeColor = d3.color(colorInterpolator(0))?.brighter(1).formatHex();

  // Get project category label
  const label = techStackMap[stackTypeKey].label;

  // Prepare title prop for private projects
  const titleProp: React.HTMLAttributes<HTMLDivElement> = {
    title: link
      ? "Click on this link to view the project live or on GitHub"
      : "This project is locked",
  };

  return (
    <div className="flex mr-5">
      <div
        className="flex-1 px-4 py-3 space-y-2 flex flex-col justify-center relative z-10"
        style={{ backgroundColor: colorInterpolator(0) }}
      >
        {/* Background Gradient Image */}
        <div className="absolute h-full w-1/4 left-3/4 top-0 -z-10">
          <img
            src={imageSrc}
            alt={`${title} Project Image`}
            className="object-cover h-full w-full"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${colorInterpolator(
                0
              )} 30%, ${d3.color(colorInterpolator(0))?.formatHex()}cc 100%)`,
            }}
          />
        </div>

        <div className="flex justify-between items-center">
          {/* Title */}
          <h3 className="text-lg font-bold lowercase">{title}</h3>

          {/* Time Duration */}
          <div className="text-xs flex items-center justify-center gap-1 text-gray-300">
            <ClockIcon className="h-3 w-3" />
            {timeDuration ? `Shipped in ${timeDuration}` : "Shipping..."}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 italic text-sm">{description}</p>

        <div className="flex justify-between items-center gap-4">
          {/* Tool Badges */}
          <div className="text-xs mt-2 mb-1 flex gap-2 lowercase flex-wrap">
            {tools.map((tool, index) => (
              <span
                key={`${tool.toLowerCase()}-${index}`}
                className="py-1 px-2 rounded-sm"
                style={{ backgroundColor: badgeColor }}
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Link / Private */}
          <div className="mr-1 text-gray-300" {...titleProp}>
            {link ? (
              <a href={link} target="_blank">
                <ExternalLinkIcon className="w-6 h-6" />
              </a>
            ) : (
              <LockIcon className="w-6 h-6" />
            )}
          </div>
        </div>
      </div>

      {/* Label */}
      <div
        className="[writing-mode:vertical-lr] text-xs px-2 py-1 pb-5 rounded-br-3xl z-20"
        style={{
          boxShadow: "0px 0px 5px 0px #000000aa",
          backgroundColor: colorInterpolator(1),
        }}
      >
        {label}
      </div>
    </div>
  );
}
