import React, { useState } from 'react'
import { InteractiveHoverButton } from './ui/interactive-hover-button'

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="bg-[#f5f9ff] py-16 text-[#1a2b3d]">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-[#1a2b3d]">Get In Touch</h2>

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          <div className="theme-panel rounded-2xl p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#1a2b3d]">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-[#d79017]">📍</span>
                <div>
                  <p className="font-bold text-[#1a2b3d]">Location</p>
                  <p className="text-[#355f8a]">123 Football Lane, Sports City</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-[#d79017]">📞</span>
                <div>
                  <p className="font-bold text-[#1a2b3d]">Phone</p>
                  <p className="text-[#355f8a]">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-[#d79017]">✉️</span>
                <div>
                  <p className="font-bold text-[#1a2b3d]">Email</p>
                  <p className="text-[#355f8a]">info@ariseandshine.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-[#d79017]">🕐</span>
                <div>
                  <p className="font-bold text-[#1a2b3d]">Hours</p>
                  <p className="text-[#355f8a]">Mon-Fri: 9AM - 6PM</p>
                  <p className="text-[#355f8a]">Sat-Sun: 8AM - 4PM</p>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-[#1a2b3d]/10 pt-8">
              <p className="mb-4 font-semibold text-[#355f8a]">Ready to join us?</p>
              <InteractiveHoverButton text="Enroll Now" className="w-56 border-[#f6c14a]/50 bg-[#f6c14a] text-[#1a2b3d] h-14 text-base !p-3 !rounded-2xl" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="theme-panel space-y-6 rounded-2xl p-8">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:border-[#f6c14a]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:border-[#f6c14a]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:border-[#f6c14a]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:border-[#f6c14a]"
            />
            <InteractiveHoverButton text="Send Message" className="w-full h-14 border-[#f6c14a]/50 bg-[#f6c14a] text-[#1a2b3d] text-base !p-3 !rounded-xl" />
          </form>
        </div>
      </div>
    </section>
  )
}
