import { Html, Head, Main, NextScript } from "next/document";
import Meta from "./components/ui/meta";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <Meta />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KNMSKP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
