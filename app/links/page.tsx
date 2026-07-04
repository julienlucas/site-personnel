import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Github,
  Linkedin,
  Mail,
  Play,
  Send,
  Youtube,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Julien Lucas — Tous mes liens",
  description:
    "Retrouvez tout au même endroit : ma chaîne YouTube, mon LinkedIn et mes produits IA en prod.",
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
            <img src="/julienlucas.jpeg" alt="Julien Lucas" />
          </div>
          <h1 className="lk-name">Julien Lucas</h1>
          <p className="lk-bio">
            Désormais AI Engineer. J'ai passé 5 ans en tant que développeur
            "classique" dans des startups et équipes tech après déjà une 1ère
            reconversion. C'est la 2ème donc (ou peut-être la 3ème finalement,
            longue histoire...) Aujourd'hui je construis des systèmes IA et je
            veux aider les entreprenants à développer leur
            boîte et se libérer avec l'IA depuis le sud de la France ☀️
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

        {/* <h2 className="text-center text-2xl font-bold">
          Des systèmes IA pour les entreprenants pour développer sa boîte
        </h2> */}

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
            <span className="lk-eyebrow">Ma chaîne · 1 vidéo / mois</span>
            <h2 className="lk-feature-title">Je vulgarise l'IA en français</h2>
            <p className="lk-feature-sub">
              Mes formats longs. Du savoir distillé sur l'IA, ce que j'apprends,
              mes découvertes, les cours que je recommande.
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
        <div className="lk-section-label">
          Mes systèmes IA pour développer votre boîte
        </div>

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
              Des RDV en autopilot avec vos clients ideaux détectés sur signaux
              d'intentions Linkedin
            </span>
          </span>
          <ArrowUpRight className="lk-card-arrow" size={20} />
        </a>

        <a
          href="https://prospable.com/blog/prospection-email-automatisee-configuration-boites-emails"
          target="_blank"
          rel="noopener noreferrer"
          className="lk-card"
        >
          <span className="lk-card-icon lk-icon-a">
            <BookOpen size={22} strokeWidth={1.75} />
          </span>
          <span className="lk-card-body">
            <span className="lk-eyebrow">Guide · Cold email</span>
            <span className="lk-card-title">
              Comment se créer le fameux système de boîtes pour envoyer 100 à
              300 emails/jour pour ~100€/mois
            </span>
          </span>
          <ArrowUpRight className="lk-card-arrow" size={20} />
        </a>

        {/* ─────────────  CTA BANNER  ───────────── */}
        <Link href="/" className="lk-banner">
          <span className="lk-banner-eyebrow">Faisons connaissance</span>
          <span className="lk-banner-title !text-white">
            Découvrir mon parcours complet
          </span>
          <span className="lk-banner-sub">
            De la première ligne de React à l&apos;IA appliquée —
            l&apos;histoire en neuf parties.
          </span>
          <ArrowUpRight className="lk-banner-arrow" size={22} />
        </Link>

        <p className="lk-foot">julienlucas.com · Avignon, France</p>
      </div>
    </section>
  );
}
