import React from 'react'
import heroBg from '../images/hero-background.png'
import { InteractiveHoverButton } from './ui/interactive-hover-button'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-4 text-center py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg font-hero leading-tight tracking-wider">Arise and Shine Football Academy</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 drop-shadow">Developing Champions On and Off the Pitch</p>
          <div className="flex justify-center gap-6 flex-wrap mt-8">
            <InteractiveHoverButton text="Enroll Now" className="bg-gradient-to-br from-amber-500 to-amber-600 text-gray-900 border-amber-500 hover:text-white w-64 h-16 text-lg !p-4 !rounded-2xl" />
            <InteractiveHoverButton text="Learn More" className="border-4 border-amber-400 text-amber-200 w-64 h-16 text-lg !p-4 !rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}