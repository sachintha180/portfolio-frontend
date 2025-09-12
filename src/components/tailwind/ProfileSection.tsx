// components/tailwind/ProfileSection.tsx

import { FaChevronRight } from "react-icons/fa";

export default function ProfileSection() {
  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-white dark:to-gray-900 pb-0.5">
        <h2 className="text-xl sm:text-2xl text-blue-500 font-bold bg-white dark:bg-gray-900 pb-2">
          profile
        </h2>
      </div>

      {/* Content */}
      <article className="space-y-2 sm:space-y-3 italic text-gray-700 dark:text-gray-400">
        <div className="flex items-start gap-2">
          <FaChevronRight className="w-2 h-2 sm:w-3 sm:h-3 shrink-0 mt-2" />
          <p className="text-sm sm:text-base">
            building data-dense dashboards with interactive charts, tables, and
            forms, favoring server-first delivery, accessible patterns,
            optimistic interactions, and minimal client state for fast, stable
            UIs.
          </p>
        </div>

        <div className="flex items-start gap-2">
          <FaChevronRight className="w-2 h-2 sm:w-3 sm:h-3 shrink-0 mt-2" />
          <p className="text-sm sm:text-base">
            delivering gen-AI products including chat experiences,
            retrieval-augmented knowledge bases, task agents, and MCP
            integrations.
          </p>
        </div>

        <div className="flex items-start gap-2">
          <FaChevronRight className="w-2 h-2 sm:w-3 sm:h-3 shrink-0 mt-2" />
          <p className="text-sm sm:text-base">
            automating with full REST API compatibility for easy orchestration.
          </p>
        </div>

        <div className="flex items-start gap-2">
          <FaChevronRight className="w-2 h-2 sm:w-3 sm:h-3 shrink-0 mt-2" />
          <p className="text-sm sm:text-base">
            performance sensitive, pragmatic, and tool agnostic; teaching
            computer science in my free time.
          </p>
        </div>

        <div className="flex items-start gap-2">
          <FaChevronRight className="w-2 h-2 sm:w-3 sm:h-3 shrink-0 mt-2" />
          <p className="text-sm sm:text-base">
            i collaborate closely and ship clean.
          </p>
        </div>
      </article>
    </div>
  );
}
