import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
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
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
            />
            <button
              type="submit"
              className="w-full bg-amber-500 text-gray-900 py-3 rounded-lg font-bold hover:bg-amber-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
