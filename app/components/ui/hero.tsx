import Image from "next/image";
import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./card";

export default function Hero() {
  return (
    <section
      id="hero"
      className="max-w-[1100px] pt-10 pb-10 px-4 md:px-8 mx-auto"
    >
      {/* <Card className="absolute right-16 -mt-14 bg-white border-gray-200 p-2 border w-14 h-14 rounded-xl flex justify-center align-center float-animation">
        <Image
          src="/mistral.svg"
          alt="Ingénieur en intelligence artificielle, développeur agents IA, développeur automatisations IA, AI Engineer freelance"
          fill
          className="object-cover"
        />
      </Card> */}
      {/* <Card className="absolute z-30 right-10 bg-white border-gray-200 p-2 mt-20 border w-14 h-14 rounded-xl flex justify-center align-center float-animation">
        <Image src="/hf.png" alt="Ingénieur en intelligence artificielle, développeur agents IA, développeur automatisations IA, AI Engineer freelance" fill className="object-cover" />
      </Card> */}
      <Card className="border-none grid md:grid-cols-2 grid-cols-1 gap-5">
        <CardHeader className="p-1 px-2">
          <div className="flex flex-col justify-center h-full">
            {/* <Card className="absolute border-gray-200 p-2 -ml-8 -mt-14 border w-14 h-14 rounded-xl flex justify-center align-center float-animation">
              <Image
                src="/mistral.svg"
                alt="Ingénieur en intelligence artificielle, développeur agents IA, développeur automatisations IA, AI Engineer freelance"
                fill
                className="object-cover"
              />
            </Card>
            <Card className="absolute bg-white border-gray-200 p-2 -ml-16 mt-20 border w-14 h-14 rounded-xl flex justify-center align-center float-animation">
              <Image
                src="/hf.png"
                alt="Ingénieur en intelligence artificielle, développeur agents IA, développeur automatisations IA, AI Engineer freelance"
                fill
                className="object-cover"
              />
            </Card> */}
            <CardTitle variant="h1">
              Bonjour, je suis Julien Lucas
            </CardTitle>
            <CardDescription className="mb-4">
              Passionné d'IA appliquée, d'apprentissage profond, développeur senior 5ans d'exépriences et
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
              size="xl"
            >
              Besoin de réaliser un projet? Contactez-moi
            </Button>
          </div>
        </CardHeader>
        <CardHeader className="p-1 px-2 mt-8 md:mt-0">
          <Card className="border-none h-54 h-74 flex justify-center align-center">
            <Image
              src="/julienlucas.webp"
              alt="Ingénieur en intelligence artificielle, développeur agents IA, développeur automatisations IA, AI Engineer freelance"
              fill
              className="object-cover rounded-lg object-top"
            />
          </Card>
        </CardHeader>
      </Card>
      <CardTitle variant="h2" className="md:text-[44px] text-3xl leading-[1] text-center py-10 pb-4 w-full mx-auto max-w-xl">
        Je vous aide à automatiser votre entreprise avec l'IA
      </CardTitle>
    </section>
  );
}

