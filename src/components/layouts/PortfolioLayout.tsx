import { lazy, useRef } from "react";
import { useElementSize } from "@/hooks/useElementSize";
import {
  COLOR_PALETTE,
  DEFAULT_GRAPH_SIZE,
  GRAPH_DATA,
  LAYOUT_GRAPHICS_BREAKPOINT,
} from "@/lib/portfolio/constants";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Outlet } from "react-router-dom";

const ForceGraph = lazy(() => import("@/components/ui/force-graph"));

export default function PortfolioLayout() {
  const graphRef = useRef<HTMLDivElement>(null);

  const { width, height } = useElementSize({
    ref: graphRef,
    initialSize: DEFAULT_GRAPH_SIZE,
  });

  // NOTE: We're selectively rendering the graphics to improve mobile performance.
  const { width: windowWidth } = useWindowSize();
  const renderGraphics = windowWidth >= LAYOUT_GRAPHICS_BREAKPOINT;

  const currentYear = new Date().getFullYear();

  return (
    <div className="w-screen h-screen flex items-center leading-relaxed relative">
      {/* Background Image */}
      {renderGraphics && (
        <img
          src="/background.png"
          alt="Background image consisting of handwritten computer science notes"
          className="absolute top-0 left-3/5 w-2/5 h-full object-cover -z-10 opacity-50"
        />
      )}

      {/* Background Overlay */}
      {renderGraphics && (
        <div className="absolute top-0 left-3/5 w-2/5 h-full bg-primary/95 -z-10"></div>
      )}

      {/* Color Palette */}
      {renderGraphics && (
        <section className="flex flex-row justify-end absolute top-0 right-0 z-20">
          {COLOR_PALETTE.map((color) => {
            const backgroundColorClass = `bg-${color}`;
            return (
              <div
                key={color}
                className={`${backgroundColorClass} w-5 h-5`}
              ></div>
            );
          })}
        </section>
      )}

      {/* Main Container */}
      <main className="flex flex-col w-full xl:w-3/5 h-full bg-background overflow-y-auto relative z-10">
        <Outlet />

        {/* Copyright */}
        <div className="mx-5 md:mx-15 sm:mb-8 mb-5 text-muted text-sm sm:flex sm:flex-row sm:justify-between block mt-auto">
          <p>© {currentYear} Sachintha Senanayake</p>
          <p className="text-muted/70">All rights reserved</p>
        </div>
      </main>

      {/* Force Graph */}
      {/* NOTE: We're rendering the container either way because graphRef is required to be present in the DOM for the graph to be initialized correctly.*/}
      <div
        ref={graphRef}
        className="hidden xl:block h-full w-2/5 right-0 top-0"
      >
        {renderGraphics && (
          <ForceGraph data={GRAPH_DATA} width={width} height={height} />
        )}
      </div>
    </div>
  );
}
