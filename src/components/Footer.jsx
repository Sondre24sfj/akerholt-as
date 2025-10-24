export default function Footer(){
  return (
    <footer className="footer-hero">
      <div className="container footer-grid">
        {/* Venstre kolonne */}
        <div className="footer-brand">
          <div className="footer-title">Akerholt AS</div>
          <p className="footer-text">
            Ekte løsninger. Profesjonell kvalitet. Fordi gode digitale løsninger bygger både tillit og merkevarer.
          </p>

          <div className="footer-social">
            {/* GitHub */}
            <a href="https://github.com/Sondre24sfj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src="/images/tech/GitHub.png" alt="GitHub" />
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/sondre-akerholt-26a038367/?skipRedirect=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/images/portfolio/github-logo.png" alt="" style={{display:"none"}}/>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.82-2.1 3.75-2.1 4 0 4.74 2.63 4.74 6.05V24h-4v-6.9c0-1.64-.03-3.76-2.3-3.76-2.3 0-2.65 1.8-2.65 3.65V24h-4V8.5z" fill="#22d3ee"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Høyre kolonne – kontakt */}
        <div className="footer-contact">
          <div className="footer-col-title">Kontakt</div>

          <div className="footer-contact-row">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 4h16v16H4z" fill="none"/><path d="M4 8l8 5 8-5" stroke="#22d3ee" strokeWidth="1.8" fill="none"/>
            </svg>
            <a href="mailto:post.akerholt@gmail.com">post.akerholt@gmail.com</a>
          </div>

          {/* Legg inn telefon her når du vil:
          <div className="footer-contact-row">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.1-.2 1.2.5 2.6.8 4 .8.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.4 21 3 12.6 3 2c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.4.3 2.8.8 4 .1.3 0 .8-.3 1.1L6.6 10.8z" fill="#22d3ee"/>
            </svg>
            <a href="tel:+47XXXXXXXX">+47 XX XX XX XX</a>
          </div>
          */}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © {new Date().getFullYear()} Akerholt AS. Alle rettigheter reservert.
        </div>
      </div>
    </footer>
  )
}
