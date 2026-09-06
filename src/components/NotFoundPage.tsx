import React from 'react'
import { ArrowLeft, Home, SearchX } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-5xl items-center justify-center px-4 py-16 sm:px-6">
      <div className="theme-panel w-full max-w-2xl rounded-[2rem] border border-[#f6c14a]/40 p-8 text-center shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-12">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f6c14a]/15 text-[#d79017]">
            <SearchX className="h-9 w-9" />
          </div>
        </div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-[#355f8a]">404 Error</p>
        <h1 className="text-4xl font-black tracking-tight text-[#1a2b3d] sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-5 max-w-lg text-base font-medium leading-7 text-[#355f8a]">
          The page you’re looking for may have moved, been removed, or never existed. Let’s get you back to the academy homepage.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f6c14a] px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#1a2b3d] shadow-lg shadow-[#f6c14a]/20 transition hover:bg-[#f8d673]"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#1a2b3d]/15 bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#1a2b3d] transition hover:border-[#f6c14a] hover:text-[#d79017]"
          >
            <ArrowLeft className="h-4 w-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
