import React from 'react'

export default function Players() {
  const squads = [
    { id: 1, name: 'U8 Squad', players: 12 },
    { id: 2, name: 'U10 Squad', players: 14 },
    { id: 3, name: 'Senior Squad', players: 20 }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Players & Squads</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {squads.map(s => (
            <div key={s.id} className="p-6 rounded-lg bg-gradient-to-br from-amber-100 to-red-100 shadow">
              <h3 className="text-2xl font-bold">{s.name}</h3>
              <p className="text-gray-700 mt-2">Players: {s.players}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
