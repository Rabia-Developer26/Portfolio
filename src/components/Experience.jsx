import { experience } from '../data'
import useReveal from '../hooks/useReveal'

export default function Experience() {
  const [ref, visible] = useReveal()
  return (
    <section id="experience" className="section">
      <div className="container" ref={ref}>
        <div className={`section-head reveal${visible ? ' is-visible' : ''}`}>
          <span className="tag-label">Work Ledger</span>
          <h2 className="section-title">Where I've clocked in</h2>
        </div>

        <div className="ledger">
          {experience.map((job, i) => (
            <div
              key={i}
              style={{ transitionDelay: visible ? `${i * 0.08}s` : '0s' }}
              className={`ledger-row reveal${visible ? ' is-visible' : ''}`}
            >
              <div className="ledger-entry">
                Entry {String(experience.length - i).padStart(2, '0')}
              </div>

              <div className="ledger-meta">
                <div className="ledger-period">{job.period}</div>
                <div className="ledger-location">{job.location}</div>
              </div>

              <div>
                <h3 className="ledger-role">{job.role}</h3>
                <div className="ledger-company">{job.company}</div>

                <ul className="ledger-points">
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ledger {
          border-top: 1px solid var(--ink-line);
        }

        .ledger-row {
          display: grid;
          grid-template-columns: 90px 170px 1fr;
          gap: 24px;
          padding: 30px 0;
          border-bottom: 1px solid var(--ink-line-soft);
        }

        .ledger-entry {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--brass-dim);
          letter-spacing: 0.05em;
          padding-top: 3px;
        }

        .ledger-period {
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--brass-soft);
        }

        .ledger-location {
          color: var(--sage-dim);
          font-size: 12.5px;
          margin-top: 6px;
        }

        .ledger-role {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 600;
          margin: 0;
          color: var(--chalk);
        }

        .ledger-company {
          color: var(--sage);
          font-size: 14.5px;
          margin-top: 4px;
        }

        .ledger-points {
          margin: 16px 0 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .ledger-points li {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--sage);
          padding-left: 18px;
          position: relative;
        }

        .ledger-points li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--stamp);
        }

        @media (max-width: 680px) {
          .ledger-row { grid-template-columns: 1fr !important; gap: 8px; }
          .ledger-entry { order: -1; }
        }
      `}</style>
    </section>
  )
}
