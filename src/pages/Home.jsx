// src/pages/Home.jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import TechStack from '../components/TechStack.jsx'
import Contact from '../components/Contact.jsx'

export default function Home(){
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#','')
    const el = document.getElementById(id)
    if (el) {
      // vent én tick så DOM er klar før vi scroller
      setTimeout(() => el.scrollIntoView({ behavior:'smooth', block:'start' }), 0)
    }
  }, [hash])

  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Contact />
    </>
  )
}
