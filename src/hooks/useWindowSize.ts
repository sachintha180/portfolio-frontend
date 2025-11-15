import { useLayoutEffect, useState } from "react";

export function useWindowSize() {
  // NOTE: Initialized this way to avoid a flickering effect on the initial render.
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
}
