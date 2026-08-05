import { Github, Linkedin, Instagram } from 'lucide-react'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="container" style={{ padding: '36px 24px' }}>
      <div style={{ borderTop: '1px dashed var(--ink-line)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontSize: 12.5, color: 'var(--sage-dim)', fontFamily: 'var(--font-mono)' }}>
          © {new Date().getFullYear()} {profile.name} · All rights reserved
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          {profile.socials.github !== '#' && <IconLink href={profile.socials.github} icon={<Github size={16} />} />}
          {profile.socials.linkedin !== '#' && <IconLink href={profile.socials.linkedin} icon={<Linkedin size={16} />} />}
          {profile.socials.instagram !== '#' && <IconLink href={profile.socials.instagram} icon={<Instagram size={16} />} />}
        </div>
      </div>
    </footer>
  )
}

function IconLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: 34,
        height: 34,
        borderRadius: '50%',
        border: '1px solid var(--ink-line)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--sage)',
        transition: 'border-color 0.25s var(--ease), color 0.25s var(--ease)',
      }}
    >
      {icon}
    </a>
  )
}
