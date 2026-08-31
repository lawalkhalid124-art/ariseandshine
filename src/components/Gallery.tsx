import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '@/images/compImg/img1.webp'
import img2 from '@/images/compImg/img2.webp'
import img3 from '@/images/compImg/img3.webp'
import img4 from '@/images/compImg/img4.webp'
import img5 from '@/images/compImg/img5.webp'
import img6 from '@/images/compImg/img6.webp'
import img7 from '@/images/compImg/img7.webp'
import img8 from '@/images/compImg/img8.webp'
import img9 from '@/images/compImg/img9.webp'
import img10 from '@/images/compImg/img10.webp'
import img11 from '@/images/compImg/img11.webp'
import img12 from '@/images/compImg/img12.webp'
import img13 from '@/images/compImg/img13.webp'
import img14 from '@/images/compImg/img14.webp'
import img15 from '@/images/compImg/img15.webp'

export default function Gallery({ featured = false }: { featured?: boolean }) {
  const images = [
    { id: 15, src: img15, alt: 'Football academy celebration', title: 'Moments That Matter', columns: 'span 5', rows: 'span 2' },
    { id: 8, src: img8, alt: 'Academy football action', title: 'Academy Energy', columns: 'span 3', rows: 'span 1' },
    { id: 4, src: img4, alt: 'Player dribbling during practice', title: 'Skill Build', columns: 'span 4', rows: 'span 1' },
    { id: 10, src: img10, alt: 'Footballers in a stadium moment', title: 'Big Stage', columns: 'span 4', rows: 'span 2' },
    { id: 1, src: img1, alt: 'Football training at Arise and Shine', title: 'Training Focus', columns: 'span 3', rows: 'span 1' },
    { id: 6, src: img6, alt: 'Coaching session with players', title: 'Coaching', columns: 'span 5', rows: 'span 1' },
    { id: 11, src: img11, alt: 'Academy players watching instructions', title: 'Coach Guidance', columns: 'span 4', rows: 'span 2' },
    { id: 2, src: img2, alt: 'Team huddle before a match', title: 'Match Day', columns: 'span 3', rows: 'span 1' },
    { id: 13, src: img13, alt: 'Group photo after training', title: 'After Training', columns: 'span 3', rows: 'span 1' },
    { id: 7, src: img7, alt: 'Young athletes in action', title: 'Youth Talent', columns: 'span 4', rows: 'span 1' },
    { id: 12, src: img12, alt: 'Community sports activity', title: 'Community', columns: 'span 5', rows: 'span 1' },
    { id: 3, src: img3, alt: 'Players celebrating together', title: 'Team Spirit', columns: 'span 3', rows: 'span 2' },
    { id: 9, src: img9, alt: 'Player laying a pass', title: 'Playmaker', columns: 'span 4', rows: 'span 1' },
    { id: 14, src: img14, alt: 'Players in a tactical exercise', title: 'Tactical Work', columns: 'span 5', rows: 'span 1' },
    { id: 5, src: img5, alt: 'Camp session with ball work', title: 'Camp Session', columns: 'span 5', rows: 'span 2' },
  ]

  const [selectedImage, setSelectedImage] = React.useState<(typeof images)[number] | null>(null)

  const visibleImages = featured ? images.slice(0, 3) : images

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>, image: (typeof images)[number]) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setSelectedImage(image)
    }
  }

  return (
    <>
      <section id="gallery" className="py-18 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div className="text-left">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">Our Story</p>
              <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">Gallery</h2>
            </div>
            {featured && (
              <Link
                to="/gallery"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-amber-400 hover:text-amber-600"
              >
                View more
              </Link>
            )}
          </div>

          <div className="gallery-grid">
            {visibleImages.map((image) => (
              <figure
                key={image.id}
                className="gallery-item"
                style={{
                  gridColumn: image.columns,
                  gridRow: image.rows,
                }}
                tabIndex={0}
                role="button"
                aria-label={`Open ${image.title} image`}
                onClick={() => setSelectedImage(image)}
                onKeyDown={(event) => handleKeyDown(event, image)}
              >
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                <div className="gallery-overlay">
                  <span className="gallery-badge">Arise & Shine</span>
                  <figcaption>{image.title}</figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="gallery-modal-backdrop" onClick={() => setSelectedImage(null)}>
          <div className="gallery-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="gallery-modal-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="gallery-modal-image" />
            <div className="gallery-modal-caption">{selectedImage.title}</div>
          </div>
        </div>
      )}
    </>
  )
}
