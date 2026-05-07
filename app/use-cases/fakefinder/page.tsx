import Link from "next/link";
import LinkedinOutro from "../../components/ui/linkedin-outro";

export const metadata = {
  title: "FakeFinder : détecter les images IA — Julien Lucas",
  description:
    "Étude de cas : détection d'images Nano Banana Pro, Midjourney, Stable Diffusion, DALL-E. Fine-tuning de MobileNetV3 en 3 minutes sur Mac M1.",
};

export default function FakeFinderPage() {
  return (
    <>
      <header className="uc-hero">
        <div className="uc-hero-inner">
          <Link href="/#pocs" className="uc-back">
            ← Retour aux études
          </Link>
          <div className="uc-hero-meta">
            <span>POC No. 04</span>
            <span>/</span>
            <span>Détection deepfake</span>
          </div>
          <h1 className="uc-hero-title">
            Détecter les fakes Nano Banana Pro et autres modèles de diffusion.
          </h1>
          <div className="uc-hero-cta">
            <a
              href="https://fakefinder-nanobananapro.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir la démo →
            </a>
          </div>
          <figure className="uc-hero-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fakefinder.jpg" alt="FakeFinder" />
          </figure>
        </div>
      </header>

      <section className="uc-section">
        <div className="uc-inner">
          <h2 className="uc-h2">Le challenge</h2>
          <p className="uc-h3">
            Détecter avec précision les images générées par IA, avec un
            entraînement rapide, peu coûteux et un modèle léger.
          </p>
          <ul className="uc-list">
            <li>
              <strong>Détecter les images de tous les modèles de diffusion.</strong>{" "}
              Le modèle doit fonctionner sur Nano Banana Pro mais aussi
              Midjourney, Stable Diffusion, DALL-E.
            </li>
            <li>
              <strong>Entraîner rapidement et à moindre coût.</strong>
              Réutiliser les connaissances pré-existantes d'un modèle de
              vision.
            </li>
            <li>
              <strong>Constituer un jeu de données Nano Banana Pro</strong>{" "}
              par scrapping malgré peu d'images disponibles, puis combiner avec
              des datasets Midjourney / DALL-E / SD pour une détection
              généralisée.
            </li>
            <li>
              <strong>Modèle à faible latence.</strong> Doit pouvoir détecter
              en quelques secondes sur mobile.
            </li>
          </ul>
        </div>
      </section>

      <section className="uc-section" style={{ background: "var(--p-paper-2)" }}>
        <div className="uc-inner">
          <h2 className="uc-h2">Résultats &amp; évaluation</h2>
          <ul className="uc-list">
            <li>
              <em>Précision élevée rapidement atteinte</em> :{" "}
              <strong>8,5 / 10 images détectées correctement</strong> sur le
              dataset de test de 2 000 images Midjourney / DALL-E / SD / Nano
              Banana Pro.
            </li>
            <li>
              <em>Entraînement en seulement 3 minutes</em> sur Mac Pro M1, une
              seule passe sur le jeu de données.
            </li>
            <li>
              <strong>Fine-tuning d'un modèle très léger</strong>,{" "}
              <em>MobileNetV3 Large</em> par Transfer Learning. Tuning de la
              dernière couche (classifieur uniquement) pour un entraînement
              ultra rapide et efficace.
            </li>
            <li>
              <strong>Zéro coût d'API à l'inférence</strong>, c'est un modèle
              personnel.
            </li>
            <li>
              Le modèle a une <em>faible latence</em>.
            </li>
          </ul>
          <figure className="uc-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/langsmith-fakefinder.png" alt="Monitoring LangSmith" />
            <figcaption>Monitoring dans LangSmith</figcaption>
          </figure>
          <p className="uc-conclusion">
            Bons résultats pour un POC, sans optimisation et avec un modèle
            très léger.
          </p>
        </div>
      </section>

      <LinkedinOutro
        title={
          <>
            Un projet de détection IA ?{" "}
            <span className="profile-em">On en parle sur LinkedIn.</span>
          </>
        }
      />
    </>
  );
}
