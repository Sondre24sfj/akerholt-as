import { useState, useEffect } from 'react'
import { client } from '../lib/sanity.js'

const FALLBACK = [
  {
    _id: 'wike',
    title: 'WIKE & Co – Maskin entreprenør',
    description: 'Nettside for entreprenør.',
    url: 'https://wikeco.no',
    image: '/images/portfolio/Wike-logo.png',
    badges: ['WordPress', 'HTML', 'CSS'],
  },
  {
    _id: 'stall',
    title: 'Stall og Landbruksflis AS – Infoside',
    description: 'Infoside med kontaktskjema og info om flis.',
    url: 'https://landbruksflis.no',
    image: '/images/portfolio/Stall-logo.png',
    badges: ['React', 'JavaScript', 'Next.js'],
  },
  {
    _id: 'github',
    title: 'GitHub',
    description: 'En samling av åpne prosjekter og kode.',
    url: 'https://github.com/Sondre24sfj',
    image: '/images/portfolio/github-logo.png',
    badges: ['React', 'HTML', 'CSS', 'Next.js', 'JavaScript'],
  },
]

function badgeClass(badge) {
  const map = { React: 'react', JavaScript: 'js', 'Next.js': 'next', HTML: 'html', CSS: 'css', WordPress: 'wp', TypeScript: 'ts' }
  return `badge badge--${map[badge] ?? 'html'}`
}

export default function PortfolioPage() {
  const [items, setItems] = useState(FALLBACK)

  useEffect(() => {
    client
      .fetch(`*[_type == "a_portfolio"] | order(order asc) {
        _id, title, description, url, badges,
        "image": image.asset->url
      }`)
      .then((data) => { if (data?.length) setItems(data) })
      .catch(() => {})
  }, [])

  return (
    <section className="section block">
      <div className="container">
        <h3 style={{ margin: '0 0 10px' }}>Portefølje</h3>
        <p style={{ color: '#b5c0e0', margin: '0 0 12px' }}>
          Et utvalg av prosjekter jeg har jobbet med, med teknologier og stack.
        </p>

        <div className="portfolio-grid">
          {items.map((item) => (
            <a
              key={item._id}
              className="card card-link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="thumb">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="body">
                <div className="title">{item.title}</div>
                <p className="text">{item.description}</p>
                <div className="badges">
                  {item.badges?.map((b) => (
                    <span key={b} className={badgeClass(b)}>{b}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
