import React from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      role: 'Parent',
      quote: 'Arise and Shine has transformed my son into a confident athlete. The coaching is excellent!'
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      role: 'Player',
      quote: 'Best decision ever! Not only am I improving my skills but making lifelong friends here.'
    },
    {
      id: 3,
      name: 'John Smith',
      role: 'Parent',
      quote: 'The academy teaches values beyond football. My daughter has grown so much!'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What People Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-gray-50 rounded-lg p-8 border-l-4 border-amber-500">
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <p className="font-bold text-gray-900">{testimonial.name}</p>
              <p className="text-amber-500 font-semibold">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
