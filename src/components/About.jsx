import { profile } from '../data'
import useReveal from '../hooks/useReveal'

export default function About() {
  const [ref, visible] = useReveal()
  return (
    <section id="about" className="section">
      <div
        ref={ref}
        className={`container reveal${visible ? ' is-visible' : ''}`}
        style={{ display: 'grid', gridTemplateColumns: '0.6fr 1fr', gap: 48 }}
        id="about-grid"
      >
        <div className="section-head" style={{ marginBottom: 0 }}>
          <span className="tag-label">Why Clients Trust Me</span>
          <h2 className="section-title">Built by someone who ships</h2>
        </div>

        <div style={{ maxWidth: 680 }}>
          <p
            style={{
              fontSize: 18.5,
              lineHeight: 1.85,
              color: 'var(--sage)',
              margin: 0,
            }}
          >
            {profile.summary}
          </p>

          <div className="proof-row">
            {profile.stats.map((s) => (
              <div key={s.label} className="proof-item">
                <div className="proof-value">{s.value}</div>
                <div className="proof-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          #about-grid { grid-template-columns: 1fr !important; }
        }

        .proof-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-top: 36px;
          border-top: 1px solid var(--ink-line-soft);
          padding-top: 28px;
        }

        .proof-item {
          border-left: 2px solid var(--brass-dim);
          padding-left: 14px;
        }

        .proof-value {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 600;
          color: var(--brass-soft);
          line-height: 1.1;
        }

        .proof-label {
          font-size: 12px;
          color: var(--sage-dim);
          margin-top: 6px;
          line-height: 1.4;
        }

        @media (max-width: 640px) {
          .proof-row { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  )
}
