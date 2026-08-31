import React from 'react'
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
    <section id="about" className="bg-transparent py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#355f8a]">About the Academy</p>
          <h2 className="mx-auto max-w-4xl text-3xl font-black tracking-tight text-[#1a2b3d] sm:text-4xl lg:text-5xl">
            Developing confident players with purpose, skill, and character.
          </h2>
        </div>

        <div className="mb-12 overflow-hidden rounded-[28px] border border-[#f6c14a]/25 bg-gradient-to-r from-[#162d45] via-[#1e3d5d] to-[#365f8c] p-7 shadow-[0_25px_50px_rgba(17,31,49,0.16)] lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.95fr] lg:items-center">
            <div>
              <p className="max-w-2xl text-base font-semibold leading-8 text-slate-100 sm:text-lg">
                Arise & Shine Football Academy is a grassroots youth football academy based in{' '}
                <span className="font-black text-[#f5d79c]">Ikorodu, Lagos State, Nigeria</span>. Founded on{' '}
                <span className="font-black text-[#f5d79c]">17th March 2012</span>, we help talented young boys from disadvantaged backgrounds grow into disciplined athletes and responsible leaders on and off the pitch.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-[0_18px_35px_rgba(15,23,42,0.18)]">
              <img src={aboutImage} alt="Arise and Shine Academy football session" className="h-[260px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b2d]/75 via-[#0f1b2d]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f5d79c]">Founded</p>
                <p className="mt-2 text-3xl font-black text-white">2012</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Ikorodu, Lagos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <article className="theme-panel rounded-[24px] p-6 shadow-[0_18px_35px_rgba(20,32,48,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(20,32,48,0.08)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f6c14a] text-lg font-bold text-[#1a2b3d]">
                  V
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[#1a2b3d]">Vision</h3>
                <p className="text-base font-semibold leading-7 text-[#355f8a]">
                  To discover, groom, and develop talented young footballers—especially children from underserved communities—into professional athletes and leaders who can represent Nigeria on the global stage.
                </p>
              </article>

              <article className="theme-panel rounded-[24px] p-6 shadow-[0_18px_35px_rgba(20,32,48,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(20,32,48,0.08)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1f3d5c] text-lg font-bold text-white">
                  M
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[#1a2b3d]">Mission</h3>
                <p className="text-base font-semibold leading-7 text-[#355f8a]">
                  To produce complete footballers by blending elite football education with character development through coaching, tactical learning, physical conditioning, academic support, and leadership training.
                </p>
              </article>
            </div>

            <article className="theme-panel rounded-[24px] p-6 shadow-[0_18px_35px_rgba(20,32,48,0.05)]">
              <div className="mb-4 flex items-center gap-3">
               <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f6c14a] text-lg font-bold text-[#1a2b3d]">
                  ★
                </div>
                <h3 className="text-2xl font-bold text-[#1a2b3d]">Our Motto</h3>
              </div>
              <p className="text-2xl font-semibold uppercase tracking-[0.14em] text-[#d79017]">
                In God We Trust
              </p>
              <p className="mt-3 text-base font-semibold leading-7 text-[#355f8a]">
                Faith, integrity, humility, and gratitude guide everything we do as a club and as a community.
              </p>
            </article>

            <article className="theme-panel rounded-[24px] p-6 shadow-[0_18px_35px_rgba(20,32,48,0.05)]">
              <h3 className="mb-5 text-2xl font-bold text-[#1a2b3d]">Core Values</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {values.map((value) => (
                  <div key={value.title} className="rounded-2xl border border-[#1a2b3d]/10 bg-white/70 p-4">
                    <h4 className="mb-2 text-lg font-bold text-[#d79017]">{value.title}</h4>
                    <p className="text-sm font-semibold leading-6 text-[#355f8a]">{value.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside className="space-y-6">
            <div className="theme-panel-soft rounded-[24px] p-6 shadow-[0_18px_35px_rgba(20,32,48,0.05)]">
              <h3 className="mb-4 text-2xl font-bold text-[#1a2b3d]">Club Identity</h3>
              <ul className="space-y-3 text-sm font-semibold leading-6 text-[#355f8a]">
                <li><span className="font-bold text-[#1a2b3d]">Founded:</span> 17 March 2012</li>
                <li><span className="font-bold text-[#1a2b3d]">Location:</span> Ikorodu, Lagos State, Nigeria</li>
                <li><span className="font-bold text-[#1a2b3d]">Type:</span> Youth football development academy</li>
                <li><span className="font-bold text-[#1a2b3d]">Focus:</span> Grassroots football development</li>
                <li><span className="font-bold text-[#1a2b3d]">Age Groups:</span> U8 to U18</li>
              </ul>
            </div>

            <div className="theme-panel rounded-[24px] p-6 shadow-[0_18px_35px_rgba(20,32,48,0.05)]">
              <h3 className="mb-4 text-2xl font-bold text-[#1a2b3d]">Achievements</h3>
              <div className="rounded-2xl bg-[#f6c14a] p-4">
                <p className="text-lg font-bold text-[#1a2b3d]">🏆 2026 Ikorodu Divisional League Champions</p>
              </div>
              <p className="mt-4 text-sm font-semibold leading-6 text-[#355f8a]">
                This section can be expanded with league titles, trophies, player call-ups, and alumni success stories.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}