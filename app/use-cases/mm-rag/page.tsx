"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import ContactForm from "../../components/ui/contact-form";
import { Button } from "../../components/ui/button";
import ScrollTopOnMount from "../../components/ui/scroll-top";

export default function MmRag() {
  return (
    <main className="max-w-[1100px] min-h-screen mx-auto py-3 pb-17">
      <ScrollTopOnMount />
      <Card className="border">
        <CardHeader>
          <CardTitle variant="h1" className="text-center w-full max-w-5xl mx-auto mt-8">
            MM-RAG de recommandation de vêtements avec prix et liens et analyse stylistique
          </CardTitle>
          <img
            src="/styleanalyer.jpg"
            alt="MM-RAG Fashion"
            className="w-full h-full object-cover rounded-lg mt-10 border border-zinc-200"
          />
          <a href="https://mm-rag-styleanalyzer.up.railway.app" target="_blank" className="mt-2 mx-auto">
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
            Avoir un système IA d'analyse stylistique + MM-RAG recommandation de tenues au style
            similaires à l'image uploadée, avec prix et liens
          </CardTitle>
          <ul className="list-disc list-inside mb-4 space-y-4">
            <li>
              <strong>
                Pouvoir mettre à jour facilement le jeu de données
              </strong>
              , et ainsi éviter de lancer des entraînements continuels d'un modèle.
            </li>
            <li>
              <strong>
                Avoir un modèle de vision spécifique pour le RAG</strong>, précis pour recommander des tenues
            </li>
            <li>
              <strong>Avoir un 2ème modèle vision spécifique à l'analyse stylistique</strong>
              , suffisament capable, exemple les modèles Pixtral de Mistral AI.
            </li>
          </ul>
          <CardTitle variant="h3-card">Résultats et évaluation</CardTitle>
          <ul className="list-inside mb-4 space-y-4">
            <li>
              <strong>
                ⚡ Pas besoin de reranker <span>100% de précision atteinte dans la
                reconnaissance des vètements</span>
              </strong>
                {" "} du jeu de données (les tenues de Taylor Swift) grâce au modèle ConvNeXt-Tiny (2022). Les modèles plus anciens en étaients incapables.
            </li>
            <li>
              <strong>
                  Analyse stylistique poussé et <span>reconnaissances des matières</span>
                , des formes des tenues
              </strong>{" "}
              grâce au modèle Pixtral Large de Mistral AI.
            </li>
            <li>
              <strong>
                🔄 Mise à jour facile des données{" "}
                <span>car pas d'entraînement requis</span></strong> ce qui est un
                avatange non négligeable.
              Il suffit d'ajouter des tenues dans le jeu de données.
            </li>
            <li>
              <strong>
                📊 <span>Latence correct d'environ 10-15 secondes</span>.</strong> Pour la recherche MM-RAG + l'analyse stylistique de Pixtral
              <img
                src="/static/langsmith.png"
                alt="LangSmith"
                className="w-full h-auto rounded mt-3 border border-gray-100 rounded-sm"
              />
              <CardDescription className="italic text-center text-xs">
                Montoring dans LangSmith
              </CardDescription>
            </li>
          </ul>
        </CardContent>
        <ContactForm />
      </Card>
    </main>
  );
}
