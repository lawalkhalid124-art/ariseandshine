import React from 'react'
import { Trophy, X } from 'lucide-react'
import img1 from '@/images/compImg/img1.webp'
import img2 from '@/images/compImg/img2.webp'
import img3 from '@/images/compImg/img3.webp'
import img4 from '@/images/compImg/img4.webp'
import img5 from '@/images/compImg/img5.webp'
import img7 from '@/images/compImg/img7.webp'
import img17 from '@/images/compImg/img17.png'
import img20 from '@/images/compImg/img20.png'
import img23 from '@/images/compImg/img23.png'

export default function Teams() {
  const teams = [
    {
      id: 1,
      name: 'U8s',
      desc: 'Introductory training for youngest players',
      summary: 'Young players learn the basics of movement, ball control, listening, and confidence in a fun environment.',
      image: img17,
      focus: ['Ball confidence', 'Basic technique', 'Team play']
    },
    {
      id: 2,
      name: 'U10s',
      desc: 'Skill development and small-sided games',
      summary: 'Players improve passing, dribbling and decision-making through guided games and weekly technical sessions.',
      image: img20,
      focus: ['Passing patterns', '1v1 skills', 'Small-sided games']
    },
    {
      id: 3,
      name: 'U12s',
      desc: 'Tactical awareness and competition',
      summary: 'This age group builds game understanding, positional awareness, and discipline in high-energy match play.',
      image: img23,
      focus: ['Tactical shape', 'Match awareness', 'Competition mindset']
    },
    {
      id: 4,
      name: 'Senior Squad',
      desc: 'Competitive team for older players',
      summary: 'The senior squad develops leadership, resilience, and advanced team play in competitive settings.',
      image: img4,
      focus: ['Leadership', 'High-level conditioning', 'Match intensity']
    },
    {
      id: 5,
      name: 'Coaching Staff',
      desc: 'Experienced coaches and support staff',
      summary: 'Our coaching team combines technical expertise, character-building, and player-first mentorship.',
      image: img7,
      focus: ['Player development', 'Mentorship', 'Safe growth']
    }
  ]

  const [selectedTeam, setSelectedTeam] = React.useState<(typeof teams)[number] | null>(null)
  const getImagePosition = (teamName: string) => (teamName === 'U10s' ? 'center center' : 'center 18%')

  return (
    <>
      <section id="teams" className="relative overflow-hidden bg-[var(--bg-primary)] py-20 text-[var(--text-primary)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,160,23,0.12),_transparent_40%)]" />
        <div className="container relative mx-auto px-4">
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="mb-4 inline-flex rounded-full border border-[var(--border)] bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
              Team Pathways
            </span>
            <h2 className="max-w-2xl text-4xl font-black tracking-[-0.04em] text-[var(--text-primary)] sm:text-5xl">
              Built for every stage of the journey
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[var(--text-muted)] sm:text-lg">
              From first-touch confidence to elite competition, each group is designed to grow players with purpose.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {teams.map(team => (
              <article
                key={team.id}
                className="group relative overflow-hidden rounded-[30px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(25,25,28,0.98),rgba(18,18,20,0.9))] shadow-[0_30px_80px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-[var(--gold)]/60 hover:shadow-[0_28px_80px_rgba(212,160,23,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_top,_rgba(212,160,23,0.18),_transparent_65%)]" />

                <div className="relative overflow-hidden">
                  <img
                    src={team.image}
                    alt={`${team.name} team`}
                    style={{ objectPosition: getImagePosition(team.name) }}
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--gold)]">Academy Group</p>
                    <h3 className="mt-2 text-3xl font-bold tracking-[-0.03em] text-white">{team.name}</h3>
                    <p className="mt-2 text-sm text-white/75">{team.desc}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-[var(--border)] bg-[var(--bg-card)]/80 p-5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)]/12 text-[var(--gold)] ring-1 ring-[var(--gold)]/20">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedTeam(team)}
                    className="inline-flex items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--gold)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--bg-primary)] transition-colors duration-200 hover:bg-[var(--gold-hover)]"
                  >
                    Learn more
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedTeam && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setSelectedTeam(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--bg-primary)] shadow-[0_30px_100px_rgba(0,0,0,0.45)] md:rounded-[30px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedTeam(null)}
              aria-label="Close team details"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-black/35 text-white transition hover:bg-black/50 md:right-4 md:top-4 md:h-10 md:w-10"
            >
              <X className="h-4 w-4 md:h-5 md:w-5" />
            </button>

            <div className="grid overflow-hidden md:grid-cols-[1.1fr_1fr]">
              <img
                src={selectedTeam.image}
                alt={`${selectedTeam.name} team`}
                style={{ objectPosition: getImagePosition(selectedTeam.name) }}
                className="h-56 w-full object-cover md:h-full md:min-h-[260px]"
              />

              <div className="space-y-5 p-5 sm:p-6 md:space-y-6 md:p-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--gold)]">Academy Group</p>
                  <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--text-primary)]">{selectedTeam.name}</h3>
                  <p className="mt-2 text-[var(--text-muted)]">{selectedTeam.desc}</p>
                </div>

                <p className="text-base leading-7 text-[var(--text-primary)]">{selectedTeam.summary}</p>

                <ul className="flex flex-wrap gap-2">
                  {selectedTeam.focus.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--gold)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
