import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Membership from './components/Membership'
import Teams from './components/Teams'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Membership />
      <Teams />
      <Contact />
      <Footer />
    </div>
  )
}
