// components/tailwind/Header.tsx

import { ChevronRightIcon } from "lucide-react";
import SocialIcons from "@/components/ui/SocialIcons";
import Signature from "@/components/ui/Signature";

export default function Header() {
  return (
    <section
      id="header"
      className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6"
    >
      <div className="space-y-2 sm:space-y-1">
        {/* Name */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-thin">
          <span className="font-bold">sachintha</span> senanayake
        </h1>

        {/* Job Title */}
        <div className="text-gray-400 text-base sm:text-lg font-bold flex items-center justify-start gap-1">
          <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          <h3>full stack and AI developer</h3>
        </div>

        {/* Social Icons */}
        <SocialIcons />
      </div>

      {/* Signature */}
      <Signature className="text-blue-500 w-24 h-16 sm:w-30 sm:h-20 self-center sm:self-start" />
    </section>
  );
}
