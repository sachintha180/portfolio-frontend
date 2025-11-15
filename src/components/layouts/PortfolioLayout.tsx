import ForceGraph from "@/components/ui/force-graph";
import { useRef, type ReactNode } from "react";
import { useElementSize } from "@/hooks/useElementSize";
import {
  COLOR_PALETTE,
  DEFAULT_GRAPH_SIZE,
  GRAPH_DATA,
  LAYOUT_GRAPHICS_BREAKPOINT,
} from "@/lib/portfolio/constants";
import { useWindowSize } from "@/hooks/useWindowSize";

type PortfolioLayoutProps = {
  children: ReactNode;
};

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const graphRef = useRef<HTMLDivElement>(null);

  const { width, height } = useElementSize({
    ref: graphRef,
    initialSize: DEFAULT_GRAPH_SIZE,
  });

  const { width: windowWidth } = useWindowSize();
  const renderGraphics = windowWidth >= LAYOUT_GRAPHICS_BREAKPOINT;

  // NOTE: We're selectively rendering the graphics to improve mobile performance.

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
        <section className="justify-end absolute top-0 right-0 z-20">
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
      <main className="w-full xl:w-3/5 h-full bg-background overflow-y-auto relative z-10">
        {children}
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
