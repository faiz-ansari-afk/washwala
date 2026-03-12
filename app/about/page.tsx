import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'About WashWala | Our Mission to Revolutionize Laundry',
  description: 'Learn about WashWala\'s mission to revolutionize laundry in Mumbai with transparent pricing, live tracking, and garment safety guarantees.',
  openGraph: {
    title: 'About WashWala - Our Laundry Revolution',
    description: 'Transforming laundry service in Mumbai with transparency, technology, and convenience.',
    url: 'https://washwala.app/about',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <Navigation scrolled={false} />
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '100px', background: 'var(--cream)' }}>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h1 className="font-serif text-6xl font-black mb-4" style={{ color: 'var(--ink)' }}>
            About WashWala
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--ink-muted)', marginBottom: '30px' }}>
            Coming Soon
          </p>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📱</div>
          <p style={{ fontSize: '1rem', color: 'var(--ink-light)' }}>
            Learn more about our mission to revolutionize laundry in Mumbai. Launching soon!
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
