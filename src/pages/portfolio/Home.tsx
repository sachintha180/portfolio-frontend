import {
  FiArrowRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";
import UnderliningLink from "@/components/ui/underlining-link";
import Seperator from "@/components/ui/seperator";
import ContactItem from "@/components/portfolio/ContactItem";
import PageButton from "@/components/ui/page-button";
import PortfolioLayout from "@/components/layouts/PortfolioLayout";
import { ABOUT_ME, PAGE_ITEMS } from "@/lib/portfolio/constants";
import type { ContactItem as ContactItemType } from "@/types/miscellaneous";
import Header from "@/components/portfolio/Header";
import TechStack from "@/components/portfolio/TechStack";

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
    <PortfolioLayout>
      {/* Content Container */}
      <section className="flex flex-col gap-5 mx-5 md:mx-15 my-10">
        {/* Header */}
        <Header subtitle="full-stack &amp; AI developer">
          <UnderliningLink href="/cv" variant="link">
            <span className="text-lg">read my CV</span>
            <FiArrowRight aria-hidden="true" className="w-5 h-5" />
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
          <h3 className="text-secondary text-2xl mb-5">pages</h3>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {PAGE_ITEMS.map((page) => (
              <PageButton key={page.href} {...page} />
            ))}
          </div>
        </section>
      </section>
    </PortfolioLayout>
  );
}
