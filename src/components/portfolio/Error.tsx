import { COLOR_PALETTE } from "@/lib/portfolio/constants";
import UnderliningLink from "@/components/ui/underlining-link";
import { FiArrowLeft } from "react-icons/fi";

export default function Error() {
  return (
    <div className="w-screen h-screen flex items-center leading-relaxed relative">
      {/* Background Image */}
      <img
        src="/background.png"
        alt="Background image consisting of handwritten computer science notes"
        className="hidden lg:block absolute top-0 left-3/5 w-2/5 h-full object-cover -z-10 opacity-50"
      />

      {/* Background Overlay */}
      <div className="hidden lg:block absolute top-0 left-3/5 w-2/5 h-full bg-primary/95 -z-10"></div>

      {/* Color Palette */}
      <section className="hidden lg:flex justify-end absolute top-0 right-0 z-20">
        {COLOR_PALETTE.map((color) => {
          const backgroundColorClass = `bg-${color}`;
          return (
            <div
              key={color}
              className={`${backgroundColorClass} w-5 h-5`}
            ></div>
          );
        })}
      </section>

      {/* Main Container */}
      <main className="w-full lg:w-3/5 h-full bg-background overflow-y-auto relative z-10">
        <section className="flex flex-col gap-5 items-center justify-center h-full">
          <h1 className="text-7xl font-bold text-primary">404</h1>
          <p className="text-lg text-secondary">
            Sorry, I cannot find the page you are looking for.
          </p>
          <UnderliningLink href="/" variant="link">
            <FiArrowLeft aria-hidden="true" className="w-5 h-5" />
            <span className="text-lg">back to home</span>
          </UnderliningLink>
        </section>
      </main>
    </div>
  );
}
