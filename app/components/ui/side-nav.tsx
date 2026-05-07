"use client";

import { useEffect, useRef, useState } from "react";

interface Item {
  id: string;
  label: string;
  tone: "light" | "dark";
}

const items: Item[] = [
  { id: "cover",      label: "Cover",                tone: "light" },
  { id: "aujourdhui", label: "I. Aujourd'hui",       tone: "light" },
  { id: "parcours",   label: "II. Première ligne",   tone: "dark"  },
  { id: "scale-ups",  label: "III. Cinq startups",   tone: "light" },
  { id: "declic",     label: "IV. Le passage à l'IA",tone: "light" },
  { id: "produits",   label: "V. Produits",          tone: "light" },
  { id: "pocs",       label: "VI. POCs",             tone: "light" },
  { id: "youtube",    label: "VII. YouTube",         tone: "light" },
  { id: "stack",      label: "VIII. Stack & lieux",  tone: "dark"  },
  { id: "contact",    label: "IX. Contact",          tone: "light" },
];

const DARK_TONE_CLASSES = [
  "profile-tone-black",
  "profile-tone-deep",
  "profile-bleed-dark",
];

function isDarkSection(el: Element): boolean {
  return DARK_TONE_CLASSES.some((c) => el.classList.contains(c));
}

export default function SideNav() {
  const [activeId, setActiveId] = useState<string>(items[0].id);
  const [tone, setTone] = useState<"light" | "dark">("light");
  const [hidden, setHidden] = useState<boolean>(false);
  const ticking = useRef(false);

  useEffect(() => {
    const compute = () => {
      ticking.current = false;
      const probe = window.innerHeight * 0.4;

      // Update the active item (drives the bar that's highlighted).
      let current: string = items[0].id;
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probe) current = it.id;
      }
      setActiveId(current);

      // Determine the visual tone of what sits behind the sidenav specifically.
      // The sidenav lives at the right edge (right: 28px) — so we probe a few
      // pixels to the LEFT of it (~ right edge - 100px) and walk up the DOM to
      // find a tone hint. This catches:
      //   - black curtains / dark bleeds (whole section is dark)
      //   - half-dark bleeds where the image sits on the right under the nav
      //   - dark deep tones (Stack & Lieux)
      const probeX = Math.max(0, window.innerWidth - 100);
      const probeY = window.innerHeight / 2;
      const hit = document.elementFromPoint(probeX, probeY);
      let bgTone: "light" | "dark" = "light";
      let cursor: Element | null = hit;
      while (cursor && cursor !== document.body) {
        if (
          cursor.classList?.contains("profile-bleed-img") ||
          isDarkSection(cursor)
        ) {
          bgTone = "dark";
          break;
        }
        if (cursor.tagName === "SECTION" || cursor.tagName === "HEADER") break;
        cursor = cursor.parentElement;
      }
      setTone(bgTone);

      // Hide while still in the cover/first section, and near the very
      // bottom (HTML footer). The sidenav stays visible across all editorial
      // sections — including the LinkedIn billboard, where the dark tone
      // detection above flips it to white.
      const trigger = document.getElementById("aujourdhui");
      const stillInCover = trigger
        ? trigger.getBoundingClientRect().top > window.innerHeight * 0.85
        : window.scrollY < 80;
      const docHeight = document.documentElement.scrollHeight;
      const viewBottom = window.scrollY + window.innerHeight;
      const nearBottom = docHeight - viewBottom < 120;
      setHidden(stillInCover || nearBottom);
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <nav
      className={`profile-sidenav${hidden ? " is-hidden" : ""}`}
      data-tone={tone}
      aria-label="Sections"
    >
      {items.map((it) => (
        <a
          key={it.id}
          href={`#${it.id}`}
          className={it.id === activeId ? "is-active" : ""}
        >
          <span className="profile-sn-label">{it.label}</span>
          <span className="profile-sn-bar" aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
