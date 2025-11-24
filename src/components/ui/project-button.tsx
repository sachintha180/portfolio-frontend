import type { ProjectItem } from "@/types/miscellaneous";
import { FiStar, FiArrowUpRight, FiLock } from "react-icons/fi";

export default function ProjectButton({ project }: { project: ProjectItem }) {
  const bgColorClass = project.pending
    ? "bg-secondary"
    : project.link
      ? "bg-primary"
      : "bg-primary/80";
  const textColorClass = project.pending
    ? "text-secondary"
    : project.link
      ? "text-primary"
      : "text-primary/80";

  return (
    <a
      id={project.label}
      className={`text-surface group/page-button flex flex-row p-3 text-xl md:pl-4 ${bgColorClass}`}
      href={project.link}
    >
      <div className="flex-1">
        {/* Duration Span */}
        <span className="text-surface/70 text-sm">
          {project.pending
            ? "In Progress"
            : "Completed in " + project.timeDuration}
        </span>

        {/* Project Title */}
        <div className="mb-2 flex flex-col gap-3">
          <span className="text-xl font-semibold">{project.title}</span>
        </div>

        <div className="text-surface/70 text-sm">
          {/* Tools */}
          <div className="flex flex-row">
            <div className="bg-surface flex h-5 w-7 items-center justify-center">
              <FiStar
                aria-hidden="true"
                className={`h-4 w-5 ${textColorClass}`}
              />
            </div>
            <div
              className={`flex flex-row ${textColorClass} w-full flex-wrap gap-1`}
            >
              {project.tools.map((tool, index) => {
                return (
                  <div
                    key={index}
                    className="bg-surface flex items-center justify-center px-2 first:pl-1 first:font-bold"
                  >
                    <span className="flex-1 text-sm">{tool}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Description */}
          <ul className="my-3 ml-5 list-disc">
            {project.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Project Link Icon */}
      {project.link ? (
        <FiArrowUpRight
          aria-hidden="true"
          className="text-surface ml-auto h-7 w-7 transition-transform duration-300 group-hover/page-button:translate-x-1 group-hover/page-button:-translate-y-1 md:h-10 md:w-10"
        />
      ) : (
        <FiLock
          aria-hidden="true"
          className="text-surface ml-auto h-6 w-6 md:h-10 md:w-10"
        />
      )}
    </a>
  );
}
