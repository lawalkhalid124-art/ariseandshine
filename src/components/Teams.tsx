import React from 'react'

export default function Teams() {
  const teams = [
    { id: 1, name: 'U8s', desc: 'Introductory training for youngest players' },
    { id: 2, name: 'U10s', desc: 'Skill development and small-sided games' },
    { id: 3, name: 'U12s', desc: 'Tactical awareness and competition' },
    { id: 4, name: 'Senior Squad', desc: 'Competitive team for older players' },
    { id: 5, name: 'Coaching Staff', desc: 'Experienced coaches and support staff' }
  ]

  return (
    <section id="teams" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Teams</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {teams.map(team => (
            <div key={team.id} className="p-6 rounded-lg bg-gradient-to-br from-amber-100 to-red-100 hover:scale-105 transition shadow">
              <div className="text-6xl text-amber-500 mb-4">⚽</div>
              <h3 className="text-2xl font-bold text-gray-900">{team.name}</h3>
              <p className="text-gray-700 mt-2">{team.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
