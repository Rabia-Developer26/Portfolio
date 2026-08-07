import { ArrowRight, Download, MapPin, Star, Sparkle } from 'lucide-react'
import { profile } from '../data'

const HERO_STATS = [
  { label: 'Experience', value: '3+ Years' },
  { label: 'Completed Projects', value: '26+' },
  { label: 'Happy Clients', value: '10+' },
  { label: 'Availability', value: 'Open for new projects', highlight: true },
]

export default function Hero() {
  return (
    <section id="top" style={{ paddingTop: 56, paddingBottom: 90 }}>
      <div
        className="container hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: 40,
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Sparkle className="doodle" size={20} style={{ top: '2%', right: '30%', animationDelay: '0.6s' }} />

        <div style={{ animation: 'fadeUp 0.8s var(--ease) both' }}>
          <span className="tag-label">✤ Hi! I&apos;m </span>
<br></br>
          <h1
            className="underline-doodle shimmer-text"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(38px, 5.6vw, 60px)',
              lineHeight: 1.05,
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
              fontFamily: 'var(--font-mono)',
              fontSize: 13.5,
              color: 'var(--brass-soft)',
              marginTop: 22,
              animation: 'fadeUp 0.8s var(--ease) both 0.14s',
            }}
          >
            {profile.titles.slice(0, 2).join('  |  ')}
          </div>

          <p
            style={{
              color: 'var(--sage)',
              fontSize: 17.5,
              lineHeight: 1.75,
              marginTop: 20,
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
              marginTop: 30,
              flexWrap: 'wrap',
              animation: 'fadeUp 0.8s var(--ease) both 0.32s',
            }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={15} />
            </a>
            <a href={profile.resumeFile} download className="btn btn-ghost">
              <Download size={15} /> Download CV
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              marginTop: 38,
              color: 'var(--sage-dim)',
              fontFamily: 'var(--font-mono)',
              fontSize: 12.5,
              flexWrap: 'wrap',
              animation: 'fadeUp 0.8s var(--ease) both 0.4s',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <MapPin size={14} />
              {profile.location}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <span className="live-dot" /> Available for work
            </span>
          </div>
        </div>

        {/* Signature element: a pinned sticky note, the same note she'd scribble a quote on */}
        <div className="hero-tag-wrap" style={{ animation: 'fadeUp 0.9s var(--ease) both 0.2s' }}>
          {/* curly hand-drawn arrow, pointing at the card from the left */}
          <svg
            className="doodle curly-arrow"
            width="70"
            height="60"
            viewBox="0 0 70 60"
            fill="none"
            style={{ left: '-13%', top: '38%', animationDelay: '0.3s' }}
          >
            <path
              d="M64 8C50 4 24 6 14 20C6 31 14 42 26 40C36 38 38 26 28 22C20 19 10 24 9 34"
              stroke="var(--brass)"
              strokeWidth="2.4"
              strokeLinecap="round"
              fill="none"
            />
            <path d="M2 30 L9 34 L14 26" stroke="var(--brass)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>

          {/* stars, grouped on the opposite side */}
          <Star className="doodle" size={22} style={{ top: '-7%', right: '7%', animationDelay: '0.9s' }} fill="var(--brass)" />
          <Star className="doodle" size={12} style={{ top: '8%', right: '-4%', animationDelay: '1.6s' }} fill="var(--brass)" />
          <Sparkle className="doodle" size={16} style={{ bottom: '6%', right: '-6%', animationDelay: '2s' }} />

          <div className="note-card">
            <div className="note-pin" />
            <div className="note-role">
              {profile.titles[0]}
            </div>
            <div className="note-divider" />
            {HERO_STATS.map((s) => (
              <div className="note-row" key={s.label}>
                <span>{s.label}</span>
                <span className={s.highlight ? 'note-highlight' : ''}>{s.value}</span>
              </div>
            ))}
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

        .curly-arrow {
          position: absolute;
        }

        @media (max-width: 560px) {
          .curly-arrow { display: none; }
        }

        .live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--brass);
          animation: stampPulse 1.8s ease-in-out infinite;
        }

        .note-card {
          position: relative;
          background: var(--paper);
          color: var(--ink-on-paper);
          border-radius: 3px;
          padding: 30px 26px 24px;
          box-shadow: 0 30px 60px -24px rgba(0,0,0,0.6), 0 0 40px -18px rgba(230, 179, 61, 0.3);
          width: 100%;
          max-width: 320px;
          transform: rotate(1.2deg);
        }

        .note-pin {
          position: absolute;
          top: -9px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, var(--brass-soft), var(--brass-dim));
          box-shadow: 0 3px 6px rgba(0,0,0,0.5);
        }

        .note-role {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 24px;
          line-height: 1.18;
        }

        .note-divider {
          margin: 18px 0 14px;
          border-top: 1px dashed var(--paper-line);
        }

        .note-row {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          font-size: 12.5px;
          padding: 7px 0;
        }

        .note-row span:first-child {
          color: var(--dim-on-paper);
        }

        .note-row span:last-child {
          font-family: var(--font-mono);
          font-size: 11.5px;
          text-align: right;
          font-weight: 700;
        }

        .note-highlight {
          color: var(--brass-dim);
        }
      `}</style>
    </section>
  )
}
