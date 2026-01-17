"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import ContactForm from "../../components/ui/contact-form";
import { Button } from "../../components/ui/button";
import ScrollTopOnMount from "../../components/ui/scroll-top";

export default function PneumoDiag() {
  return (
    <main className="max-w-[1100px] min-h-screen mx-auto py-3 pb-17">
      <ScrollTopOnMount />
      <Card className="border">
        <CardHeader>
          <CardTitle variant="h1" className="text-center w-full max-w-3xl mx-auto mt-8">
            Diagnostiquer par IA les pneumonies et leur degrés de viralité
          </CardTitle>
          <img
            src="/pneumodiag.jpg"
            alt="PneumoDiag"
            className="w-full h-full object-cover rounded-lg mt-10"
          />
          <a href="https://pneumodiag.up.railway.app" target="_blank" className="mt-2 mx-auto">
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
            Détecter les signes de pneumonie et leur degrès de viralité malgrés
            un jeu de données comportant peu de radiographies
          </CardTitle>
          <ul className="list-disc list-inside mb-4 space-y-4">
            <li>
              <strong>
                Détecter les pneumonies sur les radiographies de patients
                <span>
                  selon leur degrès de viralité.
                </span>
              </strong>
            </li>
            <li>
              <strong>Entraîner un modèle rapidement</strong> : Réutiliser les
              connaissances pré-existantes d'un modèle de vision adapté.
            </li>
            <li>
              <strong>Avoir un modèle faible latence</strong> : Devait pouvoir
              fonctionner sur un mobile.
            </li>
            <li>
              <strong>
                Réussir un entraînement avec un jeu de données peu étoffé
              </strong>
            </li>
          </ul>
          <CardTitle variant="h3-card">Résultats et évaluation</CardTitle>
          <ul className="list-inside mb-4 space-y-4">
            <li>
              <strong>
                ⌛ <span>Entraînement en seulement 2 minutes</span> et juste
                avec un Mac Book Pro M1
              </strong>{" "}
              juste avec 1 seule passe sur le jeu de donnée!
            </li>
            <li>
              <strong>
                🧠 Méthode de <span>fine-tuning d'un modèlé léger </span>, le
                ResNet18 par Transfer Learning
              </strong>{" "}
              : tuning de la dernière couche du modèle, le classifieur
              uniquement pour un entraînement ultra rapide et efficace.
            </li>
            <li>
              <strong>
                🎯 Précision pour la classe 'Pneumonie bactérienne' :{" "}
                <span>89%</span>
              </strong>
            </li>
            <li>
              <strong>
                🎯 Précision pour la classe 'Normal' : <span>75%</span>
              </strong>
            </li>
            <li>
              <strong>
                🎯 Précision pour la classe 'Pneumonie virale' :{" "}
                <span>83%</span>
              </strong>
            </li>
            <li>
              <strong>
                ⚡ Le modèle a une <span>très faible latence</span>.
              </strong>
              <img
                src="/langsmith-pneumodiag.png"
                className="w-full h-auto rounded mt-3 border border-gray-100 rounded-sm"
              />
              <CardDescription className="italic text-center text-xs">
                Montoring dans Langsmith
              </CardDescription>
            </li>
          </ul>
          <p>Et voilà.</p>
        </CardContent>
        <ContactForm />
      </Card>
    </main>
  );
}
