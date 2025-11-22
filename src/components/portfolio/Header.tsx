import type { ReactNode } from "react";

type HeaderProps = {
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export default function Header({ title, subtitle, children }: HeaderProps) {
  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-primary text-center text-4xl font-medium lg:text-left">
        {title}
      </h1>
      <div className="text-link flex flex-col items-center justify-between gap-2 lg:flex-row">
        <h2 className="text-secondary text-center text-2xl lg:text-left">
          {subtitle}
        </h2>
        {children}
      </div>
    </header>
  );
}
