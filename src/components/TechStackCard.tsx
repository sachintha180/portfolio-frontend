import type { TechStackEntryType } from "../types/miscellaneous";
import ProgressiveImage from "./ui/ProgressiveImage";

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
          const backgroundColor = colorInterpolator(
            toolIndex / stack.tools.length
          );
          return (
            <span
              key={`${tool}-${toolIndex}`}
              className="min-w-20 sm:min-w-30 px-2 py-1 flex-1 lowercase text-xs sm:text-sm"
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
        className="[writing-mode:vertical-lr] text-xs px-1 sm:px-2 py-1 pb-6 sm:pb-10 rounded-br-2xl sm:rounded-br-3xl z-20 -mr-1 sm:-mr-2"
        style={{
          backgroundColor: colorInterpolator(0),
          boxShadow: "0px 0px 5px 0px #000000aa",
        }}
      >
        {label}
      </div>

      {/* Language Logo */}
      {stack.languageLogoSrc && (
        <ProgressiveImage
          src={stack.languageLogoSrc}
          alt={`${label} language logo`}
          className="w-4 h-4 sm:w-5 sm:h-5 absolute right-1 bottom-1 sm:bottom-2 z-20"
        />
      )}
    </div>
  );
}
