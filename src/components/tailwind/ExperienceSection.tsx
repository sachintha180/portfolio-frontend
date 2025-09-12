// components/tailwind/ExperienceSection.tsx

import { useEffect, useMemo, useRef, useState } from "react";
import { experience } from "@/lib/experience";
import ExperienceCard from "@/components/tailwind/ExperienceCard";
import { DotIcon } from "lucide-react";
import Connector from "@/components/ui/Connector";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dotRefs = useMemo(
    () => experience.map(() => ({ current: null as SVGSVGElement | null })),
    [experience]
  );
  // Bump this to force Connector remount and recompute (e.g., for print preview)
  const [refreshKey, setRefreshKey] = useState(0);
  const currentYear = new Date().getFullYear();

  // Ensure connectors recalc when entering print preview or printing
  useEffect(() => {
    const beforePrint = () => {
      // Delay to allow layout to settle under print styles
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setRefreshKey((k) => k + 1))
      );
    };

    // Fallback: matchMedia for broader browser support
    const mql = window.matchMedia && window.matchMedia("print");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) beforePrint();
    };

    window.addEventListener("beforeprint", beforePrint);
    if (mql) {
      // addEventListener is preferred, addListener for older support
      if ("addEventListener" in mql) {
        mql.addEventListener("change", onChange);
      } else if ("addListener" in mql) {
        // @ts-expect-error legacy API
        mql.addListener(onChange);
      }
    }

    return () => {
      window.removeEventListener("beforeprint", beforePrint);
      if (mql) {
        if ("removeEventListener" in mql) {
          mql.removeEventListener("change", onChange);
        } else if ("removeListener" in mql) {
          // @ts-expect-error legacy API
          mql.removeListener(onChange);
        }
      }
    };
  }, []);

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-white dark:to-gray-900 pb-0.5">
        <h2 className="text-xl sm:text-2xl text-purple-500 font-bold bg-white dark:bg-gray-900 pb-2">
          experience (+
          {currentYear - experience[experience.length - 1].startYear}
          y)
        </h2>
      </div>

      {/* Content */}
      <article ref={containerRef} className="space-y-6 sm:space-y-8 relative">
        {/* Experience Cards */}
        {experience.map((experience, index) => {
          return (
            <ExperienceCard key={`experience-entry-${index}`} {...experience}>
              {/* Timeline Icon */}
              <DotIcon
                ref={(element) => {
                  dotRefs[index].current = element;
                }}
                className="text-purple-500 shrink-0 z-20"
                strokeWidth={8}
              />
            </ExperienceCard>
          );
        })}

        {/* Connecting Lines */}
        {dotRefs.map((_, i) =>
          i === 0 ? null : (
            <Connector
              key={`connector-${i}-${refreshKey}`}
              fromRef={dotRefs[i - 1]}
              toRef={dotRefs[i]}
              containerRef={containerRef}
              className="text-purple-800 z-10"
            />
          )
        )}
      </article>
    </div>
  );
}
