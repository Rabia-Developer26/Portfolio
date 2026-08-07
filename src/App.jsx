import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function NotebookSpine() {
  const rings = Array.from({ length: 22 })
  return (
    <div className="notebook-spine" aria-hidden="true">
      {rings.map((_, i) => (
        <span key={i} className="spine-ring" />
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
