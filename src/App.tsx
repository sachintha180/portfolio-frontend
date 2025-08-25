// App.tsx

import ProfileSection from "./components/ProfileSection";
import EducationSection from "./components/EducationSection";
import MagnifierBackground from "./components/ui/MagnifierBackground";
import Footer from "./components/ui/Footer";
import { useRef, useState, useEffect } from "react";
import ExperienceSection from "./components/ExperienceSection";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import TechStackSection from "./components/TechStackSection";

export default function App() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [showMagnifier, setShowMagnifier] = useState(false);

  // Check if screen size is xl or above
  useEffect(() => {
    const checkScreenSize = () => {
      setShowMagnifier(window.innerWidth >= 1280); // xl breakpoint is 1280px
    };

    // Check on mount
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <main className="relative">
      <div
        ref={contentRef}
        className="w-full xl:w-4/5 2xl:w-2/3 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 sm:py-6 md:py-8 bg-gray-900 h-full space-y-6 sm:space-y-8 md:space-y-10 z-40"
      >
        {/* Header Section */}
        <Header />

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
          {/* Profile and Projects Sections */}
          <section className="flex-1 space-y-6 sm:space-y-8 md:space-y-10">
            <ProfileSection />
            <ExperienceSection />
            <ProjectsSection />
          </section>

          {/* Tech Stack Section */}
          <section className="flex-1 space-y-6 sm:space-y-8 md:space-y-10">
            <TechStackSection className="flex-1" />
            <EducationSection />
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>

      {/* Auto Magnifier Background - Only on xl screens and above */}
      {showMagnifier && <MagnifierBackground contentRef={contentRef} />}
    </main>
  );
}
