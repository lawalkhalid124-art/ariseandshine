import React, { useState } from 'react'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
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
    <section id="contact" className="bg-[var(--bg-primary)] py-16 text-[var(--text-primary)]">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-[var(--text-primary)]">Get In Touch</h2>

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          <div className="theme-panel rounded-2xl p-8">
            <h3 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)]"><MapPin className="h-5 w-5" /></span>
                <div>
                  <p className="font-bold text-[var(--text-primary)]">Location</p>
                  <p className="text-[var(--text-muted)]">123 Football Lane, Sports City</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)]"><Phone className="h-5 w-5" /></span>
                <div>
                  <p className="font-bold text-[var(--text-primary)]">Phone</p>
                  <p className="text-[var(--text-muted)]">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)]"><Mail className="h-5 w-5" /></span>
                <div>
                  <p className="font-bold text-[var(--text-primary)]">Email</p>
                  <p className="text-[var(--text-muted)]">info@ariseandshine.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)]"><Clock3 className="h-5 w-5" /></span>
                <div>
                  <p className="font-bold text-[var(--text-primary)]">Hours</p>
                  <p className="text-[var(--text-muted)]">Mon-Fri: 9AM - 6PM</p>
                  <p className="text-[var(--text-muted)]">Sat-Sun: 8AM - 4PM</p>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-[var(--border)] pt-8">
              <p className="mb-4 font-semibold text-[var(--gold)]">Ready to join us?</p>
              <InteractiveHoverButton text="Enroll Now" className="w-56 border-[var(--border-gold)] bg-[var(--gold)] text-[var(--bg-primary)] h-14 text-base !p-3 !rounded-2xl" />
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
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] focus:ring-4 focus:ring-[rgba(212,160,23,0.18)]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] focus:ring-4 focus:ring-[rgba(212,160,23,0.18)]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] focus:ring-4 focus:ring-[rgba(212,160,23,0.18)]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold)] focus:ring-4 focus:ring-[rgba(212,160,23,0.18)]"
            />
            <InteractiveHoverButton text="Send Message" className="w-full h-14 border-[var(--border-gold)] bg-[var(--gold)] text-[var(--bg-primary)] text-base !p-3 !rounded-xl" />
          </form>
        </div>
      </div>
    </section>
  )
}
