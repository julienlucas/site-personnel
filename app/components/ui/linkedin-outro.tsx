interface LinkedinOutroProps {
  /** Custom h2 title — defaults to the home version. */
  title?: React.ReactNode;
  /** Override the chapter eyebrow line. */
  meta?: React.ReactNode;
}

export default function LinkedinOutro({ title, meta }: LinkedinOutroProps) {
  return (
    <section
      className="profile-movement profile-tone-deep profile-cta-section profile-no-dropcap"
      id="contact"
    >
      <div className="profile-inner-wide">
        <div className="profile-meta">
          {meta ?? (
            <>
              <span>Restons en contact</span>
              <span>/</span>
              <span>LinkedIn</span>
            </>
          )}
        </div>
        <h2 className="profile-h2">
          {title ?? (
            <>
              On se retrouve sur LinkedIn.{" "}
              <span className="profile-em">C&apos;est là que j&apos;écris.</span>
            </>
          )}
        </h2>

        <div className="li-bill">
          <div className="li-bill-num">
            13K<sup>+ abonnés</sup>
          </div>
          <div className="li-bill-right">
            <span className="li-bill-eyebrow">in / julien-lucas-jl</span>
            <h3 className="li-bill-h">
              3 à 4 posts par semaine.{" "}
              <em>Tout ce que j&apos;apprends, pendant que je l&apos;apprends.</em>
            </h3>
            <p className="li-bill-body">
              Recaps de papiers récents en français, techniques RAG / agents /
              fine-tuning que je teste sur mes produits, et coulisses de
              Whatsapp&nbsp;IA et LeadFlow en prod. Si l&apos;IA appliquée
              t&apos;intéresse, c&apos;est l&apos;endroit.
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

        <p className="li-bill-fallback">
          Tu préfères m&apos;écrire ?{" "}
          <a href="mailto:julienlucas84@gmail.com">julienlucas84@gmail.com</a>
        </p>
      </div>
    </section>
  );
}
