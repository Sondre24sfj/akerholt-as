import { useState } from 'react'

const ENDPOINT = 'https://formspree.io/f/XYZABCD'; // <-- bytt til din Formspree URL

export default function Contact(){
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  function wordCount(txt){
    return txt.trim().split(/\s+/).filter(Boolean).length
  }

  async function onSubmit(e){
    e.preventDefault()
    setError('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    // === Enkel validering ===
    const fullNameOk = /\S+\s+\S+/.test(data.name || '')   // fornavn + etternavn
    const emailOk    = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '')
    const msgOk      = wordCount(data.message || '') >= 5

    if(!fullNameOk){ setError('Skriv fullt navn (fornavn og etternavn).'); return }
    if(!emailOk){ setError('Skriv en gyldig e-postadresse.'); return }
    if(!msgOk){ setError('Meldingen må være minst 5 ord.'); return }

    setStatus('sending')

    try{
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
      if(!res.ok){
        const j = await res.json().catch(()=>({}))
        throw new Error(j?.error || 'Ukjent feil')
      }
      setStatus('sent'); form.reset()
    }catch(err){
      console.error(err)
      setStatus('error')
      setError('Klarte ikke sende akkurat nå. Prøv igjen om litt.')
    }
  }

  return (
    <section className="section contact-section" id="kontakt">
      <div className="container contact">
        <div className="left">
          <h3>Ta kontakt</h3>
          <p>
            Fortell kort hva du trenger hjelp med, så svarer jeg som regel samme dag.
            Du kan også sende e-post direkte: <strong>post.akerholt@gmail.com</strong>
          </p>
          
        </div>

        <form onSubmit={onSubmit} className="right" autoComplete="on">
          {/* Emne i e-posthodet hos Formspree */}
          <input type="hidden" name="_subject" value="Kontakt via akerholt-as.no" />

          <div className="formrow">
            <div className="field">
              <label>Fullt navn<span className="req">*</span></label>
              <input className="input" name="name" placeholder="Fornavn Etternavn" required />
            </div>
            <div className="field">
              <label>E-post<span className="req">*</span></label>
              <input className="input" type="email" name="email" placeholder="navn@domene.no" required />
            </div>
          </div>

          <div className="formrow">
            <div className="field">
              <label>Telefon (valgfritt)</label>
              <input className="input" name="phone" placeholder="+47 9x xx xx xx" />
            </div>
            <div className="field">
              <label>Emne<span className="req">*</span></label>
              <input className="input" name="topic" placeholder="Hva gjelder det?" required />
            </div>
          </div>

          <div className="field" style={{marginTop:14}}>
            <label>Melding<span className="req">*</span> <small>(min. 5 ord)</small></label>
            <textarea className="textarea" name="message" placeholder="Skriv meldingen din her ..." required />
          </div>

          <div className="submitrow">
            <button className="btn primary" type="submit" disabled={status==='sending'}>
              {status==='sending' ? 'Sender…' : 'Send melding'}
            </button>
            {status==='sent'   && <span className="note" style={{marginLeft:10,color:'#9ae6b4'}}>✅ Sendt!</span>}
            {status==='error'  && <span className="note" style={{marginLeft:10,color:'#fecaca'}}>⚠️ {error}</span>}
            {status==='idle' && error && <span className="note" style={{marginLeft:10,color:'#fecaca'}}>⚠️ {error}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
