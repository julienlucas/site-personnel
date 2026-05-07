interface Product {
  name: string;
  url: string;
  tagline: string;
  description: string;
  stack: string[];
  status: "prod" | "beta";
}

const products: Product[] = [
  {
    name: "Whatsapp IA",
    url: "https://whatsappia.co",
    tagline: "Agent IA de qualification commerciale sur WhatsApp",
    description:
      "L'agent ne vend pas le produit — il vend le rendez-vous. Il qualifie les leads entrants 24/7, gère les objections, et pose le RDV directement dans le calendrier. Intégration Cal.com, Calendly, HubSpot, Pipedrive.",
    stack: ["Anthropic", "Mistral", "Django", "React", "Supabase", "Stripe", "WhatsApp Cloud API"],
    status: "prod",
  },
  {
    name: "LeadFlow",
    url: "#",
    tagline: "Génération de leads qualifiés + cold email IA",
    description:
      "Recherche de prospects via Google Maps et Apify, enrichissement automatique, génération d'emails personnalisés avec Claude, et envoi via Resend. De la requête au mail envoyé en quelques minutes.",
    stack: ["Anthropic", "Apify", "Django", "Celery", "Resend", "React", "Vite"],
    status: "prod",
  },
];

export default function Products() {
  return (
    <div className="space-y-6">
      {products.map((p) => (
        <article
          key={p.name}
          className="border border-rule bg-paper-soft/40 p-6 md:p-7"
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h3 className="font-editorial text-[22px] font-semibold text-ink leading-tight">
                {p.name}
              </h3>
              <p className="mt-1 text-[15px] text-ink-soft italic">
                {p.tagline}
              </p>
            </div>
            <span
              className={`tag ${
                p.status === "prod" ? "tag-launch" : "tag-ai"
              } flex-shrink-0`}
            >
              {p.status === "prod" ? "En production" : "Beta"}
            </span>
          </div>
          <p className="mt-4 text-[15px] leading-[1.65] text-ink-soft">
            {p.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="font-mono-label text-ink-muted bg-paper border border-rule px-2 py-1"
              >
                {s}
              </span>
            ))}
          </div>
          {p.url && p.url !== "#" && (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block font-mono-label text-forest hover:text-ink underline underline-offset-4"
            >
              Voir le site →
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
