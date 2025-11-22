import {
  FiArrowRight,
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";
import UnderliningLink from "@/components/ui/underlining-link";
import Seperator from "@/components/ui/seperator";
import ContactItem from "@/components/portfolio/ContactItem";
import PageButton from "@/components/ui/page-button";
import { ABOUT_ME, PAGE_ITEMS } from "@/lib/portfolio/constants";
import type { ContactItem as ContactItemType } from "@/types/miscellaneous";
import Header from "@/components/portfolio/Header";
import TechStack from "@/components/portfolio/TechStack";

export default function Home() {
  const contacts: ContactItemType[] = [
    {
      icon: <FiMail aria-hidden="true" className="text-surface h-5 w-5" />,
      href: "mailto:sachinthasenanayake180@gmail.com",
      text: "sachinthasenanayake180@gmail.com",
      iconColorClass: "bg-secondary",
    },
    {
      icon: <FiMapPin aria-hidden="true" className="text-surface h-5 w-5" />,
      href: "https://www.google.com/maps/place/Colombo,+Sri+Lanka",
      text: "Colombo, Sri Lanka",
      iconColorClass: "bg-warm",
    },
    {
      icon: <FiGithub aria-hidden="true" className="text-surface h-5 w-5" />,
      href: "https://github.com/sachintha180",
      text: "@sachintha180",
      iconColorClass: "bg-success",
    },
    {
      icon: <FiLinkedin aria-hidden="true" className="text-surface h-5 w-5" />,
      href: "https://www.linkedin.com/in/sachinthasenanayake180/",
      text: "@sachinthasenanayake180",
      iconColorClass: "bg-cool",
    },
    {
      icon: <FiYoutube aria-hidden="true" className="text-surface h-5 w-5" />,
      href: "https://www.youtube.com/@siby18",
      text: "@siby18",
      iconColorClass: "bg-danger",
    },
  ];

  return (
    <section className="mx-5 my-10 flex flex-1 flex-col gap-5 md:mx-15">
      {/* Header */}
      <Header
        title="sachintha senanayake"
        subtitle="full-stack &amp; AI developer"
      >
        <UnderliningLink href="/cv" variant="link">
          <span className="text-lg">read my CV</span>
          <FiArrowRight aria-hidden="true" className="h-5 w-5" />
        </UnderliningLink>
      </Header>

      {/* Seperator */}
      <Seperator />

      {/* Contact Section */}
      <section className="grid grid-flow-row gap-2 md:grid-flow-col md:grid-rows-3">
        {contacts.map((contact) => (
          <ContactItem key={contact.href} {...contact} />
        ))}
      </section>

      {/* Seperator */}
      <Seperator />

      {/* About Me Section */}
      <section className="flex flex-col gap-2">
        <h3 className="text-secondary mb-2 text-2xl">about me</h3>
        <p className="text-muted text-justify">{ABOUT_ME}</p>
      </section>

      {/* Seperator */}
      <Seperator />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Seperator */}
      <Seperator />

      {/* Pages Buttons */}
      <section className="flex flex-col gap-2">
        <h3 className="text-secondary mb-5 text-2xl">pages</h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {PAGE_ITEMS.map((page) => (
            <PageButton key={page.href} {...page} />
          ))}
        </div>
      </section>
    </section>
  );
}
