import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Gabarito } from "next/font/google";
import Navigation from "./components/ui/navigation";
import ContactBubble from "./components/ui/contact-bubble";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julien Lucas",
  description: "AI Engineer et développeur senior et créateur de contenu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gabarito.variable} font-sans antialiased`}
      >
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
        <Navigation />
        <ContactBubble />
        <div className="max-w-[1200px] -mb-13 mx-auto border-t-0 border-b-0 px-4">
          {children}
        </div>
        <footer className="mx-auto border-t border-zinc-200 mt-auto">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="text-sm flex justify-center">
              © {new Date().getFullYear()} Julien Lucas. Tous droits réservés.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
