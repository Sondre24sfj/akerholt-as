export default function PortfolioPage(){
  return (
    <section className="section block">
      <div className="container">
        <h3 style={{margin:'0 0 10px'}}>Portefølje</h3>
        <p style={{color:'#b5c0e0', margin:'0 0 12px'}}>
          Et utvalg av prosjekter jeg har jobbet med, med teknologier og stack.
        </p>

        <div className="portfolio-grid">
          <a className="card wike card-link" href="https://wikeco.no" target="_blank" rel="noopener noreferrer">
            <div className="thumb">
              <img src="/images/portfolio/Wike-logo.png" alt="WIKE & Co" />
            </div>
            <div className="body">
              <div className="title">WIKE & Co – Maskin entreprenør</div>
              <p className="text">Nettside for entreprenør.</p>
              <div className="badges">
                <span className="badge badge--wp">WordPress</span>
                <span className="badge badge--html">HTML</span>
                <span className="badge badge--css">CSS</span>
              </div>
            </div>
          </a>

          <a className="card stall card-link" href="https://landbruksflis.no" target="_blank" rel="noopener noreferrer">
            <div className="thumb">
              <img src="/images/portfolio/Stall-logo.png" alt="Stall og Landbruksflis AS" />
            </div>
            <div className="body">
              <div className="title">Stall og Landbruksflis AS – Infoside</div>
              <p className="text">Infoside med kontaktskjema og info om flis.</p>
              <div className="badges">
                <span className="badge badge--react">React</span>
                <span className="badge badge--js">JavaScript</span>
                <span className="badge badge--next">Next.js</span>
              </div>
            </div>
          </a>

          <a className="card github card-link" href="https://github.com/Sondre24sfj" target="_blank" rel="noopener noreferrer">
            <div className="thumb">
              <img src="/images/portfolio/github-logo.png" alt="GitHub" />
            </div>
            <div className="body">
              <div className="title">GitHub</div>
              <p className="text">En samling av åpne prosjekter og kode.</p>
              <div className="badges">
                <span className="badge badge--react">React</span>
                <span className="badge badge--html">HTML</span>
                <span className="badge badge--css">CSS</span>
                <span className="badge badge--next">Next.js</span>
                <span className="badge badge--js">JavaScript</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
