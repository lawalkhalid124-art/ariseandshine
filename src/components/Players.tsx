import React from 'react'

export default function Players() {
  const squads = [
    { id: 1, name: 'U8 Squad', players: 12 },
    { id: 2, name: 'U10 Squad', players: 14 },
    { id: 3, name: 'Senior Squad', players: 20 }
  ]

  return (
    <section className="py-16 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">Players & Squads</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {squads.map(s => (
            <div key={s.id} className="rounded-lg bg-[var(--bg-card)] p-6 border border-[var(--border-gold)]">
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">{s.name}</h3>
              <p className="text-[var(--text-muted)] mt-2">Players: {s.players}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
