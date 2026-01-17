"use client";

import { useState } from "react";
import { Button } from "./button";
import { CardTitle } from "./card";

export default function ContactBubble() {
  const [isContactOpen, setIsContactOpen] = useState(true);

  const scrollToContact = () => {
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isContactOpen && (
        <div
          className="relative w-[260px] cursor-pointer rounded-xl border border-zinc-200 bg-white shadow-lg p-3 text-sm text-zinc-800"
          onClick={scrollToContact}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              scrollToContact();
            }
          }}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setIsContactOpen(false);
            }}
            className="absolute right-2 top-2 text-zinc-500 hover:text-zinc-800"
            aria-label="Fermer"
          >
            ✕
          </button>
          <img
            src="/julienlucas.jpg"
            alt="Contact"
            className="w-8 h-8 rounded-full"
          />
          <CardTitle className="text-lg font-bold text-black leading-6 -mt-2 -mb-0">
            Call projet IA
          </CardTitle>
          <p className="text-sm leading-5">
            20 minutes pour valider votre projet d'automatisation ou
            d'application. N'hésitez pas à me contacter.
          </p>
          <Button
            size="sm"
            className="mt-3 w-full"
            onClick={(event) => {
              event.stopPropagation();
              scrollToContact();
            }}
          >
            Prendre contact
          </Button>
        </div>
      )}
      <button
        type="button"
        onClick={() => setIsContactOpen((current) => !current)}
        className="relative h-12 w-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:bg-black/80"
        aria-label="Contacter Julien"
      >
        <span
          className="absolute inset-0.5 rounded-full animate-spin"
          style={{
            animationDuration: "3s",
            filter: "blur(7px)",
            willChange: "transform",
            background:
              "conic-gradient(from 0deg, rgba(255,255,255,0) 0deg, rgba(255,255,255,0.2) 120deg, rgba(255,255,255,0.9) 220deg, rgba(255,255,255,0) 360deg)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 0)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 0)",
          }}
        />
        ✉️
      </button>
    </div>
  );
}
