import React from 'react'
import { CalendarDays, MapPin, Trophy } from 'lucide-react'

export default function Tournament() {
  const tournamentHighlights = [
    {
      title: 'Ikorodu Divisional League',
      status: 'In Season',
      date: 'May – October 2026',
      venue: 'Ikorodu, Lagos',
    },
    {
      title: 'Community Football Festival',
      status: 'Upcoming',
      date: 'August 2026',
      venue: 'ASFA Training Ground',
    },
    {
      title: 'In-House Competition',
      status: 'Player vs Player',
      date: 'Development & Skill Improvement',
      venue: 'Internal Academy League',
    },
  ]

  return (
    <section className="py-16 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Competition</p>
          <h2 className="text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">Tournament</h2>
          <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">
            Our tournament pathway gives players a chance to test their development, build confidence, and compete with discipline and purpose.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tournamentHighlights.map((tournament) => (
            <article
              key={tournament.title}
              className="rounded-[16px] border border-[var(--border-gold)] bg-[var(--bg-card)] p-6 shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-gold)] bg-[rgba(212,160,23,0.08)] text-[var(--gold)]">
                <Trophy className="h-5 w-5" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gold)]">{tournament.status}</p>
              <h3 className="mb-4 text-2xl font-bold text-[var(--text-primary)]">{tournament.title}</h3>
              <ul className="space-y-3 text-sm text-[var(--text-muted)]">
                <li className="flex items-center gap-3">
                  <CalendarDays className="h-4 w-4 text-[var(--gold)]" />
                  <span>{tournament.date}</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[var(--gold)]" />
                  <span>{tournament.venue}</span>
                </li>
              </ul>
              {tournament.title === 'In-House Competition' && (
                <p className="mt-4 text-sm leading-6 text-[var(--text-muted)]">
                  A competitive challenge between players focused on development and skill improvement.
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[18px] border border-[var(--border)] bg-[var(--bg-card)] p-8">
          <h3 className="mb-4 text-2xl font-bold text-[var(--text-primary)]">What players gain through tournament play</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[12px] border border-[var(--border)] p-4">
              <h4 className="mb-2 text-lg font-semibold text-[var(--text-primary)]">Match Experience</h4>
              <p className="text-[var(--text-muted)]">Exposure to competitive moments that sharpen decision-making, composure, and team chemistry.</p>
            </div>
            <div className="rounded-[12px] border border-[var(--border)] p-4">
              <h4 className="mb-2 text-lg font-semibold text-[var(--text-primary)]">Character Growth</h4>
              <p className="text-[var(--text-muted)]">Discipline, resilience, and respect are reinforced in every fixture and result.</p>
            </div>
            <div className="rounded-[12px] border border-[var(--border)] p-4">
              <h4 className="mb-2 text-lg font-semibold text-[var(--text-primary)]">Performance Pathway</h4>
              <p className="text-[var(--text-muted)]">Tournament participation supports long-term progression toward higher-level football opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
