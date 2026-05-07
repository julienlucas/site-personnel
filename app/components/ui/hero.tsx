import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="pt-16 pb-12">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-28 h-28 rounded-full overflow-hidden ring-1 ring-rule mb-7">
          <Image
            src="/julienlucas-b.jpeg"
            alt="Julien Lucas, AI Engineer freelance"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <span className="font-mono-label text-ink-muted mb-4">
          AI Engineer · Avignon, FR
        </span>

        <h1 className="font-editorial text-[40px] md:text-[52px] leading-[1.05] tracking-tight font-semibold text-ink max-w-[640px]">
          Julien Lucas.
          <br />
          <span className="text-ink-soft font-light">
            Développeur autodidacte<br />devenu AI Engineer.
          </span>
        </h1>

        <p className="mt-7 max-w-[520px] text-[17px] leading-[1.6] text-ink-soft">
          J'ai écrit ma première ligne de React en 2017, en autodidacte, sur
          Udemy. Cinq ans plus tard, je construisais des tunnels e-commerce pour
          des scale-up. Fin&nbsp;2024, ChatGPT-4 et la vitesse à laquelle on
          codait des SaaS en quelques heures m'ont fait comprendre que tout
          allait changer. J'ai tout misé sur l'IA.
        </p>

        <div className="mt-9 flex items-center gap-4">
          <a
            href="#contact"
            className="font-mono-label bg-ink text-paper px-5 py-3 hover:bg-forest"
          >
            Travailler avec moi
          </a>
          <a
            href="#parcours"
            className="font-mono-label text-ink-soft hover:text-ink underline-offset-4 hover:underline"
          >
            Mon parcours ↓
          </a>
        </div>
      </div>
    </section>
  );
}
