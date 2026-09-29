import { useEffect } from 'react'

// Elementer som toner inn når de scrolles inn i bildet. Hero er bevisst utelatt.
const SELECTOR = [
  '.section h3',
  '.section-subtitle',
  '.about .photo',
  '.about p',
  '.service-intro',
  '.cert-group-title',
  '.service-group-lead',
  '.service-card',
  '.cert-card',
  '.portfolio-grid .card',
  '.techitem',
  '.service-reasons li',
  '.service-cta',
  '.quote-intro',
  '.quote-card',
].join(',')

export default function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target
        el.classList.add('is-visible')
        io.unobserve(el)
        // Fjern forsinkelsen etterpå, ellers blir hover-effekter trege
        setTimeout(() => { el.style.transitionDelay = '' }, 1200)
      })
    }, { rootMargin: '0px 0px -40px 0px' })

    // Nye elementer (sidebytte, innhold fra Sanity) plukkes opp av MutationObserver
    const scan = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (el.classList.contains('is-visible')) return
        // Allerede merket (fra en tidligere observer, f.eks. StrictMode/HMR): bare observer på nytt
        if (el.classList.contains('reveal')) {
          io.observe(el)
          return
        }
        // Det som allerede er på skjermen skal aldri skjules – bare det under folden toner inn
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('reveal', 'is-visible')
          return
        }
        // Små forsinkelser i grupper gir en "bølge" i stedet for at alt kommer samtidig
        const index = [...el.parentElement.children].indexOf(el)
        el.style.transitionDelay = `${Math.min(index, 8) * 60}ms`
        el.classList.add('reveal')
        io.observe(el)
      })
    }

    scan()
    const mo = new MutationObserver(scan)
    mo.observe(document.getElementById('root'), { childList: true, subtree: true })

    return () => { io.disconnect(); mo.disconnect() }
  }, [])
}
