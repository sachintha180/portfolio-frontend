// pages/PaperHome.tsx

import ProfileSection from "@/components/tailwind/ProfileSection";
import EducationSection from "@/components/tailwind/EducationSection";
import ExperienceSection from "@/components/tailwind/ExperienceSection";
import Header from "@/components/tailwind/Header";
import ProjectsSection from "@/components/tailwind/ProjectsSection";
import TechStackSection from "@/components/tailwind/TechStackSection";
import HonorsSection from "@/components/tailwind/HonorsSection";

export default function PaperHome() {
  return (
    <main className="relative mt-5 font-print">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 sm:py-6 md:py-8 bg-white h-full space-y-6 sm:space-y-8 md:space-y-10 z-40">
        {/* Header Section */}
        <Header showFullSocials={true} />

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
            <HonorsSection />
          </section>
        </div>
      </div>
    </main>
  );
}
