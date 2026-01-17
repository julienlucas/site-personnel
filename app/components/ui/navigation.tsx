import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="relative border-b border-zinc-200 z-30">
      <div className="mx-auto max-w-[1100px] px-7 py-4 md:px-0">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-medium tracking-tight">
            Julien Lucas
          </Link>
          <div className="flex gap-3 uppercase" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            <Link href="#a-propos" className="text-sm uppercase font-semibold border border-zinc-200 tracking-tight w-fit px-4 py-[.02rem] leading-8">
              À propos/Parcours
            </Link>
            <Link href="#questions" className="text-sm uppercase font-semibold border border-zinc-200 tracking-tight w-fit px-4 py-[.02rem] leading-8">
              Questions
            </Link>
            <Link href="#contact" className="text-sm uppercase font-semibold tracking-tight bg-black text-white w-fit px-4 py-[.02rem] leading-8">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

