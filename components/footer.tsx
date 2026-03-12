export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'rgba(255,255,255,0.7)', padding: '60px 5% 32px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '60px',
          marginBottom: '48px',
        }}
      >
        {/* Brand */}
        <div>
          <a href="#" className="font-serif text-3xl font-black no-underline" style={{ color: 'white', display: 'block', marginBottom: '16px' }}>
            Wash<span style={{ color: 'var(--teal-light)' }}>Wala</span>
          </a>
          <p style={{ fontSize: '0.88rem', lineHeight: '1.7', maxWidth: '280px' }}>
            Doorstep laundry service built like a delivery app. Dirty kapde in, saaf kapde out — from the comfort of your home. Launching in Mumbai.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 style={{ color: 'white', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Product
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['How It Works', 'Pricing Plans', 'Features', 'Download App'].map((item) => (
              <li key={item}>
                <a
                  href={'#' + item.toLowerCase().replace(/\s+/g, '')}
                  style={{
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--teal-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 style={{ color: 'white', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Company
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['About Us', 'Join Waitlist', 'Partner With Us', 'Careers'].map((item) => (
              <li key={item}>
                <a
                  href={'#' + item.toLowerCase().replace(/\s+/g, '')}
                  style={{
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--teal-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.8rem',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <span>© 2025 WashWala. All rights reserved.</span>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(42,157,143,0.15)',
            border: '1px solid rgba(42,157,143,0.3)',
            color: 'var(--teal-light)',
            padding: '5px 12px',
            borderRadius: '99px',
            fontFamily: 'JetBrains Mono',
            fontSize: '0.72rem',
          }}
        >
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--teal-light)',
              animation: 'pulse-dot 2s infinite',
            }}
          />
          Work in Progress · Concept Stage
        </div>
        <span>Made with ❤️ in Mumbai</span>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @media (max-width: 900px) {
          footer {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-brand {
            grid-column: 1 / -1 !important;
          }
        }
        @media (max-width: 600px) {
          footer {
            grid-template-columns: 1fr !important;
          }
          .footer-brand {
            grid-column: 1 !important;
          }
        }
      `}</style>
    </footer>
  )
}
