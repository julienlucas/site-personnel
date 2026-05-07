import Image from "next/image";

interface Cert {
  date: string;
  org: string;
  title: string;
  logo: string;
  url?: string;
}

const certs: Cert[] = [
  {
    date: "Jan 2026",
    org: "DeepLearning.AI",
    title: "Deep Learning Specialization with PyTorch",
    logo: "/deeplearning.png",
    url: "https://coursera.org/share/c764d4a156eb85652c6cb580e6dd4b9a",
  },
  {
    date: "Sept 2025",
    org: "IBM",
    title: "Ingénierie de l'IA générative & fine-tuning des transformers",
    logo: "/ibm.svg",
    url: "https://coursera.org/share/0380319934dad9271399d79fe7f30bc7",
  },
  {
    date: "Sept 2025",
    org: "IBM",
    title: "Spécialisation RAG et IA Agentique",
    logo: "/ibm.svg",
  },
  {
    date: "Sept 2025",
    org: "IBM",
    title: "Advanced LLM Fine-tuning Techniques",
    logo: "/ibm.svg",
  },
  {
    date: "Fév 2025",
    org: "Hugging Face",
    title: "AI Agents Fundamentals",
    logo: "/hf.png",
  },
];

export default function Certifications() {
  return (
    <ul className="divide-y divide-rule border-y border-rule">
      {certs.map((c, i) => {
        const Wrapper = c.url ? "a" : "div";
        return (
          <li key={i}>
            <Wrapper
              {...(c.url
                ? { href: c.url, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex items-center gap-4 py-4 group"
            >
              <span className="relative w-9 h-9 flex-shrink-0 rounded-full bg-paper border border-rule overflow-hidden">
                <Image
                  src={c.logo}
                  alt={c.org}
                  fill
                  className="object-contain p-1.5"
                />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono-label text-ink-muted">
                    {c.date}
                  </span>
                  <span className="font-mono-label text-ink-muted">·</span>
                  <span className="font-mono-label text-forest">{c.org}</span>
                </div>
                <p className="mt-1 text-[15px] text-ink leading-snug group-hover:text-forest">
                  {c.title}
                </p>
              </div>
              {c.url && (
                <span className="font-mono-label text-ink-muted group-hover:text-ink flex-shrink-0">
                  ↗
                </span>
              )}
            </Wrapper>
          </li>
        );
      })}
    </ul>
  );
}
