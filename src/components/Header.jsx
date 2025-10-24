import { useState, useEffect } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)

  // Lukk menyen når man resizer over breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900 && open) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  // Lukk menyen ved klikk på lenke
  const onNavClick = () => setOpen(false)

  return (
    <header className={`header ${open ? 'is-open' : ''}`}>
      <div className="container header__row">
        <a href="#" className="brand" aria-label="Akerholt AS – hjem">Akerholt AS</a>

        {/* Desktop-nav */}
        <nav className="nav nav--desktop" aria-label="Hovedmeny">
          <a href="#om">Om meg</a>
          <a href="#portfolio">Portefølje</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        {/* Mobil: toggle-knapp */}
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

      {/* Mobil-meny (slår inn < 900px) */}
      <nav className="nav-mobile" aria-label="Mobilmeny">
        <a href="#om" onClick={onNavClick}>Om meg</a>
        <a href="#portfolio" onClick={onNavClick}>Portefølje</a>
        <a href="#kontakt" onClick={onNavClick}>Kontakt</a>
      </nav>
    </header>
  )
}
