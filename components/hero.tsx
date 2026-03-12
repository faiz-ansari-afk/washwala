'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen pt-[140px] pb-20 px-[5%] overflow-hidden"
      id="home"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
      }}
    >
      {/* Blob decorations */}
      <div
        className="absolute rounded-full blur-[80px] opacity-35 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #a8edea, var(--teal-pale))',
          top: '-100px',
          right: '-100px',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full blur-[80px] opacity-35 pointer-events-none"
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, #ffd6cc, #fef3ee)',
          bottom: '50px',
          left: '-80px',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes phoneFloat {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        @keyframes progressPulse {
          0%, 100% { width: 65%; }
          50% { width: 72%; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>

      {/* Hero Content */}
      <div className="hero-content">
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--teal-pale)',
            color: 'var(--teal)',
            padding: '6px 16px',
            borderRadius: '99px',
            fontSize: '0.78rem',
            fontWeight: '600',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '24px',
            animation: 'fadeUp 0.6s ease both',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: 'var(--teal)',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }}
          />
          Concept Stage · Launching Mumbai
        </div>

        <h1
          className="font-serif text-6xl md:text-7xl font-black leading-tight mb-4"
          style={{
            animation: 'fadeUp 0.7s ease 0.1s both',
          }}
        >
          Laundry, <span style={{ color: 'var(--teal)' }}>done</span>
          <br />
          <span style={{ display: 'block', fontStyle: 'italic', color: 'var(--coral)', marginTop: '8px' }}>
            while you chill.
          </span>
        </h1>

        <p
          style={{
            fontFamily: 'JetBrains Mono',
            color: 'var(--ink-muted)',
            fontSize: '1rem',
            margin: '18px 0 32px',
            animation: 'fadeUp 0.7s ease 0.2s both',
          }}
        >
          <em style={{ color: 'var(--teal)', fontStyle: 'normal', fontWeight: '500' }}>Dirty kapde in. Saaf kapde out.</em> Bas itna kaam hai.
        </p>

        <p
          style={{
            color: 'var(--ink-muted)',
            fontSize: '1.05rem',
            lineHeight: '1.7',
            maxWidth: '520px',
            marginBottom: '40px',
            animation: 'fadeUp 0.7s ease 0.3s both',
          }}
        >
          WashWala is a doorstep laundry service built like a delivery app — think Zomato, but for your dirty clothes. Schedule a pickup, choose your wash type, and get <strong>fresh, clean clothes delivered back</strong> to you. Per-item pricing, transparent billing, live tracking — all in one app.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '40px',
            animation: 'fadeUp 0.7s ease 0.4s both',
          }}
        >
          <a
            href="#waitlist"
            style={{
              background: 'var(--teal)',
              color: 'white',
              padding: '15px 32px',
              borderRadius: '99px',
              fontSize: '1rem',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.25s',
              boxShadow: '0 6px 24px rgba(42,157,143,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 10px 32px rgba(42,157,143,0.4)'
              e.currentTarget.style.background = 'var(--teal-light)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(42,157,143,0.3)'
              e.currentTarget.style.background = 'var(--teal)'
            }}
          >
            🧺 Join the Waitlist
          </a>
          <a
            href="#pricing"
            style={{
              background: 'transparent',
              color: 'var(--ink)',
              padding: '14px 28px',
              borderRadius: '99px',
              border: '2px solid rgba(26,26,46,0.15)',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--teal)'
              e.currentTarget.style.color = 'var(--teal)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(26,26,46,0.15)'
              e.currentTarget.style.color = 'var(--ink)'
            }}
          >
            View Plans
          </a>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '32px',
            marginTop: '48px',
            animation: 'fadeUp 0.7s ease 0.5s both',
            flexWrap: 'wrap',
          }}
        >
          {[
            { num: '4', label: 'Wash Types' },
            { num: '₹30', label: 'Starting Price' },
            { num: '24h', label: 'Turnaround' },
          ].map((stat, i) => (
            <div key={i}>
              <span
                className="font-serif text-4xl font-black"
                style={{ color: 'var(--ink)', display: 'block' }}
              >
                {stat.num}
              </span>
              <span style={{ fontSize: '0.82rem', color: 'var(--ink-light)', fontWeight: '500' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Phone Visual - Hidden on mobile */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          animation: 'fadeUp 0.8s ease 0.3s both',
        }}
        className="hidden lg:flex"
      >
        <Image
          src="/hero-phone-mockup.jpg"
          alt="WashWala app mockup showing live order tracking"
          width={280}
          height={540}
          quality={75}
          priority={false}
          style={{
            borderRadius: '40px',
            boxShadow: '0 40px 100px rgba(26,26,46,0.18), 0 0 0 8px rgba(42,157,143,0.08)',
            border: '2px solid rgba(42,157,143,0.12)',
            animation: 'phoneFloat 6s ease-in-out infinite',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Fallback Phone Mockup - Mobile friendly alternative */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          animation: 'fadeUp 0.8s ease 0.3s both',
        }}
        className="lg:hidden"
      >
        <div
          style={{
            width: '280px',
            height: '540px',
            background: 'var(--white)',
            borderRadius: '40px',
            boxShadow: '0 40px 100px rgba(26,26,46,0.18), 0 0 0 8px rgba(42,157,143,0.08)',
            position: 'relative',
            overflow: 'hidden',
            border: '2px solid rgba(42,157,143,0.12)',
            animation: 'phoneFloat 6s ease-in-out infinite',
          }}
        >
          <div
            style={{
              width: '100px',
              height: '26px',
              background: 'var(--ink)',
              borderRadius: '0 0 18px 18px',
              margin: '0 auto',
            }}
          />
          <div style={{ padding: '16px' }}>
            {/* Phone content */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <span
                className="font-serif"
                style={{ fontSize: '1rem', fontWeight: '900', color: 'var(--ink)' }}
              >
                WashWala
              </span>
              <span
                style={{
                  marginLeft: 'auto',
                  fontSize: '0.65rem',
                  color: 'var(--teal)',
                  fontFamily: 'JetBrains Mono',
                  background: 'var(--teal-pale)',
                  padding: '3px 8px',
                  borderRadius: '99px',
                }}
              >
                ● Live
              </span>
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, var(--teal), var(--teal-light))',
                borderRadius: '16px',
                padding: '16px',
                marginBottom: '12px',
                color: 'white',
              }}
            >
              <div style={{ fontSize: '0.65rem', opacity: 0.8, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Current Order
              </div>
              <div style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '8px' }}>
                3 items — Regular Wash
              </div>
              <div
                style={{
                  background: 'rgba(255,255,255,0.25)',
                  height: '5px',
                  borderRadius: '99px',
                  overflow: 'hidden',
                  marginBottom: '6px',
                }}
              >
                <div
                  style={{
                    width: '65%',
                    height: '100%',
                    background: 'white',
                    borderRadius: '99px',
                    animation: 'progressPulse 2s ease-in-out infinite',
                  }}
                />
              </div>
              <div style={{ fontSize: '0.7rem', opacity: 0.85 }}>🚗 Delivery in ~2 hours</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { emoji: '👔', name: 'Shirt (2x)', type: 'Regular Wash', price: '₹60' },
                { emoji: '👖', name: 'Jeans (1x)', type: 'Regular Wash', price: '₹40' },
                { emoji: '🧥', name: 'Jacket (1x)', type: 'Dry Clean', price: '₹80' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'var(--warm-50)',
                    borderRadius: '10px',
                    padding: '10px 12px',
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{item.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--ink)' }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--ink-light)' }}>
                      {item.type}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--teal)' }}>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '12px',
                background: 'var(--teal-pale)',
                borderRadius: '12px',
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', fontWeight: '500' }}>
                Total Paid
              </span>
              <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--teal)' }}>
                ₹180
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.72rem',
          color: 'var(--ink-light)',
          fontFamily: 'JetBrains Mono',
          letterSpacing: '0.08em',
          animation: 'fadeUp 1s ease 1s both',
        }}
      >
        <span>scroll</span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--teal), transparent)',
            animation: 'scrollLine 2s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 900px) {
          section {
            grid-template-columns: 1fr !important;
            padding-top: 120px !important;
          }
        }
      `}</style>
    </section>
  )
}
