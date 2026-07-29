import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
