import React from 'react'

export default function Achievements() {
  const achievements = [
    { id: 1, title: '2026 Ikorodu Divisional League Champions' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map(a => (
            <div key={a.id} className="p-6 bg-gradient-to-br from-amber-100 to-amber-300 rounded-lg shadow">
              <h3 className="text-xl font-bold">{a.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
