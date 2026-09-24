import React from 'react'
import { Award, Medal, ShieldCheck, Star } from 'lucide-react'
import aboutImage from '@/images/compImg/img5.webp'

const values = [
  {
    title: 'Discipline',
    description: 'Respect, structure, and accountability in training and in life.',
  },
  {
    title: 'Dedication',
    description: 'Consistent effort and commitment to continuous improvement.',
  },
  {
    title: 'Development',
    description: 'Holistic growth in technical, tactical, physical, and mental areas.',
  },
  {
    title: 'Dominance',
    description: 'A winning mindset built with integrity, professionalism, and excellence.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-[var(--bg-primary)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center gap-4">
          <p className="eyebrow text-[var(--gold)]">ABOUT THE ACADEMY</p>
          <span className="h-px w-24 bg-[var(--gold)]" aria-hidden="true" />
        </div>
        <div className="mb-10">
          <h2 className="mx-auto max-w-4xl text-4xl font-black tracking-[-0.02em] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            Developing confident players with <span className="text-[var(--gold)]">purpose, skill, and character</span>.
          </h2>
        </div>

        <div className="mb-12 overflow-hidden rounded-[16px] border border-[var(--border-gold)] bg-[var(--bg-primary)] p-0 shadow-[0_25px_50px_rgba(0,0,0,0.35)] lg:p-0">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="p-6 lg:p-10">
              <p className="max-w-[55ch] text-base font-medium leading-7 text-[var(--text-muted)] sm:text-lg">
                Arise & Shine Football Academy is a grassroots youth football academy based in{' '}
                <span className="font-semibold text-[var(--text-primary)]">Ikorodu, Lagos State, Nigeria</span>. Founded on{' '}
                <span className="font-semibold text-[var(--text-primary)]">17th March 2012</span>, we help talented young boys from disadvantaged backgrounds grow into disciplined athletes and responsible leaders on and off the pitch.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[16px] border border-[var(--border-gold)] bg-black/20 shadow-[0_18px_35px_rgba(0,0,0,0.25)] lg:rounded-none lg:border-0 lg:shadow-none">
              <img src={aboutImage} alt="Arise and Shine Academy football session" className="h-[260px] w-full object-cover lg:h-full" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.9),transparent_60%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                <p className="eyebrow text-[var(--gold)]">FOUNDED</p>
                <p className="mt-2 font-[Space_Grotesk] text-[56px] font-bold leading-none text-white">2012</p>
                <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">IKORODU, LAGOS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <article className="group rounded-[16px] border border-[var(--border-gold)] bg-[var(--bg-card)] p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_16px_28px_rgba(212,160,23,0.08)]">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[var(--gold)] bg-transparent text-[var(--gold)]">
                  <Star className="h-4 w-4" />
                </div>
                <h3 className="mb-3 text-[20px] font-bold text-[var(--text-primary)]">Vision</h3>
                <p className="text-[15px] leading-7 text-[var(--text-muted)]">
                  To discover, groom, and develop talented young footballers—especially children from underserved communities—into professional athletes and leaders who can represent Nigeria on the global stage.
                </p>
              </article>
    
              <article className="group rounded-[16px] border border-[var(--border-gold)] bg-[var(--bg-card)] p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_16px_28px_rgba(212,160,23,0.08)]">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[var(--gold)] bg-transparent text-[var(--gold)]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h3 className="mb-3 text-[20px] font-bold text-[var(--text-primary)]">Mission</h3>
                <p className="text-[15px] leading-7 text-[var(--text-muted)]">
                  To produce complete footballers by blending elite football education with character development through coaching, tactical learning, physical conditioning, academic support, and leadership training.
                </p>
              </article>
            </div>
   
            <article className="rounded-[16px] border border-[var(--border-gold)] bg-[var(--bg-card)] p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_16px_28px_rgba(212,160,23,0.08)]">
              <div className="mb-4 flex items-center gap-3">
               <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[var(--gold)] bg-transparent text-[var(--gold)]">
                 <Medal className="h-4 w-4" />
                </div>
               <p className="eyebrow text-[var(--gold)]">Our Motto</p>
              </div>
              <p className="text-[40px] font-bold uppercase tracking-[0.02em] text-[var(--gold)]">
                IN GOD WE TRUST
              </p>
              <p className="mt-3 max-w-[50ch] text-[16px] leading-7 text-[var(--text-muted)]">
                Faith, integrity, humility, and gratitude guide everything we do as a club and as a community.
              </p>
            </article>
  
            <article className="rounded-[16px] border border-[var(--border-gold)] bg-[var(--bg-card)] p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_16px_28px_rgba(212,160,23,0.08)]">
              <h3 className="mb-5 text-[20px] font-bold text-[var(--text-primary)]">Core Values</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((value) => (
                  <div key={value.title} className="rounded-[16px] border border-[var(--border-gold)] bg-[var(--bg-card)] p-4 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_16px_28px_rgba(212,160,23,0.08)]">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-[12px] border border-[var(--border-gold)] bg-transparent text-[32px] font-bold text-[var(--gold)]">
                      {value.title.charAt(0)}
                    </div>
                    <h4 className="mb-2 text-[18px] font-bold text-[var(--text-primary)]">{value.title}</h4>
                    <p className="text-[14px] leading-6 text-[var(--text-muted)]">{value.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
  
          <aside className="space-y-6">
            <div className="rounded-[16px] border border-[var(--border-gold)] bg-[var(--bg-card)] p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_16px_28px_rgba(212,160,23,0.08)]">
              <h3 className="mb-5 text-[20px] font-bold text-[var(--text-primary)]">Club Identity</h3>
              <ul className="divide-y divide-[var(--border)]">
                <li className="flex items-center justify-between gap-4 py-3">
                  <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">Founded</span>
                  <span className="text-[15px] font-medium text-[var(--text-primary)]">17 March 2012</span>
                </li>
                <li className="flex items-center justify-between gap-4 py-3">
                  <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">Location</span>
                  <span className="text-[15px] font-medium text-[var(--text-primary)]">Ikorodu, Lagos State, Nigeria</span>
                </li>
                <li className="flex items-center justify-between gap-4 py-3">
                  <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">Type</span>
                  <span className="text-[15px] font-medium text-[var(--text-primary)]">Youth football development academy</span>
                </li>
                <li className="flex items-center justify-between gap-4 py-3">
                  <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">Focus</span>
                  <span className="text-[15px] font-medium text-[var(--text-primary)]">Grassroots football development</span>
                </li>
                <li className="flex items-center justify-between gap-4 py-3">
                  <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">Age Groups</span>
                  <span className="text-[15px] font-medium text-[var(--text-primary)]">U8 to U18</span>
                </li>
              </ul>
            </div>
   
            <div className="theme-panel rounded-[24px] p-6 shadow-[0_18px_35px_rgba(0,0,0,0.18)]">
              <h3 className="mb-4 text-2xl font-bold text-[var(--text-primary)]">Achievements</h3>
              <div className="rounded-2xl bg-[var(--gold)] p-4">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-[var(--bg-primary)]" />
                  <p
                    className="text-[15px] font-black leading-5 text-[var(--bg-primary)]"
                    style={{ color: 'var(--bg-primary)', opacity: 1 }}
                  >
                    2026 Ikorodu Divisional League Champions
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold leading-6 text-[var(--text-muted)]">
                This section can be expanded with league titles, trophies, player call-ups, and alumni success stories.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}