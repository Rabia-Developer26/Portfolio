import {
  ShoppingBag, Settings2, Package, Gauge, FileCode, Palette, Braces,
  LayoutGrid, Wind, Smartphone, Chrome, Search, Figma, CheckCircle2, Quote, ArrowRight, Code2, Sparkles,
} from 'lucide-react'
import { skills } from '../data'
import useReveal from '../hooks/useReveal'

const ICONS = [
  [/shopify theme development/i, ShoppingBag, '#a8c894'],
  [/shopify store customization/i, Settings2, '#a8c894'],
  [/product & collection/i, Package, '#a8c894'],
  [/shopify theme optimization/i, Gauge, '#a8c894'],
  [/html/i, FileCode, '#e08a5b'],
  [/css/i, Palette, '#6fa8dc'],
  [/javascript/i, Braces, '#eec25e'],
  [/bootstrap/i, LayoutGrid, '#b19cd9'],
  [/tailwind/i, Wind, '#7fd4c1'],
  [/responsive/i, Smartphone, '#e6b33d'],
  [/cross-browser/i, Chrome, '#e6b33d'],
  [/seo/i, Search, '#e6b33d'],
  [/figma/i, Figma, '#e7a8c4'],
  [/performance/i, Gauge, '#e6b33d'],
]

// big decorative watermark icon in the bottom-right corner of each group card
const WATERMARKS = {
  'Shopify Development': ShoppingBag,
  'Frontend Development': Code2,
  'Additional Skills': Sparkles,
}

function iconFor(item) {
  const hit = ICONS.find(([re]) => re.test(item))
  return hit ? [hit[1], hit[2]] : [CheckCircle2, '#e6b33d']
}

export default function Skills() {
  const [ref, visible] = useReveal()
  return (
    <section id="skills" className="section">
      <div className="container" ref={ref}>
        <div className={`section-head reveal${visible ? ' is-visible' : ''}`}>
          <span className="tag-label">Tools I Build With</span>
          <br></br>
          <h2 className="section-title underline-doodle">Tools I build with</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="skills-grid">
          {skills.map((group, i) => {
            const Watermark = WATERMARKS[group.group] || Sparkles
            return (
              <div
                key={group.group}
                style={{ transitionDelay: visible ? `${i * 0.1}s` : '0s' }}
                className={`peg-card reveal${visible ? ' is-visible' : ''}`}
              >
                <Watermark className="peg-watermark" size={64} strokeWidth={1.2} />
                <h3 className="peg-title">{group.group}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 16 }}>
                  {group.items.map((item) => {
                    const [Icon, color] = iconFor(item)
                    return (
                      <span key={item} className="peg-chip">
                        <span className="peg-chip-icon" style={{ color }}>
                          <Icon size={15} />
                        </span>
                        {item}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        <div className={`quote-bar reveal${visible ? ' is-visible' : ''}`} style={{ transitionDelay: visible ? '0.4s' : '0s' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Quote size={26} style={{ color: 'var(--brass)', flexShrink: 0 }} fill="var(--brass)" />
            <span className="quote-bar-text">
              Clean code. Creative solutions. Stores that perform, clients who stay.
            </span>
          </div>
          <a href="#contact" className="quote-bar-cta">
            Let&apos;s build something amazing together <ArrowRight size={15} />
          </a>
        </div>
      </div>

      <style>{`
        .peg-card {
          position: relative;
          border: 1px solid var(--ink-line);
          border-top: 2px solid var(--brass-dim);
          border-radius: 14px;
          padding: 24px 20px 20px;
          background: var(--ink-soft);
          overflow: hidden;
          transition: opacity 0.7s var(--ease), transform 0.7s var(--ease), border-color 0.25s var(--ease);
        }

        .peg-card:hover {
          border-top-color: var(--brass);
          transform: translateY(-3px);
        }

        .peg-watermark {
          position: absolute;
          right: -10px;
          bottom: -10px;
          color: var(--brass);
          opacity: 0.09;
          pointer-events: none;
        }

        .peg-title {
          position: relative;
          font-family: var(--font-mono);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: var(--brass-soft);
          margin: 0;
        }

        .peg-chip {
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          color: var(--chalk);
          padding: 8px 4px;
          border-bottom: 1px solid var(--ink-line-soft);
        }

        .peg-chip:last-child {
          border-bottom: none;
        }

        .peg-chip-icon {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: var(--ink-raised);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .quote-bar {
          margin-top: 20px;
          border: 1px solid var(--ink-line);
          border-radius: 14px;
          padding: 22px 26px;
          background: var(--ink-raised);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .quote-bar-text {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 16.5px;
          color: var(--chalk);
        }

        .quote-bar-cta {
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--brass-soft);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          transition: gap 0.25s var(--ease);
        }

        .quote-bar-cta:hover {
          gap: 12px;
        }

        @media (max-width: 800px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
