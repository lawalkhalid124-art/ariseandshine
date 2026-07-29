import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Arise and Shine Football Academy</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Developing Champions On and Off the Pitch
        </p>
        <div className="space-x-4">
          <button className="bg-amber-200 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-300 transition">
            Enroll Now
          </button>
          <button className="border-2 border-amber-500 text-amber-500 px-8 py-3 rounded-lg font-bold hover:bg-amber-500 hover:text-gray-900 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
