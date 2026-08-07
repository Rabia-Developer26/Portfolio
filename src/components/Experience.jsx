import { experience } from '../data'
import useReveal from '../hooks/useReveal'
import { Sparkle } from 'lucide-react'

export default function Experience() {
  const [ref, visible] = useReveal()
  return (
    <section id="experience" className="section">
      <div className="container exp-grid" ref={ref}>
        <div className={`exp-heading reveal${visible ? ' is-visible' : ''}`}>
          <span className="tag-label">Experience</span>
          <br></br>
          <h2 className="section-title underline-doodle">
            A track record of shipping
            <Sparkle className="doodle" size={18} style={{ position: 'static', display: 'inline-block', marginLeft: 10, verticalAlign: 'middle', animationDelay: '0.5s' }} />
          </h2>
          <p className="section-sub" style={{ maxWidth: 280 }}>
            Every role, freelance engagement, and long-running client
            relationship that got me here.
          </p>
        </div>

        <div className="timeline">
          {experience.map((job, i) => (
            <div
              key={i}
              style={{ transitionDelay: visible ? `${i * 0.08}s` : '0s' }}
              className={`timeline-row reveal${visible ? ' is-visible' : ''}`}
            >
              <div className="timeline-rail">
                <span className="timeline-dot" />
                {i < experience.length - 1 && <span className="timeline-line" />}
              </div>

              <div className="timeline-body">
                <div className="timeline-period">{job.period} &middot; {job.location}</div>
                <h3 className="timeline-role">{job.role}</h3>
                <div className="timeline-company">{job.company}</div>

                <ul className="timeline-points">
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
        .exp-grid {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 48px;
          align-items: start;
        }

        .exp-heading {
          position: sticky;
          top: 100px;
        }

        .timeline-row {
          display: grid;
          grid-template-columns: 24px 1fr;
          gap: 20px;
          padding-bottom: 36px;
        }

        .timeline-rail {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .timeline-dot {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: var(--brass);
          box-shadow: 0 0 0 4px rgba(230, 179, 61, 0.16);
          flex-shrink: 0;
          margin-top: 4px;
        }

        .timeline-line {
          width: 2px;
          flex: 1;
          background: linear-gradient(var(--brass-dim), var(--ink-line));
          margin-top: 6px;
        }

        .timeline-period {
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--brass-soft);
        }

        .timeline-role {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 600;
          margin: 8px 0 0;
          color: var(--chalk);
        }

        .timeline-company {
          color: var(--sage);
          font-size: 14.5px;
          margin-top: 4px;
        }

        .timeline-points {
          margin: 16px 0 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .timeline-points li {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--sage);
          padding-left: 18px;
          position: relative;
        }

        .timeline-points li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--brass);
        }

        @media (max-width: 860px) {
          .exp-grid { grid-template-columns: 1fr !important; }
          .exp-heading { position: static; margin-bottom: 12px; }
        }
      `}</style>
    </section>
  )
}
