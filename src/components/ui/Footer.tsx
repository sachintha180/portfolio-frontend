// components/ui/Footer.tsx

import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 sm:mt-20 md:mt-24 border-t border-gray-800 pt-6 sm:pt-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-gray-400 text-sm">
            © {currentYear}{" "}
            <span className="text-white font-medium">Sachintha Senanayake</span>
            . All rights reserved.
          </p>
        </div>

        {/* GitHub Link */}
        <div className="text-center sm:text-right">
          <p className="text-gray-400 text-sm mb-2">
            Like what you see? Check out this portfolio on GitHub!
          </p>
          <a
            href="https://github.com/sachintha180/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
          >
            <FaGithub className="w-4 h-4" />
            View Source Code
          </a>
        </div>
      </div>
    </footer>
  );
}
