"use client";

import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const pathname = usePathname();
  // /links is a standalone Linktree page — no site chrome.
  if (pathname?.startsWith("/links")) return null;

  return (
    <footer className="site-footer">
      <div className="container">
        <p>julienlucas.com · AI Engineer / Développeur</p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/julien-lucas-jl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="footer-slash" aria-hidden="true">/</span>
          <a
            href="https://www.youtube.com/@JulienLucas"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <span className="footer-slash" aria-hidden="true">/</span>
          <a
            href="https://github.com/julienlucas"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className="footer-slash" aria-hidden="true">/</span>
          <a
            href="https://whatsappia.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsappIA
          </a>
          <span className="footer-slash" aria-hidden="true">/</span>
          <a href="#contact">Contact</a>
        </div>
        <p style={{ marginTop: 14, fontSize: 11, color: "#999" }}>
          Avignon, France · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
