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
          <CardTitle variant="h1" className="text-center w-full max-w-3xl mx-auto mt-8">
            RAG multimodal pour la recommandation de vêtements
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
            Créer un système de recommandation MM-RAG de tenues similaires en
            style à 100% à celle uploadée (sans avoit d'entraînements de modèles
            donc)
          </CardTitle>
          <ul className="list-disc list-inside mb-4 space-y-4">
            <li>
              <strong>
                <span>Pouvoir mettre à jour facilement le jeu de données</span>
              </strong>
              , c'est l'avantage d'éviter l'entraînement de modèle.
            </li>
            <li>
              <strong>
                  Avoir 2 choses : <span>un modèle vision doué pour l'analyse
                  stylisitique + un MM-RAG qui recommande des tenues
                </span>
              </strong>
              . Pour l'analyse stylistique il faut donc un modèle doué en vision, exemple Pixtral de Mistral AI.
            </li>
            <li>
              <strong>
                Avoir un modèle qui détecte avec 100% de précision les vètements
                pour faire des recommandations
              </strong>
              <span> pour ça il faut un modèle d'embeddings vision très performant.</span>
            </li>
          </ul>
          <CardTitle variant="h3-card">Résultats et évaluation</CardTitle>
          <ul className="list-inside mb-4 space-y-4">
            <li>
              <strong>
                <span>
                  ⚡ Pas besoin de reranker, 100% de précision atteinte dans la
                  reconnaissance des vètements
                </span>{" "}
                du jeu de données (les tenues de Taylor Swift)
              </strong>{" "}
              grâce au modèle ConvNeXt-Tiny (2022). Les modèles plus anciens en
              étaients incapables.
            </li>
            <li>
              <strong>
                <span>
                  Anzalyse stylistique poussé et reconnaissances des matières
                  fine
                </span>
                , des formes des tenues
              </strong>{" "}
              grâce au modèle Pixtral Large de Mistral AI.
            </li>
            <li>
              <strong>
                🔄 Mise à jour facile des données{" "}
                <span>car pas d'entraînement requis</span> ce qui est un
                avatange non négligeable.
              </strong>{" "}
              Il suffit d'ajouter des tenues dans le jeu de données.
            </li>
            <li>
              <strong>
                📊 Point faible, la latence est un peu longue sans GPU Nvidia,{" "}
                <span>souvent plus de 30 secondes pour avoir un résultat</span>
              </strong>
              . D'où la nécéssité d'avoir un GPU NVidia minimal sur
              l'hébergement de l'application.
              <img
                src="/langsmith-styleanalyzer.png"
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
