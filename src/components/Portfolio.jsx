// src/components/Portfolio.jsx
export default function Portfolio(){
  return (
    <section className="section block" id="portfolio">
      <div className="container">
        <h3 style={{margin:'0 0 6px'}}>Min Portefølje</h3>
        <p style={{color:'#6b7280', margin:'0 0 8px'}}>
          Et utvalg av prosjekter jeg har jobbet med, som viser mine ferdigheter innen webutvikling.
        </p>

        <div className="portfolio-grid">
          {/* WIKE & Co */}
          <article className="card wike">
            <div className="thumb">
              <img src="/images/portfolio/Wike-logo.png" alt="WIKE & Co" />
            </div>
            <div className="body">
              <div className="title">Maskin entreprenør</div>
              <p className="text">En side for et entreprenør selskap.</p>
              <div className="badges">
                <span className="badge badge--wp">WordPress</span>
              </div>
            </div>
          </article>

          {/* Stall & Landbruksflis */}
          <article className="card stall">
            <div className="thumb">
              <img src="/images/portfolio/Stall-logo.png" alt="Stall og Landbruksflis AS" />
            </div>
            <div className="body">
              <div className="title">Infoside</div>
              <p className="text">En infoside for Stall og Landbruksflis AS. Med kontaktskjema og info om flis.</p>
              <div className="badges">
                <span className="badge badge--react">React</span>
                <span className="badge badge--js">JavaScript</span>
                <span className="badge badge--next">Next.js</span>
              </div>
            </div>
          </article>

          {/* GitHub */}
          <article className="card github">
            <div className="thumb">
              <img src="/images/portfolio/github-logo.png" alt="GitHub" />
            </div>
            <div className="body">
              <div className="title">Github-konto</div>
              <p className="text">Her har jeg noen av prosjektene mine.</p>
              <div className="badges">
                <span className="badge badge--react">React</span>
                <span className="badge badge--html">HTML</span>
                <span className="badge badge--css">CSS</span>
                <span className="badge badge--next">Next.js</span>
                <span className="badge badge--js">JavaScript</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
