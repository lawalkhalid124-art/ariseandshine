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
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-amber-500">📍</span>
                <div>
                  <p className="font-bold text-gray-900">Location</p>
                  <p className="text-gray-700">123 Football Lane, Sports City</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-amber-500">📞</span>
                <div>
                  <p className="font-bold text-gray-900">Phone</p>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-amber-500">✉️</span>
                <div>
                  <p className="font-bold text-gray-900">Email</p>
                  <p className="text-gray-700">info@ariseandshine.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-amber-500">🕐</span>
                <div>
                  <p className="font-bold text-gray-900">Hours</p>
                  <p className="text-gray-700">Mon-Fri: 9AM - 6PM</p>
                  <p className="text-gray-700">Sat-Sun: 8AM - 4PM</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-300">
              <p className="text-gray-700 font-semibold mb-4">Ready to join us?</p>
              <InteractiveHoverButton text="Enroll Now" className="bg-amber-500 text-gray-900 border-amber-500 w-56 h-14 text-base !p-3 !rounded-2xl" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
            />
            <InteractiveHoverButton text="Send Message" className="w-full bg-amber-500 text-gray-900 border-amber-500 h-14 text-base !p-3 !rounded-xl" />
          </form>
        </div>
      </div>
    </section>
  )
}
