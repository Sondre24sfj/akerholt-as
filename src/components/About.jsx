import { useState, useEffect } from 'react'
import { client } from '../lib/sanity.js'

const FALLBACK_PARAGRAPHS = [
  'Vi er et løsningsorientert utviklingsselskap med erfaring fra React / Node og moderne sky-miljøer. Vi lager solide og lettstelte systemer med fokus på ytelse, tilgjengelighet og design.',
  'Vi liker prosjekter der vi kan ta helheten – fra idé og prototyping i Figma til implementering, drift og videreutvikling.',
  'Ta kontakt hvis du vil snakke om en ny løsning for selskapet ditt – eller oppgraderingen av den du allerede har.',
]

export default function About() {
  const [paragraphs, setParagraphs] = useState(FALLBACK_PARAGRAPHS)
  const [photo, setPhoto] = useState('/images/hero/om-meg.jpg')

  useEffect(() => {
    client
      .fetch(`*[_type == "a_settings"][0]{ aboutParagraphs, "photo": aboutPhoto.asset->url }`)
      .then((data) => {
        if (!data) return
        if (data.aboutParagraphs?.length) setParagraphs(data.aboutParagraphs)
        if (data.photo) setPhoto(data.photo)
      })
      .catch(() => {})
  }, [])

  return (
    <section className="section" id="om">
      <div className="container about">
        <div className="photo">
          <img src={photo} alt="Arbeid ved laptop" loading="lazy" />
        </div>
        <div>
          <h3>Om oss</h3>
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </section>
  )
}
