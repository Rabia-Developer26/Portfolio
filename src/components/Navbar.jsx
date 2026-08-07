import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { profile } from '../data'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(6,6,5,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--ink-line)' : '1px solid transparent',
        transition: 'all 0.2s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 76,
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontStyle: 'italic',
            fontSize: 20,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            color: 'var(--chalk)',
          }}
        >
          <span className="logo-ring">RT</span>
          {profile.name}
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 22 }} className="nav-desktop">
          {LINKS.map((l, i) => (
            <span key={l.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 22 }}>
              {i > 0 && <span style={{ color: 'var(--sage-dim)', fontSize: 12 }}>&middot;</span>}
              <a href={l.href} className="nav-link">
                {l.label}
              </a>
            </span>
          ))}
          <a href="#contact" className="btn btn-primary">
            Let's Talk <ArrowRight size={14} />
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="nav-toggle"
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid var(--ink-line)',
            borderRadius: 4,
            padding: 8,
            color: 'var(--chalk)',
          }}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingBottom: 20 }}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                padding: '12px 4px',
                borderBottom: '1px solid var(--ink-line)',
                color: 'var(--sage)',
                textDecoration: 'none',
              }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary" style={{ marginTop: 10, justifyContent: 'center' }}>
            Let's Talk <ArrowRight size={14} />
          </a>
        </div>
      )}

      {/* gold scroll-progress thread */}
      <div className="scroll-thread" style={{ transform: `scaleX(${progress})` }} />

      <style>{`
        .logo-ring {
          width: 30px;
          height: 30px;
          border: 1.5px solid var(--brass);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-style: normal;
          font-weight: 700;
          color: var(--brass-soft);
          flex-shrink: 0;
        }
        .scroll-thread {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--brass-dim), var(--brass-soft));
          transform-origin: left;
          transition: transform 0.1s linear;
        }
        .nav-link {
          position: relative;
          display: inline-flex;
          align-items: baseline;
          gap: 6px;
          font-size: 14px;
          color: var(--sage);
          text-decoration: none;
          transition: color 0.25s var(--ease);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, var(--brass), var(--brass-soft));
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s var(--ease);
        }
        .nav-link:hover {
          color: var(--chalk);
        }
        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        @media (max-width: 780px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: inline-flex !important; }
        }
      `}</style>
    </header>
  )
}
