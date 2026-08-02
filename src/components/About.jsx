import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Arise & Shine Football Academy</h2>

        <p className="text-gray-700 text-lg mb-4">Arise & Shine Football Academy is a professional grassroots youth football academy located in <strong>Ikorodu, Lagos State, Nigeria</strong>. Established on <strong>17th March 2012</strong>, the academy transforms talented young boys from disadvantaged communities into professional footballers while developing discipline, responsibility, and strong character.</p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-3">Vision</h3>
            <p className="text-gray-700 mb-4">To discover, groom, and develop talented young footballers—especially children from underserved communities—into professional athletes and leaders who will represent Nigeria on the global stage.</p>

            <h3 className="text-2xl font-bold mb-3">Mission</h3>
            <p className="text-gray-700 mb-4">Produce complete footballers by combining elite football education with character development through coaching, tactical education, physical and mental conditioning, academic encouragement, and leadership training.</p>

            <h3 className="text-2xl font-bold mb-3">Motto</h3>
            <p className="text-gray-700 mb-4"><em>IN GOD WE TRUST</em> — faith, integrity, humility, and gratitude guide everything we do.</p>

            <h3 className="text-2xl font-bold mb-3">Core Values (The 4Ds)</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Discipline:</strong> Respect and structure in training and life.</li>
              <li><strong>Dedication:</strong> Consistent effort and commitment to improvement.</li>
              <li><strong>Development:</strong> Holistic growth—technical, tactical, physical, mental, and social.</li>
              <li><strong>Dominance:</strong> Pursuing excellence with integrity and professionalism.</li>
            </ul>
          </div>

          <div>
            <div className="bg-gradient-to-br from-amber-500 to-red-500 rounded-lg p-6 text-white shadow-lg">
              <h4 className="text-xl font-bold mb-3">Club Identity</h4>
              <p className="mb-2"><strong>Founded:</strong> 17 March 2012</p>
              <p className="mb-2"><strong>Location:</strong> Ikorodu, Lagos State, Nigeria</p>
              <p className="mb-2"><strong>Type:</strong> Youth Football Development Academy</p>
              <p className="mb-2"><strong>Focus:</strong> Grassroots football development</p>
              <p className="mb-2"><strong>Target Age Groups:</strong> U8, U10, U12, U14, U16, U18 (expandable)</p>
            </div>

            <div className="mt-6 bg-white rounded-lg p-6 shadow">
              <h4 className="text-xl font-bold mb-3">Achievements</h4>
              <p className="text-gray-700">🏆 <strong>2026 IKORODU DIVISIONAL LEAGUE CHAMPIONS</strong></p>
              <p className="text-gray-600 mt-3">(This section is expandable to include league titles, tournament victories, individual awards, player call-ups and alumni success stories.)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}