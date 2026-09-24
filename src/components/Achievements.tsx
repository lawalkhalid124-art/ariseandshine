import React from 'react'
import { Trophy } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    { id: 1, title: '2026 Ikorodu Divisional League Champions', year: '2026' }
  ]

  return (
    <section className="py-16 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-[var(--text-primary)]">Achievements</h2>
        <div className="mx-auto max-w-3xl space-y-3">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="flex items-center justify-between gap-4 rounded-[12px] border border-[var(--border-gold)] bg-[var(--bg-card)] p-4 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--gold)]">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-gold)] bg-transparent text-[var(--gold)]">
                  <Trophy className="h-5 w-5" />
                </div>
                <h3 className="text-[15px] font-bold text-[var(--text-primary)]">{achievement.title}</h3>
              </div>
              <span className="text-[13px] text-[var(--text-muted)]">{achievement.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
