import Link from "next/link";
import LinkedinOutro from "../../components/ui/linkedin-outro";

export const metadata = {
  title: "MM-RAG fashion : recommandation de tenues par image — Julien Lucas",
  description:
    "Étude de cas : recherche multimodale ConvNeXt-Tiny + analyse stylistique Pixtral Large. 100 % de précision sans entraînement.",
};

export default function MmRagPage() {
  return (
    <>
      <header className="uc-hero">
        <div className="uc-hero-inner">
          <Link href="/#pocs" className="uc-back">
            ← Retour aux études
          </Link>
          <div className="uc-hero-meta">
            <span>POC No. 02</span>
            <span>/</span>
            <span>MM-RAG multimodal</span>
          </div>
          <h1 className="uc-hero-title">
            MM-RAG : recommandation de tenues par image, avec prix et liens.
          </h1>
          <div className="uc-hero-cta">
            <a
              href="https://mm-rag-styleanalyzer.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir la démo →
            </a>
          </div>
          <figure className="uc-hero-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/styleanalyer.jpg" alt="StyleAnalyzer MM-RAG" />
          </figure>
        </div>
      </header>

      <section className="uc-section">
        <div className="uc-inner">
          <h2 className="uc-h2">Le challenge</h2>
          <p className="uc-h3">
            Construire un système d'analyse stylistique + un MM-RAG qui
            recommande des tenues similaires à une image uploadée, avec prix et
            liens marchands.
          </p>
          <ul className="uc-list">
            <li>
              <strong>Mettre à jour facilement le jeu de données</strong>, sans
              relancer un entraînement de modèle.
            </li>
            <li>
              <strong>Modèle de vision dédié au RAG</strong>, précis pour
              recommander des tenues.
            </li>
            <li>
              <strong>Second modèle vision dédié à l'analyse stylistique</strong>,
              type Pixtral de Mistral.
            </li>
          </ul>
        </div>
      </section>

      <section className="uc-section" style={{ background: "var(--p-paper-2)" }}>
        <div className="uc-inner">
          <h2 className="uc-h2">Résultats &amp; évaluation</h2>
          <ul className="uc-list">
            <li>
              <strong>Pas besoin de reranker — 100 % de précision</strong> dans
              la reconnaissance des vêtements (dataset des tenues de Taylor
              Swift) grâce à <em>ConvNeXt-Tiny</em> (2022). Les modèles plus
              anciens en étaient incapables.
            </li>
            <li>
              <strong>Analyse stylistique poussée</strong>, reconnaissance des
              matières et des formes des tenues grâce à{" "}
              <em>Pixtral Large</em> de Mistral.
            </li>
            <li>
              <strong>Mise à jour facile des données</strong>, car pas
              d'entraînement requis. Il suffit d'ajouter une tenue dans le jeu
              de données.
            </li>
            <li>
              <strong>Latence correcte</strong> (10–15 secondes) pour la
              recherche MM-RAG combinée à l'analyse stylistique Pixtral.
            </li>
          </ul>
          <figure className="uc-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/langsmith-styleanalyzer.png" alt="Monitoring LangSmith" />
            <figcaption>Monitoring dans LangSmith</figcaption>
          </figure>
        </div>
      </section>

      <LinkedinOutro
        title={
          <>
            Un projet multimodal ?{" "}
            <span className="profile-em">On en parle sur LinkedIn.</span>
          </>
        }
      />
    </>
  );
}
