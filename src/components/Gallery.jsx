import React from 'react'

export default function Gallery() {
  const images = [
    { id: 1, title: 'Training Session' },
    { id: 2, title: 'Match Day' },
    { id: 3, title: 'Team Building' },
    { id: 4, title: 'Championship' },
    { id: 5, title: 'Coaching' },
    { id: 6, title: 'Community' }
  ]

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {images.map(image => (
            <div key={image.id} className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg h-64 flex items-center justify-center text-white font-bold text-2xl hover:shadow-lg transition">
              {image.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
