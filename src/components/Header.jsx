import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    if (open) setOpen(false)
  }, [pathname])

  // Hjelper for å scrolle til ankere på forsiden
  const scrollToId = (id) => {
    setOpen(false)
    if (pathname !== '/') {
      window.location.href = `/#${id}`
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`header ${open ? 'is-open' : ''}`}>
      <div className="container header__row">
        <Link to="/" className="brand" aria-label="Akerholt AS – hjem">
          {/* Liten gradient-A som ikon */}
          <img
            src="/images/hero/A-favicon.png"
            alt="Akerholt AS logo"
            className="brand-logo"
          />

          {/* To linjer tekst: Akerholt AS + WEB DEVELOPMENT */}
          <div className="brand-text">
            <span className="brand-line-main">Akerholt AS</span>
            <span className="brand-line-sub">WEB DEVELOPMENT</span>
          </div>
        </Link>

        <nav className="nav nav--desktop" aria-label="Hovedmeny">
          <button className="aslink" onClick={() => scrollToId('om')}>Om meg</button>
          <NavLink to="/portfolio">Portefølje</NavLink>
          <NavLink to="/lisenser">Lisenser</NavLink>
          <a className="btn primary btn--sm" href="mailto:post.akerholt@gmail.com">Ta kontakt</a>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Åpne/lukk meny"
          aria-expanded={open ? 'true' : 'false'}
          onClick={() => setOpen(!open)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      <nav className="nav-mobile" aria-label="Mobilmeny">
        <button className="aslink" onClick={() => scrollToId('om')}>Om meg</button>
        <NavLink to="/portfolio">Portefølje</NavLink>
        <NavLink to="/lisenser">Lisenser</NavLink>
        <a className="aslink" href="mailto:post.akerholt@gmail.com">Ta kontakt</a>
      </nav>
    </header>
  )
}
