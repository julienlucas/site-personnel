import Image from "next/image";

type Tag = "dev" | "ai" | "launch" | "life";

interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  tags?: Tag[];
  logo?: string;
  pullQuote?: string;
  photo?: { src: string; alt: string };
}

const tagLabels: Record<Tag, string> = {
  dev: "Dev",
  ai: "AI",
  launch: "Launch",
  life: "Life",
};

const entries: TimelineEntry[] = [
  {
    date: "Jul 2017",
    title: "Première ligne de React, en autodidacte",
    description:
      "Je découvre le développement web sur Udemy. Le bootcamp React/Redux de Andrew Mead. Pas d'école, pas de formation — juste un cours, un éditeur de texte, et beaucoup d'heures.",
    tags: ["dev", "life"],
  },
  {
    date: "Oct 2019",
    title: "Le stack se complète : Node.js, GraphQL, Prisma",
    description:
      "Je comble les trous côté backend. Node, GraphQL, Apollo, Prisma — pour pouvoir construire de A à Z.",
    tags: ["dev"],
  },
  {
    date: "2020 — 2021",
    title: "Développeur full-stack chez iziwork",
    description:
      "Première grosse mission : refonte du site vitrine d'une scale-up de l'intérim. Je découvre le travail en équipe tech à grande échelle.",
    tags: ["dev"],
    logo: "/iziwork.jpg",
  },
  {
    date: "2021",
    title: "Reezocar — eCommerce automobile",
    description:
      "Création du site eCommerce pour un réseau d'agences de vente de véhicules.",
    tags: ["dev"],
    logo: "/reezocar.png",
  },
  {
    date: "2021",
    title: "Sewan — équipe tech de 40 développeurs",
    description:
      "Refonte complète du SaaS d'une scale-up dans les télécoms. Je bosse au milieu d'une vraie équipe d'ingénieurs.",
    tags: ["dev"],
    logo: "/sewan.png",
  },
  {
    date: "2022",
    title: "Corum l'Épargne — finance B2B/B2C",
    description:
      "Tunnels de vente pour des produits d'épargne, SCPI, assurances vie. Mes plus gros tunnels e-commerce.",
    tags: ["dev"],
    logo: "/corum.svg",
  },
  {
    date: "2022 — 2023",
    title: "Lead front-end chez Smartch (e-learning)",
    description:
      "Je reprends la main sur l'application front-end complète d'une plateforme e-learning. Premier rôle de lead.",
    tags: ["dev"],
    logo: "/smartch.jpeg",
  },
  {
    date: "Déc 2024",
    title: "Le passage à l'IA",
    description:
      "ChatGPT-4 explose. Je vois passer des SaaS codés en quelques heures qui m'auraient pris des mois. Je comprends que le métier de dev est en train de changer pour de bon — et qu'il faut acquérir ces compétences maintenant.",
    tags: ["ai", "life"],
    pullQuote:
      "Ce qui prenait des mois prenait quelques heures. Le métier changeait. Il fallait y aller.",
    photo: {
      src: "/jaimebien/IMG_7160.jpg",
      alt: "Coucher de soleil",
    },
  },
  {
    date: "Fév 2025",
    title: "AI Agents Fundamentals — Hugging Face",
    description:
      "Je commence par les fondations : architectures d'agents, tool calling, orchestration.",
    tags: ["ai"],
    logo: "/hf.png",
  },
  {
    date: "Sept 2025",
    title: "Spécialisation IBM : RAG, IA Agentique, Fine-tuning",
    description:
      "Triple certification IBM sur Coursera : RAG avancé, agents, et techniques de fine-tuning de transformers.",
    tags: ["ai"],
    logo: "/ibm.svg",
  },
  {
    date: "Sept 2025",
    title: "Shootingpro.co — premier produit IA",
    description:
      "Je lance ma première application IA en prod. Portraits ultra-réalistes générés avec les modèles Flux. Fondateur, AI Engineer, et seul à bord.",
    tags: ["launch", "ai"],
    logo: "/shootingpro.jpeg",
  },
  {
    date: "Jan 2026",
    title: "Deep Learning Specialization — DeepLearning.AI",
    description:
      "Je consolide les fondations : PyTorch, réseaux de neurones, computer vision, NLP. Apprentissage profond appliqué.",
    tags: ["ai"],
    logo: "/deeplearning.png",
  },
  {
    date: "Aujourd'hui",
    title: "DeepAgenticAI — AI Engineer freelance",
    description:
      "Je construis des agents et des produits IA. Whatsapp-IA en prod, LeadFlow en prod, et des missions freelance pour des entreprises qui veulent automatiser concrètement.",
    tags: ["launch", "ai"],
    photo: {
      src: "/jaimebien/IMG_7128.jpg",
      alt: "Julien en hiver",
    },
  },
];

export default function Timeline() {
  return (
    <ol className="relative">
      <div
        aria-hidden
        className="absolute left-[7px] top-2 bottom-2 w-px bg-rule"
      />
      {entries.map((e, i) => (
        <li key={i} className="relative pl-10 pb-10 last:pb-0">
          <span
            aria-hidden
            className="absolute left-[2px] top-[6px] w-[12px] h-[12px] rounded-full bg-paper border border-ink"
          />
          <div className="font-mono-label text-ink-muted">{e.date}</div>
          <div className="mt-1.5 flex items-start gap-3">
            {e.logo && (
              <span className="relative flex-shrink-0 mt-1 w-7 h-7 rounded-full bg-paper-soft border border-rule overflow-hidden">
                <Image
                  src={e.logo}
                  alt=""
                  fill
                  className="object-cover p-0.5"
                />
              </span>
            )}
            <div className="flex-1">
              <h3 className="font-editorial text-[18px] leading-snug font-semibold text-ink">
                {e.title}
              </h3>
              <p className="mt-1.5 text-[15px] leading-[1.6] text-ink-soft">
                {e.description}
              </p>
              {e.tags && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
                    <span key={t} className={`tag tag-${t}`}>
                      {tagLabels[t]}
                    </span>
                  ))}
                </div>
              )}
              {e.pullQuote && (
                <blockquote className="pullquote mt-5 pl-4 border-l-2 border-forest text-[20px] md:text-[22px]">
                  « {e.pullQuote} »
                </blockquote>
              )}
              {e.photo && (
                <div className="mt-5 relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-paper-soft">
                  <Image
                    src={e.photo.src}
                    alt={e.photo.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
