import React from 'react'

export default function CoachingStaff() {
  const coaches = [
    { id: 1, name: 'Head Coach', role: 'UEFA/CAF Licensed', bio: 'Experienced coach with focus on youth development.' },
    { id: 2, name: 'Assistant Coach', role: 'Tactical coach', bio: 'Supports training sessions and match prep.' }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Coaching Staff</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {coaches.map(c => (
            <div key={c.id} className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-bold">{c.name}</h3>
              <p className="text-amber-500 font-semibold">{c.role}</p>
              <p className="text-gray-700 mt-2">{c.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
