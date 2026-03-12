export default function AppDownload() {
  return (
    <section
      id="app"
      style={{
        background: 'linear-gradient(135deg, var(--ink), #2a2a4e)',
        color: 'white',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
        padding: '100px 5%',
      }}
    >
      <div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(42,157,143,0.2)',
            border: '1px solid rgba(42,157,143,0.4)',
            color: '#52b5a9',
            padding: '8px 18px',
            borderRadius: '99px',
            fontSize: '0.8rem',
            fontWeight: '600',
            marginBottom: '24px',
            fontFamily: 'JetBrains Mono',
          }}
        >
          ⚡ App In Development
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'JetBrains Mono',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#52b5a9',
            fontWeight: '500',
            marginBottom: '12px',
          }}
        >
          <span style={{ width: '24px', height: '2px', background: '#52b5a9', borderRadius: '99px' }} />
          Download the App
        </div>

        <h2 className="font-serif text-5xl font-black mb-6" style={{ color: 'white' }}>
          Your laundry, in your <span style={{ fontStyle: 'italic' }}>pocket.</span>
        </h2>

        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: '1.7', marginBottom: '36px', maxWidth: '550px' }}>
          The WashWala app is being built for iOS and Android — a Zomato-style UX, but for laundry. Schedule pickups, track orders live, and reorder in one tap. Join the waitlist to get early access the day we launch.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
          <a
            href="#waitlist"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(255,255,255,0.08)',
              border: '1.5px solid rgba(255,255,255,0.2)',
              borderRadius: '12px',
              padding: '14px 24px',
              color: 'white',
              textDecoration: 'none',
              transition: 'all 0.25s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--teal)'
              e.currentTarget.style.borderColor = 'var(--teal)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <span style={{ fontSize: '1.8rem' }}>🍎</span>
            <div>
              <span style={{ fontSize: '0.65rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                Coming soon to
              </span>
              <span style={{ fontSize: '1rem', fontWeight: '700', display: 'block' }}>App Store</span>
            </div>
          </a>
          <a
            href="#waitlist"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(255,255,255,0.08)',
              border: '1.5px solid rgba(255,255,255,0.2)',
              borderRadius: '12px',
              padding: '14px 24px',
              color: 'white',
              textDecoration: 'none',
              transition: 'all 0.25s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--teal)'
              e.currentTarget.style.borderColor = 'var(--teal)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <span style={{ fontSize: '1.8rem' }}>▶️</span>
            <div>
              <span style={{ fontSize: '0.65rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                Coming soon to
              </span>
              <span style={{ fontSize: '1rem', fontWeight: '700', display: 'block' }}>Google Play</span>
            </div>
          </a>
        </div>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {['Live order tracking', 'Full order history', 'Partner location on map', 'Digital invoices'].map((feature, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem' }}>
              <span style={{ color: '#52b5a9' }}>✓</span>
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Phone mockups - hidden on mobile */}
      <div style={{ display: 'none' }} className="hidden lg:flex"></div>

      <style>{`
        @media (max-width: 900px) {
          section {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
