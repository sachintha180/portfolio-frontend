// components/ui/SocialIcons.tsx

import { MailIcon } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

type SocialIconsProps = {
  className?: string;
};

export default function SocialIcons({ className }: SocialIconsProps) {
  return (
    <div className={`mt-5 flex items-center gap-4 ${className}`}>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/sachinthasenanayake180/"
        target="_blank"
        className="text-gray-400 transition-colors hover:text-white"
      >
        <FaLinkedin className="h-5 w-5" />
      </a>

      {/* Email */}
      <a
        href="mailto:sachinthasenanayake180@gmail.com"
        className="text-gray-400 transition-colors hover:text-white"
      >
        <MailIcon className="h-5 w-5" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/sachintha180"
        target="_blank"
        className="text-gray-400 transition-colors hover:text-white"
      >
        <FaGithub className="h-5 w-5" />
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@siby18"
        target="_blank"
        className="text-gray-400 transition-colors hover:text-white"
      >
        <FaYoutube className="h-5 w-5" />
      </a>
    </div>
  );
}
