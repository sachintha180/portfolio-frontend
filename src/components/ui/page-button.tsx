import type { PageItem } from "@/types/miscellaneous";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

type PageButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PageItem & {
    children?: ReactNode;
    customIcon?: ReactNode;
  };

export default function PageButton({
  buttonLabel,
  nodeLabel,
  href,
  colorClass,
  className,
  children,
  onClick,
  ...props
}: PageButtonProps) {
  const navigate = useNavigate();

  const baseClassName = `relative flex flex-col justify-between gap-5 p-3 pl-4 text-surface text-xl group/page-button ${colorClass} cursor-pointer`;
  const combinedClassName = className
    ? `${baseClassName} ${className}`
    : baseClassName;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(href);
    onClick?.(e);
  };

  return (
    <button
      type="button"
      className={combinedClassName}
      onClick={handleClick}
      {...props}
    >
      <FiArrowUpRight
        aria-hidden="true"
        className="text-surface ml-auto h-10 w-10 transition-transform duration-300 group-hover/page-button:translate-x-1 group-hover/page-button:-translate-y-1"
      />
      <div className="flex flex-col gap-3">
        <span className="text-left text-xl font-semibold">{buttonLabel}</span>
        {children}
      </div>
    </button>
  );
}
