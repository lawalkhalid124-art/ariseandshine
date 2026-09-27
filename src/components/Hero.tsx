import heroBg from '@/images/compImg/img13.webp'
import { InteractiveHoverButton } from './ui/interactive-hover-button'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)]">

      {/* MOBILE: full-bleed background image, hidden on lg+ */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src={heroBg}
          alt="Arise & Shine Football Academy players"
          className="h-full w-full object-cover"
          style={{ filter: 'grayscale(20%) contrast(1.1) brightness(0.8)' }}
        />
        {/* scrim for legibility on mobile only */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,11,12,0.55) 0%, rgba(11,11,12,0.65) 35%, rgba(11,11,12,0.95) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[1600px] flex-col items-center justify-center pt-2 lg:min-h-screen lg:flex-row">

        {/* CONTENT PANEL — transparent on mobile (image shows through), solid bg on desktop */}
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-16 sm:px-10 lg:w-[55%] lg:bg-[var(--bg-primary)] lg:px-16 xl:px-24 lg:justify-center lg:pt-12 lg:pb-12" >

          <div className="flex items-center gap-3 text-[var(--gold)]">
            <span className="h-px w-10 bg-[var(--gold)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">Grassroots Football Culture</p>
          </div>

          <div className="mt-6 font-hero text-[3.5rem] leading-[0.88] tracking-[-0.02em] sm:text-[4.5rem] lg:text-[5.25rem]" style={{ fontFamily: '"Bebas Neue", sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em', lineHeight: '0.88', textShadow: '0 10px 28px rgba(0, 0, 0, 0.24)' }}>
            <div className="block text-[var(--text-primary)]">ARISE AND SHINE</div>
            <div className="block text-[var(--gold)]">FOOTBALL ACADEMY</div>
          </div>

          <p className="mt-6 max-w-[42ch] text-lg text-[var(--text-muted)] sm:text-xl">
            Building champions. On the pitch. For life.
          </p>

          <div className="mt-8 flex gap-6 border-t border-[var(--border)] pt-5 sm:gap-8">
            <div>
              <p className="font-hero text-2xl text-[var(--gold)] sm:text-3xl">2012</p>
              <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">Founded</p>
            </div>
            <div>
              <p className="font-hero text-2xl text-[var(--gold)] sm:text-3xl">U8–U18</p>
              <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">Age Groups</p>
            </div>
            <div>
              <p className="font-hero text-2xl text-[var(--gold)] sm:text-3xl">2026</p>
              <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">League Champions</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <InteractiveHoverButton to="/contact" text="Enroll Now" variant="primary"
              className="h-14 !rounded-full !px-8 text-sm font-semibold" />
            <InteractiveHoverButton to="/programs" text="Learn More" variant="secondary"
              className="h-14 !rounded-full !px-8 text-sm font-semibold" />
          </div>
        </div>

        {/* DESKTOP-ONLY: image panel, hidden on mobile since it's now the bg */}
        <div className="relative hidden w-full lg:block lg:w-[45%] lg:min-h-screen overflow-hidden">
          <img
            src={heroBg}
            alt="Arise & Shine Football Academy players"
            className="h-full w-full object-cover"
            style={{ filter: 'grayscale(15%) contrast(1.08) saturate(0.9)' }}
          />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-primary)] to-transparent" />
        </div>
      </div>
    </section>
  )
}