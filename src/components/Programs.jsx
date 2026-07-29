import React from 'react'

export default function Programs() {
  const programs = [
    {
      id: 1,
      name: 'Youth Academy',
      age: '8-12 Years',
      description: 'Foundation training focusing on basic skills, ball control, and love for the game.',
      price: '$150/month'
    },
    {
      id: 2,
      name: 'Junior Development',
      age: '13-16 Years',
      description: 'Intermediate training with tactical awareness, competitive matches, and skill refinement.',
      price: '$200/month'
    },
    {
      id: 3,
      name: 'Elite Program',
      age: '17+ Years',
      description: 'Advanced training for serious athletes pursuing professional football careers.',
      price: '$300/month'
    },
    {
      id: 4,
      name: 'Girls Football',
      age: '8+ Years',
      description: 'Dedicated program for girls with same professional standards and opportunities.',
      price: '$150-250/month'
    }
  ]

  return (
    <section id="programs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map(program => (
            <div key={program.id} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.name}</h3>
              <p className="text-amber-500 font-semibold mb-4">{program.age}</p>
              <p className="text-gray-700 mb-6">{program.description}</p>
              <p className="text-xl font-bold text-gray-900 mb-4">{program.price}</p>
              <button className="w-full bg-amber-500 text-gray-900 py-2 rounded-lg font-bold hover:bg-amber-600 transition">
                Enroll
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
