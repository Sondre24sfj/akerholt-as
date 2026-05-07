const certs = [
  {
    group: 'Fortinet',
    items: [
      {
        name: 'Fortinet Certified Associate Cybersecurity',
        abbr: 'FCA',
        issuer: 'Fortinet',
        status: 'completed',
        img: '/images/certs/fortinet-fca.png',
        tags: ['Nettverkssikkerhet', 'Trusselanalyse', 'Security Fabric'],
      },
      {
        name: 'Fortinet Certified Fundamentals Cybersecurity',
        abbr: 'FCF',
        issuer: 'Fortinet',
        status: 'completed',
        img: '/images/certs/fortinet-fcf.png',
        tags: ['Cybersikkerhet grunnlag', 'Trussellandskap', 'Sikkerhetskonsepter'],
      },
      {
        name: 'NSE 3 – Network Security Associate',
        abbr: 'NSE 3',
        issuer: 'Fortinet',
        status: 'completed',
        img: '/images/certs/nse3.png',
        tags: ['Fortinet-produkter', 'Security Fabric', 'Løsningsarkitektur'],
      },
      {
        name: 'NSE 2 – Network Security Associate',
        abbr: 'NSE 2',
        issuer: 'Fortinet',
        status: 'completed',
        img: '/images/certs/nse2.png',
        tags: ['Cybertrusler', 'Angrepsvektorer', 'Sikkerhetsverktøy'],
      },
      {
        name: 'NSE 1 – Network Security Associate',
        abbr: 'NSE 1',
        issuer: 'Fortinet',
        status: 'completed',
        img: '/images/certs/nse1.png',
        tags: ['Nettverksgrunnlag', 'Sikkerhetsprinsipper', 'Cyberhygiene'],
      },
      {
        name: 'Getting Started in Cybersecurity 3.0',
        abbr: 'NSE 1',
        issuer: 'Fortinet',
        status: 'completed',
        img: '/images/certs/nse1-get.png',
        tags: ['Intro til cybersikkerhet', 'Grunnleggende begreper', 'Digital sikkerhet'],
      },
      {
        name: 'Technical Introduction to Cybersecurity 3.0',
        abbr: 'NSE 2',
        issuer: 'Fortinet',
        status: 'completed',
        img: '/images/certs/nse2.png',
        tags: ['Angrepstyper', 'Malware & phishing', 'Forsvarsteknologier'],
      },
      {
        name: 'Introduction to the Threat Landscape 3.0',
        abbr: 'NSE 3',
        issuer: 'Fortinet',
        status: 'completed',
        img: '/images/certs/nse3.png',
        tags: ['Trusselaktører', 'APT & ransomware', 'Motivasjon & metoder'],
      },
      {
        name: 'NSE 4 – Network Security Professional',
        abbr: 'NSE 4',
        issuer: 'Fortinet',
        status: 'progress',
        img: '/images/certs/nse4.png',
        tags: ['FortiGate', 'Brannmur & VPN', 'Konfigurasjon & drift'],
      },
    ],
  },
  {
    group: 'Linux Foundation',
    items: [
      {
        name: 'LFS158 – Introduction to Kubernetes',
        abbr: 'K8s',
        issuer: 'The Linux Foundation',
        status: 'completed',
        img: '/images/certs/linux-lfs158.png',
        tags: ['Container-orkestrering', 'Pods & deployments', 'Services & skalering'],
      },
      {
        name: 'LFS101 – Introduction to Linux',
        abbr: 'Linux',
        issuer: 'The Linux Foundation',
        status: 'completed',
        img: '/images/certs/linux-lfs101.png',
        tags: ['Kommandolinje', 'Filsystem & rettigheter', 'Shell-scripting'],
      },
    ],
  },
]

function CertCard({ name, abbr, issuer, status, img, tags }) {
  return (
    <div className={`cert-card ${status === 'progress' ? 'cert-card--progress' : ''}`}>
      <div className="cert-badge-wrap">
        {img
          ? <img src={img} alt={name} className="cert-badge-img" onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }} />
          : null
        }
        <div className="cert-badge-fallback" style={{ display: img ? 'none' : 'flex' }}>
          <span>{abbr}</span>
        </div>
      </div>
      <div className="cert-info">
        <div className="cert-name">{name}</div>
        <div className="cert-issuer">{issuer}</div>
        {tags && (
          <ul className="cert-tags-list">
            {tags.map(t => <li key={t}>{t}</li>)}
          </ul>
        )}
        {status === 'progress' && (
          <span className="cert-tag cert-tag--progress">Pågår</span>
        )}
        {status === 'completed' && (
          <span className="cert-tag cert-tag--done">Fullført</span>
        )}
      </div>
    </div>
  )
}

export default function LicensesPage() {
  return (
    <section className="section block">
      <div className="container">
        <h3 style={{ margin: '0 0 6px' }}>Lisenser &amp; Sertifiseringer</h3>
        <p className="section-subtitle">
          Kurs og sertifiseringer innen cybersikkerhet, nettverk og infrastruktur.
        </p>

        {certs.map(group => (
          <div key={group.group} className="cert-group">
            <div className="cert-group-title">{group.group}</div>
            <div className="cert-grid">
              {group.items.map(c => (
                <CertCard key={c.name} {...c} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
