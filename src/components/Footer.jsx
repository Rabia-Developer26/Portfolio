import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react'
import { profile } from '../data'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="container footer-block" style={{ padding: '36px 24px 44px' }}>
      <div className="footer-row">
        <div className="footer-left">
          <span className="tag-label" style={{ marginBottom: 10 }}>Thanks for stopping by</span>
          <div className="footer-copyright">
            © {new Date().getFullYear()} {profile.name} · All rights reserved
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-icons">
            <IconLink href={`mailto:${profile.email}`} icon={<Mail size={16} />} label="Email" />
            {profile.socials.github !== '#' && (
              <IconLink href={profile.socials.github} icon={<Github size={16} />} label="GitHub" />
            )}
            {profile.socials.linkedin !== '#' && (
              <IconLink href={profile.socials.linkedin} icon={<Linkedin size={16} />} label="LinkedIn" />
            )}
            {profile.socials.instagram !== '#' && (
              <IconLink href={profile.socials.instagram} icon={<Instagram size={16} />} label="Instagram" />
            )}
          </div>

          <button type="button" onClick={scrollToTop} className="footer-top-btn" aria-label="Back to top">
            <ArrowUp size={14} />
            <span>Top</span>
          </button>
        </div>
      </div>

      <style>{`
        .footer-block {
          border-top: 1px dashed var(--ink-line);
          padding-top: 28px;
        }

        .footer-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 24px;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
        }

        .footer-copyright {
          font-size: 12.5px;
          color: var(--sage-dim);
          font-family: var(--font-mono);
          letter-spacing: 0.02em;
        }

        .footer-right {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .footer-icons {
          display: flex;
          gap: 12px;
        }

        .footer-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid var(--ink-line);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--sage);
          background: transparent;
          transition: border-color 0.25s var(--ease), color 0.25s var(--ease), transform 0.25s var(--ease), background 0.25s var(--ease);
        }

        .footer-icon:hover {
          border-color: var(--brass);
          color: var(--brass-soft);
          background: rgba(230, 179, 61, 0.08);
          transform: translateY(-2px);
        }

        .footer-top-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 11.5px;
          letter-spacing: 0.06em;
          color: var(--sage);
          background: transparent;
          border: 1px solid var(--ink-line);
          border-radius: 999px;
          padding: 8px 14px;
          cursor: pointer;
          transition: border-color 0.25s var(--ease), color 0.25s var(--ease);
        }

        .footer-top-btn:hover {
          border-color: var(--brass);
          color: var(--brass-soft);
        }

        @media (max-width: 560px) {
          .footer-row { align-items: flex-start; }
          .footer-right { width: 100%; justify-content: space-between; }
        }
      `}</style>
    </footer>
  )
}

function IconLink({ href, icon, label }) {
  const isExternal = href.startsWith('http')
  return (
    
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="footer-icon"
      aria-label={label}
      title={label}
    >
      {icon}
    </a>
  )
}
