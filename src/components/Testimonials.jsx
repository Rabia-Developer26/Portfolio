import { Star } from 'lucide-react'
import { testimonials } from '../data'
import useReveal from '../hooks/useReveal'

const ROTATIONS = [-3, 2, -2, 3]

export default function Testimonials() {
  const [ref, visible] = useReveal()

  return (
    <section id="testimonials" className="section">
      <div className="container" ref={ref}>
        <div className={`section-head reveal${visible ? ' is-visible' : ''}`}>
          <span className="tag-label">Kind Words</span>
          <br></br>
          <h2 className="section-title underline-doodle">What clients say</h2>
        </div>

        <div className="notes-grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`note-${t.color} sticky-note reveal${visible ? ' is-visible' : ''}`}
              style={{
                transitionDelay: visible ? `${i * 0.08}s` : '0s',
                transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)`,
              }}
            >
              <span className="sticky-tape" />
              <div className="sticky-stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="sticky-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="sticky-author">— {t.author}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .notes-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          padding-top: 8px;
        }

        .sticky-note {
          position: relative;
          border-radius: 3px;
          padding: 20px 18px 18px;
          min-height: 180px;
          display: flex;
          flex-direction: column;
          color: var(--ink-on-paper);
          box-shadow: 0 16px 30px -14px rgba(0, 0, 0, 0.55);
          transition: transform 0.3s var(--ease), opacity 0.7s var(--ease);
        }

        .sticky-note:hover {
          transform: rotate(0deg) translateY(-4px) !important;
        }

        .sticky-tape {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%) rotate(-2deg);
          width: 46px;
          height: 18px;
          background: rgba(255, 255, 255, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .note-yellow { background: var(--note-yellow); }
        .note-pink { background: var(--note-pink); }
        .note-blue { background: var(--note-blue); }
        .note-green { background: var(--note-green); }

        .sticky-stars {
          display: flex;
          gap: 2px;
          color: var(--ink-on-paper);
          opacity: 0.75;
        }

        .sticky-quote {
          font-size: 14px;
          line-height: 1.55;
          margin: 12px 0 0;
          flex: 1;
        }

        .sticky-author {
          font-family: var(--font-mono);
          font-size: 11.5px;
          margin-top: 14px;
          opacity: 0.75;
        }

        @media (max-width: 900px) {
          .notes-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 560px) {
          .notes-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
