// App.tsx

import { ChevronRightIcon } from "lucide-react";
import Signature from "./components/ui/Signature";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import ProfileSection from "./components/ProfileSection";
import EducationSection from "./components/EducationSection";
import MagnifierBackground from "./components/ui/MagnifierBackground";
import { useRef } from "react";
import ExperienceSection from "./components/ExperienceSection";
import SocialIcons from "./components/ui/SocialIcons";

export default function App() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative">
      <div
        ref={contentRef}
        className="xl:w-4/5 2xl:w-2/3 mx-auto px-12 py-8 bg-gray-900 h-full space-y-10 z-40"
      >
        {/* Header Section */}
        <section id="header" className="flex items-start justify-between">
          <div className="space-y-1">
            {/* Name */}
            <h1 className="text-4xl text-white font-thin">
              <span className="font-bold">sachintha</span> senanayake
            </h1>

            {/* Job Title */}
            <div className="text-gray-400 text-lg font-bold flex items-center justify-start gap-1">
              <ChevronRightIcon className="w-5 h-5 shrink-0" />
              <h3>full stack and AI developer</h3>
            </div>

            {/* Social Icons */}
            <SocialIcons />
          </div>

          {/* Signature */}
          <Signature className="text-blue-500 w-30 h-20" />
        </section>

        <div className="lg:flex gap-10">
          {/* Profile and Projects Sections */}
          <section className="flex-1 space-y-10">
            <ProfileSection />
            <ExperienceSection />
            <ProjectsSection />
          </section>

          {/* Tech Stack Section */}
          <section className="flex-1 space-y-10">
            <TechStackSection className="flex-1" />
            <EducationSection />
          </section>
        </div>
      </div>

      {/* Auto Magnifier Background */}
      <MagnifierBackground contentRef={contentRef} />
    </main>
  );
}
