'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Ticker from '@/components/ticker'
import HowItWorks from '@/components/how-it-works'
import Features from '@/components/features-band'
import Pricing from '@/components/pricing'
import Trust from '@/components/trust'
import AppDownload from '@/components/app-download'
import Waitlist from '@/components/waitlist'
import FAQ from '@/components/faq'
import Footer from '@/components/footer'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="overflow-x-hidden">
      <Navigation scrolled={scrolled} />
      <Hero />
      <Ticker />
      <HowItWorks />
      <Features />
      <Pricing />
      <Trust />
      <AppDownload />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  )
}
