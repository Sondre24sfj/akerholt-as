import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (open) setOpen(false);
  }, [pathname]);

  // Hjelper for å scrolle til ankere på forsiden
  const scrollToId = (id) => {
    if (pathname !== "/") {
      // Gå hjem først; Home håndterer scroll på mount via hash
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`header ${open ? "is-open" : ""}`}>
      <div className="container header__row">
        {/* Logo + tekst */}
        <Link to="/" className="brand" aria-label="Akerholt AS – hjem">
          <img
            src="/images/hero/Akerholt-logo.png"
            alt="Akerholt AS logo"
            className="brand__logo"
          />
          <span className="brand__text">
            <span className="brand__title">Akerholt AS</span>
            <span className="brand__subtitle">Web development</span>
          </span>
        </Link>

        <nav className="nav nav--desktop" aria-label="Hovedmeny">
          <button className="aslink" onClick={() => scrollToId("om")}>
            Om meg
          </button>
          <NavLink to="/portfolio">Portefølje</NavLink>
          <button className="aslink" onClick={() => scrollToId("kontakt")}>
            Kontakt
          </button>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Åpne/lukk meny"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen(!open)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      <nav className="nav-mobile" aria-label="Mobilmeny">
        <button className="aslink" onClick={() => scrollToId("om")}>
          Om meg
        </button>
        <NavLink to="/portfolio">Portefølje</NavLink>
        <button className="aslink" onClick={() => scrollToId("kontakt")}>
          Kontakt
        </button>
      </nav>
    </header>
  );
}
