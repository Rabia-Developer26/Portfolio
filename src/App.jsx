import { useLayoutEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Measures the actual rendered ring size + gap from CSS (instead of
// duplicating those numbers here), so index.css stays the single
// source of truth and can never drift out of sync with this file.
function useSpineRingCount() {
  const containerRef = useRef(null)
  const ringRef = useRef(null)
  const [count, setCount] = useState(1)

  useLayoutEffect(() => {
    function measure() {
      const container = containerRef.current
      const ring = ringRef.current
      if (!container || !ring) return

      const containerHeight = container.clientHeight
      const ringHeight = ring.getBoundingClientRect().height
      const gap = parseFloat(getComputedStyle(container).rowGap) || 0
      const slot = ringHeight + gap
      if (slot <= 0) return

      // +gap accounts for the last ring not needing a trailing gap
      const next = Math.max(1, Math.floor((containerHeight + gap) / slot))
      setCount((prev) => (prev === next ? prev : next))
    }

    measure()

    const ro = new ResizeObserver(measure)
    ro.observe(containerRef.current)
    window.addEventListener('resize', measure)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  return { containerRef, ringRef, count }
}

function NotebookSpine() {
  const { containerRef, ringRef, count } = useSpineRingCount()
  const rings = Array.from({ length: count })

  return (
    <div className="notebook-spine" aria-hidden="true" ref={containerRef}>
      {rings.map((_, i) => (
        <span key={i} className="spine-ring" ref={i === 0 ? ringRef : null} />
      ))}
    </div>
  )
}

export default function App() {
  return (
    <div>
      <NotebookSpine />
      <div className="page-shell">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
