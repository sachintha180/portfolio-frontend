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
    <section className="flex h-full flex-col items-center justify-center gap-5">
      <h1 className="text-primary text-7xl font-bold">{title}</h1>
      <p className="text-secondary text-lg">{description}</p>
      <UnderliningLink href={linkHref} variant="link">
        <FiArrowLeft aria-hidden="true" className="h-5 w-5" />
        <span className="text-lg">{linkText}</span>
      </UnderliningLink>
    </section>
  );
}
