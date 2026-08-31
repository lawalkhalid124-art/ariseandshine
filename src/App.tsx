import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
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

export default function App() {
  const location = useLocation()

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  React.useEffect(() => {
    const revealItems = document.querySelectorAll('section, [data-reveal]')

    if (!revealItems.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    revealItems.forEach((element) => {
      element.classList.add('reveal')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <Header />
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
      </Routes>
      <Footer />
    </div>
  )
}
