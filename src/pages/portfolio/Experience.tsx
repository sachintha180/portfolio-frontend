import { lazy } from "react";
import { FiArrowLeft } from "react-icons/fi";
import UnderliningLink from "@/components/ui/underlining-link";
import Seperator from "@/components/ui/seperator";
import Header from "@/components/portfolio/Header";

const ExperienceSection = lazy(
  () => import("@/components/portfolio/ExperienceSection")
);

export default function Experience() {
  return (
    <section className="mx-5 my-10 flex flex-1 flex-col gap-5 md:mx-15">
      {/* Header */}
      <Header title="sachintha senanayake" subtitle="my experience">
        <UnderliningLink href="/portfolio" variant="link">
          <FiArrowLeft aria-hidden="true" className="h-5 w-5" />
          <span className="text-lg">back to home</span>
        </UnderliningLink>
      </Header>

      {/* Seperator */}
      <Seperator />

      {/* Experience Section */}
      <ExperienceSection />
    </section>
  );
}
