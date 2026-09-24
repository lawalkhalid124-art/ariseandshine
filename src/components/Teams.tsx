import React from 'react'
import { Trophy } from 'lucide-react'

export default function Teams() {
  const teams = [
    { id: 1, name: 'U8s', desc: 'Introductory training for youngest players' },
    { id: 2, name: 'U10s', desc: 'Skill development and small-sided games' },
    { id: 3, name: 'U12s', desc: 'Tactical awareness and competition' },
    { id: 4, name: 'Senior Squad', desc: 'Competitive team for older players' },
    { id: 5, name: 'Coaching Staff', desc: 'Experienced coaches and support staff' }
  ]

  return (
    <section id="teams" className="bg-[var(--bg-primary)] py-16 text-[var(--text-primary)]">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-[var(--text-primary)]">Our Teams</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {teams.map(team => (
            <div key={team.id} className="theme-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">{team.name}</h3>
              <p className="mt-2 text-[var(--text-muted)]">{team.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
