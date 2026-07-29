import React, { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center font-bold">
              AS
            </div>
            <span className="text-xl font-bold">Arise & Shine</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-amber-500 transition">Home</a>
            <a href="#about" className="hover:text-amber-500 transition">About</a>
            <a href="#programs" className="hover:text-amber-500 transition">Programs</a>
            <a href="#gallery" className="hover:text-amber-500 transition">Gallery</a>
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
            <a href="#programs" className="block hover:text-amber-500">Programs</a>
            <a href="#gallery" className="block hover:text-amber-500">Gallery</a>
            <a href="#contact" className="block hover:text-amber-500">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}
