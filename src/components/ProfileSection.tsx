// components/ProfileSection.tsx

import { ChevronRightIcon } from "lucide-react";

export default function ProfileSection() {
  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-gray-900 pb-0.5">
        <h2 className="text-2xl text-blue-500 font-bold bg-gray-900 pb-2">
          profile
        </h2>
      </div>

      {/* Content */}
      <article className="space-y-3 italic text-gray-400 mr-5">
        <div className="flex items-start justify-start gap-1">
          <ChevronRightIcon className="w-4 h-4 shrink-0 mt-1" />
          <p>
            building data-dense dashboards with interactive charts, tables, and
            forms, favoring server-first delivery, accessible patterns,
            optimistic interactions, and minimal client state for fast, stable
            UIs.
          </p>
        </div>

        <div className="flex items-start justify-start gap-1">
          <ChevronRightIcon className="w-4 h-4 shrink-0 mt-1" />
          <p>
            delivering gen-AI products including chat experiences,
            retrieval-augmented knowledge bases, task agents, and MCP
            integrations.
          </p>
        </div>

        <div className="flex items-start justify-start gap-1">
          <ChevronRightIcon className="w-4 h-4 shrink-0 mt-1" />
          <p>
            automating with full REST API compatibility for easy orchestration.
          </p>
        </div>

        <div className="flex items-start justify-start gap-1">
          <ChevronRightIcon className="w-4 h-4 shrink-0 mt-1" />
          <p>
            performance sensitive, pragmatic, and tool agnostic; teaching
            computer science in my free time.
          </p>
        </div>

        <div className="flex items-start justify-start gap-1">
          <ChevronRightIcon className="w-4 h-4 shrink-0 mt-1" />
          <p>i collaborate closely and ship clean.</p>
        </div>
      </article>
    </div>
  );
}
