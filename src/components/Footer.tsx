import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/arise_shine-logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#edf4fb] py-12 text-[#1a2b3d]">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center space-x-3">
              <img src={logo} alt="Arise and Shine Logo" className="h-10 w-10 object-contain rounded-full border border-[#d7b36a]/40 bg-white/90" />
              <h3 className="text-xl font-bold text-[#1a2b3d]">Arise & Shine FA</h3>
            </div>
            <p className="text-[#355f8a]">Developing champions on and off the pitch.</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#b9872d]">Quick Links</h4>
            <ul className="space-y-2 text-[#1a2b3d]">
              <li><Link to="/" className="transition hover:text-[#b9872d]">Home</Link></li>
              <li><Link to="/about" className="transition hover:text-[#b9872d]">About</Link></li>
              <li><Link to="/programs" className="transition hover:text-[#b9872d]">Programs</Link></li>
              <li><Link to="/contact" className="transition hover:text-[#b9872d]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#b9872d]">Programs</h4>
            <ul className="space-y-2 text-[#1a2b3d]">
              <li><Link to="/programs" className="transition hover:text-[#b9872d]">Youth Academy</Link></li>
              <li><Link to="/programs" className="transition hover:text-[#b9872d]">Junior Development</Link></li>
              <li><Link to="/programs" className="transition hover:text-[#b9872d]">Elite Program</Link></li>
              <li><Link to="/programs" className="transition hover:text-[#b9872d]">Girls Football</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#b9872d]">Follow Us</h4>
            <div className="space-y-2 text-[#1a2b3d]">
              <p><a href="#" className="transition hover:text-[#b9872d]">Facebook</a></p>
              <p><a href="#" className="transition hover:text-[#b9872d]">Instagram</a></p>
              <p><a href="#" className="transition hover:text-[#b9872d]">Twitter</a></p>
              <p><a href="#" className="transition hover:text-[#b9872d]">YouTube</a></p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a2b3d]/10 pt-8 text-center text-[#1a2b3d]">
          <p>&copy; 2024 Arise and Shine Football Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
