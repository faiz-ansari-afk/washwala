'use client'

import { useEffect, useState } from 'react'

interface NavigationProps {
  scrolled: boolean
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-[5%] py-[18px] flex items-center justify-between transition-shadow duration-300 ${
        isScrolled
          ? 'backdrop-blur-[16px] bg-[var(--cream)]/95 shadow-sm border-b border-[rgba(42,157,143,0.1)]'
          : 'backdrop-blur-[16px] bg-[rgba(253,248,242,0.88)] border-b border-[rgba(42,157,143,0.1)]'
      }`}
    >
      {/* Logo */}
      <a href="#" className="font-serif text-[1.6rem] font-black text-[var(--ink)] no-underline">
        Wash<span className="text-[var(--teal)]">Wala</span>
      </a>

      {/* Links - Hidden on mobile */}
      <ul className="hidden md:flex gap-8 list-none">
        <li>
          <a
            href="#how"
            className="text-[0.9rem] font-medium text-[var(--ink-muted)] no-underline hover:text-[var(--teal)] transition-colors duration-200"
          >
            How it Works
          </a>
        </li>
        <li>
          <a
            href="#pricing"
            className="text-[0.9rem] font-medium text-[var(--ink-muted)] no-underline hover:text-[var(--teal)] transition-colors duration-200"
          >
            Plans
          </a>
        </li>
        <li>
          <a
            href="#app"
            className="text-[0.9rem] font-medium text-[var(--ink-muted)] no-underline hover:text-[var(--teal)] transition-colors duration-200"
          >
            App
          </a>
        </li>
        <li>
          <a
            href="#waitlist"
            className="text-[0.9rem] font-medium text-[var(--ink-muted)] no-underline hover:text-[var(--teal)] transition-colors duration-200"
          >
            Waitlist
          </a>
        </li>
      </ul>

      {/* CTA Button */}
      <a
        href="#waitlist"
        className="bg-[var(--teal)] text-white px-6 py-[10px] rounded-full text-[0.9rem] font-semibold no-underline transition-all duration-200 hover:bg-[var(--teal-light)] hover:-translate-y-0.5 inline-block"
      >
        Join Waitlist →
      </a>
    </nav>
  )
}
