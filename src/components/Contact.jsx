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
        headers: { Accept: "application/json" },   // Viktig for FormSubmit
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
    <section className="section" id="kontakt">
      <div className="container contact">
        <div className="left">
          <h3>Ta kontakt</h3>
          <p>Fortell kort hva du trenger hjelp med, så svarer jeg som regel samme dag.</p>
          <p>Du kan også sende e-post direkte: <strong>post.akerholt@gmail.com</strong></p>
          <p className="note">* Jeg lagrer ikke dataene dine i appen. Skjemaet sender en e-post til meg.</p>
        </div>

        <form ref={formRef} onSubmit={onSubmit} className="right" autoComplete="on">
          {/* Skjulte felt anbefalt av FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" style={{display:"none"}} tabIndex="-1" autoComplete="off" />

          <div className="formrow">
            <input className="input" name="name"  placeholder="Fullt navn *" required />
            <input className="input" name="email" type="email" placeholder="E-post *" required />
          </div>

          <div className="formrow">
            <input className="input" name="phone"  placeholder="Telefon (valgfritt)" />
            <input className="input" name="subject" placeholder="Emne *" required />
          </div>

          <textarea className="textarea" name="message" placeholder="Melding * (min. 5 ord)" required />

          <div className="submitrow">
            <button className="btn primary" type="submit" disabled={status==="sending"}>
              {status==="sending" ? "Sender..." : "Send melding"}
            </button>
            {status==="error" && <span style={{marginLeft:12,color:"#fca5a5"}}>⚠ {error}</span>}
            {status==="sent"  && <span style={{marginLeft:12,color:"#34d399"}}>✅ Takk! Meldingen er sendt.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
