"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import Certifications from "../components/ui/certifications";

export default function About() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
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
    <main className="relative max-w-[1100px] -mt-15 mx-auto py-30 px-6 border border-zinc-200 border-t-0 border-b-0">
      <Card className="border-none">
        <CardHeader>
          <CardTitle variant="h1">À propos de moi</CardTitle>
          <CardTitle variant="h2" className="max-w-xl font-normal text-2xl">
            AI Engineer et développeur senior spécialisé en intelligence
            artificielle générative et apprentissage profond.
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="border-none -mt-6">
        <CardHeader>
          <CardTitle variant="h2">Centres d'Intérêt</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 grid grid-cols-3 gap-5">
          <CardHeader className="border border-zinc-200 rounded-lg p-6">
            <div className="text-4xl">🤖</div>
            <CardTitle variant="h3">
              Intelligence Artificielle appliquée
            </CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </CardDescription>
          </CardHeader>
          <CardHeader className="border border-zinc-200 rounded-lg p-6">
            <div className="text-4xl">🧠</div>
            <CardTitle variant="h3">Apprentissage profond</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </CardDescription>
          </CardHeader>
          <CardHeader className="border border-zinc-200 rounded-lg p-6">
            <div className="text-4xl">👁️</div>
            <CardTitle variant="h3">Computer Vision</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </CardDescription>
          </CardHeader>
        </CardContent>
      </Card>

      <Certifications />

      <Card className="border-none">
        <CardHeader>
          <CardTitle variant="h2">Parcours professionnel</CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6 max-w-xl">
          <div className="relative">
            <div className="absolute left-[11px] top-0 bottom-0 w-[1px] bg-zinc-200"></div>
            <div className="space-y-8">
              <div className="relative flex items-start gap-6">
                {/* <div className="relative z-10 w-6 h-6 rounded-full bg-[#3534af] border-4 border-white flex-shrink-0"></div> */}
                <Card className="-ml-1 border-zinc-200 border w-8 h-8 rounded-md overflow-hidden relative">
                  <Image
                    src="/shootingpro.jpeg"
                    alt="Julien Lucas"
                    fill
                    className="object-cover"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500">
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
                <Card className="-ml-1 border-zinc-200 border w-8 h-8 rounded-md overflow-hidden relative">
                  <Image
                    src="/smartch.jpeg"
                    alt="Julien Lucas"
                    fill
                    className="object-cover"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500">2022 - 2023</div>
                  <div className="font-semibold text-lg">
                    Lead développeur front-end chez Smartch
                  </div>
                  <p>Reprise en main d'une v1 de plateforme saas elearning.</p>
                </div>
              </div>
              <div className="relative flex items-start gap-6">
                <Card className="-ml-1 bg-white border-zinc-200 border w-8 h-8 rounded-md overflow-hidden relative">
                  <Image
                    src="/corum.svg"
                    alt="Julien Lucas"
                    fill
                    className="object-contain p-0.5"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500">2022</div>
                  <div className="font-semibold text-lg">
                    Développeur front-end chez Corum l'Épargne
                  </div>
                  <p>
                    Développements sur les tunnels B2B/B2C existants et nouveaux
                    tunnels de vente produits d'épargne.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start gap-6">
                <Card className="-ml-1 bg-white border-zinc-200 border w-8 h-8 rounded-md overflow-hidden relative">
                  <Image
                    src="/sewan.png"
                    alt="Julien Lucas"
                    fill
                    className="object-contain p-0.5"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500">2021</div>
                  <div className="font-semibold text-lg">
                    Software engineer front-end chez Sewan
                  </div>
                  <p>
                    Refonte complète du SAAS de Sewan, scale-up opérateur
                    télécom.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start gap-6">
                <Card className="-ml-1 border-zinc-200 border w-8 h-8 rounded-md overflow-hidden relative">
                  <Image
                    src="/reezocar.png"
                    alt="Julien Lucas"
                    fill
                    className="object-cover"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500">2021</div>
                  <div className="font-semibold text-lg">
                    Développeur front-end chez Reezocar
                  </div>
                  <p>
                    Création du site eCommerce pour le nouveau réseau d'agences
                    de vente de véhicules.
                  </p>
                </div>
              </div>
              <div className="relative flex items-start gap-6">
                <Card className="-ml-1 border-zinc-200 border w-8 h-8 rounded-md overflow-hidden relative">
                  <Image
                    src="/iziwork.jpg"
                    alt="Julien Lucas"
                    fill
                    className="object-cover"
                  />
                </Card>
                <div className="flex-1 pt-0.5">
                  <div className="text-sm text-zinc-500">2020 - 2021</div>
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
      <Card className="border-none">
        <CardHeader>
          <CardTitle variant="h2">Questions fréquentes</CardTitle>
        </CardHeader>
        <Accordion
          type="multiple"
          defaultValue={["item-1", "item-2", "item-3", "item-4", "item-5"]}
          className="w-full px-6 -mt-6"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Demandes de projets IA</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                I'm always excited to discuss new projects, collaborations, and
                creative opportunities. Whether you're a brand looking for
                editorial photography, a magazine planning a shoot, or a
                creative director with a vision, I'd love to hear from you.
              </p>
              <p>
                <a
                  href="mailto:hello@voyager.com"
                  className="underline underline-offset-4 decoration-2 hover:text-primary transition-colors"
                >
                  hello@voyager.com
                </a>
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Booking Information</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">When reaching out, please include:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Project details and creative vision</li>
                <li>Desired timeline and shoot dates</li>
                <li>Budget range</li>
                <li>Location (studio or on-location)</li>
                <li>Any reference images or mood boards</li>
              </ul>
              <p className="mt-4">
                I'm typically booked 2-3 months in advance, but I always try to
                accommodate compelling projects with tighter timelines.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Press & Features</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                For press inquiries, interview requests, or speaking
                engagements, please contact:
              </p>
              <p>
                <a
                  href="mailto:press@voyager.com"
                  className="underline underline-offset-4 decoration-2 hover:text-primary transition-colors"
                >
                  press@voyager.com
                </a>
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Studio Location</AccordionTrigger>
            <AccordionContent>
              <p>
                Based in Vesterbro, Copenhagen, Denmark
                <br />
                Available for projects worldwide
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      {/* Contact Form */}
      <Card className="border-none">
        <CardHeader>
          <CardTitle variant="h2">Contactez-moi</CardTitle>
          <CardDescription>
            Remplissez le formulaire ci-dessous pour me contacter
          </CardDescription>
        </CardHeader>
        <CardContent className="py-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              {/* Email */}
              <div>
                <Label>Votre adresse email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Name */}
              <div>
                <Label>Votre nom</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <Label>Sujet</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message */}
              <div>
                <Label>Votre méssage</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <Button
                variant="default"
                size="xl"
                className="bg-black hover:bg-gray-800 text-white w-fit"
              >
                Envoyer maintenant
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

