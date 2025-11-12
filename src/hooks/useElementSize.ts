import { useEffect, useState, type RefObject } from "react";
import type { GraphSize } from "@/types/force-graph";

type useElementSizeProps = {
  ref: RefObject<HTMLElement | null>;
  initialSize: GraphSize;
};

export function useElementSize({ ref, initialSize }: useElementSizeProps) {
  const [size, setSize] = useState(initialSize);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry?.contentRect ?? { width: 0, height: 0 };
      setSize({ width, height });
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, initialSize]);

  return size;
}
