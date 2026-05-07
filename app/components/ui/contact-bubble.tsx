"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactBubble() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-[280px] bg-paper border border-rule shadow-sm p-4">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-3 top-3 text-ink-muted hover:text-ink"
            aria-label="Fermer"
          >
            ✕
          </button>
          <div className="flex items-center gap-3">
            <span className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-rule flex-shrink-0">
              <Image
                src="/julienlucas-b.jpeg"
                alt="Julien Lucas"
                fill
                className="object-cover"
              />
            </span>
            <span className="font-mono-label text-ink-muted">
              Disponible · Avignon
            </span>
          </div>
          <p className="mt-3 text-[14px] leading-snug text-ink">
            Call de 20 min pour discuter de la faisabilité de votre projet IA.
          </p>
          <button
            type="button"
            onClick={scrollToContact}
            className="mt-3 w-full font-mono-label bg-ink text-paper px-4 py-2.5 hover:bg-forest"
          >
            Prendre contact
          </button>
        </div>
      )}
      <button
        type="button"
        onClick={() => setIsOpen((c) => !c)}
        className="h-12 w-12 rounded-full bg-ink text-paper flex items-center justify-center shadow-md hover:bg-forest"
        aria-label="Contacter Julien"
      >
        ✉
      </button>
    </div>
  );
}
