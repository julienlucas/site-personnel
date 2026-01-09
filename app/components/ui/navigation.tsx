import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="relative border-b border-zinc-200 z-30">
      <div className="mx-auto max-w-[1100px] px-7 py-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-medium tracking-tight">
            Julien Lucas
          </Link>
          <div className="flex gap-3">
            <Link href="#a-propos" className="border p-2 pt-1 pb-1 text-sm font-medium">
              À propos/Parcours
            </Link>
            <Link href="#questions" className="border p-2 pt-1 pb-1 text-sm font-medium">
              Questions
            </Link>
            <Link href="#contact" className="bg-black text-white border p-2 pt-1 pb-1 text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

