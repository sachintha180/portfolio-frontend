// components/ProjectsSection.tsx

import { MAX_PROJECT_COUNT, projects } from "../lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Projects Header */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-gray-900 pb-0.5">
        <h2 className="text-xl sm:text-2xl text-blue-500 font-bold bg-gray-900 pb-2">
          top projects
        </h2>
      </div>

      {/* Content */}
      <article className="space-y-3 sm:space-y-4 text-white">
        {projects.slice(0, MAX_PROJECT_COUNT).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </article>
    </div>
  );
}
