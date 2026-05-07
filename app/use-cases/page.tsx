import Link from "next/link";

export const metadata = {
  title: "Études de cas IA — Julien Lucas",
  description:
    "Quatre POCs IA : RAG agentique, MM-RAG fashion, diagnostic de pneumonies, détection de deepfakes.",
};

export default function UseCasesIndex() {
  return (
    <section className="profile-movement profile-tone-soft profile-no-dropcap">
      <div className="profile-inner-wide">
        <div className="profile-meta">
          <span>Études de cas</span>
          <span>/</span>
          <span>Quatre POCs</span>
        </div>
        <h2 className="profile-h2">
          Quatre POCs.{" "}
          <span className="profile-em">Pour comprendre, pas pour vendre.</span>
        </h2>
        <div className="profile-prose" style={{ maxWidth: 640 }}>
          <p>
            À côté des produits en prod, je construis des prototypes pour
            tester une technique IA précise. Aucun n'a vocation à devenir un
            produit. Tous m'ont appris quelque chose.
          </p>
        </div>
        <div className="poc-grid">
          <Link href="/use-cases/agentic-rag" className="poc-card">
            <div className="poc-card-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/docchat.jpg" alt="Agentic RAG" />
            </div>
            <div className="poc-card-body">
              <span className="poc-card-num">POC No. 01 · RAG</span>
              <h3 className="poc-card-title">RAG multi-agentique pour docs techniques</h3>
              <p className="poc-card-desc">
                Récupération hybride BM25 + vectorielle, deux agents
                spécialisés (FactChecker + PertinenceChecker). Recall@10 passe
                de 37,5 % à 62,5 %.
              </p>
              <span className="poc-card-cta">Voir l'étude →</span>
            </div>
          </Link>
          <Link href="/use-cases/mm-rag" className="poc-card">
            <div className="poc-card-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/styleanalyer.jpg" alt="MM-RAG Fashion" />
            </div>
            <div className="poc-card-body">
              <span className="poc-card-num">POC No. 02 · Multimodal</span>
              <h3 className="poc-card-title">MM-RAG : recommandation de tenues par image</h3>
              <p className="poc-card-desc">
                ConvNeXt-Tiny + Pixtral Large. 100 % de précision sur le
                dataset, sans entraînement.
              </p>
              <span className="poc-card-cta">Voir l'étude →</span>
            </div>
          </Link>
          <Link href="/use-cases/pneumodiag" className="poc-card">
            <div className="poc-card-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/pneumodiag.jpg" alt="PneumoDiag" />
            </div>
            <div className="poc-card-body">
              <span className="poc-card-num">POC No. 03 · Computer Vision</span>
              <h3 className="poc-card-title">Diagnostic de pneumonies depuis une radio</h3>
              <p className="poc-card-desc">
                Transfer learning sur Mac M1, entraîné en 2 minutes. 89 % de
                précision sur la classe pneumonie bactérienne.
              </p>
              <span className="poc-card-cta">Voir l'étude →</span>
            </div>
          </Link>
          <Link href="/use-cases/fakefinder" className="poc-card">
            <div className="poc-card-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/fakefinder.jpg" alt="FakeFinder" />
            </div>
            <div className="poc-card-body">
              <span className="poc-card-num">POC No. 04 · Deepfake</span>
              <h3 className="poc-card-title">Détecter les images IA (Nano Banana, Flux, Midjourney)</h3>
              <p className="poc-card-desc">
                MobileNetV3 fine-tuné en 3 minutes. 8,5 / 10 sur 2 000 images.
                Zéro coût d'API à l'inférence.
              </p>
              <span className="poc-card-cta">Voir l'étude →</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
