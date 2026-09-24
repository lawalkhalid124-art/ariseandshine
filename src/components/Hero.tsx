import heroBg from '@/images/compImg/img13.webp'
import { InteractiveHoverButton } from './ui/interactive-hover-button'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,11,12,0.4) 0%, rgba(11,11,12,0.55) 40%, rgba(11,11,12,0.95) 100%), linear-gradient(90deg, rgba(11,11,12,0.9) 0%, rgba(11,11,12,0.3) 45%, rgba(11,11,12,0.75) 100%)',
        }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,160,23,0.20),transparent_32%)]"></div>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(11,11,12,0.8) 0%, rgba(11,11,12,0.15) 45%, rgba(11,11,12,0.8) 100%)' }}></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.85) 0.7px, transparent 0.7px)', backgroundSize: '10px 10px' }}></div>
      <div className="absolute inset-0">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(25%) contrast(1.1) brightness(0.85)',
            transform: 'scale(1.08)',
            opacity: 0.78,
          }}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--bg-primary)] to-transparent"></div>
      <div className="relative z-10 flex min-h-[76vh] items-center pt-20 pb-14">
        <div className="container mx-auto px-4 text-left">
          <div className="flex items-center gap-4 text-[var(--gold)]">
            <span className="h-px w-8 bg-[var(--gold)]" aria-hidden="true"></span>
            <p className="eyebrow mb-0 text-[var(--gold)] tracking-[0.08em]">Grassroots football culture</p>
          </div>

          <h1 className="font-hero mt-7 max-w-[14ch] text-5xl leading-[0.9] tracking-[-0.02em] drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)] md:text-6xl lg:text-[5.5rem]">
            <span className="block text-[var(--text-primary)]">ARISE AND SHINE</span>
            <span className="mt-2 block text-[var(--gold)]">FOOTBALL ACADEMY</span>
          </h1>

          <p className="mt-6 max-w-[45ch] text-base text-[var(--text-primary)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] md:text-xl">
            Developing champions on and off the pitch with discipline, identity, and elite ambition.
          </p>

          <div className="mt-8 flex flex-wrap justify-start gap-6">
            <InteractiveHoverButton
              to="/contact"
              text="Enroll Now"
              variant="primary"
              className="h-16 w-64 !rounded-full !px-6 !py-4 text-base shadow-[0_12px_30px_rgba(212,160,23,0.30)]"
            />
            <InteractiveHoverButton
              to="/programs"
              text="Learn More"
              variant="secondary"
              className="h-16 w-64 !rounded-full !px-6 !py-4 text-base backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}