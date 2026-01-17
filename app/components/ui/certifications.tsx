import { Card, CardHeader, CardTitle, CardContent } from "./card";
import Image from "next/image";

export default function Certifications() {
  return (
    <Card className="relative px-8 border-none pb-8">
      <CardHeader>
        <CardTitle variant="h3-card" className="text-center max-w-[460px] mx-auto -mb-3">
          Certifié IA Agentique, RAG et Deeplearning PyTorch
        </CardTitle>
      </CardHeader>
      <CardContent className="mx-auto grid grid-cols-2 max-w-[320px] w-full mt-3">
        <div className="relative flex items-center justify-center max-[170px] h-7 w-full h overflow-hidden">
          <a
            href="https://coursera.org/share/0380319934dad9271399d79fe7f30bc7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <Image src="/ibm.svg" alt="Deeplearning" fill className="h-4" />
          </a>
        </div>
        <div className="relative flex items-center justify-center max-[120px] h-7 w-full overflow-hidden">
          <a
            href="https://coursera.org/share/c764d4a156eb85652c6cb580e6dd4b9a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <Image
              src="/deeplearning.png"
              alt="Ingénieur en intelligence artificielle, développeur agents IA, développeur automatisations IA, AI Engineer freelance"
              fill
              className="object-cover"
            />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
