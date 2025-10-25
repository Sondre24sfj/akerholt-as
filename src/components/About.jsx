export default function About() {
  return (
    <section className="section" id="om">
      <div className="container about">
        <div className="photo">
          <img
            src="/images/hero/om-meg.jpg"
            alt="Arbeid ved laptop"
            loading="lazy"
          />
        </div>
        <div>
          <h3>Om meg</h3>
          <p>
            Jeg er en løsningsorientert fullstack-utvikler med erfaring fra React / Node
            og moderne sky-miljøer. Jeg lager solide og lettstelte systemer med fokus
            på ytelse, tilgjengelighet og design.
          </p>
          <p>
            Jeg liker prosjekter der jeg kan ta helheten – fra idé og prototyping
            i Figma til implementering, drift og videreutvikling.
          </p>
          <p>
            Ta kontakt hvis du vil snakke om en ny løsning for selskapet ditt
            – eller oppgraderingen av den du allerede har.
          </p>
        </div>
      </div>
    </section>
  );
}
