import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Arise & Shine</h3>
            <p className="text-gray-400">Developing champions on and off the pitch.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-amber-500">Home</a></li>
              <li><a href="#about" className="hover:text-amber-500">About</a></li>
              <li><a href="#programs" className="hover:text-amber-500">Programs</a></li>
              <li><a href="#contact" className="hover:text-amber-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-amber-500">Youth Academy</a></li>
              <li><a href="#" className="hover:text-amber-500">Junior Development</a></li>
              <li><a href="#" className="hover:text-amber-500">Elite Program</a></li>
              <li><a href="#" className="hover:text-amber-500">Girls Football</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Follow Us</h4>
            <div className="space-y-2 text-gray-400">
              <p><a href="#" className="hover:text-amber-500">Facebook</a></p>
              <p><a href="#" className="hover:text-amber-500">Instagram</a></p>
              <p><a href="#" className="hover:text-amber-500">Twitter</a></p>
              <p><a href="#" className="hover:text-amber-500">YouTube</a></p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Arise and Shine Football Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
