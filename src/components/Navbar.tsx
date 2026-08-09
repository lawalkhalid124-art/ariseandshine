import React, { useState } from 'react'
import logo from '../images/arise_shine-logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white text-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Arise and Shine Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold">Arise & Shine</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-amber-500 transition">Home</a>
            <a href="#about" className="hover:text-amber-500 transition">About</a>
            <a href="#gallery" className="hover:text-amber-500 transition">Gallery</a>
            <a href="#membership" className="hover:text-amber-500 transition">Membership</a>
            <a href="#teams" className="hover:text-amber-500 transition">Teams</a>
            <a href="#contact" className="hover:text-amber-500 transition">Contact</a>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-amber-500 text-2xl"
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <a href="#home" className="block hover:text-amber-500">Home</a>
            <a href="#about" className="block hover:text-amber-500">About</a>
            <a href="#gallery" className="block hover:text-amber-500">Gallery</a>
            <a href="#membership" className="block hover:text-amber-500">Membership</a>
            <a href="#teams" className="block hover:text-amber-500">Teams</a>
            <a href="#contact" className="block hover:text-amber-500">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}
