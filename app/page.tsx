"use client";
import Hero from "./components/ui/hero";
import SocialStats from "./components/ui/social-stats";
import YouTubeVideos from "./components/ui/youtube-videos";
import { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./components/ui/card";
import Certifications from "./components/ui/certifications";

export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await emailjs.send(
        `${process.env.NEXT_PUBLIC_MAILJS_SERVICE_KEY}`,
        "template_i1de0jq",
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || "Non spécifiée",
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_MAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({
        email: "",
        name: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="max-w-[1100px] min-h-screen -mt-15 mx-auto py-30 mx-auto border border-zinc-200 border-t-0 border-b-0">
      <Hero />
      <SocialStats />
      <Card className="relative border rounded-none -mt-6 py-10 pb-18 border border-zinc-200 border-l-0 border-r-0 border-b-0">
        <div className="absolute top-0 left-6 w-5 h-5 bg-blue-950" />
        <CardHeader>
          <CardTitle variant="h2">Centres d'Intérêt</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 grid md:grid-cols-3 grid-cols-1 gap-3 w-full">
          <CardHeader className="border border-zinc-200 rounded-lg p-6">
            <div className="text-4xl">🤖</div>
            <CardTitle variant="h3">
              Intelligence Artificielle appliquée
            </CardTitle>
            <CardDescription>
              Développement de modèles, d'agents, et d'automatisations basés sur
              des modèles IA personnalisés.
            </CardDescription>
          </CardHeader>
          <CardHeader className="border border-zinc-200 rounded-lg p-6">
            <div className="text-4xl">🧠</div>
            <CardTitle variant="h3">Apprentissage profond</CardTitle>
            <CardDescription>
              Création et finetuning efficace de modèles en NLP et Computer
              Vision.
            </CardDescription>
          </CardHeader>
          <CardHeader className="border border-zinc-200 rounded-lg p-6">
            <div className="text-4xl">⚙️</div>
            <CardTitle variant="h3">Développement "classique"</CardTitle>
            <CardDescription>
              Architecture logicielle et développement de solutions.
            </CardDescription>
          </CardHeader>
        </CardContent>
      </Card>

      <Card
        id="a-propos"
        className="relative border rounded-none -mt-6 py-10 pb-18 border border-zinc-200 border-l-0 border-r-0 border-b-0"
      >
        <div className="absolute top-0 left-6 w-5 h-5 bg-blue-950" />
        <CardHeader>
          <CardTitle variant="h2">Expériences</CardTitle>
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
                    alt="Ingénieur en intelligence artificielle, développeur agents IA, développeur automatisations IA, AI Engineer freelance"
                    fill
                    className="object-cover"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500 italic">
                    Sept 2025 - Aujourd'hui
                  </div>
                  <div className="font-semibold text-lg">
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
                    alt="Ingénieur en intelligence artificielle, développeur agents IA, développeur automatisations IA, AI Engineer freelance"
                    fill
                    className="object-cover"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500 italic">
                    2022 - 2023
                  </div>
                  <div className="font-semibold text-lg">
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
                    alt="Ingénieur en intelligence artificielle, développeur agents IA, développeur automatisations IA, AI Engineer freelance"
                    fill
                    className="object-contain p-0.5"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500 italic">2022</div>
                  <div className="font-semibold text-lg">
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
                    alt="Ingénieur en intelligence artificielle, développeur agents IA, développeur automatisations IA, AI Engineer freelance"
                    fill
                    className="object-contain p-0.5"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500 italic">2021</div>
                  <div className="font-semibold text-lg">
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
                    alt="Ingénieur en intelligence artificielle, développeur agents IA, développeur automatisations IA, AI Engineer freelance"
                    fill
                    className="object-cover"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500 italic">2021</div>
                  <div className="font-semibold text-lg">
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
                    alt="Ingénieur en intelligence artificielle, développeur agents IA, développeur automatisations IA, AI Engineer freelance"
                    fill
                    className="object-cover"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500 italic">
                    2020 - 2021
                  </div>
                  <div className="font-semibold text-lg">
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
        className="relative border rounded-none -mt-6 py-10 pb-12 border border-zinc-200 border-l-0 border-r-0"
      >
        <div className="absolute top-0 left-6 w-5 h-5 bg-blue-950" />
        <CardHeader>
          <CardTitle variant="h2">Questions réponses</CardTitle>
        </CardHeader>
        <Accordion
          type="multiple"
          defaultValue={["item-1", "item-2", "item-3", "item-4", "item-5"]}
          className="w-full px-6 -mt-6"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Quelle est votre expertise en Intelligence Artificielle ?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Académique et IA appliquée concrête. Avec une approche de
                l'entraînement IA centré sur la rigueur de la donnée. J'ai développé une
                spécialité en IA agentique, RAG et apprentissage profond en
                NLP et Computer Vision dans les réseaux neuronaux
                convolutifs.
                <br /> Ceci avec la panoplies des techniques de finetuning de
                modèles.
                <br />
                Et l'optimisation réelle des coûts, la latence des modèles et de la rapidité des
                apprentisages (grâce aux outils prévus pour).
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Quelles services IA proposez-vous ?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Développement d'agents, de la NLP, de la computer vision et
                des modèles IA finetunés et optimisés pour vos cas d'usages. Le
                tout avec des interfaces front-end soignées.<br/><br/>
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

      <Certifications />

      {/* Contact Form */}
      <Card
        id="contact"
        className="relative border rounded-none mt-6 py-10 pb-12 border border-zinc-200 border-l-0 border-r-0 border-b-0"
      >
        <div className="absolute top-0 left-6 w-5 h-5 bg-blue-950" />
        <CardHeader>
          <CardTitle variant="h2">N'hésitez pas à me contacter</CardTitle>
          <CardDescription>
            Remplissez le formulaire ci-dessous pour me contacter.
          </CardDescription>
        </CardHeader>
        <CardContent className="py-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Email */}
              <Label>Votre adresse email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              {/* Name */}
              <Label>Votre nom et prénom</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              {/* Name */}
              <Label>Le nom de votre entreprise</Label>
              <Input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />

              {/* Subject */}
              <Label>Sujet</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              {/* Message */}
              <Label>Votre méssage</Label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
              <Button
                variant="default"
                size="xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer maintenant"}
              </Button>
              {submitStatus === "success" && (
                <p className="text-green-600 text-sm">
                  Message envoyé avec succès !
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-sm">
                  Erreur lors de l'envoi. Veuillez réessayer.
                </p>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
