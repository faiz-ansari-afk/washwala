import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

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
