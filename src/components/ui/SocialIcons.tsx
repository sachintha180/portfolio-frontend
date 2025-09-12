// components/ui/SocialIcons.tsx

import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";

type SocialIconsProps = {
  className?: string;
  expanded?: boolean;
  phone?: string;
  website?: string;
  linkedinUrl?: string;
  email?: string;
  githubUrl?: string;
  youtubeUrl?: string;
};

export default function SocialIcons({
  className,
  expanded = false,
  phone,
  website,
  linkedinUrl = "https://www.linkedin.com/in/sachinthasenanayake180/",
  email = "sachinthasenanayake180@gmail.com",
  githubUrl = "https://github.com/sachintha180",
  youtubeUrl = "https://www.youtube.com/@siby18",
}: SocialIconsProps) {
  const baseLinkClass =
    "inline-flex items-center gap-2 text-gray-700 dark:text-gray-400 transition-colors hover:text-gray-400 dark:hover:text-white";

  const iconClass = "h-4 w-4 sm:h-5 sm:w-5";
  const textClass = "text-xs sm:text-sm";

  const sanitizeTel = (raw?: string) =>
    raw ? `tel:${raw.replace(/[^+\d]/g, "")}` : undefined;

  const items: Array<{
    key: string;
    href: string;
    label: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    aria: string;
    external?: boolean;
  }> = [
    {
      key: "linkedin",
      href: linkedinUrl,
      label: "sachinthasenanayake180",
      Icon: FaLinkedin,
      aria: "LinkedIn Profile",
      external: true,
    },
    {
      key: "email",
      href: `mailto:${email}`,
      label: email,
      Icon: FaEnvelope,
      aria: "Send Email",
    },
    {
      key: "github",
      href: githubUrl,
      label: "sachintha180",
      Icon: FaGithub,
      aria: "GitHub Profile",
      external: true,
    },
    {
      key: "youtube",
      href: youtubeUrl,
      label: "@siby18",
      Icon: FaYoutube,
      aria: "YouTube Channel",
      external: true,
    },
  ];

  if (phone) {
    items.push({
      key: "phone",
      href: sanitizeTel(phone)!,
      label: phone,
      Icon: FaPhoneAlt,
      aria: "Call Phone",
    });
  }

  if (website) {
    items.push({
      key: "website",
      href: website,
      label: "sachintha.net",
      Icon: FaGlobe,
      aria: "Personal Website",
      external: true,
    });
  }

  return (
    <div
      className={`mt-3 sm:mt-5 flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}
    >
      {items.map(({ key, href, label, Icon, aria, external }) => (
        <a
          key={key}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={baseLinkClass}
          aria-label={aria}
          title={expanded ? undefined : label}
        >
          <Icon className={iconClass} />
          {expanded && <span className={textClass}>{label}</span>}
        </a>
      ))}
    </div>
  );
}
