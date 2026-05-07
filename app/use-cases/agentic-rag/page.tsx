import Link from "next/link";
import LinkedinOutro from "../../components/ui/linkedin-outro";

export const metadata = {
  title: "RAG multi-agentique pour docs techniques — Julien Lucas",
  description:
    "Étude de cas : RAG hybride BM25 + vectoriel avec deux agents (FactChecker + PertinenceChecker). Recall@10 passe de 37,5 % à 62,5 %.",
};

export default function AgenticRagPage() {
  return (
    <>
      <header className="uc-hero">
        <div className="uc-hero-inner">
          <Link href="/#pocs" className="uc-back">
            ← Retour aux études
          </Link>
          <div className="uc-hero-meta">
            <span>POC No. 01</span>
            <span>/</span>
            <span>RAG agentique</span>
          </div>
          <h1 className="uc-hero-title">
            RAG agentique à forte pertinence pour docs techniques.
          </h1>
          <div className="uc-hero-cta">
            <a
              href="https://docchat-agentic-rag.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir la démo →
            </a>
          </div>
          <figure className="uc-hero-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/docchat.jpg" alt="DocChat agentic RAG" />
          </figure>
        </div>
      </header>

      <section className="uc-section">
        <div className="uc-inner">
          <h2 className="uc-h2">Le challenge</h2>
          <p className="uc-h3">
            Créer un système RAG qui récupère de l'information factcheckée et
            pertinente sur des documentations techniques.
          </p>
          <ul className="uc-list">
            <li>
              <strong>Pertinence de la récupération.</strong> Remonter les
              passages exacts malgré le bruit, le vocabulaire technique et les
              tableaux.
            </li>
            <li>
              <strong>Factcheck des réponses.</strong> Éviter les hallucinations
              et ne répondre qu'avec des preuves dans le contexte.
            </li>
            <li>
              <strong>Couvrir de multiples documents et pages.</strong> Croiser
              plusieurs sources sans perdre l'information clé.
            </li>
            <li>
              <strong>Vérifier la qualité OCR avec Mistral OCR.</strong>{" "}
              Extraire du texte propre depuis des PDF longs et hétérogènes.
            </li>
            <li>
              <strong>Évaluer la pertinence.</strong> Prouver la pertinence
              avec des métriques et des comparaisons avant/après.
            </li>
          </ul>
        </div>
      </section>

      <section className="uc-section" style={{ background: "var(--p-paper-2)" }}>
        <div className="uc-inner">
          <h2 className="uc-h2">Résultats &amp; évaluation</h2>
          <ul className="uc-list">
            <li>
              <strong>
                Récupération hybride + 2 agents spécialisés (FactChecker &amp;
                PertinenceChecker).
              </strong>{" "}
              La combinaison BM25 + recherche vectorielle améliore la
              couverture et la pertinence sur des docs techniques.
            </li>
            <li>
              <em>Recall@10</em> : <strong>37,5 % → 62,5 %</strong>. 5
              questions sur 8 ont au moins un passage pertinent dans le top 10.
            </li>
            <li>
              <em>MRR@10</em> : <strong>27,6 % → 47,9 %</strong>. En moyenne le
              1ᵉʳ bon passage arrive vers la 2ᵉ place.
            </li>
            <li>
              <em>nDCG@10</em> : <strong>35,9 % → 51,6 %</strong>. Classement
              global de pertinence correct, mais pas encore excellent.
            </li>
            <li>
              <em>0 % d'hallucination</em> grâce au reranker — à valider sur
              une plus large quantité de données.
            </li>
            <li>
              <strong>81 % des réponses jugées pertinentes par RAGAS</strong>,
              testé sur 2 documents.
            </li>
          </ul>
          <figure className="uc-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/langsmith-docchat.png" alt="Monitoring LangSmith" />
            <figcaption>Monitoring dans LangSmith</figcaption>
          </figure>
          <p className="uc-conclusion">
            Bon POC. À améliorer pour passage à l'échelle.
          </p>
        </div>
      </section>

      <LinkedinOutro
        title={
          <>
            Tu as un projet RAG ?{" "}
            <span className="profile-em">On en parle sur LinkedIn.</span>
          </>
        }
      />
    </>
  );
}
