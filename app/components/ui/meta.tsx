export default function Meta() {
  return (
    <>
      <link
        rel="icon"
        type="image/png"
        sizes="128x128"
        href="/favicons/favicon-128x128.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="72x72"
        href="/favicons/favicon-72x72.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="72x72"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="shortcut icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <meta
        name="keywords"
        content="Ingénieur en intelligence artificielle, développeur agents IA, développeur automatisations IA, AI Engineer freelance"
      />
      <meta name="author" content="Julien Lucas" />
      <link rel="manifest" href="manifest.json" />
      <link rel="shortcut icon" href="icons/icon-72x72.png" />
      <meta name="msapplication-TileColor" content="#3c30e5" />
      <meta name="theme-color" content="#3c30e5" />

      {/* OpenGraph tags */}
      <meta property="og:type" content="siteweb" />
      <meta property="og:url" content="https://julienlucas.com/" />
      <meta
        property="og:title"
        content="Ingénieur en intelligence artificielle, développeur agents IA, développeur automatisations IA, AI Engineer freelance"
      />
      <meta
        name="description"
        content="Ingénieur en intelligence artificielle, développeur agents IA, développeur automatisations IA, AI Engineer freelance"
      />
      <meta property="og:image" content="/og-image.jpg" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@julienlucasjl" />
      <meta
        name="twitter:title"
        content="Julien Lucas | AI Engineer, Développeur senior, créateur de contenu"
      />
      <meta
        name="twitter:description"
        content="Développeur front-end React et Node freelance créateur de solutions saas pour startups / Formateur devs / Créateur de contenu"
      />
      <meta name="twitter:image" content="/og-image.jpg" />
      <script type="application/ld+json">
        {`
        {
          "@context": "http://schema.org",
          "@type": "WebPage",
          "url": "https://julienlucas.com/",
          "name": "Julien Lucas | AI Engineer, Développeur senior, créateur de contenu"
        }
        `}
      </script>
    </>
  );
}
