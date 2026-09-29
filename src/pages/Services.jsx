import { useState, useRef, useEffect } from 'react'

const ENDPOINT = 'https://api.web3forms.com/submit'
// Web3Forms-nøkler er offentlige og skal ligge i frontend
const ACCESS_KEY = 'c712396e-e6e4-4419-9004-7b5ac140ba38'

const FREE_CHECK = 'Gratis nettsidesjekk'

const ICONS = {
  tool: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z" />,
  link: <><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></>,
  chart: <><path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-7" /><path d="M22 20H2" /></>,
}

const PACKAGES = [
  {
    title: 'Redesign & oppgradering',
    text: 'Modernisering av eksisterende nettside, ny mobiltilpasning og raskere lastetid.',
  },
  {
    title: 'Standard bedriftsside',
    text: 'Komplett ny nettside med opptil 6 undersider, SEO-grunnmur, kart og prosjektgalleri.',
    popular: true,
  },
  {
    title: 'Skreddersøm & spesial',
    text: 'Avanserte funksjoner, integrasjon mot fagsystemer, booking eller nettbutikk.',
  },
]

const SOFTWARE_ITEMS = [
  {
    title: 'Interne verktøy',
    text: 'Skreddersydde systemer for timeføring, bestilling, lager eller oversikt – i stedet for Excel-ark og papir.',
    icon: 'tool',
  },
  {
    title: 'Integrasjoner & automatisering',
    text: 'Få systemene dine til å snakke sammen, og la maskinen ta det repeterende arbeidet.',
    icon: 'link',
  },
  {
    title: 'Dashboards & rapporter',
    text: 'Samle tall fra ulike kilder på ett sted – oppdatert automatisk, tilgjengelig overalt.',
    icon: 'chart',
  },
]

const PLANS = [
  {
    title: 'Basis drift & sikkerhet',
    text: 'Sikker hosting, backup, DNS-overvåking og løpende oppdateringer.',
  },
  {
    title: 'Komplett partner',
    text: 'Alt fra Basis, pluss inntil 1 time arbeid i måneden (tekst, bilder, referanser) og prioritert support.',
  },
]

// Valgene i nedtrekksmenyen – samme grupper og navn som kortene på siden
const OPTION_GROUPS = [
  { label: 'Nettsider', options: PACKAGES.map((p) => p.title) },
  { label: 'Programvare & integrasjoner', options: SOFTWARE_ITEMS.map((p) => p.title) },
  { label: 'Drift & vedlikehold', options: PLANS.map((p) => p.title) },
  { label: 'Annet', options: [FREE_CHECK, 'Annet'] },
]

const REASONS = [
  { title: 'Rask og moderne', text: 'Bygget med React, Vite og moderne teknologi for kort lastetid.' },
  { title: 'Mobiltilpasset', text: 'Ser riktig ut på mobil, nettbrett og PC.' },
  { title: 'Rediger selv', text: 'Egen portal der du kan endre tekst og bilder uten å kontakte oss.' },
  { title: 'Synlig på Google', text: 'Strukturert for god lokal søkemotoroptimalisering.' },
]

function ServiceCard({ title, text, popular, icon, onSelect }) {
  return (
    <button type="button" className={`service-card ${popular ? 'service-card--popular' : ''}`} onClick={() => onSelect(title)}>
      {popular && <span className="service-flag">Mest populær</span>}
      {icon && (
        <span className="service-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {ICONS[icon]}
          </svg>
        </span>
      )}
      <span className="service-title">{title}</span>
      <span className="service-text">{text}</span>
      <span className="service-link">Be om tilbud <span aria-hidden="true">→</span></span>
    </button>
  )
}

