// components/ui/Connector.tsx

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
  type RefObject,
} from "react";

type Points = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

type ConnectorProps = {
  fromRef: RefObject<HTMLDivElement | null>;
  toRef: RefObject<HTMLDivElement | null>;
  containerRef: RefObject<HTMLElement | null>;
  className?: string;
};

export default function Connector({
  fromRef,
  toRef,
  containerRef,
  className,
}: ConnectorProps) {
  const [points, setPoints] = useState<Points | null>(null);

  // Compute coordinates of element centers relative to the container
  const recalc = useCallback(() => {
    const container = containerRef.current;
    const from = fromRef.current;
    const to = toRef.current;
    if (!container || !from || !to) return;

    const containerR = container.getBoundingClientRect();
    const fromR = from.getBoundingClientRect();
    const toR = to.getBoundingClientRect();

    const x1 = fromR.left - containerR.left + fromR.width / 2;
    const y1 = fromR.top - containerR.top + fromR.height / 2;
    const x2 = toR.left - containerR.left + toR.width / 2;
    const y2 = toR.top - containerR.top + toR.height / 2;

    setPoints({ x1, y1, x2, y2 });
  }, [fromRef, toRef, containerRef]);

  // ResizeObserver for both elements and container
  useLayoutEffect(() => {
    const container = containerRef.current;
    const from = fromRef.current;
    const to = toRef.current;
    if (!container || !from || !to) return;

    const resizeObserver = new ResizeObserver(() => recalc());
    resizeObserver.observe(container);
    resizeObserver.observe(from);
    resizeObserver.observe(to);

    // Recalculate on first load
    recalc();

    return () => resizeObserver.disconnect();
  }, [fromRef, toRef, containerRef]);

  // Listen to scroll on container and window; and window resize
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handler = () => recalc();
    container.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);

    // Animation frames catch layout shifts
    let raf = requestAnimationFrame(recalc);
    return () => {
      container.removeEventListener("scroll", handler);
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
      cancelAnimationFrame(raf);
    };
  }, [containerRef]);

  return (
    <svg
      className={`absolute inset-0 pointer-events-none overflow-visible ${className}`}
    >
      {points && (
        <line
          x1={points.x1}
          y1={points.y1}
          x2={points.x2}
          y2={points.y2}
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
