import { useEffect, useState } from 'react'
import { ArrowRight, MapPin } from 'lucide-react'
import { profile } from '../data'

const BUILD_COUNT = 26

export default function Hero() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const duration = 1400
    const delay = 500
    let raf

    const tick = (now) => {
      const elapsed = now - start - delay
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick)
        return
      }
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * BUILD_COUNT))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="top" style={{ paddingTop: 56, paddingBottom: 90 }}>
      <div
        className="container hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: 40,
          alignItems: 'center',
        }}
      >
        <div style={{ animation: 'fadeUp 0.8s var(--ease) both' }}>
          <span className="tag-label">Currently Taking New Projects</span>

          <h1
            className="shimmer-text"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 6vw, 66px)',
              lineHeight: 1.03,
              fontWeight: 600,
              margin: '22px 0 0',
              letterSpacing: '-0.01em',
              animation: 'fadeUp 0.8s var(--ease) both 0.08s',
            }}
          >
            {profile.name}
          </h1>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              marginTop: 18,
              animation: 'fadeUp 0.8s var(--ease) both 0.16s',
            }}
          >
            {profile.titles.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'var(--brass-soft)',
                  border: '1px solid var(--brass-dim)',
                  borderRadius: 20,
                  padding: '5px 12px',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <p
            style={{
              color: 'var(--sage)',
              fontSize: 17.5,
              lineHeight: 1.75,
              marginTop: 24,
              maxWidth: 520,
              animation: 'fadeUp 0.8s var(--ease) both 0.24s',
            }}
          >
            I design and build fast, pixel-perfect Shopify storefronts and
            websites that convert browsers into buyers — with a process
            built for clients who want it done right, the first time.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 12,
              marginTop: 34,
              flexWrap: 'wrap',
              animation: 'fadeUp 0.8s var(--ease) both 0.32s',
            }}
          >
            <a href="#contact" className="btn btn-primary">
              Start your project <ArrowRight size={15} />
            </a>
            <a href="#projects" className="btn btn-ghost">
              See the work
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 42,
              color: 'var(--sage-dim)',
              fontFamily: 'var(--font-mono)',
              fontSize: 12.5,
              animation: 'fadeUp 0.8s var(--ease) both 0.4s',
            }}
          >
            <MapPin size={14} />
            {profile.location}
          </div>
        </div>

        {/* Signature element: a hand-written price / swing tag, hung and swinging */}
        <div className="hero-tag-wrap" style={{ animation: 'fadeUp 0.9s var(--ease) both 0.2s' }}>
          <span className="sparkle" style={{ top: '4%', left: '8%', animationDelay: '0.2s' }} />
          <span className="sparkle" style={{ top: '18%', right: '2%', animationDelay: '1.4s' }} />
          <span className="sparkle" style={{ bottom: '12%', left: '0%', animationDelay: '2.3s' }} />

          <div className="tag-swing">
            <div className="tag-string" />
            <div className="tag-card">
              <div className="tag-glint" />
              <div className="tag-hole" />
              <div className="tag-eyebrow">FRONT · OF · STORE</div>
              <div className="tag-role">Shopify Theme
                <br />Developer</div>
              <div className="tag-divider" />
              <div className="tag-row">
                <span>Stack</span>
                <span>Shopify · JS · CSS</span>
              </div>
              <div className="tag-row">
                <span>Builds shipped</span>
                <span>{count}</span>
              </div>
              <div className="tag-row">
                <span>Turnaround</span>
                <span>Pixel-perfect</span>
              </div>
              <div className="tag-stamp">
                <span className="stamp-dot" />
                CURRENTLY TAKING ORDERS
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-tag-wrap { order: -1; display: flex; justify-content: center; margin-bottom: 12px; }
        }

        .hero-tag-wrap {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .tag-swing {
          transform-origin: top center;
          animation: swing 5.5s ease-in-out infinite;
          width: 100%;
          max-width: 300px;
        }

        .tag-string {
          width: 1.5px;
          height: 46px;
          background: linear-gradient(var(--brass-dim), var(--brass));
          margin: 0 auto;
        }

        .tag-card {
          position: relative;
          background: var(--paper);
          color: var(--ink-on-paper);
          border-radius: 4px 22px 4px 4px;
          padding: 26px 24px 22px;
          box-shadow: 0 30px 60px -24px rgba(0,0,0,0.6), 0 0 40px -18px rgba(201, 164, 76, 0.35);
          overflow: hidden;
        }

        .tag-glint {
          position: absolute;
          top: -20%;
          left: -20%;
          width: 40%;
          height: 160%;
          background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.55), transparent);
          animation: goldGlint 6s ease-in-out infinite;
          animation-delay: 1s;
          pointer-events: none;
        }

        .tag-hole {
          position: absolute;
          top: -7px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--ink);
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.6), 0 0 0 3px var(--paper);
        }

        .tag-eyebrow {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.12em;
          color: var(--dim-on-paper);
        }

        .tag-role {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 600;
          font-size: 26px;
          line-height: 1.15;
          margin-top: 10px;
        }

        .tag-divider {
          margin: 18px 0 14px;
          border-top: 1px dashed var(--paper-line);
        }

        .tag-row {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          font-size: 12.5px;
          padding: 6px 0;
        }

        .tag-row span:first-child {
          color: var(--dim-on-paper);
        }

        .tag-row span:last-child {
          font-family: var(--font-mono);
          font-size: 11.5px;
          text-align: right;
        }

        .tag-stamp {
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid var(--paper-line);
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.06em;
          color: var(--stamp);
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .stamp-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--stamp);
          animation: stampPulse 1.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
