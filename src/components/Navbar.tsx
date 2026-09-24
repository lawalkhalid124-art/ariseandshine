import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import logo from '../images/arise_shine-logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[var(--bg-primary)] text-[var(--text-primary)] shadow-lg shadow-black/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Arise and Shine Football Academy logo" className="h-10 w-10 object-contain rounded-full border border-[var(--border-gold)] bg-white/90" />
            <span className="text-xl font-bold text-[var(--text-primary)]">Arise & Shine FA</span>
          </div>

          <div className="hidden space-x-8 md:flex">
            <a href="#home" className="transition hover:text-[var(--gold)]">Home</a>
            <a href="#about" className="transition hover:text-[var(--gold)]">About</a>
            <a href="#gallery" className="transition hover:text-[var(--gold)]">Gallery</a>
            <a href="#membership" className="transition hover:text-[var(--gold)]">Membership</a>
            <a href="#teams" className="transition hover:text-[var(--gold)]">Teams</a>
            <a href="#contact" className="transition hover:text-[var(--gold)]">Contact</a>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--text-primary)] md:hidden"
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 space-y-2 md:hidden">
            <a href="#home" className="block hover:text-[var(--gold)]">Home</a>
            <a href="#about" className="block hover:text-[var(--gold)]">About</a>
            <a href="#gallery" className="block hover:text-[var(--gold)]">Gallery</a>
            <a href="#membership" className="block hover:text-[var(--gold)]">Membership</a>
            <a href="#teams" className="block hover:text-[var(--gold)]">Teams</a>
            <a href="#contact" className="block hover:text-[var(--gold)]">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}
