import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import logo from '../images/arise_shine-logo.png'

const contactEmail = 'ariseandshinefootballacademy01@gmail.com'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ]

  const programLinks = [
    { label: 'Youth Academy', href: '/programs' },
    { label: 'Junior Development', href: '/programs' },
    { label: 'Elite Program', href: '/programs' },
    { label: 'Girls Football', href: '/programs' },
  ]

  const socials = [
    { label: 'Instagram', href: '#', icon: 'IG' },
    { label: 'Facebook', href: '#', icon: 'FB' },
    { label: 'X', href: '#', icon: 'X' },
    { label: 'YouTube', href: '#', icon: 'YT' },
  ]

  return (
    <footer className="bg-[var(--bg-secondary)] text-[var(--text-primary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="h-px w-full"
          style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }}
        />

        <div className="grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr_0.8fr] md:items-start">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src={logo}
                alt="Arise and Shine Football Academy logo"
                className="h-11 w-11 rounded-full border border-[var(--border-gold)] bg-white/90 object-contain"
              />
              <h3 className="text-xl font-bold tracking-[-0.02em] text-[var(--gold)]">Arise & Shine FA</h3>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[var(--text-muted)]">
              Developing champions on and off the pitch.
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-[var(--gold)]">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-muted)]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="transition-colors duration-200 hover:text-[var(--gold)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-2">
              <a href="tel:+2349138239453" className="inline-flex items-center gap-2 text-sm text-[var(--gold)] transition-colors hover:text-[var(--gold-hover)]">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+234 913 823 9453</span>
              </a>
              <a href="tel:+2347081889709" className="inline-flex items-center gap-2 text-sm text-[var(--gold)] transition-colors hover:text-[var(--gold-hover)]">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+234 708 188 9709</span>
              </a>
              <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2 break-all text-sm text-[var(--gold)] transition-colors hover:text-[var(--gold-hover)]">
                <Mail className="h-4 w-4 shrink-0" />
                <span>{contactEmail}</span>
              </a>
              <a href="https://wa.me/2349138239453" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[var(--gold)] transition-colors hover:text-[var(--gold-hover)]">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[var(--gold)] text-[9px] font-bold text-[var(--bg-primary)]">WA</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="eyebrow text-[var(--gold)]">Programs</h4>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-muted)]">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="transition-colors duration-200 hover:text-[var(--gold)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:text-right">
            <h4 className="eyebrow text-[var(--gold)]">Follow Us</h4>
            <div className="mt-4 flex gap-3 md:justify-end">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-gold)] bg-transparent text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--gold)] transition-colors duration-300 hover:bg-[var(--gold)] hover:text-[var(--bg-primary)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-5">
          <p className="text-center text-[13px] text-[var(--text-muted)]">
            &copy; {currentYear} Arise and Shine Football Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
