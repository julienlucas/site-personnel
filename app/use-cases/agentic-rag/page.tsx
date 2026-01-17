"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import ContactForm from "../../components/ui/contact-form";
import { Button } from "../../components/ui/button";
import ScrollTopOnMount from "../../components/ui/scroll-top";

export default function AgenticRag() {
  return (
    <main className="max-w-[1100px] min-h-screen mx-auto py-3 pb-17">
      <ScrollTopOnMount />
      <Card className="border">
        <CardHeader>
          <CardTitle variant="h1" className="text-center w-full max-w-3xl mx-auto mt-8">RAG agentique à forte pertinence pour docs techniques</CardTitle>
          <img
            src="/docchat.jpg"
            alt="Agentic RAG"
            className="w-full h-full object-cover rounded-lg mt-10"
          />
          <a href="https://docchat-agentic-rag.up.railway.app" target="_blank" className="mt-2 mx-auto">
            <Button variant="default" size="xl">
              Voir démo du projet
            </Button>
          </a>
        </CardHeader>
        <CardContent className="p-0 mt-6 border-none max-w-2xl mx-auto">
          <CardTitle
            variant="h2"
            className="bg-gradient-to-br from-black via-black to-black bg-clip-text text-transparent"
          >
            Étude de cas
          </CardTitle>
          <CardTitle variant="h3-card" className="mb-0 mt-4">
            Le challenge
          </CardTitle>
          <CardTitle variant="h3" className="font-medium">
            Créer un système RAG récupérant de l'info factcheckée et pertinente dans le cas de docs techniques.
          </CardTitle>
          <ul className="list-disc list-inside mb-4 space-y-4">
            <li>
              <strong>Pertinence de la récupération</strong> : Remonter les
              passages exacts malgré le bruit, le vocabulaire technique et les
              tableaux.
            </li>
            <li>
              <strong>Avoir aussi un factcheck des réponses</strong> : Éviter les
              hallucinations et ne répondre qu'avec des preuves dans le
              contexte.
            </li>
            <li>
              <strong>
                Pouvoir couvrir de multiples documents et pages
              </strong>{" "}
              : Croiser plusieurs sources sans perdre l'information clé.
            </li>
            <li>
              <strong>Vérifier la qualité OCR avec la solution Mistral OCR</strong> :
              Extraire du texte propre depuis des PDF longs et hétérogènes.
            </li>
            <li>
              <strong>Évaluer la pertinence</strong> : Prouver la
              pertinence avec des métriques et des comparaisons avant/après.
            </li>
          </ul>
          <CardTitle variant="h3-card">Résultats et évaluation</CardTitle>
          <ul className="list-inside mb-4 space-y-4">
            <ul className="list-inside mb-4 space-y-4">
              <li>
                <strong>
                  Récupération hybride + ajout de 2 agents spécialisés
                  (FactChecker et PertinenceChecker)
                </strong>{" "}
                : La combinaison BM25 + recherche vectorielle permettant{" "}
                <span>
                  la bonne couverture et pertinence des réponses sur des
                  documentations techniques.
                </span>
              </li>
              <li>
                <strong>🎯 Recall@10 (top 10 résultats) : 37.5% → 62.5%</strong>{" "}
                —{" "}
                <span>
                  donc 5 questions sur 8 ont au moins un passage pertinent dans
                  le top 10.
                </span>
              </li>
              <li>
                <strong>🎯 MRR@10 (top 10 résultats) : 27.6% → 47.92%</strong> —{" "}
                <span>
                  donc en moyenne le 1er bon passage arrive vers la 2ᵉ place.
                </span>
              </li>
              <li>
                <strong>🎯 nDCG@10 (top 10 résultats) : 35.96% → 51.64%</strong>{" "}
                —{" "}
                <span>
                  donc classement global de pertience correct, mais pas encore
                  excellent.
                </span>
              </li>
              <li>
                <strong>
                  <span>
                    🌀 Un 0% d'hallucination grâce au reranker développé
                  </span>
                </strong>{" "}
                mais peu fiable, il faudrait des tests sur une plus vaste
                quantité de données.
              </li>
              <li>
                <strong>
                  💡 Au final{" "}
                  <span>
                    81% des résponses jugées pertinentes d'après RAGAS,
                  </span>
                </strong>{" "}
                mais testé sur seulement 2 documents.
              </li>
            </ul>
          </ul>
          <img
            src="/langsmith-docchat.png"
            className="w-full h-auto rounded mt-3 border border-gray-100 rounded-sm"
          />
          <CardDescription className="italic text-center text-xs">
            Montoring dans Langsmith
          </CardDescription>
          <br />
          <p>
            En somme un bon POC.
            <br />
            Mais à améliorer pour passage à l'échelle.
          </p>
        </CardContent>
        <ContactForm />
      </Card>
    </main>
  );
}
