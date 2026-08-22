import heroBg from '../images/hero-background.png'
import { InteractiveHoverButton } from './ui/interactive-hover-button'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="absolute inset-0 bg-[#0f1b2d]/45"></div>
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-wider drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] md:text-6xl lg:text-7xl font-hero" style={{ color: '#ffffff' }}>Arise and Shine Football Academy</h1>
          <p className="mb-8 text-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] md:text-2xl" style={{ color: '#ffffff' }}>Developing Champions On and Off the Pitch</p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <InteractiveHoverButton to="/contact" text="Enroll Now" className="bg-gradient-to-r from-[#d7b36a] to-[#b9872d] text-[#1a2b3d] border-[#d7b36a] hover:text-[#1a2b3d] w-64 h-16 text-lg !p-4 !rounded-2xl shadow-lg shadow-[#d7b36a]/25" />
            <InteractiveHoverButton to="/programs" text="Learn More" className="border-2 border-white/80 bg-white/10 text-white backdrop-blur-sm w-64 h-16 text-lg !p-4 !rounded-2xl shadow-lg shadow-black/20" />
          </div>
        </div>
      </div>
    </section>
  )
}