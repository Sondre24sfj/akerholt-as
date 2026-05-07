import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import TechStack from '../components/TechStack.jsx'

export default function Home(){
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#','')
    const el = document.getElementById(id)
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior:'smooth', block:'start' }), 0)
    }
  }, [hash])

  return (
    <>
      <Hero />
      <About />
      <TechStack />
    </>
  )
}
