"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import ContactForm from "../../components/ui/contact-form";
import { Button } from "../../components/ui/button";
import ScrollTopOnMount from "../../components/ui/scroll-top";

export default function FakeFinder() {
  return (
    <main className="max-w-[1100px] min-h-screen mx-auto py-3 pb-17">
      <ScrollTopOnMount />
      <Card className="border">
        <CardHeader>
          <CardTitle variant="h1" className="text-center w-full max-w-3xl mx-auto mt-8">
            Détecter les fakes Nano Banana Pro et images modèles de diffusion
          </CardTitle>
          <img
            src="/fakefinder.jpg"
            alt="FakeFinder"
            className="w-full h-full object-cover rounded-lg mt-10"
          />
          <a href="https://fakefinder-nanobananapro.up.railway.app" target="_blank" className="mt-2 mx-auto">
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
          <CardTitle variant="h3-card" className="mb-0 mt-4">Le challenge</CardTitle>
          <CardTitle variant="h3" className="font-medium">
            Détecter les fakes avec précision avec un entraînement rapide, peu couteux et
            un modèle léger
          </CardTitle>
          <ul className="list-disc list-inside mb-4 space-y-4">
            <li>
              <strong>
                Pouvoir détecter les images de TOUS les modèles de diffusion.
              </strong> Le modèle ddoit fonctionner sur NanoBanana Pro mais aussi
              Midjourney, Stable Diffusion, DALL-E.
            </li>
            <li>
              <strong>Entraîner un modèle rapidement et à moindre coût.</strong> Pour ça réutiliser les
              connaissances pré-existantes d'un modèle de vision.
            </li>
            <li>
              <strong>Réussir à constiuer un jeu de données Nano Banana Pro par scrapping malgrés peu d'images disponibles.</strong> Puis combiner des datasets
              scrappés Midjourney/DALL-E/SD et Nano Banana Pro pour une
              détection généralisée.
            </li>
            <li>
              <strong>Avoir un modèle faible latence.</strong> Doit pouvoir
              détecter en quelques secondes sur mobile.
            </li>
          </ul>
          <CardTitle variant="h3-card">Résultats et évaluation</CardTitle>
          <ul className="list-inside mb-4 space-y-4">
            <li>
              <strong>🎯 Précision élevée rapidement atteinte</strong> : 8,5/10
              image détectées correctement sur le dataset de test de 2000 images
              Midjourney/DALL-E/SD/Nano Banana Pro
            </li>
            <li>
              <strong>
                ⌛ <span>Entraînement en seulement 3 minutes</span> juste avec
                un Mac Pro M1
              </strong>
              , 1 seule passe sur le jeu de donnée!
            </li>
            <li>
              <strong>
                🧠 Fine-tuning <span>d'un modèle très léger</span>, le
                MobileNetV3 Large par Transfer Learning
              </strong>{" "}
              : tuning de la dernière couche du modèle, le classifieur
              uniquement pour un entraînement ultra rapide et efficace.
            </li>
            <li>
              <strong>
                💰 Zéro coûts d'API lors de l'inférence étant donné que c'est un
                modèle personnel.
              </strong>
            </li>
            <li>
              <strong>
                ⚡ Le modèle a une <span>faible latence</span>.
              </strong>
              <img
                src="/langsmith-fakefinder.png"
                alt="LangSmith"
                className="w-full h-auto rounded mt-3 border border-gray-100 rounded-sm"
              />
              <CardDescription className="italic text-center text-xs">
                Montoring dans LangSmith
              </CardDescription>
            </li>
          </ul>
          <p>Et voilà. De bons résultats pour un POC, sans optimisations et avec un modèle très léger pourtant.</p>
          <ContactForm />
        </CardContent>
      </Card>
    </main>
  );
}
