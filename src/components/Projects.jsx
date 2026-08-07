import { useState } from 'react'
import { ArrowUpRight, Lock } from 'lucide-react'
import { shopifyProjects, webProjects, storeManagementProjects } from '../data'
import useReveal from '../hooks/useReveal'

const TABS = [
  { key: 'shopify', label: 'Shopify Themes', code: 'SFY', data: shopifyProjects },
  { key: 'web', label: 'Web Development', code: 'WEB', data: webProjects },
  { key: 'store', label: 'Store Management', code: 'MGT', data: storeManagementProjects },
]

const TOTAL_PROJECTS = shopifyProjects.length + webProjects.length + storeManagementProjects.length

function initials(name) {
  return name
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export default function Projects() {
  return <FullList />
}

function FullList() {
  const [active, setActive] = useState('shopify')
  const current = TABS.find((t) => t.key === active)
  const [ref, visible] = useReveal()

  return (
    <section className="section" id="projects">
      <div className="container" ref={ref}>
        <div className={`section-head reveal${visible ? ' is-visible' : ''}`} style={{ maxWidth: 'none' }}>
          <span className="tag-label">Featured Work</span>
          <br></br>
          <h2 className="section-title underline-doodle">Storefronts, live right now</h2>
          <p className="section-sub">
            All {TOTAL_PROJECTS} Shopify storefronts, custom builds, and managed stores I've
            shipped for clients — real screenshots, straight from the browser. Live
            links open in a new tab; the rest are private client builds with the
            reason noted on the card.
          </p>
        </div>

        <div className="tab-rail">
          {TABS.map((t) => (
            <button key={t.key} onClick={() => setActive(t.key)} className={`tab-btn${active === t.key ? ' active' : ''}`}>
              <span className="tab-code">{t.code}</span>
              {t.label}
              <span className="tab-count">{t.data.length}</span>
            </button>
          ))}
        </div>

        <div key={active} className="proj-grid">
          {current.data.map((p, i) => (
            <ProjectCard key={p.name} project={p} code={current.code} index={i + 1} delay={i * 0.03} />
          ))}
        </div>
      </div>

      <style>{`
        .tab-rail {
          display: flex;
          gap: 8px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .tab-btn {
          font-family: var(--font-mono);
          font-size: 12.5px;
          padding: 10px 16px;
          border-radius: 20px;
          border: 1px solid var(--ink-line);
          background: transparent;
          color: var(--sage);
          cursor: pointer;
          transition: all 0.25s var(--ease);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .tab-code {
          color: var(--brass-dim);
          font-size: 10.5px;
        }

        .tab-btn.active {
          border-color: var(--brass);
          background: rgba(201, 164, 76, 0.12);
          color: var(--chalk);
        }

        .tab-btn.active .tab-code {
          color: var(--brass-soft);
        }

        .tab-count {
          opacity: 0.6;
        }

        .proj-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 14px;
          padding-top: 6px;
        }

        @media (max-width: 560px) {
          .proj-grid { grid-template-columns: 1fr; gap: 12px; }
        }
      `}</style>
    </section>
  )
}

function ProjectCard({ project, code, index, delay = 0 }) {
  const hasLink = project.url && project.url !== '#'
  const Wrapper = hasLink ? 'a' : 'div'
  const wrapperProps = hasLink ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Wrapper
      {...wrapperProps}
      className="proj-card"
      style={{
        cursor: hasLink ? 'pointer' : 'default',
        animation: `fadeUp 0.5s var(--ease) both ${delay}s`,
      }}
    >
      <div className="proj-card-glow" />

      {project.image && (
        <div className="proj-shot-wrap">
          <img src={project.image} alt={`${project.name} storefront screenshot`} className="proj-shot" loading="lazy" />
        </div>
      )}

      <div className="proj-card-top">
        <span className="proj-mark">{initials(project.name)}</span>
        <span className="proj-sku">
          {code}-{String(index).padStart(3, '0')}
        </span>
      </div>

      <h3 className="proj-name">{project.name}</h3>

      {project.client && <div className="proj-meta">Client: {project.client}</div>}
      {project.description && <div className="proj-meta">{project.description}</div>}
      {project.detail && <div className="proj-meta">{project.detail}</div>}
      {!hasLink && project.status && <div className="proj-meta">{project.status}</div>}

      <div className={`proj-cta${hasLink ? ' has-link' : ''}`}>
        {hasLink ? (
          <>
            Visit live site <ArrowUpRight size={13} />
          </>
        ) : (
          <>
            <Lock size={11} /> Private client build
          </>
        )}
      </div>

      <style>{`
        .proj-card {
          position: relative;
          display: block;
          background: linear-gradient(180deg, var(--ink-raised), var(--ink-soft));
          border: 1px solid var(--ink-line);
          border-radius: 14px;
          padding: 17px 17px 15px;
          text-decoration: none;
          color: var(--chalk);
          overflow: hidden;
          transition: transform 0.3s var(--ease), border-color 0.3s var(--ease), box-shadow 0.3s var(--ease);
        }

        .proj-shot-wrap {
          margin: -17px -17px 13px;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #141310;
        }

        .proj-shot {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: transform 0.5s var(--ease);
        }

        .proj-card:hover .proj-shot {
          transform: scale(1.04);
        }

        .proj-card:hover {
          transform: translateY(-3px);
          border-color: rgba(201, 164, 76, 0.55);
          box-shadow: 0 18px 32px -18px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(201, 164, 76, 0.2);
        }

        .proj-card-glow {
          position: absolute;
          top: -60%;
          right: -30%;
          width: 60%;
          height: 140%;
          background: radial-gradient(circle, rgba(201, 164, 76, 0.14), transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s var(--ease);
        }

        .proj-card:hover .proj-card-glow {
          opacity: 1;
        }

        .proj-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .proj-mark {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--brass-dim);
          background: rgba(201, 164, 76, 0.08);
          color: var(--brass-soft);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 12.5px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .proj-sku {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.05em;
          color: var(--sage-dim);
        }

        .proj-name {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 600;
          margin: 13px 0 0;
          line-height: 1.25;
          color: var(--chalk);
        }

        .proj-meta {
          font-size: 12.5px;
          color: var(--sage);
          line-height: 1.5;
          margin-top: 5px;
        }

        .proj-cta {
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px solid var(--ink-line-soft);
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.04em;
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--sage-dim);
        }

        .proj-cta.has-link {
          color: var(--brass-soft);
        }
      `}</style>
    </Wrapper>
  )
}
