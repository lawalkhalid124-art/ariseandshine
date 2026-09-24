import React from 'react'

export default function News() {
  const items = [
    { id: 1, title: 'Season Kickoff', date: '2026-07-01' },
    { id: 2, title: 'New Coaching Appointment', date: '2026-06-15' }
  ]

  return (
    <section className="py-16 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">News & Announcements</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {items.map(i => (
            <article key={i.id} className="p-6 bg-[var(--bg-card)] rounded-lg shadow border border-[var(--border)]">
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">{i.title}</h3>
              <p className="text-[var(--text-muted)] text-sm">{i.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
