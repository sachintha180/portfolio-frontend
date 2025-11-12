import ForceGraph from "@/components/ui/force-graph";
import { useRef, type ReactNode } from "react";
import { useElementSize } from "@/hooks/useElementSize";
import { COLOR_PALETTE, DEFAULT_GRAPH_SIZE, GRAPH_DATA } from "@/lib/constants";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const graphRef = useRef<HTMLDivElement>(null);
  const { width, height } = useElementSize({
    ref: graphRef,
    initialSize: DEFAULT_GRAPH_SIZE,
  });

  return (
    <div className="w-screen h-screen flex items-center leading-relaxed relative">
      {/* Background Image */}
      <img
        src="/background.png"
        alt="Background image consisting of handwritten computer science notes"
        className="hidden xl:block absolute top-0 left-3/5 w-2/5 h-full object-cover -z-10 opacity-50"
      />

      {/* Background Overlay */}
      <div className="hidden xl:block absolute top-0 left-3/5 w-2/5 h-full bg-primary/95 -z-10"></div>

      {/* Color Palette */}
      <section className="hidden xl:flex justify-end absolute top-0 right-0 z-20">
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

      {/* Main Container */}
      <main className="w-full xl:w-3/5 h-full bg-background overflow-y-auto relative z-10">
        {children}
      </main>

      {/* Force Graph */}
      <div
        ref={graphRef}
        className="hidden xl:block h-full w-2/5 right-0 top-0"
      >
        <ForceGraph data={GRAPH_DATA} width={width} height={height} />
      </div>
    </div>
  );
}
