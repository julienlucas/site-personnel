import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  Github,
  Layers,
  Linkedin,
  Mail,
  MessageCircle,
  Play,
  Send,
  Youtube,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Julien Lucas — Tous mes liens",
  description:
    "Retrouvez tout au même endroit : ma chaîne YouTube, mon LinkedIn, mes produits IA en prod et mes études de cas.",
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/julien-lucas-jl/",
    Icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@JulienLucas",
    Icon: Youtube,
  },
  { label: "GitHub", href: "https://github.com/julienlucas", Icon: Github },
  { label: "Email", href: "mailto:julienlucas84@gmail.com", Icon: Mail },
];

export default function LinksPage() {
  return (
    <section className="lk-page">
      <div className="lk-col">
        {/* ─────────────  HEADER  ───────────── */}
        <header className="lk-hero">
          <div className="lk-avatar">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/julienlucas-b.jpeg" alt="Julien Lucas" />
          </div>
          <h1 className="lk-name">Julien Lucas</h1>
          <p className="lk-bio">
            AI Engineer freelance à Avignon. Cinq ans à coder pour des
            startups, une bascule fin 2024 vers l&apos;IA. Aujourd&apos;hui je
            construis des agents IA et des automatisations — trois produits en
            prod — et je vulgarise l&apos;IA en français&nbsp;☀️
          </p>
          <nav className="lk-socials" aria-label="Réseaux sociaux">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="lk-social"
              >
                <Icon size={20} strokeWidth={1.75} />
              </a>
            ))}
          </nav>
        </header>

        {/* ─────────────  FEATURED : YOUTUBE  ───────────── */}
        <a
          href="https://www.youtube.com/@JulienLucas"
          target="_blank"
          rel="noopener noreferrer"
          className="lk-feature"
        >
          <div className="lk-feature-play">
            <Play size={26} fill="currentColor" strokeWidth={0} />
          </div>
          <div className="lk-feature-body">
            <span className="lk-eyebrow">Ma chaîne · 1 vidéo / semaine</span>
            <h2 className="lk-feature-title">Je vulgarise l&apos;IA en français</h2>
            <p className="lk-feature-sub">
              Cours que je recommande, techniques que je teste, modèles que je
              démonte. Aucun script écrit par GPT.
            </p>
          </div>
          <ArrowUpRight className="lk-feature-arrow" size={22} />
        </a>

        {/* ─────────────  LINKEDIN  ───────────── */}
        <a
          href="https://www.linkedin.com/in/julien-lucas-jl/"
          target="_blank"
          rel="noopener noreferrer"
          className="lk-card"
        >
          <span className="lk-card-icon lk-icon-linkedin">
            <Linkedin size={22} strokeWidth={1.75} />
          </span>
          <span className="lk-card-body">
            <span className="lk-eyebrow">LinkedIn · 13K+ abonnés</span>
            <span className="lk-card-title">1 à 2 posts par semaine</span>
          </span>
          <ArrowUpRight className="lk-card-arrow" size={20} />
        </a>

        {/* ─────────────  PRODUITS  ───────────── */}
        <div className="lk-section-label">Mes produits en prod</div>

        <a
          href="https://closechat.co"
          target="_blank"
          rel="noopener noreferrer"
          className="lk-card"
        >
          <span className="lk-card-icon lk-icon-a">
            <MessageCircle size={22} strokeWidth={1.75} />
          </span>
          <span className="lk-card-body">
            <span className="lk-eyebrow">closechat.co · Agent WhatsApp</span>
            <span className="lk-card-title">
              Qualifiez et closez vos leads 24/7
            </span>
          </span>
          <ArrowUpRight className="lk-card-arrow" size={20} />
        </a>

        <a
          href="https://prospable.com"
          target="_blank"
          rel="noopener noreferrer"
          className="lk-card"
        >
          <span className="lk-card-icon lk-icon-b">
            <Send size={22} strokeWidth={1.75} />
          </span>
          <span className="lk-card-body">
            <span className="lk-eyebrow">prospable.com · Cold email IA</span>
            <span className="lk-card-title">
              Un pipeline de leads qualifiés en automatique
            </span>
          </span>
          <ArrowUpRight className="lk-card-arrow" size={20} />
        </a>

        <a
          href="https://shootingpro.co"
          target="_blank"
          rel="noopener noreferrer"
          className="lk-card"
        >
          <span className="lk-card-icon lk-icon-c">
            <Camera size={22} strokeWidth={1.75} />
          </span>
          <span className="lk-card-body">
            <span className="lk-eyebrow">shootingpro.co · Portraits IA</span>
            <span className="lk-card-title">
              Vos portraits pro générés par IA
            </span>
          </span>
          <ArrowUpRight className="lk-card-arrow" size={20} />
        </a>

        {/* ─────────────  ÉTUDES DE CAS  ───────────── */}
        <div className="lk-section-label">Aller plus loin</div>

        <Link href="/use-cases/agentic-rag" className="lk-card">
          <span className="lk-card-icon lk-icon-linkedin">
            <Layers size={22} strokeWidth={1.75} />
          </span>
          <span className="lk-card-body">
            <span className="lk-eyebrow">Études de cas · RAG, Vision, Agents</span>
            <span className="lk-card-title">Mes POCs techniques détaillés</span>
          </span>
          <ArrowUpRight className="lk-card-arrow" size={20} />
        </Link>

        {/* ─────────────  CTA BANNER  ───────────── */}
        <Link href="/" className="lk-banner">
          <span className="lk-banner-eyebrow">Faisons connaissance</span>
          <span className="lk-banner-title">
            Découvrir mon parcours complet
          </span>
          <span className="lk-banner-sub">
            De la première ligne de React à l&apos;IA appliquée — l&apos;histoire
            en neuf parties.
          </span>
          <ArrowUpRight className="lk-banner-arrow" size={22} />
        </Link>

        <p className="lk-foot">julienlucas.com · Avignon, France</p>
      </div>
    </section>
  );
}
