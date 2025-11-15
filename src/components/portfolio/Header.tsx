import type { ReactNode } from "react";

type HeaderProps = {
  subtitle: string;
  children: ReactNode;
};

export default function Header({ subtitle, children }: HeaderProps) {
  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-primary font-medium text-4xl text-center lg:text-left">
        sachintha senanayake
      </h1>
      <div className="flex lg:flex-row flex-col gap-2 items-center justify-between text-link">
        <h2 className="text-secondary text-2xl text-center lg:text-left">
          {subtitle}
        </h2>
        {children}
      </div>
    </header>
  );
}
