// components/ui/MagnifierBackground.tsx

import { useLayoutEffect, useRef, type RefObject } from "react";
import backgroundSrc from "@/assets/background-minified.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "motion/react";
import ProgressiveImage from "@/components/ui/ProgressiveImage";

type MagnifierBackgroundProps = {
  contentRef: RefObject<HTMLDivElement | null>;
};

const MAGNIFIER_RADIUS = 300;
const MAGNIFIER_MOVE_DELAY_MS = 800;
const MAGNIFIER_BORDER_COLOR = "#E5E7EB";

export default function MagnifierBackground({
  contentRef,
}: MagnifierBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animated coordinates (relative)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Initialize clip parameters
  const clipRadius = Math.floor(MAGNIFIER_RADIUS / 2);
  const clip = useMotionTemplate`circle(${clipRadius}px at ${x}px ${y}px)`;

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const content = contentRef.current ?? null;

    // Initialize clip at center
    const r0 = container.getBoundingClientRect();
    x.set(r0.width / 2);
    y.set(r0.height);

    // Prepare variables to store the return values of Framer animate
    let stop = false;
    let animX: ReturnType<typeof animate> | null = null;
    let animY: ReturnType<typeof animate> | null = null;

    // Helper functions
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
    const clamp = (v: number, min: number, max: number) =>
      Math.min(Math.max(v, min), max);

    // Generate a random coordinate to move the clip
    const randomTarget = () => {
      const containerRect = container.getBoundingClientRect();
      const contentRect = content?.getBoundingClientRect();

      const contentLeft = contentRect
        ? contentRect.left - containerRect.left
        : 0;
      const contentRight = contentRect
        ? contentRect.right - containerRect.left
        : containerRect.width;

      const leftGutterWidth = Math.max(0, contentLeft);
      const rightGutterStart = Math.min(containerRect.width, contentRight);
      const rightGutterWidth = Math.max(0, containerRect.width - contentRight);

      const midX = containerRect.width / 2;
      const randX = Math.random() * containerRect.width;

      // Pick somewhere in either the right gutter or the left gutter
      const targetX =
        randX > midX
          ? rightGutterStart + Math.random() * rightGutterWidth
          : Math.random() * leftGutterWidth;

      const targetY = Math.random() * containerRect.height;

      return { targetX, targetY };
    };

    // Move the clip to a random coordinate
    const move = async () => {
      const { targetX, targetY } = randomTarget();

      // Cancel all in-flight motion
      animX?.stop();
      animY?.stop();

      animX = animate(x, targetX, { duration: 1.2, ease: "easeInOut" });
      animY = animate(y, targetY, { duration: 1.2, ease: "easeInOut" });

      // Wait for both axes to finish animating, and hold
      try {
        await Promise.all([animX.finished, animY.finished]);
        if (stop) return;
        await sleep(MAGNIFIER_MOVE_DELAY_MS);
        if (stop) return;
        await move();
      } catch {
        console.log("An error occured when resuming the magnifier animation");
      }
    };

    // Keep point valid on resize
    const onResize = () => {
      const r = container.getBoundingClientRect();
      x.set(clamp(x.get(), 0, r.width));
      y.set(clamp(y.get(), 0, r.height));
    };
    window.addEventListener("resize", onResize);

    // Start animation
    void move();

    // Cleanup
    return () => {
      stop = true;
      animX?.stop();
      animY?.stop();
      window.removeEventListener("resize", onResize);
    };
  }, [contentRef, x, y]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Base Image */}
      <ProgressiveImage
        src={backgroundSrc}
        alt="Background consisting of computer science notes"
        className="absolute inset-0 h-full w-full object-cover blur-sm -z-40"
      />

      {/* Color Tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 mix-blend-color -z-30" />

      {/* Revealed Area (clip-path) */}
      <motion.img
        src={backgroundSrc}
        className="absolute inset-0 h-full w-full object-cover -z-20"
        style={{
          clipPath: clip,
          WebkitClipPath: clip,
          willChange: "clip-path",
        }}
        loading="lazy"
        decoding="async"
      />

      {/* Glass Ring */}
      <motion.div
        className="absolute rounded-full -z-10"
        style={{
          x,
          y,
          translate: "-50% -50%",
          width: MAGNIFIER_RADIUS,
          height: MAGNIFIER_RADIUS,
          border: `3px solid ${MAGNIFIER_BORDER_COLOR}`,
          boxShadow: `0 0 24px 0 ${MAGNIFIER_BORDER_COLOR}`,
        }}
      />
    </div>
  );
}
