import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Header } from './components/ui/header-1'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Gallery from './components/Gallery'
import Membership from './components/Membership'
import Teams from './components/Teams'
import Players from './components/Players'
import News from './components/News'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFoundPage from './components/NotFoundPage'

export default function App() {
  const location = useLocation()
  const breadcrumbs = React.useMemo(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean)

    if (!pathSegments.length) {
      return [{ label: 'Home', href: '/' }]
    }

    const pathAccumulator: Array<{ label: string; href: string }> = [{ label: 'Home', href: '/' }]

    let currentPath = ''

    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`
      const label = {
        about: 'About Us',
        programs: 'Programs',
        players: 'Players',
        gallery: 'Gallery',
        membership: 'Membership',
        teams: 'Teams',
        news: 'News & Updates',
        achievements: 'Achievements',
        contact: 'Contact Us',
      }[segment] ?? segment

      pathAccumulator.push({ label, href: currentPath })
    })

    return pathAccumulator
  }, [location.pathname])

  React.useEffect(() => {
    const pageTitles: Record<string, string> = {
      '/': 'Home',
      '/about': 'About Us',
      '/programs': 'Programs',
      '/players': 'Players',
      '/gallery': 'Gallery',
      '/membership': 'Membership',
      '/teams': 'Teams',
      '/news': 'News & Updates',
      '/achievements': 'Achievements',
      '/contact': 'Contact Us',
    }

    const pageDescriptions: Record<string, string> = {
      '/': 'Arise & Shine is a vibrant young football academy focused on skill-building, teamwork, and confident youth development.',
      '/about': 'Learn about Arise & Shine, our mission, values, and how we nurture confident football talent through structured development.',
      '/programs': 'Explore our football training programs designed to develop skills, discipline, teamwork, and match confidence for young players.',
      '/players': 'Meet the players of Arise & Shine and discover the talent, dedication, and growth driven by our academy culture.',
      '/gallery': 'Browse photos and moments from Arise & Shine training, matches, events, and community experiences.',
      '/membership': 'Join Arise & Shine and access elite training opportunities, academy support, and a pathway to football growth and excellence.',
      '/teams': 'Discover the teams, competitions, and football culture behind Arise & Shine and the players shaping our academy identity.',
      '/news': 'Stay updated with the latest Arise & Shine football news, events, player highlights, and academy milestones.',
      '/achievements': 'Celebrate Arise & Shine achievements, milestones, and proud moments that reflect our passion for football excellence.',
      '/contact': 'Get in touch with Arise & Shine for academy enquiries, partnerships, and football opportunities.',
    }

    const title = pageTitles[location.pathname] ?? 'Page'
    const description = pageDescriptions[location.pathname] ?? 'Arise & Shine develops young football talent through structured training, teamwork, and confidence-building opportunities.'

    document.title = `${title} | Arise & Shine`

    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null

    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }

    metaDescription.setAttribute('content', description)

    const canonicalUrl = `https://ariseandshine.com${location.pathname === '/' ? '' : location.pathname}`
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null

    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }

    canonicalLink.setAttribute('href', canonicalUrl)
  }, [location.pathname])

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  React.useEffect(() => {
    const revealItems = document.querySelectorAll('section, [data-reveal]')

    revealItems.forEach((element) => {
      element.classList.remove('reveal', 'is-visible')
    })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <Header />
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pb-2 pt-4 text-sm text-[#355f8a] sm:px-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-2">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1

          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span className="font-semibold text-[#1a2b3d]">{crumb.label}</span>
              ) : (
                <Link to={crumb.href} className="transition hover:text-[#d79017]">
                  {crumb.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
    <Routes>
      <Route path="/" element={<>
        <Hero />
        <About />
        <Programs />
        <Gallery featured />
      </>} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/players" element={<Players />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/news" element={<News />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    {location.pathname !== '/contact' && (
      <div className="fixed inset-x-3 bottom-3 z-50 flex gap-2 md:hidden">
        <a
          href="tel:+15551234567"
          className="flex flex-1 items-center justify-center rounded-2xl border border-[#f6c14a]/60 bg-[#1a2b3d] px-4 py-3 text-sm font-bold tracking-[0.08em] text-white shadow-lg shadow-[#1a2b3d]/30"
        >
          Call Us
        </a>
        <Link
          to="/contact"
          className="flex flex-1 items-center justify-center rounded-2xl border border-[#f6c14a] bg-[#f6c14a] px-4 py-3 text-sm font-bold tracking-[0.08em] text-[#1a2b3d] shadow-lg shadow-[#f6c14a]/30"
        >
          Enroll Now
        </Link>
      </div>
    )}
    <Footer />
  </div>
  )
}
