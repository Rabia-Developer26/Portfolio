import { skills, education } from '../data'
import useReveal from '../hooks/useReveal'

export default function Skills() {
  const [ref, visible] = useReveal()
  return (
    <section id="skills" className="section">
      <div className="container" ref={ref}>
        <div className={`section-head reveal${visible ? ' is-visible' : ''}`}>
          <span className="tag-label">Tool Rack</span>
          <h2 className="section-title">What's on the shelf</h2>
        </div>

        <div className="rack-rail" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="skills-grid">
          {skills.map((group, i) => (
            <div
              key={group.group}
              style={{ transitionDelay: visible ? `${i * 0.1}s` : '0s' }}
              className={`peg-card reveal${visible ? ' is-visible' : ''}`}
            >
              <div className="peg-hook" />
              <h3 className="peg-title">{group.group}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
                {group.items.map((item) => (
                  <span key={item} className="peg-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 44 }}>
          {education.map((ed) => (
            <div
              key={ed.school}
              style={{ transitionDelay: visible ? '0.3s' : '0s' }}
              className={`edu-row reveal${visible ? ' is-visible' : ''}`}
            >
              <div className="edu-seal">
                <span>UOS</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, color: 'var(--chalk)' }}>
                  {ed.degree}
                </div>
                <div style={{ color: 'var(--sage)', fontSize: 14, marginTop: 4 }}>
                  {ed.school} · {ed.location}
                </div>
              </div>
              <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5 }}>
                <div style={{ color: 'var(--brass-soft)' }}>{ed.period}</div>
                <div style={{ color: 'var(--sage-dim)', marginTop: 4 }}>{ed.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .rack-rail {
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--ink-line) 8%, var(--ink-line) 92%, transparent);
          margin-bottom: 28px;
        }

        .peg-card {
          position: relative;
          border: 1px solid var(--ink-line);
          border-top: 2px solid var(--brass-dim);
          border-radius: 3px;
          padding: 26px 20px 22px;
          background: var(--ink-soft);
          transition: opacity 0.7s var(--ease), transform 0.7s var(--ease), border-color 0.25s var(--ease);
        }

        .peg-card:hover {
          border-top-color: var(--brass);
          transform: translateY(-3px);
        }

        .peg-hook {
          position: absolute;
          top: -7px;
          left: 24px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid var(--brass-dim);
          background: var(--ink);
        }

        .peg-title {
          font-family: var(--font-mono);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: var(--brass-soft);
          margin: 6px 0 0;
        }

        .peg-chip {
          font-size: 13px;
          color: var(--chalk);
          background: var(--ink-raised);
          border: 1px solid var(--ink-line);
          border-radius: 20px;
          padding: 6px 12px;
        }

        .edu-row {
          display: flex;
          align-items: center;
          gap: 20px;
          border: 1px solid var(--ink-line);
          border-radius: 3px;
          padding: 20px 24px;
          background: var(--ink-soft);
          flex-wrap: wrap;
        }

        .edu-seal {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1.5px dashed var(--brass);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--brass-soft);
          flex-shrink: 0;
        }

        @media (max-width: 800px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
