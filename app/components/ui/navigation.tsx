import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <img
            src="/julienlucas-b.jpeg"
            alt="Julien Lucas"
            className="nav-avatar"
            width={28}
            height={28}
          />
          <span className="nav-logo-text">
            julienlucas<span className="dot">.</span>com
          </span>
        </Link>
        <div className="nav-links">
          <span className="nav-slash" aria-hidden="true">/</span>
          <Link href="#cover" className="active">Home</Link>
          <span className="nav-slash" aria-hidden="true">/</span>
          <Link href="#produits">Projets</Link>
          <span className="nav-slash" aria-hidden="true">/</span>
          <Link href="#parcours">Parcours</Link>
          <span className="nav-slash" aria-hidden="true">/</span>
          <a href="https://www.youtube.com/@JulienLucas" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <span className="nav-slash" aria-hidden="true">/</span>
          <a href="https://www.linkedin.com/in/julien-lucas-jl/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className="nav-slash" aria-hidden="true">/</span>
          <a href="https://github.com/julienlucas" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span className="nav-slash" aria-hidden="true">/</span>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
