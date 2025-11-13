import type { AnchorHTMLAttributes, ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";

type PageButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  buttonLabel: string;
  colorClass: string;
  children?: ReactNode;
};

export default function PageButton({
  buttonLabel,
  colorClass,
  className,
  children,
  ...props
}: PageButtonProps) {
  const baseClassName = `relative flex flex-col justify-between gap-5 p-3 pl-4 text-surface text-xl group/page-button ${colorClass}`;
  const combinedClassName = className
    ? `${baseClassName} ${className}`
    : baseClassName;

  return (
    <a className={combinedClassName} {...props}>
      <FiArrowUpRight
        aria-hidden="true"
        className="h-10 w-10 ml-auto text-surface transition-transform duration-300 group-hover/page-button:translate-x-1 group-hover/page-button:-translate-y-1"
      />
      <div className="flex flex-col gap-3">
        <span className="text-xl font-semibold">{buttonLabel}</span>
        {children}
      </div>
    </a>
  );
}
