export default function Header(){
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>Hjem</span>
          <span>Prosjekter</span>
          <span>Kontakt</span>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <div className="brand">Akerholt AS</div>
          <nav className="nav" aria-label="Hovedmeny">
            <a href="#om">Om meg</a>
            <a href="#portfolio">Portefølje</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>
    </>
  )
}
