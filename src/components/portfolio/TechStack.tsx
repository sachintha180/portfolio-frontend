import { TECH_STACK } from "@/lib/portfolio/tech-stack";
import { groupTechStackItems } from "@/lib/portfolio/utils";

const BG_COLOR_PALETTE = [
  "bg-warm",
  "bg-cool",
  "bg-danger",
  "bg-success",
  "bg-secondary",
];
const TEXT_COLOR_PALETTE = [
  "text-warm",
  "text-cool",
  "text-danger",
  "text-success",
  "text-secondary",
];
const LIGHT_BG_COLOR_PALETTE = [
  "bg-warm/20",
  "bg-cool/20",
  "bg-danger/20",
  "bg-success/20",
  "bg-secondary/20",
];

export default function TechStack() {
  const groupedTechStack = groupTechStackItems(TECH_STACK);

  return (
    <section className="flex flex-col gap-4">
      {/* Title */}
      <h3 className="text-secondary mb-2 text-2xl">tech stack</h3>

      {/* Tech Stack Items */}
      <div className="flex flex-col gap-3">
        {groupedTechStack.map((groupItem, index) => {
          const bgColorClass =
            BG_COLOR_PALETTE[index % BG_COLOR_PALETTE.length] ?? "";
          const textColorClass =
            TEXT_COLOR_PALETTE[index % TEXT_COLOR_PALETTE.length] ?? "";
          const lightBgColorClass =
            LIGHT_BG_COLOR_PALETTE[index % LIGHT_BG_COLOR_PALETTE.length] ?? "";

          return (
            <div
              key={groupItem.group.name}
              className={`flex flex-col gap-3 p-4 md:flex-row ${lightBgColorClass}`}
            >
              {/* Tech Items Grid */}
              <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {groupItem.items.map((item) => (
                  <div
                    key={item.name}
                    className={`flex items-center justify-center px-3 py-2 text-center text-sm font-semibold ${bgColorClass} text-surface`}
                  >
                    {item.name}
                  </div>
                ))}
              </div>

              {/* Group Label - Vertical on right */}
              <div className="flex items-center justify-center md:min-w-[120px] md:flex-col md:items-end md:justify-start">
                <h4
                  className={`${textColorClass} text-lg font-semibold md:[text-orientation:mixed] md:[writing-mode:vertical-rl]`}
                >
                  {groupItem.group.label}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
