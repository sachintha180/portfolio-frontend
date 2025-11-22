import {
  COLOR_PALETTE,
  LAYOUT_GRAPHICS_BREAKPOINT,
} from "@/lib/portfolio/constants";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function CSClassLayout() {
  // NOTE: We're selectively rendering the graphics to improve mobile performance.
  const { width: windowWidth } = useWindowSize();
  const renderGraphics = windowWidth >= LAYOUT_GRAPHICS_BREAKPOINT;

  const { verify } = useAuth();
  const hasVerified = useRef(false);

  useEffect(() => {
    if (!hasVerified.current) {
      verify();
      hasVerified.current = true;
    }
  }, [verify]);

  const currentYear = new Date().getFullYear();

  return (
    <div className="relative flex h-screen w-screen items-center leading-relaxed">
      {/* Background Image */}
      {renderGraphics && (
        <img
          src="/background.png"
          alt="Background image consisting of handwritten computer science notes"
          className="absolute top-0 left-4/6 -z-10 h-full w-2/6 object-cover opacity-30"
        />
      )}

      {/* Background Overlay */}
      {renderGraphics && (
        <div className="bg-primary/80 absolute top-0 left-4/6 -z-10 h-full w-2/6"></div>
      )}

      {/* Color Palette */}
      {renderGraphics && (
        <section className="absolute top-0 right-0 z-20 flex flex-row justify-end">
          {COLOR_PALETTE.map((color) => {
            const backgroundColorClass = `bg-${color}`;
            return (
              <div
                key={color}
                className={`${backgroundColorClass} h-5 w-5`}
              ></div>
            );
          })}
        </section>
      )}

      {/* Main Container */}
      <main className="bg-background relative z-10 flex h-full w-full flex-col overflow-y-auto xl:w-4/6">
        <Outlet />

        {/* Copyright */}
        <div className="text-muted mx-5 mb-5 block text-sm sm:mb-8 sm:flex sm:flex-row sm:justify-between md:mx-15">
          <p>© {currentYear} Sachintha Senanayake</p>
          <p className="text-muted/70">All rights reserved</p>
        </div>
      </main>
    </div>
  );
}
