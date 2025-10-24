import { useState } from 'react'

/**
 * Kontaktskjema – fungerer umiddelbart via FormSubmit (gratis, ingen konto).
 * Første innsending trenger en e-postbekreftelse fra FormSubmit (one-time).
 * Vi sender som AJAX (application/json) så brukeren blir på siden.
 *
 * Vil du bytte til Formspree senere:
 *  - Lag et form i Formspree og få endepunktet (f.eks. https://formspree.io/f/xxxx)
 *  - Sett const ENDPOINT = 'https://formspree.io/f/xxxx'
 *  - Body/felt kan beholdes like.
 */
const ENDPOINT = 'https://formsubmit.co/ajax/post.akerholt@gmail.com'

export default function Contact(){
  const [status,setStatus] = useState('idle')
  const [error,setError] = useState('')

  async function onSubmit(e){
    e.preventDefault()
    setStatus('sending'); setError('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try{
      const res = await fetch(ENDPOINT,{
        method:'POST',
        headers:{ 'Content-Type':'application/json', 'Accept':'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || '',
          message: data.message
        })
      })
      if(!res.ok) throw new Error('Feil ved sending')
      setStatus('sent'); form.reset()
    }catch{
      setStatus('error'); setError('Klarte ikke sende akkurat nå. Prøv igjen om litt.')
    }
  }

  return (
    <section className="section" id="kontakt">
      <div className="container">
        <h3 style={{margin:'0 0 12px'}}>Ta kontakt</h3>

        <div className="contact">
          <div className="left">
            <p>
              Fortell kort hva du trenger hjelp med, så svarer jeg som regel samme dag.
              Du kan også sende e-post direkte: <strong>post.akerholt@gmail.com</strong>
            </p>
            <p className="note">* Jeg lagrer ikke dataene dine i appen. Skjemaet sender en e-post til meg.</p>
          </div>

          <form onSubmit={onSubmit} className="right" autoComplete="on">
            <div className="formrow">
              <input className="input" name="name" placeholder="Fullt navn" required />
              <input className="input" type="email" name="email" placeholder="E-post" required />
            </div>
            <div className="formrow" style={{marginTop:14}}>
              <input className="input" type="tel" name="phone" placeholder="Telefon (valgfritt)" />
              <input className="input" name="subject" placeholder="Emne" required />
            </div>
            <div style={{marginTop:14}}>
              <textarea className="textarea" name="message" placeholder="Melding" required />
            </div>

            <div className="submitrow">
              <button className="btn primary" type="submit" disabled={status==='sending'}>
                {status==='sending' ? 'Sender...' : 'Send melding'}
              </button>
              {status==='sent' && <span style={{marginLeft:12,color:'#059669'}}>Takk! Melding sendt ✅</span>}
              {status==='error' && <span style={{marginLeft:12,color:'#dc2626'}}>{error}</span>}
            </div>

            {/* FormSubmit anbefaler følgende skjulte felt om du senere vil bruke form-post direkte:
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
            */}
          </form>
        </div>
      </div>
    </section>
  )
}
