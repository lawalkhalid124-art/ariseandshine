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
    <section id="programs" className="bg-[#f5f9ff] py-16 text-[#1a2b3d]">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-[#1a2b3d]">Our Programs</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programs.map(program => (
            <div key={program.id} className="theme-panel rounded-2xl p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="mb-2 text-2xl font-bold text-[#1a2b3d]">{program.name}</h3>
              <p className="mb-4 font-semibold text-[#d79017]">{program.age}</p>
              <p className="mb-6 text-[#355f8a]">{program.description}</p>
              <p className="mb-4 text-xl font-bold text-[#1a2b3d]">{program.price}</p>
              <button className="w-full rounded-xl border border-[#f6c14a]/60 bg-[#f6c14a] px-4 py-2.5 font-bold text-[#1a2b3d] transition hover:bg-[#f8d673]">
                Enroll
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
