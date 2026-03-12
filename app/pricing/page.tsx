import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'WashWala Pricing | Transparent Per-Item Laundry Rates',
  description: 'Simple, transparent per-item laundry pricing. Shirts ₹30, Pants ₹40, Sarees ₹60. No hidden charges, no surprises.',
  openGraph: {
    title: 'WashWala Pricing Plans',
    description: 'Clear, per-item pricing for laundry. See all rates before ordering.',
    url: 'https://washwala.app/pricing',
    type: 'website',
  },
}

export default function PricingPage() {
  return (
    <>
      <Navigation scrolled={false} />
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '100px', background: 'var(--cream)' }}>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h1 className="font-serif text-6xl font-black mb-4" style={{ color: 'var(--ink)' }}>
            Pricing Plans
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--ink-muted)', marginBottom: '30px' }}>
            Coming Soon
          </p>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🧺</div>
          <p style={{ fontSize: '1rem', color: 'var(--ink-light)' }}>
            We're preparing detailed pricing information. Check back soon!
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
