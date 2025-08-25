// components/ui/SocialIcons.tsx

import { MailIcon } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

type SocialIconsProps = {
  className?: string;
};

export default function SocialIcons({ className }: SocialIconsProps) {
  return (
    <div
      className={`mt-3 sm:mt-5 flex items-center gap-3 sm:gap-4 ${className}`}
    >
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/sachinthasenanayake180/"
        target="_blank"
        className="text-gray-400 transition-colors hover:text-white"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
      </a>

      {/* Email */}
      <a
        href="mailto:sachinthasenanayake180@gmail.com"
        className="text-gray-400 transition-colors hover:text-white"
        aria-label="Send Email"
      >
        <MailIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/sachintha180"
        target="_blank"
        className="text-gray-400 transition-colors hover:text-white"
        aria-label="GitHub Profile"
      >
        <FaGithub className="h-4 w-4 sm:h-5 sm:w-5" />
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@siby18"
        target="_blank"
        className="text-gray-400 transition-colors hover:text-white"
        aria-label="YouTube Channel"
      >
        <FaYoutube className="h-4 w-4 sm:h-5 sm:w-5" />
      </a>
    </div>
  );
}
