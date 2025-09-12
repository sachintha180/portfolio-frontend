// components/tailwind/ProjectCard.tsx

import type { ProjectEntryType } from "@/types/miscellaneous";
import { techStackMap } from "@/lib/techStack";
import { ExternalLinkIcon, LockIcon, ClockIcon } from "lucide-react";

import { interpolate as d3Interpolate } from "d3-interpolate";
import { color as d3Color } from "d3-color";
import ProgressiveImage from "@/components/ui/ProgressiveImage";

import placeholderImage from "@/assets/project_screenshots/placeholder.jpg";

type ProjectCardProps = ProjectEntryType & {
  showImage?: boolean;
};

export default function ProjectCard({
  title,
  stackTypeKey,
  description,
  tools,
  link,
  imageSrc,
  timeDuration,
  showImage = true,
}: ProjectCardProps) {
  // Initialize D3.js color interpolator
  const colorInterpolator = d3Interpolate(
    techStackMap[stackTypeKey].startColor,
    techStackMap[stackTypeKey].endColor
  );

  // Prepare lighter color for badges
  const badgeColor = d3Color(colorInterpolator(0))?.brighter(1).formatHex();

  // Get project category label
  const label = techStackMap[stackTypeKey].label;

  // Prepare title prop for private projects
  const titleProp: React.HTMLAttributes<HTMLDivElement> = {
    title: link
      ? "Click on this link to view the project live or on GitHub"
      : "This project is locked",
  };

  return (
    <div className="flex">
      <div
        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 space-y-2 flex flex-col justify-center relative z-10 bg-[var(--project-card-bg-light)] dark:bg-[var(--project-card-bg-dark)] border-1 border-[var(--project-card-bg-dark-border)] dark:border-none"
        style={
          {
            "--project-card-bg-light": "white",
            "--project-card-bg-dark": colorInterpolator(0),
            "--project-card-bg-dark-border": colorInterpolator(1),
          } as React.CSSProperties
        }
      >
        {/* Background Gradient Image */}
        {showImage && (
          <div className="hidden dark:block absolute h-full w-1/3 sm:w-1/4 left-2/3 sm:left-3/4 top-0 -z-10">
            <ProgressiveImage
              src={imageSrc || placeholderImage}
              alt={`${title} Project Image`}
              className="object-cover h-full w-full"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to right, ${colorInterpolator(
                  0
                )} 30%, ${d3Color(colorInterpolator(0))?.formatHex()}cc 100%)`,
              }}
            />
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
          {/* Title */}
          <h3
            className="text-base sm:text-lg font-bold lowercase text-[var(--project-title-fg-dark)] dark:text-white"
            style={
              {
                "--project-title-fg-dark": badgeColor,
              } as React.CSSProperties
            }
          >
            {title}
          </h3>

          {/* Time Duration */}
          <div className="text-xs flex items-center justify-start sm:justify-center gap-1 text-gray-500 dark:text-gray-300">
            <ClockIcon className="h-3 w-3" />
            {timeDuration ? `Shipped in ${timeDuration}` : "Shipping..."}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 italic text-xs sm:text-sm">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
          {/* Tool Badges */}
          <div className="text-xs mt-2 mb-1 flex gap-1 sm:gap-2 lowercase flex-wrap bg-[var(--project-tool-badge-bg-light)] dark:bg-[var(--project-tool-badge-bg-dark)]">
            {tools.map((tool, index) => (
              <span
                key={`${tool.toLowerCase()}-${index}`}
                className="py-1 px-2 rounded-sm bg-[var(--project-tool-badge-bg-light)] dark:bg-[var(--project-tool-badge-bg-dark)] text-[var(--project-tool-badge-bg-dark)] dark:text-white border-1 border-[var(--project-tool-badge-bg-dark)] dark:border-none font-bold dark:font-normal"
                style={
                  {
                    "--project-tool-badge-bg-light": "white",
                    "--project-tool-badge-bg-dark": badgeColor,
                  } as React.CSSProperties
                }
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Link / Private */}
          <div
            className="text-gray-700 dark:text-gray-300 self-start sm:self-center"
            {...titleProp}
          >
            {link ? (
              <a href={link} target="_blank">
                <ExternalLinkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            ) : (
              <LockIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </div>
        </div>
      </div>

      {/* Label */}
      <div
        className="[writing-mode:vertical-lr] text-xs px-1 sm:px-2 py-1 pb-3 sm:pb-5 rounded-br-2xl sm:rounded-br-3xl z-20 font-bold dark:font-normal text-white ml-1"
        style={{
          backgroundColor: colorInterpolator(1),
        }}
      >
        {label}
      </div>
    </div>
  );
}
