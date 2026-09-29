import { useEffect, useRef } from 'react'

// Diskret "kode-regn" i sidens farger. Tegnes på canvas, pauser når seksjonen ikke er synlig.
const GLYPHS = '{}<>/=;:()[]01+*&|!?#$.'.split('')
const WORDS = ['const', 'return', '=>', 'async', 'await', 'import', 'let', 'if', 'else', '</>', 'npm', 'git']
const COLORS = ['#3b82f6', '#22d3ee', '#a78bfa']
const FONT_SIZE = 15
const FRAME_MS = 70 // lavere tall = raskere regn

export default function CodeRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let columns = []
    let raf = 0
    let last = 0
    let visible = false

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.font = `${FONT_SIZE}px ui-monospace, SFMono-Regular, Consolas, monospace`

      const count = Math.ceil(width / (FONT_SIZE * 1.4))
      columns = Array.from({ length: count }, () => ({
        y: Math.random() * -height,
        speed: 0.6 + Math.random() * 0.8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    }

    const draw = (time) => {
      raf = requestAnimationFrame(draw)
      if (!visible || time - last < FRAME_MS) return
      last = time

      const { width, height } = canvas.getBoundingClientRect()
      // Halvgjennomsiktig "visk ut" gir halene bak hvert tegn
      ctx.fillStyle = 'rgba(6, 12, 30, 0.14)'
      ctx.fillRect(0, 0, width, height)

      columns.forEach((col, i) => {
        const x = i * FONT_SIZE * 1.4
        const text = Math.random() < 0.04
          ? WORDS[Math.floor(Math.random() * WORDS.length)]
          : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        ctx.fillStyle = col.color
        ctx.fillText(text, x, col.y)

        col.y += FONT_SIZE * col.speed
        if (col.y > height + 40 && Math.random() > 0.97) {
          col.y = -20
          col.color = COLORS[Math.floor(Math.random() * COLORS.length)]
        }
      })
    }

    resize()
    window.addEventListener('resize', resize)

    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting })
    io.observe(canvas)

    if (!reduceMotion) raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="code-rain" aria-hidden="true" />
}
