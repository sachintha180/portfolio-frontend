import type { AnchorHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

type UnderliningLinkVariant = "link" | "text" | "surface";

const variantClasses = {
  link: {
    base: "text-link",
    after: "after:bg-link",
  },
  text: {
    base: "text-muted",
    after: "after:bg-muted",
  },
  surface: {
    base: "text-surface",
    after: "after:bg-surface",
  },
};

type UnderliningLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: UnderliningLinkVariant;
  withIcon?: boolean;
};

export default function UnderliningLink({
  children,
  variant = "link",
  className,
  withIcon = false,
  href,
  onClick,
  ...props
}: UnderliningLinkProps) {
  const navigate = useNavigate();
  const baseClassName = `flex flex-row items-center justify-center gap-2 relative after:w-full after:h-0.5 after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 ${variantClasses[variant].base} ${variantClasses[variant].after} break-all`;
  const combinedClassName = className
    ? `${baseClassName} ${className}`
    : baseClassName;

  // Only intercept if href is provided and it's an internal link
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href && href.startsWith("/")) {
      e.preventDefault();
      e.stopPropagation(); // Prevent event from bubbling to parent elements
      navigate(href);
    }
    onClick?.(e);
  };

  return (
    <a
      href={href}
      className={combinedClassName}
      onClick={handleClick}
      {...props}
    >
      {children}
      {withIcon && (
        <FiArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
      )}
    </a>
  );
}
