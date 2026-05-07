import Link from "next/link";
import LinkedinOutro from "../../components/ui/linkedin-outro";

export const metadata = {
  title: "PneumoDiag : diagnostic de pneumonies par IA — Julien Lucas",
  description:
    "Étude de cas : transfer learning sur Mac M1, entraînement en 2 minutes, 89 % de précision sur la classe pneumonie bactérienne.",
};

export default function PneumoDiagPage() {
  return (
    <>
      <header className="uc-hero">
        <div className="uc-hero-inner">
          <Link href="/#pocs" className="uc-back">
            ← Retour aux études
          </Link>
          <div className="uc-hero-meta">
            <span>POC No. 03</span>
            <span>/</span>
            <span>Computer vision</span>
          </div>
          <h1 className="uc-hero-title">
            Diagnostiquer par IA les pneumonies et leur degré de viralité.
          </h1>
          <div className="uc-hero-cta">
            <a
              href="https://pneumodiag.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir la démo →
            </a>
          </div>
          <figure className="uc-hero-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/pneumodiag.jpg" alt="PneumoDiag" />
          </figure>
        </div>
      </header>

      <section className="uc-section">
        <div className="uc-inner">
          <h2 className="uc-h2">Le challenge</h2>
          <p className="uc-h3">
            Détecter les signes de pneumonie et leur degré de viralité, malgré
            un jeu de données comportant peu de radiographies.
          </p>
          <ul className="uc-list">
            <li>
              <strong>Détecter les pneumonies des patients</strong> selon leur
              degré de viralité sur les radiographies.
            </li>
            <li>
              <strong>Entraîner rapidement et à moindre coût.</strong>
              Réutiliser les connaissances pré-existantes d'un modèle de vision
              et l'adapter à la détection.
            </li>
            <li>
              <strong>Modèle à faible latence.</strong> Doit pouvoir
              fonctionner sur un mobile.
            </li>
            <li>
              <strong>
                Modèle suffisamment précis avec un jeu de données peu étoffé.
              </strong>
            </li>
          </ul>
        </div>
      </section>

      <section className="uc-section" style={{ background: "var(--p-paper-2)" }}>
        <div className="uc-inner">
          <h2 className="uc-h2">Résultats &amp; évaluation</h2>
          <ul className="uc-list">
            <li>
              <em>Entraînement en seulement 2 minutes</em> sur un MacBook Pro
              M1, avec une seule passe sur le jeu de données.
            </li>
            <li>
              <strong>Méthode de fine-tuning rapide par Transfer Learning.</strong>{" "}
              Tuning de la dernière couche (le classifieur) — efficace sur les
              petits jeux de données et apportant un maximum de résultats
              rapidement.
            </li>
            <li>
              <em>Pneumonie bactérienne</em> : <strong>89 % de précision</strong>,
              sans optimisation poussée du modèle.
            </li>
            <li>
              <em>Normal</em> : <strong>75 % de précision</strong>.
            </li>
            <li>
              <em>Pneumonie virale</em> : <strong>83 % de précision</strong>.
            </li>
          </ul>
          <figure className="uc-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/langsmith-pneumodiag.png" alt="Monitoring LangSmith" />
            <figcaption>Monitoring dans LangSmith</figcaption>
          </figure>
          <p className="uc-conclusion">
            Ce POC démontre la puissance de la méthode mais mériterait un modèle
            plus puissant pour viser une précision plus élevée.
          </p>
        </div>
      </section>

      <LinkedinOutro
        title={
          <>
            Un projet de computer vision ?{" "}
            <span className="profile-em">On en parle sur LinkedIn.</span>
          </>
        }
      />
    </>
  );
}
