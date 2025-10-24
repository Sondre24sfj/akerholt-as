import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="hero">
      <div className="container">
        <h1>
          <span className="muted">Fullstack-utvikler</span><br/>
          <span className="accent">Skaper digitale løsninger</span>
        </h1>
        <p>Bygger robuste, skalerbare og brukervennlige nettløsninger for bedrifter.</p>
        <div className="cta">
          <a className="btn primary" href="#kontakt">Ta kontakt</a>
          <Link className="btn secondary" to="/portfolio">Portefølje</Link>
        </div>
      </div>
    </section>
  )
}
