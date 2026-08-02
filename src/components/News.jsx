import React from 'react'

export default function News() {
  const items = [
    { id: 1, title: 'Season Kickoff', date: '2026-07-01' },
    { id: 2, title: 'New Coaching Appointment', date: '2026-06-15' }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">News & Announcements</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {items.map(i => (
            <article key={i.id} className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-bold">{i.title}</h3>
              <p className="text-gray-500 text-sm">{i.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
