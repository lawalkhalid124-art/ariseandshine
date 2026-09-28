import heroBg from '@/images/compImg/img13.webp'
import { InteractiveHoverButton } from './ui/interactive-hover-button'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[640px] overflow-hidden bg-[var(--bg-primary)] lg:min-h-screen">

      {/* MOBILE: full-bleed background image, hidden on lg+ */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src={heroBg}
          alt="Arise & Shine Football Academy players"
          className="h-full w-full object-cover"
          style={{
            filter: 'grayscale(10%) contrast(1.08) brightness(0.9)',
            objectPosition: '70% center',
          }}
        />
        {/* scrim for legibility on mobile only */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,11,12,0.25) 0%, rgba(11,11,12,0.35) 25%, rgba(11,11,12,0.8) 60%, rgba(11,11,12,0.97) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col lg:min-h-screen lg:flex-row">

        {/* CONTENT PANEL — transparent on mobile (image shows through), solid bg on desktop */}
        <div className="relative z-10 flex w-full flex-col justify-end px-5 pb-10 pt-32 sm:px-10 lg:w-[55%] lg:justify-center lg:bg-[var(--bg-primary)] lg:px-16 lg:py-24 xl:px-24" >

          <div className="flex items-center gap-3 text-[var(--gold)]">
            <span className="h-px w-8 shrink-0 bg-[var(--gold)]" />
            <p className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--gold)] sm:text-xs sm:tracking-[0.2em]">
              Football Academy
            </p>
          </div>

          <h1 className="mt-5 font-hero text-[2.9rem] uppercase min-[400px]:text-[3.25rem] sm:text-7xl lg:text-[4.75rem]" style={{ textShadow: '0 10px 28px rgba(0, 0, 0, 0.24)' }}>
            <span className="block text-[var(--text-primary)]">ARISE AND SHINE</span>
            <span className="block whitespace-nowrap text-[var(--gold)]">FOOTBALL ACADEMY</span>
          </h1>

          <p className="mt-4 max-w-[36ch] text-base text-[var(--text-primary)]/85 sm:text-lg">
            Building champions. On the pitch. For life.
          </p>

          <div className="mt-8 grid grid-cols-3 border-y border-[var(--border)] py-5">
            <div className="pr-3">
              <p className="font-hero text-3xl leading-none text-[var(--gold)]">2012</p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)] sm:text-xs">Founded</p>
            </div>
            <div className="border-x border-[var(--border)] px-3">
              <p className="font-hero text-3xl leading-none text-[var(--gold)]">U8–U18</p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)] sm:text-xs">Age Groups</p>
            </div>
            <div className="pl-3">
              <p className="font-hero text-3xl leading-none text-[var(--gold)]">2026</p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)] sm:text-xs">Champions</p>
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