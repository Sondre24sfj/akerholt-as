import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="container">
        <div className="hero-badge">
          <span className="hero-badge__dot" />
          Tilgjengelig for nye prosjekter
        </div>
        <h1>
          <span className="muted">Fullstack-utvikler</span><br/>
          <span className="accent">Skaper digitale løsninger</span>
        </h1>
        <p>Bygger robuste, skalerbare og brukervennlige nettløsninger for bedrifter.</p>
        <div className="cta">
          <a className="btn primary" href="mailto:post.akerholt@gmail.com">Ta kontakt</a>
          <Link className="btn secondary" to="/portfolio">Se portefølje →</Link>
        </div>
      </div>
      <div className="scroll-indicator" onClick={() => document.getElementById('om')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="scroll-indicator__text">Scroll</span>
        <div className="scroll-indicator__line" />
      </div>
    </section>
  )
}
