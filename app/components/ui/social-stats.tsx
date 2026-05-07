"use client";
import { useEffect, useState } from "react";

interface Stats {
  instagram: number;
  tiktok: number;
  linkedin: number;
  youtube: number;
}

interface Social {
  key: keyof Stats;
  label: string;
  href: string;
}

const socials: Social[] = [
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/julien-lucas-jl/" },
  { key: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@julienlucas" },
  { key: "youtube", label: "YouTube", href: "http://youtube.com/julienlucas" },
];

export default function SocialStats() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch("/api/social-stats")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => d && setStats(d))
      .catch(() => {});
  }, []);

  const fmt = (n?: number) =>
    !n ? "—" : n >= 1000 ? `${(n / 1000).toFixed(1)}K` : `${n}`;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-rule border border-rule">
      {socials.map((s) => (
        <a
          key={s.key}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-paper hover:bg-paper-soft px-4 py-5 flex flex-col items-start gap-1.5"
        >
          <span className="font-mono-label text-ink-muted">{s.label}</span>
          <span className="font-editorial text-[22px] font-semibold text-ink leading-none">
            {fmt(stats?.[s.key])}
          </span>
        </a>
      ))}
    </div>
  );
}