// Egen nedtrekksmeny i stedet for <select>, så listen følger sidens design
function ServiceSelect({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e) => { if (!rootRef.current?.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const pick = (option) => {
    onChange(option)
    setOpen(false)
  }

  return (
    <div className={`dropdown ${open ? 'is-open' : ''}`} ref={rootRef}>
      <input type="hidden" name="tjeneste" value={value} />
      <button
        type="button"
        className="dropdown-toggle"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span>{value}</span>
        <svg className="dropdown-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="dropdown-menu" role="listbox">
          {OPTION_GROUPS.map((group) => (
            <div key={group.label} className="dropdown-group" role="group" aria-label={group.label}>
              <div className="dropdown-group-label">{group.label}</div>
              {group.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  role="option"
                  aria-selected={option === value}
                  className={`dropdown-option ${option === value ? 'is-selected' : ''}`}
                  onClick={() => pick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function QuoteForm({ service, setService }) {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setError('')
    const fd = new FormData(formRef.current)
    if (!fd.get('name')?.trim() || !fd.get('email')?.trim()) {
      setError('Fyll inn navn og e-post.')
      return
    }
    fd.append('subject', `Forespørsel: ${service}`)

    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { Accept: 'application/json' }, body: fd })
      const data = await res.json()
      if (!data.success) throw new Error(data.message || 'Web3Forms svarte ikke OK')
      setStatus('sent')
      formRef.current.reset()
    } catch {
      setStatus('error')
      setError('Klarte ikke sende akkurat nå. Prøv igjen, eller send e-post til post.akerholt@gmail.com.')
    }
  }

  if (status === 'sent') {
    return (
      <div className="quote-card quote-done">
        <h4>Takk for forespørselen!</h4>
        <p>Vi har mottatt den og tar kontakt med deg så snart som mulig, vanligvis innen én arbeidsdag.</p>
        <button type="button" className="btn secondary btn--sm" onClick={() => setStatus('idle')}>Send en ny forespørsel</button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="quote-card" noValidate>
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input type="hidden" name="from_name" value="Akerholt AS – Tilbudsskjema" />
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

      <div className="quote-grid">
        <div className="quote-field quote-field--full">
          <span>Hva gjelder det?</span>
          <ServiceSelect value={service} onChange={setService} />
        </div>
        <label className="quote-field">
          <span>Navn *</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label className="quote-field">
          <span>E-post *</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label className="quote-field">
          <span>Telefon</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="quote-field">
          <span>Nåværende nettside</span>
          <input name="nettside" placeholder="eksempel.no" />
        </label>
        <label className="quote-field quote-field--full">
          <span>Fortell kort om behovet</span>
          <textarea name="message" rows="5" />
        </label>
      </div>

      <div className="quote-submit">
        <button className="btn primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sender…' : 'Send forespørsel'}
        </button>
        {error && <span className="quote-error">{error}</span>}
      </div>
    </form>
  )
}

export default function ServicesPage() {
  const [service, setService] = useState('Standard bedriftsside')

  const selectService = (title) => {
    setService(title)
    document.getElementById('tilbud')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="section block">
      <div className="container">
        <h3 style={{ margin: '0 0 6px' }}>Tjenester</h3>
        <p className="section-subtitle">
          Nettsider og skreddersydd programvare for bedrifter.
        </p>

        <div className="service-intro">
          <strong>Får du oppdragene du fortjener?</strong>
          <p>
            De fleste kunder sjekker nettsiden din på mobilen før de tar kontakt. En treg eller utdatert
            side gjør at oppdragene går til konkurrentene. Vi hjelper deg med å snu det til din fordel.
          </p>
        </div>

        <div className="cert-group">
          <div className="cert-group-title">Nettsider</div>
          <div className="service-grid service-grid--3">
            {PACKAGES.map((p) => <ServiceCard key={p.title} {...p} onSelect={selectService} />)}
          </div>
        </div>

        <div className="cert-group">
          <div className="cert-group-title">Programvare & integrasjoner</div>
          <p className="service-group-lead">
            Mer enn en nettside? Vi utvikler programvare som sparer deg for tid og manuelt arbeid.
          </p>
          <div className="service-grid service-grid--3">
            {SOFTWARE_ITEMS.map((p) => <ServiceCard key={p.title} {...p} onSelect={selectService} />)}
          </div>
        </div>

        <div className="cert-group">
          <div className="cert-group-title">Drift & vedlikehold</div>
          <div className="service-grid service-grid--2">
            {PLANS.map((p) => <ServiceCard key={p.title} {...p} onSelect={selectService} />)}
          </div>
        </div>

        <div className="cert-group">
          <div className="cert-group-title">Hvorfor velge Akerholt AS?</div>
          <ul className="service-reasons">
            {REASONS.map((r) => (
              <li key={r.title}><strong>{r.title}</strong>{r.text}</li>
            ))}
          </ul>
        </div>

        <div className="service-cta">
          <h4>Ønsker du en gratis nettsidesjekk?</h4>
          <p>Send oss adressen til nettsiden din, så får du tre konkrete forbedringstips – helt uforpliktende.</p>
          <button type="button" className="btn primary" onClick={() => selectService(FREE_CHECK)}>Få gratis nettsidesjekk</button>
        </div>

        <div id="tilbud" className="quote">
          <div className="quote-intro">
            <h4>Be om tilbud</h4>
            <p>Fortell oss litt om hva du trenger, så får du et uforpliktende tilbud tilpasset din bedrift.</p>
            <p>Du kan også sende e-post direkte til <strong>post.akerholt@gmail.com</strong>.</p>
          </div>
          <QuoteForm service={service} setService={setService} />
        </div>
      </div>
    </section>
  )
}
