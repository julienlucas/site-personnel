import YoutubeFeed from "./components/ui/youtube-feed";

export default function Home() {
  return (
    <>
      {/* ─────────────────────  COVER  ───────────────────── */}
      <section className="profile-cover" id="cover">
        <div className="profile-cover-head">
          <span>Développeur 5 ans d'expérience</span>
          <span>AI Engineer freelance</span>
          <span>Avignon, France</span>
        </div>

        <div className="profile-cover-stage">
          <div className="profile-cover-title">
            <div className="profile-eyebrow">Faisons connaissance</div>
            <h1 className="profile-h1">
              <span>Julien</span>
              <span style={{ color: "var(--accent)" }}>Lucas.</span>
            </h1>
            <ul className="profile-cover-pills">
              <li className="profile-cover-pill">Applied AI Engineer</li>
              <li className="profile-cover-pill">
                Développeur 5 ans en équipes tech
              </li>
              <li className="profile-cover-pill">
                Créateur d'offres sur DeepAgenticAI
              </li>
            </ul>
            <p className="profile-tagline">
              Cinq ans à coder pour des startups, sans école. Fin 2024,
              ChatGPT-4 a tout fait basculer. Aujourd'hui je construis des{" "}
              <strong>agents IA et automatisations</strong>, trois produits en
              prod.
            </p>
          </div>
          <figure className="profile-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/julienlucas-b.jpeg" alt="Julien Lucas, Avignon, 2026" />
            <figcaption>
              <span>Julien Lucas</span>
              <span>salut maman</span>
            </figcaption>
          </figure>
        </div>

        <div className="profile-cover-foot">
          <span>
            j'ai laissé Claude faire le design, il s'en est pas mal sorti
          </span>
          <span>Scroll ↓</span>
        </div>
      </section>

      {/* ─────────────────  I. PRESENT TENSE  ───────────────── */}
      <section className="profile-movement profile-tone-soft" id="aujourdhui">
        <div className="profile-inner">
          <div className="profile-meta">
            <span>Partie I</span>
            <span>/</span>
            <span>Aujourd'hui</span>
          </div>
          <h2 className="profile-h2">
            Je construis des infrastructures IA
            <span className="profile-em">
              , depuis un petit appart à Avignon.
            </span>
          </h2>
          <div className="profile-prose">
            <p>
              Je suis basé dans le sud de la France. Je travaille en freelance
              pour des entreprises qui veulent passer des démos aux solutions en
              production — agents IA, RAG, fine-tuning de modèles. En parallèle,
              je construis et fais tourner mes propres produits :{" "}
              <a
                href="https://shootingpro.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>shootingpro.co</strong>
              </a>
              ,{" "}
              <a
                href="https://closechat.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>closechat.co</strong>
              </a>{" "}
              et
              <a
                href="https://prospable.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>prospable.com</strong>.
              </a>
              Construits seul, de bout en bout.
            </p>
            <p>
              Je passe une grosse partie de mes journées dans Cursor, Claude
              Code, et le terminal. Le reste à lire des papiers, regarder du
              code open-source, et tourner des vidéos pour expliquer ce que
              j'apprends sur ma{" "}
              <a
                href="https://www.youtube.com/@JulienLucas"
                target="_blank"
                rel="noopener noreferrer"
              >
                chaîne YouTube
              </a>
              . Mon métier a changé deux fois en neuf ans. Je n'ai aucune raison
              de penser que ce sera la dernière.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────  CURTAIN: 2017  ───────────────── */}
      <section className="profile-curtain profile-tone-black">
        <div className="profile-year-number">2017</div>
        <div className="profile-curtain-label">
          L'année où j'ai écrit ma première ligne de React, en autodidacte
        </div>
      </section>

      {/* ─────────────────  II. THE FIRST LINE  ───────────────── */}
      <section className="profile-bleed profile-bleed-dark" id="parcours">
        <div className="profile-bleed-grid">
          <div className="profile-bleed-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/jaimebien/IMG_7128.jpg" alt="Julien, hiver" />
            <div className="profile-bleed-cap">
              2026 · entre deux séssions de Claude
            </div>
          </div>
          <div className="profile-bleed-txt">
            <div className="profile-eb">Partie II / La première ligne</div>
            <h3 className="profile-h3">
              Pas d'école. 5ans en autodidacte en startups et équipes tech
            </h3>
            <p>
              Juillet 2017. Je décide d'apprendre à coder. J'achète un cours
              React/Redux d'Andrew Mead sur Udemy pour le prix d'un sandwich. Je
              le finis. J'en achète un autre. Puis Node, GraphQL, Apollo,
              Prisma, TypeScript. Cinq ans en autodidacte total — pas une salle
              de classe, pas un mentor formel.
            </p>
            <p>
              Tout ce que j'ai construit ensuite, je l'ai appris dans cet ordre
              : un cours, un projet perso, un bug, Stack Overflow, un autre
              cours.
            </p>
            <p>
              Puis pas mal de livres sur le systeme design, les design patterns
              et la pratique de la Clean Archtiecture.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────  III. FIVE YEARS  ───────────────── */}
      <section className="profile-movement profile-tone-paper" id="scale-ups">
        <div className="profile-inner">
          <div className="profile-meta">
            <span>Partie III</span>
            <span>/</span>
            <span>Cinq ans à construire pour les autres</span>
          </div>
          <h2 className="profile-h2">
            Cinq startups et équipes tech.{" "}
            <span className="profile-em">
              Intérim, telecom, épargne, e-learning
            </span>
          </h2>
          <div className="profile-prose">
            <p>
              <strong>iziwork</strong> en 2020 — refonte du site vitrine d'une
              scale-up de l'intérim. Première vraie équipe tech, premiers vrais
              code-reviews. <strong>Reezocar</strong> derrière, pour construire
              l'eCommerce d'un réseau d'agences automobiles.
            </p>
            <p>
              Puis <strong>Sewan</strong>, scale-up des télécoms, équipe tech de
              40 développeurs — le moment où j'ai compris ce que voulait dire «
              coder en équipe » à grande échelle.{" "}
              <strong>Corum l'Épargne</strong> ensuite : tunnels de vente
              B2B/B2C pour des produits financiers, SCPI, assurances vie. Mes
              tunnels les plus complexes.
            </p>
            <p>
              Et fin 2022, <strong>Smartch</strong> — premier rôle de lead
              front-end sur une plateforme e-learning complète. Cinq ans, cinq
              boîtes. Aucune que j'avais cherchée par école, par réseau, ou par
              hasard. Juste un dossier qui grossissait projet après projet.
            </p>
            <dl className="profile-tick">
              <dt>iziwork</dt>
              <dd>2020 — 2021</dd>
              <dt>Reezocar</dt>
              <dd>2021</dd>
              <dt>Sewan</dt>
              <dd>2021</dd>
              <dt>Corum l'Épargne</dt>
              <dd>2022</dd>
              <dt>Smartch (Lead)</dt>
              <dd>2022 — 2023</dd>
              <dt>Total</dt>
              <dd className="profile-accent-word">5 ans</dd>
            </dl>
            <p className="profile-aside">
              J'aimais beaucoup. Mais je sentais arriver le moment où coder ne
              serait plus suffisant.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────  PULL-SPREAD  ───────────────── */}
      <section className="profile-pull-spread profile-tone-soft">
        <div className="profile-pull-spread-inner">
          <div className="profile-pull-number">5</div>
          <div>
            <div className="profile-pull-label">
              Cinq années avant la bascule
            </div>
            <div className="profile-pull-text">
              Cinq ans à coder pour des scale-ups, en autodidacte.{" "}
              <em>Et puis ChatGPT-4 est arrivé.</em>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────  CURTAIN: NOV 2024  ───────────────── */}
      <section className="profile-curtain profile-tone-black">
        <div className="profile-year-number">2025</div>
        <div className="profile-curtain-label">
          Novembre 2025 — le métier a changé, pour de bon
        </div>
      </section>

      {/* ─────────────────  IV. THE TURNING POINT  ───────────────── */}
      <section className="profile-bleed profile-bleed-light" id="declic">
        <div className="profile-bleed-grid reverse">
          <div className="profile-bleed-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/jaimebien/IMG_7160.jpg"
              alt="Coucher de soleil dans le Vaucluse"
            />
            <div className="profile-bleed-cap">Vaucluse · fin 2024</div>
          </div>
          <div className="profile-bleed-txt">
            <div className="profile-eb">Partie IV / Le passage à l'IA</div>
            <h3 className="profile-h3">
              Ce qui prenait des mois prenait des heures. Je suis passé aux
              fondamentaux de l'IA.
            </h3>
            <p>
              ChatGPT-4 explose. Je vois passer sur X des SaaS construits en un
              weekend qui m'auraient pris six mois. Je comprends à ce moment-là
              que ce n'est pas un outil de plus — c'est un changement de régime
              pour le métier.
            </p>
            <p>
              Je décide d'aller chercher les compétences avant que tout le monde
              s'y mette. Je mets le freelance en pause sur le pur dev, j'attaque
              tous les matins des cours IA, un un parcours sur l'IA qui va durer
              toute l'année 2025.
            </p>
            <p
              className="profile-aside"
              style={{ margin: "24px 0 0", paddingLeft: 20, fontSize: 18 }}
            >
              « Si le métier change, soit tu changes avec, soit tu restes
              dehors. »
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────  FUNFACT: HOW I LEARNED IT  ───────────────── */}
      <section className="profile-funfact profile-funfact-split profile-tone-mid">
        <div className="profile-funfact-split-inner">
          <figure className="profile-funfact-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/jaimebien/IMG_7181.jpg"
              alt="Vue dégagée, fin de journée"
            />
            <figcaption>1 an de fondamentaux IA · 2 certifications</figcaption>
          </figure>
          <div className="profile-funfact-content">
            <div className="profile-funfact-label">
              Comment je m'y suis pris
            </div>
            <h3 className="profile-funfact-title">
              Deux certifications. Une par trimestre.
            </h3>
            <p className="profile-funfact-body">
              <strong>Hugging Face</strong> en février 2025 pour les
              fondamentaux des agents. <strong>IBM</strong> en septembre pour le
              RAG avancé, l'IA agentique et le fine-tuning de transformers —
              deux cursus complets et des cours individuels sur 6 mois.{" "}
              <strong>DeepLearning.AI</strong> en janvier 2026 pour PyTorch, les
              réseaux de neurones, NLP et computer vision.
            </p>
            <p className="profile-funfact-body">
              Pas de raccourci. Je voulais comprendre les modèles depuis la
              backprop jusqu'au RAG multi-agentique, parce qu'on ne construit
              pas en confiance ce qu'on n'a pas démonté.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────  V. PRODUCTS IN PROD  ───────────────── */}
      <section className="profile-movement profile-tone-paper" id="produits">
        <div className="profile-inner-wide">
          <div className="profile-meta">
            <span>Partie V</span>
            <span>/</span>
            <span>Mes produits en production</span>
          </div>
          <h2 className="profile-h2">
            Trois produits en prod.{" "}
            <span className="profile-em">Construits seul, de A à Z.</span>
          </h2>
          <div className="profile-books-grid">
            <article className="profile-book">
              <div className="profile-book-cover profile-book-cover-3">
                <div className="profile-book-cover-num">Produit Un · 2025</div>
                <h4 className="profile-book-cover-name">
                  Shooting
                  <br />
                  pro<span style={{ color: "#FDC9D6" }}>.</span>
                </h4>
                <div className="profile-book-cover-foot">
                  <span>shootingpro.co</span>
                  <span>En prod</span>
                </div>
              </div>
              <div className="profile-book-tag">
                <span>Produit Un</span>
                <span>·</span>
                <span>2025</span>
              </div>
              <h3 className="profile-book-title">
                <a
                  href="https://shootingpro.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shootingpro.co
                </a>
              </h3>
              <p className="profile-book-tagline">
                Vos portraits IA pro générés par IA. Des poses, environnements
                et tenues comme avec un vrai photographe pro.
              </p>
              <div className="profile-book-body">
                <p>
                  Application IA de portraits ultra-réalistes basée sur les
                  modèles Flux. L'utilisateur upload quelques selfies et reçoit
                  une série de portraits professionnels — LinkedIn, CV, presse —
                  en quelques minutes.
                </p>
                <p>
                  Stack : Flux (LoRA fine-tuning), pipeline d'inférence GPU,
                  Next.js, Stripe. Mon premier produit IA, lancé en septembre.
                </p>
              </div>
              <p className="profile-book-aside">
                C'est ce projet qui m'a appris la rigueur du fine-tuning de
                modèles d'images Flux et les LoRA qu'on peut injecter pour
                changer le rendu des images.
              </p>
            </article>

            <article className="profile-book">
              <div className="profile-book-cover profile-book-cover-1">
                <div className="profile-book-cover-num">
                  Produit Deux · 2026
                </div>
                <h4 className="profile-book-cover-name">
                  Closechat
                  <br />
                  IA<span style={{ color: "var(--accent-light)" }}>.</span>
                </h4>
                <div className="profile-book-cover-foot">
                  <span>closechat.co</span>
                  <span>En prod</span>
                </div>
              </div>
              <div className="profile-book-tag">
                <span>Produit Deux</span>
                <span>·</span>
                <span>2026</span>
              </div>
              <h3 className="profile-book-title">
                <a
                  href="https://whatsappia.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  closechat.co
                </a>
              </h3>
              <p className="profile-book-tagline">
                L'agent de qualification et setting sur WhatsApp pour closer vos
                leads
              </p>
              <div className="profile-book-body">
                <p>
                  Un agent IA branché sur l'API WhatsApp Cloud qui qualifie les
                  leads entrants 24/7, gère les objections, et pose le RDV
                  directement dans le calendrier du commercial. Intégrations
                  Cal.com, Calendly, HubSpot, Pipedrive.
                </p>
                <p>
                  Stack : Anthropic + Mistral, Django, React, Supabase, Stripe,
                  Resend. Construit seul, fondateur et seul ingénieur à bord.
                </p>
              </div>
              <p className="profile-book-aside">
                Premier produit IA que je laisse en prod 24/7. La discipline de
                l'observabilité change tout.
              </p>
            </article>

            <article className="profile-book">
              <div className="profile-book-cover profile-book-cover-2">
                <div className="profile-book-cover-num">
                  Produit Trois · 2026
                </div>
                <h4 className="profile-book-cover-name">
                  Prospable<span style={{ color: "var(--accent)" }}>.</span>
                </h4>
                <div className="profile-book-cover-foot">
                  <span>Cold email IA</span>
                  <span>En prod</span>
                </div>
              </div>
              <div className="profile-book-tag">
                <span>Produit Trois</span>
                <span>·</span>
                <span>2026</span>
              </div>
              <a
                href="https://prospable.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="profile-book-title">Prospable.</h3>
              </a>
              <p className="profile-book-tagline">
                600, 1000 ou jusqu'à 1000 leads qualifiés Linkedin/mois et
                100-300 emails/jour en automatique
              </p>
              <div className="profile-book-body">
                <p>
                  Recherche de prospects via scrapping de signaux d'intention
                  Linkedin, enrichissement automatique, génération de cold
                  emails contextualisés avec Claude selon les signaux
                  d'intentions détectés, chauffage continue des boîtes mail
                  envoi via Instantly.ai. Pipeline asynchrone Celery + Redis.
                </p>
                <p>
                  Stack : Anthropic, Apify, Django, Celery, Resend, React, Vite.
                  Pensé pour les TPE/PME qui n'ont pas de SDR mais qui ont d'une
                  système outbound fiable et de volume remplir un pipeline de
                  prospects tous les jours.
                </p>
              </div>
              <p className="profile-book-aside">
                Le projet où j'ai vraiment compris que la qualité du prompt et
                la qualité de la donnée comptaient plus que le modèle.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ─────────────────  VI. POCS / CASE STUDIES  ───────────────── */}
      <section
        className="profile-movement profile-tone-soft profile-no-dropcap"
        id="pocs"
      >
        <div className="profile-inner-wide">
          <div className="profile-meta">
            <span>Partie VI</span>
            <span>/</span>
            <span>Études de cas</span>
          </div>
          <h2 className="profile-h2">
            Quatre POCs.{" "}
            <span className="profile-em">
              Pour comprendre, pas pour vendre.
            </span>
          </h2>
          <div className="profile-prose" style={{ maxWidth: 640 }}>
            <p>
              À côté des produits en prod, je construis des prototypes pour
              tester une technique IA précise. Aucun n'a vocation à devenir un
              produit. Tous m'ont appris quelque chose.
            </p>
          </div>
          <div className="poc-list">
            <a href="/use-cases/agentic-rag" className="poc-list-item">
              <span className="poc-list-num">No. 01 · RAG</span>
              <h3 className="poc-list-title">
                RAG multi-agentique pour docs techniques
              </h3>
              <span className="poc-list-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a href="/use-cases/mm-rag" className="poc-list-item">
              <span className="poc-list-num">No. 02 · Multimodal</span>
              <h3 className="poc-list-title">
                MM-RAG : recommandation de tenues par image
              </h3>
              <span className="poc-list-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a href="/use-cases/pneumodiag" className="poc-list-item">
              <span className="poc-list-num">No. 03 · Vision</span>
              <h3 className="poc-list-title">
                Diagnostic de pneumonies depuis une radio
              </h3>
              <span className="poc-list-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a href="/use-cases/fakefinder" className="poc-list-item">
              <span className="poc-list-num">No. 04 · Deepfake</span>
              <h3 className="poc-list-title">
                Détecter les images IA (Nano Banana, Flux, Midjourney)
              </h3>
              <span className="poc-list-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────  VII. YOUTUBE  ───────────────── */}
      <section
        className="profile-movement profile-tone-paper profile-no-dropcap"
        id="youtube"
      >
        <div className="profile-inner-wide">
          <div className="profile-meta">
            <span>Partie VII</span>
            <span>/</span>
            <span>Sur YouTube</span>
          </div>
          <h2 className="profile-h2">
            Je vulgarise l'IA en français.{" "}
            <span className="profile-em">
              Ce que j'apprends, pendant que je l'apprends.
            </span>
          </h2>
          <div
            className="profile-prose"
            style={{ maxWidth: 640, marginBottom: 8 }}
          >
            <p>
              Une vidéo par semaine, parfois deux. Cours que je recommande,
              techniques que je teste, modèles que je démonte. Aucun script
              écrit par GPT.
            </p>
          </div>
          <YoutubeFeed />
          <div style={{ marginTop: 32 }}>
            <a
              href="https://www.youtube.com/@JulienLucas"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              S'abonner à la chaîne →
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────  VIII. THINGS I LIKE  ───────────────── */}
      <section
        className="profile-movement profile-tone-deep profile-no-dropcap"
        id="stack"
      >
        <div className="profile-inner">
          <div className="profile-meta">
            <span>Partie VIII</span>
            <span>/</span>
            <span>Ce que je ramène constamment</span>
          </div>
          <h2 className="profile-h2">
            Le stuff dont je n'arrête pas{" "}
            <span className="profile-em">de parler dans les vidéos.</span>
          </h2>
          <div className="profile-prose" style={{ marginBottom: 0 }}>
            <p>
              La meilleure façon de me cerner, c'est de regarder ce qui revient
              tout le temps. Sans ordre particulier.
            </p>
          </div>
          <div className="profile-favs">
            <div className="profile-fav-cell">
              <div className="profile-fav-num">No. 01 / Stack</div>
              <div>
                <div className="profile-fav-name">
                  Claude Code, Cursor, Anthropic API
                </div>
                <div className="profile-fav-desc">
                  Mon environnement de tous les jours. Je code et je débogue
                  presque tout avec Claude Sonnet et Opus.
                </div>
              </div>
            </div>
            <div className="profile-fav-cell">
              <div className="profile-fav-num">No. 02 / Frameworks</div>
              <div>
                <div className="profile-fav-name">Django + Next.js</div>
                <div className="profile-fav-desc">
                  Couple stable et productif pour mes produits IA. Django pour
                  le backend asynchrone, Next pour le front éditorial.
                </div>
              </div>
            </div>
            <div className="profile-fav-cell">
              <div className="profile-fav-num">No. 03 / Modèles</div>
              <div>
                <div className="profile-fav-name">
                  Claude Sonnet, Mistral, Flux
                </div>
                <div className="profile-fav-desc">
                  Sonnet pour la qualif et le code, Mistral pour le coût, Flux
                  pour la génération d'images sur Shootingpro.co.
                </div>
              </div>
            </div>
            <div className="profile-fav-cell">
              <div className="profile-fav-num">No. 04 / Apprentissage</div>
              <div>
                <div className="profile-fav-name">
                  DeepLearning.AI, IBM, Hugging Face
                </div>
                <div className="profile-fav-desc">
                  Trois plateformes qui valent largement n'importe quel bootcamp
                  à 8 000&nbsp;€.
                </div>
              </div>
            </div>
            <div className="profile-fav-cell">
              <div className="profile-fav-num">No. 05 / Outils</div>
              <div>
                <div className="profile-fav-name">LangSmith, Apify, Resend</div>
                <div className="profile-fav-desc">
                  Observabilité des agents, scraping, envoi d'emails. La triade
                  de mes pipelines en prod.
                </div>
              </div>
            </div>
            <div className="profile-fav-cell">
              <div className="profile-fav-num">No. 06 / Lieu</div>
              <div>
                <div className="profile-fav-name">Avignon, Vaucluse</div>
                <div className="profile-fav-desc">
                  Sud, soleil, calme. Je n'arrive plus à coder dans une
                  open-space depuis quatre ans.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────  IX. LINKEDIN OUTRO  ───────────────── */}
      <section
        className="profile-movement profile-tone-deep profile-cta-section profile-no-dropcap"
        id="contact"
      >
        <div className="profile-inner-wide">
          <div className="profile-meta">
            <span>Partie IX</span>
            <span>/</span>
            <span>Restons en contact</span>
          </div>
          <h2 className="profile-h2">
            On se retrouve sur LinkedIn.{" "}
            <span className="profile-em">C'est là que j'écris.</span>
          </h2>

          <div className="li-bill">
            <div className="li-bill-num">
              13K<sup>+ abonnés</sup>
            </div>
            <div className="li-bill-right">
              <span className="li-bill-eyebrow">in / julien-lucas-jl</span>
              <h3 className="li-bill-h">
                1 à 2 posts par semaine.{" "}
                <em>Tout ce que j'apprends, pendant que je l'apprends.</em>
              </h3>
              <p className="li-bill-body">
                Recaps de papiers récents en français, techniques RAG / agents /
                fine-tuning que je teste sur mes produits, et coulisses de
                Closechat et Prospable en prod. Si l'IA appliquée
                t'intéresse, c'est l'endroit.
              </p>
              <div className="li-bill-tags">
                <span>Recaps de papiers</span>
                <span>RAG</span>
                <span>Agents IA</span>
                <span>Fine-tuning</span>
                <span>Coulisses produits</span>
              </div>
              <a
                href="https://www.linkedin.com/in/julien-lucas-jl/"
                target="_blank"
                rel="noopener noreferrer"
                className="li-bill-cta"
              >
                <span>Voir mon LinkedIn</span>
                <span className="li-bill-cta-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
