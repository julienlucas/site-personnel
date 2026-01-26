import Image from "next/image";
import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./card";

export default function Hero() {
  return (
    <section
      id="hero"
      className="max-w-[1100px] w-fit pt-10 pb-10 px-4 md:px-12 mx-auto"
    >
      <Card className="border-none shadow-none grid md:grid-cols-2 grid-cols-1 gap-2">
        <CardHeader className="p-1">
          <div className="flex flex-col justify-center h-full">
            <CardTitle variant="h1" className="mt-0 pt-0">
              Bonjour je suis Julien Lucas, Applied AI Engineer et développeur senior
            </CardTitle>
            <CardDescription className="mb-4">
              Passionné d'IA appliquée, d'apprentissage profond, développeur
              senior 5 ans d'expériences en startups et scaleups, et aussi
              créateur de contenus où je vulgarise l'Intelligence Artificielle.
            </CardDescription>
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              variant="default"
              size="lg"
            >
              Besoin d'étudier votre projet IA? Contactez-moi
            </Button>
          </div>
        </CardHeader>
        <CardHeader className="border-none shadow-none">
          <Card className="border-none mx-auto shadow-none relative w-64 md:w-80 h-64 md:h-80 overflow-hidden flex justify-center align-center">
            <Image
              src="/julienlucas-b.jpeg"
              alt="AI Engineer freelance, développeur agents IA, développeur automatisations IA, Agent IA entreprise, Consultant IA, Consultant RAG"
              fill
              className="grayscale object-cover rounded-full object-center"
            />
          </Card>
        </CardHeader>
      </Card>
      <CardTitle
        variant="h2"
        className="md:text-[40px] text-3xl leading-[1.1] text-center w-full mx-auto max-w-4xl"
      >
        Embauchez-moi pour créer votre solution IA générative et
        automatiser votre entreprise
      </CardTitle>
      <CardDescription className="text-center w-full mx-auto max-w-3xl italic">
        TJM 550€ / jour ou forfait tout compris possibles
      </CardDescription>
    </section>
  );
}

