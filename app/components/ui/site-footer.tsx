export default function SiteFooter() {
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
