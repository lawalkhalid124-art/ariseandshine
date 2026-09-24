import React from 'react'
import { InteractiveHoverButton } from './ui/interactive-hover-button'

export default function Membership() {
  const plans = [
    { id: 1, name: 'Basic', price: '£25/mo', perks: ['Weekly training', 'Access to grounds'] },
    { id: 2, name: 'Standard', price: '£45/mo', perks: ['Everything in Basic', 'Match play', 'Coaching reviews'] },
    { id: 3, name: 'Elite', price: '£75/mo', perks: ['Everything in Standard', 'Personal coaching', 'Nutrition plan'] }
  ]

  return (
    <section id="membership" className="bg-[var(--bg-primary)] py-16 text-[var(--text-primary)]">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-[var(--text-primary)]">Membership Plans</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map(plan => (
            <div key={plan.id} className="theme-panel flex flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="mb-4 text-2xl font-bold text-[var(--text-primary)]">{plan.name}</h3>
              <p className="mb-4 text-3xl font-extrabold text-[var(--gold)]">{plan.price}</p>
              <ul className="mb-6 flex-grow space-y-2 text-[var(--text-muted)]">
                {plan.perks.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>
              <div className="mt-4 flex justify-center">
                <InteractiveHoverButton text={`Join ${plan.name}`} className="w-56 border-[var(--border-gold)] bg-[var(--gold)] text-[var(--bg-primary)] h-14 text-base !p-3 !rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
