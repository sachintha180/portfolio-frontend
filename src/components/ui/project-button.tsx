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
      className={`flex flex-row p-3 md:pl-4 text-surface text-xl group/page-button ${bgColorClass}`}
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
        <div className="flex flex-col gap-3 mb-2">
          <span className="text-xl font-semibold">{project.title}</span>
        </div>

        <div className="text-sm text-surface/70">
          {/* Tools */}
          <div className="flex flex-row">
            <div className="flex items-center justify-center bg-surface h-5 w-7">
              <FiStar
                aria-hidden="true"
                className={`w-5 h-4 ${textColorClass}`}
              />
            </div>
            <div
              className={`flex flex-row ${textColorClass} gap-1 flex-wrap w-full`}
            >
              {project.tools.map((tool, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center bg-surface px-2 first:pl-1 first:font-bold"
                  >
                    <span className="text-sm flex-1">{tool}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Description */}
          <ul className="list-disc ml-5 my-3">
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
          className="h-7 w-7 md:h-10 md:w-10 ml-auto text-surface transition-transform duration-300 group-hover/page-button:translate-x-1 group-hover/page-button:-translate-y-1"
        />
      ) : (
        <FiLock
          aria-hidden="true"
          className="h-6 w-6 md:h-10 md:w-10 ml-auto text-surface"
        />
      )}
    </a>
  );
}
