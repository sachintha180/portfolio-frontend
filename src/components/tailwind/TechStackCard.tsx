// components/tailwind/TechStackCard.tsx

import type { TechStackEntryType } from "@/types/miscellaneous";
import ProgressiveImage from "@/components/ui/ProgressiveImage";
import type React from "react";

type TechStackCardProps = {
  stack: TechStackEntryType;
  colorInterpolator: (index: number) => string;
  label: string;
};

export default function TechStackCard({
  stack,
  colorInterpolator,
  label,
}: TechStackCardProps) {
  return (
    <div className="flex relative">
      {/* Tool Grid */}
      <div className="flex-1 flex gap-1 flex-wrap">
        {stack.tools.map((tool, toolIndex) => {
          const bgDark = colorInterpolator(toolIndex / stack.tools.length);
          return (
            <span
              key={`${tool}-${toolIndex}`}
              className="break-words min-w-20 sm:min-w-30 px-2 py-1 flex-1 lowercase text-xs sm:text-sm bg-[var(--tech-stack-card-bg-light)] dark:bg-[var(--tech-stack-card-bg-dark)] border-1 border-[var(--tech-stack-card-bg-dark)] dark:border-none text-[var(--tech-stack-card-bg-dark)] dark:text-white font-bold dark:font-normal"
              style={
                {
                  "--tech-stack-card-bg-light": "white",
                  "--tech-stack-card-bg-dark": bgDark,
                } as React.CSSProperties
              }
            >
              {tool}
            </span>
          );
        })}
      </div>

      {/* Stack Label */}
      <div
        className="[writing-mode:vertical-lr] text-xs px-1 sm:px-2 py-1 pb-6 sm:pb-10 rounded-br-2xl sm:rounded-br-3xl z-20 ml-1 font-bold dark:font-normal"
        style={{
          backgroundColor: colorInterpolator(0),
        }}
      >
        {label}
      </div>

      {/* Language Logo */}
      {stack.languageLogoSrc && (
        <ProgressiveImage
          src={stack.languageLogoSrc}
          alt={`${label} language logo`}
          className="w-4 h-4 sm:w-5 sm:h-5 absolute right-4 bottom-1 sm:bottom-2 z-20"
        />
      )}
    </div>
  );
}
