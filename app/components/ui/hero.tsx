import Image from "next/image";
import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./card";

export default function Hero() {
  return (
    <section
      id="hero"
      className="max-w-[1100px] pt-10 pb-10 px-4 md:px-8 mx-auto"
    >
      <Card className="border-none shadow-none grid md:grid-cols-2 grid-cols-1 gap-5">
        <CardHeader className="p-1 px-2">
          <div className="flex flex-col justify-center h-full">
            <CardTitle variant="h1">
              Bonjour, je suis Julien Lucas
            </CardTitle>
            <CardDescription className="mb-4">
              Passionné d'IA appliquée, d'apprentissage profond et développeur senior 5 ans d'expériences et
              aussi créateur de contenus où je vulgarise l'Intelligence Artificielle.
            </CardDescription>
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              variant="default"
              size="xl"
            >
              Besoin de réaliser un projet? Contactez-moi
            </Button>
          </div>
        </CardHeader>
        <CardHeader className="p-1 px-2 mt-8 md:mt-0 border-none shadow-none">
          <Card className="border-none shadow-none relative h-64 md:h-80 overflow-hidden flex justify-center align-center">
            <Image
              src="/julienlucas.webp"
              alt="Ingénieur en intelligence artificielle, développeur agents IA, développeur automatisations IA, AI Engineer freelance"
              fill
              className="object-cover rounded-lg object-top"
            />
          </Card>
        </CardHeader>
      </Card>
      <CardTitle variant="h2" className="md:text-[44px] text-3xl leading-[1.1] text-center py-10 pb-4 w-full mx-auto max-w-3xl">
        Je vous aide à automatiser votre entreprise
      </CardTitle>
    </section>
  );
}

