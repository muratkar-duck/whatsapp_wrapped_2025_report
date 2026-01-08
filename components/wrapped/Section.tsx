import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <section
      id={id}
      data-wrapped-section
      className="relative min-h-[100svh] w-full snap-start px-6 py-16 sm:px-12 lg:px-16"
    >
      {children}
    </section>
  );
}
