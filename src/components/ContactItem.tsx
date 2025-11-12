import UnderliningLink from "@/components/ui/underlining-link";
import type { ContactItem as ContactItemType } from "@/types/miscellaneous";

export default function ContactItem({
  icon,
  href,
  text,
  iconColorClass,
}: ContactItemType) {
  return (
    <div className="flex flex-row gap-3">
      <div
        className={`flex items-center mt-1 justify-center ${iconColorClass} w-6 h-6 p-1`}
      >
        {icon}
      </div>
      <UnderliningLink
        href={href}
        variant="text"
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </UnderliningLink>
    </div>
  );
}
