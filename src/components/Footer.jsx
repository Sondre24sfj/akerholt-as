export default function Footer() {
  return (
    <footer className="footer-hero">
      <div className="container footer-grid">
        {/* Venstre kolonne */}
        <div>
          <div className="footer-title">Akerholt AS</div>
          <p className="footer-text">
            Ekte løsninger. Profesjonell kvalitet. Fordi gode digitale løsninger bygger både
            tillit og merkevarer.
          </p>

          {/* Sosiale ikoner */}
          <div className="footer-social">
            {/* GitHub */}
            <a
              href="https://github.com/Sondre24sfj"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <img src="/images/tech/GitHub.png" alt="GitHub" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sondre-akerholt-26a038367/?skipRedirect=true"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img src="/images/ui/linkedin.png" alt="LinkedIn" />
            </a>
          </div>

          {/* Org.nr */}
          <p className="footer-text">
            Org.nr: <strong>982 930 030</strong>
          </p>
        </div>

        {/* Høyre kolonne */}
        <div className="footer-contact">
          <div className="footer-col-title">Kontakt</div>
          <div className="footer-contact-row">
            <span>📧</span>
            <a href="mailto:post.akerholt@gmail.com">post.akerholt@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Bunntekst */}
      <div className="footer-bottom">
        © 2025 Akerholt AS. Alle rettigheter reservert.
      </div>
    </footer>
  );
}
