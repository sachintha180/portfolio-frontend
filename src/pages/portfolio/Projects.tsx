import { FiArrowLeft } from "react-icons/fi";
import UnderliningLink from "@/components/ui/underlining-link";
import Seperator from "@/components/ui/seperator";
import PortfolioLayout from "@/components/layouts/PortfolioLayout";
import { PROJECT_ITEMS } from "@/lib/portfolio/projects";
import ProjectButton from "@/components/ui/project-button";
import Header from "@/components/portfolio/Header";

export default function Projects() {
  return (
    <PortfolioLayout>
      {/* Content Container */}
      <section className="flex flex-col gap-5 mx-5 md:mx-15 my-10">
        {/* Header */}
        <Header subtitle="my projects">
          <UnderliningLink href="/" variant="link">
            <FiArrowLeft aria-hidden="true" className="w-5 h-5" />
            <span className="text-lg">back to home</span>
          </UnderliningLink>
        </Header>

        {/* Seperator */}
        <Seperator />

        {/* Projects Section */}
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {PROJECT_ITEMS.map((project, index) => (
            <ProjectButton key={index} project={project} />
          ))}
        </section>
      </section>
    </PortfolioLayout>
  );
}
