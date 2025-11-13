import {
  FiArrowDown,
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";
import UnderliningLink from "@/components/ui/underlining-link";
import Seperator from "@/components/ui/seperator";
import ContactItem from "@/components/ContactItem";
import PageButton from "@/components/ui/page-button";
import Layout from "@/components/Layout";
import { PAGE_ITEMS } from "@/lib/constants";
import type { ContactItem as ContactItemType } from "@/types/miscellaneous";
import Header from "@/components/Header";
import TechStack from "@/components/TechStack";

export default function Home() {
  const contacts: ContactItemType[] = [
    {
      icon: <FiMail aria-hidden="true" className="w-5 h-5 text-surface" />,
      href: "mailto:sachinthasenanayake180@gmail.com",
      text: "sachinthasenanayake180@gmail.com",
      iconColorClass: "bg-primary",
    },
    {
      icon: <FiMapPin aria-hidden="true" className="w-5 h-5 text-surface" />,
      href: "https://www.google.com/maps/place/Colombo,+Sri+Lanka",
      text: "Colombo, Sri Lanka",
      iconColorClass: "bg-secondary",
    },
    {
      icon: <FiPhone aria-hidden="true" className="w-5 h-5 text-surface" />,
      href: "tel:+94724559912",
      text: "+94 72 455 9912",
      iconColorClass: "bg-warm",
    },
    {
      icon: <FiGithub aria-hidden="true" className="w-5 h-5 text-surface" />,
      href: "https://github.com/sachintha180",
      text: "@sachintha180",
      iconColorClass: "bg-success",
    },
    {
      icon: <FiLinkedin aria-hidden="true" className="w-5 h-5 text-surface" />,
      href: "https://www.linkedin.com/in/sachinthasenanayake180/",
      text: "@sachinthasenanayake180",
      iconColorClass: "bg-cool",
    },
    {
      icon: <FiYoutube aria-hidden="true" className="w-5 h-5 text-surface" />,
      href: "https://www.youtube.com/@siby18",
      text: "@siby18",
      iconColorClass: "bg-danger",
    },
  ];

  return (
    <Layout>
      {/* Content Container */}
      <section className="flex flex-col gap-5 mx-5 md:mx-15 my-10">
        {/* Header */}
        <Header subtitle="full-stack &amp; AI developer">
          <UnderliningLink href="/curriculum_vitae" variant="link" download>
            <span className="text-lg">download my CV</span>
            <FiArrowDown aria-hidden="true" className="w-5 h-5" />
          </UnderliningLink>
        </Header>

        {/* Seperator */}
        <Seperator />

        {/* Contact Section */}
        <section className="grid md:grid-flow-col md:grid-rows-3 grid-flow-row gap-2">
          {contacts.map((contact) => (
            <ContactItem key={contact.href} {...contact} />
          ))}
        </section>

        {/* Seperator */}
        <Seperator />

        {/* About Me Section */}
        <section className="flex flex-col gap-2">
          <h3 className="text-secondary text-2xl mb-2">about me</h3>
          <p className="text-muted text-justify">
            I'm a full stack and AI developer with over 2 years of experience
            working across Python, TypeScript, and React. I specialize in
            connecting backend logic to intelligent systems, with UX in mind -
            from FastAPI and PostgreSQL to AI agent workflows in LangChain and
            Vercel AI SDK. I'm great at designing APIs and building automations.
            I'm framework agnostic, with my focus being on writing clear,
            testable code built for function over form. I'm fascinated by
            graphs, genetic algorithms and teach computer science to secondary
            school students during the weekends.
          </p>
        </section>

        {/* Seperator */}
        <Seperator />

        {/* Tech Stack Section */}
        <TechStack />

        {/* Seperator */}
        <Seperator />

        {/* Pages Buttons */}
        <section className="flex flex-col gap-2">
          <h3 className="text-secondary text-2xl mb-5">pages</h3>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {PAGE_ITEMS.map((page) => (
              <PageButton key={page.href} {...page} />
            ))}
          </div>
        </section>
      </section>
    </Layout>
  );
}
