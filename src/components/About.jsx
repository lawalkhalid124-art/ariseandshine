import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 text-lg mb-6">
              Arise and Shine Football Academy is dedicated to nurturing young football talent with a holistic approach that emphasizes both athletic excellence and personal development.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Our academy combines world-class coaching, modern facilities, and a supportive environment where every player can reach their full potential.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-amber-500 text-2xl">✓</span>
                <div>
                  <h3 className="font-bold text-gray-900">Expert Coaching</h3>
                  <p className="text-gray-600">Certified coaches with professional experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-500 text-2xl">✓</span>
                <div>
                  <h3 className="font-bold text-gray-900">Modern Facilities</h3>
                  <p className="text-gray-600">State-of-the-art training grounds and equipment</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-500 text-2xl">✓</span>
                <div>
                  <h3 className="font-bold text-gray-900">Holistic Development</h3>
                  <p className="text-gray-600">Focus on character building and life skills</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg h-80 flex items-center justify-center text-white text-6xl">
            ⚽
          </div>
        </div>
      </div>
    </section>
  )
}
