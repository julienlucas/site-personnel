import { ReactNode } from "react";

interface ChapterProps {
  id?: string;
  roman: string;
  title: string;
  children: ReactNode;
}

export default function Chapter({ id, roman, title, children }: ChapterProps) {
  return (
    <section id={id} className="border-t border-rule py-14 scroll-mt-24">
      <header className="mb-8">
        <span className="chapter-roman block mb-2">Chapitre {roman}</span>
        <h2 className="chapter-title text-[26px] md:text-[30px] leading-tight">
          {title}
        </h2>
      </header>
      <div className="space-y-5">{children}</div>
    </section>
  );
}
