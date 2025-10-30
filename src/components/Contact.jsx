import { useState, useRef } from "react";

const ENDPOINT = "https://formsubmit.co/ajax/post.akerholt@gmail.com";

export default function Contact(){
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");  // idle | sending | sent | error
  const [error, setError] = useState("");

  async function onSubmit(e){
    e.preventDefault();
    setError("");

    const fd = new FormData(formRef.current);

    // Enkle valideringer
    const name  = (fd.get("name") || "").trim();
    const email = (fd.get("email") || "").trim();
    const msg   = (fd.get("message") || "").trim();

    if (!name || !email) {
      setError("Skriv fullt navn og e-post.");
      return;
    }
    if (msg.split(/\s+/).filter(Boolean).length < 5) {
      setError("Meldingen må være minst 5 ord.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (!res.ok) throw new Error("FormSubmit svarte ikke OK");
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      setStatus("error");
      setError("Klarte ikke sende akkurat nå. Prøv igjen om litt.");
    }
  }

  return (
    <section className="section contact-section" id="kontakt">
      <div className="container contact">
        {/* Tekst/intro til venstre (kommer først på mobil) */}
        <div className="left">
          <h3>Ta kontakt</h3>
          <p>Fortell kort hva du trenger hjelp med, så svarer jeg som regel samme dag.</p>
          <p>Du kan også sende e-post direkte: <strong>post.akerholt@gmail.com</strong></p>
          <p className="note">* Jeg lagrer ikke dataene dine i appen. Skjemaet sender en e-post til meg.</p>
        </div>

        {/* Selve skjemaet som et “kort” */}
        <form ref={formRef} onSubmit={onSubmit} className="contact-card" autoComplete="on" noValidate>
          {/* Skjulte felt anbefalt av FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" style={{display:"none"}} tabIndex="-1" autoComplete="off" />

          <div className="grid">
            <div className="field">
              <label htmlFor="name">Fullt navn <span className="req">*</span></label>
              <input id="name" className="input" name="name" required placeholder="Fornavn og etternavn" />
            </div>

            <div className="field">
              <label htmlFor="email">E-post <span className="req">*</span></label>
              <input id="email" className="input" type="email" name="email" required placeholder="din@epost.no" />
            </div>

            <div className="field">
              <label htmlFor="phone">Telefon (valgfritt)</label>
              <input id="phone" className="input" name="phone" placeholder="+47 123 45 678" />
            </div>

            <div className="field">
              <label htmlFor="subject">Emne <span className="req">*</span></label>
              <input id="subject" className="input" name="subject" required placeholder="Hva gjelder det?" />
            </div>

            <div className="field field--full">
              <label htmlFor="message">Melding <span className="req">*</span></label>
              <textarea id="message" className="textarea" name="message" required placeholder="Skriv meldingen din (minst 5 ord)"></textarea>
            </div>
          </div>

          <div className="submitrow">
            <button className="btn primary contact-submit" type="submit" disabled={status==="sending"}>
              {status==="sending" ? "Sender..." : "Send melding"}
            </button>
            {status==="error" && <span className="form-msg form-msg--error">⚠ {error}</span>}
            {status==="sent"  && <span className="form-msg form-msg--ok">✅ Takk! Meldingen er sendt.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
