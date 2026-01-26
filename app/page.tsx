"use client";
import Hero from "./components/ui/hero";
import SocialStats from "./components/ui/social-stats";
import { Button } from "./components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./components/ui/card";
import Certifications from "./components/ui/certifications";
import ContactForm from "./components/ui/contact-form";

export default function Home() {

  return (
    <main className="max-w-[1100px] min-h-screen mt-3 mb-16 mx-auto pb-0 mx-auto border border-zinc-200 rounded-lg">
      <Hero />
      <SocialStats />
      <Certifications />
      <Card className="relative md:px-8 px-2 border rounded-none pb-8 border border-zinc-200 border-l-0 border-r-0 border-b-0">
        <CardHeader>
          <CardTitle variant="h3-card">Centres d'intérêt</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 grid md:grid-cols-3 grid-cols-1 gap-3 w-full">
          <CardHeader className="border border-zinc-200 rounded-lg p-6 h-full flex flex-col">
            <div className="text-4xl">🤖</div>
            <CardTitle variant="h3-b" className="pt-1">
              Intelligence Artificielle appliquée
            </CardTitle>
            <CardDescription>
              Développement de modèles, d'agents, de RAG avancés,
              d'automatisations, et solutions IA.
            </CardDescription>
          </CardHeader>
          <CardHeader className="border border-zinc-200 rounded-lg p-6 h-full flex flex-col">
            <div className="text-4xl">🧠</div>
            <CardTitle variant="h3-b" className="pt-1">
              Apprentissage profond en computer vision et NLP
            </CardTitle>
            <CardDescription>
              Création et finetuning de modèles en NLP et Computer Vision.
            </CardDescription>
          </CardHeader>
          <CardHeader className="border border-zinc-200 rounded-lg p-6 h-full flex flex-col">
            <div className="text-4xl">⚙️</div>
            <CardTitle variant="h3-b" className="pt-1">
              Développement "classique"
            </CardTitle>
            <CardDescription>
              Architecture logicielle, développement fullstack.
            </CardDescription>
          </CardHeader>
        </CardContent>
      </Card>

      <Card className="relative md:px-8 px-2 border rounded-none pb-8 border border-zinc-200 border-l-0 border-r-0 border-b-0">
        <CardHeader>
          <CardTitle variant="h3-card">Études de cas</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 grid-cols-1 gap-4 px-6 pb-6 rounded-lg overflow-hidden">
          <Card className="flex flex-col justify-between border border-zinc-200 rounded-lg hover:bg-zinc-50 pt-0 pb-6">
            <img
              src="/docchat.jpg"
              alt="AI Engineer freelance, développeur agents IA, développeur automatisations IA, Agent IA entreprise, Consultant IA, Consultant RAG"
              className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
            />
            <CardTitle variant="h3-b" className="text-center px-6 pt-4">
              RAG multi-agentique à forte pertinence et faible taux
              halucinations
            </CardTitle>
            <Link href="/use-cases/agentic-rag" className="block mx-auto">
              <Button variant="default" size="sm" className="mx-auto">
                Voir le projet
              </Button>
            </Link>
          </Card>
          <Card className="flex flex-col justify-between border border-zinc-200 rounded-lg hover:bg-zinc-50 pt-0 pb-6">
            <img
              src="/styleanalyer.jpg"
              alt="AI Engineer freelance, développeur agents IA, développeur automatisations IA, Agent IA entreprise, Consultant IA, Consultant RAG"
              className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
            />
            <CardTitle
              variant="h3-b"
              className="text-center px-6 pt-4 max-w-md mx-auto"
            >
              MM-RAG recommandation de tenues par similarité à image uploadée
            </CardTitle>
            <Link href="/use-cases/mm-rag" className="block mx-auto">
              <Button variant="default" size="sm" className="mx-auto">
                Voir le projet
              </Button>
            </Link>
          </Card>
          <Card className="flex flex-col justify-between border border-zinc-200 rounded-lg hover:bg-zinc-50 pt-0 pb-6">
            <img
              src="/pneumodiag.jpg"
              alt="AI Engineer freelance, développeur agents IA, développeur automatisations IA, Agent IA entreprise, Consultant IA, Consultant RAG"
              className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
            />
            <CardTitle
              variant="h3-b"
              className="text-center px-6 pt-4 max-w-sm mx-auto"
            >
              Diagnostiquer les pneumonies et leur degrés de viralité
            </CardTitle>
            <Link href="/use-cases/pneumodiag" className="block mx-auto">
              <Button variant="default" size="sm" className="mx-auto">
                Voir le projet
              </Button>
            </Link>
          </Card>
          <Card className="flex flex-col justify-between border border-zinc-200 rounded-lg hover:bg-zinc-50 pt-0 pb-6">
            <img
              src="/fakefinder.jpg"
              alt="AI Engineer freelance, développeur agents IA, développeur automatisations IA, Agent IA entreprise, Consultant IA, Consultant RAG"
              className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
            />
            <CardTitle
              variant="h3-b"
              className="text-center px-6 pt-4 max-w-md mx-auto"
            >
              Détecter les images fakes IA
            </CardTitle>
            <Link href="/use-cases/fakefinder" className="block mx-auto">
              <Button variant="default" size="sm" className="mx-auto">
                Voir le projet
              </Button>
            </Link>
          </Card>
        </CardContent>
      </Card>
      <Card
        id="a-propos"
        className="relative max-w-2xl w-full mx-auto md:px-8 px-2 shadow-none border-none rounded-none pb-8 border-zinc-200 border-l-0 border-r-0 border-b-0"
      >
        <CardHeader>
          <CardTitle variant="h3-card">Expériences professionnelles</CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6 max-w-xl">
          <div className="relative">
            <div className="absolute left-[11px] top-0 bottom-0 w-[1px] bg-zinc-200"></div>
            <div className="space-y-8">
              <div className="relative flex items-start gap-6">
                {/* <div className="relative z-10 w-5 h-5 rounded-full bg-[#3534af] border-4 border-white flex-shrink-0"></div> */}
                <Card className="-ml-1 border-zinc-200 border w-8 h-8 rounded-full overflow-hidden relative">
                  <Image
                    src="/shootingpro.jpeg"
                    alt="AI Engineer freelance, développeur agents IA, développeur automatisations IA, Agent IA entreprise, Consultant IA, Consultant RAG"
                    fill
                    className="object-cover"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500 italic">
                    Sept 2025 - Aujourd'hui
                  </div>
                  <div className="font-bold text-lg">
                    Shootingpro.co - Fondateur / AI Engineer
                  </div>
                  <p>
                    Application IA de portraits ultra-réalistes avec les modèles
                    Flux.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start gap-6">
                <Card className="-ml-1 border-zinc-200 border w-8 h-8 rounded-full overflow-hidden relative">
                  <Image
                    src="/smartch.jpeg"
                    alt="AI Engineer freelance, développeur agents IA, développeur automatisations IA, Agent IA entreprise, Consultant IA, Consultant RAG"
                    fill
                    className="object-cover"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500 italic">
                    2022 - 2023
                  </div>
                  <div className="font-bold text-lg">
                    Lead développeur front-end chez Smartch
                  </div>
                  <p>
                    Reprise en main de l'application front-end complet d'une
                    plateforme elearning.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start gap-6">
                <Card className="-ml-1 bg-white border-zinc-200 border w-8 h-8 rounded-full overflow-hidden relative">
                  <Image
                    src="/corum.svg"
                    alt="AI Engineer freelance, développeur agents IA, développeur automatisations IA, Agent IA entreprise, Consultant IA, Consultant RAG"
                    fill
                    className="object-contain p-0.5"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500 italic">2022</div>
                  <div className="font-bold text-lg">
                    Développeur front-end chez Corum l'Épargne
                  </div>
                  <p>
                    Développements de tunnels de vente B2B/B2C de produits
                    d'épargne, SCPI, assurances vie.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start gap-6">
                <Card className="-ml-1 bg-white border-zinc-200 border w-8 h-8 rounded-full overflow-hidden relative">
                  <Image
                    src="/sewan.png"
                    alt="AI Engineer freelance, développeur agents IA, développeur automatisations IA, Agent IA entreprise, Consultant IA, Consultant RAG"
                    fill
                    className="object-contain p-0.5"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500 italic">2021</div>
                  <div className="font-bold text-lg">
                    Software engineer front-end chez Sewan
                  </div>
                  <p>
                    Participation à la refonte complète du SaaS de Sewan,
                    scale-up dans les télécoms, au sein de l'équipe tech de 40
                    développeurs.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start gap-6">
                <Card className="-ml-1 border-zinc-200 border w-8 h-8 rounded-full overflow-hidden relative">
                  <Image
                    src="/reezocar.png"
                    alt="AI Engineer freelance, développeur agents IA, développeur automatisations IA, Agent IA entreprise, Consultant IA, Consultant RAG"
                    fill
                    className="object-cover"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500 italic">2021</div>
                  <div className="font-bold text-lg">
                    Développeur front-end chez Reezocar
                  </div>
                  <p>
                    Création du site eCommerce pour un réseau d'agences de vente
                    de véhicules.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start gap-6">
                <Card className="-ml-1 border-zinc-200 border w-8 h-8 rounded-full overflow-hidden relative">
                  <Image
                    src="/iziwork.jpg"
                    alt="AI Engineer freelance, développeur agents IA, développeur automatisations IA, Agent IA entreprise, Consultant IA, Consultant RAG"
                    fill
                    className="object-cover"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500 italic">
                    2020 - 2021
                  </div>
                  <div className="font-bold text-lg">
                    Développeur full-stack chez iziwork
                  </div>
                  <p>Multiples missions pour la refonte du site vitrine.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card
        id="questions"
        className="relative md:px-8 px-2 border rounded-none pb-8 border border-zinc-200 border-l-0 border-r-0 border-b-0"
      >
        <CardHeader>
          <CardTitle variant="h3-card">Questions réponses</CardTitle>
        </CardHeader>
        <Accordion
          type="multiple"
          defaultValue={["item-1", "item-2", "item-3", "item-4", "item-5"]}
          className="w-full px-6"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Quelle est votre expertise en Intelligence Artificielle ?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Académique et IA appliquée concrête. Avec une approche de
                l'entraînement IA centré sur la rigueur de la donnée. J'ai
                développé une spécialité en IA agentique, RAG et apprentissage
                profond en NLP et Computer Vision dans les réseaux neuronaux
                convolutifs.
                <br /> Ceci avec la panoplies des techniques de finetuning de
                modèles.
                <br />
                Et l'optimisation des coûts et de la latence des modèles, et les
                entraînements de modèles.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Quelles services IA proposez-vous ?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Développement d'agents, de la NLP, de la computer vision et des
                modèles IA finetunés et optimisés pour vos cas d'usages. Le tout
                avec des interfaces front-end soignées.
                <br />
                <br />
                Services :
              </p>
              <ul className="list-disc pl-5 pt-2">
                <li>POC</li>
                <li>Développement IA</li>
                <li>Audits et consulting</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      {/* Contact Form */}
      <Card
        id="contact"
        className="relative md:px-8 px-1 border rounded-none mt-6 py-2 pb-8 border-none"
      >
        <CardContent className="max-w-3xl mx-auto">
          <ContactForm />
        </CardContent>
      </Card>
    </main>
  );
}
