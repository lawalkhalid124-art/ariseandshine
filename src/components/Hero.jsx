import React from 'react'
import heroBg from '../images/hero-background.png'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>
      {/* Subtle black overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
n      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-4 text-center py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg font-hero leading-tight tracking-wider">Arise and Shine Football Academy</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 drop-shadow">Developing Champions On and Off the Pitch</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-br from-amber-500 to-amber-600 text-gray-900 px-8 py-3 rounded-lg font-bold hover:from-amber-600 hover:to-red-600 transition">Enroll Now</button>
            <button className="border-2 border-amber-400 text-amber-200 px-8 py-3 rounded-lg font-bold hover:bg-amber-500 hover:text-gray-900 transition">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}
