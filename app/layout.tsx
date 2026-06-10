import type { Metadata } from "next";
import { Sora, Space_Mono } from "next/font/google";
import Navigation from "./components/ui/navigation";
import SideNav from "./components/ui/side-nav";
import SiteFooter from "./components/ui/site-footer";
import SmoothScroll from "./components/smooth-scroll";
import Script from "next/script";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julien Lucas — A profile in seven parts",
  description:
    "Julien Lucas. Cinq ans à coder pour des scale-ups. Une bascule fin 2024 vers l'IA. Aujourd'hui AI Engineer freelance à Avignon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${sora.variable} ${spaceMono.variable}`}>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-LZL71FQRRE`}
          strategy="afterInteractive"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LZL71FQRRE', {
            page_path: window.location.pathname,
          });
        `,
          }}
          strategy="afterInteractive"
        />
        <SmoothScroll>
          <Navigation />
          <SideNav />
          <main>{children}</main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
