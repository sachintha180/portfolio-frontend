import UnderliningLink from "@/components/ui/underlining-link";
import { FiArrowLeft } from "react-icons/fi";

type NotFoundProps = {
  title?: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
};

export default function NotFound({
  title = "404",
  description = "Sorry, I cannot find the page you are looking for.",
  linkText = "back to home",
  linkHref = "/",
}: NotFoundProps) {
  return (
    <section className="flex flex-col gap-5 h-full items-center justify-center">
      <h1 className="text-7xl font-bold text-primary">{title}</h1>
      <p className="text-lg text-secondary">{description}</p>
      <UnderliningLink href={linkHref} variant="link">
        <FiArrowLeft aria-hidden="true" className="w-5 h-5" />
        <span className="text-lg">{linkText}</span>
      </UnderliningLink>
    </section>
  );
}
