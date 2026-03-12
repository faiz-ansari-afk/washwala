'use client'

import { useEffect } from 'react'

const features = [
  {
    icon: '📍',
    title: 'Doorstep Pickup & Delivery',
    desc: 'Schedule a slot, we collect from home and deliver back clean. No visits to the local dhobi, no waiting around.',
  },
  {
    icon: '💰',
    title: 'Per-Item Transparent Pricing',
    desc: 'Shirt ₹30, pants ₹40, saree ₹60 — full price list visible before you confirm. Zero surprises on your bill.',
  },
  {
    icon: '📱',
    title: 'Live Order Tracking',
    desc: 'Track your laundry like a Swiggy order. See pickup, washing, and delivery status updated in real time.',
  },
  {
    icon: '🫧',
    title: '4 Wash Types',
    desc: 'Regular, Gentle, Dry Clean, and Steam Press. Each garment gets exactly the treatment it needs.',
  },
  {
    icon: '🔁',
    title: 'Re-order in One Tap',
    desc: 'Your order history saves everything. Same clothes, same wash type — just tap to repeat.',
  },
  {
    icon: '🛡️',
    title: 'Garment Safety Guarantee',
    desc: 'Every item is photographed at pickup and delivery. If anything goes wrong, we make it right.',
  },
]

export default function FeaturesBand() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" style={{ padding: '100px 5%' }}>

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Label */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'JetBrains Mono',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--teal)',
          fontWeight: '500',
          marginBottom: '12px',
        }}
      >
        <span
          style={{
            width: '24px',
            height: '2px',
            background: 'var(--teal)',
            borderRadius: '99px',
          }}
        />
        Why WashWala
      </div>

      {/* Heading */}
      <h2
        className="font-serif text-5xl font-black mb-4"
        style={{ lineHeight: '1.15', color: 'var(--ink)' }}
      >
        Everything you'd{' '}
        <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>want.</span>
      </h2>

      {/* Description */}
      <p
        className="reveal"
        style={{
          fontSize: '1rem',
          color: 'var(--ink-muted)',
          maxWidth: '560px',
          lineHeight: '1.7',
          marginBottom: '60px',
        }}
      >
        Built from the ground up for people who want clean clothes without the effort — or the surprises.
      </p>

      {/* Feature Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px',
        }}
      >
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="reveal"
            style={{
              background: 'var(--white)',
              borderRadius: '20px',
              padding: '32px 28px',
              border: '1px solid rgba(42,157,143,0.1)',
              transition: 'all 0.3s',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow =
                '0 8px 32px rgba(42,157,143,0.12)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '16px' }}>
              {feature.icon}
            </div>

            <h3
              style={{
                fontSize: '1rem',
                fontWeight: '700',
                marginBottom: '10px',
                color: 'var(--ink)',
              }}
            >
              {feature.title}
            </h3>

            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--ink-muted)',
                lineHeight: '1.6',
              }}
            >
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}