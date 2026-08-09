import React from 'react'
import { InteractiveHoverButton } from './ui/interactive-hover-button'

export default function Membership() {
  const plans = [
    { id: 1, name: 'Basic', price: '£25/mo', perks: ['Weekly training', 'Access to grounds'] },
    { id: 2, name: 'Standard', price: '£45/mo', perks: ['Everything in Basic', 'Match play', 'Coaching reviews'] },
    { id: 3, name: 'Elite', price: '£75/mo', perks: ['Everything in Standard', 'Personal coaching', 'Nutrition plan'] }
  ]

  return (
    <section id="membership" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Membership Plans</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map(plan => (
            <div key={plan.id} className="rounded-lg p-6 bg-gradient-to-br from-amber-200 to-amber-400 hover:from-amber-300 hover:to-red-500 transition shadow-md flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <p className="text-3xl font-extrabold text-gray-900 mb-4">{plan.price}</p>
              <ul className="mb-6 space-y-2 flex-grow">
                {plan.perks.map((p, i) => (
                  <li key={i} className="text-gray-700">• {p}</li>
                ))}
              </ul>
              <div className="flex justify-center mt-4">
                <InteractiveHoverButton text={`Join ${plan.name}`} className="bg-red-600 text-white border-red-600 w-56 h-14 text-base !p-3 !rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
