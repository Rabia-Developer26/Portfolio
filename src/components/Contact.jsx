import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react'
import { profile } from '../data'
import useReveal from '../hooks/useReveal'

function toWhatsAppLink(phone) {
  const digits = phone.replace(/\D/g, '')
  // Pakistani mobile numbers written as 03XX get a leading 0 dropped, +92 added
  const intl = digits.startsWith('0') ? `92${digits.slice(1)}` : digits
  return `https://wa.me/${intl}?text=${encodeURIComponent("Hi Rabia, I'd like to talk about a Shopify/web project.")}`
}

export default function Contact() {
  const [ref, visible] = useReveal()
  return (
    <section id="contact" className="section" style={{ borderBottom: 'none' }}>
      <div className="container">
        <div ref={ref} className={`order-form reveal${visible ? ' is-visible' : ''}`} id="contact-grid">
          <div>
            <span className="tag-label">Let&apos;s Connect</span>
            <br></br>
            <h2 className="section-title underline-doodle" style={{ marginTop: 14 }}>
              Hiring me is a two-minute decision
            </h2>
            <p className="section-sub" style={{ maxWidth: 460 }}>
              Tell me about your Shopify store, redesign, or frontend build.
              I reply to every message myself, usually within 24 hours, with a
              clear next step — no back-and-forth, no sales calls required.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 30 }}>
              <a href={`mailto:${profile.email}?subject=${encodeURIComponent('Project inquiry')}`} className="btn btn-primary">
                Start a Project <ArrowUpRight size={15} />
              </a>
              <a href={toWhatsAppLink(profile.phone)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <MessageCircle size={15} /> Message on WhatsApp
              </a>
            </div>

            <div className="trust-line">
              <span className="trust-dot" />
              Currently taking on new projects &middot; replies within 24 hours
            </div>
          </div>

          <div className="order-lines">
            <ContactRow icon={<Mail size={16} />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactRow icon={<Phone size={16} />} label="Phone / WhatsApp" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} />
            <ContactRow icon={<MapPin size={16} />} label="Based in" value={profile.location} />
          </div>
        </div>
      </div>

      <style>{`
        .order-form {
          position: relative;
          border: 1px solid var(--ink-line);
          border-radius: 20px;
          padding: clamp(28px, 5vw, 56px);
          background: var(--ink-soft);
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 44px;
          overflow: hidden;
        }

        .order-form::before {
          content: '';
          position: absolute;
          inset: 10px;
          border: 1px dashed var(--ink-line);
          border-radius: 14px;
          pointer-events: none;
        }

        .trust-line {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 26px;
          color: var(--sage-dim);
          font-family: var(--font-mono);
          font-size: 12px;
        }

        .trust-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--brass);
          flex-shrink: 0;
          animation: dotPulse 2.4s ease-in-out infinite;
        }

        .order-lines {
          display: flex;
          flex-direction: column;
          gap: 14px;
          justify-content: center;
        }

        .order-row {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          color: inherit;
          border: 1px solid var(--ink-line);
          border-left: 2px solid var(--brass-dim);
          border-radius: 12px;
          padding: 15px 18px;
          background: var(--ink-raised);
          transition: transform 0.25s var(--ease), border-color 0.25s var(--ease);
        }

        .order-row:hover {
          transform: translateX(4px);
          border-left-color: var(--brass);
        }

        @media (max-width: 760px) {
          .order-form { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ContactRow({ icon, label, value, href }) {
  const Comp = href ? 'a' : 'div'
  return (
    <Comp href={href} className="order-row">
      <span
        style={{
          width: 34,
          height: 34,
          borderRadius: '50%',
          background: 'var(--ink)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--brass-soft)',
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <div>
        <div style={{ fontSize: 10.5, color: 'var(--sage-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {label}
        </div>
        <div style={{ fontSize: 14.5, marginTop: 3, color: 'var(--chalk)' }}>{value}</div>
      </div>
    </Comp>
  )
}
